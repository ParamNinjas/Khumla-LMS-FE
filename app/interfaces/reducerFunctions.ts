
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { ICourse, IModule, ISection, IVideo } from './courses';

// export function updateCourseDetail(state: any, action: any) {
//   const newState: ICourse = {
//     ...state.course,
//     description: action.payload.description,
//     state: action.payload.state,
//     title: action.payload.title,
//   };
//   return newState;
// }

// export function sortSectionByOrder(a: ISection, b: ISection) {
//   return a.order - b.order;
// }

// export function updateSectionDetail(state: ICourse, action:any) {
//   const targetSection = state.sections.find((section) => section.id === action.payload.sectionId);

//   if (!targetSection) {
//     // Section with the specified sectionId not found, return the original state
//     return state;
//   }

//   const newSection: ISection = {
//     ...targetSection,
//     title: action.payload.title,
//     order: action.payload.order,
//     state: action.payload.state,
//     competency: action.payload.competency,
//   };

//   const existingSections = state.sections.filter((x) => x.id !== action.payload.sectionId);
//   const newSections = [...existingSections, newSection];
//   const sortedSections = newSections.sort(sortSectionByOrder);
//   const newState: ICourse = {
//     ...state,
//     sections: sortedSections,
//   };

//   return newState;
// }

// function sortModuleByOrder(a: IModule, b: IModule) {
//   return a.order - b.order;
// }

// export function updateModuleDetail(state: ICourse, action: any) {
//   const updatedSections = state.sections.map((section) => {
//     if (section.id === action.payload.sectionId) {
//       const updatedModules = section.modules.map((module) => {
//         if (module.id === action.payload.moduleId) {
//           return {
//             ...module,
//             title: action.payload.title,
//             order: action.payload.order,
//             state: action.payload.state,
//           } as IModule;
//         }
//         return module;
//       });

//       return {
//         ...section,
//         modules: updatedModules,
//       } as ISection;
//     }
//     return section;
//   });

//   return {
//     ...state,
//     sections: updatedSections,
//   };
// }

// export function updateVideoDetail(state: ICourse, action: any) {
//   const { sectionId, moduleId, videoId } = action.payload;

//   // Check if the state object has the 'sections' property and it is an array
//   if (!state.sections || !Array.isArray(state.sections)) {
//     console.error("Invalid state object: 'sections' property is missing or not an array.");
//     return state;
//   }

//   const updatedSections = state.sections.map((section) => {
//     if (section.id === sectionId) {
//       // Check if the 'modules' property exists for the current section and it is an array
//       if (!section.modules || !Array.isArray(section.modules)) {
//         console.error("Invalid section object: 'modules' property is missing or not an array.");
//         return section;
//       }

//       const updatedModules = section.modules.map((module) => {
//         if (module.id === moduleId) {
//           // Check if the 'videos' property exists for the current module and it is an array
//           if (!module.videos || !Array.isArray(module.videos)) {
//             console.error("Invalid module object: 'videos' property is missing or not an array.");
//             return module;
//           }

//           const updatedVideos = module.videos.map((video) =>
//             video.id === videoId
//               ? {
//                   ...video,
//                   title: action.payload.title,
//                   duration: action.payload.duration,
//                   videoLink: action.payload.videoLink,
//                   type: action.payload.type,
//                   comments: action.payload.comments,
//                   videoFile: action.payload.videoFile,
//                 } as IVideo
//               : video
//           );

//           return {
//             ...module,
//             videos: updatedVideos,
//           } as IModule;
//         }

//         return module;
//       });

//       return {
//         ...section,
//         modules: updatedModules,
//       } as ISection;
//     }

//     return section;
//   });

//   return {
//     ...state,
//     sections: updatedSections,
//   };
// }

// interface ModuleState {
//   modules: IModule[]; // Store all modules here
// }


// const initialState: ModuleState = {
//   modules: [],
// };

// const courseSlice = createSlice({
//   name: 'course',
//   initialState,
//   reducers: {
//     // Action to add a new module
//     addModule: (state, action: PayloadAction<IModule>) => {
//       state.modules.push(action.payload);
//     },
//   },
// });

// export const { addModule } = courseSlice.actions;
// export default courseSlice.reducer;