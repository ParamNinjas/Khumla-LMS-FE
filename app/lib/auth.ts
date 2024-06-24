import Cookies from "universal-cookie";
const cookies = new Cookies();
export function Restrict(){
    debugger; 
    if (typeof window !== "undefined") {
      let auth =cookies.get('param-lms-user');
      debugger;
          if (!auth) {
            window.location.href='/auth/login'; // Redirect to login if not authenticated
          }
      }      
    }
