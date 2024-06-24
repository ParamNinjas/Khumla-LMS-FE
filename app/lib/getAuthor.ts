import Cookies from "universal-cookie";
import { IUser } from "../interfaces/user";
import { IResponseObject } from "./restapi/response";
import { Api } from "./restapi/endpoints";
var cookies=new Cookies();

export async function getAuthor(id:string):Promise<IUser>{
   
    var author:IUser= cookies.get(id);
    
    if(!author)
    {
      var response:IResponseObject<IUser> = await Api.GET_UserById(id);
      cookies.set(id,response.data);
      return response.data as IUser;
    }
    else{
   return author;
    }}