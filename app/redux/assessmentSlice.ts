import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAssessmentState, IAssessment, IAssessmentQuestion, IChoice } from "../interfaces/assessment";
import { AppStore } from "./store";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const loogedInUser = cookies.get("param-lms-user");

const generateUniqueId = () => {
  return Math.random().toString(36).substring(7);
};
function sortChoicesByOrder(a: IChoice, b: IChoice) {
  return a.order - b.order;
}

function sortQuestionsByOrder(a: IAssessmentQuestion, b: IAssessmentQuestion) {
  return a.order - b.order;
}


const today = new Date();
const year = today.getFullYear();
let month: number | string = today.getMonth() + 1;
let day: number | string = today.getDate();

month = month < 10 ? `0${month}` : month;
day = day < 10 ? `0${day}` : day;

let todayDate = (`${year}-${month}-${day}`);

const initialState: IAssessmentState = {
  assessment: {
    courseId: generateUniqueId(),
    questions: [] as IAssessmentQuestion[],
    createdByUserId: loogedInUser?.id,
    createdDate: todayDate,
    modifiedByUserId: loogedInUser?.id,
    modifiedAt: todayDate,
    dueDate: "",
    courseTitle: "",
    intructor: "",
    instructorName:"",
    fileUrl:"",
    status: 0,
    instructorId:"",
    isRetaken : false,
    attempts : 3
  } as IAssessment
};

export const assessmentSlice = createSlice({
  name: "assessment",
  initialState,
  reducers: {
    setSelectedAssessmentForEdit(state, action) {
      state.assessment = action.payload;
    },
    resetAssessmentState: state => {
      state = initialState;
    },

    createAssessmentDetail(state, action) {
      const { dueDate,courseTitle ,intructor,isRetaken} = action.payload;
      const newState = {
        courseId: generateUniqueId(),
        questions: [] as IAssessmentQuestion[],
        createdByUserId: loogedInUser?.id,
        createdDate: todayDate,
        modifiedByUserId: loogedInUser?.id,
        modifiedAt: todayDate,
        dueDate: dueDate,
        courseTitle: "",
        instructorName:"",
        instructorId:"",
        status: 0,
        isRetaken : isRetaken,
        attempts : 3
      }

      state.assessment = newState;

    },

    updateAssessment(state, action) {
      const _action = action.payload as IAssessment;
      const newState = {
        id : _action.id,
        courseId: _action.courseId,
        questions: _action.questions,
        createdByUserId: _action.createdByUserId,
        createdDate: _action.createdDate,
        modifiedByUserId: _action.modifiedByUserId,
        modifiedAt: _action.modifiedAt,
        dueDate: _action.dueDate,
        courseTitle: _action.courseTitle,
        instructorName: _action.instructorName,
        instructorId: _action.instructorId,
        status: 0,
        isRetaken : _action.isRetaken,
        attempts : 3

      }
      state.assessment = newState;
    },

    addAssessmentQuestion(state, action) {
      const { questionDescription, points, questionType } = action.payload;
      const newQuestion: IAssessmentQuestion = {
        id: generateUniqueId(),
        questionDescription: questionDescription,
        choices: [],
        points: points,
        order: state.assessment.questions.length + 1,
        criteraId: "",
        questionType: questionType
      };

      state.assessment.questions.push(newQuestion);
    },
    addChoicesToQuestion(state, action: PayloadAction<{ questionId: string, choiceDescription: string, isCorrect: boolean }>) {
      const { questionId, choiceDescription, isCorrect } = action.payload;

      const questionIndex = state.assessment.questions.findIndex((q) => q.id === questionId);

      if (questionIndex !== -1) {
        const newChoice: IChoice = {
          id: generateUniqueId(),
          order: state.assessment.questions[questionIndex].choices.length + 1,
          choiceDescription: choiceDescription,
          isCorrect: isCorrect,
        };

        state.assessment.questions[questionIndex].choices.push(newChoice);
      }
      else {
        console.log("Choice not created");
      }
    },
    updateChoiceDetails(state, action: PayloadAction<{ questionId: string, choiceId: string, choiceDescription: string, isCorrect: boolean }>) {
      const { questionId, choiceId, choiceDescription, isCorrect } = action.payload;

      const quizIndex = state.assessment.questions.findIndex((q) => q.id === questionId);


      if (quizIndex !== -1) {
        const updatedChoices = state.assessment.questions[quizIndex].choices.map((choice: IChoice) => {
          if (choice.id === choiceId) {
            return { ...choice, choiceDescription, isCorrect };
          }
          return choice;
        });
        state.assessment.questions[quizIndex].choices = updatedChoices.sort(sortChoicesByOrder);
      }
      else {
        console.log("Choice is not updated");
      }
    },
    deleteChoiceFromQuestion(state, action) {
      const { questionId, choiceId } = action.payload;


      const questionIndex = state.assessment.questions.findIndex((question: IAssessmentQuestion) => question.id === questionId);

      if (questionIndex !== -1) {
        const updatedChoices = state.assessment.questions[questionIndex].choices.filter((choice) => choice.id !== choiceId);
        state.assessment.questions[questionIndex].choices = updatedChoices;
      }
    },

    deleteAssessmentQuestion(state, action) {
      const { questionId } = action.payload;
      state.assessment.questions = state.assessment.questions.filter((question: IAssessmentQuestion) => question.id !== questionId);
    },

    updateAssessmentQuestion(state, action) {
      const { questionId, questionDescription, points, questionType } = action.payload;

      const questionIndex = state.assessment.questions.findIndex((question: IAssessmentQuestion) => question.id === questionId);

      if (questionIndex !== -1) {
        state.assessment.questions[questionIndex] = {
          ...state.assessment.questions[questionIndex],
          questionDescription,
          points,
          questionType
        };

        // Sort the questions by order
        state.assessment.questions.sort(sortQuestionsByOrder);
      }
    },
  },
});

export const {
  setSelectedAssessmentForEdit,
  createAssessmentDetail,
  updateAssessment,
  addAssessmentQuestion,
  deleteAssessmentQuestion,
  updateChoiceDetails,
  updateAssessmentQuestion,
  addChoicesToQuestion,
  resetAssessmentState,
} = assessmentSlice.actions;

export const getSelectedAssessmentForEdit = (state: AppStore) => state.assessment;

