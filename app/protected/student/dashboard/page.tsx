"use client"
import { useState } from 'react';
import Cookies from 'universal-cookie';
import { Api } from '@/app/lib/restapi/endpoints';
import { ICourse } from '@/app/interfaces/courses';
import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCourseForEdit } from '@/app/redux/courseSlice';
import MyCoursesChart from '@/app/components/CoursesChart';
import { IEnrollment } from '@/app/interfaces/Enrollment';
const cookies = new Cookies();


export default function StudentDashboard() {
  const dispatch = useDispatch();
   const [allCourses, setCourses] = useState<ICourse[]>(); 
   const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]); 
   const [highScore,setHighScore] = useState<Number> (0);

   const [courseScores, setCourseScores] = useState(['Angular', 'Nodejs', 'Python', 'Javascript', 'Java', 'Databases'])

   const goToCourseDetails=(course:ICourse)=>{
    
   
    dispatch(setSelectedCourseForEdit(course));
    window.location.href = '/protected/student/course/course-detail'; 
   }
   
  
useEffect(() => {
   getStudentCourses();
  }, []);

  console.log("courses",allCourses);
  console.log("enrolledCourses",enrolledCourses);

  

  async function getStudentCourses() {
    try {
      var student =cookies.get('param-lms-user');
      console.log("Id ", student.id)
      const course = await Api.GET_StudentCoursesById(student.id);
      console.log("Student-Courses",course);
        setCourses(course.data!.allCourses);
        setEnrolledCourses(course.data!.enrolledCourses);

     //   var highScore = Math.max.apply(Math, enrolledCourses?.score);  
        setHighScore(0);

       console.log("AllCourses",allCourses);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
<>
  {/* Page Content */}
  <div className="page-section">
    <div className="page__container">

       {/* start mase code */}
  <div className="page-separator">
    <div className="page-separator__text">Overview</div>
  </div>
  <div className="row mb-lg-8pt">
    <div className="col-lg-6">
      <div className="card">
        <div className="card-header d-flex align-items-center">
          <div className="h2 mb-0 mr-3">{""}</div>
          <div className="flex">
            <p className="card-title">Angular</p>
            <p className="card-subtitle text-50">Best score</p>
          </div>
  
        </div>
        <div className="card-body p-24pt">
          <div className="chart" style={{ height: 344 }}>
            <div className="chartjs-size-monitor">
              <div className="chartjs-size-monitor-expand">
                <div className="" />
              </div>
              <div className="chartjs-size-monitor-shrink">
                <div className="" />
              </div>
            </div>
            <MyCoursesChart enrolled={enrolledCourses}/>
           
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-6">
      <div className="card">
        <div className="card-header d-flex align-items-center border-0">
          <div className="h2 mb-0 mr-3">432</div>
          <div className="flex">
            <p className="card-title">Experience IQ</p>
            <p className="card-subtitle text-50">4 days streak this week</p>
          </div>
          <i className="material-icons text-muted ml-2">trending_up</i>
        </div>
        <div className="card-body pt-0">
          <div className="chart" style={{ height: 128 }}>
            <div className="chartjs-size-monitor">
              <div className="chartjs-size-monitor-expand">
                <div className="" />
              </div>
              <div className="chartjs-size-monitor-shrink">
                <div className="" />
              </div>
            </div>
            <canvas
              id="iqChart"
              className="chart-canvas js-update-chart-line chartjs-render-monitor"
              data-chart-hide-axes="false"
              data-chart-points="true"
              data-chart-suffix="pt"
              data-chart-line-border-color="primary"
              style={{ display: "block", height: 128, width: 410 }}
              width={820}
              height={256}
            />
          </div>
        </div>
      </div>
      <div
        id="carouselExampleFade"
        className="carousel carousel-card slide mb-24pt">
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* <a className="card border-0 mb-0" href="">
              <img
                src="../../public/images/achievements/flinto.png"
                alt="Flinto"
                className="card-img"
                style={{ maxHeight: "100%", width: "initial" }}
              />
              <div className="fullbleed bg-primary" style={{ opacity: ".5" }} />
              <span className="card-body d-flex flex-column align-items-center justify-content-center fullbleed">
                <span className="row flex-nowrap">
                  <span className="col-auto text-center d-flex flex-column justify-content-center align-items-center">
                    <span className="h5 text-white text-uppercase font-weight-normal m-0 d-block">
                      Achievement
                    </span>
                    <span className="text-white-60 d-block mb-24pt">
                      Jun 5, 2018
                    </span>
                  </span>
                  <span className="col d-flex flex-column">
                    <span className="text-right flex mb-16pt">
                      <img
                        src="../../public/images/paths/flinto_40x40@2x.png"
                        width={64}
                        alt="Flinto"
                        className="rounded"
                      />
                    </span>
                  </span>
                </span>
                <span className="row flex-nowrap">
                  <span className="col-auto text-center d-flex flex-column justify-content-center align-items-center">
                    <img
                      src="../../public/images/illustration/achievement/128/white.png"
                      width={64}
                      alt="achievement"
                    />
                  </span>
                  <span className="col d-flex flex-column">
                    <span>
                      <span className="card-title text-white mb-4pt d-block">
                        Flinto
                      </span>
                      <span className="text-white-60">
                        Introduction to The App Design Application
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </a> */}
          </div>
          <div className="carousel-item">
            <a className="card border-0 mb-0" href="">
              <img
                src="../../public/images/achievements/angular.png"
                alt="Angular fundamentals"
                className="card-img"
                style={{ maxHeight: "100%", width: "initial" }}
              />
              <div className="fullbleed bg-primary" style={{ opacity: ".5" }} />
              <span className="card-body d-flex flex-column align-items-center justify-content-center fullbleed">
                <span className="row flex-nowrap">
                  <span className="col-auto text-center d-flex flex-column justify-content-center align-items-center">
                    <span className="h5 text-white text-uppercase font-weight-normal m-0 d-block">
                      Achievement
                    </span>
                    <span className="text-white-60 d-block mb-24pt">
                      Jun 5, 2018
                    </span>
                  </span>
                  <span className="col d-flex flex-column">
                    <span className="text-right flex mb-16pt">
                      <img
                        src="../../public/images/paths/angular_64x64.png"
                        width={64}
                        alt="Angular fundamentals"
                        className="rounded"
                      />
                    </span>
                  </span>
                </span>
                <span className="row flex-nowrap">
                  <span className="col-auto text-center d-flex flex-column justify-content-center align-items-center">
                    <img
                      src="../../public/images/illustration/achievement/128/white.png"
                      width={64}
                      alt="achievement"
                    />
                  </span>
                  <span className="col d-flex flex-column">
                    <span>
                      <span className="card-title text-white mb-4pt d-block">
                        Angular fundamentals
                      </span>
                      <span className="text-white-60">
                        Creating and Communicating Between Angular Components
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        {/* <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-icon material-icons" aria-hidden="true">keyboard_arrow_left</span>
    <span class="sr-only">Previous</span>
    </a> */}
        {/* <a
          className="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-icon material-icons"
            aria-hidden="true"
          >
            keyboard_arrow_right
          </span>
          <span className="sr-only">Next</span>
        </a> */}
      </div>
    </div>
  </div>
  <div className="row mb-lg-16pt">
    <div className="col-lg-6 mb-8pt mb-sm-0">
      <div className="page-separator">
        <div className="page-separator__text">Learning Paths</div>
      </div>
      {
       enrolledCourses?.length > 0 && enrolledCourses?.map((enrolledCourse, i) => (
      <div
        className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 mb-16pt"
        data-toggle="popover"
        data-trigger="click"
        data-original-title=""
        title=""
        key={i}
        data-domfactory-upgraded="overlay">
        <div className="card-body d-flex flex-column">
          <div className="d-flex align-items-center">
            <div className="flex">
              <div className="d-flex align-items-center">
                <div className="rounded mr-12pt z-0 o-hidden">
                  <div className="overlay">
                    <img
                      src={enrolledCourse?.logo}
                      width={40}
                      height={40}
                      alt="Angular"
                      className="rounded"
                    />
                    <span className="overlay__content overlay__content-transparent">
                      <span className="overlay__action d-flex flex-column text-center lh-1">
                        <small
                          className="h6 small text-white mb-0"
                          style={{ fontWeight: 500 }}
                        >
                          80%
                        </small>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="card-title">{enrolledCourse?.title}</div>
                  <p className="flex text-50 lh-1 mb-0">
                    <small>{enrolledCourse?.sections.length} Sections</small>
                  </p>
                </div>
              </div>
            </div>
            <a
              // href="__quiz.html"
              onClick={() => goToCourseDetails(enrolledCourse)}
              className="ml-4pt btn btn-sm btn-link text-secondary"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
        ))
      }
      
      {/* <div
        className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 mb-16pt"
        data-toggle="popover"
        data-trigger="click"
        data-original-title=""
        title=""
        data-domfactory-upgraded="overlay">
        <div className="card-body d-flex flex-column">
          <div className="d-flex align-items-center">
            <div className="flex">
              <div className="d-flex align-items-center">
                <div className="rounded mr-12pt z-0 o-hidden">
                  <div className="overlay">
                    <img
                      src="../../public/images/paths/swift_40x40@2x.png"
                      width={40}
                      height={40}
                      alt="Angular"
                      className="rounded"
                    />
                    <span className="overlay__content overlay__content-transparent">
                      <span className="overlay__action d-flex flex-column text-center lh-1">
                        <small
                          className="h6 small text-white mb-0"
                          style={{ fontWeight: 500 }}
                        >
                          80%
                        </small>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="card-title">Swift</div>
                  <p className="flex text-50 lh-1 mb-0">
                    <small>18 courses</small>
                  </p>
                </div>
              </div>
            </div>
            <a
              href="_quiz.html"
              className="ml-4pt btn btn-sm btn-link text-secondary border-1 border-secondary"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
      
      <div
        className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 mb-16pt"
        data-toggle="popover"
        data-trigger="click"
        data-original-title=""
        title=""
        data-domfactory-upgraded="overlay">
        <div className="card-body d-flex flex-column">
          <div className="d-flex align-items-center">
            <div className="flex">
              <div className="d-flex align-items-center">
                <div className="rounded mr-12pt z-0 o-hidden">
                  <div className="overlay">
                    <img
                      src="../../public/images/paths/react_40x40@2x.png"
                      width={40}
                      height={40}
                      alt="Angular"
                      className="rounded"
                    />
                    <span className="overlay__content overlay__content-transparent">
                      <span className="overlay__action d-flex flex-column text-center lh-1">
                        <small
                          className="h6 small text-white mb-0"
                          style={{ fontWeight: 500 }}
                        >
                          80%
                        </small>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="card-title">React Native</div>
                  <p className="flex text-50 lh-1 mb-0">
                    <small>18 courses</small>
                  </p>
                </div>
              </div>
            </div>
            <a
              href="_quiz.html"
              className="ml-4pt btn btn-sm btn-link text-secondary"
            >
              Resume
            </a>
          </div>
        </div>
      </div> */}
   
    </div>
    <div className="col-lg-6">
      <div className="page-separator">
        <div className="page-separator__text">Courses</div>
      </div>



      <div className="position-relative carousel-card">
        <div
          className="js-mdk-carousel row d-block"
          id="carousel-courses1"
          data-interval={3000}
          style={{ overflow: "hidden" }}
          data-domfactory-upgraded="mdk-carousel">
          <a
            className="carousel-control-next js-mdk-carousel-control mt-n24pt"
            href="#carousel-courses1"
            role="button"
            data-slide="next"
            data-domfactory-upgraded="mdk-carousel-control"
          >
            <span
              className="carousel-control-icon material-icons"
              aria-hidden="true"
            >
              keyboard_arrow_right
            </span>
            <span className="sr-only">Next</span>
          </a>
          <div
            className="mdk-carousel__content"
            style={{ transitionDuration: "0ms", width: 936 }}
          >

{
        allCourses?.map((course, ind) => (
          <div
              className="col-12 col-sm-6 mdk-carousel__item"
              style={{ width: 234 }}
              key={ind}
              >
              <div
                className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal"
                data-partial-height={44}
                data-toggle="popover"
                data-trigger="click"
                data-original-title=""
                title=""
                data-domfactory-upgraded="mdk-reveal,overlay"
                style={{ height: 212 }}
              >
                <a
                  onClick={() => goToCourseDetails(course)}
                  className="js-image"
                  data-position="center"
                  data-height="auto"
                  data-domfactory-upgraded="image"
                  style={{
                    display: "block",
                    position: "relative",
                    overflow: "hidden",
                    backgroundImage: `url("${course.logo}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    height: 168
                  }}
                >
                  <img
                    src={course.logo}
                    alt="course"
                    style={{ visibility: "hidden" }}
                  />
                  <span className="overlay__content align-items-start justify-content-start">
                    <span className="overlay__action card-body d-flex align-items-center">
                      <i className="material-icons mr-4pt">
                        play_circle_outline
                      </i>
                      <span className="card-title text-white">Resume</span>
                    </span>
                  </span>
                </a>
                <span className="corner-ribbon corner-ribbon--default-right-top corner-ribbon--shadow bg-accent text-white">
                  NEW
                </span>
                <div className="mdk-reveal__content">
                  <div className="mdk-reveal__partial" style={{ height: 44 }} />
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="flex">
                        <a
                          className="card-title"
                          href="student-take-course.html"
                        >
                          {course.title}
                        </a>
                        <small className="text-50 font-weight-bold mb-4pt">
                          {course.creatingUserName}
                        </small>
                      </div>
                      <a
                        href="student-take-course.html"
                        data-toggle="tooltip"
                        data-title="Add Favorite"
                        data-placement="top"
                        data-boundary="window"
                        className="ml-4pt material-icons text-20 card-course__icon-favorite"
                        data-original-title=""
                        title=""
                      >
                        favorite_border
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
           
            </div>
        ))
      }

            
            
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="page-separator">
    <div className="page-separator__text">Discussions</div>
  </div>
  <div className="card">
    <div className="list-group list-group-flush">
      <div className="list-group-item p-3">
        <div className="row align-items-start">
          <div className="col-md-3 mb-8pt mb-md-0">
            <div className="media align-items-center">
              <div className="media-left mr-12pt">
                <a href="" className="avatar avatar-sm">
                  {/* <img src="../../LB" alt="avatar" class="avatar-img rounded-circle"> */}
                  <span className="avatar-title rounded-circle">LB</span>
                </a>
              </div>
              <div className="d-flex flex-column media-body media-middle">
                <a href="" className="card-title">
                  Laza Bogdan
                </a>
                <small className="text-muted">2 days ago</small>
              </div>
            </div>
          </div>
          <div className="col mb-8pt mb-md-0">
            <p className="mb-8pt">
              <a href="discussion.html" className="text-body">
                <strong>
                  Using Angular HttpClientModule instead of HttpModule
                </strong>
              </a>
            </p>
            <a href="discussion.html" className="chip chip-outline-secondary">
              Angular fundamentals
            </a>
          </div>
          <div className="col-auto d-flex flex-column align-items-center justify-content-center">
            <h5 className="m-0">1</h5>
            <p className="lh-1 mb-0">
              <small className="text-70">answers</small>
            </p>
          </div>
        </div>
      </div>
      <div className="list-group-item p-3">
        <div className="row align-items-start">
          <div className="col-md-3 mb-8pt mb-md-0">
            <div className="media align-items-center">
              <div className="media-left mr-12pt">
                <a href="" className="avatar avatar-sm">
                  {/* <img src="../../AC" alt="avatar" class="avatar-img rounded-circle"> */}
                  <span className="avatar-title rounded-circle">AC</span>
                </a>
              </div>
              <div className="d-flex flex-column media-body media-middle">
                <a href="" className="card-title">
                  Adam Curtis
                </a>
                <small className="text-muted">3 days ago</small>
              </div>
            </div>
          </div>
          <div className="col mb-8pt mb-md-0">
            <p className="mb-0">
              <a href="discussion.html" className="text-body">
                <strong>
                  Why am I getting an error when trying to install
                  angular/http@2.4.2
                </strong>
              </a>
            </p>
          </div>
          <div className="col-auto d-flex flex-column align-items-center justify-content-center">
            <h5 className="m-0">1</h5>
            <p className="lh-1 mb-0">
              <small className="text-70">answers</small>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="card-footer p-8pt">
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
      {/* <ul class="pagination justify-content-center pagination-sm">
    <li class="page-item disabled">
    <a class="page-link" href="#" aria-label="Previous">
<span aria-hidden="true" class="material-icons">chevron_left</span>
<span>Prev</span>
    </a>
    </li>
    <li class="page-item active">
    <a class="page-link" href="#" aria-label="1">
<span>1</span>
    </a>
    </li>
    <li class="page-item">
    <a class="page-link" href="#" aria-label="1">
<span>2</span>
    </a>
    </li>
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Next">
<span>Next</span>
<span aria-hidden="true" class="material-icons">chevron_right</span>
    </a>
    </li>
    </ul> */}
    </div>
  </div>
  <div className="page-separator">
    <div className="page-separator__text">Quizzes</div>
  </div>
  <div className="row card-group-row">
    <div className="card-group-row__col col-md-6">
      <div className="card card-group-row__card card-sm">
        <div className="card-body d-flex align-items-center">
          <a
            href="student-take-_quiz.html"
            className="avatar overlay overlay--primary avatar-4by3 mr-12pt"
          >
            <img
              src="../../public/images/paths/typescript_200x168.png"
              alt="Introduction to TypeScript"
              className="avatar-img rounded"
            />
            <span className="overlay__content" />
          </a>
          <div className="flex mr-12pt">
            <a className="card-title" href="student-take-_quiz.html">
              Introduction to TypeScript
            </a>
            <div className="card-subtitle text-50">3 days ago</div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <span className="lead text-headings lh-1">2.8</span>
            <small className="text-50 text-uppercase text-headings">
              Score
            </small>
          </div>
        </div>
        <div className="progress rounded-0" style={{ height: 4 }}>
          <div
            className="progress-bar bg-primary"
            role="progressbar"
            style={{ width: "37%" }}
            aria-valuenow={37}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <div className="card-footer">
          <div className="d-flex align-items-center">
            <div className="flex mr-2">
              <a
                href="student-take-_quiz.html"
                className="btn btn-light btn-sm"
              >
                <i className="material-icons icon--left">refresh</i> Continue
              </a>
            </div>
            <div className="dropdown">
              <a
                href="#"
                data-toggle="dropdown"
                data-caret="false"
                className="text-muted"
              >
                <i className="material-icons">more_horiz</i>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href="student-take-_quiz.html" className="dropdown-item">
                  Continue
                </a>
                <a
                  href="student-quiz-result-details.html"
                  className="dropdown-item"
                >
                  View Result
                </a>
                <div className="dropdown-divider" />
                <a
                  href="student-take-_quiz.html"
                  className="dropdown-item text-danger"
                >
                  Reset Quiz
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card-group-row__col col-md-6">
      <div className="card card-group-row__card card-sm">
        <div className="card-body d-flex align-items-center">
          <a
            href="student-take-_quiz.html"
            className="avatar overlay overlay--primary avatar-4by3 mr-12pt"
          >
            <img
              src="../../public/images/paths/angular_200x168.png"
              alt="Angular Fundamentals"
              className="avatar-img rounded"
            />
            <span className="overlay__content" />
          </a>
          <div className="flex mr-12pt">
            <a className="card-title" href="student-take-_quiz.html">
              Angular Fundamentals
            </a>
            <div className="card-subtitle text-50">3 days ago</div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <span className="lead text-headings lh-1">3.3</span>
            <small className="text-50 text-uppercase text-headings">
              Score
            </small>
          </div>
        </div>
        <div className="card-footer">
          <div className="d-flex align-items-center">
            <div className="flex mr-2">
              <a
                href="student-take-_quiz.html"
                className="btn btn-light btn-sm"
              >
                <i className="material-icons icon--left">playlist_add_check</i>{" "}
                Reset
                <span className="badge badge-dark badge-notifications ml-2">
                  5
                </span>
              </a>
            </div>
            <div className="dropdown">
              <a
                href="#"
                data-toggle="dropdown"
                data-caret="false"
                className="text-muted"
              >
                <i className="material-icons">more_horiz</i>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href="student-take-_quiz.html" className="dropdown-item">
                  Continue
                </a>
                <a
                  href="student-quiz-result-details.html"
                  className="dropdown-item"
                >
                  View Result
                </a>
                <div className="dropdown-divider" />
                <a
                  href="student-take-_quiz.html"
                  className="dropdown-item text-danger"
                >
                  Reset Quiz
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    {/* <ul class="pagination justify-content-center pagination-sm">
    <li class="page-item disabled">
    <a class="page-link" href="#" aria-label="Previous">
<span aria-hidden="true" class="material-icons">chevron_left</span>
<span>Prev</span>
    </a>
    </li>
    <li class="page-item active">
    <a class="page-link" href="#" aria-label="1">
<span>1</span>
    </a>
    </li>
    <li class="page-item">
    <a class="page-link" href="#" aria-label="1">
<span>2</span>
    </a>
    </li>
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Next">
<span>Next</span>
<span aria-hidden="true" class="material-icons">chevron_right</span>
    </a>
    </li>
    </ul> */}
  </div>



{/* End mase code  */}
    </div>

  </div>





  {/* // END Page Content */}
</>

  
  )
}
