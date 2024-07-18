const SubHeadBar = () => {
  return (
      <>
        <div className="page__subnav navbar navbar-expand-sm navbar-shadow navbar-light bg-white p-sm-0 d-none d-sm-flex "
         id="secondary-navbar">
        <div className="container page__container">

            {/* <!-- Navbar toggler --> */}
            <button className="navbar-toggler ml-n16pt"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar-submenu2">
                <span className="material-icons">people_outline</span>
            </button>

            <div className="collapse navbar-collapse"
                 id="navbar-submenu2">
                <div className="navbar-collapse__content pb-16pt pb-sm-0">
                    <ul className="nav navbar-nav">
                        <li className="nav-item dropdown">
                            <a href="#"
                               className="nav-link dropdown-toggle"
                               data-toggle="dropdown">
                                <i className="material-icons icon--left">assessment</i>
                                Dashboards
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item"
                                   href="fixed-index.html">Analytics Dashboard</a>
                                <a className="dropdown-item"
                                   href="fixed-analytics.html">Analytics 2 Dashboard</a>
                                <a className="dropdown-item"
                                   href="fixed-projects.html">Projects Dashboard</a>
                                <a className="dropdown-item"
                                   href="fixed-tasks-board.html">Tasks Dashboard</a>
                                <a className="dropdown-item"
                                   href="fixed-staff.html">Staff Dashboard</a>
                                <a className="dropdown-item"
                                   href="fixed-ecommerce.html">Shop Dashboard</a>
                                <a className="dropdown-item"
                                   href="fixed-erp-dashboard.html">ERP Dashboard</a>
                                <a className="dropdown-item"
                                   href="fixed-crm-dashboard.html">CRM Dashboard</a>
                                <a className="dropdown-item"
                                   href="fixed-hr-dashboard.html">HR Dashboard</a>
                                <a className="dropdown-item"
                                   href="fixed-cms-dashboard.html">CMS Dashboard</a>
                                <a className="dropdown-item disabled"
                                   href="fixed-ui-card-metrics.html">Card Metrics</a>
                            </div>
                        </li>

                                    <li className="nav-item dropdown"
                                        style={{ position: "initial" }}>
                            <a href="#"
                               className="nav-link dropdown-toggle"
                               data-toggle="dropdown">
                                <i className="material-icons icon--left">business_center</i>
                                Apps
                            </a>
                                        <div className="dropdown-menu dropdown-menu-caret-center"
                                            style={{ width: "800px", left: "1.5rem" }}>
                                <div className="row no-gutters">
                                    <div className="col border-right">
                                        <div className="dropdown-header">Productivity</div>
                                        <a className="dropdown-item"
                                           href="fixed-projects.html">Projects</a>
                                        <a className="dropdown-item"
                                           href="fixed-tasks-board.html">Tasks Board</a>
                                        <a className="dropdown-item"
                                           href="fixed-tasks-list.html">Tasks List</a>

                                        <div className="dropdown-header">eCommerce</div>
                                        <a className="dropdown-item"
                                           href="fixed-ecommerce.html">Shop Dashboard</a>
                                    </div>

                                    <div className="col border-right">
                                        <div className="dropdown-header">Enterprise</div>
                                        <a className="dropdown-item"
                                           href="fixed-erp-dashboard.html">ERP Dashboard</a>
                                        <a className="dropdown-item"
                                           href="fixed-crm-dashboard.html">CRM Dashboard</a>
                                        <a className="dropdown-item"
                                           href="fixed-hr-dashboard.html">HR Dashboard</a>
                                        <a className="dropdown-item"
                                           href="fixed-employees.html">Employees</a>
                                        <a className="dropdown-item"
                                           href="fixed-staff.html">Staff</a>
                                        <a className="dropdown-item"
                                           href="fixed-leaves.html">Leaves</a>
                                    </div>

                                    <div className="col border-right">
                                        <div className="dropdown-header">Messaging</div>
                                        <a className="dropdown-item"
                                           href="fixed-messages.html">Messages</a>
                                        <a className="dropdown-item"
                                           href="fixed-email.html">Email</a>

                                        <div className="dropdown-header">Community</div>
                                        <a className="dropdown-item"
                                           href="fixed-faq.html">FAQ</a>
                                        <a className="dropdown-item"
                                           href="fixed-discussions.html">Discussions</a>
                                        <a className="dropdown-item"
                                           href="fixed-discussion.html">Discussion Details</a>
                                        <a className="dropdown-item"
                                           href="fixed-discussions-ask.html">Ask Question</a>
                                    </div>

                                    <div className="col">
                                        <div className="dropdown-header">CMS</div>
                                        <a className="dropdown-item"
                                           href="fixed-cms-dashboard.html">CMS Dashboard</a>
                                        <a className="dropdown-item"
                                           href="fixed-posts.html">Posts</a>

                                    </div>
                                </div>
                            </div>
                        </li>


                                    <li className="nav-item dropdown active"
                                        style={{ position: "initial" }}>
                            <a href="#"
                               className="nav-link dropdown-toggle"
                               data-toggle="dropdown">
                                <i className="material-icons icon--left">account_box</i>
                                Account
                            </a>
                                        <div className="dropdown-menu dropdown-menu-caret-center"
                                            style={{ width: "600px", left: "1.5rem" }}>
                                <div className="row no-gutters">
                                    <div className="col border-right">
                                        <div className="dropdown-header">Guest</div>
                                        <a className="dropdown-item"
                                           href="fixed-login.html">Login</a>
                                        <a className="dropdown-item"
                                           href="fixed-pricing.html">Pricing</a>
                                        <a className="dropdown-item"
                                           href="fixed-signup.html">Sign Up</a>
                                        <a className="dropdown-item"
                                           href="fixed-signup-payment.html">Payment</a>
                                        <a className="dropdown-item"
                                           href="fixed-reset-password.html">Reset Password</a>
                                        <a className="dropdown-item"
                                           href="fixed-change-password.html">Change Password</a>
                                    </div>

                                    <div className="col border-right">
                                        <div className="dropdown-header">Edit Account</div>
                                        <a className="dropdown-item"
                                           href="fixed-edit-account.html">Edit Account</a>
                                        <a className="dropdown-item"
                                           href="fixed-edit-account-profile.html">Profile &amp; Privacy</a>
                                        <a className="dropdown-item"
                                           href="fixed-edit-account-notifications.html">Email Notifications</a>
                                        <a className="dropdown-item"
                                           href="fixed-edit-account-password.html">Account Password</a>
                                    </div>

                                    <div className="col">
                                        <div className="dropdown-header">Billing</div>
                                        <a className="dropdown-item"
                                           href="fixed-billing.html">Subscription</a>
                                        <a className="dropdown-item"
                                           href="fixed-billing-upgrade.html">Upgrade Account</a>
                                        <a className="dropdown-item"
                                           href="fixed-billing-payment.html">Payment Information</a>
                                        <a className="dropdown-item"
                                           href="fixed-billing-history.html">Payment History</a>
                                        <a className="dropdown-item active"
                                           href="fixed-billing-invoice.html">Invoice</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a href="#"
                               className="nav-link dropdown-toggle"
                               data-toggle="dropdown">
                                <i className="material-icons icon--left">tune</i>
                                Components
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item"
                                   href="fixed-ui-buttons.html">Buttons</a>
                                <a className="dropdown-item"
                                   href="fixed-ui-avatars.html">Avatars</a>
                                <a className="dropdown-item"
                                   href="fixed-ui-forms.html">Forms</a>
                                <a className="dropdown-item"
                                   href="fixed-ui-loaders.html">Loaders</a>
                                <a className="dropdown-item"
                                   href="fixed-ui-tables.html">Tables</a>
                                <a className="dropdown-item"
                                   href="fixed-ui-cards.html">Cards</a>
                                <a className="dropdown-item"
                                   href="fixed-ui-icons.html">Icons</a>
                                <a className="dropdown-item"
                                   href="fixed-ui-tabs.html">Tabs</a>
                                <a className="dropdown-item"
                                   href="fixed-ui-alerts.html">Alerts</a>
                                <a className="dropdown-item"
                                   href="fixed-ui-badges.html">Badges</a>
                                <a className="dropdown-item"
                                   href="fixed-ui-progress.html">Progress</a>
                                <a className="dropdown-item"
                                   href="fixed-ui-pagination.html">Pagination</a>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a href="#"
                               className="nav-link dropdown-toggle"
                               data-toggle="dropdown">
                                <i className="material-icons icon--left">folder</i>
                                Plugins
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item"
                                   href="fixed-ui-plugin-charts.html">Charts</a>
                                <a className="dropdown-item"
                                   href="fixed-ui-plugin-flatpickr.html">Flatpickr</a>
                                <a className="dropdown-item"
                                   href="fixed-ui-plugin-daterangepicker.html">Date Range Picker</a>
                                <a className="dropdown-item"
                                   href="fixed-ui-plugin-dragula.html">Dragula</a>
                                <a className="dropdown-item"
                                   href="fixed-ui-plugin-dropzone.html">Dropzone</a>
                                <a className="dropdown-item"
                                   href="fixed-ui-plugin-range-sliders.html">Range Sliders</a>
                                <a className="dropdown-item"
                                   href="fixed-ui-plugin-quill.html">Quill</a>
                                <a className="dropdown-item"
                                   href="fixed-ui-plugin-select2.html">Select2</a>
                                <a className="dropdown-item"
                                   href="fixed-ui-plugin-nestable.html">Nestable</a>
                                <a className="dropdown-item"
                                   href="fixed-ui-plugin-fancytree.html">Fancy Tree</a>
                                <a className="dropdown-item"
                                   href="fixed-ui-plugin-maps-vector.html">Vector Maps</a>
                                <a className="dropdown-item"
                                   href="fixed-ui-plugin-sweet-alert.html">Sweet Alert</a>
                                <a className="dropdown-item"
                                   href="fixed-ui-plugin-toastr.html">Toastr</a>
                                <a className="dropdown-item disabled"
                                   href="">Disabled</a>
                            </div>
                        </li>

                    </ul>
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a href="fixed-profile.html"
                               className="nav-link dropdown-toggle"
                               data-toggle="dropdown">
                                <i className="material-icons icon--left">view_compact</i>
                                Layouts
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item"
                                   href="compact-billing-invoice.html">Compact</a>
                                <a className="dropdown-item"
                                   href="mini-billing-invoice.html">Mini</a>
                                <a className="dropdown-item"
                                   href="billing-invoice.html">App</a>
                                <a className="dropdown-item"
                                   href="boxed-billing-invoice.html">Boxed</a>
                                <a className="dropdown-item"
                                   href="sticky-billing-invoice.html">Sticky</a>
                                <a className="dropdown-item active"
                                   href="fixed-billing-invoice.html">Fixed</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
      </>
  )
}

export default SubHeadBar