"use client";
import Image from "next/image";
import Cookies from "universal-cookie";
import { ReduxProvider } from "../provider";
import { usePathname } from "next/navigation";

const cookies = new Cookies();

const isLoggedIn = cookies.get("param-lms-user");

console.log(isLoggedIn);

const metadata = {
  title: "Login",
  description: "Supercharge your learning",
};

export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
  }) {
  let bannerName = '';
  const pathname = usePathname();
  if (pathname == "/auth/admin/login") bannerName = "Khumla Admin Login"
  else if (pathname == "/auth/admin/register") bannerName = "Khumla Admin Register"
  else if (pathname == "/" || pathname == "/auth/login" ) bannerName = "Khumla Login"
  else bannerName = "Khumla Register"

  return (
    <>
      <ReduxProvider>
        <div
          className="mdk-header-layout js-mdk-header-layout"
          data-domfactory-upgraded="mdk-header-layout"
        >
          {/* Header Layout Content */}
          <div
            className="mdk-header-layout__content page-content "
            style={false ? { paddingTop: 64 } : {}}
          >
            <div
              style={{ top: 0 }}
              className="page__subnav navbar navbar-expand-sm navbar-shadow navbar-light bg-white p-sm-0 d-none d-sm-flex"
              id="secondary-navbar"
            >
              <div className="container page__container">
                {/* Navbar toggler */}
                <button
                  className="navbar-toggler ml-n16pt"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbar-submenu2"
                >
                  <span className="material-icons">people_outline</span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-submenu2">
                  <div className="navbar-collapse__content pb-16pt pb-sm-0">
                    <h1>{bannerName}</h1>
                  </div>
                </div>
              </div>
            </div>

            {children}
          </div>
        </div>
      </ReduxProvider>
    </>
  );
}
