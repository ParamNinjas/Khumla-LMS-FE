import { createSlice } from "@reduxjs/toolkit";

import { AppStore } from "./store";
import { ICourse, ICourseState, IModule, ISection, IUpdateCourse, IUpdateCourseDetailState, IUpdateModuleDetailState, IUpdateSectionDetailState, IVideo } from "../interfaces/courses";
import { useState } from "react";
import Cookies from "universal-cookie";

const generateUniqueId = () => {
    return Math.random().toString(36).substring(7);
};

const cookies = new Cookies();
const loogedInUser = cookies.get('param-lms-user');

function sortSectionByOrder(a: ISection, b: ISection) {
  return a.order - b.order;
}
                                          
const initialState: ICourseState = {
    course: {
        id: generateUniqueId(),
        title: "",
        description: "",
        sections: [] as ISection[],
        createdDate: "04/09/2015",
        creatingUser: "",
        state: 0,
        logo:"",
        instructor:"John Smith",
        courseImage: "course_image.jpg",
        bannerImage: "banner_image.jpg",
        modifyingUser: loogedInUser,
        creatingUserName:"Kwanele"

    } as ICourse
};

export const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        //load entire course to state
        setSelectedCourseForEdit(state, action) {
            state.course = action.payload;
        },
        //
        createCourseDetail(state, action) {

            const _action = action.payload as IUpdateCourseDetailState;

            const newState = {
                ...state.course,
                description: _action.description,
                state:0,
                creatingUser: _action.creatingUser,
                title: _action.title,
            } as ICourse;


            state.course = newState;
        },
        resetCourseState: state => {
          state = initialState;
        },

        updateCourseFromDataBase(state, action) {
            const _action = action.payload as IUpdateCourse;
          
            const newState = {
              id: _action.id,
              title: _action.title,
              description: _action.description,
              sections: _action.sections,
              createdDate: _action.createdDate,
              creatingUser: _action.creatingUser,
              state: 0,
              logo: _action.logo,
              courseImage: _action.courseImage,
              bannerImage: _action.bannerImage,
              modifyingUser: _action.modifyingUser
            } as ICourse;
            state.course = newState;
          
          }
              ,          

          
            updateSectionDetail(state, action) {
                const _action = action.payload as IUpdateSectionDetailState;
                const targetSection = state.course.sections.find(section => section.id === _action.sectionId);
                
                if (!targetSection) {
                    return state;
                }
            
                const updatedSection = {
                    ...targetSection,
                    title: _action.title,
                    competency: _action.competency, 
                };
            
                const updatedSections = state.course.sections.map(section => 
                    section.id === _action.sectionId ? updatedSection : section
                );
            
                const sortedSections = updatedSections.sort(sortSectionByOrder);
                const newState = { ...state.course, sections: sortedSections };
            
                return { ...state, course: newState };
            },
            
        deleteSection(state, action) {
            const sectionIdToDelete = action.payload;

            const updatedSections = state.course.sections.filter(section => section.id !== sectionIdToDelete);

            state.course.sections = updatedSections;
        },
        updateModuleDetail(state, action) {
            const { sectionId, moduleId, title, description } = action.payload;

            const updatedSections = state.course.sections.map(section => {
                if (section.id === sectionId) {
                    const updatedModules = section.modules.map(module => {
                        if (module.id === moduleId) {
                            return { ...module, title,  description };
                        }
                        return module;
                    });

                    const updatedSection = { ...section, modules: updatedModules };
                    return updatedSection;
                }
                return section;
            });

            state.course.sections = updatedSections;
        },

        addSection(state, action) {
            const { sectionTitle,  sectionCompetency } = action.payload;

            const newSection: ISection = {
                id: generateUniqueId(),
                title: sectionTitle,
                courseId: state.course.id,
                order: state.course.sections.length+1,
                state: 0,
                competency: sectionCompetency,
                createdDate: "2023-08-07T11:28:14.632Z",
                creatingUser: "user-456",
                modifiedDate: "2023-08-07T11:28:14.632Z",
                modifyingUser: "user-789",
                modules: [],
            };

            state.course.sections.push(newSection);
        },

        addModuleToSection(state, action) {
            const { sectionId } = action.payload;

            const newModule: IModule = {
                id: generateUniqueId(),
                title: "",
                description: "",
                notes: "These are some additional notes for Module 1.",
                creatingUser: "user-456",
                creatingDate: "2023-08-07T11:28:14.632Z",
                modifyingUser: "user-789",
                modifiedDate: "2023-08-07T11:28:14.632Z",
                sectionId: sectionId,
              
                order: 1,
                state: 0,
                videos: [],
                
            };

            const section = state.course.sections.find(section => section.id === sectionId);
            if (section) {
                section.modules.push(newModule);
            }
        },
        editVideoDetails: (state, action) => {
      
          const { moduleId, videoId, videoTitle, videoLink,videoDescription , duration} = action.payload;
          const sectionIndex = state.course.sections.findIndex(section =>
            section.modules.some(module => module.id === moduleId)
          );
          if (sectionIndex !== -1) {
            const moduleIndex = state.course.sections[sectionIndex].modules.findIndex(
              module => module.id === moduleId
            );
            if (moduleIndex !== -1) {
              const videoIndex = state.course.sections[sectionIndex].modules[
                moduleIndex
              ].videos.findIndex((video:IVideo) => video.id === videoId);
              if (videoIndex !== -1) {
                // Update the video title and URL
                state.course.sections[sectionIndex].modules[moduleIndex].videos[
                  videoIndex
                ].title = videoTitle;
                state.course.sections[sectionIndex].modules[moduleIndex].videos[
                  videoIndex
                ].videoLink = videoLink;
                state.course.sections[sectionIndex].modules[moduleIndex].videos[
                  videoIndex
                ].description = videoDescription;
                state.course.sections[sectionIndex].modules[moduleIndex].videos[
                  videoIndex
                ].duration = duration
              }
            }
          }
        }
      
,      
udpateVideoViewState: (state, action) => {
      
  const { moduleId, videoId, viewed, } = action.payload;
  const sectionIndex = state.course.sections.findIndex(section =>
    section.modules.some(module => module.id === moduleId)
  );
  if (sectionIndex !== -1) {
    const moduleIndex = state.course.sections[sectionIndex].modules.findIndex(
      module => module.id === moduleId
    );
    if (moduleIndex !== -1) {
      const videoIndex = state.course.sections[sectionIndex].modules[
        moduleIndex
      ].videos.findIndex((video:IVideo) => video.id === videoId);
      if (videoIndex !== -1) {
        // Update the video title and URL
        state.course.sections[sectionIndex].modules[moduleIndex].videos[
          videoIndex
        ].viewed = viewed;
  
      }
    }
  }
}

,  
        deleteModuleFromSection(state, action) {
            const { sectionId, moduleId } = action.payload;
      
            const updatedSections = state.course.sections.map(section => {
              if (section.id === sectionId) {
                const updatedModules = section.modules.filter(module => module.id !== moduleId);
                return { ...section, modules: updatedModules };
              }
              return section;
            });
      
            state.course.sections = updatedSections;
          },
        deleteVideoFromModule(state, action) {
            const { moduleId, videoId } = action.payload;
      
            const updatedSections = state.course.sections.map(section => {
              const updatedModules = section.modules.map(module => {
                if (module.id === moduleId) {
                  const updatedVideos = module.videos.filter(video => video.id !== videoId);
                  return { ...module, videos: updatedVideos };
                }
                return module;
              });
      
              return { ...section, modules: updatedModules };
            });
      
            state.course.sections = updatedSections;
          },
          deleteAllSections(state) {
            // Set the sections array to an empty array
            state.course.sections = [];
        },
        addVideoToModule(state, action) {
            const { moduleId, videoTitle, videoLink, description, duration } = action.payload;

            const newVideo: IVideo = {
                id: generateUniqueId(),
                title: videoTitle,
                duration: duration,
                moduleId: "module-101",
                order: 1,
                state: 0,
                videoLink: videoLink,
                type: 0,
                videoFile: "video-201.mp4",
                createdDate: "2023-08-07T11:28:14.632Z",
                creatingUser: "user-456",
                modifiedDate: "2023-08-07T11:28:14.632Z",
                modifyingUser: "user-789",
                thumbnailImage: "thumbnail-201.jpg",
                length: "5 minutes",
                format: "mp4",
                size: "50 MB",
                viewed:false,
                description:description,
                reference:generateUniqueId(),

            };

            const section = state.course.sections.find(section => section.modules.some(module => module.id === moduleId));
            if (section) {
                section.modules.forEach(module => {
                    if (module.id === moduleId) {
                        module.videos.push(newVideo);
                    }
                });
            }
        },
    },
}
);

  export const {
    setSelectedCourseForEdit,
    createCourseDetail,
    updateSectionDetail,
    updateModuleDetail,
    addSection,
    deleteSection,
    updateCourseFromDataBase,
    addModuleToSection,
    deleteAllSections,
    resetCourseState,
    editVideoDetails,
    addVideoToModule,
    deleteModuleFromSection,
    deleteVideoFromModule // Add this line
  } = courseSlice.actions;

  export const getSelectedCourseForEdit = (state: AppStore) => state.course;

export default courseSlice.reducer; 