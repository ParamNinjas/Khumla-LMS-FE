import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer ,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { courseSlice } from "./courseSlice";
import { quizSlice } from "./quizSlice";
import { assessmentSlice } from "./assessmentSlice";
import {documentSlice } from "./documentSice";
import {watchedVideoSlice} from "./watcheVideosSlice";
import { fileReducer } from "./filesSlice";

const persistCourse = {
  key: 'course',
  storage: storage, 
  whitelist: ['course'], 
};

const persistQuiz = {
  key: 'quizzes',
  storage: storage, 
  whitelist: ['quizzes'], 
};


const persistAssessment = {
  key: 'assessment',
  storage: storage, 
  whitelist: ['assessment'], 
};

const persistDocument = {
  key: 'documents',
  storage: storage, 
  whitelist: ['documents'],  
};

const persistWatchedVideo = {
  key: 'videos',
  storage: storage, 
  whitelist: ['videos'],  
};

const persistFiles = {
  key: 'files',
  storage: storage, 
  whitelist: ['videos'],  
};

const persistedCourseReducer = persistReducer(persistCourse, courseSlice.reducer);
const persistedQuizReducer = persistReducer(persistQuiz, quizSlice.reducer);
const persistedDocumentReducer = persistReducer(persistDocument, documentSlice.reducer);
const persistedWatchedVideoReducer = persistReducer(persistWatchedVideo, watchedVideoSlice.reducer);
const persistedAssessmentReducer = persistReducer(persistAssessment, assessmentSlice.reducer);
const persistFilesReducer = persistReducer(persistFiles, fileReducer);

export const store = configureStore({
  reducer: {
    course: persistedCourseReducer, 
    quizzes: persistedQuizReducer,
    documents: persistedDocumentReducer,
    assessment : persistedAssessmentReducer,
    watchedVideos : persistedWatchedVideoReducer,
    files : persistFilesReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      ignoredPaths: ['quizzes'] 
    },
  }),
});

export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
