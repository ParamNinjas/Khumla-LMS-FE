"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Api } from "@/app/lib/restapi/endpoints";
import { IUserRegisterModel } from "@/app/interfaces/user";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
const cookies = new Cookies();
const axios = require("axios").default;

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [ConfirmPassword, setConfirmPassword] = useState<string>("");
  const [lname, setLname] = useState<string>("");

  const [fname, setFname] = useState<string>("");

  const [PasswordError, setPasswordError] = useState("");
  const [ConfirmPassError, setConfirmPassError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [disable, setDisable] = useState<boolean>(false);

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const date = new Date();

  const router = useRouter();

  const navigateToLogin = () => {
    router.push("/auth/admin/login");
  };

  const Register = async (event: any) => {
    let isLogin = true;
    setDisable(true);
    event?.preventDefault();

    if (!emailRegex.test(email)) {
      isLogin = false;
      setEmailError("Invalid email address");
    }

    if (!passwordRegex.test(password)) {
      isLogin = false;
      setPasswordError(
        "Password must contain at least 8 characters,1 uppercase, 1 lowercase letters,a numbers, and a special characters"
      );
    } else if (password !== ConfirmPassword) {
      isLogin = false;
      setConfirmPassError("Passwords do not match");
    }

    if (!isLogin) {
      setDisable(false);
      return;
    }

    let _id = toast.loading("Registering user..", {
      position: "top-center",
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setDisable(true);
    const payload = {
      firstName: fname,
      lastName: lname,
      email: email,
      password: password,
      image: "",
      headLine: "",
      summary: "",
      createdOn: date,
      createdBy: "",
      changedBy: "",
      changedOn: date,
      Otp: "",
      role: "Admin",
      LoginType: 0,
    } as IUserRegisterModel;

    const user = await Api.POST_RegisterAdmin(payload);
    try {
      if (user.data) {

        toast.update(_id, {
          render: "Successfully registered",
          type: "success",
          isLoading: false,
        });

        cookies.set("param-lms-user", JSON.stringify(user.data), {
          path: "/",
        });
        router.push("/protected/admin/manage-courses");
      }
    } catch (error) {
      toast.update(_id, {
        render: "Cannot register user with the supplied information",
        type: "error",
        isLoading: false,
      });

      setTimeout(() => {
        setDisable(false);
        toast.dismiss(_id);
      }, 2000);

      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className=" pt-32pt pt-sm-64pt pb-32pt">
        <div className="container page__container">
          <form className="col-md-5 p-0 mx-auto" onSubmit={Register}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                First Name:{" "}
              </label>
              <input
                id="email"
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                className="form-control"
                placeholder="Your First Name ..."
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Last Name:{" "}
              </label>
              <input
                id="email"
                type="text"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                className="form-control"
                placeholder="Your Last Name ..."
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email:{" "}
              </label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onClick={() => setEmailError("")}
                className="form-control"
                placeholder="Your email address ..."
                required
              />
              {EmailError ? (
                <span style={{ color: "red", fontSize: "10px" }}>
                  {EmailError}
                </span>
              ) : null}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password:{" "}
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onClick={() => setPasswordError("")}
                className="form-control"
                placeholder="Your password ..."
                required
              />
              {PasswordError ? (
                <span style={{ color: "red", fontSize: "10px" }}>
                  {PasswordError}
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Confirm Password:{" "}
              </label>
              <input
                id="password"
                type="password"
                value={ConfirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onClick={() => setConfirmPassError("")}
                className="form-control"
                placeholder="Confirm password ..."
                required
              />
              {ConfirmPassError ? (
                <span style={{ color: "red", fontSize: "10px" }}>
                  {ConfirmPassError}
                </span>
              ) : null}
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-accent">
                signup
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="page-separator justify-content-center m-0">
        <div className="page-separator__text">or sign-up with</div>
        <div className="page-separator__bg-top " />
      </div>
      <div className="bg-body pt-32pt pb-32pt pb-md-64pt text-center">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="container page__container"
        ></div>

        <div onClick={navigateToLogin} className="page-separator__text mt-3">
          Already have an account?{" "}
          <span style={{ cursor: "pointer", color: "blue" }}>sign-in</span>
        </div>
      </div>
    </>
  );
}
