import { createSlice } from "@reduxjs/toolkit";

const UPLOAD_FILE = "UPLOAD_FILE";

interface FileState {
  files: File[];
}

const initialState: FileState = {
  files: [],
};

export const fileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPLOAD_FILE:
      return {
        ...state,
        files: [...state.files, action.payload],
      };
    default:
      return state;
  }
};

export const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    fileReducer,
  },
});

export const uploadFile = (files: File[]) => ({
  type: UPLOAD_FILE,
  payload: files,
});

export default fileSlice.reducer;
