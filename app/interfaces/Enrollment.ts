export interface IEnrollment{
    _id:string;
    userId:string;
    createdDate:string;
    creatingUser:string;
    modifiedDate:string;
    modifyingUser:string;
    courses:string[];
}