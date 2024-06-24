export interface IUnitStandard {
    noOfDocuments: number;
    id?: string,
    title: string,
    description:string
    courseId: string,
    status: number,
    lengthOfParagraph: string,
    queryPrompt:string;
    audioVoice:string
    documentTone: string,
    createdAt?: string,
    updatedAt: string
}

export interface IAudio {
    id: string ;
    audioStatus : number;
}

export interface IVideo {
    id: string ;
    videoLink : number;
}

export interface IParaPhraseResponseObject{
    id: string;
    title: string;
    description: string;
    documentId: string;
    moduleId: string;
    audioBlobUrl: string;
    audioStatus: number;
    status: number;
    videoUrl: string;
    isQuizGenerated: boolean;
    isSystemGenerated: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface IGenerateAudio {
    
        text: string;
        voice: string;
        isSSML: boolean;
        paraphraseId: string;

}