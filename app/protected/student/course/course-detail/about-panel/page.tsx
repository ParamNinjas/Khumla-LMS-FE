"use client"
import { ICourse } from "@/app/interfaces/courses";
import { getSelectedCourseForEdit } from "@/app/redux/courseSlice";
import React,{useState, useEffect} from "react";


const CourseInfoPanel = (course:any) => {

    const [data, setData] = useState<ICourse>(course.course);
    const [duration, setDuration] = useState("");



    const getData = () => {
        console.log("my new data",data)

        let totalDuration = 0;

        // Iterate through sections using forEach
        data?.sections?.forEach((section) => {
            // Iterate through modules using forEach
            section?.modules.forEach((module) => {
                // Iterate through videos using forEach
                module.videos.forEach((video) => {
                    // Extract duration in seconds (assuming it's in the format '5:30')
                    const [minutes, seconds] = video.duration.split(':').map(Number);
                    const videoDuration = minutes * 60 + seconds;
                    totalDuration += videoDuration;
                });
            });
        });
        // Calculate hours, minutes, and remaining seconds
        const hours = Math.floor(totalDuration / 3600);
        const minutes = Math.floor((totalDuration % 3600) / 60);
        const seconds = totalDuration % 60;
        setDuration(hours.toString() + "hrs " + minutes.toString() + "mins " + seconds.toString() + "sec")
        console.log(`Total duration for videos: ${hours} ${minutes} ${seconds}`, duration);
    }



    useEffect(() => {
        setData(course);
        getData();
        console.log("Panel info", course)
      },[]); 
  

      if (course.isLoading) {
        return <p>Loading...</p>;
      }
    return (
        
    <div className="navbar navbar-expand-sm navbar-light bg-white border-bottom-2 navbar-list p-0 m-0 align-items-center">
      <div className="container page__container">
        <ul className="nav navbar-nav flex align-items-sm-center">
          <li className="nav-item navbar-list__item">
            <div className="media align-items-center">
              <span className="media-left mr-16pt">
              <span className="material-icons text-primary">account_circle</span>
              </span>
              <div className="media-body">
                <a className="card-title m-0" href="teacher-profile.html">
                  {data?.creatingUserName}
                </a>
                <p className="text-50 lh-1 mb-0">Instructor</p>
              </div>
            </div>
          </li>
    
          <li className="nav-item navbar-list__item">
            <i className="material-icons text-muted icon--left">assessment</i>
            Beginner
          </li>
          <li className="nav-item ml-sm-auto text-sm-center flex-column navbar-list__item">
          {duration}
          </li>
        </ul>
      </div>
    </div>
    )

}

export default CourseInfoPanel;

