import Image from 'next/image'
import styles from './page.module.css'

export default function QuizResult() {
  return (
<>


    {/* BEFORE Page Content */}
    {/* // END BEFORE Page Content */}
    {/* Page Content */}
    <div
      className="navbar navbar-list navbar-light bg-white border-bottom-2 border-bottom navbar-expand-sm"
      style={{ whiteSpace: "nowrap" }}
    >
      <div className="container page__container">
        <nav className="nav navbar-nav">
          <div className="nav-item navbar-list__item">
            <a href="student-take-course.html" className="nav-link h-auto">
              <i className="material-icons icon--left">keyboard_backspace</i>{" "}
              Back to Course
            </a>
          </div>
          <div className="nav-item navbar-list__item">
            <div className="d-flex align-items-center flex-nowrap">
              <div className="mr-16pt">
                <a href="student-take-course.html">
                  <img
                    src="../../public/images/paths/angular_64x64.png"
                    width={40}
                    alt="Angular"
                    className="rounded"
                  />
                </a>
              </div>
              <div className="flex">
                <a
                  href="student-take-course.html"
                  className="card-title text-body mb-0"
                >
                  Angular Fundamentals
                </a>
                <p className="lh-1 d-flex align-items-center mb-0">
                  <span className="text-50 small font-weight-bold mr-8pt">
                    Elijah Murray
                  </span>
                  <span className="text-50 small">
                    Software Engineer and Developer
                  </span>
                </p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div
      className="mdk-box bg-primary mdk-box--bg-gradient-primary2 js-mdk-box mb-0"
      data-effects="blend-background"
      data-domfactory-upgraded="mdk-box"
    >
      <div className="mdk-box__bg">
        <div
          className="mdk-box__bg-front"
          style={{
            transform: "translateZ(0px)",
            willChange: "opacity",
            opacity: 1
          }}
        />
        <div
          className="mdk-box__bg-rear"
          style={{
            transform: "translateZ(0px)",
            willChange: "opacity",
            opacity: 0
          }}
        />
      </div>
      <div className="mdk-box__content">
        <div className="py-64pt text-center text-sm-left">
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <p className="lead text-white-50 measure-lead-max mb-0">
              Submited on 02 Jan 2019
            </p>
            <h1 className="text-white mb-24pt">Your Score: 350</h1>
            <a href="student-take-quiz.html" className="btn btn-outline-white">
              Restart quiz
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="navbar navbar-expand-sm navbar-light navbar-submenu navbar-list p-0 m-0 align-items-center">
      <div className="container page__container">
        <ul className="nav navbar-nav flex align-items-sm-center">
          <li className="nav-item navbar-list__item">350/450 Score</li>
          <li className="nav-item navbar-list__item">
            <i className="material-icons text-muted icon--left">schedule</i>
            12 minutes
          </li>
          <li className="nav-item navbar-list__item">
            <i className="material-icons text-muted icon--left">assessment</i>
            Intermediate
          </li>
        </ul>
      </div>
    </div>
    <div className="container page__container">
      <div className="border-left-2 page-section pl-32pt">
        <div className="d-flex align-items-center page-num-container mb-16pt">
          <div className="page-num">2</div>
          <h4>Question 2 of 5</h4>
        </div>
        <p className="text-70 measure-lead mb-32pt mb-lg-48pt">
          An angular 2 project written in typescript is* transpiled to
          javascript duri*ng the build process. Which of the following
          additional features are provided to the developer while programming on
          typescript over javascript?
        </p>
        <ul className="list-quiz">
          <li className="list-quiz-item">
            <span className="list-quiz-badge">A</span>
            <span className="list-quiz-text">
              Ability to use newer syntax and offers reliability
            </span>
          </li>
          <li className="list-quiz-item active">
            <span className="list-quiz-badge bg-primary text-white">
              <i className="material-icons">check</i>
            </span>
            <span className="list-quiz-text">Compatibility</span>
          </li>
          <li className="list-quiz-item">
            <span className="list-quiz-badge">C</span>
            <span className="list-quiz-text">Usage of missing features</span>
          </li>
        </ul>
      </div>
    </div>
    {/* // END Page Content */}
   
</>
  )
}
