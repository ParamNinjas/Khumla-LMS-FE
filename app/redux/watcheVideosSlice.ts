import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IQuiz, IQuestion, IChoice, IQuizState, IUpdateQuizDetailState, IUpdateQuestionDetailState, IDeleteQuestion, IDeleteChoice} from "../interfaces/quiz";
import { AppStore } from "./store";
import { ICourse, IModule, IVideo, IWatchedVideo, IWatchedVideos } from "../interfaces/courses";
import { Api } from "../lib/restapi/endpoints";
import { IUser } from "../interfaces/user";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const user = cookies.get("param-lms-user")

export const initialState: IWatchedVideos = {
  videos: [] as IWatchedVideo[],
};

export const watchedVideoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setSelectedWatchedForEdit(state, action) {
      return action.payload;
    },

    createWatchedDetail(state, action) {
      const _action = action.payload as IWatchedVideo;
      const newWatchedVideo: IWatchedVideo = {
        courseId: _action.courseId,
        videoId : _action.videoId,
        studentId : user?.id,
        watched: _action.watched
      };

 

      state.videos.push(newWatchedVideo);
      
    // },
    // updateQuizzes(state, action: PayloadAction<IQuiz[]>) {
    //   state.quizzes.quizzes = action.payload;
    // },

 
  },
}
});

export const {
  createWatchedDetail
} = watchedVideoSlice.actions;

export const getSelectedWatchedVideoForEdit = (state: AppStore) => state.watchedVideos.videos;

export default watchedVideoSlice.reducer;
