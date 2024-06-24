export interface IChoice {
    quizId?: string;
    questionId?: string;
    id: string;
    order: number;
    choiceDescription: string;
    isCorrect: boolean;
}


export interface IQuestion {
    id: string;
    questionDescription: string;
    choices: IChoice[];
    points: number
    order: number
    criteria?: string

}

export interface IAssessmentChoice {
    order: number;
    choiseDescription: string;
    isCorrect: boolean;
}


export interface IAssessmentQuestion {
    id: string;
    questionDescription: string;
    choices: [];
    points: number
    order: number
    criteria: string

}

export interface IDeleteQuestion {
    quizId?: string;
    questionId?: string;

}
export interface IDeleteChoice {
    quizId?: string;
    questionId?: string;
    choiceId?: string
}

export interface IUpdateQuestionDetail {
    questionId: string;
    questionDescription: string;
    points: number
}

export interface IQuiz {
    id: string;
    questions: IQuestion[];
    reference: string;
    createdByUserId: string;
    modifiedByUserId: string;
    createdDate: string;
    modifiedDate: string;
    videoId: string;
    state:number
}


export interface IQuizState {
    quizzes: {
        quizzes: IQuiz[]
    }
}

export interface IUpdateQuizDetailState {
    reference: string;
    createdByUserId: string;
    modifiedByUserId: string;
    createdDate: string;
    videoId: string;
    modifiedDate: string;
    
}



export interface IUpdateQuestionDetailState {
    quizId: string;
    questionId: string,
    questionDescription: string;
    points: number
}


export interface IMarks {
    studentId: string
    points: number
    courseId: string
    quizId: string
    createdAt: string
    reference: string
    status: number
}



export interface IAssessment{
    id:string
    CourseId:string
    Questions: IQuestion[]
    createdByUserId: string
    createdDate: string
    modifiedByUser: string
    modifiedAt: string
    dueDate: string
    duration: string
}
