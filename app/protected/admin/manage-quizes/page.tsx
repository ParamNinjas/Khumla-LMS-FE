import Image from 'next/image'
import styles from './page.module.css'

export default function ManageQuizes() {
  return (
<div
  className="mdk-drawer-layout js-mdk-drawer-layout"
  data-push=""
  data-responsive-width="992px"
  data-domfactory-upgraded="mdk-drawer-layout"
>
  <div
    className="mdk-drawer-layout__content page-content"
    style={{ transform: "translate3d(0px, 0px, 0px)" }}
  >
    {/* Header */}
    {/* Navbar */}
    <div
      className="navbar navbar-expand pr-0 navbar-light border-bottom-2"
      id="default-navbar"
      data-primary=""
    >
      {/* Navbar Toggler */}
      <button
        className="navbar-toggler w-auto mr-16pt d-block d-lg-none rounded-0"
        type="button"
        data-toggle="sidebar"
      >
        <span className="material-icons">short_text</span>
      </button>
      {/* // END Navbar Toggler */}
      {/* Navbar Brand */}
      <a href="index.html" className="navbar-brand mr-16pt d-lg-none">
        <span className="avatar avatar-sm navbar-brand-icon mr-0 mr-lg-8pt">
          <span className="avatar-title rounded bg-primary">
            <img
              src="../../public/images/illustration/student/128/white.svg"
              alt="logo"
              className="img-fluid"
            />
          </span>
        </span>
        <span className="d-none d-lg-block">Luma</span>
      </a>
      {/* // END Navbar Brand */}
      {/* Navbar Search */}
      <form
        className="search-form navbar-search d-none d-md-flex mr-16pt"
        action="index.html"
      >
        <button className="btn" type="submit">
          <i className="material-icons">search</i>
        </button>
        <input type="text" className="form-control" placeholder="Search ..." />
      </form>
      {/* // END Navbar Search */}
      <div className="flex" />
      {/* Navbar Menu */}
      <div className="nav navbar-nav flex-nowrap d-flex mr-16pt">
        {/* Notifications dropdown */}
        <div
          className="nav-item dropdown dropdown-notifications dropdown-xs-down-full"
          data-toggle="tooltip"
          data-title="Messages"
          data-placement="bottom"
          data-boundary="window"
          data-original-title=""
          title=""
        >
          <button
            className="nav-link btn-flush dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            data-caret="false"
          >
            <i className="material-icons icon-24pt">mail_outline</i>
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <div data-perfect-scrollbar="" className="position-relative ps">
              <div className="dropdown-header">
                <strong>Messages</strong>
              </div>
              <div className="list-group list-group-flush mb-0">
                <a
                  href="javascript:void(0);"
                  className="list-group-item list-group-item-action unread"
                >
                  <span className="d-flex align-items-center mb-1">
                    <small className="text-black-50">5 minutes ago</small>
                    <span className="ml-auto unread-indicator bg-accent" />
                  </span>
                  <span className="d-flex">
                    <span className="avatar avatar-xs mr-2">
                      <img
                        src="../../public/images/people/110/woman-5.jpg"
                        alt="people"
                        className="avatar-img rounded-circle"
                      />
                    </span>
                    <span className="flex d-flex flex-column">
                      <strong className="text-black-100">Michelle</strong>
                      <span className="text-black-70">
                        Clients loved the new design.
                      </span>
                    </span>
                  </span>
                </a>
                <a
                  href="javascript:void(0);"
                  className="list-group-item list-group-item-action"
                >
                  <span className="d-flex align-items-center mb-1">
                    <small className="text-black-50">5 minutes ago</small>
                  </span>
                  <span className="d-flex">
                    <span className="avatar avatar-xs mr-2">
                      <img
                        src="../../public/images/people/110/woman-5.jpg"
                        alt="people"
                        className="avatar-img rounded-circle"
                      />
                    </span>
                    <span className="flex d-flex flex-column">
                      <strong className="text-black-100">Michelle</strong>
                      <span className="text-black-70">🔥 Superb job..</span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                <div
                  className="ps__thumb-x"
                  tabIndex={0}
                  style={{ left: 0, width: 0 }}
                />
              </div>
              <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                <div
                  className="ps__thumb-y"
                  tabIndex={0}
                  style={{ top: 0, height: 0 }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* // END Notifications dropdown */}
        {/* Notifications dropdown */}
        <div
          className="nav-item ml-16pt dropdown dropdown-notifications dropdown-xs-down-full"
          data-toggle="tooltip"
          data-title="Notifications"
          data-placement="bottom"
          data-boundary="window"
          data-original-title=""
          title=""
        >
          <button
            className="nav-link btn-flush dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            data-caret="false"
          >
            <i className="material-icons">notifications_none</i>
            <span className="badge badge-notifications badge-accent">2</span>
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <div data-perfect-scrollbar="" className="position-relative ps">
              <div className="dropdown-header">
                <strong>System notifications</strong>
              </div>
              <div className="list-group list-group-flush mb-0">
                <a
                  href="javascript:void(0);"
                  className="list-group-item list-group-item-action unread"
                >
                  <span className="d-flex align-items-center mb-1">
                    <small className="text-black-50">3 minutes ago</small>
                    <span className="ml-auto unread-indicator bg-accent" />
                  </span>
                  <span className="d-flex">
                    <span className="avatar avatar-xs mr-2">
                      <span className="avatar-title rounded-circle bg-light">
                        <i className="material-icons font-size-16pt text-accent">
                          account_circle
                        </i>
                      </span>
                    </span>
                    <span className="flex d-flex flex-column">
                      <span className="text-black-70">
                        Your profile information has not been synced correctly.
                      </span>
                    </span>
                  </span>
                </a>
                <a
                  href="javascript:void(0);"
                  className="list-group-item list-group-item-action"
                >
                  <span className="d-flex align-items-center mb-1">
                    <small className="text-black-50">5 hours ago</small>
                  </span>
                  <span className="d-flex">
                    <span className="avatar avatar-xs mr-2">
                      <span className="avatar-title rounded-circle bg-light">
                        <i className="material-icons font-size-16pt text-primary">
                          group_add
                        </i>
                      </span>
                    </span>
                    <span className="flex d-flex flex-column">
                      <strong className="text-black-100">Adrian. D</strong>
                      <span className="text-black-70">
                        Wants to join your private group.
                      </span>
                    </span>
                  </span>
                </a>
                <a
                  href="javascript:void(0);"
                  className="list-group-item list-group-item-action"
                >
                  <span className="d-flex align-items-center mb-1">
                    <small className="text-black-50">1 day ago</small>
                  </span>
                  <span className="d-flex">
                    <span className="avatar avatar-xs mr-2">
                      <span className="avatar-title rounded-circle bg-light">
                        <i className="material-icons font-size-16pt text-warning">
                          storage
                        </i>
                      </span>
                    </span>
                    <span className="flex d-flex flex-column">
                      <span className="text-black-70">
                        Your deploy was successful.
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                <div
                  className="ps__thumb-x"
                  tabIndex={0}
                  style={{ left: 0, width: 0 }}
                />
              </div>
              <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                <div
                  className="ps__thumb-y"
                  tabIndex={0}
                  style={{ top: 0, height: 0 }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* // END Notifications dropdown */}
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link d-flex align-items-center dropdown-toggle"
            data-toggle="dropdown"
            data-caret="false"
          >
            <span className="avatar avatar-sm mr-8pt2">
              <span className="avatar-title rounded-circle bg-primary">
                <i className="material-icons">account_box</i>
              </span>
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <div className="dropdown-header">
              <strong>Account</strong>
            </div>
            <a className="dropdown-item" href="edit-account.html">
              Edit Account
            </a>
            <a className="dropdown-item" href="billing.html">
              Billing
            </a>
            <a className="dropdown-item" href="billing-history.html">
              Payments
            </a>
            <a className="dropdown-item" href="login.html">
              Logout
            </a>
          </div>
        </div>
      </div>
      {/* // END Navbar Menu */}
    </div>
    {/* // END Navbar */}
    {/* // END Header */}
    <div className="pt-32pt">
      <div className="container page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
        <div className="flex d-flex flex-column flex-sm-row align-items-center mb-24pt mb-md-0">
          <div className="mb-24pt mb-sm-0 mr-sm-24pt">
            <h2 className="mb-0">Quizzes</h2>
            <ol className="breadcrumb p-0 m-0">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Quizzes</li>
            </ol>
          </div>
        </div>
        <div className="row" role="tablist">
          <div className="col-auto">
            <a
              href="instructor-edit-quiz.html"
              className="btn btn-outline-secondary"
            >
              Add Quiz
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* BEFORE Page Content */}
    {/* // END BEFORE Page Content */}
    {/* Page Content */}
    <div className="container page__container page-section">
      <div className="row card-group-row">
        <div className="card-group-row__col col-md-6">
          <div className="card card-group-row__card card-sm">
            <div className="card-body d-flex align-items-center">
              <a
                href="instructor-edit-quiz.html"
                className="avatar overlay overlay--primary avatar-4by3 mr-12pt"
              >
                <img
                  src="../../public/images/paths/angular_routing_200x168.png"
                  alt="Angular Routing In-Depth"
                  className="avatar-img rounded"
                />
                <span className="overlay__content" />
              </a>
              <div className="flex">
                <a className="card-title" href="instructor-edit-quiz.html">
                  Angular Routing In-Depth
                </a>
                <div className="card-subtitle text-50">15 completed</div>
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex align-items-center">
                <div className="flex mr-2">
                  <a href="#" className="btn btn-light btn-sm">
                    <i className="material-icons icon--left">
                      playlist_add_check
                    </i>{" "}
                    Review
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
                    <a href="javascript:void(0)" className="dropdown-item">
                      Review Quiz
                    </a>
                    <a
                      href="instructor-edit-quiz.html"
                      className="dropdown-item"
                    >
                      Edit Quiz
                    </a>
                    <div className="dropdown-divider" />
                    <a
                      href="javascript:void(0)"
                      className="dropdown-item text-danger"
                    >
                      Delete Quiz
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
                href="instructor-edit-quiz.html"
                className="avatar overlay overlay--primary avatar-4by3 mr-12pt"
              >
                <img
                  src="../../public/images/paths/angular_testing_200x168.png"
                  alt="Angular Unit Testing"
                  className="avatar-img rounded"
                />
                <span className="overlay__content" />
              </a>
              <div className="flex">
                <a className="card-title" href="instructor-edit-quiz.html">
                  Angular Unit Testing
                </a>
                <div className="card-subtitle text-50">15 completed</div>
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex align-items-center">
                <div className="flex mr-2">
                  <a href="#" className="btn btn-light btn-sm">
                    <i className="material-icons icon--left">
                      playlist_add_check
                    </i>{" "}
                    Review
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
                    <a href="javascript:void(0)" className="dropdown-item">
                      Review Quiz
                    </a>
                    <a
                      href="instructor-edit-quiz.html"
                      className="dropdown-item"
                    >
                      Edit Quiz
                    </a>
                    <div className="dropdown-divider" />
                    <a
                      href="javascript:void(0)"
                      className="dropdown-item text-danger"
                    >
                      Delete Quiz
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
                href="instructor-edit-quiz.html"
                className="avatar overlay overlay--primary avatar-4by3 mr-12pt"
              >
                <img
                  src="../../public/images/paths/typescript_200x168.png"
                  alt="Introduction to TypeScript"
                  className="avatar-img rounded"
                />
                <span className="overlay__content" />
              </a>
              <div className="flex">
                <a className="card-title" href="instructor-edit-quiz.html">
                  Introduction to TypeScript
                </a>
                <div className="card-subtitle text-50">15 completed</div>
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex align-items-center">
                <div className="flex mr-2">
                  <a href="#" className="btn btn-light btn-sm">
                    <i className="material-icons icon--left">
                      playlist_add_check
                    </i>{" "}
                    Review
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
                    <a href="javascript:void(0)" className="dropdown-item">
                      Review Quiz
                    </a>
                    <a
                      href="instructor-edit-quiz.html"
                      className="dropdown-item"
                    >
                      Edit Quiz
                    </a>
                    <div className="dropdown-divider" />
                    <a
                      href="javascript:void(0)"
                      className="dropdown-item text-danger"
                    >
                      Delete Quiz
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
                href="instructor-edit-quiz.html"
                className="avatar overlay overlay--primary avatar-4by3 mr-12pt"
              >
                <img
                  src="../../public/images/paths/angular_200x168.png"
                  alt="Angular Fundamentals"
                  className="avatar-img rounded"
                />
                <span className="overlay__content" />
              </a>
              <div className="flex">
                <a className="card-title" href="instructor-edit-quiz.html">
                  Angular Fundamentals
                </a>
                <div className="card-subtitle text-50">15 completed</div>
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex align-items-center">
                <div className="flex mr-2">
                  <a href="#" className="btn btn-light btn-sm">
                    <i className="material-icons icon--left">
                      playlist_add_check
                    </i>{" "}
                    Review
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
                    <a href="javascript:void(0)" className="dropdown-item">
                      Review Quiz
                    </a>
                    <a
                      href="instructor-edit-quiz.html"
                      className="dropdown-item"
                    >
                      Edit Quiz
                    </a>
                    <div className="dropdown-divider" />
                    <a
                      href="javascript:void(0)"
                      className="dropdown-item text-danger"
                    >
                      Delete Quiz
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
      <div className="card stack">
        <div className="list-group list-group-flush">
          <div className="list-group-item d-flex flex-column flex-sm-row align-items-sm-center px-12pt">
            <div className="flex d-flex align-items-center mr-sm-16pt mb-8pt mb-sm-0">
              <a
                href="instructor-edit-quiz.html"
                className="avatar overlay overlay--primary avatar-4by3 mr-12pt"
              >
                <img
                  src="../../public/images/paths/mailchimp_200x168.png"
                  alt="Newsletter Design"
                  className="avatar-img rounded"
                />
                <span className="overlay__content" />
              </a>
              <div className="flex">
                <a
                  className="card-title mb-4pt"
                  href="instructor-edit-quiz.html"
                >
                  Newsletter Design
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="flex text-center d-flex align-items-center mr-16pt">
                <span className="text-50 text-headings text-uppercase mr-12pt">
                  Completed
                </span>
                <span className="badge badge-dark badge-notifications">15</span>
              </div>
              <div className="dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  data-caret="false"
                  className="text-muted"
                >
                  <i className="material-icons">more_vert</i>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a href="javascript:void(0)" className="dropdown-item">
                    Review Quiz
                  </a>
                  <a href="instructor-edit-quiz.html" className="dropdown-item">
                    Edit Quiz
                  </a>
                  <div className="dropdown-divider" />
                  <a
                    href="javascript:void(0)"
                    className="dropdown-item text-danger"
                  >
                    Delete Quiz
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="list-group-item d-flex flex-column flex-sm-row align-items-sm-center px-12pt">
            <div className="flex d-flex align-items-center mr-sm-16pt mb-8pt mb-sm-0">
              <a
                href="instructor-edit-quiz.html"
                className="avatar overlay overlay--primary avatar-4by3 mr-12pt"
              >
                <img
                  src="../../public/images/paths/xd_200x168.png"
                  alt="Adobe XD"
                  className="avatar-img rounded"
                />
                <span className="overlay__content" />
              </a>
              <div className="flex">
                <a
                  className="card-title mb-4pt"
                  href="instructor-edit-quiz.html"
                >
                  Adobe XD
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="flex text-center d-flex align-items-center mr-16pt">
                <span className="text-50 text-headings text-uppercase mr-12pt">
                  Completed
                </span>
                <span className="badge badge-dark badge-notifications">15</span>
              </div>
              <div className="dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  data-caret="false"
                  className="text-muted"
                >
                  <i className="material-icons">more_vert</i>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a href="javascript:void(0)" className="dropdown-item">
                    Review Quiz
                  </a>
                  <a href="instructor-edit-quiz.html" className="dropdown-item">
                    Edit Quiz
                  </a>
                  <div className="dropdown-divider" />
                  <a
                    href="javascript:void(0)"
                    className="dropdown-item text-danger"
                  >
                    Delete Quiz
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="list-group-item d-flex flex-column flex-sm-row align-items-sm-center px-12pt">
            <div className="flex d-flex align-items-center mr-sm-16pt mb-8pt mb-sm-0">
              <a
                href="instructor-edit-quiz.html"
                className="avatar overlay overlay--primary avatar-4by3 mr-12pt"
              >
                <img
                  src="../../public/images/paths/invision_200x168.png"
                  alt="inVision App"
                  className="avatar-img rounded"
                />
                <span className="overlay__content" />
              </a>
              <div className="flex">
                <a
                  className="card-title mb-4pt"
                  href="instructor-edit-quiz.html"
                >
                  inVision App
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="flex text-center d-flex align-items-center mr-16pt">
                <span className="text-50 text-headings text-uppercase mr-12pt">
                  Completed
                </span>
                <span className="badge badge-dark badge-notifications">15</span>
              </div>
              <div className="dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  data-caret="false"
                  className="text-muted"
                >
                  <i className="material-icons">more_vert</i>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a href="javascript:void(0)" className="dropdown-item">
                    Review Quiz
                  </a>
                  <a href="instructor-edit-quiz.html" className="dropdown-item">
                    Edit Quiz
                  </a>
                  <div className="dropdown-divider" />
                  <a
                    href="javascript:void(0)"
                    className="dropdown-item text-danger"
                  >
                    Delete Quiz
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="list-group-item d-flex flex-column flex-sm-row align-items-sm-center px-12pt">
            <div className="flex d-flex align-items-center mr-sm-16pt mb-8pt mb-sm-0">
              <a
                href="instructor-edit-quiz.html"
                className="avatar overlay overlay--primary avatar-4by3 mr-12pt"
              >
                <img
                  src="../../public/images/paths/craft_200x168.png"
                  alt="Craft by inVision"
                  className="avatar-img rounded"
                />
                <span className="overlay__content" />
              </a>
              <div className="flex">
                <a
                  className="card-title mb-4pt"
                  href="instructor-edit-quiz.html"
                >
                  Craft by inVision
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="flex text-center d-flex align-items-center mr-16pt">
                <span className="text-50 text-headings text-uppercase mr-12pt">
                  Completed
                </span>
                <span className="badge badge-dark badge-notifications">15</span>
              </div>
              <div className="dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  data-caret="false"
                  className="text-muted"
                >
                  <i className="material-icons">more_vert</i>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a href="javascript:void(0)" className="dropdown-item">
                    Review Quiz
                  </a>
                  <a href="instructor-edit-quiz.html" className="dropdown-item">
                    Edit Quiz
                  </a>
                  <div className="dropdown-divider" />
                  <a
                    href="javascript:void(0)"
                    className="dropdown-item text-danger"
                  >
                    Delete Quiz
                  </a>
                </div>
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
    {/* // END Page Content */}
    {/* Footer */}
    <div className="bg-body border-top-2 mt-auto">
      <div className="container page__container page-section d-flex flex-column">
        <p className="text-70 brand mb-24pt">
          <img
            className="brand-icon"
            src="../../public/images/logo/black-70@2x.png"
            width={30}
            alt="Luma"
          />{" "}
          Luma
        </p>
        <p className="measure-lead-max text-50 small mr-8pt">
          Luma is a beautifully crafted user interface for modern Education
          Platforms, including Courses &amp; Tutorials, Video Lessons, Student
          and Teacher Dashboard, Curriculum Management, Earnings and Reporting,
          ERP, HR, CMS, Tasks, Projects, eCommerce and more.
        </p>
        <p className="mb-8pt d-flex">
          <a href="" className="text-70 text-underline mr-8pt small">
            Terms
          </a>
          <a href="" className="text-70 text-underline small">
            Privacy policy
          </a>
        </p>
        <p className="text-50 small mt-n1 mb-0">
          Copyright 2019 © All rights reserved.
        </p>
      </div>
    </div>
    {/* // END Footer */}
  </div>
  {/* // END drawer-layout__content */}
  {/* drawer */}
  <div
    className="mdk-drawer js-mdk-drawer layout-mini-secondary__drawer"
    id="default-drawer"
    data-align="start"
    data-position="left"
    data-domfactory-upgraded="mdk-drawer"
    data-persistent=""
    data-opened=""
  >
    <div className="mdk-drawer__scrim" style={{}} />
    <div
      className="mdk-drawer__content js-sidebar-mini"
      data-responsive-width="992px"
      data-layout="mini-secondary"
      style={{}}
    >
      <div className="sidebar sidebar-mini sidebar-dark-pickled-bluewood sidebar-left d-flex flex-column">
        {/* Brand */}
        <a
          href="index.html"
          className="sidebar-brand p-0 navbar-height d-flex justify-content-center"
        >
          <span className="avatar avatar-sm ">
            <span className="avatar-title rounded bg-primary">
              <img
                src="../../public/images/illustration/teacher/128/white.svg"
                className="img-fluid"
                alt="logo"
              />
            </span>
          </span>
        </a>
        <div
          className="flex d-flex flex-column justify-content-start ps"
          data-perfect-scrollbar=""
        >
          <ul
            className="nav flex-shrink-0 flex-nowrap flex-column sidebar-menu mb-0 js-sidebar-mini-tabs"
            role="tablist"
          >
            <li
              className="sidebar-menu-item"
              data-toggle="tooltip"
              data-title="Student"
              data-placement="right"
              data-boundary="window"
              data-original-title=""
              title=""
            >
              <a
                className="sidebar-menu-button"
                href="#sm_student"
                data-toggle="tab"
                role="tab"
                aria-controls="sm_student"
                aria-selected="true"
              >
                <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">
                  school
                </i>
                <span className="sidebar-menu-text">Student</span>
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
                  format_shapes
                </i>
                <span className="sidebar-menu-text">Instructor</span>
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
                href="#sm_apps"
                data-toggle="tab"
                role="tab"
                aria-controls="sm_apps"
              >
                <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">
                  apps
                </i>
                <span className="sidebar-menu-text">Apps</span>
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
                <span className="sidebar-menu-text">Account</span>
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
                <span className="sidebar-menu-text">Messaging</span>
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
                href="#sm_components"
                data-toggle="tab"
                role="tab"
                aria-controls="sm_components"
              >
                <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">
                  tune
                </i>
                <span className="sidebar-menu-text">Components</span>
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
                <span className="sidebar-menu-text">Layouts</span>
              </a>
            </li>
          </ul>
          <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
            <div
              className="ps__thumb-x"
              tabIndex={0}
              style={{ left: 0, width: 0 }}
            />
          </div>
          <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
            <div
              className="ps__thumb-y"
              tabIndex={0}
              style={{ top: 0, height: 0 }}
            />
          </div>
        </div>
        <ul
          className="nav flex-column sidebar-menu align-items-center mb-12pt js-sidebar-mini-tabs"
          role="tablist"
        >
          <li className="sidebar-account" style={{ width: 40 }}>
            <a
              href="#sm_account_1"
              className="p-4pt d-flex align-items-center justify-content-center"
              data-toggle="tab"
              role="tab"
              aria-controls="sm_account_1"
              aria-selected="true"
            >
              <img
                width={32}
                height={32}
                className="rounded-circle"
                src="../../public/images/people/50/guy-3.jpg"
                alt="account"
              />
            </a>
          </li>
        </ul>
      </div>
      <div
        className="sidebar sidebar-light sidebar-left flex sidebar-secondary ps"
        data-perfect-scrollbar=""
      >
        <div className="navbar navbar-light navbar-expand mb-12pt">
          <span className="d-none d-md-flex align-items-center mr-16pt">
            <span className="avatar avatar-sm mr-12pt">
              <span className="avatar-title rounded navbar-avatar">
                <i className="material-icons">trending_up</i>
              </span>
            </span>
            <small className="flex d-flex flex-column">
              <strong className="navbar-text-100">Earnings</strong>
              <span className="navbar-text-50">$12.3k</span>
            </small>
          </span>
          <span className="d-none d-md-flex align-items-center mr-16pt">
            <span className="avatar avatar-sm mr-12pt">
              <span className="avatar-title rounded navbar-avatar">
                <i className="material-icons">receipt</i>
              </span>
            </span>
            <small className="flex d-flex flex-column">
              <strong className="navbar-text-100">Sales</strong>
              <span className="navbar-text-50">264</span>
            </small>
          </span>
        </div>
        <div className="tab-content">
          <div className="tab-pane" id="sm_account_1">
            <div className="sidebar-heading">Account</div>
            <ul className="sidebar-menu">
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="edit-account.html">
                  <span className="sidebar-menu-text">Edit Account</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="billing.html">
                  Billing
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="billing-history.html">
                  Payments
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="login.html">
                  Logout
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-pane " id="sm_apps">
            <div className="sidebar-heading">Apps</div>
            <ul className="sidebar-menu">
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button js-sidebar-collapse"
                  data-toggle="collapse"
                  href="#enterprise_menu"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    donut_large
                  </span>
                  Enterprise
                  <span className="ml-auto sidebar-menu-toggle-icon" />
                </a>
                <ul
                  className="sidebar-submenu collapse sm-indent"
                  id="enterprise_menu"
                >
                  <li className="sidebar-menu-item">
                    <a
                      className="sidebar-menu-button"
                      href="erp-dashboard.html"
                    >
                      <span className="sidebar-menu-text">ERP Dashboard</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a
                      className="sidebar-menu-button"
                      href="crm-dashboard.html"
                    >
                      <span className="sidebar-menu-text">CRM Dashboard</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="hr-dashboard.html">
                      <span className="sidebar-menu-text">HR Dashboard</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="employees.html">
                      <span className="sidebar-menu-text">Employees</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="staff.html">
                      <span className="sidebar-menu-text">Staff</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="leaves.html">
                      <span className="sidebar-menu-text">Leaves</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a
                      className="sidebar-menu-button disabled"
                      href="departments.html"
                    >
                      <span className="sidebar-menu-text">Departments</span>
                    </a>
                  </li>
                  {/* <li class="sidebar-menu-item">
  <a class="sidebar-menu-button disabled" href="documents.html">
    <span class="sidebar-menu-text">Documents</span>
  </a>
</li>
<li class="sidebar-menu-item">
  <a class="sidebar-menu-button disabled" href="attendance.html">
    <span class="sidebar-menu-text">Attendance</span>
  </a>
</li>
<li class="sidebar-menu-item">
  <a class="sidebar-menu-button disabled" href="recruitment.html">
    <span class="sidebar-menu-text">Recruitment</span>
  </a>
</li>
<li class="sidebar-menu-item">
  <a class="sidebar-menu-button disabled" href="payroll.html">
    <span class="sidebar-menu-text">Payroll</span>
  </a>
</li>
<li class="sidebar-menu-item">
  <a class="sidebar-menu-button disabled" href="training.html">
    <span class="sidebar-menu-text">Training</span>
  </a>
</li>
<li class="sidebar-menu-item">
  <a class="sidebar-menu-button disabled" href="employee-profile.html">
    <span class="sidebar-menu-text">Employee Profile</span>
  </a>
</li>
<li class="sidebar-menu-item">
  <a class="sidebar-menu-button disabled" href="accounting.html">
    <span class="sidebar-menu-text">Accounting</span>
  </a>
</li>
<li class="sidebar-menu-item">
  <a class="sidebar-menu-button disabled" href="inventory.html">
    <span class="sidebar-menu-text">Inventory</span>
  </a>
</li> */}
                </ul>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  data-toggle="collapse"
                  href="#community_menu"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    people_outline
                  </span>
                  Community
                  <span className="ml-auto sidebar-menu-toggle-icon" />
                </a>
                <ul
                  className="sidebar-submenu collapse sm-indent"
                  id="community_menu"
                >
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="teachers.html">
                      <span className="sidebar-menu-text">Browse Teachers</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a
                      className="sidebar-menu-button"
                      href="student-profile.html"
                    >
                      <span className="sidebar-menu-text">Student Profile</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a
                      className="sidebar-menu-button"
                      href="teacher-profile.html"
                    >
                      <span className="sidebar-menu-text">Teacher Profile</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="blog.html">
                      <span className="sidebar-menu-text">Blog</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="blog-post.html">
                      <span className="sidebar-menu-text">Blog Post</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="faq.html">
                      <span className="sidebar-menu-text">FAQ</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="help-center.html">
                      {/*  */}
                      <span className="sidebar-menu-text">Help Center</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="discussions.html">
                      <span className="sidebar-menu-text">Discussions</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="discussion.html">
                      <span className="sidebar-menu-text">
                        Discussion Details
                      </span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a
                      className="sidebar-menu-button"
                      href="discussions-ask.html"
                    >
                      <span className="sidebar-menu-text">Ask Question</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  data-toggle="collapse"
                  href="#productivity_menu"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    access_time
                  </span>
                  Productivity
                  <span className="ml-auto sidebar-menu-toggle-icon" />
                </a>
                <ul
                  className="sidebar-submenu collapse sm-indent"
                  id="productivity_menu"
                >
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="projects.html">
                      <span className="sidebar-menu-text">Projects</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="tasks-board.html">
                      <span className="sidebar-menu-text">Tasks Board</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="tasks-list.html">
                      <span className="sidebar-menu-text">Tasks List</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a
                      className="sidebar-menu-button disabled"
                      href="kanban.html"
                    >
                      <span className="sidebar-menu-text">Kanban</span>
                    </a>
                  </li>
                  {/* <li class="sidebar-menu-item">
  <a class="sidebar-menu-button disabled" href="task-details.html">
    <span class="sidebar-menu-text">Task Details</span>
  </a>
</li>
<li class="sidebar-menu-item">
  <a class="sidebar-menu-button disabled" href="team-members.html">
    <span class="sidebar-menu-text">Team Members</span>
  </a>
</li> */}
                </ul>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  data-toggle="collapse"
                  href="#cms_menu"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    content_copy
                  </span>
                  CMS
                  <span className="ml-auto sidebar-menu-toggle-icon" />
                </a>
                <ul
                  className="sidebar-submenu collapse sm-indent"
                  id="cms_menu"
                >
                  <li className="sidebar-menu-item">
                    <a
                      className="sidebar-menu-button"
                      href="cms-dashboard.html"
                    >
                      <span className="sidebar-menu-text">CMS Dashboard</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="posts.html">
                      <span className="sidebar-menu-text">Posts</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  data-toggle="collapse"
                  href="#ecommerce_menu"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    shopping_cart
                  </span>
                  eCommerce
                  <span className="ml-auto sidebar-menu-toggle-icon" />
                </a>
                <ul
                  className="sidebar-submenu collapse sm-indent"
                  id="ecommerce_menu"
                >
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="ecommerce.html">
                      <span className="sidebar-menu-text">Shop Dashboard</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a
                      className="sidebar-menu-button disabled"
                      href="edit-product.html"
                    >
                      <span className="sidebar-menu-text">Edit Product</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="tab-pane " id="sm_student">
            <div className="sidebar-heading">Student</div>
            <ul className="sidebar-menu">
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="index.html">
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    home
                  </span>
                  <span className="sidebar-menu-text">Home</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="courses.html">
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    local_library
                  </span>
                  <span className="sidebar-menu-text">Browse Courses</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="paths.html">
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    style
                  </span>
                  <span className="sidebar-menu-text">Browse Paths</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="student-dashboard.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    account_box
                  </span>
                  <span className="sidebar-menu-text">Student Dashboard</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="student-my-courses.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    search
                  </span>
                  <span className="sidebar-menu-text">My Courses</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="student-paths.html">
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    timeline
                  </span>
                  <span className="sidebar-menu-text">My Paths</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="student-path.html">
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    change_history
                  </span>
                  <span className="sidebar-menu-text">Path Details</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="student-course.html">
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    face
                  </span>
                  <span className="sidebar-menu-text">Course Preview</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="student-lesson.html">
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    panorama_fish_eye
                  </span>
                  <span className="sidebar-menu-text">Lesson Preview</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="student-take-course.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    class
                  </span>
                  <span className="sidebar-menu-text">Take Course</span>
                  <span className="sidebar-menu-badge badge badge-accent badge-notifications ml-auto">
                    PRO
                  </span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="student-take-lesson.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    import_contacts
                  </span>
                  <span className="sidebar-menu-text">Take Lesson</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="student-take-quiz.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    dvr
                  </span>
                  <span className="sidebar-menu-text">Take Quiz</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="student-quiz-results.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    poll
                  </span>
                  <span className="sidebar-menu-text">My Quizzes</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="student-quiz-result-details.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    live_help
                  </span>
                  <span className="sidebar-menu-text">Quiz Result</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="student-path-assessment.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    layers
                  </span>
                  <span className="sidebar-menu-text">Skill Assessment</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="student-path-assessment-result.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    assignment_turned_in
                  </span>
                  <span className="sidebar-menu-text">Skill Result</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-pane  fade active show " id="sm_instructor">
            <div className="sidebar-heading">Instructor</div>
            <ul className="sidebar-menu">
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="instructor-dashboard.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    school
                  </span>
                  <span className="sidebar-menu-text">
                    Instructor Dashboard
                  </span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="instructor-courses.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    import_contacts
                  </span>
                  <span className="sidebar-menu-text">Manage Courses</span>
                </a>
              </li>
              <li className="sidebar-menu-item active">
                <a
                  className="sidebar-menu-button"
                  href="instructor-quizzes.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    help
                  </span>
                  <span className="sidebar-menu-text">Manage Quizzes</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="instructor-earnings.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    trending_up
                  </span>
                  <span className="sidebar-menu-text">Earnings</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="instructor-statement.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    receipt
                  </span>
                  <span className="sidebar-menu-text">Statement</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="instructor-edit-course.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    post_add
                  </span>
                  <span className="sidebar-menu-text">Edit Course</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="instructor-edit-quiz.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    format_shapes
                  </span>
                  <span className="sidebar-menu-text">Edit Quiz</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-pane " id="sm_account">
            <div className="sidebar-heading">Account</div>
            <ul className="sidebar-menu">
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="pricing.html">
                  <span className="sidebar-menu-text">Pricing</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="login.html">
                  <span className="sidebar-menu-text">Login</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="signup.html">
                  <span className="sidebar-menu-text">Signup</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="signup-payment.html">
                  <span className="sidebar-menu-text">Payment</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="reset-password.html">
                  <span className="sidebar-menu-text">Reset Password</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="change-password.html">
                  <span className="sidebar-menu-text">Change Password</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="edit-account.html">
                  <span className="sidebar-menu-text">Edit Account</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="edit-account-profile.html"
                >
                  <span className="sidebar-menu-text">
                    Profile &amp; Privacy
                  </span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="edit-account-notifications.html"
                >
                  <span className="sidebar-menu-text">Email Notifications</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="edit-account-password.html"
                >
                  <span className="sidebar-menu-text">Account Password</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="billing.html">
                  <span className="sidebar-menu-text">Subscription</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="billing-upgrade.html">
                  <span className="sidebar-menu-text">Upgrade Account</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="billing-payment.html">
                  <span className="sidebar-menu-text">Payment Information</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="billing-history.html">
                  <span className="sidebar-menu-text">Payment History</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="billing-invoice.html">
                  <span className="sidebar-menu-text">Invoice</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-pane " id="sm_messaging">
            <div className="sidebar-heading">Messaging</div>
            <ul className="sidebar-menu">
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="messages.html">
                  <span className="sidebar-menu-text">Messages</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a className="sidebar-menu-button" href="email.html">
                  <span className="sidebar-menu-text">Email</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-pane" id="sm_components">
            <div className="sidebar-heading">UI Components</div>
            <ul className="sidebar-menu">
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  data-toggle="collapse"
                  href="#components_menu"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    tune
                  </span>
                  Components
                  <span className="ml-auto sidebar-menu-toggle-icon" />
                </a>
                <ul
                  className="sidebar-submenu collapse sm-indent"
                  id="components_menu"
                >
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="ui-buttons.html">
                      <span className="sidebar-menu-text">Buttons</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="ui-avatars.html">
                      <span className="sidebar-menu-text">Avatars</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="ui-forms.html">
                      <span className="sidebar-menu-text">Forms</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="ui-loaders.html">
                      <span className="sidebar-menu-text">Loaders</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="ui-tables.html">
                      <span className="sidebar-menu-text">Tables</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="ui-cards.html">
                      <span className="sidebar-menu-text">Cards</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="ui-icons.html">
                      <span className="sidebar-menu-text">Icons</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="ui-tabs.html">
                      <span className="sidebar-menu-text">Tabs</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="ui-alerts.html">
                      <span className="sidebar-menu-text">Alerts</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="ui-badges.html">
                      <span className="sidebar-menu-text">Badges</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button" href="ui-progress.html">
                      <span className="sidebar-menu-text">Progress</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a
                      className="sidebar-menu-button"
                      href="ui-pagination.html"
                    >
                      <span className="sidebar-menu-text">Pagination</span>
                    </a>
                  </li>
                  {/* <li class="sidebar-menu-item">
  <a class="sidebar-menu-button disabled" href="ui-typography.html">
    <span class="sidebar-menu-text">Typography</span>
  </a>
</li>
<li class="sidebar-menu-item">
  <a class="sidebar-menu-button disabled" href="ui-colors.html">
    <span class="sidebar-menu-text">Colors</span>
  </a>
</li>
<li class="sidebar-menu-item">
  <a class="sidebar-menu-button disabled" href="ui-breadcrumb.html">
    <span class="sidebar-menu-text">Breadcrumb</span>
  </a>
</li>
<li class="sidebar-menu-item">
  <a class="sidebar-menu-button disabled" href="ui-accordions.html">
    <span class="sidebar-menu-text">Accordions</span>
  </a>
</li>
<li class="sidebar-menu-item">
  <a class="sidebar-menu-button disabled" href="ui-modals.html">
    <span class="sidebar-menu-text">Modals</span>
  </a>
</li>
<li class="sidebar-menu-item">
  <a class="sidebar-menu-button disabled" href="ui-chips.html">
    <span class="sidebar-menu-text">Chips</span>
  </a>
</li> */}
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button disabled" href="">
                      <span className="sidebar-menu-text">Disabled</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  data-toggle="collapse"
                  href="#plugins_menu"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    folder
                  </span>
                  Plugins
                  <span className="ml-auto sidebar-menu-toggle-icon" />
                </a>
                <ul
                  className="sidebar-submenu collapse sm-indent"
                  id="plugins_menu"
                >
                  <li className="sidebar-menu-item">
                    <a
                      className="sidebar-menu-button"
                      href="ui-plugin-charts.html"
                    >
                      <span className="sidebar-menu-text">Charts</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a
                      className="sidebar-menu-button"
                      href="ui-plugin-flatpickr.html"
                    >
                      <span className="sidebar-menu-text">Flatpickr</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a
                      className="sidebar-menu-button"
                      href="ui-plugin-daterangepicker.html"
                    >
                      <span className="sidebar-menu-text">
                        Date Range Picker
                      </span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a
                      className="sidebar-menu-button"
                      href="ui-plugin-dragula.html"
                    >
                      <span className="sidebar-menu-text">Dragula</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a
                      className="sidebar-menu-button"
                      href="ui-plugin-dropzone.html"
                    >
                      <span className="sidebar-menu-text">Dropzone</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a
                      className="sidebar-menu-button"
                      href="ui-plugin-range-sliders.html"
                    >
                      <span className="sidebar-menu-text">Range Sliders</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a
                      className="sidebar-menu-button"
                      href="ui-plugin-quill.html"
                    >
                      <span className="sidebar-menu-text">Quill</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a
                      className="sidebar-menu-button"
                      href="ui-plugin-select2.html"
                    >
                      <span className="sidebar-menu-text">Select2</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a
                      className="sidebar-menu-button"
                      href="ui-plugin-nestable.html"
                    >
                      <span className="sidebar-menu-text">Nestable</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a
                      className="sidebar-menu-button"
                      href="ui-plugin-fancytree.html"
                    >
                      <span className="sidebar-menu-text">Fancy Tree</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a
                      className="sidebar-menu-button"
                      href="ui-plugin-maps-vector.html"
                    >
                      <span className="sidebar-menu-text">Vector Maps</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a
                      className="sidebar-menu-button"
                      href="ui-plugin-sweet-alert.html"
                    >
                      <span className="sidebar-menu-text">Sweet Alert</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a
                      className="sidebar-menu-button"
                      href="ui-plugin-toastr.html"
                    >
                      <span className="sidebar-menu-text">Toastr</span>
                    </a>
                  </li>
                  <li className="sidebar-menu-item">
                    <a className="sidebar-menu-button disabled" href="">
                      <span className="sidebar-menu-text">Disabled</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="tab-pane" id="sm_layouts">
            <div className="sidebar-heading">Layouts</div>
            <ul className="sidebar-menu">
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="../Compact_App_Layout/instructor-quizzes.html"
                >
                  <span className="sidebar-menu-text">Compact</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="../Mini_App_Layout/instructor-quizzes.html"
                >
                  <span className="sidebar-menu-text">Mini</span>
                </a>
              </li>
              <li className="sidebar-menu-item active">
                <a
                  className="sidebar-menu-button"
                  href="../Mini_Secondary_Layout/instructor-quizzes.html"
                >
                  <span className="sidebar-menu-text">Mini + Secondary</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="../App_Layout/instructor-quizzes.html"
                >
                  <span className="sidebar-menu-text">App</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="../Boxed_App_Layout/instructor-quizzes.html"
                >
                  <span className="sidebar-menu-text">Boxed</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="../Sticky_App_Layout/instructor-quizzes.html"
                >
                  <span className="sidebar-menu-text">Sticky</span>
                </a>
              </li>
              <li className="sidebar-menu-item">
                <a
                  className="sidebar-menu-button"
                  href="../Fixed_Layout/instructor-quizzes.html"
                >
                  <span className="sidebar-menu-text">Fixed</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
          <div
            className="ps__thumb-x"
            tabIndex={0}
            style={{ left: 0, width: 0 }}
          />
        </div>
        <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
          <div
            className="ps__thumb-y"
            tabIndex={0}
            style={{ top: 0, height: 0 }}
          />
        </div>
      </div>
    </div>
  </div>
  {/* // END drawer */}
</div>


  
  )
}
