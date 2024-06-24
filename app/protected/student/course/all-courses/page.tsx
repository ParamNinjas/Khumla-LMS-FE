"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react';
import Cookies from 'universal-cookie';
import { Api } from '@/app/lib/restapi/endpoints';
import { ICourse, IStudentCourses } from '@/app/interfaces/courses';
import {useEffect} from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCourseForEdit } from '@/app/redux/courseSlice';
import { updateQuizzes } from '@/app/redux/quizSlice';
import { IQuiz } from '@/app/interfaces/quiz';
const cookies = new Cookies();


export default function AllCourses() {
  const dispatch = useDispatch();
   const [allCourses, setCourses] = useState<ICourse[]>([]); 
   const [enrolledCourses, setEnrolledCourses] = useState<ICourse[]>([]); 
   const [studentEnrolledCourses, setStudentEnrolledCourses] = useState<IStudentCourses[]>([]);

   const goToCourseDetails=(course:ICourse)=>{
    
   
    dispatch(setSelectedCourseForEdit(course));
    window.location.href = '/protected/student/course/course-detail'; 
   }


const loggedInUser = cookies.get("param-lms-user");
console.log("User",loggedInUser)
   
   async function getAllQuizzes() {
    try {
      const getQuizzes = await Api.GET_AllQuizzes();
  
      if (getQuizzes && getQuizzes.length > 0) {
        const mappedQuizzes = getQuizzes.map((quiz: any) => quiz.data);
        console.log("Quizzes",mappedQuizzes)
        localStorage.setItem("student-quizzes", JSON.stringify(mappedQuizzes));
    
      } else {
        console.log("No quizzes found");
      }
    } catch (error) {
      console.error("Error fetching quizzes:", error);
    }
  }

      
  async function getMarks () {
    const getMarks = await Api.GET_AllStudentMarks();
    const mappedMarks = getMarks.map((quiz: any) => quiz.data);
    localStorage.setItem("student-marks", JSON.stringify(mappedMarks));

  }
  
  

  
useEffect(() => {
   getStudentCourses();
   getAllQuizzes()
   getMarks()
  }, []);


  const getEnrolled = () => {

  }

  console.log("courses",allCourses);
  console.log("enrolledCourses",enrolledCourses);

  async function getStudentCourses() {
    try {
      var student =cookies.get('param-lms-user');
      console.log("Id ", student.id)
      const course = await Api.GET_StudentCoursesById(student.id);
      //const enrolled = await Api.GET_EnrolledCoursesByStudentId(student.id)
      console.log("Student-Courses",course);

      const getReactCourse = course.data?.allCourses.filter(c => c.id === "65e5d75f6944453739f276c3")!
      console.log(getReactCourse)
        setCourses(course?.data?.allCourses!);
        setEnrolledCourses(course.data!.enrolledCourses);
        //setStudentEnrolledCourses(enrolled)
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
      <div
        className="d-flex flex-column flex-sm-row align-items-sm-center mb-24pt"
        style={{ whiteSpace: "nowrap" }}
      >
        <small className="flex text-muted text-headings text-uppercase mr-3 mb-2 mb-sm-0">
          Displaying 4 out of 10 courses
        </small>
        <div className="w-auto ml-sm-auto table d-flex align-items-center mb-2 mb-sm-0">
          <small className="text-muted text-headings text-uppercase mr-3 d-none d-sm-block">
            Sort by
          </small>
          <a href="#" className="sort desc small text-headings text-uppercase">
            Newest
          </a>
          <a href="#" className="sort small text-headings text-uppercase ml-2">
            Popularity
          </a>
        </div>
        <a
          href="#"
          data-target="#library-drawer"
          data-toggle="sidebar"
          className="btn btn-sm btn-white ml-sm-16pt"
        >
          <i className="material-icons icon--left">tune</i> Filters
        </a>
      </div>
      <div className="page-separator">
        <div className="page-separator__text">Enrolled Courses</div>
      </div>
      <div className="row card-group-row">
       
        {
          enrolledCourses.map((course)=>(
            <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col" style={{cursor:'pointer'}}> 
            <div
              className="card card-sm card--elevated p-relative o-hidden js-overlay mdk-reveal js-mdk-reveal card-group-row__card"
              data-overlay-onload-show=""
              data-popover-onload-show=""
              data-force-reveal=""
              data-partial-height={44}
              data-toggle="popover"
              data-trigger="click"
            >
              <a className="js-image" data-position="" onClick={() => goToCourseDetails(course)}>
                <img
                  src ={course.logo} style={{"width":"100%","height": "200px","margin": "auto 0"}}
                  alt="course"
                />
                <span className="overlay__content align-items-start justify-content-start">
                  <span className="overlay__action card-body d-flex align-items-center">
                    <i className="material-icons mr-4pt">play_circle_outline</i>
                    <span className="card-title text-white">Preview</span>
                  </span>
                </span>
              </a>
              <div className="mdk-reveal__content">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="flex">
                      <a className="card-title" onClick={() => goToCourseDetails(course)}>
                       {course.title}
                      </a>
                      <p>
                      <small className="text-50 font-weight-bold mb-4pt">
                        {course.creatingUserName}
                      </small>
                      </p>
                     
                    </div>
                    <a
                      onClick={() => goToCourseDetails(course)}
                      data-toggle="tooltip"
                      data-title="Remove Favorite"
                      data-placement="top"
                      data-boundary="window"
                      className="ml-4pt material-icons text-20 card-course__icon-favorite"
                    >
                      favorite
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
                  <p className="lh-1 mb-0">
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
                  <a href="student-course.html" className="btn btn-primary">
                    Watch trailer
                  </a>
                </div>
              </div>
            </div>
          </div>
          )
          )
        }
         
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
        <div className="page-separator__text">All Courses</div>
      </div>
      <div className="row card-group-row">
       {
        allCourses.map((course) => 
             (
                
            <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
          <div
            className="card card-sm card--elevated p-relative o-hidden js-overlay card-group-row__card"
            data-toggle="popover"
            data-trigger="click"
          >
            <a
              onClick={() => goToCourseDetails(course)}
              className="card-img-top js-image"
              data-position=""
              data-height={100}
            >
              {/* <Image
                src={course.logo}
                alt="course",
                width="100%"
              /> */}
              <img src ={course.logo} className='courseLogo' style={{"width":"100%","height": "200px","margin": "auto 0"}} />
              <span className="overlay__content">
                <span className="overlay__action d-flex flex-column text-center">
                  <i className="material-icons icon-32pt">
                    play_circle_outline
                  </i>
                  <span className="card-title text-white">Preview</span>
                </span>
              </span>
            </a>
            <div className="card-body flex">
              <div className="d-flex">
                <div className="flex">
                  <a className="card-title" onClick={() => goToCourseDetails(course)}>
                    {course.title}
                  </a><br/>
                  <small className="text-50 font-weight-bold mb-4pt">
                    {course.creatingUserName}
                  </small>
                </div>
                <a
                  onClick={() => goToCourseDetails(course)}
                  data-toggle="tooltip"
                  data-title="Add Favorite"
                  data-placement="top"
                  data-boundary="window"
                  className="ml-4pt material-icons text-20 card-course__icon-favorite"
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
                {/* <small class="text-50">6 hours</small> */}
              </div>
            </div>
            <div className="card-footer">
              <div className="row justify-content-between">
                <div className="col-auto d-flex align-items-center">
                  <span className="material-icons icon-16pt text-50 mr-4pt">
                    access_time
                  </span>
                  <p className="flex text-50 lh-1 mb-0">
                    <small>6 hours</small>
                  </p>
                </div>
                <div className="col-auto d-flex align-items-center">
                  <span className="material-icons icon-16pt text-50 mr-4pt">
                    play_circle_outline
                  </span>
                  <p className="flex text-50 lh-1 mb-0">
                    <small>{`${course.sections.length > 1 ? course.sections.length.toString()+" sections":course.sections.length.toString()+" section"}`}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="popoverContainer d-none">
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
                <p className="lh-1 mb-0">
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
                <a href="student-course.html" className="btn btn-primary">
                  Watch trailer
                </a>
              </div>
            </div>
          </div>
            </div>
            )
        )
       }
 
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
    
   
    </div>
  </div>
  {/* // END Page Content */}
</>

  
  )
}