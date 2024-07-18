import { NextPage } from "next";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";

const HeadNav: NextPage<{ setIsOpen: any; isOpen: boolean }> = ({
  setIsOpen,
  isOpen,
}) => {
  const cookies = new Cookies();
  const loggedInUser = cookies.get("param-lms-user");
  const router = useRouter();

  const logout = () => {
    cookies.remove("param-lms-user", {
      path: "/",
    });

    if (loggedInUser?.role == "Admin") router.replace("/auth/admin/login");
    else router.replace("/");
  };

  return (
    <>
      {/* <!-- Header --> */}
      <div id="header" className="mdk-header js-mdk-header mb-0" data-fixed>
        <div className="mdk-header__content">
          <div
            className="navbar navbar-expand px-0 nav-bar-bg navbar-dark"
            id="default-navbar"
            data-primary
          >
            {/* <!-- Navbar toggler --> */}
            <button
              className="navbar-toggler d-block rounded-0"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              type="button"
              data-toggle="sidebar"
            >
              <span className="material-icons">menu</span>
            </button>

            {/* <!-- Navbar Brand --> */}
            <a className="navbar-brand mr-16pt">
              <span className=" d-lg-block">Khumla</span>
            </a>

            <div className="flex"></div>

            <div className="nav navbar-nav flex-nowrap d-flex ml-0 mr-16pt">
              <div className="nav-item dropdown d-none d-sm-flex">
                <a
                  href="#"
                  className="nav-link d-flex align-items-center dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <span className="user-icon material-icons sidebar-menu-icon sidebar-menu-icon--left rounded-circle mr-8pt">
                    account_circle
                  </span>
                  <span className="flex d-flex flex-column mr-8pt">
                    <span className="navbar-text-100">
                      {loggedInUser?.firstName} {loggedInUser?.lastName}
                    </span>
                    <small className="navbar-text-50">
                      {loggedInUser?.role}
                    </small>
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div className="dropdown-header">
                    <strong>Account</strong>
                  </div>
                  <a className="dropdown-item">Edit Account</a>
                  <a className="dropdown-item" onClick={() => logout()}>
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- // END Header --> */}
    </>
  );
};

export default HeadNav;
