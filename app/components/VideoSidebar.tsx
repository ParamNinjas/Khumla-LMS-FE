"use client";
import { IModule, ISection, IVideo } from "@/app/interfaces/courses";
import React, { useEffect, useState } from "react";
import { FaVideo } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getSelectedCourseForEdit } from "../redux/courseSlice";
import { getSelectedWatchedVideoForEdit } from "../redux/watcheVideosSlice";

interface VideoSidebarProps {
  sections: ISection[];
  duration: any;
  HideSidebar: () => void;
  handleVideoSelect: (video: IVideo) => void;
}

function VideoSibar({

  handleVideoSelect,
  duration,
  HideSidebar,
}: VideoSidebarProps) {
  const [expandedSection, setExpandedSection] = useState(null);
  const _courseFromState = useSelector(getSelectedCourseForEdit).course;
  const [height, setHeight] = useState<any>();
  const _watchedVideos : any[] = useSelector(getSelectedWatchedVideoForEdit);
  const [watchedVideosExist, setWatchedVideosExist] = useState<boolean>(false)
  console.log("_watchedVideos", _watchedVideos)

  const findSection = (id: string) => {
    const section = _courseFromState.sections.find(
      (section: ISection) => section.id === id
    );

    const foundSection = _courseFromState.sections.find(
      (section: ISection) => section.id === id
    );

    if (foundSection) {
      const videosCount = foundSection.modules.reduce(
        (acc: any, Module: IModule) => {
          return (
            acc +
            Module.videos.filter((video: IVideo) => parseInt(video.length) > 0)
              .length
          );
        },
        0
      );
      const height = videosCount * 100;
      setHeight(height);
    }
  };

  const handleSectionClick = (section: any) => {
    if (expandedSection === section.id) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section.id);
      findSection(section?.id);
    }
  };

  const checkIfCourseExist = () => {

    const courseVideos = _watchedVideos.filter((video:any) => video?.courseId === _courseFromState?.id)
    if(courseVideos.length > 0){
      setWatchedVideosExist(true);
      console.log("Watched videos", watchedVideosExist)
    }
  }

  useEffect(() => {
    checkIfCourseExist();
  })

  return (
    <div className="section">
      {_courseFromState?.sections[0]?.modules[0]?.videos.length > 0 && (
        <h3 className="h3">
          Course Content{" "}
          <span onClick={HideSidebar} className="title-content">
            X
          </span>
        </h3>
      )}
      <div className="video-sidebar">
        <div className="accordion js-accordion accordion--boxed " id="parent">
          {_courseFromState.sections.map((section: ISection, index: number) => (
            <div className="" key={section.id}>
              <a
                style={{
                  cursor: "pointer",
                  backgroundColor: "#f5f7fa",
                  fontSize: "large",
                  borderBottom: "1px solid lightgrey",
                }}
                className="accordion__toggle"
                data-toggle="collapse"
                data-target={`#course-toc-${section.id}`}
                data-parent="#parent"
              >
                <span
                  style={{ cursor: "pointer" }}
                  className="flex section_title"
                >
                  Section {index + 1} : {section.title}
                </span>

                <span
                  onClick={() => handleSectionClick(section)}
                  className="accordion__toggle-icon material-icons"
                >
                  {expandedSection === section.id
                    ? "keyboard_arrow_up"
                    : "    keyboard_arrow_down"}
                </span>
              </a>
              <div
                className={`accordion__menu collapse ${
                  expandedSection === section.id ? "show" : ""
                }`}
                id={`course-toc-${section.id}`}
              >
          {section.modules?.map((Module) =>
  Module.videos.map((video: IVideo, videoIndex:number) => {
    const isVideoWatched = watchedVideosExist && _watchedVideos.some(watchedVideo => watchedVideo.videoId === video.id && watchedVideo.watched);
    
    return (
      <div
        className="section_title"
        style={{
          cursor: "pointer",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderBottom: "1px solid lightgrey",
          padding: "10px 0px 0px 10px",
        }}
        key={video.id}
      >
        <div
          className="section_title"
          style={{ display: "flex", alignItems: "center" }}
        >
          <label
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "0.5em",
              position: "relative",
              top: "5px",
              fontSize: "large",
            }}
          >
            <input
              disabled
              type="checkbox"
              style={{ marginRight: "0.5em" }}
              checked={isVideoWatched}
            />
            <FaVideo className="video-icon ml-6" />
          </label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <a
              className="section_title"
              onClick={() => handleVideoSelect(video)}
              style={{
                fontSize: "medium",
                marginLeft: "0.5em",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "wrap",
              }}
            >
              {video.title}
            </a>
          </div>
        </div>

        <p style={{ display: "block" }}>
          <span style={{ fontSize: "small", paddingLeft: "5px" }}>
            {duration} min
          </span>
        </p>
      </div>
    );
  })
)}

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoSibar;
