export interface IUser{
    id?: string,
    userid?: string,
    name : string,
    surname: string,
    email : string,
    image:string,
    summary:string,
    headLine:string
}

export interface IUserRegisterModel{
    id?: string,
    firstName : string,
    lastName : string,
    email : string,
    headLine:string,
    summary:string,
    password : string,
    image : string,
    createdOn : Date,
    createdBy? : string,
    changedBy? : string,
    changedOn? : Date,
  //  Status: string,
    Otp: string,
    role: string,
    LoginType: number,
 
}

export interface IUserRequestModel extends IUser{

}

export interface IUserResponseModel extends IUser{

}


export interface IUserLoginModel{
    Email:string, 
    Password:string
}


export interface IUserResetPasswordModel extends IUser{
    Email:string, 
}

