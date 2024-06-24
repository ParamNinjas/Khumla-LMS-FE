import { NextPage } from 'next';

const HeadNav: NextPage<{setIsOpen: any, isOpen: boolean}> = ({setIsOpen, isOpen}) => {

  return (
      <>
          
          <div className="navbar navbar-expand navbar-shadow px-0  pl-lg-16pt navbar-light bg-body"
     id="default-navbar"
     data-primary>

{/*     <!-- Navbar toggler --> */}
              <button onClick={() => { setIsOpen(!isOpen) }} className="navbar-togger d-block d-lg-none rounded-0" >
        <span className="material-icons">menu</span>
    </button>

{/*     <!-- Navbar Brand --> */}
    <a href="index.html"
       className="navbar-brand mr-16pt d-lg-none">
        <img className="navbar-brand-icon mr-0 mr-lg-8pt"
             src="/assets/images/logo/accent-teal-100@2x.png"
             width="32"
             alt="Huma"/>
        <span className="d-none d-lg-block">Huma</span>
    </a>

    <form className="search-form navbar-search d-none d-md-flex mr-16pt"
          action="index.html">
        <button className="btn"
                type="submit"><i className="material-icons">search</i></button>
        <input type="text"
               className="form-control"
               placeholder="Search ..."/>
    </form>

    <div className="flex"></div>

                  <div className="nav navbar-nav flex-nowrap d-none d-lg-flex mr-16pt"
                      style={{ whiteSpace: 'nowrap' }}>
        <div className="nav-item dropdown d-none d-sm-flex">
            <a href="#"
               className="nav-link dropdown-toggle"
               data-toggle="dropdown">EN</a>
            <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-header"><strong>Select language</strong></div>
                <a className="dropdown-item active"
                   href="">English</a>
                <a className="dropdown-item"
                   href="">French</a>
                <a className="dropdown-item"
                   href="">Romanian</a>
                <a className="dropdown-item"
                   href="">Spanish</a>
            </div>
        </div>
    </div>

    <div className="nav navbar-nav flex-nowrap d-flex ml-0 mr-16pt">
        <div className="nav-item dropdown d-none d-sm-flex">
            <a href="#"
               className="nav-link d-flex align-items-center dropdown-toggle"
               data-toggle="dropdown">
                <img width="32"
                     height="32"
                     className="rounded-circle mr-8pt"
                     src="/assets/images/people/50/guy-3.jpg"
                     alt="account" />
                <span className="flex d-flex flex-column mr-8pt">
                    <span className="navbar-text-100">Laza Bogdan</span>
                    <small className="navbar-text-50">Administrator</small>
                </span>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-header"><strong>Account</strong></div>
                <a className="dropdown-item"
                   href="edit-account.html">Edit Account</a>
                <a className="dropdown-item"
                   href="billing.html">Billing</a>
                <a className="dropdown-item"
                   href="billing-history.html">Payments</a>
                <a className="dropdown-item"
                   href="login.html">Logout</a>
            </div>
        </div>

{/*         <!-- Notifications dropdown --> */}
        <div className="nav-item ml-16pt dropdown dropdown-notifications">
            <button className="nav-link btn-flush dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    data-dropdown-disable-document-scroll
                    data-caret="false">
                <i className="material-icons">notifications</i>
                <span className="badge badge-notifications badge-accent">2</span>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
                <div data-perfect-scrollbar
                     className="position-relative">
                    <div className="dropdown-header"><strong>System notifications</strong></div>
                    <div className="list-group list-group-flush mb-0">

                        <a 
                           className="list-group-item list-group-item-action unread">
                            <span className="d-flex align-items-center mb-1">
                                <small className="text-black-50">3 minutes ago</small>

                                <span className="ml-auto unread-indicator bg-accent"></span>

                            </span>
                            <span className="d-flex">
                                <span className="avatar avatar-xs mr-2">
                                    <span className="avatar-title rounded-circle bg-light">
                                        <i className="material-icons font-size-16pt text-accent">account_circle</i>
                                    </span>
                                </span>
                                <span className="flex d-flex flex-column">

                                    <span className="text-black-70">Your profile information has not been synced correctly.</span>
                                </span>
                            </span>
                        </a>

                        <a 
                           className="list-group-item list-group-item-action">
                            <span className="d-flex align-items-center mb-1">
                                <small className="text-black-50">5 hours ago</small>

                            </span>
                            <span className="d-flex">
                                <span className="avatar avatar-xs mr-2">
                                    <span className="avatar-title rounded-circle bg-light">
                                        <i className="material-icons font-size-16pt text-primary">group_add</i>
                                    </span>
                                </span>
                                <span className="flex d-flex flex-column">
                                    <strong className="text-black-100">Adrian. D</strong>
                                    <span className="text-black-70">Wants to join your private group.</span>
                                </span>
                            </span>
                        </a>

                        <a 
                           className="list-group-item list-group-item-action">
                            <span className="d-flex align-items-center mb-1">
                                <small className="text-black-50">1 day ago</small>

                            </span>
                            <span className="d-flex">
                                <span className="avatar avatar-xs mr-2">
                                    <span className="avatar-title rounded-circle bg-light">
                                        <i className="material-icons font-size-16pt text-warning">storage</i>
                                    </span>
                                </span>
                                <span className="flex d-flex flex-column">

                                    <span className="text-black-70">Your deploy was successful.</span>
                                </span>
                            </span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
{/*         <!-- // END Notifications dropdown --> */}

{/*         <!-- Notifications dropdown --> */}
        <div className="nav-item ml-16pt dropdown dropdown-notifications">
            <button className="nav-link btn-flush dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    data-dropdown-disable-document-scroll
                    data-caret="false">
                <i className="material-icons icon-24pt">mail_outline</i>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
                <div data-perfect-scrollbar
                     className="position-relative">
                    <div className="dropdown-header"><strong>Messages</strong></div>
                    <div className="list-group list-group-flush mb-0">

                        <a 
                           className="list-group-item list-group-item-action unread">
                            <span className="d-flex align-items-center mb-1">
                                <small className="text-black-50">5 minutes ago</small>

                                <span className="ml-auto unread-indicator bg-accent"></span>

                            </span>
                            <span className="d-flex">
                                <span className="avatar avatar-xs mr-2">
                                    <img src="/assets/images/people/110/woman-5.jpg"
                                         alt="people"
                                         className="avatar-img rounded-circle"/>
                                </span>
                                <span className="flex d-flex flex-column">
                                    <strong className="text-black-100">Michelle</strong>
                                    <span className="text-black-70">Clients loved the new design.</span>
                                </span>
                            </span>
                        </a>

                        <a 
                           className="list-group-item list-group-item-action">
                            <span className="d-flex align-items-center mb-1">
                                <small className="text-black-50">5 minutes ago</small>

                            </span>
                            <span className="d-flex">
                                <span className="avatar avatar-xs mr-2">
                                    <img src="/assets/images/people/110/woman-5.jpg"
                                         alt="people"
                                         className="avatar-img rounded-circle"/>
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
{/*         <!-- // END Notifications dropdown --> */}
    </div>

    <div className="dropdown border-left-2 navbar-border">
        <button className="navbar-toggler navbar-toggler-custom d-block"
                type="button"
                data-toggle="dropdown"
                data-caret="false">
            <span className="material-icons">business_center</span>
        </button>
        <div className="dropdown-menu dropdown-menu-right">
            <div className="dropdown-header"><strong>Select company</strong></div>
            <a href=""
               className="dropdown-item active d-flex align-items-center">

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
            <a href=""
               className="dropdown-item d-flex align-items-center">

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

    </>
  )
}

export default HeadNav