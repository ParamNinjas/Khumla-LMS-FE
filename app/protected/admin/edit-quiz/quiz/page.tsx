"use client"
import { IChoice, IQuiz } from '@/app/interfaces/quiz'
import { Api } from '@/app/lib/restapi/endpoints';
import React, { useEffect, useState } from 'react'

function  Page() {

  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [quiz, setQuiz] = useState<IQuiz>()
  const [questionsLength, setQuestionsLength] = useState<number>(0)

  const nextQuestion = () => {
    if (questionNumber < questionsLength) {
      setQuestionNumber(questionNumber + 1);
    }
  }

  async function getAllQuizzes() {
    try {
      const getQuizzes = await Api.GET_AllQuizzes();
  
      if (getQuizzes && getQuizzes.length > 0) {
        const mappedQuizzes = getQuizzes.map((quiz: any) => quiz.data);

        const quizByVideoId = mappedQuizzes.filter((quiz:IQuiz) => quiz.videoId === "0d5f06ac-4431-452c-bc8f-cf8df3d954bc")[0]//videoId here
        setQuiz(quizByVideoId)
        setQuestionsLength(quizByVideoId?.questions?.length)
      } else {
        console.log("No quizzes found");
      }
    } catch (error) {
      console.error("Error fetching quizzes:", error);
    }
  }
  
  useEffect(() => {
    getAllQuizzes();
  },[])



  return (
    <div>
    <div className="mdk-drawer-layout js-mdk-drawer-layout" data-push data-responsive-width="992px">
      <div className="mdk-drawer-layout__content page-content">

        <div className="navbar navbar-list navbar-light bg-white border-bottom-2 border-bottom navbar-expand-sm" style={{whiteSpace: 'nowrap'}}>
          <div className="container page__container">
            <nav className="nav navbar-nav">
              <div className="nav-item navbar-list__item">
                <a href="student-take-course.html" className="nav-link h-auto"><i className="material-icons icon--left">keyboard_backspace</i> Back to Course</a>
              </div>
              <div className="nav-item navbar-list__item">
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="mr-16pt">
                    <a href="student-take-course.html"><img src="../../public/images/paths/angular_64x64.png" width={40} alt="Angular" className="rounded" /></a>
                  </div>
                  <div className="flex">
                    <a href="student-take-course.html" className="card-title text-body mb-0">Angular Fundamentals</a>
                    <p className="lh-1 d-flex align-items-center mb-0">
                      <span className="text-50 small font-weight-bold mr-8pt">Elijah Murray</span>
                      <span className="text-50 small">Software Engineer and Developer</span>
                    </p>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="bg-primary pb-lg-64pt py-32pt">
          <div className="container page__container">
            <nav className="course-nav">
              <a href="student-take-lesson.html" data-toggle="tooltip" data-placement="bottom" data-title="Getting Started with Angular: Introduction" data-original-title ><span className="material-icons">check_circle</span></a>
              <a data-toggle="tooltip" data-placement="bottom" data-title="Getting Started with Angular: Introduction to TypeScript" href="student-take-lesson.html" data-original-title ><span className="material-icons">check_circle</span></a>
              <a data-toggle="tooltip" data-placement="bottom" data-title="Getting Started with Angular: Comparing Angular to AngularJS" href="student-take-lesson.html" data-original-title ><span className="material-icons">check_circle</span></a>
              <a href="student-take-quiz.html" data-toggle="tooltip" data-placement="bottom" data-title="Quiz: Getting Started with Angular" data-original-title ><span className="material-icons text-primary">account_circle</span></a>
            </nav>
            <div className="d-flex flex-wrap align-items-end justify-content-end mb-16pt">
              <h1 className="text-white flex m-0">Question {questionNumber} of {questionsLength}</h1>
              <p className="h1 text-white-50 font-weight-light m-0">00:14</p>
            </div>
            <p className="hero__lead measure-hero-lead text-white-50">{quiz?.questions[questionNumber - 1]?.questionDescription}</p>
          </div>
        </div>
        <div className="navbar navbar-expand-md navbar-list navbar-light bg-white border-bottom-2 " style={{whiteSpace: 'nowrap'}}>
          <div className="container page__container">
            <ul className="nav navbar-nav flex navbar-list__item">
              <li className="nav-item">
                <i className="material-icons text-50 mr-8pt">tune</i>
                Choose the correct answer below:
              </li>
            </ul>
            <div className="nav navbar-nav ml-sm-auto navbar-list__item">
              <div className="nav-item d-flex flex-column flex-sm-row ml-sm-16pt">
                <a className="btn justify-content-center btn-outline-secondary w-100 w-sm-auto mb-16pt mb-sm-0">Skip Quiz</a>
                <a  className="btn justify-content-center btn-outline-secondary w-100 w-sm-auto mb-16pt mb-sm-0 ml-sm-16pt">Review Video</a>
                <a onClick={nextQuestion} className="btn justify-content-center btn-accent w-100 w-sm-auto mb-16pt mb-sm-0 ml-sm-16pt">Next Question <i className="material-icons icon--right">keyboard_arrow_right</i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="container page__container">
          <div className="page-section">
            <div className="page-separator">
              <div className="page-separator__text">Your Answer</div>
            </div>
              {quiz?.questions[questionNumber - 1]?.choices.map((choice:IChoice) =>   <div className="form-group mb-32pt mb-lg-48pt">
              <div className="custom-control custom-checkbox">
                <input id="customCheck03" type="checkbox" className="custom-control-input" />
                <label htmlFor="customCheck03" className="custom-control-label">{choice?.choiceDescription}</label>
              </div>
            </div>)}
          
            <p className="text-50 mb-0">Note: There can be multiple correct answers to this question.</p>
          </div>
        </div>
        <div className="js-fix-footer footer border-top-2">
          <div className="container-fluid page__container page-section d-flex flex-column">
            <p className="text-70 brand mb-24pt">
              <img className="brand-icon" src="assets/images/logo/black-70@2x.png" width={30} alt="Khumla" /> Khumla
            </p>
            <p className="measure-lead-max text-muted mb-0 small">Khumla is a beautifully crafted user interface for modern Business Admin Web Applications, with examples for many pages needed for Customer Relationship Management, Enterprise Resource Planning, Khumlan Resources, Content Management System, Project Management, Tasks, eCommerce, Messaging and Account Management.</p>
          </div>
          <div className="pb-16pt pb-lg-24pt">
            <div className="container-fluid page__container">
              <div className="bg-dark rounded page-section py-lg-32pt px-16pt px-lg-24pt">
                <div className="row">
                  <div className="col-md-2 col-sm-4 mb-24pt mb-md-0">
                    <p className="text-white-70 mb-8pt"><strong>Follow us</strong></p>
                    <nav className="nav nav-links nav--flush">
                      <a href="#" className="nav-link mr-8pt"><img src="assets/images/icon/footer/facebook-square@2x.png" width={24} height={24} alt="Facebook" /></a>
                      <a href="#" className="nav-link mr-8pt"><img src="assets/images/icon/footer/twitter-square@2x.png" width={24} height={24} alt="Twitter" /></a>
                      <a href="#" className="nav-link mr-8pt"><img src="assets/images/icon/footer/vimeo-square@2x.png" width={24} height={24} alt="Vimeo" /></a>
                      {/* <a href="#" class="nav-link"><img src="assets/images/icon/footer/youtube-square@2x.png" width="24" height="24" alt="YouTube"></a> */}
                    </nav>
                  </div>
                  <div className="col-md-6 col-sm-4 mb-24pt mb-md-0 d-flex align-items-center">
                    <a className="btn btn-outline-white">English <span className="icon--right material-icons">arrow_drop_down</span></a>
                  </div>
                  <div className="col-md-4 text-md-right">
                    <p className="mb-8pt d-flex align-items-md-center justify-content-md-end">
                      <a  className="text-white-70 text-underline mr-16pt">Terms</a>
                      <a className="text-white-70 text-underline">Privacy policy</a>
                    </p>
                    <p className="text-white-50 small mb-0">Copyright 2019 © All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // END drawer-layout__content */}
      {/* drawer */}
      <div className="mdk-drawer js-mdk-drawer" id="default-drawer">
        <div className="mdk-drawer__content">
          <div className="sidebar sidebar-dark sidebar-left" data-perfect-scrollbar>
            {/* Navbar toggler */}
            <a href="compact-analytics.html" className="navbar-toggler navbar-toggler-right navbar-toggler-custom d-flex align-items-center justify-content-center position-absolute right-0 top-0" data-toggle="tooltip" data-title="Switch to Compact Vertical Layout" data-placement="right" data-boundary="window">
              <span className="material-icons">sync_alt</span>
            </a>
            <a href="index.html" className="sidebar-brand ">
              <img className="sidebar-brand-icon" src="assets/images/logo/accent-teal-100@2x.png" alt="Khumla" />
              <span>Khumla</span>
            </a>
            <div className="sidebar-account mx-16pt mb-16pt dropdown">
              <a href="#" className="nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown" data-caret="false">
                <img width={32} height={32} className="rounded-circle mr-8pt" src="assets/images/people/50/guy-3.jpg" alt="account" />
                <span className="flex d-flex flex-column mr-8pt">
                  <span className="text-black-100">Laza Bogdan</span>
                  <small className="text-black-50">Administrator</small>
                </span>
                <i className="material-icons text-black-20 icon-16pt">keyboard_arrow_down</i>
              </a>
              <div className="dropdown-menu dropdown-menu-full dropdown-menu-caret-center">
                <div className="dropdown-header"><strong>Account</strong></div>
                <a className="dropdown-item" href="edit-account.html">Edit Account</a>
                <a className="dropdown-item" href="billing.html">Billing</a>
                <a className="dropdown-item" href="billing-history.html">Payments</a>
                <a className="dropdown-item" href="login.html">Logout</a>
                <div className="dropdown-divider" />
                <div className="dropdown-header"><strong>Select company</strong></div>
                <a  className="dropdown-item active d-flex align-items-center">
                  <div className="avatar avatar-sm mr-8pt">
                    <span className="avatar-title rounded bg-primary">FM</span>
                  </div>
                  <small className="ml-4pt flex">
                    <span className="d-flex flex-column">
                      <strong className="text-black-100">FrontendMatter Inc.</strong>
                      <span className="text-black-50">Administrator</span>
                    </span>
                  </small>
                </a>
                <a className="dropdown-item d-flex align-items-center">
                  <div className="avatar avatar-sm mr-8pt">
                    <span className="avatar-title rounded bg-accent">HH</span>
                  </div>
                  <small className="ml-4pt flex">
                    <span className="d-flex flex-column">
                      <strong className="text-black-100">Khumla Inc.</strong>
                      <span className="text-black-50">Publisher</span>
                    </span>
                  </small>
                </a>
              </div>
            </div>
            <form action="index.html" className="search-form flex-shrink-0 search-form--black sidebar-m-b sidebar-p-l mx-16pt pr-0">
              <input type="text" className="form-control pl-0" placeholder="Search" />
              <button className="btn" type="submit"><i className="material-icons">search</i></button>
            </form>
            <div className="sidebar-heading">Overview</div>
            <ul className="sidebar-menu">
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="_courses.html">
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">insert_chart_outlined</span>
                  <span className="sidebar-menu-text">Dashboard</span>
                </a>
              </li>
            </ul>
            <div className="sidebar-heading">Courses</div>
            <ul className="sidebar-menu">
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button js-sidebar-collapse" data-toggle="collapse" href="#enterprise_menu">
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">donut_large</span>
                  Courses
                  <span className="ml-auto sidebar-menu-toggle-icon" />
                </a>
                <ul className="sidebar-submenu collapse sm-indent" id="enterprise_menu">
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="_courses.html">
                      <span className="sidebar-menu-text">My courses</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="_manage-quiz.html">
                      <span className="sidebar-menu-text">My quizes</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul> 
          </div>
        </div>
      </div>
      {/* // END drawer */}
    </div>
    {/* // END drawer-layout */}
    {/* App Settings FAB */}
    {/* <div id="app-settings">
      <app-settings layout-active="app" :layout-location="{
  'compact': 'compact-analytics.html',
  'mini': 'mini-analytics.html',
  'app': 'analytics.html',
  'boxed': 'boxed-analytics.html',
  'sticky': 'sticky-analytics.html',
  'default': 'fixed-analytics.html'
}" sidebar-type="light" sidebar-variant="bg-body" />
    </div> */}
    {/* jQuery */}
    {/* Bootstrap */}
    {/* Perfect Scrollbar */}
    {/* DOM Factory */}
    {/* MDK */}
    {/* App JS */}
    {/* Highlight.js */}
    {/* Global Settings */}
    {/* Moment.js */}
    {/* Chart.js */}
    {/* Chart.js Samples */}
    {/* List.js */}
    {/* Tables */}
    {/* App Settings (safe to remove) */}
  </div>
  )
}

export default Page
