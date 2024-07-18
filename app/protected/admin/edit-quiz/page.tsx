import React from 'react'

function Page() {
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
        <a className="navbar-brand mr-16pt d-lg-none">
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
              <a className="dropdown-item" >
                Edit Account
              </a>
              <a className="dropdown-item" >
                Billing
              </a>
              <a className="dropdown-item" >
                Payments
              </a>
              <a className="dropdown-item" >
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
          <div className="flex d-flex flex-column flex-sm-row align-items-center">
            <div className="mb-24pt mb-sm-0 mr-sm-24pt">
              <h2 className="mb-0">Edit Quiz</h2>
              <ol className="breadcrumb p-0 m-0">
                <li className="breadcrumb-item">
                  <a >Home</a>
                </li>
                <li className="breadcrumb-item active">Edit Quiz</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* BEFORE Page Content */}
      {/* // END BEFORE Page Content */}
      {/* Page Content */}
      <div className="page-section border-bottom-2">
        <div className="container page__container">
          <div className="row align-items-start">
            <div className="col-md-8">
              <div className="page-separator">
                <div className="page-separator__text">Questions</div>
              </div>
              <ul className="list-group stack mb-40pt">
                <li className="list-group-item d-flex">
                  <i className="material-icons text-70 icon-16pt icon--left">
                    drag_handle
                  </i>
                  <div className="flex d-flex flex-column">
                    <div className="card-title mb-4pt">Question 1 of 2</div>
                    <div className="card-subtitle text-70 paragraph-max mb-16pt">
                      An angular 2 project written in typescript is* transpiled to
                      javascript duri*ng the build process. Which of the following
                      additional features are provided to the developer while
                      programming on typescript over javascript?
                    </div>
                    <div>
                      <a
                        href=""
                        className="chip chip-light d-inline-flex align-items-center"
                      >
                        <i className="material-icons icon-16pt icon--left">
                          keyboard_arrow_down
                        </i>{" "}
                        Answers
                      </a>
                      <div className="chip chip-outline-secondary">
                        Single Answer
                      </div>
                    </div>
                  </div>
                  <span className="text-muted mx-12pt">800 pt</span>
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
                        Edit Question
                      </a>
                      <div className="dropdown-divider" />
                      <a
                        href="javascript:void(0)"
                        className="dropdown-item text-danger"
                      >
                        Delete Question
                      </a>
                    </div>
                  </div>
                </li>
                <li className="list-group-item d-flex">
                  <i className="material-icons text-70 icon-16pt icon--left">
                    drag_handle
                  </i>
                  <div className="flex d-flex flex-column">
                    <div className="card-title mb-4pt">Question 2 of 2</div>
                    <div className="card-subtitle text-70 paragraph-max mb-8pt">
                      What will be the output of below program?
                    </div>
                    <code className="highlight js mb-16pt bg-transparent hljs javascript">
                      <span className="hljs-function">
                        <span className="hljs-keyword">function</span>&nbsp;
                        <span className="hljs-title">f</span>(
                        <span className="hljs-params">input:&nbsp;boolean</span>
                        )&nbsp;
                      </span>
                      {"{"}
                      <br />
                      &nbsp;&nbsp;<span className="hljs-keyword">let</span>
                      &nbsp;a&nbsp;=&nbsp;<span className="hljs-number">100</span>
                      ;<br />
                      <br />
                      &nbsp;&nbsp;<span className="hljs-keyword">if</span>
                      &nbsp;(input)&nbsp;{"{"}
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="hljs-keyword">let</span>
                      &nbsp;b&nbsp;=&nbsp;a&nbsp;+&nbsp;
                      <span className="hljs-number">1</span>;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="hljs-keyword">return</span>&nbsp;b;
                      <br />
                      &nbsp;&nbsp;{"}"}
                      <br />
                      &nbsp;&nbsp;<span className="hljs-keyword">return</span>
                      &nbsp;b;
                      <br />
                      {"}"}
                    </code>
                    <div className="d-flex">
                      <a
                        href=""
                        className="chip chip-light d-inline-flex align-items-center"
                      >
                        <i className="material-icons icon-16pt icon--left">
                          keyboard_arrow_down
                        </i>{" "}
                        Answers
                      </a>
                      <div className="chip chip-outline-secondary">
                        Single Answer
                      </div>
                      <div className="chip chip-outline-secondary">Code</div>
                    </div>
                  </div>
                  <span className="text-muted mx-12pt">800 pt</span>
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
                        Edit Question
                      </a>
                      <div className="dropdown-divider" />
                      <a
                        href="javascript:void(0)"
                        className="dropdown-item text-danger"
                      >
                        Delete Question
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="page-separator">
                <div className="page-separator__text">New Question</div>
              </div>
              <div className="card card-body">
                <div className="form-group">
                  <label className="form-label">Question</label>
                  {/* <textarea class="form-control" rows="3" placeholder="Question"></textarea> */}
                  <div className="ql-toolbar ql-snow">
                    <span className="ql-formats">
                      <span className="ql-header ql-picker">
                        <span
                          className="ql-picker-label"
                          tabIndex={0}
                          role="button"
                          aria-expanded="false"
                          aria-controls="ql-picker-options-0"
                        >
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <polygon
                              className="ql-stroke"
                              points="7 11 9 13 11 11 7 11"
                            />{" "}
                            <polygon
                              className="ql-stroke"
                              points="7 7 9 5 11 7 7 7"
                            />{" "}
                          </svg>
                        </span>
                        <span
                          className="ql-picker-options"
                          aria-hidden="true"
                          tabIndex={-1}
                          id="ql-picker-options-0"
                        >
                          <span
                            tabIndex={0}
                            role="button"
                            className="ql-picker-item"
                            data-value={1}
                          />
                          <span
                            tabIndex={0}
                            role="button"
                            className="ql-picker-item"
                            data-value={2}
                          />
                          <span
                            tabIndex={0}
                            role="button"
                            className="ql-picker-item"
                            data-value={3}
                          />
                          <span
                            tabIndex={0}
                            role="button"
                            className="ql-picker-item"
                          />
                        </span>
                      </span>
                      <select className="ql-header" style={{ display: "none" }}>
                        <option value={1} />
                        <option value={2} />
                        <option value={3} />
                        <option
                        //  selected="selected"
                          />
                      </select>
                    </span>
                    <span className="ql-formats">
                      <button type="button" className="ql-bold">
                        <svg viewBox="0 0 18 18">
                          {" "}
                          <path
                            className="ql-stroke"
                            d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                          />{" "}
                          <path
                            className="ql-stroke"
                            d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                          />{" "}
                        </svg>
                      </button>
                      <button type="button" className="ql-italic">
                        <svg viewBox="0 0 18 18">
                          {" "}
                          <line
                            className="ql-stroke"
                            x1={7}
                            x2={13}
                            y1={4}
                            y2={4}
                          />{" "}
                          <line
                            className="ql-stroke"
                            x1={5}
                            x2={11}
                            y1={14}
                            y2={14}
                          />{" "}
                          <line
                            className="ql-stroke"
                            x1={8}
                            x2={10}
                            y1={14}
                            y2={4}
                          />{" "}
                        </svg>
                      </button>
                      <button type="button" className="ql-underline">
                        <svg viewBox="0 0 18 18">
                          {" "}
                          <path
                            className="ql-stroke"
                            d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                          />{" "}
                          <rect
                            className="ql-fill"
                            height={1}
                            rx="0.5"
                            ry="0.5"
                            width={12}
                            x={3}
                            y={15}
                          />{" "}
                        </svg>
                      </button>
                      <button type="button" className="ql-link">
                        <svg viewBox="0 0 18 18">
                          {" "}
                          <line
                            className="ql-stroke"
                            x1={7}
                            x2={11}
                            y1={7}
                            y2={11}
                          />{" "}
                          <path
                            className="ql-even ql-stroke"
                            d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
                          />{" "}
                          <path
                            className="ql-even ql-stroke"
                            d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
                          />{" "}
                        </svg>
                      </button>
                    </span>
                    <span className="ql-formats">
                      <button type="button" className="ql-list" value="ordered">
                        <svg viewBox="0 0 18 18">
                          {" "}
                          <line
                            className="ql-stroke"
                            x1={7}
                            x2={15}
                            y1={4}
                            y2={4}
                          />{" "}
                          <line
                            className="ql-stroke"
                            x1={7}
                            x2={15}
                            y1={9}
                            y2={9}
                          />{" "}
                          <line
                            className="ql-stroke"
                            x1={7}
                            x2={15}
                            y1={14}
                            y2={14}
                          />{" "}
                          <line
                            className="ql-stroke ql-thin"
                            x1="2.5"
                            x2="4.5"
                            y1="5.5"
                            y2="5.5"
                          />{" "}
                          <path
                            className="ql-fill"
                            d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"
                          />{" "}
                          <path
                            className="ql-stroke ql-thin"
                            d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"
                          />{" "}
                          <path
                            className="ql-stroke ql-thin"
                            d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"
                          />{" "}
                        </svg>
                      </button>
                      <button type="button" className="ql-list" value="bullet">
                        <svg viewBox="0 0 18 18">
                          {" "}
                          <line
                            className="ql-stroke"
                            x1={6}
                            x2={15}
                            y1={4}
                            y2={4}
                          />{" "}
                          <line
                            className="ql-stroke"
                            x1={6}
                            x2={15}
                            y1={9}
                            y2={9}
                          />{" "}
                          <line
                            className="ql-stroke"
                            x1={6}
                            x2={15}
                            y1={14}
                            y2={14}
                          />{" "}
                          <line
                            className="ql-stroke"
                            x1={3}
                            x2={3}
                            y1={4}
                            y2={4}
                          />{" "}
                          <line
                            className="ql-stroke"
                            x1={3}
                            x2={3}
                            y1={9}
                            y2={9}
                          />{" "}
                          <line
                            className="ql-stroke"
                            x1={3}
                            x2={3}
                            y1={14}
                            y2={14}
                          />{" "}
                        </svg>
                      </button>
                    </span>
                    <span className="ql-formats">
                      <button type="button" className="ql-clean">
                        <svg className="" viewBox="0 0 18 18">
                          {" "}
                          <line
                            className="ql-stroke"
                            x1={5}
                            x2={13}
                            y1={3}
                            y2={3}
                          />{" "}
                          <line
                            className="ql-stroke"
                            x1={6}
                            x2="9.35"
                            y1={12}
                            y2={3}
                          />{" "}
                          <line
                            className="ql-stroke"
                            x1={11}
                            x2={15}
                            y1={11}
                            y2={15}
                          />{" "}
                          <line
                            className="ql-stroke"
                            x1={15}
                            x2={11}
                            y1={11}
                            y2={15}
                          />{" "}
                          <rect
                            className="ql-fill"
                            height={1}
                            rx="0.5"
                            ry="0.5"
                            width={7}
                            x={2}
                            y={14}
                          />{" "}
                        </svg>
                      </button>
                    </span>
                  </div>
                  <div
                    style={{ height: 150 }}
                    className="mb-0 ql-container ql-snow"
                    data-toggle="quill"
                    data-quill-placeholder="Question"
                  >
                    <div
                      className="ql-editor"
                      data-gramm="false"
                      contentEditable="true"
                      data-placeholder="Question"
                    >
                      <p>
                        An angular 2 project written in typescript is* transpiled
                        to javascript duri*ng the build process. Which of the
                        following additional features are provided to the
                        developer while programming on typescript over javascript?
                      </p>
                    </div>
                    <div
                      className="ql-clipboard"
                      contentEditable="true"
                      tabIndex={-1}
                    />
                    <div className="ql-tooltip ql-hidden">
                      <a
                        className="ql-preview"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="about:blank"
                      />
                      <input
                        type="text"
                        data-formula="e=mc^2"
                        data-link="https://quilljs.com"
                        data-video="Embed URL"
                      />
                      <a className="ql-action" />
                      <a className="ql-remove" />
                    </div>
                  </div>
                  <small className="form-text text-muted">
                    Shortly describe the question.
                  </small>
                </div>
                <div className="form-group">
                  <label className="form-label">Question Type</label>
                  <select name="category" className="form-control custom-select">
                    <option value="vuejs">Multiple Answer</option>
                    <option value="vuejs">Single Answer</option>
                    <option value="vuejs">Essay</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="select01">
                    Answers
                  </label>
                  <select
                    id="select01"
                    data-toggle="select"
                    data-multiple="true"
                    // multiple=""
                    className="form-control select2-hidden-accessible"
                    data-select2-id="select01"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option 
                    // selected=""
                     data-select2-id={2}>
                      My first option
                    </option>
                    <option
                    //  selected="" 
                     data-select2-id={3}>
                      Another option
                    </option>
                    <option>Third option is here</option>
                  </select>
                  <span
                    className="select2 select2-container select2-container--bootstrap4"
                    dir="ltr"
                    data-select2-id={1}
                    style={{ width: "549.984px" }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--multiple"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex={-1}
                        aria-disabled="false"
                      >
                        <ul className="select2-selection__rendered">
                          <li
                            className="select2-selection__choice"
                            title="My first option"
                            data-select2-id={4}
                          >
                            <span
                              className="select2-selection__choice__remove"
                              role="presentation"
                            >
                              ×
                            </span>
                            My first option
                          </li>
                          <li
                            className="select2-selection__choice"
                            title="Another option"
                            data-select2-id={5}
                          >
                            <span
                              className="select2-selection__choice__remove"
                              role="presentation"
                            >
                              ×
                            </span>
                            Another option
                          </li>
                          <li className="select2-search select2-search--inline">
                            <input
                              className="select2-search__field"
                              type="search"
                              tabIndex={0}
                              autoComplete="off"
                              autoCorrect="off"
                              autoCapitalize="none"
                              spellCheck="false"
                              role="searchbox"
                              aria-autocomplete="list"
                              placeholder=""
                              style={{ width: "0.75em" }}
                            />
                          </li>
                        </ul>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                </div>
                <div className="form-group">
                  <label className="form-label">Completion Points</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={1000}
                  />
                </div>
                <div>
                  <a href="#" className="btn btn-outline-secondary">
                    Add Question
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header text-center">
                  <a href="#" className="btn btn-accent">
                    Save changes
                  </a>
                </div>
                <div className="list-group list-group-flush">
                  <div className="list-group-item d-flex">
                    <a className="flex" href="#">
                      <strong>Save Draft</strong>
                    </a>
                    <i className="material-icons text-muted">check</i>
                  </div>
                  <div className="list-group-item">
                    <a href="#" className="text-danger">
                      <strong>Delete Quiz</strong>
                    </a>
                  </div>
                </div>
              </div>
              <div className="page-separator">
                <div className="page-separator__text">Courses</div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="form-group mb-0">
                    <label className="form-label">Add to course</label>
                    <select
                      name="course"
                      id="course"
                      data-toggle="select"
                      data-tags="false"
                      data-multiple="true"
                      data-minimum-results-for-search={0}
                      className="form-control select2-hidden-accessible"
                      data-placeholder="Select course ..."
                      data-select2-id="course"
                      // multiple=""
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option
                        data-avatar-src="../../public/images/paths/angular_40x40@2x.png"
                        // selected=""
                        data-select2-id={7}
                      >
                        Angular Fundamentals
                      </option>
                      <option data-avatar-src="../../public/images/paths/swift_40x40@2x.png">
                        Build an iOS Application in Swift
                      </option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--bootstrap4"
                      dir="ltr"
                      data-select2-id={6}
                      style={{ width: "245.984px" }}
                    >
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--multiple"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabIndex={-1}
                          aria-disabled="false"
                        >
                          <ul className="select2-selection__rendered">
                            <li
                              className="select2-selection__choice"
                              title="Angular Fundamentals"
                              data-select2-id={8}
                            >
                              <span
                                className="select2-selection__choice__remove"
                                role="presentation"
                              >
                                ×
                              </span>
                              Angular Fundamentals
                            </li>
                            <li className="select2-search select2-search--inline">
                              <input
                                className="select2-search__field"
                                type="search"
                                tabIndex={0}
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="none"
                                spellCheck="false"
                                role="searchbox"
                                aria-autocomplete="list"
                                placeholder=""
                                style={{ width: "0.75em" }}
                              />
                            </li>
                          </ul>
                        </span>
                      </span>
                      <span className="dropdown-wrapper" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  <a className="sidebar-menu-button" >
                    <span className="sidebar-menu-text">Edit Account</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" >
                    Billing
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" >
                    Payments
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" >
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
                        
                      >
                        <span className="sidebar-menu-text">ERP Dashboard</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a
                        className="sidebar-menu-button"                        
                      >
                        <span className="sidebar-menu-text">CRM Dashboard</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">HR Dashboard</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">Employees</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">Staff</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">Leaves</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a
                        className="sidebar-menu-button disabled"                        
                      >
                        <span className="sidebar-menu-text">Departments</span>
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
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">Browse Teachers</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a
                        className="sidebar-menu-button"                        
                      >
                        <span className="sidebar-menu-text">Student Profile</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a
                        className="sidebar-menu-button"
                        
                      >
                        <span className="sidebar-menu-text">Teacher Profile</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">Blog</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">Blog Post</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">FAQ</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a className="sidebar-menu-button" >
                        {/*  */}
                        <span className="sidebar-menu-text">Help Center</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">Discussions</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">
                          Discussion Details
                        </span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a
                        className="sidebar-menu-button"                        
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
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">Projects</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">Tasks Board</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">Tasks List</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a
                        className="sidebar-menu-button disabled"
                        
                      >
                        <span className="sidebar-menu-text">Kanban</span>
                      </a>
                    </li>
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
                        
                      >
                        <span className="sidebar-menu-text">CMS Dashboard</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a className="sidebar-menu-button" >
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
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">Shop Dashboard</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a
                        className="sidebar-menu-button disabled"
                        
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
                  <a className="sidebar-menu-button" >
                    <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                      home
                    </span>
                    <span className="sidebar-menu-text">Home</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" >
                    <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                      local_library
                    </span>
                    <span className="sidebar-menu-text">Browse Courses</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" >
                    <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                      style
                    </span>
                    <span className="sidebar-menu-text">Browse Paths</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
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
                    
                  >
                    <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                      search
                    </span>
                    <span className="sidebar-menu-text">My Courses</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" >
                    <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                      timeline
                    </span>
                    <span className="sidebar-menu-text">My Paths</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" >
                    <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                      change_history
                    </span>
                    <span className="sidebar-menu-text">Path Details</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" >
                    <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                      face
                    </span>
                    <span className="sidebar-menu-text">Course Preview</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" >
                    <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                      panorama_fish_eye
                    </span>
                    <span className="sidebar-menu-text">Lesson Preview</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
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
                  >
                    <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                      import_contacts
                    </span>
                    <span className="sidebar-menu-text">Manage Courses</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
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
                  >
                    <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                      post_add
                    </span>
                    <span className="sidebar-menu-text">Edit Course</span>
                  </a>
                </li>
                <li className="sidebar-menu-item active">
                  <a
                    className="sidebar-menu-button"
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
                  <a className="sidebar-menu-button" >
                    <span className="sidebar-menu-text">Pricing</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" >
                    <span className="sidebar-menu-text">Login</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button">
                    <span className="sidebar-menu-text">Signup</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" >
                    <span className="sidebar-menu-text">Payment</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" >
                    <span className="sidebar-menu-text">Reset Password</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" >
                    <span className="sidebar-menu-text">Change Password</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" >
                    <span className="sidebar-menu-text">Edit Account</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    
                  >
                    <span className="sidebar-menu-text">
                      Profile &amp; Privacy
                    </span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                  >
                    <span className="sidebar-menu-text">Email Notifications</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                  >
                    <span className="sidebar-menu-text">Account Password</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" >
                    <span className="sidebar-menu-text">Subscription</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" >
                    <span className="sidebar-menu-text">Upgrade Account</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" >
                    <span className="sidebar-menu-text">Payment Information</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" >
                    <span className="sidebar-menu-text">Payment History</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button">
                    <span className="sidebar-menu-text">Invoice</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-pane " id="sm_messaging">
              <div className="sidebar-heading">Messaging</div>
              <ul className="sidebar-menu">
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button">
                    <span className="sidebar-menu-text">Messages</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" >
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
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">Buttons</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">Avatars</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">Forms</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">Loaders</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">Tables</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">Cards</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">Icons</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">Tabs</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">Alerts</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a className="sidebar-menu-button">
                        <span className="sidebar-menu-text">Badges</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a className="sidebar-menu-button" >
                        <span className="sidebar-menu-text">Progress</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a
                        className="sidebar-menu-button"
                      >
                        <span className="sidebar-menu-text">Pagination</span>
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
                      >
                        <span className="sidebar-menu-text">Charts</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a
                        className="sidebar-menu-button"
                      >
                        <span className="sidebar-menu-text">Flatpickr</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a
                        className="sidebar-menu-button"
                      >
                        <span className="sidebar-menu-text">
                          Date Range Picker
                        </span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a
                        className="sidebar-menu-button"
                      >
                        <span className="sidebar-menu-text">Dragula</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a
                        className="sidebar-menu-button"
                      >
                        <span className="sidebar-menu-text">Dropzone</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a
                        className="sidebar-menu-button"
                      >
                        <span className="sidebar-menu-text">Range Sliders</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a
                        className="sidebar-menu-button"
                      >
                        <span className="sidebar-menu-text">Quill</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a
                        className="sidebar-menu-button"
                      >
                        <span className="sidebar-menu-text">Select2</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a
                        className="sidebar-menu-button"
                      >
                        <span className="sidebar-menu-text">Nestable</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a
                        className="sidebar-menu-button"
                      >
                        <span className="sidebar-menu-text">Fancy Tree</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a
                        className="sidebar-menu-button"
                      >
                        <span className="sidebar-menu-text">Vector Maps</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a
                        className="sidebar-menu-button"
                      >
                        <span className="sidebar-menu-text">Sweet Alert</span>
                      </a>
                    </li>
                    <li className="sidebar-menu-item">
                      <a
                        className="sidebar-menu-button"
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
                  >
                    <span className="sidebar-menu-text">Compact</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                  >
                    <span className="sidebar-menu-text">Mini</span>
                  </a>
                </li>
                <li className="sidebar-menu-item active">
                  <a
                    className="sidebar-menu-button"
                  >
                    <span className="sidebar-menu-text">Mini + Secondary</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                  >
                    <span className="sidebar-menu-text">App</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                  >
                    <span className="sidebar-menu-text">Boxed</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                  >
                    <span className="sidebar-menu-text">Sticky</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
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

export default Page
