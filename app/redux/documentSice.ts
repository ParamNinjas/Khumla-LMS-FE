import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppStore } from "./store";
import { IDocument, IDocumentState, IUpdateDocumentDetailState } from "../interfaces/document";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const loogedInUser = cookies.get('param-lms-user');

const initialState: IDocumentState = {
    documents: {
        documents:[] as IDocument[],
    }
};


const today = new Date();
const year = today.getFullYear();
let month: number | string = today.getMonth() + 1;
let day: number | string = today.getDate();

month = month < 10 ? `0${month}` : month;
day = day < 10 ? `0${day}` : day;

let todayDate = (`${year}-${month}-${day}`);

export const documentSlice = createSlice({
    name: "documents",
    initialState,
    reducers: {
        setSelectedDocumentForEdit(state, action) {
            state.documents = action.payload;
        },
        
        createDocumentDetails(state, action: PayloadAction<IUpdateDocumentDetailState>) {
            const _action = action.payload;
            const newDocument = {
                creatingUser: loogedInUser?.id,
                createdDate: todayDate,
                modifyingUser: loogedInUser?.id,
                reference: _action.reference,
                title: _action.title,
                url: "",
                file: _action.file,
                modifiedDate: todayDate,
                state: 0,
            };

            state.documents.documents.push(newDocument);
        },
        resetDocumentState: state => {
            state = initialState;
          },
  
        updateDocumentDetail(state, action: PayloadAction<IUpdateDocumentDetailState>) {
            const _action = action.payload;
            const index = state.documents.documents.findIndex(doc => doc.reference === _action.reference);
            if (index !== -1) {
                state.documents.documents[index] = {
                    ...state.documents.documents[index],
                    title: _action.title,
                    modifyingUser:loogedInUser?.id,
                    file: _action.file,
                    url:""
                };
            }
        },
    },
});

export const {
    setSelectedDocumentForEdit,
    createDocumentDetails,
    updateDocumentDetail,
    resetDocumentState
} = documentSlice.actions;

export const getSelectedDocumentForEdit = (state: AppStore) => state.documents.documents;
export default documentSlice.reducer;
