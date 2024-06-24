'use client';
import { IUserResetPasswordModel } from '@/app/interfaces/user';
import { useState } from 'react';
import { BasicOTPComponent } from './basic-otp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const axios = require("axios").default;

export default function ResetPassword() {

  const [email, setEmail] = useState<string>("");
  const [showPassInputs, setShowPassInputs] = useState<boolean>(true)
  const [disable, setDisable] = useState<boolean>(true);
  const [emailError, setEmailError] = useState<boolean>(false)
  const [password, setPassword] = useState<string>("");
  const [ConfirmPassword, setConfirmPassword] = useState<string>("");
  const [otpLength, setOtpLength] = useState(0);
  const [OtpSent, setOtpSent] = useState<boolean>(false);
  const [otp, setOTP] = useState("");
 const [showMessage, setShowMessage] = useState<boolean>(false)
 const [role,setRole] = useState<string>("Student")

  const setOtp = (e: string) => {
    setOTP(e);
    setOtpLength(e.length);

    if (e.length === 5) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };


    const ChangePassword = async (event:any) => {
      setDisable(true)
      const _id = toast.loading("Verifying OTP...", {
        //loader
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  
      const payload = {
        email: email,
        password: password,
        otp: otp,
      };
      axios
      .post(
        "https://7fb0-154-117-172-210.ngrok-free.app/api/Users/ResetPassword",
        payload
      )
      .then((response: any) => {
        console.log("response", response);
  
        toast.update(_id, {
          render: `Password changed successfully. You may now login.`,
          type: "success",
          isLoading: false,
        });
        setShowPassInputs(false)
  
      })
      .catch((error: any) => {
        toast.update(_id, {
          render: `invalid OTP..}`,
          type: "error",
          isLoading: false,
        });
        console.log(error);
      });
event.preventDefault();
      } 
    
  

  const SendOtp = async (event:any) => {
    setDisable(true)
    let _id = toast.loading("Sending Otp..", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const payload = {
      email: email,
    } as IUserResetPasswordModel; 

    if(email !== ""){
      setEmailError(false);
      axios
      .post(
        "https://7fb0-154-117-172-210.ngrok-free.app/api/Users/SendResetPasswordOtp",
        payload
      )
      .then((response: any) => {
        console.log("response", response);
  
        toast.update(_id, {
          render: `OTP sent succesfully to ${email}.`,
          type: "success",
          isLoading: false,
        });
        setTimeout(() => {
          setDisable(false)
          toast.dismiss(_id);
        }, 2000);
        setShowPassInputs(false)
        setShowMessage(true)
      })
      .catch((error: any) => {
        toast.update(_id, {
          render: `Error sending OTP..`,
          type: "error",
          isLoading: false,
        });
        setTimeout(() => {
          setDisable(false)
          toast.dismiss(_id);
        }, 2000);
        console.log(error);
      });
  
    }
  
    event.preventDefault()
    }
  
 


  return (
<>
<ToastContainer />
      <div className="page-section pb-0">
        <div className="container page__container d-flex flex-column flex-sm-row align-items-sm-center">
          <div className="flex">
            <h1 className="h2 mb-0">Reset Password</h1>
            <p className="text-breadcrumb">Account Management</p>
          </div>
          <p className="d-sm-none" />
          <a href="" className="btn btn-outline-secondary flex-column">
            Need Help?
            <span className="btn__secondary-text">Contact us</span>
          </a>
        </div>
      </div>
      {}
      
      <div className="page-section">
      {
        showPassInputs ? <><div className="page-section">
        <div className="container page__container">
          <div className="page-separator">
            <div className="page-separator__text">Reset Password</div>
          </div>
          <div className="col-sm-6 p-0">
          
          { showMessage && 
            <div className="alert alert-soft-warning">

           <div className="d-flex flex-wrap">
                <div className="mr-8pt">
                  <i className="material-icons">check_circle</i>
                </div>
                <div className="flex" style={{ minWidth: 180 }}>
                  
                 
                  <small className="text-100">
                    An email with password reset instructions has been sent to
                    your email address, if it exists on our system.
                  </small>


                </div>
              </div>


            </div>
      }
            <form >
              <div className="form-group">
                <label className="form-label">Email:</label>{emailError ? <span style = {{color : "red", fontWeight: "600px", marginLeft: "1em"}}>* required field</span>:null}
                <input
                value={email}
                  type="text"
                  className="form-control"
                  placeholder="Your email address ..."
                  onChange={(e:any) => {
                    setDisable(false)
                    setEmail(e.target.value)
                  }}
                />
                <small className="form-text text-muted">
                  We will email you with info on how to reset your password.
                </small>
              </div>
             
              <button disabled = {disable} onClick={SendOtp} className="btn btn-accent">Reset</button>
            </form>
          </div>
        </div>
      </div></> :  <>    <div className="container page__container">
        <div className="page-separator">
            <div className="page-separator__text">Verify OTP</div>
          </div>
          <div style={{width: "50%", marginBottom: "1em"}}>
          <BasicOTPComponent onChange={setOtp}/>
          </div>
  
          <div className="page-separator">
            <div className="page-separator__text">Change Password</div>
          </div>
         
          <form  className="col-sm-5 p-0">
        
  
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password:
              </label>
              <input
              onChange={(e:any) => setPassword(e.target.value)}
                id="password"
                type="password"
                className="form-control"
                placeholder="Type a new password ..."
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password2">
                Confirm Password:
              </label>
              <input
              onChange={(e:any) => setConfirmPassword(e.target.value)}
                id="password2"
                type="password"
                
                className="form-control"
                placeholder="Confirm your new password ..."
              />
            </div>
            <button disabled={disable} onClick = {ChangePassword} type="submit" className="btn btn-accent">
              Save password
            </button>
          </form>
        </div></>
      }
    </div>
</>
  
  )
}
