export interface IAssessment {
    id? : string;
    courseId: string;
    questions: IAssessmentQuestion[];
    createdByUserId: string;
    createdDate: string;
    modifiedByUserId: string;
    modifiedAt: string;
    dueDate: string;
    courseTitle: string;
    instructorName: string;
    status: number;
    fileUrl?: string;
    instructorId:string;
    isRetaken : boolean;
    attempts : number;
}

export interface IAssessmentState {
    assessment: IAssessment
}

export interface IAssessmentQuestion {
    id: string
    questionDescription: string
    choices: IChoice[]
    points: number
    order: number
    criteraId: string
    questionType: number

}

export interface QuestionType {
    multipleChoice: number | 0,
    shortAnswer: number | 1,
}

export interface IChoice {
    id?: string
    choiceDescription: string
    isCorrect: Boolean
    order: number
}
