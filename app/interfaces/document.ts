export interface IDocument {
    creatingUser: string;
    createdDate: string;
    modifyingUser: string;
    reference: string;
    title: string;
    url: string;
    modifiedDate: string;
    state: number;
    file:any
}

export interface IDocumentState{
    documents: {
        documents: IDocument[]
    }
}

export interface IUpdateDocumentDetailState {
    title: string, 
    createdDate?: string;
    modifyingUser?: string;
    reference: string;
    url?: string;
    file : any
}
