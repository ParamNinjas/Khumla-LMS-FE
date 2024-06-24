"use client";
import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import Dropdown from "react-bootstrap/Dropdown";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  createQuizDetail,
  deleteChoiceFromQuestion,
} from "@/app/redux/quizSlice";
import { IChoice, IUpdateQuizDetailState } from "@/app/interfaces/quiz";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  addAssessmentQuestion,
  addChoicesToQuestion,
  deleteAssessmentQuestion,
  getSelectedAssessmentForEdit,
  updateAssessment,
  updateAssessmentQuestion,
  updateChoiceDetails,
} from "@/app/redux/assessmentSlice";
import { IAssessment, IAssessmentQuestion } from "@/app/interfaces/assessment";
import ConfirmationModal from "@leafygreen-ui/confirmation-modal";

interface CreateCourseAssessmentModal {
  onClose: () => any;
}


interface ReactQuillProps {
  style?: React.CSSProperties;
  value?: string;
  onChange?: any;
  placeholder?: string;
  modules?: any;
  readOnly: any;
}

const ReactQuillWrapper = ({
  style,
  value,
  onChange,
  placeholder,
  modules,
  readOnly,
}: ReactQuillProps) => {
  const [ReactQuillComponent, setReactQuillComponent] = useState<any>(
    () => () => null
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("react-quill")
        .then((module) => {
          setReactQuillComponent(() => module.default);
        })
        .catch((error) => {
          console.error("Error loading ReactQuill module:", error);
        });
    }
  }, []);

  if (!ReactQuillComponent) return null;

  return (
    <ReactQuillComponent
      readOnly={readOnly}
      style={style}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      modules={modules}
    />
  );
};

export const CreateCourseAssessmentModal: React.FC<
  CreateCourseAssessmentModal
> = ({ onClose }) => {
  const cookies = new Cookies();
  const userData = cookies.get("param-lms-user");
  const dispatch = useDispatch();

  const [toggler, setToggler] = useState<Number>(2);
  const [questionDescription, setQuestionDescription] = useState<string>("");
  const [choiceDescription, setChoiceDescription] = useState<string>("");
  const [points, setPoints] = useState<number>(0);
  const [countChoice, setCountChoices] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [questionId, setQuestionId] = useState<string>("");
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [openChoices, setOpenChoices] = useState(false);
  const [choiceId, setChoiceId] = useState<string>("");

  const [expandedSection, setExpandedSection] = useState();

  const [choices, setChoices] = useState<any>([]);
  const [questions, setQuestions] = useState<IAssessmentQuestion[]>([]);

  const [choiceError, setChoiceError] = useState(false);
  const [questionError, setQuestionError] = useState(false);
  const [isQuestionCreated, setIsQuestionCreated] = useState<boolean>(false);
  const [enableEditQuestion, setEnableEditQuestion] = useState<boolean>(false);
  const [pointsError, setPointsError] = useState(false);
  const [editQuizQuestion, setEditQuizQuestion] = useState<boolean>(false);
  const [changeEditQuizQuestionContent, setChangeEditQuizQuestionContent] =
    useState(false);
  const [enableUpdateChoice, setEnableUpdateChoice] = useState(false);
  const [viewCreatedQuestion, setViewCreatedQuestion] = useState(true);
  const [isRetaken, setIsRetaken] = useState<string>("")
  const [dueDate, setDueDate] = useState<string>("")


  const [questionType, setQuestionType] = useState<string>("");

  const _assessmentFromState: IAssessment = useSelector(
    getSelectedAssessmentForEdit
  ).assessment;

  console.log("Assessments from state", _assessmentFromState);


  
  const handleAssessmentDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDueDate(e.target.value);
    const payload = {
      courseId : _assessmentFromState.courseId, 
      questions  :_assessmentFromState.questions,
       createdByUserId  : _assessmentFromState.createdByUserId,
      createdDate  : _assessmentFromState.createdDate,
      modifiedByUserId  : _assessmentFromState.modifiedByUserId, 
      modifiedAt  : _assessmentFromState.modifiedAt, 
       dueDate  : dueDate,
       courseTitle: _assessmentFromState.courseTitle,
       instructorName:"John Doe",
       instructorId:"656f1335650c740ce0ae4d65",
       status : _assessmentFromState.status,
       isRetaken : isRetaken === "Yes" ? true : false 

    }
    dispatch(updateAssessment(payload));
  };

  const handleAssessmentRetaken = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsRetaken(e.target.value);
    const payload = {
      courseId : _assessmentFromState.courseId, 
      questions  :_assessmentFromState.questions,
       createdByUserId  : _assessmentFromState.createdByUserId,
      createdDate  : _assessmentFromState.createdDate,
      modifiedByUserId  : _assessmentFromState.modifiedByUserId, 
      modifiedAt  : _assessmentFromState.modifiedAt, 
       dueDate  : _assessmentFromState.dueDate,
       courseTitle: _assessmentFromState.courseTitle,
       instructorName:"John Doe",
       instructorId:"656f1335650c740ce0ae4d65",
       status : _assessmentFromState.status,
       isRetaken : isRetaken === "0" ? true : false 

    }
    dispatch(updateAssessment(payload));
  };

  const onChange = (isChecked: boolean, id: string) => {
    const choiceDetails = choices.filter(
      (choice: IChoice) => choice.id === id
    )[0];

    const payload = {
      questionId: questionId,
      choiceId: id,
      choiceDescription: choiceDetails.choiceDescription,
      isCorrect: isChecked,
    };

    dispatch(updateChoiceDetails(payload));
  };

  function getTodaysDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month: number | string = today.getMonth() + 1;
    let day: number | string = today.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    setDate(`${year}-${month}-${day}`);
  }

  const selectQuestionForEdit = (id: string) => {
    setViewCreatedQuestion(true);
    setEnableEditQuestion(!enableEditQuestion);
    setChangeEditQuizQuestionContent(true);

    const hasQuestion = questions.filter(
      (question: IAssessmentQuestion) => question.id === id
    );
    setQuestionDescription(hasQuestion[0].questionDescription);
    setPoints(hasQuestion[0].points);
    setQuestionId(hasQuestion[0].id);
  };

  const selectChoiceForEdit = (id: string) => {
    setEnableUpdateChoice(true);
    const hasChoice = choices.filter((choice: IChoice) => choice.id === id);
    setChoiceDescription(hasChoice[0].choiceDescription);
    setChoiceId(hasChoice[0].id);
  };


  const handleCreateQuestion = () => {
    setPointsError(false);
    setQuestionError(false);
    if (questionDescription.length === 0) {
      setQuestionError(true);

      return;
    }
    const plainDescription =
      questionDescription &&
      questionDescription.replace(/<(?:\/)?[sp]+[^>]*>/g, "");

    if (isNaN(points) || points === 0) {
      setPointsError(true);
      return;
    }
    setEnableEditQuestion(true);
    const payload = {
      questionDescription: plainDescription,
      points: points,
      questionType: Number(questionType),
    };
    dispatch(addAssessmentQuestion(payload));
    setIsQuestionCreated(true);
  };

  const deleteQuestionFromQuizState = (id: string) => {
    const payload = {
      questionId: id,
    };
    if (payload.questionId) {
      dispatch(deleteAssessmentQuestion(payload));

      //setUpdateQuestion(true)
    }
    debugger;
  };

  const updateQuizQuestion = function () {
    setEnableEditQuestion(true);
    const plainDescription =
      questionDescription &&
      questionDescription.replace(/<(?:\/)?[sp]+[^>]*>/g, "");
    const payload = {
      questionType: questionType,
      questionId: questionId,
      questionDescription: plainDescription,
      points: points,
    };

    dispatch(updateAssessmentQuestion(payload));
  };

  const editChoice = () => {
    setChoiceError(false);

    if (choiceDescription.length === 0) {
      setChoiceError(true);
      return;
    }
    const payload = {
      questionId: questionId,
      choiceId: choiceId,
      choiceDescription: choiceDescription,
      isCorrect: false,
    };

    dispatch(updateChoiceDetails(payload));
    setEnableUpdateChoice(false);
    setChoiceDescription("");
    setCountChoices(countChoice);
  };

  const handleCreateChoice = () => {
    setChoiceError(false);
    setCountChoices(countChoice + 1);
    if (choiceDescription.length === 0) {
      setChoiceError(true);
      return;
    }

    const payload = {
      questionId: questionId!,
      choiceDescription: choiceDescription!,
      isCorrect: false,
    };
    dispatch(addChoicesToQuestion(payload));

    setChoiceDescription("");
  };

  const deleteChoiceAnswer = (id: string) => {
    setChoiceError(false);
    const payload = {
      questionId,
      choiceId: id,
    };

    dispatch(deleteChoiceFromQuestion(payload));
    setEnableUpdateChoice(false);

    setChoiceDescription("");
  };

  const newQuestion = () => {
    if (questionType === "1") {
      if (changeEditQuizQuestionContent) {
        setEditQuizQuestion(false);
        setChangeEditQuizQuestionContent(false);
      }
      setChangeEditQuizQuestionContent(false);
      setIsQuestionCreated(false);
      setEnableEditQuestion(!enableEditQuestion);
      setViewCreatedQuestion(false);
      setChoices([]);
      setQuestionDescription("");
      setPoints(0);
      setChoiceDescription("");
      setQuestionType("");
    } else {
      if (choices.length === 0) {
        let _id = toast.loading("Please add choices first..", {
          //loader
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
  

        toast.update(_id, {
          render: "Please add choices first",
          type: "error",
          isLoading: false,
        });
        setTimeout(() => {
          toast.dismiss(_id);
        }, 2000);
        return;
      }

      if (changeEditQuizQuestionContent) {
        setEditQuizQuestion(false);
        setChangeEditQuizQuestionContent(false);
      }
      setChangeEditQuizQuestionContent(false);
      setIsQuestionCreated(false);
      setEnableEditQuestion(!enableEditQuestion);
      setViewCreatedQuestion(false);
      setChoices([]);
      setQuestionDescription("");
      setPoints(0);
      setChoiceDescription("");
      setQuestionType("");
    }
  };

  const nextQuestion = () => {
    if (questionNumber < questions.length) {
      setQuestionNumber(questionNumber + 1);
    }
  };

  const prevQuestion = () => {
    if (questionNumber > 1) {
      setQuestionNumber(questionNumber - 1);
    }
  };

  useEffect(() => {
    const assessmentQuestions = _assessmentFromState?.questions.map(
      (questions) => questions
    );

    if (assessmentQuestions?.length > 0) {
      const lastQuestionId = assessmentQuestions?.map(
        (question) => question.id
      );
      setQuestionId(lastQuestionId[assessmentQuestions.length - 1]);
    }
    const questions = _assessmentFromState.questions;
    setQuestions(questions);
  }, [_assessmentFromState?.questions]);

  useEffect(() => {
    const assessmentQuestions = _assessmentFromState?.questions.map(
      (questions) => questions
    );

    if (assessmentQuestions.length > 0) {
      setChangeEditQuizQuestionContent(false);
      setIsQuestionCreated(false);
      setEnableEditQuestion(false);
      setViewCreatedQuestion(false);
    }
  }, []);

  useEffect(() => {
    getTodaysDate();
  }, []);

  useEffect(() => {
    const choices = _assessmentFromState?.questions.map(
      (question) => question.choices
    );

    const hasQuestion = _assessmentFromState?.questions?.filter(
      (question: IAssessmentQuestion) => question.id === questionId
    )!;
    setChoices(hasQuestion?.length > 0 && hasQuestion[0]?.choices);
  });

  return (
    <div
      style={{ width: "100%" }}
      className="mdk-drawer-layout js-mdk-drawer-layout"
      data-push=""
      data-responsive-width="992px"
      data-domfactory-upgraded="mdk-drawer-layout"
    >
          
     
      <div
        className="mdk-drawer-layout__content page-content"
        style={{ transform: "translate3d(0px, 0px, 0px)" }}
      >
        <div className="pt-32pt">
          <div className="container page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
            <div className="flex d-flex flex-column flex-sm-row align-items-center">
              <div className="mb-24pt mb-sm-0 mr-sm-24pt">
                <h2 className="mb-0">Add Assessemnt</h2>
                <ol className="breadcrumb p-0 m-0">
                  <li className="breadcrumb-item">
                    <a>Home</a>
                  </li>
                  <li className="breadcrumb-item active">Add Assessment</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: "100%" }} className="page-section border-bottom-2">
          <div className="container page__container">
            <div className="row" style={{ width: "800px" }}>{/*width for modal content*/}
              {/*Quiz Content Starts Here*/}
              {!viewCreatedQuestion && (
                <div
                  className={toggler === 2 ? "col-md-8" : "col-md-8 d-md-none"}
                >
                  <div className="page-separator">
                    <div className="page-separator__text">Questions</div>
                  </div>
                  {questions?.length > 0 && (
                    <ul className="list-group stack mb-40pt">
                      <li className="list-group-item d-flex">
                        <i className="material-icons text-70 icon-16pt icon--left">
                          drag_handle
                        </i>
                        <div className="flex d-flex flex-column">
                          <div className="card-title mb-4pt">
                            Question {questionNumber} of {questions?.length}
                          </div>
                          <div className="card-subtitle text-70 paragraph-max mb-16pt">
                            {questions?.length > 0 &&
                              questions[questionNumber - 1]
                                ?.questionDescription}
                          </div>

                          {questions[questionNumber - 1].questionType === 0 && (
                            <div>
                              <a
                                onClick={() => setOpenChoices((prev) => !prev)}
                                className="chip chip-light d-inline-flex align-items-center"
                              >
                                <i className="material-icons icon-16pt icon--left">
                                  {openChoices
                                    ? "keyboard_arrow_up"
                                    : "keyboard_arrow_down"}
                                </i>{" "}
                                Answers
                              </a>

                              {openChoices && (
                                <div className="form-group">
                                  <select
                                    id="select01"
                                    data-toggle="select"
                                    data-multiple="true"
                                    multiple
                                    className="form-control mt-2"
                                  >
                                    {questions[questionNumber - 1].choices.map(
                                      (option: any, index: any) => (
                                        <option key={index} value={option}>
                                          {option.choiceDescription}
                                        </option>
                                      )
                                    )}
                                  </select>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        <span className="text-muted mx-12pt">
                          {questions[questionNumber - 1]?.points} pt
                        </span>

                        <Dropdown style={{ marginRight: "8em" }}>
                          <Dropdown.Toggle
                            id="accountDropdown"
                            variant="link"
                          ></Dropdown.Toggle>

                          <Dropdown.Menu style={{ textAlign: "right" }}>
                            <Dropdown.Item
                              onClick={() => {
                                selectQuestionForEdit(
                                  questions[questionNumber - 1]?.id
                                );
                                setEditQuizQuestion(true);
                              }}
                            >
                              Edit Question
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => {
                                deleteQuestionFromQuizState(
                                  questions[questionNumber - 1]?.id
                                );
                              }}
                            >
                              Delete Question
                              <RiDeleteBin6Line
                                className="text-danger"
                                style={{
                                  fontSize: "0.8em",
                                  marginLeft: "5px",
                                  cursor: "pointer",
                                }}
                              />
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="dropdown"></div>
                      </li>
                      <li className="list-group-item d-flex">
                        <button
                          onClick={nextQuestion}
                          style={{
                            outline: "none",
                            border: "none",
                            backgroundColor: "transparent",
                          }}
                        >
                          <a href="#" className="btn btn-outline-secondary">
                            Next
                          </a>
                        </button>

                        <button
                          onClick={prevQuestion}
                          style={{
                            outline: "none",
                            border: "none",
                            backgroundColor: "transparent",
                          }}
                        >
                          <a href="#" className="btn btn-outline-secondary">
                            prev
                          </a>
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              )}

              {!editQuizQuestion && (
                <>
                  <div
                    className={
                      toggler === 2 ? "col-md-8" : "col-md-8 d-md-none"
                    }
                  >
                    <div>
                      <div className="page-separator">
                        <div className="page-separator__text">New Question</div>
                      </div>
                      <div className="form-group">
                          <label className="form-label">Question Type</label>
                          <select
                            onChange={(e) => setQuestionType(e.target.value)}
                            value={questionType}
                            id="custom-select"
                            className="form-control custom-select"
                          >
                            <option>Select Type</option>
                            <option value="0">Multiple choice</option>
                            <option value="1">Short question</option>
                          </select>
                        </div>

                      <div className="card card-body">
                        
                      {(questionType === "0" || questionType === "1") && <>
                      <div className="form-group">
                          <label className="form-label">
                            Question{" "}
                            {questionError && (
                              <span
                                style={{
                                  color: "tomato",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                *required field
                              </span>
                            )}
                          </label>

                          <div
                            style={{ height: "150px" }}
                            className="mb-0"
                            data-toggle="quill"
                            data-quill-placeholder="Question"
                          >
                            <ReactQuillWrapper
                              readOnly={enableEditQuestion}
                              style={{ height: "100px" }}
                              value={questionDescription}
                              onChange={(value: string) => {
                                setQuestionDescription(value);
                              }}
                              placeholder="Enter your question description here..."
                            />
                          </div>
                        </div>



                        <div className="form-group">
                          <label className="form-label">
                            Completion Points
                            {pointsError && (
                              <span
                                style={{
                                  color: "tomato",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                *invalid points
                              </span>
                            )}
                          </label>
                          <input
                            style={{
                              border: `${
                                pointsError ? "2px solid tomato" : "none"
                              }`,
                            }}
                            disabled={enableEditQuestion}
                            onChange={(e: any) => setPoints(e.target.value)}
                            type="text"
                            className="form-control"
                            value={points}
                          />
                        </div>



                        <div className="mb-3">
                          {!isQuestionCreated && (
                            <button
                              onClick={handleCreateQuestion}
                              style={{
                                outline: "none",
                                border: "none",
                                backgroundColor: "transparent",
                              }}
                            >
                              <a href="#" className="btn btn-outline-secondary">
                                Add Question
                              </a>
                            </button>
                          )}
                          {isQuestionCreated && (
                            <>
                              {enableEditQuestion ? (
                                <button
                                  onClick={() => setEnableEditQuestion(false)}
                                  style={{
                                    outline: "none",
                                    border: "none",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  <a
                                    href="#"
                                    className="btn btn-outline-secondary"
                                  >
                                    Edit Question
                                  </a>
                                </button>
                              ) : (
                                <button
                                  onClick={updateQuizQuestion}
                                  style={{
                                    outline: "none",
                                    border: "none",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  <a
                                    href="#"
                                    className="btn btn-outline-secondary"
                                  >
                                    save Question
                                  </a>
                                </button>
                              )}
                            </>
                          )}
                        </div>

                      
                      </>}
                   
                      {isQuestionCreated && questionType === "0" && (
                          <>
                            <div className="form-group">
                              <label className="form-label">
                                Add Choices{" "}
                                {choiceError && (
                                  <span
                                    style={{
                                      color: "tomato",
                                      fontWeight: "600",
                                      fontSize: "small",
                                    }}
                                  >
                                    *required field
                                  </span>
                                )}
                              </label>

                              <input
                                value={choiceDescription}
                                minLength={10}
                                onChange={(event) =>
                                  setChoiceDescription(event.target.value)
                                }
                                className="form-control mb-3"
                                placeholder="Enter your choice here..."
                              />

                              <div>
                                {!enableUpdateChoice ? (
                                  <button
                                    onClick={handleCreateChoice}
                                    style={{
                                      outline: "none",
                                      border: "none",
                                      backgroundColor: "transparent",
                                    }}
                                  >
                                    <a
                                      href="#"
                                      className="btn btn-outline-secondary"
                                    >
                                      Add Choice
                                    </a>
                                  </button>
                                ) : (
                                  <button
                                    onClick={editChoice}
                                    style={{
                                      outline: "none",
                                      border: "none",
                                      backgroundColor: "transparent",
                                    }}
                                  >
                                    <a
                                      href="#"
                                      className="btn btn-outline-secondary"
                                    >
                                      Update choice
                                    </a>
                                  </button>
                                )}
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="form-label" htmlFor="select01">
                                Answers
                              </label>

                              <div
                                className={`accordion__item ${
                                  expandedSection === true ? "open" : ""
                                }`}
                                key={"section.id"}
                              >
                                {choices?.length > 0 &&
                                  choices?.map(
                                    (option: IChoice, index: any) => (
                                      <a
                                        onClick={() => setChoiceId(option?.id)}
                                        key={index}
                                        style={{
                                          cursor: "pointer",
                                          backgroundColor: "#e9ecef",
                                          padding: "8px",
                                          marginTop: "5px",
                                          borderRadius: "5px",
                                        }}
                                        className="accordion__toggle"
                                        data-toggle="collapse"
                                        data-target={`#course-toc-$section.id`}
                                        data-parent="#parent"
                                      >
                                        <span
                                          onClick={() =>
                                            selectChoiceForEdit(option?.id)
                                          }
                                          style={{ cursor: "pointer" }}
                                          className="flex"
                                        >
                                          {option?.choiceDescription}
                                        </span>
                                        <input
                                          type="checkbox"
                                          checked={option?.isCorrect}
                                          onChange={(e) =>
                                            onChange(
                                              e.target.checked,
                                              option?.id
                                            )
                                          }
                                        />
                                        <button
                                          style={{
                                            backgroundColor: "transparent",
                                            border: "none",
                                            outline: "none",
                                          }}
                                        >
                                          <FaTrash
                                            onClick={() =>
                                              deleteChoiceAnswer(option.id)
                                            }
                                          />
                                        </button>
                                      </a>
                                    )
                                  )}
                              </div>
                            </div>
                          </>
                        )}
                        {isQuestionCreated &&
                          (questionType === "0" || questionType === "1") && (
                            <div>
                              <button
                                onClick={newQuestion}
                                style={{
                                  outline: "none",
                                  border: "none",
                                  backgroundColor: "transparent",
                                }}
                              >
                                <a
                                  href="#"
                                  className="btn btn-outline-secondary"
                                >
                                  new Question
                                </a>
                              </button>
                            </div>
                          )}

                        <div className="form-group mt-3">
                          <label className="form-label">Select due date</label>
                          <input value = {dueDate} onChange={handleAssessmentDate} type = "date" className="form-control" />
                       
                        </div>

                        <div className="form-group">
                          <label className="form-label">Allow Assessment to be retaken?</label>
                          <select
                            onChange={handleAssessmentRetaken}
                            value={isRetaken}
                            id="custom-select"
                            className="form-control custom-select"
                          >
                            <option>Select choice</option>
                            <option value="0">Yes</option>
                            <option value="1">No</option>
                          </select>
                        </div>


                      
                      </div>
                    </div>
                  </div>
                </>
              )}

              {editQuizQuestion && (
                <>
                  <div
                    className={
                      toggler === 2 ? "col-md-8" : "col-md-8 d-md-none"
                    }
                  >
                    <div>
                      <div className="page-separator">
                        <div className="page-separator__text">
                          Edit Question
                        </div>
                      </div>
                      <div className="card card-body">
                        <div className="form-group">
                          <label className="form-label">
                            Question{" "}
                            {questionError && (
                              <span
                                style={{
                                  color: "tomato",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                *required field
                              </span>
                            )}
                          </label>

                          <div
                            style={{ height: "150px" }}
                            className="mb-0"
                            data-toggle="quill"
                            data-quill-placeholder="Question"
                          >
                            <ReactQuillWrapper
                              readOnly={enableEditQuestion}
                              style={{ height: "100px" }}
                              value={questionDescription}
                              onChange={(value: string) => {
                                setQuestionDescription(value);
                              }}
                              placeholder="Enter your question description here..."
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="form-label">
                            Completion Points
                            {pointsError && (
                              <span
                                style={{
                                  color: "tomato",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                *invalid points
                              </span>
                            )}
                          </label>
                          <input
                            style={{
                              border: `${
                                pointsError ? "2px solid tomato" : "none"
                              }`,
                            }}
                            disabled={enableEditQuestion}
                            onChange={(e: any) => setPoints(e.target.value)}
                            type="text"
                            className="form-control"
                            value={points}
                          />
                        </div>
                        <div className="mb-3">
                          {isQuestionCreated && (
                            <button
                              onClick={handleCreateQuestion}
                              style={{
                                outline: "none",
                                border: "none",
                                backgroundColor: "transparent",
                              }}
                            >
                              <a href="#" className="btn btn-outline-secondary">
                                Add Question
                              </a>
                            </button>
                          )}
                          {!isQuestionCreated && (
                            <>
                              {enableEditQuestion ? (
                                <button
                                  onClick={() => setEnableEditQuestion(false)}
                                  style={{
                                    outline: "none",
                                    border: "none",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  <a
                                    href="#"
                                    className="btn btn-outline-secondary"
                                  >
                                    Edit Question
                                  </a>
                                </button>
                              ) : (
                                <button
                                  onClick={updateQuizQuestion}
                                  style={{
                                    outline: "none",
                                    border: "none",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  <a
                                    href="#"
                                    className="btn btn-outline-secondary"
                                  >
                                    save Question
                                  </a>
                                </button>
                              )}
                            </>
                          )}
                        </div>
                        {!isQuestionCreated && (
                          <>
                            <div className="form-group">
                              <label className="form-label">
                                Add Choices{" "}
                                {choiceError && (
                                  <span
                                    style={{
                                      color: "tomato",
                                      fontWeight: "600",
                                      fontSize: "small",
                                    }}
                                  >
                                    *required field
                                  </span>
                                )}
                              </label>

                              <input
                                value={choiceDescription}
                                minLength={10}
                                onChange={(event) =>
                                  setChoiceDescription(event.target.value)
                                }
                                className="form-control mb-3"
                                placeholder="Enter your choice here..."
                              />

                              <div>
                                {!enableUpdateChoice ? (
                                  <button
                                    onClick={handleCreateChoice}
                                    style={{
                                      outline: "none",
                                      border: "none",
                                      backgroundColor: "transparent",
                                    }}
                                  >
                                    <a
                                      href="#"
                                      className="btn btn-outline-secondary"
                                    >
                                      Add Choice
                                    </a>
                                  </button>
                                ) : (
                                  <button
                                    onClick={editChoice}
                                    style={{
                                      outline: "none",
                                      border: "none",
                                      backgroundColor: "transparent",
                                    }}
                                  >
                                    <a
                                      href="#"
                                      className="btn btn-outline-secondary"
                                    >
                                      Update choice
                                    </a>
                                  </button>
                                )}
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="form-label" htmlFor="select01">
                                Answers
                              </label>
                              <div
                                className={`accordion__item ${
                                  expandedSection === true ? "open" : ""
                                }`}
                                key={"section.id"}
                              >
                                {choices?.length > 0 &&
                                  choices?.map(
                                    (option: IChoice, index: any) => (
                                      <a
                                        onClick={() => setChoiceId(option?.id)}
                                        key={index}
                                        style={{
                                          cursor: "pointer",
                                          backgroundColor: "#e9ecef",
                                          padding: "8px",
                                          marginTop: "5px",
                                          borderRadius: "5px",
                                        }}
                                        className="accordion__toggle"
                                        data-toggle="collapse"
                                        data-target={`#course-toc-$section.id`}
                                        data-parent="#parent"
                                      >
                                        <span
                                          onClick={() =>
                                            selectChoiceForEdit(option?.id)
                                          }
                                          style={{ cursor: "pointer" }}
                                          className="flex"
                                        >
                                          {option?.choiceDescription}
                                        </span>
                                        <input
                                          type="checkbox"
                                          checked={option?.isCorrect}
                                          onChange={(e) =>
                                            onChange(
                                              e.target.checked,
                                              option?.id
                                            )
                                          }
                                        />
                                        <button
                                          style={{
                                            backgroundColor: "transparent",
                                            border: "none",
                                            outline: "none",
                                          }}
                                        >
                                          <FaTrash
                                            onClick={() =>
                                              deleteChoiceAnswer(option.id)
                                            }
                                          />
                                        </button>
                                      </a>
                                    )
                                  )}
                              </div>
                            </div>
                          </>
                        )}
                        {!isQuestionCreated && (
                          <div>
                            <button
                              onClick={newQuestion}
                              style={{
                                outline: "none",
                                border: "none",
                                backgroundColor: "transparent",
                              }}
                            >
                              <a href="#" className="btn btn-outline-secondary">
                                new Question
                              </a>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    
                  </div>
                </>
              )}

              <div className="card-header text-center"
              
              style={{
                marginRight:"2em !important",
              
              }}
            
              >
              <button
              onClick={() => onClose()}

                    style={{
                      marginRight:"10px",
                      backgroundColor: "transparent",
                      border: "none",
                      outline: "none",
                      width: "149px",
                    }}
                  >
                    <a
                 
                      
                      className="btn btn-accent"
                    >
                      save assessment
                    </a>
                  </button>         
              </div>



            </div>
           
          </div>
       
        </div>
    
      </div>
    </div>
  );
};