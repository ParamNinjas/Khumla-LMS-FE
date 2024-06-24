"use client";
import React, { useEffect, useState } from "react";
import { FaBars} from "react-icons/fa";
import "./style.css";
import { usePathname } from 'next/navigation'


const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [expandSidebar, setExpandSidebar] = useState<boolean>(false);
  const [isStudentPathName, setIsStudentPathName] = useState<boolean>(false)

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };


  const pathname = usePathname()

  useEffect(() => {
    if (pathname.includes("/protected/student")) {
      setIsStudentPathName(true);
    } else {
      setIsStudentPathName(false);
    }
  }, [pathname]);


  const openSidebar = () => {
    setExpandSidebar(true);
  };

  const closeSidebar = () => {
    setExpandSidebar(false);
  };

  return (
    <div
      className="sidebar "
      style={
        expandSidebar
          ? {
              width: "160px",
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }
          : {}
      }
    >
      <div
        style={{ position: "fixed" }}
        className="flex d-flex flex-column justify-content-start ps"
        data-perfect-scrollbar=""
      >
        <div className="bar" onClick={() => handleTabClick("home")}>
          <a
            onClick={() => setExpandSidebar(!expandSidebar)}
            style={{ cursor: "pointer" }}
            className="sidebar-brand p-0 navbar-height d-flex justify-content-center"
          >
            <small className="avatar avatar-sm">
              <small className="avatar-title rounded bg-primary">
                <FaBars />
              </small>
            </small>
          </a>
        </div>

{
  isStudentPathName ?  <ul
  className="nav flex-shrink-0 flex-nowrap flex-column sidebar-menu mb-0 js-sidebar-mini-tabs"
  role="tablist"
>
    {
      isStudentPathName && expandSidebar &&
      <li
                  className="sidebar-menu-item active"
                  data-toggle="tooltip"
                  data-title="Instructor"
                  data-placement="right"
                  data-container="body"
                  data-boundary="window"
                  data-original-title=""
                  title=""
                >
                  <a
                    className="sidebar-menu-button"
                    href="#sm_instructor"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="sm_instructor"
                    aria-selected="false"
                  >
                    <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">
                    </i>
                    <span
                    style={{color :"white", fontWeight:"600"}}
                      className={
                        expandSidebar
                          ? "sidebar-menu-text view-text"
                          : "sidebar-menu-text hide-text"
                      }
                    >
                      Student 
                    </span>
                  </a>
                </li>

 
      
    }

      <li
    className="sidebar-menu-item active"
    data-toggle="tooltip"
    data-title="Instructor"
    data-placement="right"
    data-container="body"
    data-boundary="window"
    data-original-title=""
    title=""
  >
    <a
      className="sidebar-menu-button"
      href="/protected/student/course/all-courses"
      data-toggle="tab"
      role="tab"
      aria-controls="sm_instructor"
      aria-selected="false"
    >
     <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">
        {isStudentPathName ? "home" : "student"}
      </i>
      <span
        className={
          expandSidebar
            ? "sidebar-menu-text view-text"
            : "sidebar-menu-text hide-text"
        }
      >
        Home 
      </span>
    </a>
  </li>
  <li
    className="sidebar-menu-item active"
    data-toggle="tooltip"
    data-title="Instructor"
    data-placement="right"
    data-container="body"
    data-boundary="window"
    data-original-title=""
    title=""
  >
    <a
      className="sidebar-menu-button"
      href="/protected/student/course/all-courses"
      data-toggle="tab"
      role="tab"
      aria-controls="sm_instructor"
      aria-selected="false"
    >
      <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">
      local_library
      </i>
      <span
        className={
          expandSidebar
            ? "sidebar-menu-text view-text"
            : "sidebar-menu-text hide-text"
        }
      >
       All Courses
      </span>
    </a>
  </li>

  <li
    className="sidebar-menu-item "
    data-toggle="tooltip"
    data-title="Apps"
    data-placement="right"
    data-container="body"
    data-boundary="window"
    data-original-title=""
    title=""
  >
    <a
      className="sidebar-menu-button"
      href="/protected/student/dashboard"
      data-toggle="tab"
      role="tab"
      aria-controls="sm_apps"
    >
      <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">
      account_box
      </i>
      <span
        className={
          expandSidebar
            ? "sidebar-menu-text view-text"
            : "sidebar-menu-text hide-text"
        }
      >
      Dashboard
      </span>
    </a>
  </li>
  <li
    className="sidebar-menu-item"
    data-toggle="tooltip"
    data-title="Components"
    data-placement="right"
    data-container="body"
    data-boundary="window"
    data-original-title=""
    title=""
  >
    <a
      className="sidebar-menu-button"
      href="#"
      data-toggle="tab"
      role="tab"
      aria-controls="sm_components"
    >
      <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">
      search
      </i>
      <span
        className={
          expandSidebar
            ? "sidebar-menu-text view-text"
            : "sidebar-menu-text hide-text"
        }
      >
        My Courses
      </span>
    </a>
  </li>
  <li
    className="sidebar-menu-item "
    data-toggle="tooltip"
    data-title="Account"
    data-placement="right"
    data-container="body"
    data-boundary="window"
    data-original-title=""
    title=""
  >
    <a
      className="sidebar-menu-button"
      href="#sm_account"
      data-toggle="tab"
      role="tab"
      aria-controls="sm_account"
    >
      <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">
      class
      </i>
      <span
        className={
          expandSidebar
            ? "sidebar-menu-text view-text"
            : "sidebar-menu-text hide-text"
        }
      >
        Take Course
      </span>
    </a>
  </li>

</ul> : <ul
          className="nav flex-shrink-0 flex-nowrap flex-column sidebar-menu mb-0 js-sidebar-mini-tabs"
          role="tablist"
        >
              <li
            className="sidebar-menu-item active"
            data-toggle="tooltip"
            data-title="Instructor"
            data-placement="right"
            data-container="body"
            data-boundary="window"
            data-original-title=""
            title=""
          >
            <a
              className="sidebar-menu-button"
              href="#sm_instructor"
              data-toggle="tab"
              role="tab"
              aria-controls="sm_instructor"
              aria-selected="false"
            >
              <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">
                format_shapes
              </i>
              <span
                className={
                  expandSidebar
                    ? "sidebar-menu-text view-text"
                    : "sidebar-menu-text hide-text"
                }
              >
                Home
              </span>
            </a>
          </li>
          <li
            className="sidebar-menu-item active"
            data-toggle="tooltip"
            data-title="Instructor"
            data-placement="right"
            data-container="body"
            data-boundary="window"
            data-original-title=""
            title=""
          >
            <a
              className="sidebar-menu-button"
              href="#sm_instructor"
              data-toggle="tab"
              role="tab"
              aria-controls="sm_instructor"
              aria-selected="false"
            >
              <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">
                school
              </i>
              <span
                className={
                  expandSidebar
                    ? "sidebar-menu-text view-text"
                    : "sidebar-menu-text hide-text"
                }
              >
                Student
              </span>
            </a>
          </li>
      
          <li
            className="sidebar-menu-item "
            data-toggle="tooltip"
            data-title="Apps"
            data-placement="right"
            data-container="body"
            data-boundary="window"
            data-original-title=""
            title=""
          >
            <a
              className="sidebar-menu-button"
              href="/protected/admin/manage-courses"
              data-toggle="tab"
              role="tab"
              aria-controls="sm_apps"
            >
              <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">
                apps
              </i>
              <span
                className={
                  expandSidebar
                    ? "sidebar-menu-text view-text"
                    : "sidebar-menu-text hide-text"
                }
              >
              Courses
              </span>
            </a>
          </li>
          <li
            className="sidebar-menu-item"
            data-toggle="tooltip"
            data-title="Components"
            data-placement="right"
            data-container="body"
            data-boundary="window"
            data-original-title=""
            title=""
          >
            <a
              className="sidebar-menu-button"
              href="/protected/admin/create-course"
              data-toggle="tab"
              role="tab"
              aria-controls="sm_components"
            >
              <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">
                tune
              </i>
              <span
                className={
                  expandSidebar
                    ? "sidebar-menu-text view-text"
                    : "sidebar-menu-text hide-text"
                }
              >
                Create Course
              </span>
            </a>
          </li>
          <li
            className="sidebar-menu-item "
            data-toggle="tooltip"
            data-title="Account"
            data-placement="right"
            data-container="body"
            data-boundary="window"
            data-original-title=""
            title=""
          >
            <a
              className="sidebar-menu-button"
              href="#sm_account"
              data-toggle="tab"
              role="tab"
              aria-controls="sm_account"
            >
              <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">
                account_box
              </i>
              <span
                className={
                  expandSidebar
                    ? "sidebar-menu-text view-text"
                    : "sidebar-menu-text hide-text"
                }
              >
                Account
              </span>
            </a>
          </li>
          <li
            className="sidebar-menu-item "
            data-toggle="tooltip"
            data-title="Messaging"
            data-placement="right"
            data-container="body"
            data-boundary="window"
            data-original-title=""
            title=""
          >
            <a
              className="sidebar-menu-button"
              href="#sm_messaging"
              data-toggle="tab"
              role="tab"
              aria-controls="sm_messaging"
            >
              <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">
                message
              </i>
              <span
                className={
                  expandSidebar
                    ? "sidebar-menu-text view-text"
                    : "sidebar-menu-text hide-text"
                }
              >
                Messaging
              </span>
            </a>
          </li>
          
          <li
            className="sidebar-menu-item"
            data-toggle="tooltip"
            data-title="Layouts"
            data-placement="right"
            data-boundary="window"
            data-original-title=""
            title=""
          >
            <a
              className="sidebar-menu-button"
              href="#sm_layouts"
              data-toggle="tab"
              role="tab"
              aria-controls="sm_layouts"
              aria-selected="false"
            >
              <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">
                view_compact
              </i>
              <span
                className={
                  expandSidebar
                    ? "sidebar-menu-text view-text"
                    : "sidebar-menu-text hide-text"
                }
              >
                Layouts
              </span>
            </a>
          </li>
        </ul>
}
        
      </div>
    </div>
  );
};

export default Sidebar;