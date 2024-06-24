"use client"
import { IChoice } from '@/app/interfaces/assessment';
import { Api } from '@/app/lib/restapi/endpoints';
import { userInfo } from 'os';
import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import './assessment.css'
import { useSearchParams } from 'next/navigation';
// Enum for question types
const QuestionType = {
    TEXT: 0,
    MULTIPLE_CHOICE: 1,
    DROPDOWN: 'dropdown',
    TEXTAREA: 'textarea',
    NUMBER_INPUT: 'number_input'
    // Add more question types as needed
};

const CourseAssessment = (props:any) => {

    const searchParams = useSearchParams();

      const assessmentId = searchParams.get("id")
       // alert(assessmentId)
  
    console.log("props", props?.searchParams)

    const [courseAssessment, setAssessment] = useState<any>();
    const [loading, setLoading] = useState<any>(true);
    const [status, setStatus] = useState<any>('All questions answered. Submit the assessment.')
    const [courseInfo, setCourse] = useState<any>();
    const [studentAnswer, setStudentAnswer] = useState<any>({
        AssessmentId: 'yourAssessmentId',
        StudentId: 'yourStudentId', 
        Answers: [],
        SubmittedAt: new Date().toISOString(),
    });

    async function getSelectedCourse(id:string){
        try {
            const course = await Api.GET_CourseById(id);
            console.log("course", course);
            setCourse(course.data);
        }
        catch (error) {
            console.error("Error fetching course:", error);
        }
    }

    async function getCourseAssessment(id: string) {
  
        const cookies = new Cookies();
        console.log("searched", id);
        const userData = cookies.get("param-lms-user");
        try {
            const assessment = await Api.GET_CourseAssessment(id);
           debugger;
            if (assessment) {
                setLoading(false)
                setAssessment(assessment);
                setStudentAnswer({
                    AssessmentId: assessment.id, 
                    StudentId: userData.id, 
                    Answers: [],
                    SubmittedAt: new Date().toISOString(),
                })
                getSelectedCourse(`${assessment?.courseId}`)

            } else {
                console.log("No assessment found");
            }
        } catch (error) {
            console.error("Error fetching assessments:", error);
        }
    }


    const [selectedOption, setSelectedOption] = useState();

    // State to store user responses
    const [responses, setResponses] = useState([]);
    //const [responses, setResponses] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState(0);


    // Handle user response changes
    const handleResponseChange = (questionId: string, value: any) => {
        const updatedAnswers = [...studentAnswer.Answers];
        const filteredAnswers = updatedAnswers.filter(answer => answer?.questionId !== questionId);
        filteredAnswers.push({
            questionId,
            userAnswer: value,
            selectedAnswer: {}, 
        });
        setStudentAnswer({
            ...studentAnswer,
            Answers: filteredAnswers,
        });
    };
    // Handler for updating the student answer object based on selected choices for a question
    const handleSelectAnswer = (questionId: string, selectedChoices: IChoice[]) => {
        const updatedAnswers = [...studentAnswer.Answers];

        // Remove any existing answers for the same question
        updatedAnswers.filter((answer) => answer?.questionId !== questionId);

        // Add each selected choice as a separate answer
        selectedChoices.forEach((choice) => {
            updatedAnswers.push({
                questionId,
                selectedAnswer: choice,
                userAnswer: null,
            });
        });

        setStudentAnswer({
            ...studentAnswer,
            Answers: updatedAnswers,
        });
        console.log("student", studentAnswer)
    };
    const handleCheckboxChange = (questionId: string, choice: IChoice, isChecked: boolean) => {
        const existingAnswers = studentAnswer.Answers.filter((answer:any) => answer.questionId === questionId);
        const selectedChoices = existingAnswers.length ? existingAnswers[0].selectedAnswer : null;

        let updatedChoices: IChoice[] = [];

        if (isChecked) {
            updatedChoices = selectedChoices ? [selectedChoices, choice] : [choice];
        } else {
            updatedChoices = selectedChoices ? [selectedChoices].filter((c) => c.choiceId !== choice.id) : [];
        }

        handleSelectAnswer(questionId, updatedChoices);
    };

    const handleNextQuestion = () => {
        if (currentQuestion !== courseAssessment?.questions.length) {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1)
        }
    };

    const handleSubmit = (event: any) => {

        event.preventDefault();
        console.log('Submitted Responses:', studentAnswer);
        setLoading(true)
        const submitAssessment = Api.POST_StudentAnswers(studentAnswer);

        if (submitAssessment) {
            setLoading(false);
            console.log("Submited", submitAssessment)
            setStatus("Submitted, successfully")
        }
    };

    useEffect(() => {

        getCourseAssessment(`${assessmentId}`);
        
       
    }, []);

    // Render question based on type
    const renderQuestion = (question: any) => {
        switch (question.questionType) {
            case QuestionType.TEXT:
                return (
                    <div key={question.id}>
                        {/* <label>{question.questionDescription}</label> */}
                        <div className="form-group">
                            <div className="">
                                <input
                                    id={`${question.id}`}
                                    type="text"
                                    className=""
                                    onChange={(e) => handleResponseChange(question.id, e.target.value)}
                                />

                            </div>
                        </div>
                    </div>
                );
            case QuestionType.MULTIPLE_CHOICE:
                return (
                    <div key={question.id}>
                        {/* <p>{question.questionDescription}</p> */}
                        {question.choices.map((choice: any, ind: number) => (
                            <div className="form-group" key={ind}>
                                <div className="custom-control custom-checkbox">
                                    <input
                                        id={`customCheck${ind}`}
                                        type="checkbox"
                                        className="custom-control-input"
                                        onChange={(e) => handleCheckboxChange(question.id, choice, e.target.checked)}
                                    />
                                    <label htmlFor={`customCheck${ind}`} className="custom-control-label">
                                        {choice?.choiceDescription}
                                    </label>
                                </div>
                            </div>

                        ))}
                    </div>
                );

            case QuestionType.DROPDOWN:
                return (
                    <div key={question.id}>
                        {/* <p>{question.text}</p> */}
                        {question.options.map((option: string, index: number) => (
                            <div className="form-group" key={index}>
                                <div className="custom-control custom-checkbox">
                                    <input
                                        id="option.name"
                                        type="checkbox"
                                        className="custom-control-input"

                                    />
                                    <label htmlFor="customCheck01" className="custom-control-label">
                                        {option}
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (

        <div>

            {loading ? (
                <p>Loading...</p>
            ) : (

                <div
                    className="mdk-drawer-layout__content page-content" style={{ order: 0 }}
                >
                    <div className="bg-primary pb-lg-64pt py-32pt">
                        <div className="container page__container">
                            <h2 className='header'>Course Assessment</h2>
                            <h5 className='subheader'>{courseInfo?.description}</h5>
                            <nav className="course-nav">
                                {courseAssessment?.questions?.map((q: any, i:number) => (
                                <a
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    data-title={q?.name}
                                    data-original-title
                                    title={q?.name}
                                    key={i}
                                >
                                    <span className="material-icons">check_circle</span>
                                </a>
                                ))}
                            </nav>
                            <div className="d-flex flex-wrap align-items-end justify-content-end mb-16pt">
                                <h1 className="text-white flex m-0">Question {currentQuestion} of {courseAssessment?.questions?.length}</h1>
                                {/* <p className="h1 text-white-50 font-weight-light m-0">00:14</p> */}
                            </div>
                            <p className="hero__lead measure-hero-lead text-white-50">
                                {/* An angular 2 project written in typescript is* transpiled to javascript
                                duri*ng the build process. Which of the following additional features
                                are provided to the developer while programming on typescript over
                                javascript? */}

                                {courseAssessment?.questions[currentQuestion]?.questionDescription}
                            </p>
                        </div>
                    </div>
                    <div
                        className="navbar navbar-expand-md navbar-list navbar-light bg-white border-bottom-2 "
                        style={{ whiteSpace: "nowrap" }}
                    >
                        <div className="container page__container">
                            <ul className="nav navbar-nav flex navbar-list__item">
                                <li className="nav-item">
                                    <i className="material-icons text-50 mr-8pt">tune</i>
                                    Choose the correct answer below:
                                </li>
                            </ul>
                            <div className="nav navbar-nav ml-sm-auto navbar-list__item">
                                <div className="nav-item d-flex flex-column flex-sm-row ml-sm-16pt">
                                    <a
                                        className="btn justify-content-center btn-outline-secondary w-100 w-sm-auto mb-16pt mb-sm-0"
                                    >
                                        Skip Assessment
                                    </a>
                                    <a
                                        className="btn justify-content-center btn-outline-secondary w-100 w-sm-auto mb-16pt mb-sm-0 ml-sm-16pt"
                                    >
                                        Review Course
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container page__container">
                        <div className="page-section">
                            <div className="page-separator">
                                <div className="page-separator__text">Your Answer</div>
                            </div>
                            {currentQuestion < courseAssessment?.questions?.length ? (
                                <div>
                                    {renderQuestion(courseAssessment?.questions[currentQuestion])}
                                    <button onClick={handleNextQuestion} className="btn justify-content-center btn-outline-secondary w-10 w-sm-auto mb-16pt mb-sm-0">Submit</button>
                                </div>
                            ) : (
                                <div>

                                    <h3> {status} </h3>
                                    <form onSubmit={handleSubmit}>
                                        {/* Render a summary or review of responses here */}
                                        {
                                            status === 'Submitted, successfully' ? "" : <button type="submit" className="btn justify-content-center btn-outline-secondary w-10 w-sm-auto mb-16pt mb-sm-0" >Finish</button>
                                        }

                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default CourseAssessment;
