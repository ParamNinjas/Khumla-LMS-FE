export default interface IComment{
    id?:string;
    title:string;
    message:string;
    creatingUser:string;
    createdDate:string;
    modifyingUser:string;
    modifiedDate:string;
    referenceId:string;
    type:number;
    state:number;
    replies:string[];
    creatingUserName:string;
}

export interface ICommentReply{
    comment:IComment;
    reply:IComment;
}
