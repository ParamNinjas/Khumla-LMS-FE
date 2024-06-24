"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useRef, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  FaBullseye,
  FaPencilAlt,
  FaPlus,
  FaTrash,
  FaVideo,
} from "react-icons/fa";
import {
  addVideoToModule, deleteVideoFromModule, getSelectedCourseForEdit, editVideoDetails,
} from "@/app/redux/courseSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  ICourse,
  IModule,
  IUpdateModuleDetailState,
  IVideo,
} from "@/app/interfaces/courses";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Dropdown } from "react-bootstrap";
import {
  IChoice,
  IDeleteQuestion,
  IQuestion,
  IQuiz,
  IQuizState,
  IUpdateQuestionDetailState,
  IUpdateQuizDetailState,
} from "@/app/interfaces/quiz";
import {
  addChoices,
  createQuestion,
  createQuizDetail,
  deleteChoiceFromQuestion,
  deleteQuestion,
  getSelectedQuizForEdit,
  updateChoiceDetail,
  updateQuestionDetails,
  updateQuizState,
} from "@/app/redux/quizSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "universal-cookie";
import { createDocumentDetails, updateDocumentDetail } from "@/app/redux/documentSice";

interface EditCourseModalProps {
  onClose: () => any;
  sectionId: string;
  moduleId: any;
  videoId:string
}


// Define interface for ReactQuill props
interface ReactQuillProps {
  style?: React.CSSProperties;
  value?: string;
  onChange?: any;
  placeholder?: string;
  modules?: any; 
  readOnly:any
}

const ReactQuillWrapper = ({
  style,
  value,
  onChange,
  placeholder,
  modules,
  readOnly
}: ReactQuillProps) => {
  const [ReactQuillComponent, setReactQuillComponent] = useState<any>(() => () => null); 

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('react-quill').then(module => {
        console.log("ReactQuill module loaded:", module);
        setReactQuillComponent(() => module.default);
      }).catch(error => {
        console.error("Error loading ReactQuill module:", error);
      });
    }
  }, []);


  if (!ReactQuillComponent) return null; 

  

  return (
    <ReactQuillComponent
      style={style}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      modules={modules}
    />
  );
};


export const EditCourseModal: React.FC<EditCourseModalProps> = ({
  onClose,
  sectionId,
  videoId,
  moduleId
}) => {

  const dispatch = useDispatch();
  const cookies = new Cookies();

  const [videoTitle, setVideoTitle] = useState<string>("");
  const [videoLink, setVideoLink] = useState<string>("");
  const [moduleTitle, setModuleTitle] = useState<string>("");
  const [toggler, setToggler] = useState<Number>(1);
  const [documentName, setDocumentName] = useState<string>();
  const [questionDescription, setQuestionDescription] = useState<string>("");
  const [choiceDescription, setChoiceDescription] = useState<string>("");
  const [choiceAnswer, setChoiceAnswer] = useState<string>("");
  const [points, setPoints] = useState<number>(0);
  const [video, setVideo] = useState<IVideo>()
  const [countChoice, setCountChoices] = useState<number>(0);
  const [questionId, setQuestionId] = useState<any>(0);
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [questions, setQuestions] = useState<any>([]);
  const [choiceId, setChoiceId] = useState<string>("");
  const userData = cookies.get("param-lms-user");
  const [videoReference, setVideoReference] = useState<string>("")
  const [quizId, setQuizId] = useState<string>("")
  const [videoDescription, setVideoDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [document, setDocument] = useState<any>("")
  const [videoDuration, setVideoDuration] = useState<string>()

  const [moduleReference, setModuleReference] = useState<any>("")
  const [hideSaveChangesBtn, setHideSaveChangesBtn] = useState(false)
  const [disableModuleInputs, setDisableModuleInputs] = useState<boolean>(false)  

  const _courseFromState: ICourse = useSelector(getSelectedCourseForEdit).course;
  const _quizzesFromState: any[] = useSelector(getSelectedQuizForEdit).quizzes;

  console.log("Course from state", _courseFromState);
  console.log("Quizzes from state", _quizzesFromState);

  const [_quizFromState, set_QuizFromState] = useState<IQuiz>()  



  const [choices, setChoices] = useState<any>([]);

  const [modules, setModules] = useState<IModule[]>([]);




  const [enableEditQuestion, setEnableEditQuestion] = useState<boolean>(false);

  const [pointsError, setPointsError] = useState(false);

  const [includeQuiz, setIncludeQuiz] = useState<boolean>(false);

  const [expandedSection, setExpandedSection] = useState()

  const [includeDocument, setIncludeDocument] = useState<boolean>(false);
  const [choiceError, setChoiceError] = useState(false);

  const [questionError, setQuestionError] = useState(false);

  const [hasQuiz, setHasQuiz] = useState<boolean>(false)

  const [choiceAnswerError, setChoiceAnswerError] = useState(false);

  const [isQuestionCreated, setIsQuestionCreated] = useState<boolean>(false);

  const [openChoices, setOpenChoices] = useState(false);

  const [enableUpdateChoice, setEnableUpdateChoice] = useState(false);

  const [videoTitleError, setVideoTitleError] = useState(false);
  const [videoDescError, setVideoDescError] = useState(false);
  const [videoUrlError, setVideoUrlError] = useState(false);


  const [changeEditQuizQuestionContent, setChangeEditQuizQuestionContent] =
    useState(false);

  const [editQuizQuestion, setEditQuizQuestion] = useState<boolean>(false);
  const [viewCreatedQuestion, setViewCreatedQuestion] = useState(true);

  
  const onChange = (isChecked: boolean , id : string) => {

    const choiceDetails = choices.filter((choice:IChoice) => choice.id === id)[0];
  
      const payload = {
        quizId : quizId,
        questionId:questionId,
        choiceId: id,
        choiceDescription: choiceDetails.choiceDescription,
        isCorrect: isChecked
      };
      
  
      dispatch(updateChoiceDetail(payload));
    };

  const tabSelect = (id: Number, e: any) => {
    setToggler(id);
    e.preventDefault();
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

  //Quiz Functions starts here
  const addQuiz = (e: any) => {
    setIncludeQuiz(false);

    const hasQuiz = _quizzesFromState.filter((quiz:IQuiz) => quiz?.videoId === videoId);
    if(hasQuiz?.length === 1 ){
     

      setIncludeQuiz(e.target.checked);

      setIncludeQuiz(true);

      setToggler(2);

      return
    }
    
    if (!videoId) {
      let _id = toast.loading("Please add video first..", {
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
      setIncludeQuiz(false);

      toast.update(_id, {
        render: "Please add video first",
        type: "error",
        isLoading: false,
      });
      setTimeout(() => {
        toast.dismiss(_id);
      }, 2000);
    } else {
      if (includeQuiz) {
        tabSelect(2, e);
      } else {
        e.preventDefault();
      }
      setIncludeQuiz(e.target.checked);
      setIncludeQuiz(true);
      handleCreateQuiz();
      setToggler(2);
    }
  };

  const selectQuestionForEdit = (id: string) => {

    setViewCreatedQuestion(true);
    setEnableEditQuestion(!enableEditQuestion);
    setChangeEditQuizQuestionContent(true)

    const hasQuestion:IQuestion[] = questions.filter(
      (question: IQuestion) => question.id === id
    );
    setQuestionDescription(hasQuestion[0].questionDescription);
    setPoints(hasQuestion[0].points);
    setQuestionId(hasQuestion[0].id);
  };


  const selectChoiceForEdit = (id: string) => {
    setEnableUpdateChoice(true);
    const hasChoice = choices.filter(
      (choice: IChoice) => choice.id === id
    );
    setChoiceDescription(hasChoice[0].choiceDescription);
    setChoiceId(hasChoice[0].id);
    setChoiceAnswer(hasChoice[0].choiceAnswer);
  };


  const handleCreateQuiz = () => {
    const payload = {
      reference: videoReference,
      createdByUserId: userData?.id,
      modifiedByUserId: userData?.id,
      createdDate: date,
      videoId: videoId,
    } as IUpdateQuizDetailState;

    dispatch(createQuizDetail(payload));
  };

  const handleCreateQuestion = () => {
    setPointsError(false);
    setQuestionError(false);
    if (questionDescription.length === 0) {
      setQuestionError(true);

      return;
    }
    const plainDescription =
      questionDescription && questionDescription.replace(/<(?:\/)?[sp]+[^>]*>/g, '');

    if (isNaN(points) || points === 0) {
      setPointsError(true);
      return;
    }
    setEnableEditQuestion(true);
    const payload = {
      questionDescription: plainDescription,
      points: points,
    } as IQuestion;
    dispatch(createQuestion(payload));
    setIsQuestionCreated(true);
  };

  const deleteQuestionFromQuizState = (id:string) => {

    const payload:IDeleteQuestion = {
      quizId,
      questionId,
 
    } 
    if(payload.questionId &&  payload.quizId ){
        dispatch(deleteQuestion(payload))
        setQuestionDescription("");
        setIsQuestionCreated(false);
        setChangeEditQuizQuestionContent(false)
        setEditQuizQuestion(false);
        setEnableEditQuestion(false)
        
        setPoints(0);
    }
  }


  const updateQuizQuestion = function () {

    setEnableEditQuestion(true);
    const plainDescription =
      questionDescription && questionDescription.replace(/<(?:\/)?[sp]+[^>]*>/g, '');

    const payload = {
      quizId : quizId,
      questionId: questionId,
      questionDescription: plainDescription,
      points: points,
    } as IUpdateQuestionDetailState;

    dispatch(updateQuestionDetails(payload));
  };

  const editChoice = () => {

    setChoiceError(false);
    setChoiceAnswerError(false);

    if (choiceDescription.length === 0) {
      setChoiceError(true);
      return;
    }

    const payload = {
      quizId : quizId,
      questionId:questionId,
      choiceId: choiceId,
      choiceDescription: choiceDescription,
      isCorrect: choiceAnswer === "true" ? true : false,
    };
   dispatch(updateChoiceDetail(payload));
    setEnableUpdateChoice(false);
    setChoiceAnswer("");
    setChoiceDescription("");
    setCountChoices(countChoice);
  };


  const handleCreateChoice = () => {
    setChoiceError(false);
    setCountChoices(countChoice + 1);
    setChoiceAnswerError(false);
    if (choiceDescription.length === 0) {
      setChoiceError(true);
      return;
    }
 

    const payload  = {
      quizId: quizId!,
      questionId: questionId!,
      choiceDescription: choiceDescription!,
      isCorrect: choiceAnswer === "true" ? true : false,
    } 
    dispatch(addChoices(payload));

    setChoiceAnswer("");
    setChoiceDescription("");
  };

  const deleteChoiceAnswer = (id:string) => {

    const payload = {
      quizId,
      questionId,
      choiceId:id
    }

    dispatch(deleteChoiceFromQuestion(payload));
    setEnableUpdateChoice(false);

    setChoiceDescription("");

    setChoiceAnswer("");
  }

  const newQuestion = () => {
    if(choices.length === 0){
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
      setIncludeQuiz(false);

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
 
if(changeEditQuizQuestionContent){
  setEditQuizQuestion(false)
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
    setChoiceAnswer("");

  };
  const nextQuestion = () => {
    if (questionNumber < questions.length) {
      setQuestionNumber(questionNumber + 1);
    }
  }

  const prevQuestion = () => {
    if (questionNumber > 1) {
      setQuestionNumber(questionNumber - 1);
    }
  };
  //Quiz Functions ends here

  //Dcoument functions start here


  const handleChangeDocument = (e:any) => {
    if(document){
     const file = e.target.files[0];
     if (file) {
       setDocument(file);
     }
     const payload = {
       title: file ? file.name : "",
       reference:videoReference,
        url :"",
       file: file ? file : null 
     }
     dispatch(updateDocumentDetail(payload));
    }else{
     const file = e.target.files[0];
     if (file) {
       setDocument(file);
     }
     const payload = {
       title: file ? file.name : "",
       reference:videoReference,
        url :"",
       file: file ? file : null 
     }
     dispatch(createDocumentDetails(payload));
    }
 
 }
  const addDocument = (e: any) => {
    setIncludeDocument(false);
    if (!videoId) {
      let _id = toast.loading("Please add video first..", {
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
      setIncludeDocument(false);

      toast.update(_id, {
        render: "Please add video first",
        type: "error",
        isLoading: false,
      });
      setTimeout(() => {
        toast.dismiss(_id);
      }, 2000);
    } else {
      if (includeDocument) {
        tabSelect(3, e);
      } else {
        e.preventDefault();
      }
      setIncludeDocument(true);
      setToggler(3);
    }
  };
  //Document functions ends here


  const moduleToolbar = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "link", "blockquote", "code", "image"],
      [{ list: "ordered" }, { list: "bullet" }],
    ],
  };



  const editVideo = () => {
    setVideoDescError(false);
    setVideoTitleError(false);
    setVideoUrlError(false);
    if (
      videoTitle &&
      videoDescription && videoLink 
     
    ) {
      const plainDescription =
      videoDescription && videoDescription.replace(/<(?:\/)?[sp]+[^>]*>/g, '');
        
      const payload = {
        moduleId,
        videoId: videoId,
        sectionId: sectionId,
        videoLink: videoLink,
        videoTitle: videoTitle,
        videoDescription: plainDescription,
        duration : videoDuration
      };

      dispatch(editVideoDetails(payload));


     setDisableModuleInputs(true);
   //  setUpdateVideo(true)
     setHideSaveChangesBtn(true)
    }else{
      if(videoDescription.length < 1){
        setVideoDescError(true);
      }
      if(videoTitle.length < 1){
        setVideoTitleError(true);

      }
      if(videoLink.length < 1){
        setVideoUrlError(true);

      }
    }
  };


  const exitModal = () => {
    setVideoDescError(false);
    setVideoTitleError(false);
    setVideoUrlError(false);
    if(videoLink && videoTitle && videoDescription) {
      
      onClose();
    }else{
      if(videoDescription.length < 1){
        setVideoDescError(true);
      }
      if(videoTitle.length < 1){
        setVideoTitleError(true);

      }
      if(videoLink.length < 1){
        setVideoUrlError(true);

      }
    }
  };


  useEffect(() => {
    const quiz:IQuiz[] = _quizzesFromState.filter((quiz:IQuiz) => quiz?.videoId === videoId);
    if(quiz.length > 0){
      setHasQuiz(true);
      setIncludeQuiz(true)
      setIncludeDocument(true)
      set_QuizFromState(quiz[0])
      const addQuestions =quiz[0]?.questions.filter(question => question.choices.length > 0 );
      setQuestions(addQuestions)
      setQuizId(quiz[0].id);
      setViewCreatedQuestion(false)
    }
    console.log("My Quiz", quiz[0]);
  })

  useEffect(() => {
    //each time we add a question we need a questionId of that question
    const quizQuestions = _quizFromState?.questions.map(
      (questions) => questions
    );
    if (quizQuestions && quizQuestions?.length > 0) {
      const lastQuestionId = quizQuestions?.map((question) => question.id);
      setQuestionId(lastQuestionId[quizQuestions?.length - 1]);
    }
  }, [_quizFromState?.questions]);

  useEffect(() => {
    const choices = _quizFromState?.questions.map(
      (question) => question.choices
    );

    const hasQuestion = _quizFromState?.questions?.filter(
      (question: IQuestion) => question.id === questionId
    )!;
    setChoices(hasQuestion?.length > 0 && hasQuestion[0]?.choices);
  });

  useEffect(() => {
    getTodaysDate();
    const section = _courseFromState.sections.filter(
      (section) => section.id === sectionId
    )!;

    const Module = section[0].modules.filter((Module:IModule) => Module.id === moduleId);

    const video = Module[0]?.videos.filter((video:IVideo) => video.id === videoId)!;
      if(video && video.length > 0) {
        setVideoTitle(video[0]?.title);
        setVideoDescription(video[0]?.description);
        setVideoReference(video[0]?.reference)
        setVideoLink(video[0]?.videoLink);
        setDisableModuleInputs(true);
        setVideoDuration(video[0]?.duration);
      }

  },[]);

  return (
    <div
      className="mdk-drawer-layout js-mdk-drawer-layout"
      data-push=""
      data-responsive-width="992px"
      data-domfactory-upgraded="mdk-drawer-layout"
    >
      <div
        className="mdk-drawer-layout__content page-content"
        style={{ transform: "translate3d(0px, 0px, 0px)" }}
      >
        <div className="card-header p-0 nav">
          <div className="row no-gutters" role="tablist">
            <div className="col-auto">
              <a
                href="#"
                data-toggle="tab"
                onClick={(e) => tabSelect(1, e)}
                role="tab"
                aria-selected="true"
                className={
                  toggler === 1
                    ? "dashboard-area-tabs__tab card-body d-flex flex-row align-items-center justify-content-start active"
                    : "dashboard-area-tabs__tab card-body d-flex flex-row align-items-center justify-content-start"
                }
              >
                <span className="h2 mb-0 mr-3">1</span>
                <span className="flex d-flex flex-column">
                  <strong className="card-title">Edit Video</strong>
                  {/* <small className="card-subtitle text-50">Ongoing Projects</small> */}
                </span>
              </a>
            </div>
            <div className="col-auto border-left border-right">
              <a
                href="#"
                data-toggle="tab"
                style={{cursor:"pointer"}}
                onClick={addQuiz}
                role="tab"
                aria-selected="true"
                className={
                  toggler === 2
                    ? "dashboard-area-tabs__tab card-body d-flex flex-row align-items-center justify-content-start active"
                    : "dashboard-area-tabs__tab card-body d-flex flex-row align-items-center justify-content-start"
                }
              >
                <span className="h2 mb-0 mr-3">2</span>
                <span className="flex d-flex flex-column">
                  <strong className="card-title">Add Quiz</strong>
                  {/* <small className="card-subtitle text-50">Past Projects</small> */}
                </span>
              </a>
            </div>
            <div className="col-auto border-left border-right">
              <a
                href="#"
                style={{cursor:"pointer"}}
                data-toggle="tab"
                onClick={addDocument}
                role="tab"
                aria-selected="true"
                className={
                  toggler === 3
                    ? "dashboard-area-tabs__tab card-body d-flex flex-row align-items-center justify-content-start active"
                    : "dashboard-area-tabs__tab card-body d-flex flex-row align-items-center justify-content-start"
                }
              >
                <span className="h2 mb-0 mr-3">3</span>
                <span className="flex d-flex flex-column">
                  <strong className="card-title">Add Document</strong>
                  {/* <small className="card-subtitle text-50">Past Projects</small> */}
                </span>
              </a>
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }} className="page-section border-bottom-2">
          <div className="container page__container">
            <div className="row">
            <div
                className={toggler === 1 ? "col-md-8" : "col-md-8 d-md-none"}
              >
                <div className="page-separator">
                  <div className="page-separator__text">Basic information</div>
                </div>
          
                    <label className="form-label">Video title
                    {videoTitleError && (
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
                    <div className="form-group mb-24pt">
                      <input
                        type="text"
                        disabled={disableModuleInputs}
                        className="form-control form-control-lg"
                        placeholder="Video Title"
                        value={videoTitle}
                        onChange={(e) => {
                
                          setVideoTitle(e.target.value);
                        }}
                      />
                      <small className="form-text text-muted">
                        Please see our <a href="">video title guideline</a>
                      </small>
                    </div>
                    <label className="form-label">Video Description
                    
                    {videoDescError && (
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
                    <div style={{ height: "200px", overflow: "auto" }}>

                    <ReactQuillWrapper
                         readOnly={disableModuleInputs}
                            style={{ height: "100px" }}
                            value={videoDescription}
                            onChange={(value: string) => {
                              setVideoDescription(value); // Pass the new description
                            
                            }}
                            placeholder="Video description..."
                            modules={moduleToolbar}             
      />
           
                     
                    </div>
                   <div style={{position:"relative", bottom :"2.5em"}}>
                   <label className="form-label">Video URL
                   {videoUrlError && 
                              <span
                                style={{
                                  color: "tomato",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                *required field
                              </span>
                            }
                   </label>
                    <div className="form-group mb-24pt">
                      <input
                        type="text"
                        disabled={disableModuleInputs}
                        className="form-control form-control-lg"
                        placeholder="Video URL"
                        value={videoLink}
                        onChange={(e) => {
                       
                          setVideoLink(e.target.value);
                        }}
                      />
                  
                    </div>
                   </div>
                   <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  width: "150px",
                  position:"relative",
                  bottom:"2em"

                }}
              >
               { !disableModuleInputs ?
                 <a
                 onClick={editVideo}
                 href="#"
                 className="btn btn-outline-secondary mb-24pt mb-sm-0"
                 >
                 Update Details
               </a>:
               <a
                 onClick={() => setDisableModuleInputs(false)}
                 href="#"
                 className="btn btn-outline-secondary mb-24pt mb-sm-0"
                 >
                 edit Details
               </a>
               }
              </button>

                  
              
              </div>

        
              {/*Quiz Content Starts Here*/}
              {
            !viewCreatedQuestion &&    <div
            className={
              toggler === 2 ? "col-md-8" : "col-md-8 d-md-none"
            }
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
                          Question {questionNumber} of{" "}
                          {questions?.length}
                        </div>
                        <div className="card-subtitle text-70 paragraph-max mb-16pt">
                          {questions?.length > 0 &&
                            questions[questionNumber - 1]
                              ?.questionDescription}
                        </div>
                        <div>
                          <a
                            onClick={() =>
                              setOpenChoices((prev) => !prev)
                            }
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
                                {questions[
                                  questionNumber - 1
                                ].choices.map(
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
                      </div>
                      <span className="text-muted mx-12pt">
                        {questions[questionNumber - 1].points} pt
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
                                questions[questionNumber - 1].id
                              );
                              setEditQuizQuestion(true);
                          
                            }}
                          >
                            Edit Question
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              deleteQuestionFromQuizState(questions[questionNumber - 1].id)
                         
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
                        <a
                          href="#"
                          className="btn btn-outline-secondary"
                        >
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
                        <a
                          href="#"
                          className="btn btn-outline-secondary"
                        >
                          prev
                        </a>
                      </button>
                    </li>
                  </ul>
                )}

          </div>
           }
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
                           // placeholder="Enter your question description here..."

                         }}        
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
                        {isQuestionCreated && (
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
                        expandedSection   === true ? "open" : ""
                      }`}
                      key={"section.id"}
                    >

{choices?.length > 0 && choices?.map((option: IChoice, index: any) => (
                                   <a
                                   
                                
                                  key={index}
                                   style={{ cursor: "pointer" ,backgroundColor: '#e9ecef',padding:"8px",marginTop:"5px",borderRadius:"5px"}}
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
        onChange={(e) => onChange(e.target.checked, option?.id)}
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
                               
                             
                                ))}
                  

                      </div>

                            </div>
                          </>
                        )}
                        {isQuestionCreated && (
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

              {editQuizQuestion && (
                <>
                  <div
                    className={
                      toggler === 2 ? "col-md-8" : "col-md-8 d-md-none"
                    }
                  >
                    <div>
                      <div className="page-separator">
                        <div className="page-separator__text">Edit Question</div>
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
                        expandedSection   === true ? "open" : ""
                      }`}
                      key={"section.id"}
                    >

{choices?.length > 0 && choices?.map((option: IChoice, index: any) => (
                                   <a
                                 
                                  key={index}
                                   style={{ cursor: "pointer" ,backgroundColor: '#e9ecef',padding:"8px",marginTop:"5px",borderRadius:"5px"}}
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
        onChange={(e) => onChange(e.target.checked, option?.id)}
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
                               
                             
                                ))}
                  

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

              <div
                className={toggler === 3 ? "col-md-8" : "col-md-8 d-md-none"}
              >
                <div className="form-group m-0">
                  <div className="custom-file">
                    <input
                      type="file"
                      id="file"
                      onChange={handleChangeDocument}
                      className="custom-file-input"
                    />
                    <label className="custom-file-label">Choose file</label>
                  </div>
                </div>

                <p style={{ color: "rgba(39,44,51,.35)", paddingTop: "10px" }}>
                  {document?.name}
                </p>
              </div>

              <div className="col-md-4">
                <div className="card" style={{ width: "auto" }}>
                  <div className="card-header text-center">
                  <button
                  onClick={exitModal}
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          outline: "none",
                          width: "150px",
                        }}
                      >
                        <a
                      
                          href="#"
                          className="btn btn-accent"
                        >
                          save video
                        </a>
                      </button>
                  </div>

                  <div className="list-group list-group-flush">
                    <div className="list-group-item d-flex">
                      <a className="flex" href="#">
                        <strong>Include Quiz?</strong>
                      </a>
                      <input
                        type="checkbox"
                        checked={includeQuiz}
                        onChange={addQuiz}
                      />
                    </div>
                    {/*Quiz Content Ends Here*/}

                    <div className="list-group-item d-flex">
                      <a href="#" className="flex">
                        <strong>Include Documents?</strong>
                      </a>
                      <input
                        type="checkbox"
                        checked={includeDocument}
                        onChange={addDocument}
                      />
                    </div>
                  </div>
                </div>
                <div className="card">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src={videoLink}
                  //   allowFullScreen=""
                />
              </div>
              <div className="card-body">
                <label className="form-label">URL</label>
                <input
                  type="text"
                  className="form-control"
                    value ={videoLink}
                  placeholder="Enter Video URL"
                />

                <small className="form-text text-muted">
                  Enter a valid video URL.
                </small>
              </div>
            </div>
            <div className="card-body">
                <label className="form-label">Video Duration</label>
                <input
                  type="text"
                  className="form-control"
                  disabled={disableModuleInputs}
                  onChange={(e:any) => setVideoDuration(e.target.value)}
                    value ={videoDuration}
                  placeholder="Enter Video Duration"
                />

               
              </div>
              </div>
            </div>
          </div>
        </div>
        {/* // END Page Content */}
      </div>
    </div>
  );
};
