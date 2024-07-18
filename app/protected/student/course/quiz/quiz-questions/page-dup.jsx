
import { useEffect, useState } from "react";
import './quiz.css'
import quiz from './quiz.json'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';



export default function Quiz() {
    const [quiz, setQuiz] = useState(quiz);
    const [index, setIndex] = useState(null);
    const [start,setStart] = useState("");
    const [selectedOption, setSelectedOption] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setQuiz(quiz.sort((a, b) => a.order - b.order));
                console.log("quiz", quiz)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [quiz]);

    const handleClick = () => {
        console.log("quiz", quiz[index])
        if (index === quiz.length - 1) {
            setStart("Finish")
            setIndex(null)
        } else {
            setIndex(index + 1)
            setStart('Next');

        }
    };


    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
            <div className="questionnaire-container">
                {
                    index === null ? <div className="header-section">{mainText}</div> : ''
                }
                {
                    index === null ? <div className="question-section">Please complete this quiz</div> :
                        <div className="question-section">
                            <div >
                                {questions[index].description}
                            </div>
                            <div>
                                <FormControl variant="outlined">
                                    <InputLabel id="dropdown-label">Select an option</InputLabel>
                                    <Select
                                        labelId="dropdown-label"
                                        label="Select an option"
                                        value={selectedOption}
                                        onChange={handleSelectChange}
                                    >
                                        {questions[index].options.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <p>Selected option: {selectedOption}</p>
                            </div>
                        </div>


                }
                <div >
                    <center><button onClick={handleClick} className="btn-create">{start}</button></center>
                </div>
            </div>
    );
}
