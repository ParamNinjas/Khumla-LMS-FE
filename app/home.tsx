"use client"
import Image from 'next/image'
import './globals.css'
import './css/app.css'
import './vendor/perfect-scrollbar.css'
import './css/material-icons.css'
import './css/fontawesome.css'
import './vendor/spinkit.css'
import './css/preloader.css'
import './css/dark-mode.css'
export default function Home() {
  return (



    <div
    className="mdk-drawer-layout js-mdk-drawer-layout"
    data-push=""
    data-responsive-width="992px"
  >
    <div className="mdk-drawer-layout__content page-content">
      {/* Header */}
      <div
        className="navbar navbar-expand navbar-shadow px-0  pl-lg-16pt navbar-light bg-body"
        id="default-navbar"
        data-primary=""
      >
        {/* Navbar toggler */}
        <button
          className="navbar-toggler d-block d-lg-none rounded-0"
          type="button"
          data-toggle="sidebar"
        >
          <span className="material-icons">menu</span>
        </button>
        {/* Navbar Brand */}
        <a href="index.html" className="navbar-brand mr-16pt d-lg-none">
          <img
            className="navbar-brand-icon mr-0 mr-lg-8pt"
            src="assets/images/logo/accent-teal-100@2x.png"
            width={32}
            alt="Huma"
          />
          <span className="d-none d-lg-block">Huma</span>
        </a>
        {/* <button class="btn navbar-btn mr-16pt" data-toggle="modal" data-target="#apps">Apps <i class="material-icons">arrow_drop_down</i></button> */}
        <form
          className="search-form navbar-search d-none d-md-flex mr-16pt"
          action="index.html"
        >
          <button className="btn" type="submit">
            <i className="material-icons">search</i>
          </button>
          <input type="text" className="form-control" placeholder="Search ..." />
        </form>
        <div className="flex" />
        <div
          className="nav navbar-nav flex-nowrap d-none d-lg-flex mr-16pt"
          style={{ whiteSpace: "nowrap" }}
        >
          <div className="nav-item dropdown d-none d-sm-flex">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
            >
              EN
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-header">
                <strong>Select language</strong>
              </div>
              <a className="dropdown-item active" href="">
                English
              </a>
              <a className="dropdown-item" href="">
                French
              </a>
              <a className="dropdown-item" href="">
                Romanian
              </a>
              <a className="dropdown-item" href="">
                Spanish
              </a>
            </div>
          </div>
        </div>
        <div className="nav navbar-nav flex-nowrap d-flex ml-0 mr-16pt">
          <div className="nav-item dropdown d-none d-sm-flex">
            <a
              href="#"
              className="nav-link d-flex align-items-center dropdown-toggle"
              data-toggle="dropdown"
            >
              <Image
                width={32}
                height={32}
                className="rounded-circle mr-8pt"
                src="assets/images/people/50/guy-3.jpg"
                alt="account"
              />
              <span className="flex d-flex flex-column mr-8pt">
                <span className="navbar-text-100">Laza Bogdan</span>
                <small className="navbar-text-50">Administrator</small>
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
          {/* Notifications dropdown */}
          <div className="nav-item ml-16pt dropdown dropdown-notifications">
            <button
              className="nav-link btn-flush dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              data-dropdown-disable-document-scroll=""
              data-caret="false"
            >
              <i className="material-icons">notifications</i>
              <span className="badge badge-notifications badge-accent">2</span>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <div data-perfect-scrollbar="" className="position-relative">
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
              </div>
            </div>
          </div>
          {/* // END Notifications dropdown */}
          {/* Notifications dropdown */}
          <div className="nav-item ml-16pt dropdown dropdown-notifications">
            <button
              className="nav-link btn-flush dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              data-dropdown-disable-document-scroll=""
              data-caret="false"
            >
              <i className="material-icons icon-24pt">mail_outline</i>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <div data-perfect-scrollbar="" className="position-relative">
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
                          src="assets/images/people/110/woman-5.jpg"
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
                          src="assets/images/people/110/woman-5.jpg"
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
              </div>
            </div>
          </div>
          {/* // END Notifications dropdown */}
        </div>
        <div className="dropdown border-left-2 navbar-border">
          <button
            className="navbar-toggler navbar-toggler-custom d-block"
            type="button"
            data-toggle="dropdown"
            data-caret="false"
          >
            <span className="material-icons">business_center</span>
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <div className="dropdown-header">
              <strong>Select company</strong>
            </div>
            <a href="" className="dropdown-item active d-flex align-items-center">
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
            <a href="" className="dropdown-item d-flex align-items-center">
              <div className="avatar avatar-sm mr-8pt">
                <span className="avatar-title rounded bg-accent">HH</span>
              </div>
              <small className="ml-4pt flex">
                <span className="d-flex flex-column">
                  <strong className="text-black-100">HumaHuma Inc.</strong>
                  <span className="text-black-50">Publisher</span>
                </span>
              </small>
            </a>
          </div>
        </div>
      </div>
      {/* // END Header */}
      <div className="border-bottom-2 py-32pt position-relative z-1">
        <div className="container-fluid page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
          <div className="flex d-flex flex-column flex-sm-row align-items-center mb-24pt mb-md-0">
            <div className="mb-24pt mb-sm-0 mr-sm-24pt">
              <h2 className="mb-0">HR Dashboard</h2>
              <ol className="breadcrumb p-0 m-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active">HR Dashboard</li>
              </ol>
            </div>
            <div className="dropdown">
              <a
                href=""
                className="border rounded d-flex align-items-center p-16pt"
                data-toggle="dropdown"
                data-caret="false"
              >
                <div className="avatar avatar-sm mr-8pt">
                  <span className="avatar-title rounded bg-primary">FM</span>
                </div>
                <small className="ml-4pt flex">
                  <span className="d-flex align-items-center">
                    <span className="flex d-flex flex-column">
                      <strong className="text-100">FrontendMatter Inc.</strong>
                      <span className="text-50">Select company</span>
                    </span>
                    <i className="material-icons icon-16pt text-50 ml-4pt">
                      arrow_drop_down
                    </i>
                  </span>
                </small>
              </a>
              <div className="dropdown-menu w-100">
                <div className="dropdown-header">
                  <strong>Select company</strong>
                </div>
                <a
                  href=""
                  className="dropdown-item active d-flex align-items-center"
                >
                  <div className="avatar avatar-sm mr-8pt">
                    <span className="avatar-title rounded bg-primary">FM</span>
                  </div>
                  <small className="ml-4pt flex">
                    <span className="d-flex flex-column">
                      <strong className="text-black-100">
                        FrontendMatter Inc.
                      </strong>
                      <span className="text-black-50">Administrator</span>
                    </span>
                  </small>
                </a>
                <a href="" className="dropdown-item d-flex align-items-center">
                  <div className="avatar avatar-sm mr-8pt">
                    <span className="avatar-title rounded bg-accent">HH</span>
                  </div>
                  <small className="ml-4pt flex">
                    <span className="d-flex flex-column">
                      <strong className="text-black-100">HumaHuma Inc.</strong>
                      <span className="text-black-50">Publisher</span>
                    </span>
                  </small>
                </a>
              </div>
            </div>
          </div>
          <div className="row" role="tablist">
            <div className="col-auto d-flex flex-column">
              <h6 className="m-0">$12.3k</h6>
              <p className="text-50 mb-0 d-flex align-items-center">
                Earnings
                <i className="material-icons text-accent ml-4pt icon-16pt">
                  keyboard_arrow_up
                </i>
              </p>
            </div>
            <div className="col-auto border-left">
              <h6 className="m-0">264</h6>
              <p className="text-50 mb-0 d-flex align-items-center">
                Sales
                <i className="material-icons text-accent ml-4pt icon-16pt">
                  keyboard_arrow_up
                </i>
              </p>
            </div>
            <div className="col-auto border-left">
              <a href="" className="btn btn-accent">
                New Report
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid page__container">
        <div className="page-section">
          <div className="row mb-lg-8pt">
            <div className="col-lg-8">
              <div className="page-separator">
                <div className="page-separator__text">Overview</div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card ">
                    <div className="card-header pb-0 border-0 d-flex">
                      <div className="flex">
                        <div className="h2 mb-0">65</div>
                        <p className="mb-0">
                          <strong>Employees</strong>
                        </p>
                      </div>
                      <i className="material-icons text-50">more_horiz</i>
                    </div>
                    <div className="card-body">
                      <div className="text-50 mb-16pt">
                        <div className="mb-4pt">
                          <p className="d-flex align-items-center mb-0">
                            <small className="flex lh-24pt">In-time</small>
                            <small className="lh-24pt">60</small>
                          </p>
                          <div className="progress" style={{ height: 4 }}>
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "91%" }}
                              aria-valuenow={91}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="mb-4pt">
                          <p className="d-flex align-items-center mb-0">
                            <small className="flex lh-24pt">Late</small>
                            <small className="lh-24pt">15</small>
                          </p>
                          <div className="progress" style={{ height: 4 }}>
                            <div
                              className="progress-bar bg-accent"
                              role="progressbar"
                              style={{ width: "22%" }}
                              aria-valuenow={22}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="mb-4pt">
                          <p className="d-flex align-items-center mb-0">
                            <small className="flex lh-24pt">Absents</small>
                            <small className="lh-24pt">4</small>
                          </p>
                          <div className="progress" style={{ height: 4 }}>
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: "5%" }}
                              aria-valuenow={5}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div>
                          <p className="d-flex align-items-center mb-0">
                            <small className="flex lh-24pt">
                              Out on Vacation
                            </small>
                            <small className="lh-24pt">1</small>
                          </p>
                          <div className="progress" style={{ height: 4 }}>
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: "1.06%" }}
                              aria-valuenow={1.06}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <a href="" className="btn btn-outline-secondary">
                          View employees
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card ">
                    <div className="card-header pb-0 border-0 d-flex">
                      <div className="flex">
                        <div className="h2 mb-0">12</div>
                        <p className="mb-0">
                          <strong>Departments</strong>
                        </p>
                      </div>
                      <i className="material-icons text-50">more_horiz</i>
                    </div>
                    <div className="card-body">
                      <div className="text-50 mb-16pt">
                        <div className="mb-4pt">
                          <p className="d-flex align-items-center mb-0">
                            <small className="flex lh-24pt">
                              Human Resources
                            </small>
                            <small className="lh-24pt">2</small>
                          </p>
                          <div className="progress" style={{ height: 4 }}>
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "7%" }}
                              aria-valuenow={7}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="mb-4pt">
                          <p className="d-flex align-items-center mb-0">
                            <small className="flex lh-24pt">
                              Entrepreneurship
                            </small>
                            <small className="lh-24pt">8</small>
                          </p>
                          <div className="progress" style={{ height: 4 }}>
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "29%" }}
                              aria-valuenow={29}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="mb-4pt">
                          <p className="d-flex align-items-center mb-0">
                            <small className="flex lh-24pt">Operations</small>
                            <small className="lh-24pt">7</small>
                          </p>
                          <div className="progress" style={{ height: 4 }}>
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "25%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div>
                          <p className="d-flex align-items-center mb-0">
                            <small className="flex lh-24pt">Engineering</small>
                            <small className="lh-24pt">10</small>
                          </p>
                          <div className="progress" style={{ height: 4 }}>
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "37%" }}
                              aria-valuenow={37}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <a href="" className="btn btn-outline-secondary">
                          View departments
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="page-separator">
                <div className="page-separator__text">Birthdays</div>
              </div>
              <div className="card">
                <div className="card-header">
                  <div className="d-flex align-items-center">
                    <div className="flex">
                      <strong>Today</strong>
                    </div>
                    <i className="material-icons text-50">more_horiz</i>
                  </div>
                </div>
                <div className="card-body">
                  <div className="alert alert-soft-warning mb-0 p-8pt">
                    <div className="d-flex align-items-start">
                      <div className="mr-8pt">
                        <i className="material-icons">card_giftcard</i>
                      </div>
                      <div className="flex">
                        <small className="text-100">
                          Take a minute and congratulate them on their special
                          day!
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-group list-group-flush border-top">
                  <div className="list-group-item p-16pt">
                    <div
                      className="d-flex align-items-center"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      <div className="avatar avatar-32pt mr-8pt">
                        <img
                          src="assets/images/256_rsz_1andy-lee-642320-unsplash.jpg"
                          alt="Avatar"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="flex ml-4pt">
                        <div className="d-flex flex-column">
                          <p className="mb-0">
                            <strong>Gilbert Barrett</strong>
                          </p>
                          <small className="text-50">paolo.zieme@gmail.com</small>
                        </div>
                      </div>
                      <a href="">
                        <i className="material-icons text-20 icon-16pt">email</i>
                      </a>
                    </div>
                  </div>
                  <div className="list-group-item p-16pt">
                    <div
                      className="d-flex align-items-center"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      <div className="avatar avatar-32pt mr-8pt">
                        <img
                          src="assets/images/256_michael-dam-258165-unsplash.jpg"
                          alt="Avatar"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="flex ml-4pt">
                        <div className="d-flex flex-column">
                          <p className="mb-0">
                            <strong>Noah Allen</strong>
                          </p>
                          <small className="text-50">
                            shanny.sawayn@yahoo.com
                          </small>
                        </div>
                      </div>
                      <a href="">
                        <i className="material-icons text-20 icon-16pt">email</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-lg-8pt">
            <div className="col-lg-8">
              <div className="page-separator">
                <div className="page-separator__text">Attendance</div>
              </div>
              <div className="card">
                <div className="card-body p-24pt">
                  <div className="row">
                    <div className="col-6">
                      <div className="chart" style={{ height: 262 }}>
                        <div className="text-center fullbleed d-flex align-items-center justify-content-center flex-column z-0">
                          <h2 className="m-0">25%</h2>
                          <strong>In-time</strong>
                        </div>
                        <canvas
                          className="chart-canvas position-relative z-1"
                          id="attendanceDoughnutChart"
                          data-chart-legend="#attendanceDoughnutChartLegend"
                          data-chart-line-background-color="primary;teal;gray.700;gray"
                        >
                          <span
                            style={{ fontSize: "1rem" }}
                            className="text-muted"
                          >
                            <strong>Attendance</strong> doughnut chart goes here.
                          </span>
                        </canvas>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="nav border-0">
                        <div className="row no-gutters flex" role="tablist">
                          <div className="col-auto">
                            <div className="d-flex align-items-center">
                              <div className="h2 mb-0 mr-3">17</div>
                              <div className="flex">
                                <p className="mb-0">
                                  <strong>Leave requests</strong>
                                </p>
                                <p className="text-50 mb-0 lh-1">
                                  <small>Last 30 days</small>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto ml-sm-auto">
                            <a href="#">
                              <i className="material-icons text-50">more_horiz</i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        id="attendanceDoughnutChartLegend"
                        className="chart-legend chart-legend--vertical mt-24pt"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="page-separator">
                <div className="page-separator__text">Self service</div>
              </div>
              <div className="card">
                <div className="card-header">
                  <div className="d-flex align-items-center">
                    <div className="flex">
                      <strong>Attendance</strong>
                    </div>
                    <i className="material-icons text-50">more_horiz</i>
                  </div>
                </div>
                <div className="card-body d-flex flex-column align-items-center justify-content-center p-24pt">
                  <div className="mb-24pt d-inline-flex flex-column text-center">
                    <i className="material-icons text-50 icon-32pt">
                      access_time
                    </i>
                    <div className="d-flex align-items-center">
                      <h2 className="m-0">08:58:05</h2>
                      <strong className="text-50 ml-8pt">am</strong>
                    </div>
                  </div>
                  <div className="d-inline-flex">
                    <div>
                      <a href="" className="btn btn-accent mb-16pt">
                        Checkin
                      </a>
                      <p className="text-70 m-0">
                        <strong>Time</strong>
                      </p>
                      <div className="lh-1">
                        <small className="text-50">08:30 am</small>
                      </div>
                    </div>
                    <div className="ml-16pt">
                      <a href="" className="btn btn-secondary disabled mb-16pt">
                        Checkout
                      </a>
                      <p className="text-70 m-0">
                        <strong>Duration</strong>
                      </p>
                      <div className="lh-1">
                        <small className="text-50">00:28:05</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-separator">
            <div className="page-separator__text">Shift distribution</div>
          </div>
          <div className="card mb-0">
            <div
              className="table-responsive"
              data-toggle="lists"
              data-lists-values='["js-lists-values-name"]'
            >
              <table className="table table-bordered table-flush mb-0 thead-border-top-0 table-nowrap">
                <thead>
                  <tr>
                    <th style={{ width: 18 }} className="pr-0 border-right-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input js-toggle-check-all"
                          data-target="#contacts"
                          id="customCheckAll_contacts"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheckAll_contacts"
                        >
                          <span className="text-hide">Toggle all</span>
                        </label>
                      </div>
                    </th>
                    <th className="border-left-0">
                      <a
                        href="javascript:void(0)"
                        className="sort"
                        data-sort="js-lists-values-name"
                      >
                        Name
                      </a>
                    </th>
                    <th>
                      <div className="lh-1 d-flex flex-column text-50 my-4pt">
                        Monday <small>25/02/2019</small>
                      </div>
                    </th>
                    <th>
                      <div className="lh-1 d-flex flex-column text-50 my-4pt">
                        Tuesday <small>26/02/2019</small>
                      </div>
                    </th>
                    <th>
                      <div className="lh-1 d-flex flex-column text-50 my-4pt">
                        Wednesday <small>27/02/2019</small>
                      </div>
                    </th>
                    <th>
                      <div className="lh-1 d-flex flex-column text-50 my-4pt">
                        Thursday <small>28/02/2019</small>
                      </div>
                    </th>
                    <th>
                      <div className="lh-1 d-flex flex-column text-50 my-4pt">
                        Friday <small>01/03/2019</small>
                      </div>
                    </th>
                    <th>
                      <div className="lh-1 d-flex flex-column text-50 my-4pt">
                        Saturday <small>02/03/2019</small>
                      </div>
                    </th>
                    <th>
                      <div className="lh-1 d-flex flex-column text-50 my-4pt">
                        Sunday <small>03/03/2019</small>
                      </div>
                    </th>
                    <th style={{ width: 24 }} />
                  </tr>
                </thead>
                <tbody className="list" id="contacts">
                  <tr>
                    <td className="pr-0 border-right-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input js-check-selected-row"
                          id="customCheck1_contacts_1"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck1_contacts_1"
                        >
                          <span className="text-hide">Check</span>
                        </label>
                      </div>
                    </td>
                    <td className="border-left-0">
                      <div
                        className="media flex-nowrap align-items-center"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <div className="avatar avatar-32pt mr-8pt">
                          <span className="avatar-title rounded-circle bg-white border text-100">
                            BN
                          </span>
                        </div>
                        <div className="media-body ml-4pt">
                          <p className="mb-0">
                            <strong className="js-lists-values-name">
                              Billy Nunez
                            </strong>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <a
                        className="d-flex flex-column border-1 rounded bg-light px-8pt py-4pt lh-1"
                        href=""
                      >
                        <small>
                          <strong className="js-lists-values-name text-black-100">
                            Night
                          </strong>
                        </small>
                        <small className="text-black-50">20:00 - 08:00</small>
                      </a>
                    </td>
                    <td>
                      <a
                        className="d-flex flex-column border-1 rounded bg-light px-8pt py-4pt lh-1"
                        href=""
                      >
                        <small>
                          <strong className="js-lists-values-name text-black-100">
                            Night
                          </strong>
                        </small>
                        <small className="text-black-50">20:00 - 08:00</small>
                      </a>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <a
                        className="d-flex flex-column border-1 rounded bg-light px-8pt py-4pt lh-1"
                        href=""
                      >
                        <small>
                          <strong className="js-lists-values-name text-black-100">
                            Day
                          </strong>
                        </small>
                        <small className="text-black-50">07:30 - 20:00</small>
                      </a>
                    </td>
                    <td>
                      <a
                        className="d-flex flex-column border-1 rounded bg-light px-8pt py-4pt lh-1"
                        href=""
                      >
                        <small>
                          <strong className="js-lists-values-name text-black-100">
                            Day
                          </strong>
                        </small>
                        <small className="text-black-50">07:30 - 20:00</small>
                      </a>
                    </td>
                    <td>
                      <a
                        className="d-flex flex-column border-1 rounded bg-light px-8pt py-4pt lh-1"
                        href=""
                      >
                        <small>
                          <strong className="js-lists-values-name text-black-100">
                            Day
                          </strong>
                        </small>
                        <small className="text-black-50">07:30 - 20:00</small>
                      </a>
                    </td>
                    <td className="text-right">
                      <a href="" className="text-50">
                        <i className="material-icons">more_vert</i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="pr-0 border-right-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input js-check-selected-row"
                          id="customCheck1_contacts_2"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck1_contacts_2"
                        >
                          <span className="text-hide">Check</span>
                        </label>
                      </div>
                    </td>
                    <td className="border-left-0">
                      <div
                        className="media flex-nowrap align-items-center"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <div className="avatar avatar-32pt mr-8pt">
                          <span className="avatar-title rounded-circle bg-white border text-100">
                            TP
                          </span>
                        </div>
                        <div className="media-body ml-4pt">
                          <p className="mb-0">
                            <strong className="js-lists-values-name">
                              Tony Parks
                            </strong>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <a
                        className="d-flex flex-column border-1 rounded bg-light px-8pt py-4pt lh-1"
                        href=""
                      >
                        <small>
                          <strong className="js-lists-values-name text-black-100">
                            Night
                          </strong>
                        </small>
                        <small className="text-black-50">20:00 - 08:00</small>
                      </a>
                    </td>
                    <td>
                      <a
                        className="d-flex flex-column border-1 rounded bg-light px-8pt py-4pt lh-1"
                        href=""
                      >
                        <small>
                          <strong className="js-lists-values-name text-black-100">
                            Night
                          </strong>
                        </small>
                        <small className="text-black-50">20:00 - 08:00</small>
                      </a>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="text-right">
                      <a href="" className="text-50">
                        <i className="material-icons">more_vert</i>
                      </a>
                    </td>
                  </tr>
                  <tr className="selected">
                    <td className="pr-0 border-right-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input js-check-selected-row"
                          // defaultChecked=""
                          id="customCheck1_contacts_3"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck1_contacts_3"
                        >
                          <span className="text-hide">Check</span>
                        </label>
                      </div>
                    </td>
                    <td className="border-left-0">
                      <div
                        className="media flex-nowrap align-items-center"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <div className="avatar avatar-32pt mr-8pt">
                          <img
                            src="assets/images/people/110/guy-1.jpg"
                            alt="Avatar"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="media-body ml-4pt">
                          <p className="mb-0">
                            <strong className="js-lists-values-name">
                              Gilbert Barrett
                            </strong>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <a
                        className="d-flex flex-column border-1 rounded bg-light px-8pt py-4pt lh-1"
                        href=""
                      >
                        <small>
                          <strong className="js-lists-values-name text-black-100">
                            Day
                          </strong>
                        </small>
                        <small className="text-black-50">07:30 - 20:00</small>
                      </a>
                    </td>
                    <td>
                      <a
                        className="d-flex flex-column border-1 rounded bg-light px-8pt py-4pt lh-1"
                        href=""
                      >
                        <small>
                          <strong className="js-lists-values-name text-black-100">
                            Day
                          </strong>
                        </small>
                        <small className="text-black-50">07:30 - 20:00</small>
                      </a>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <a
                        className="d-flex flex-column border-1 rounded bg-light px-8pt py-4pt lh-1"
                        href=""
                      >
                        <small>
                          <strong className="js-lists-values-name text-black-100">
                            Night
                          </strong>
                        </small>
                        <small className="text-black-50">20:00 - 08:00</small>
                      </a>
                    </td>
                    <td>
                      <a
                        className="d-flex flex-column border-1 rounded bg-light px-8pt py-4pt lh-1"
                        href=""
                      >
                        <small>
                          <strong className="js-lists-values-name text-black-100">
                            Night
                          </strong>
                        </small>
                        <small className="text-black-50">20:00 - 08:00</small>
                      </a>
                    </td>
                    <td>
                      <a
                        className="d-flex flex-column border-1 rounded bg-light px-8pt py-4pt lh-1"
                        href=""
                      >
                        <small>
                          <strong className="js-lists-values-name text-black-100">
                            Night
                          </strong>
                        </small>
                        <small className="text-black-50">20:00 - 08:00</small>
                      </a>
                    </td>
                    <td className="text-right">
                      <a href="" className="text-50">
                        <i className="material-icons">more_vert</i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="pr-0 border-right-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input js-check-selected-row"
                          id="customCheck1_contacts_4"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck1_contacts_4"
                        >
                          <span className="text-hide">Check</span>
                        </label>
                      </div>
                    </td>
                    <td className="border-left-0">
                      <div
                        className="media flex-nowrap align-items-center"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <div className="avatar avatar-32pt mr-8pt">
                          <img
                            src="assets/images/people/110/guy-2.jpg"
                            alt="Avatar"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="media-body ml-4pt">
                          <p className="mb-0">
                            <strong className="js-lists-values-name">
                              Ollie Wallace
                            </strong>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <a
                        className="d-flex flex-column border-1 rounded bg-light px-8pt py-4pt lh-1"
                        href=""
                      >
                        <small>
                          <strong className="js-lists-values-name text-black-100">
                            Day
                          </strong>
                        </small>
                        <small className="text-black-50">07:30 - 20:00</small>
                      </a>
                    </td>
                    <td>
                      <a
                        className="d-flex flex-column border-1 rounded bg-light px-8pt py-4pt lh-1"
                        href=""
                      >
                        <small>
                          <strong className="js-lists-values-name text-black-100">
                            Day
                          </strong>
                        </small>
                        <small className="text-black-50">07:30 - 20:00</small>
                      </a>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="text-right">
                      <a href="" className="text-50">
                        <i className="material-icons">more_vert</i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer border-0 p-8pt">
              <ul className="pagination justify-content-start pagination-xsm m-0">
                <li className="page-item disabled">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true" className="material-icons">
                      chevron_left
                    </span>
                    <span>Prev</span>
                  </a>
                </li>
                <li className="page-item dropdown">
                  <a
                    className="page-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                    aria-label="Page"
                  >
                    <span>1</span>
                  </a>
                  <div className="dropdown-menu">
                    <a href="" className="dropdown-item active">
                      1
                    </a>
                    <a href="" className="dropdown-item">
                      2
                    </a>
                    <a href="" className="dropdown-item">
                      3
                    </a>
                    <a href="" className="dropdown-item">
                      4
                    </a>
                    <a href="" className="dropdown-item">
                      5
                    </a>
                  </div>
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
            {/* <div class="card-body text-right">
    15 <span class="text-50">of 1,430</span> <a href="#" class="text-50"><i class="material-icons ml-1">arrow_forward</i></a>
  </div> */}
          </div>
        </div>
      </div>
      <div className="js-fix-footer footer border-top-2">
        <div className="container-fluid page__container page-section d-flex flex-column">
          <p className="text-70 brand mb-24pt">
            <img
              className="brand-icon"
              src="assets/images/logo/black-70@2x.png"
              width={30}
              alt="Huma"
            />{" "}
            Huma
          </p>
          <p className="measure-lead-max text-muted mb-0 small">
            Huma is a beautifully crafted user interface for modern Business Admin
            Web Applications, with examples for many pages needed for Customer
            Relationship Management, Enterprise Resource Planning, Human
            Resources, Content Management System, Project Management, Tasks,
            eCommerce, Messaging and Account Management.
          </p>
        </div>
        <div className="pb-16pt pb-lg-24pt">
          <div className="container-fluid page__container">
            <div className="bg-dark rounded page-section py-lg-32pt px-16pt px-lg-24pt">
              <div className="row">
                <div className="col-md-2 col-sm-4 mb-24pt mb-md-0">
                  <p className="text-white-70 mb-8pt">
                    <strong>Follow us</strong>
                  </p>
                  <nav className="nav nav-links nav--flush">
                    <a href="#" className="nav-link mr-8pt">
                      <img
                        src="assets/images/icon/footer/facebook-square@2x.png"
                        width={24}
                        height={24}
                        alt="Facebook"
                      />
                    </a>
                    <a href="#" className="nav-link mr-8pt">
                      <img
                        src="assets/images/icon/footer/twitter-square@2x.png"
                        width={24}
                        height={24}
                        alt="Twitter"
                      />
                    </a>
                    <a href="#" className="nav-link mr-8pt">
                      <img
                        src="assets/images/icon/footer/vimeo-square@2x.png"
                        width={24}
                        height={24}
                        alt="Vimeo"
                      />
                    </a>
                    {/* <a href="#" class="nav-link"><img src="assets/images/icon/footer/youtube-square@2x.png" width="24" height="24" alt="YouTube"></a> */}
                  </nav>
                </div>
                <div className="col-md-6 col-sm-4 mb-24pt mb-md-0 d-flex align-items-center">
                  <a href="" className="btn btn-outline-white">
                    English{" "}
                    <span className="icon--right material-icons">
                      arrow_drop_down
                    </span>
                  </a>
                </div>
                <div className="col-md-4 text-md-right">
                  <p className="mb-8pt d-flex align-items-md-center justify-content-md-end">
                    <a href="" className="text-white-70 text-underline mr-16pt">
                      Terms
                    </a>
                    <a href="" className="text-white-70 text-underline">
                      Privacy policy
                    </a>
                  </p>
                  <p className="text-white-50 small mb-0">
                    Copyright 2019 © All rights reserved.
                  </p>
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
        <div
          className="sidebar sidebar-dark sidebar-left"
          data-perfect-scrollbar=""
        >
          {/* Navbar toggler */}
          <a
            href="compact-hr-dashboard.html"
            className="navbar-toggler navbar-toggler-right navbar-toggler-custom d-flex align-items-center justify-content-center position-absolute right-0 top-0"
            data-toggle="tooltip"
            data-title="Switch to Compact Vertical Layout"
            data-placement="right"
            data-boundary="window"
          >
            <span className="material-icons">sync_alt</span>
          </a>
          <a href="index.html" className="sidebar-brand ">
            <img
              className="sidebar-brand-icon"
              src="assets/images/logo/accent-teal-100@2x.png"
              alt="Huma"
            />
            <span>Huma</span>
          </a>
          <div className="sidebar-account mx-16pt mb-16pt dropdown">
            <a
              href="#"
              className="nav-link d-flex align-items-center dropdown-toggle"
              data-toggle="dropdown"
              data-caret="false"
            >
              <img
                width={32}
                height={32}
                className="rounded-circle mr-8pt"
                src="assets/images/people/50/guy-3.jpg"
                alt="account"
              />
              <span className="flex d-flex flex-column mr-8pt">
                <span className="text-black-100">Laza Bogdan</span>
                <small className="text-black-50">Administrator</small>
              </span>
              <i className="material-icons text-black-20 icon-16pt">
                keyboard_arrow_down
              </i>
            </a>
            <div className="dropdown-menu dropdown-menu-full dropdown-menu-caret-center">
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
              <div className="dropdown-divider" />
              <div className="dropdown-header">
                <strong>Select company</strong>
              </div>
              <a
                href=""
                className="dropdown-item active d-flex align-items-center"
              >
                <div className="avatar avatar-sm mr-8pt">
                  <span className="avatar-title rounded bg-primary">FM</span>
                </div>
                <small className="ml-4pt flex">
                  <span className="d-flex flex-column">
                    <strong className="text-black-100">
                      FrontendMatter Inc.
                    </strong>
                    <span className="text-black-50">Administrator</span>
                  </span>
                </small>
              </a>
              <a href="" className="dropdown-item d-flex align-items-center">
                <div className="avatar avatar-sm mr-8pt">
                  <span className="avatar-title rounded bg-accent">HH</span>
                </div>
                <small className="ml-4pt flex">
                  <span className="d-flex flex-column">
                    <strong className="text-black-100">HumaHuma Inc.</strong>
                    <span className="text-black-50">Publisher</span>
                  </span>
                </small>
              </a>
            </div>
          </div>
          <form
            action="index.html"
            className="search-form flex-shrink-0 search-form--black sidebar-m-b sidebar-p-l mx-16pt pr-0"
          >
            <input
              type="text"
              className="form-control pl-0"
              placeholder="Search"
            />
            <button className="btn" type="submit">
              <i className="material-icons">search</i>
            </button>
          </form>
          <div className="sidebar-heading">Overview</div>
          <ul className="sidebar-menu">
            <li className="sidebar-menu-item">
              <a className="sidebar-menu-button" href="index.html">
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  insert_chart_outlined
                </span>
                <span className="sidebar-menu-text">Dashboard</span>
              </a>
            </li>
            <li className="sidebar-menu-item">
              <a
                className="sidebar-menu-button"
                data-toggle="collapse"
                href="#dashboards_menu"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  link
                </span>
                Shortcuts
                <span className="ml-auto sidebar-menu-toggle-icon" />
              </a>
              <ul
                className="sidebar-submenu collapse sm-indent"
                id="dashboards_menu"
              >
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" href="index.html">
                    <span className="sidebar-menu-text">Analytics Dashboard</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" href="analytics.html">
                    <span className="sidebar-menu-text">
                      Analytics 2 Dashboard
                    </span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" href="projects.html">
                    <span className="sidebar-menu-text">Projects Dashboard</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" href="tasks-board.html">
                    <span className="sidebar-menu-text">Tasks Dashboard</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" href="staff.html">
                    <span className="sidebar-menu-text">Staff Dashboard</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" href="ecommerce.html">
                    <span className="sidebar-menu-text">Shop Dashboard</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" href="erp-dashboard.html">
                    <span className="sidebar-menu-text">ERP Dashboard</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" href="crm-dashboard.html">
                    <span className="sidebar-menu-text">CRM Dashboard</span>
                  </a>
                </li>
                <li className="sidebar-menu-item active">
                  <a className="sidebar-menu-button" href="hr-dashboard.html">
                    <span className="sidebar-menu-text">HR Dashboard</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" href="cms-dashboard.html">
                    <span className="sidebar-menu-text">CMS Dashboard</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button disabled"
                    href="ui-card-metrics.html"
                  >
                    <span className="sidebar-menu-text">Card Metrics</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="sidebar-heading">Applications</div>
          <ul className="sidebar-menu">
            <li className="sidebar-menu-item active open">
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
                className="sidebar-submenu collapse show sm-indent"
                id="enterprise_menu"
              >
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" href="erp-dashboard.html">
                    <span className="sidebar-menu-text">ERP Dashboard</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" href="crm-dashboard.html">
                    <span className="sidebar-menu-text">CRM Dashboard</span>
                  </a>
                </li>
                <li className="sidebar-menu-item active">
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
                  <a className="sidebar-menu-button disabled" href="kanban.html">
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
            <li className="sidebar-menu-item">
              <a
                className="sidebar-menu-button"
                data-toggle="collapse"
                href="#messaging_menu"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  message
                </span>
                Messaging
                <span className="sidebar-menu-badge badge badge-accent badge-notifications ml-auto">
                  2
                </span>
                <span className="sidebar-menu-toggle-icon" />
              </a>
              <ul
                className="sidebar-submenu collapse sm-indent"
                id="messaging_menu"
              >
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
            </li>
            {/* <li class="sidebar-menu-item">
      <a class="sidebar-menu-button" data-toggle="collapse" href="#marketplace_menu">
        <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">assessment</span>
        Marketplace
        <span class="ml-auto sidebar-menu-toggle-icon"></span>
      </a>
      <ul class="sidebar-submenu collapse sm-indent" id="marketplace_menu">
        <li class="sidebar-menu-item">
    <a class="sidebar-menu-button disabled" href="digital-product.html">
      <span class="sidebar-menu-text">Digital Product</span>
    </a>
  </li>
      </ul>
    </li> */}
            {/* <li class="sidebar-menu-item">
      <a class="sidebar-menu-button" data-toggle="collapse" href="#education_menu">
        <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">layers</span>
        Education
        <span class="ml-auto sidebar-menu-toggle-icon"></span>
      </a>
      <ul class="sidebar-submenu collapse sm-indent" id="education_menu">
        
      </ul>
    </li> */}
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
              <ul className="sidebar-submenu collapse sm-indent" id="cms_menu">
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" href="cms-dashboard.html">
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
                href="#account_menu"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  account_box
                </span>
                Account
                <span className="ml-auto sidebar-menu-toggle-icon" />
              </a>
              <ul
                className="sidebar-submenu collapse sm-indent"
                id="account_menu"
              >
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
                  <a className="sidebar-menu-button" href="faq.html">
                    <span className="sidebar-menu-text">FAQ</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" href="discussions.html">
                    <span className="sidebar-menu-text">Discussions</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" href="discussion.html">
                    <span className="sidebar-menu-text">Discussion Details</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" href="discussions-ask.html">
                    <span className="sidebar-menu-text">Ask Question</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="sidebar-heading">UI</div>
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
                  <a className="sidebar-menu-button" href="ui-pagination.html">
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
                  <a className="sidebar-menu-button" href="ui-plugin-charts.html">
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
                    <span className="sidebar-menu-text">Date Range Picker</span>
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
                  <a className="sidebar-menu-button" href="ui-plugin-quill.html">
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
                  <a className="sidebar-menu-button" href="ui-plugin-toastr.html">
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
            <li className="sidebar-menu-item">
              <a
                className="sidebar-menu-button"
                data-toggle="collapse"
                href="#layouts_menu"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  view_compact
                </span>
                Layouts
                <span className="ml-auto sidebar-menu-toggle-icon" />
              </a>
              <ul
                className="sidebar-submenu collapse sm-indent"
                id="layouts_menu"
              >
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="compact-hr-dashboard.html"
                  >
                    <span className="sidebar-menu-text">Compact</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="mini-hr-dashboard.html"
                  >
                    <span className="sidebar-menu-text">Mini</span>
                  </a>
                </li>
                <li className="sidebar-menu-item active">
                  <a className="sidebar-menu-button" href="hr-dashboard.html">
                    <span className="sidebar-menu-text">App</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="boxed-hr-dashboard.html"
                  >
                    <span className="sidebar-menu-text">Boxed</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="sticky-hr-dashboard.html"
                  >
                    <span className="sidebar-menu-text">Sticky</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="fixed-hr-dashboard.html"
                  >
                    <span className="sidebar-menu-text">Fixed</span>
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

  )
}
