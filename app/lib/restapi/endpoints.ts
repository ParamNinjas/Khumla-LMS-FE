import { ICourse, IDeleteSection,IDeleteVideo,IStudentCourses } from "@/app/interfaces/courses";
import { GET, POST, PUT ,DELETE} from "./client";
import { IResponseObject } from "./response";
import { IUser, IUserLoginModel, IUserRegisterModel } from "@/app/interfaces/user";
import  IComment, { ICommentReply }  from "@/app/interfaces/comment";
import { IRating } from "@/app/interfaces/Rating";
import { get } from "http";
import { IStudentAnswer } from "@/app/interfaces/studentAnswer";
import { IMarks, IQuiz } from "@/app/interfaces/quiz";
import { IAssessment } from "@/app/interfaces/assessment";
import { IDocument } from "@/app/interfaces/document";

export const courseWriteUrl = "https://khumla-dev-course-write.azurewebsites.net/api";

export const courseReadUrl="https://khumla-dev-course-read.azurewebsites.net/api";

export const uploadImage = ""

export const userWriteUrl = "https://khumla-development-user-write.azurewebsites.net/api/v1";
 
export const userReadUrl="https://khmla-development-user-read.azurewebsites.net/api/v1";

export const commentReadUrl="https://khumla-develop-comments-read.azurewebsites.net/api";

export const commentWriteUrl="https://khumla-develop-comments-write.azurewebsites.net/api";

export const quizReadUrl = "https://khumla-develop-quiz-read.azurewebsites.net/api";

export const assessmentWriteUrl = "https://khumla-develop-assessment-write.azurewebsites.net/api";

export const assessmentReadUrl = "https://khumla-develop-assessment-read.azurewebsites.net/api";

export const quizWriteUrl ="https://khumla-develop-assessment-write.azurewebsites.net/api";

export const documentWrite = "https://khumla-dev-document-write.azurewebsites.net/api"

export const documentRead = "https://khumla-dev-document-read.azurewebsites.net/api"

export const marksWrite = "https://khumla-dev-marks-write.azurewebsites.net/api"

export const assessmentWrite = "https://khumla-develop-assessment-write.azurewebsites.net/api"





export const Api = {
  Base: courseWriteUrl,

  GET_Courses: async (): Promise<any> => {
    const response = await GET(`${courseReadUrl}/Courses/GetCourses`);
    return response;
  },

  POST_CreateCourse: async (
    payload: ICourse
  ): Promise<IResponseObject<ICourse>> => {
    const response = await POST(`${courseWriteUrl}/Courses/AddCourse`, payload);
    return response;
  },

  PUT_UpdateCourse: async (payload: ICourse): Promise<any> => {
    try {
      debugger
      const response = await PUT(`${courseWriteUrl}/Courses/updateCourse`, payload);
      debugger
      return response;
    } catch (error) {
      console.error("Error updating course:", error);
      throw error;
    }
  },
  
  POST_CourseEnrollment: async (payload:any): Promise<any> => {
    try{
      const response = await POST(`${courseWriteUrl}/Enrollments/AddEnrollment`, payload);
      return response;
    }
    catch(error){
      console.error("Error enrolling course:", error);
      throw error;
    }
  },
  DELETE_DeleteSection: async (
    payload: IDeleteSection
  ): Promise<any> => {
    const response = await PUT(`${courseWriteUrl}/Courses/DeleteSection`, payload);
    return response;
  },

  DELETE_DeleteVideo: async (
    payload: IDeleteVideo
  ): Promise<IResponseObject<any>> => {
    const response = await POST(`${courseWriteUrl}/Courses/DeleteVideo`, payload);//USE PUT METHOD
    return response;
  },

  GET_CourseById: async (
    courseId: string
  ): Promise<IResponseObject<ICourse>> => {
    const response = await GET(`${courseReadUrl}/Courses/GetCourse?id=${courseId}`);
    return response;
  },
  GET_AllCourses: async (
    courseId: string
  ): Promise<IResponseObject<ICourse[]>> => {
    const response = await GET(`${courseReadUrl}/Courses/`);
    return response;
  },

  GET_CommentsByReference: async (
    referenceId: string
  ): Promise<IResponseObject<IComment>[]> => {
    const response = await GET(`${commentReadUrl}/Comments/GetCommentsByReference?referenceId=${referenceId}`);
    return response;
  },

  GET_CoursesByUserId: async (
    userId: string
  ): Promise<IResponseObject<ICourse[]>> => {
    const response = await GET(`${courseReadUrl}/Courses/${userId}`);
    return response;
  },

  
  GET_StudentCoursesById: async (
    studentId: string
  ): Promise<IResponseObject<IStudentCourses>> => {
    const response = await GET(`${courseReadUrl}/Courses/GetStudentCourses?studentId=${studentId}`);
    return response;
  },
  
  GET_EnrolledCoursesByStudentId: async (
    studentId:string
  ): Promise<IResponseObject<IStudentCourses>> => {
    const response = await GET(`${courseReadUrl}/Enrollments/GetUserEnrollements?userId=${studentId}`);
    return response;
  },

  GET_CoursesByIds: async (courseIds: string[]): Promise<any> => {
    const queryParams = courseIds.map(id => `Ids=${id}`).join('&');
    const response = await GET(`${courseReadUrl}/Courses/GetCoursesByIds?${queryParams}`);
    return response;
  },

  GET_UsersByIds:async (userIds:string[]):Promise<IResponseObject<IUser>[]>=>{
   const queryParams=userIds.map(id => `Ids=${id}`).join('&');
   const response = await GET(`${courseReadUrl}/Users/GetUsersByIds?${queryParams}`);
    return response;
  },

DELETE_CourseById: async (
    courseId: string
  ): Promise<any> => {
    debugger;
    const response = await DELETE(`${courseWriteUrl}/Courses/${courseId}`);
    debugger;
    return response;
  },

  POST_Login: async (
    payload: IUserLoginModel
  ): Promise<IResponseObject<IUserRegisterModel>> => {
    const response = await POST(`${userWriteUrl}/Users/Login`, payload);
    return response;
  },

  POST_Register: async (
    payload: IUserRegisterModel
  ): Promise<IResponseObject<any>> => {
    const response = await POST(`${userWriteUrl}/Users/AddUser`, payload);
    return response;
  },
  POST_RegisterAdmin: async (
    payload: IUserRegisterModel
  ): Promise<IResponseObject<any>> => {
    const response = await POST(`${userWriteUrl}/Users/AddAdmin`, payload);
    return response;
  },

  GET_UserById:async(id: string)
          :Promise<IResponseObject<IUser>>=>{
            
            const response = await GET(`${userReadUrl}/Users/GetUsersByIds?userIds=${id}`);
           
           return response;
          },


          
  POST_AddComment:async (payload:IComment)
  :Promise<IResponseObject<IComment>>=>{
    const response = await POST(`${commentWriteUrl}/Comments/AddComment`,payload);
    return response;
  },

  POST_AddAssessments:async (payload:IAssessment)
  :Promise<IResponseObject<IAssessment>>=>{
    const response = await POST(`${assessmentWrite}/Assessments/AddAssessment`,payload);
    return response;
  },

  PUT_UpdateAssessment: async (payload: IAssessment): Promise<any> => {
    try {
    
      const response = await PUT(`${assessmentWrite}/Assessments/UpdateAssessment`, payload);
      
      return response;
    } catch (error) {
      console.error("Error updating assessment:", error);
      throw error;
    }
  },
  


  POST_AddRating:async (payload:IRating)
  :Promise<IResponseObject<IRating>>=>{
    const response = await POST(`${commentWriteUrl}/Ratings/AddRating`,payload);
    return response;
  },

  GET_GetRating:async (id:string):
  Promise<IResponseObject<IRating>>=>{
    const response=await GET(`${commentReadUrl}/Ratings/GetRating?id=${id}`);
    return response;
  },

  
  GET_GetAllAssessments:async () => {
    const response=await GET(`${assessmentReadUrl}/Assessments/GetAssessments`);
    return response;
  },
  
  GET_GetAllComments:async ():
  Promise<IResponseObject<IComment[]>>=>{
    const response=await GET(`${commentReadUrl}/Comments/GetComments`);
    return response;
  },


  POST_AddCommentReply:async(payload:ICommentReply)       
  :Promise<IResponseObject<IComment>> => {
    const response:any = await POST(`${commentWriteUrl}/Comments/AddCommentReply`,payload);
    return response;
  },

  POST_AddQuiz:async(payload:IQuiz)       
  :Promise<IResponseObject<IQuiz>> => {
    const response:any = await POST(`${quizWriteUrl}/Quizzes/AddQuizzes`,payload);
    return response;
  },

  POST_Quiz: async (quiz:IQuiz[])
  :Promise<IResponseObject<IQuiz[]>> => {
    const _quiz:any = await POST(`${quizWriteUrl}/Quizzes/AddQuizzes`,quiz);
    return _quiz;
  },

  PUT_UpdateQuizzes: async (payload: IQuiz[]): Promise<IResponseObject<IQuiz[]>> => {
    try {
      const response = await PUT(`${quizWriteUrl}/Quizzes/UpdateQuizzes`,payload);
      return response;
    } catch (error) {
      console.error("Error updating quizzes:", error);
      throw error;
    }
  },
  
  PUT_UpdateMarks: async (payload: IMarks): Promise<IResponseObject<IQuiz[]>> => {
    try {
      const response = await PUT(`${quizWriteUrl}/Marks/UpdateMarks`,payload);
      return response;
    } catch (error) {
      console.error("Error updating quizzes:", error);
      throw error;
    }
  },
  

POST_Image: async (courseId :string , imageFile:any)
:Promise<IResponseObject<ICourse>> => {
  const _course:any = await POST(`${courseWriteUrl}/Courses/UploadImage/${courseId}`,imageFile);
  return _course;
},

POST_Marks: async (payload:IMarks)
:Promise<IResponseObject<IMarks>> => {
  const _marks:any = await POST(`${quizWriteUrl}//Marks/AddMark`,payload);
  return _marks;
},

GET_AllStudentMarks: async (
  ) => {
  const response:IMarks[] = await GET(`${quizReadUrl}/Marks/getMarks`);
  return response;
},


GET_CourseAssessment: async (courseId:string) => {
  const response = await GET(`${assessmentReadUrl}/Assessments/GetAssessment?id=${courseId}`);
  return response.data;
},

POST_StudentAnswers: async (
  payload: IStudentAnswer
): Promise<IResponseObject<IStudentAnswer>> => {
  const response = await POST(`${assessmentWriteUrl}/StudentAnswers/AddStudentAnswer`, payload);
  return response;
},

GET_StudentAssessmentsAnswers: async (

) => {
  const response = await GET(`${assessmentReadUrl}/StudentAnswers/GetStudentsAnswers`);
  return response;
},


GET_StudentAssessmentsByCourses: async (
  payload: string
) => {
  console.log("payload server side", payload)
  const response = await GET(`${assessmentReadUrl}/Assessments/GetAssessmentsByCourses?${payload}&courses=course1`);
  return response;
},


POST_Document: async ( payload:any)
:Promise<IResponseObject<IDocument[]>> => {
  const _document:any = await POST(`${documentWrite}/Documents/AddDocuments`,payload);
  return _document;
},


GET_Documents: async (

) => {

  const response = await GET(`${documentRead}/Documents/getDocuments`);
  return response;
},


GET_AllQuizzes: async (
  ) => {
  const response:IQuiz[] = await GET(`${quizReadUrl}/Quizzes/getQuizzes`);
  return response;
},
};

