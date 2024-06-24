"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Api } from "@/app/lib/restapi/endpoints";
import { IUserLoginModel, IUserRegisterModel } from "@/app/interfaces/user";
import Cookies from "universal-cookie"; // Import the library
import { useRouter } from "next/navigation";

const cookies = new Cookies(); // Create an instance of Cookies

export default function Login() {
  const [disable, setDisable] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const router = useRouter();

  const navigateToRegister = () => {
    router.push("/auth/admin/register");
  };

  async function LoginUser(event: any) {
    cookies.remove("param-lms-user");

    setDisable(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let _id = toast.loading("Logging in..", {
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

    if (!emailRegex.test(email)) {
      toast.update(_id, {
        render: "Invalid email address",
        type: "error",
        isLoading: false,
      });
      setTimeout(() => {
        setDisable(false);
        toast.dismiss(_id);
      }, 2000);
    } else {
      const payload = {
        Email: email,
        Password: password,
      } as IUserLoginModel;

      const user = await Api.POST_Login(payload);
      console.log("data", user);
      try {
        if (user?.data?.id && user?.data?.role == "Admin") {
          toast.update(_id, {
            render: "Successfully logged in",
            type: "success",
            isLoading: false,
          });

          cookies.set("param-lms-user", JSON.stringify(user.data), {
            path: "/",
          });

          router.push("/protected/admin/manage-courses");
        } else {
          const errorString = user?.data?.id
            ? "Not an Admin"
            : "Invalid login credentials";

          toast.update(_id, {
            render: errorString,
            type: "error",
            isLoading: false,
          });
          setTimeout(() => {
            setDisable(false);
            toast.dismiss(_id);
          }, 3000);
        }
      } catch (error) {
        toast.update(_id, {
          render: "Invalid login credentials",
          type: "error",
          isLoading: false,
        });
        setTimeout(() => {
          setDisable(false);
          toast.dismiss(_id);
        }, 3000);
        console.log(error);
      }

      event?.preventDefault();
    }
  }

  return (
    <>
      <ToastContainer />
      <div className=" pt-32pt pt-sm-64pt pb-32pt">
        <div className="container page__container">
          <form className="col-md-5 p-0 mx-auto">
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email:
              </label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={onChangeEmail}
                className="form-control"
                placeholder="Your email address ..."
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password:
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={onChangePassword}
                className="form-control"
                placeholder="Your password ..."
              />
            </div>
            <div className="text-center">
              <button
                disabled={disable}
                onClick={LoginUser}
                className="btn btn-accent"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="page-separator justify-content-center m-0">
        <div className="page-separator__text">or sign-in with</div>
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

        <div className="page-separator__text mt-3">
          Do not have an account?{" "}
          <span
            style={{ cursor: "pointer", color: "blue" }}
            onClick={navigateToRegister}
          >
            sign-up
          </span>
        </div>
      </div>
    </>
  );
}
