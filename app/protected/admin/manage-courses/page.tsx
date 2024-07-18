"use client";
import { Link } from "@mui/material";
import { useEffect, useState } from "react";
import { Api } from "@/app/lib/restapi/endpoints";
import { ICourse } from "@/app/interfaces/courses";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../assets/vendor/spinkit.css";
import "../../../assets/css/preloader.css";
import dynamic from "next/dynamic";

import { resetCourseState, updateCourseFromDataBase } from "@/app/redux/courseSlice";
import { useDispatch, useSelector } from "react-redux";
import { resetQuizState, updateQuizzes } from "@/app/redux/quizSlice";
import { IResponseObject } from "@/app/lib/restapi/response";
import { IAssessment } from "@/app/interfaces/assessment";
import { resetAssessmentState, updateAssessment } from "@/app/redux/assessmentSlice";
import { resetDocumentState } from "@/app/redux/documentSice";
function ManageCourses() {
  const [courseHover, setCourseHover] = useState<boolean>(false);
  const [courses, setCourses] = useState<ICourse[] | any>();
  const [quizzes, setQuizzes] = useState<any>([]);
  const [courseId, setCourseId] = useState<string>("");
  const [assesssments, setAssesssments] = useState<IAssessment[]>()
  const cookies = new Cookies();

  const dispatch = useDispatch();

  const userData = cookies.get("param-lms-user");
  console.log(userData);

  async function ListAllCourses() {
    let _id = toast.loading("Please wait..", {
      //loader
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
    try {
      const data = await Api.GET_CoursesByUserId(userData?.id);
      setCourses(data);
      toast.dismiss(_id);
    } catch (error) {
      console.log("Error fetching courses:", error);
      toast.update(_id, {
        render: "Error loading courses",
        type: "error",
        isLoading: false,
      });
      setTimeout(() => {
        toast.dismiss(_id);
      }, 2000);
    }
  }

  async function getAllQuizzes() {
    try {
      const getQuizzes = await Api.GET_AllQuizzes();
      setQuizzes(getQuizzes);

      if (getQuizzes && getQuizzes.length > 0) {
        const mappedQuizzes = getQuizzes.map((quiz: any) => {
          return { ...quiz?.data, state: 0 };
        });
        dispatch(updateQuizzes(mappedQuizzes));
      } else {
        console.log("No quizzes found");
      }
    } catch (error) {
      console.error("Error fetching quizzes:", error);
    }
  }
  async function getAllDocuments() {
    try {
      const getDocuments = await Api.GET_Documents();
      console.log("Documents fetched", getDocuments);
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  }
  async function getAllAssessments() {
    try {
      const getAssessments = await Api.GET_GetAllAssessments();
      const sortedAssessmenst = getAssessments.map((assessment:any) => assessment?.data);
      console.log("Assessments fetched", sortedAssessmenst);
      setAssesssments(sortedAssessmenst);
    } catch (error) {
      console.error("Error fetching assessments:", error);
    }
  }

  const editCourse = (course: any) => {
    const getCourseAssessment = assesssments?.filter(assessment => assessment.courseId === course?.data?.id)[0];
    setCourseId(course?.data?.id);
    dispatch(updateAssessment(getCourseAssessment));
    dispatch(updateCourseFromDataBase(course?.data));
  };

  useEffect(() => {
    ListAllCourses();
    getAllQuizzes();
    getAllDocuments();
    getAllAssessments();
  }, []);

  const clearReduxState = () => {
    localStorage.removeItem('persist:assessment');
    localStorage.removeItem('persist:course');
    localStorage.removeItem('persist:documents');
    localStorage.removeItem('persist:quizzes');
    resetAssessmentState();
    resetCourseState();
    resetDocumentState();
    resetQuizState()
    
  };

  return (
    <div>
      <div
        className="mdk-drawer-layout__content page-content"
        style={{ transform: "translate3d(0px, 0px, 0px)" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: "60px",
          }}
        >
          <div>
            <ToastContainer />
            <h2 className="mb-0">Courses</h2>
            <ol className="breadcrumb p-0 m-0">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active">Courses</li>
            </ol>
          </div>
          <div >
          <Link
                href="/protected/admin/create-course"
                style={{ textDecoration: "none", marginRight:"5em" }}
                className="small"
              >
                <a onClick={clearReduxState}  className="btn btn-outline-secondary ">Add Course</a>
              </Link>
          </div>
        </div>

        <div className="container page__container page-section">
          <div className="page-separator">
            <div className="page-separator__text">Development Courses</div>
          </div>
          <div className="row">
            {courses?.length > 0 &&
              courses.map((course: any) => (
                <>
                  <div className="col-sm-6 col-md-4 col-xl-3">
                    <div
                      className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary js-overlay mdk-reveal js-mdk-reveal overlay--show"
                      data-overlay-onload-show=""
                      data-popover-onload-show=""
                      data-force-reveal=""
                      data-partial-height={44}
                      data-toggle="popover"
                      data-trigger="click"
                      data-original-title=""
                      title=""
                      aria-describedby="popover384631"
                      data-domfactory-upgraded="mdk-reveal,overlay"
                      style={{ height: 212 }}
                      data-opened=""
                      onClick={() => editCourse(course)}
                    >
                      <a
                        onMouseOver={() => setCourseHover(true)}
                        onMouseLeave={() => setCourseHover(false)}
                        href="/protected/admin/edit-course"
                        className="js-image"
                        data-position="center"
                        data-height="auto"
                        data-domfactory-upgraded="image"
                        style={{
                          display: "block",
                          position: "relative",
                          overflow: "hidden",
                          backgroundImage: `url(${course.data.logo})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                          height: 168,
                        }}
                      >
                        <img
                          src="../../public/images/paths/angular_430x168.png"
                          alt="course"
                          style={{ visibility: "hidden" }}
                        />

                        {courseHover && (
                          <>
                            {" "}
                            <div
                              className="popover popover-lg fade show bs-popover-right"
                              role="tooltip"
                              id="popover384631"
                              x-placement="right"
                              style={{
                                position: "absolute",
                                willChange: "transform",
                                top: 0,
                                left: 0,
                                transform: "translate3d(275px, 145px, 0px)",
                              }}
                            >
                              <div className="arrow" style={{ top: 181 }} />
                              <h3 className="popover-header" />

                              <div className="popover-body">
                                <div className="media">
                                  <div className="media-left mr-12pt">
                                    <img
                                      src="../../public/images/paths/angular_40x40@2x.png"
                                      width={40}
                                      height={40}
                                      alt="Angular"
                                      className="rounded"
                                    />
                                  </div>
                                  <div className="media-body">
                                    <div className="card-title mb-0">
                                      Learn Angular fundamentals
                                    </div>
                                    <p className="lh-1">
                                      <span className="text-50 small">
                                        with
                                      </span>
                                      <span className="text-50 small font-weight-bold">
                                        Elijah Murray
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <p className="my-16pt text-70">
                                  Learn the fundamentals of working with Angular
                                  and how to create basic applications.
                                </p>
                                <div className="mb-16pt">
                                  <div className="d-flex align-items-center">
                                    <span className="material-icons icon-16pt text-50 mr-8pt">
                                      check
                                    </span>
                                    <p className="flex text-50 lh-1 mb-0">
                                      <small>
                                        Fundamentals of working with Angular
                                      </small>
                                    </p>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <span className="material-icons icon-16pt text-50 mr-8pt">
                                      check
                                    </span>
                                    <p className="flex text-50 lh-1 mb-0">
                                      <small>
                                        Create complete Angular applications
                                      </small>
                                    </p>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <span className="material-icons icon-16pt text-50 mr-8pt">
                                      check
                                    </span>
                                    <p className="flex text-50 lh-1 mb-0">
                                      <small>
                                        Working with the Angular CLI
                                      </small>
                                    </p>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <span className="material-icons icon-16pt text-50 mr-8pt">
                                      check
                                    </span>
                                    <p className="flex text-50 lh-1 mb-0">
                                      <small>
                                        Understanding Dependency Injection
                                      </small>
                                    </p>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <span className="material-icons icon-16pt text-50 mr-8pt">
                                      check
                                    </span>
                                    <p className="flex text-50 lh-1 mb-0">
                                      <small>Testing with Angular</small>
                                    </p>
                                  </div>
                                </div>
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <div className="d-flex align-items-center mb-4pt">
                                      <span className="material-icons icon-16pt text-50 mr-4pt">
                                        access_time
                                      </span>
                                      <p className="flex text-50 lh-1 mb-0">
                                        <small>6 hours</small>
                                      </p>
                                    </div>
                                    <div className="d-flex align-items-center mb-4pt">
                                      <span className="material-icons icon-16pt text-50 mr-4pt">
                                        play_circle_outline
                                      </span>
                                      <p className="flex text-50 lh-1 mb-0">
                                        <small>12 lessons</small>
                                      </p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <span className="material-icons icon-16pt text-50 mr-4pt">
                                        assessment
                                      </span>
                                      <p className="flex text-50 lh-1 mb-0">
                                        <small>Beginner</small>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col text-right">
                                    <a
                                      href="/protected/admin/edit-course"
                                      className="btn btn-primary"
                                    >
                                      Edit course
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>{" "}
                          </>
                        )}
                      </a>
                      <div
                        className="mdk-reveal__content"
                        style={{ transform: "translateY(-40px)" }}
                      >
                        <div
                          className="mdk-reveal__partial"
                          style={{ height: 44 }}
                        />
                        <div className="card-body">
                          <div className="d-flex">
                            <div className="flex">
                              <a
                                className="card-title mb-4pt"
                                href="/protected/admin/edit-course"
                              >
                                {course.data.title}
                              </a>
                            </div>
                            <a
                              href="/protected/admin/edit-course"
                              className="ml-4pt material-icons text-20 card-course__icon-favorite"
                            >
                              edit
                            </a>
                          </div>
                          <div className="d-flex">
                            <div className="rating flex">
                              <span className="rating__item">
                                <span className="material-icons">star</span>
                              </span>
                              <span className="rating__item">
                                <span className="material-icons">star</span>
                              </span>
                              <span className="rating__item">
                                <span className="material-icons">star</span>
                              </span>
                              <span className="rating__item">
                                <span className="material-icons">star</span>
                              </span>
                              <span className="rating__item">
                                <span className="material-icons">
                                  star_border
                                </span>
                              </span>
                            </div>
                            <small className="text-50">6 hours</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}

            {/* <div  className="col-sm-6 col-md-4 col-xl-3">
          <div
            className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary js-overlay mdk-reveal js-mdk-reveal "
            data-partial-height={44}
            data-toggle="popover"
            data-trigger="click"
            data-original-title=""
            title=""
            data-domfactory-upgraded="mdk-reveal,overlay"
            style={{ height: 212 }}
          >
            <a
              href="instructor-edit-course.html"
              className="js-image"
              data-position="center"
              data-height="auto"
              data-domfactory-upgraded="image"
              style={{
                display: "block",
                position: "relative",
                overflow: "hidden",
                backgroundImage:
                  'url("https://luma.humatheme.com/public/images/paths/swift_430x168.png")',
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: 168
              }}
            >
              <img
                src="../../public/images/paths/swift_430x168.png"
                alt="course"
                style={{ visibility: "hidden" }}
              />
              <span className="overlay__content align-items-start justify-content-start">
                <span className="overlay__action card-body d-flex align-items-center">
                  <i className="material-icons mr-4pt">edit</i>
                  <span className="card-title text-white">Edit</span>
                </span>
              </span>
            </a>
            <div className="mdk-reveal__content">
              <div className="mdk-reveal__partial" style={{ height: 44 }} />
              <div className="card-body">
                <div className="d-flex">
                  <div className="flex">
                    <a
                      className="card-title mb-4pt"
                      href="instructor-edit-course.html"
                    >
                      Build an iOS Application in Swift
                    </a>
                  </div>
                  <a
                    href="instructor-edit-course.html"
                    className="ml-4pt material-icons text-20 card-course__icon-favorite"
                  >
                    edit
                  </a>
                </div>
                <div className="d-flex">
                  <div className="rating flex">
                    <span className="rating__item">
                      <span className="material-icons">star</span>
                    </span>
                    <span className="rating__item">
                      <span className="material-icons">star</span>
                    </span>
                    <span className="rating__item">
                      <span className="material-icons">star</span>
                    </span>
                    <span className="rating__item">
                      <span className="material-icons">star</span>
                    </span>
                    <span className="rating__item">
                      <span className="material-icons">star_border</span>
                    </span>
                  </div>
                  <small className="text-50">6 hours</small>
                </div>
              </div>
            </div>
          </div>
          <div className="popoverContainer d-none">
            <div className="media">
              <div className="media-left mr-12pt">
                <img
                  src="../../public/images/paths/swift_40x40@2x.png"
                  width={40}
                  height={40}
                  alt="Angular"
                  className="rounded"
                />
              </div>
              <div className="media-body">
                <div className="card-title mb-0">
                  Build an iOS Application in Swift
                </div>
                <p className="lh-1">
                  <span className="text-50 small">with</span>
                  <span className="text-50 small font-weight-bold">
                    Elijah Murray
                  </span>
                </p>
              </div>
            </div>
            <p className="my-16pt text-70">
              Learn the fundamentals of working with Angular and how to create
              basic applications.
            </p>
            <div className="mb-16pt">
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Fundamentals of working with Angular</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Create complete Angular applications</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Working with the Angular CLI</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Understanding Dependency Injection</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Testing with Angular</small>
                </p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-auto">
                <div className="d-flex align-items-center mb-4pt">
                  <span className="material-icons icon-16pt text-50 mr-4pt">
                    access_time
                  </span>
                  <p className="flex text-50 lh-1 mb-0">
                    <small>6 hours</small>
                  </p>
                </div>
                <div className="d-flex align-items-center mb-4pt">
                  <span className="material-icons icon-16pt text-50 mr-4pt">
                    play_circle_outline
                  </span>
                  <p className="flex text-50 lh-1 mb-0">
                    <small>12 lessons</small>
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <span className="material-icons icon-16pt text-50 mr-4pt">
                    assessment
                  </span>
                  <p className="flex text-50 lh-1 mb-0">
                    <small>Beginner</small>
                  </p>
                </div>
              </div>
              <div className="col text-right">
                <a
                  href="instructor-edit-course.html"
                  className="btn btn-primary"
                >
                  Edit course
                </a>
              </div>
            </div>
          </div>
        </div> */}
          </div>
          <div className="mb-32pt">
            <ul className="pagination justify-content-start pagination-xsm m-0">
              <li className="page-item disabled">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true" className="material-icons">
                    chevron_left
                  </span>
                  <span>Prev</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Page 1">
                  <span>1</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Page 2">
                  <span>2</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span>Next</span>
                  <span aria-hidden="true" className="material-icons">
                    chevron_right
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="page-separator">
            <div className="page-separator__text">Design Courses</div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 col-xl-3">
              <div
                className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary js-overlay mdk-reveal js-mdk-reveal "
                data-partial-height={44}
                data-toggle="popover"
                data-trigger="click"
                data-original-title=""
                title=""
                data-domfactory-upgraded="mdk-reveal,overlay"
                style={{ height: 212 }}
              >
                <a
                  className="js-image"
                  data-position="center"
                  data-height="auto"
                  data-domfactory-upgraded="image"
                  style={{
                    display: "block",
                    position: "relative",
                    overflow: "hidden",
                    backgroundImage:
                      'url("https://luma.humatheme.com/public/images/paths/sketch_430x168.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    height: 168,
                  }}
                >
                  <img
                    src="../../public/images/paths/sketch_430x168.png"
                    alt="course"
                    style={{ visibility: "hidden" }}
                  />
                  <span className="overlay__content align-items-start justify-content-start">
                    <span className="overlay__action card-body d-flex align-items-center">
                      <i className="material-icons mr-4pt">edit</i>
                      <span className="card-title text-white">Edit</span>
                    </span>
                  </span>
                </a>
                <div className="mdk-reveal__content">
                  <div className="mdk-reveal__partial" style={{ height: 44 }} />
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="flex">
                        <a
                          className="card-title mb-4pt"
                        >
                          Learn Sketch
                        </a>
                      </div>
                      <a
                        className="ml-4pt material-icons text-20 card-course__icon-favorite"
                      >
                        edit
                      </a>
                    </div>
                    <div className="d-flex">
                      <div className="rating flex">
                        <span className="rating__item">
                          <span className="material-icons">star</span>
                        </span>
                        <span className="rating__item">
                          <span className="material-icons">star</span>
                        </span>
                        <span className="rating__item">
                          <span className="material-icons">star</span>
                        </span>
                        <span className="rating__item">
                          <span className="material-icons">star</span>
                        </span>
                        <span className="rating__item">
                          <span className="material-icons">star_border</span>
                        </span>
                      </div>
                      <small className="text-50">6 hours</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="popoverContainer d-none">
                <div className="media">
                  <div className="media-left mr-12pt">
                    <img
                      src="../../public/images/paths/sketch_40x40@2x.png"
                      width={40}
                      height={40}
                      alt="Angular"
                      className="rounded"
                    />
                  </div>
                  <div className="media-body">
                    <div className="card-title mb-0">Learn Sketch</div>
                    <p className="lh-1">
                      <span className="text-50 small">with</span>
                      <span className="text-50 small font-weight-bold">
                        Elijah Murray
                      </span>
                    </p>
                  </div>
                </div>
                <p className="my-16pt text-70">
                  Learn the fundamentals of working with Angular and how to
                  create basic applications.
                </p>
                <div className="mb-16pt">
                  <div className="d-flex align-items-center">
                    <span className="material-icons icon-16pt text-50 mr-8pt">
                      check
                    </span>
                    <p className="flex text-50 lh-1 mb-0">
                      <small>Fundamentals of working with Angular</small>
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="material-icons icon-16pt text-50 mr-8pt">
                      check
                    </span>
                    <p className="flex text-50 lh-1 mb-0">
                      <small>Create complete Angular applications</small>
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="material-icons icon-16pt text-50 mr-8pt">
                      check
                    </span>
                    <p className="flex text-50 lh-1 mb-0">
                      <small>Working with the Angular CLI</small>
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="material-icons icon-16pt text-50 mr-8pt">
                      check
                    </span>
                    <p className="flex text-50 lh-1 mb-0">
                      <small>Understanding Dependency Injection</small>
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="material-icons icon-16pt text-50 mr-8pt">
                      check
                    </span>
                    <p className="flex text-50 lh-1 mb-0">
                      <small>Testing with Angular</small>
                    </p>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-auto">
                    <div className="d-flex align-items-center mb-4pt">
                      <span className="material-icons icon-16pt text-50 mr-4pt">
                        access_time
                      </span>
                      <p className="flex text-50 lh-1 mb-0">
                        <small>6 hours</small>
                      </p>
                    </div>
                    <div className="d-flex align-items-center mb-4pt">
                      <span className="material-icons icon-16pt text-50 mr-4pt">
                        play_circle_outline
                      </span>
                      <p className="flex text-50 lh-1 mb-0">
                        <small>12 lessons</small>
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="material-icons icon-16pt text-50 mr-4pt">
                        assessment
                      </span>
                      <p className="flex text-50 lh-1 mb-0">
                        <small>Beginner</small>
                      </p>
                    </div>
                  </div>
                  <div className="col text-right">
                    <a
                      className="btn btn-primary"
                    >
                      Edit course
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-xl-3">
              <div
                className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary js-overlay mdk-reveal js-mdk-reveal "
                data-partial-height={44}
                data-toggle="popover"
                data-trigger="click"
                data-original-title=""
                title=""
                data-domfactory-upgraded="mdk-reveal,overlay"
                style={{ height: 212 }}
              >
                <a
                  className="js-image"
                  data-position="center"
                  data-height="auto"
                  data-domfactory-upgraded="image"
                  style={{
                    display: "block",
                    position: "relative",
                    overflow: "hidden",
                    backgroundImage:
                      'url("https://luma.humatheme.com/public/images/paths/flinto_430x168.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    height: 168,
                  }}
                >
                  <img
                    src="../../public/images/paths/flinto_430x168.png"
                    alt="course"
                    style={{ visibility: "hidden" }}
                  />
                  <span className="overlay__content align-items-start justify-content-start">
                    <span className="overlay__action card-body d-flex align-items-center">
                      <i className="material-icons mr-4pt">edit</i>
                      <span className="card-title text-white">Edit</span>
                    </span>
                  </span>
                </a>
                <div className="mdk-reveal__content">
                  <div className="mdk-reveal__partial" style={{ height: 44 }} />
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="flex">
                        <a
                          className="card-title mb-4pt"
                        >
                          Learn Flinto
                        </a>
                      </div>
                      <a
                        className="ml-4pt material-icons text-20 card-course__icon-favorite"
                      >
                        edit
                      </a>
                    </div>
                    <div className="d-flex">
                      <div className="rating flex">
                        <span className="rating__item">
                          <span className="material-icons">star</span>
                        </span>
                        <span className="rating__item">
                          <span className="material-icons">star</span>
                        </span>
                        <span className="rating__item">
                          <span className="material-icons">star</span>
                        </span>
                        <span className="rating__item">
                          <span className="material-icons">star</span>
                        </span>
                        <span className="rating__item">
                          <span className="material-icons">star_border</span>
                        </span>
                      </div>
                      <small className="text-50">6 hours</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="popoverContainer d-none">
                <div className="media">
                  <div className="media-left mr-12pt">
                    <img
                      src="../../public/images/paths/flinto_40x40@2x.png"
                      width={40}
                      height={40}
                      alt="Angular"
                      className="rounded"
                    />
                  </div>
                  <div className="media-body">
                    <div className="card-title mb-0">Learn Flinto</div>
                    <p className="lh-1">
                      <span className="text-50 small">with</span>
                      <span className="text-50 small font-weight-bold">
                        Elijah Murray
                      </span>
                    </p>
                  </div>
                </div>
                <p className="my-16pt text-70">
                  Learn the fundamentals of working with Angular and how to
                  create basic applications.
                </p>
                <div className="mb-16pt">
                  <div className="d-flex align-items-center">
                    <span className="material-icons icon-16pt text-50 mr-8pt">
                      check
                    </span>
                    <p className="flex text-50 lh-1 mb-0">
                      <small>Fundamentals of working with Angular</small>
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="material-icons icon-16pt text-50 mr-8pt">
                      check
                    </span>
                    <p className="flex text-50 lh-1 mb-0">
                      <small>Create complete Angular applications</small>
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="material-icons icon-16pt text-50 mr-8pt">
                      check
                    </span>
                    <p className="flex text-50 lh-1 mb-0">
                      <small>Working with the Angular CLI</small>
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="material-icons icon-16pt text-50 mr-8pt">
                      check
                    </span>
                    <p className="flex text-50 lh-1 mb-0">
                      <small>Understanding Dependency Injection</small>
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="material-icons icon-16pt text-50 mr-8pt">
                      check
                    </span>
                    <p className="flex text-50 lh-1 mb-0">
                      <small>Testing with Angular</small>
                    </p>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-auto">
                    <div className="d-flex align-items-center mb-4pt">
                      <span className="material-icons icon-16pt text-50 mr-4pt">
                        access_time
                      </span>
                      <p className="flex text-50 lh-1 mb-0">
                        <small>6 hours</small>
                      </p>
                    </div>
                    <div className="d-flex align-items-center mb-4pt">
                      <span className="material-icons icon-16pt text-50 mr-4pt">
                        play_circle_outline
                      </span>
                      <p className="flex text-50 lh-1 mb-0">
                        <small>12 lessons</small>
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="material-icons icon-16pt text-50 mr-4pt">
                        assessment
                      </span>
                      <p className="flex text-50 lh-1 mb-0">
                        <small>Beginner</small>
                      </p>
                    </div>
                  </div>
                  <div className="col text-right">
                    <a
                      className="btn btn-primary"
                    >
                      Edit course
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-xl-3">
              <div
                className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary js-overlay mdk-reveal js-mdk-reveal "
                data-partial-height={44}
                data-toggle="popover"
                data-trigger="click"
                data-original-title=""
                title=""
                data-domfactory-upgraded="mdk-reveal,overlay"
                style={{ height: 212 }}
              >
                <a
                  href="instructor-edit-course.html"
                  className="js-image"
                  data-position="center"
                  data-height="auto"
                  data-domfactory-upgraded="image"
                  style={{
                    display: "block",
                    position: "relative",
                    overflow: "hidden",
                    backgroundImage:
                      'url("https://luma.humatheme.com/public/images/paths/photoshop_430x168.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    height: 168,
                  }}
                >
                  <img
                    src="../../public/images/paths/photoshop_430x168.png"
                    alt="course"
                    style={{ visibility: "hidden" }}
                  />
                  <span className="overlay__content align-items-start justify-content-start">
                    <span className="overlay__action card-body d-flex align-items-center">
                      <i className="material-icons mr-4pt">edit</i>
                      <span className="card-title text-white">Edit</span>
                    </span>
                  </span>
                </a>
                <div className="mdk-reveal__content">
                  <div className="mdk-reveal__partial" style={{ height: 44 }} />
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="flex">
                        <a
                          className="card-title mb-4pt"
                        
                        >
                          Learn Photoshop
                        </a>
                      </div>
                      <a
                       
                        className="ml-4pt material-icons text-20 card-course__icon-favorite"
                      >
                        edit
                      </a>
                    </div>
                    <div className="d-flex">
                      <div className="rating flex">
                        <span className="rating__item">
                          <span className="material-icons">star</span>
                        </span>
                        <span className="rating__item">
                          <span className="material-icons">star</span>
                        </span>
                        <span className="rating__item">
                          <span className="material-icons">star</span>
                        </span>
                        <span className="rating__item">
                          <span className="material-icons">star</span>
                        </span>
                        <span className="rating__item">
                          <span className="material-icons">star_border</span>
                        </span>
                      </div>
                      <small className="text-50">6 hours</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="popoverContainer d-none">
                <div className="media">
                  <div className="media-left mr-12pt">
                    <img
                      src="../../public/images/paths/photoshop_40x40@2x.png"
                      width={40}
                      height={40}
                      alt="Angular"
                      className="rounded"
                    />
                  </div>
                  <div className="media-body">
                    <div className="card-title mb-0">Learn Photoshop</div>
                    <p className="lh-1">
                      <span className="text-50 small">with</span>
                      <span className="text-50 small font-weight-bold">
                        Elijah Murray
                      </span>
                    </p>
                  </div>
                </div>
                <p className="my-16pt text-70">
                  Learn the fundamentals of working with Angular and how to
                  create basic applications.
                </p>
                <div className="mb-16pt">
                  <div className="d-flex align-items-center">
                    <span className="material-icons icon-16pt text-50 mr-8pt">
                      check
                    </span>
                    <p className="flex text-50 lh-1 mb-0">
                      <small>Fundamentals of working with Angular</small>
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="material-icons icon-16pt text-50 mr-8pt">
                      check
                    </span>
                    <p className="flex text-50 lh-1 mb-0">
                      <small>Create complete Angular applications</small>
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="material-icons icon-16pt text-50 mr-8pt">
                      check
                    </span>
                    <p className="flex text-50 lh-1 mb-0">
                      <small>Working with the Angular CLI</small>
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="material-icons icon-16pt text-50 mr-8pt">
                      check
                    </span>
                    <p className="flex text-50 lh-1 mb-0">
                      <small>Understanding Dependency Injection</small>
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="material-icons icon-16pt text-50 mr-8pt">
                      check
                    </span>
                    <p className="flex text-50 lh-1 mb-0">
                      <small>Testing with Angular</small>
                    </p>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-auto">
                    <div className="d-flex align-items-center mb-4pt">
                      <span className="material-icons icon-16pt text-50 mr-4pt">
                        access_time
                      </span>
                      <p className="flex text-50 lh-1 mb-0">
                        <small>6 hours</small>
                      </p>
                    </div>
                    <div className="d-flex align-items-center mb-4pt">
                      <span className="material-icons icon-16pt text-50 mr-4pt">
                        play_circle_outline
                      </span>
                      <p className="flex text-50 lh-1 mb-0">
                        <small>12 lessons</small>
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="material-icons icon-16pt text-50 mr-4pt">
                        assessment
                      </span>
                      <p className="flex text-50 lh-1 mb-0">
                        <small>Beginner</small>
                      </p>
                    </div>
                  </div>
                  <div className="col text-right">
                    <a
        
                      className="btn btn-primary"
                    >
                      Edit course
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-xl-3">
              <div
                className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary js-overlay mdk-reveal js-mdk-reveal "
                data-partial-height={44}
                data-toggle="popover"
                data-trigger="click"
                data-original-title=""
                title=""
                data-domfactory-upgraded="mdk-reveal,overlay"
                style={{ height: 212 }}
              >
                <a
        
                  className="js-image"
                  data-position="center"
                  data-height="auto"
                  data-domfactory-upgraded="image"
                  style={{
                    display: "block",
                    position: "relative",
                    overflow: "hidden",
                    backgroundImage:
                      'url("https://luma.humatheme.com/public/images/paths/mailchimp_430x168.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    height: 168,
                  }}
                >
                  <img
                    src="../../public/images/paths/mailchimp_430x168.png"
                    alt="course"
                    style={{ visibility: "hidden" }}
                  />
                  <span className="overlay__content align-items-start justify-content-start">
                    <span className="overlay__action card-body d-flex align-items-center">
                      <i className="material-icons mr-4pt">edit</i>
                      <span className="card-title text-white">Edit</span>
                    </span>
                  </span>
                </a>
                <div className="mdk-reveal__content">
                  <div className="mdk-reveal__partial" style={{ height: 44 }} />
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="flex">
                        <a
                          className="card-title mb-4pt"
               
                        >
                          Newsletter Design
                        </a>
                      </div>
                      <a
                
                        className="ml-4pt material-icons text-20 card-course__icon-favorite"
                      >
                        edit
                      </a>
                    </div>
                    <div className="d-flex">
                      <div className="rating flex">
                        <span className="rating__item">
                          <span className="material-icons">star</span>
                        </span>
                        <span className="rating__item">
                          <span className="material-icons">star</span>
                        </span>
                        <span className="rating__item">
                          <span className="material-icons">star</span>
                        </span>
                        <span className="rating__item">
                          <span className="material-icons">star</span>
                        </span>
                        <span className="rating__item">
                          <span className="material-icons">star_border</span>
                        </span>
                      </div>
                      <small className="text-50">6 hours</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="popoverContainer d-none">
                <div className="media">
                  <div className="media-left mr-12pt">
                    <img
                      src="../../public/images/paths/mailchimp_40x40@2x.png"
                      width={40}
                      height={40}
                      alt="Angular"
                      className="rounded"
                    />
                  </div>
                  <div className="media-body">
                    <div className="card-title mb-0">Newsletter Design</div>
                    <p className="lh-1">
                      <span className="text-50 small">with</span>
                      <span className="text-50 small font-weight-bold">
                        Elijah Murray
                      </span>
                    </p>
                  </div>
                </div>
                <p className="my-16pt text-70">
                  Learn the fundamentals of working with Angular and how to
                  create basic applications.
                </p>
                <div className="mb-16pt">
                  <div className="d-flex align-items-center">
                    <span className="material-icons icon-16pt text-50 mr-8pt">
                      check
                    </span>
                    <p className="flex text-50 lh-1 mb-0">
                      <small>Fundamentals of working with Angular</small>
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="material-icons icon-16pt text-50 mr-8pt">
                      check
                    </span>
                    <p className="flex text-50 lh-1 mb-0">
                      <small>Create complete Angular applications</small>
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="material-icons icon-16pt text-50 mr-8pt">
                      check
                    </span>
                    <p className="flex text-50 lh-1 mb-0">
                      <small>Working with the Angular CLI</small>
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="material-icons icon-16pt text-50 mr-8pt">
                      check
                    </span>
                    <p className="flex text-50 lh-1 mb-0">
                      <small>Understanding Dependency Injection</small>
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="material-icons icon-16pt text-50 mr-8pt">
                      check
                    </span>
                    <p className="flex text-50 lh-1 mb-0">
                      <small>Testing with Angular</small>
                    </p>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-auto">
                    <div className="d-flex align-items-center mb-4pt">
                      <span className="material-icons icon-16pt text-50 mr-4pt">
                        access_time
                      </span>
                      <p className="flex text-50 lh-1 mb-0">
                        <small>6 hours</small>
                      </p>
                    </div>
                    <div className="d-flex align-items-center mb-4pt">
                      <span className="material-icons icon-16pt text-50 mr-4pt">
                        play_circle_outline
                      </span>
                      <p className="flex text-50 lh-1 mb-0">
                        <small>12 lessons</small>
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="material-icons icon-16pt text-50 mr-4pt">
                        assessment
                      </span>
                      <p className="flex text-50 lh-1 mb-0">
                        <small>Beginner</small>
                      </p>
                    </div>
                  </div>
                  <div className="col text-right">
                    <a
                    
                      className="btn btn-primary"
                    >
                      Edit course
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="pagination justify-content-start pagination-xsm m-0">
            <li className="page-item disabled">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true" className="material-icons">
                  chevron_left
                </span>
                <span>Prev</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Page 1">
                <span>1</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Page 2">
                <span>2</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span>Next</span>
                <span aria-hidden="true" className="material-icons">
                  chevron_right
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(ManageCourses), { ssr: false });

{
  /*when you hover onto the course*/
}

{
  /* <div className="popover-body">
        <div className="media">
          <div className="media-left mr-12pt">
            <img
              src="../../public/images/paths/angular_40x40@2x.png"
              width={40}
              height={40}
              alt="Angular"
              className="rounded"
            />
          </div>
          <div className="media-body">
            <div className="card-title mb-0">Learn Angular fundamentals</div>
            <p className="lh-1">
              <span className="text-50 small">with</span>
              <span className="text-50 small font-weight-bold">
                Elijah Murray
              </span>
            </p>
          </div>
        </div>
        <p className="my-16pt text-70">
          Learn the fundamentals of working with Angular and how to create basic
          applications.
        </p>
        <div className="mb-16pt">
          <div className="d-flex align-items-center">
            <span className="material-icons icon-16pt text-50 mr-8pt">
              check
            </span>
            <p className="flex text-50 lh-1 mb-0">
              <small>Fundamentals of working with Angular</small>
            </p>
          </div>
          <div className="d-flex align-items-center">
            <span className="material-icons icon-16pt text-50 mr-8pt">
              check
            </span>
            <p className="flex text-50 lh-1 mb-0">
              <small>Create complete Angular applications</small>
            </p>
          </div>
          <div className="d-flex align-items-center">
            <span className="material-icons icon-16pt text-50 mr-8pt">
              check
            </span>
            <p className="flex text-50 lh-1 mb-0">
              <small>Working with the Angular CLI</small>
            </p>
          </div>
          <div className="d-flex align-items-center">
            <span className="material-icons icon-16pt text-50 mr-8pt">
              check
            </span>
            <p className="flex text-50 lh-1 mb-0">
              <small>Understanding Dependency Injection</small>
            </p>
          </div>
          <div className="d-flex align-items-center">
            <span className="material-icons icon-16pt text-50 mr-8pt">
              check
            </span>
            <p className="flex text-50 lh-1 mb-0">
              <small>Testing with Angular</small>
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-auto">
            <div className="d-flex align-items-center mb-4pt">
              <span className="material-icons icon-16pt text-50 mr-4pt">
                access_time
              </span>
              <p className="flex text-50 lh-1 mb-0">
                <small>6 hours</small>
              </p>
            </div>
            <div className="d-flex align-items-center mb-4pt">
              <span className="material-icons icon-16pt text-50 mr-4pt">
                play_circle_outline
              </span>
              <p className="flex text-50 lh-1 mb-0">
                <small>12 lessons</small>
              </p>
            </div>
            <div className="d-flex align-items-center">
              <span className="material-icons icon-16pt text-50 mr-4pt">
                assessment
              </span>
              <p className="flex text-50 lh-1 mb-0">
                <small>Beginner</small>
              </p>
            </div>
          </div>
          <div className="col text-right">
            <a href="instructor-edit-course.html" className="btn btn-primary">
              Edit course
            </a>
          </div>
        </div>
      </div> */
}

{
  /*when you hover onto the course*/
}
