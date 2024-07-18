"use client"
import { useState } from 'react';
import Cookies from 'universal-cookie';
import { Api } from '@/app/lib/restapi/endpoints';
import { ICourse, ISection, IModule, IVideo } from '@/app/interfaces/courses';
import { useEffect,useRef  } from 'react'
import {  useDispatch, useSelector } from "react-redux";
import { IUser } from '@/app/interfaces/user';
import { getSelectedCourseForEdit } from '@/app/redux/courseSlice';
import { getAuthor } from '@/app/lib/getAuthor';
import IComment from '@/app/interfaces/comment';
import "../../../../components/videoSidebar.css";
import './main.css'
import ConfirmationModal from '@leafygreen-ui/confirmation-modal';
import {useRouter} from "next/navigation";
import { IQuiz } from '@/app/interfaces/quiz';
import { getSelectedQuizForEdit } from '@/app/redux/quizSlice';
import { FaVideo } from 'react-icons/fa';
import VideoSibar from '../../../../components/VideoSidebar';
import VideoPlayer from '../../../../components/ReactPlayer';
import { createWatchedDetail } from '@/app/redux/watcheVideosSlice';
const cookies = new Cookies();


export default function CourseDetail() {

  const [data, setData] = useState<ICourse>();
  const [sections, setSection] = useState<ISection[]>([])
  const [videos, setVideos] = useState<IVideo[]>([])
  const [author, setAuthor] = useState<IUser>();
  const [comments, setComments] = useState<IComment[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [allVideos, setAllVideos] = useState<IVideo[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string>("");
  const [quizId, setQuizId] = useState<string>("")
  const _courseFromState = useSelector(getSelectedCourseForEdit).course;
  const _quizzesFromState: IQuiz[] = useSelector(getSelectedQuizForEdit).quizzes;
  const [videoId, setVideoId] = useState<string>(_courseFromState.sections[0]?.modules[0]?.videos[0]?.id)
  console.log("Quizzes from state",_quizzesFromState)
  const [open, setOpen] = useState(false);
  const [video, setVideo] = useState<IVideo>(_courseFromState.sections[0]?.modules[0]?.videos[0])
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [expandedSection, setExpandedSection] = useState<any>(null);
  const [hideSidebar, setHideSidebar] = useState<boolean>(true)
  
  const [duration, setDuration] = useState(0);


  const dispatch = useDispatch();

  const handleDuration = (duration:any) => {
    setDuration(duration);
  };
  const formatDurationToMinutes = (durationInSeconds:any) => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const HideSidebar = () => {
    setHideSidebar((prev) => !prev)
  }

  const playerRef = useRef(null);

  const router = useRouter();


const cancelQuiz = () => {
  setOpen(false);
  if (currentVideoIndex < allVideos.length - 1) {
    setCurrentVideoIndex(currentVideoIndex + 1);
    setQuizId("");
  }
}

const checkIdMatchesCourses = (dataList:any, givenId:string) => {
  for (const item of dataList) {
      const courses = item.data.courses;
      if (courses.includes(givenId)) {
          setIsEnrolled(true)
          return true;
      }
  }
  setIsEnrolled(false)
  return false;
};

const getEnrolledCourses = async () => {
  var student = cookies.get('param-lms-user');
   const res = await Api.GET_EnrolledCoursesByStudentId(student.id);
   if(res){
    console.log(checkIdMatchesCourses(res, state?.id));
    console.log("Enrolled courses", res)
   }
}

  useEffect(() => {
    getEnrolledCourses();
    // Set the initial video when the component mounts
    if (allVideos.length > 0) {
      setSelectedVideo(allVideos[currentVideoIndex].videoLink);
    }
  }, [allVideos, currentVideoIndex]);

  const handleVideoEnd = () => {

    const watchedVideo  = {
      courseId: _courseFromState.id,
      videoId : allVideos[currentVideoIndex].id,
      creatingUserName:_courseFromState.creatingUserName,
      watched: true
    }
   
    dispatch(createWatchedDetail(watchedVideo))
    setOpen(false);
 
    const quizFromStorage = localStorage.getItem("student-quizzes");
  
    if (quizFromStorage) {
      try {
        const quizzes = JSON.parse(quizFromStorage)
        .filter((quiz: IQuiz) => quiz.questions.length > 0);
      
        const currentVideoId = allVideos[currentVideoIndex].id;

        console.log("ID",currentVideoId)
        const getQuiz: IQuiz = quizzes.find((quiz: IQuiz) => quiz.videoId === currentVideoId);
        console.log("Opened Quiz", getQuiz);
        if (getQuiz?.id) {
          setQuizId(getQuiz.id);
          setOpen(!open);
        } else {
          if (currentVideoIndex < allVideos.length - 1) {
  
            setCurrentVideoIndex(currentVideoIndex + 1);
          }
        }
      } catch (error) {
        console.error("Error parsing quizzes from localStorage:", error);
      }
    }
  };
  
  const state: ICourse = useSelector(getSelectedCourseForEdit).course;
  useEffect(() => {
    setSection(state?.sections);

  
    console.log("Link",state)
    state.sections.forEach((section:ISection) => {
        section.modules.forEach((Module:IModule) => {
            if (Module.videos.length > 0) {
                videos.push(...Module.videos);
            }
        });
    });

    setAllVideos(videos);

    
    setData(state);
    if (state) {
      setIsLoading(false);
    }
    getUserCourses(state?.creatingUser!);
    const fetchData = async () => {
      setAuthor(await getAuthor(state?.creatingUser!));

      // Fetch comments
      var _comments = await Api.GET_CommentsByReference(state.id);
      if (_comments) {
        setComments(_comments?.map((comment) => comment.data) as any);
      }
    }
    fetchData();
  }, []);

  async function getUserCourses(id: string) {
    var userCourses = await Api.GET_CoursesByUserId(id);

    console.log("Author courses", userCourses?.data);
  }

  const handleVideoSelect = (video: IVideo) => {

    const index = allVideos.findIndex((v: IVideo) => v.id === video.id);
    setSelectedVideo(_courseFromState.sections[0]?.modules[0]?.videos[index]?.videoLink);
    setCurrentVideoIndex(index);
    setVideoId(_courseFromState.sections[0]?.modules[0]?.videos[index].id);
    setVideo(_courseFromState.sections[0]?.modules[0]?.videos[index])
    console.log("VideoId Selected", video?.id);
  };


  const openQuiz = () => {
    setOpen(false);
    goToQuiz()
  }

  const goToQuiz = () => {

    router.push(`/protected/student/course/quiz?id=${quizId}`);
    
  
  }

  const goToCourse = () => {
    setEnrollOpen(false);
  }

  const courseEnrollment = async (course:any) => {
    setIsLoading(true)
    const cookies = new Cookies();

    const userData = cookies.get("param-lms-user");
    //console.log("before", course, userData)
    const payload = {
      userId: userData?.id,
      creatingUser: course?.creatingUser,
      creatingDate: course?.creatingDate,
      modifiedDate: course?.modifiedDate,
      modifyingUser: course?.modifyingUser,
      state: 0,
      courses:[course?.id]
    }
    const enroll = await Api.POST_CourseEnrollment(payload);
    if(enroll){
      setIsLoading(false);
      setEnrollOpen(true);
    }
    console.log("Enrolled", enroll) 
  }

  if(isLoading){
        return (
        <div>Loading</div>
        )
  }else
    return (


   
<div className="main">

  <div className='react-player-container'>
  <VideoPlayer
      selectedVideo = {selectedVideo}
      sections = {sections}
      cancelQuiz = {cancelQuiz}
      openQuiz = {openQuiz}
      handleVideoEnd= {handleVideoEnd}
      open= {open}
      handleDuration={handleDuration}
      HideSidebar = {hideSidebar}
      viewSidebar ={HideSidebar}
      playerRef={playerRef}
      video={video}
      videoId = {videoId}

      />
      
      <ConfirmationModal
        open={enrollOpen}
        onConfirm={() => goToCourse()}
        onCancel={close}
        title="Congratulations"
        buttonText="Get Started"
      >
        Thank you for enrolling for the course. click get started to complete the course
      </ConfirmationModal>
  
<div>
  {
      !isEnrolled ? 
      <button className="btn btn-primary" onClick={() => courseEnrollment(state)}>Enroll</button>
      :
      ''
    }
  
</div>
  </div>


    
       
<div  style={hideSidebar ? { width: "30%" , } : {display:"none"}}>

<VideoSibar HideSidebar = {HideSidebar} duration = {formatDurationToMinutes(duration)} sections={sections} handleVideoSelect={handleVideoSelect}/>
</div>

 </div>



  )
}