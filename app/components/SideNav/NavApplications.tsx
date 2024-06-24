
const NavApplications = () => {
  return (
      <>
          <div className="sidebar-heading">Applications</div>
                        <ul className="sidebar-menu">
                            <li className="sidebar-menu-item">
                                <a className="sidebar-menu-button js-sidebar-collapse" data-toggle="collapse" href="#enterprise_menu">
                                    <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">donut_large</span>
                                    Enterprise
                                    <span className="ml-auto sidebar-menu-toggle-icon"></span>
                                </a>
                                <ul className="sidebar-submenu collapse sm-indent" id="enterprise_menu">
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
                                        <a className="sidebar-menu-button disabled" href="departments.html">
                                            <span className="sidebar-menu-text">Departments</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-menu-item">
                                <a className="sidebar-menu-button" data-toggle="collapse" href="#productivity_menu">
                                    <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">access_time</span>
                                    Productivity
                                    <span className="ml-auto sidebar-menu-toggle-icon"></span>
                                </a>
                                <ul className="sidebar-submenu collapse sm-indent" id="productivity_menu">
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

                                </ul>
                            </li>
                            <li className="sidebar-menu-item">
                                <a className="sidebar-menu-button" data-toggle="collapse" href="#ecommerce_menu">
                                    <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">shopping_cart</span>
                                    eCommerce
                                    <span className="ml-auto sidebar-menu-toggle-icon"></span>
                                </a>
                                <ul className="sidebar-submenu collapse sm-indent" id="ecommerce_menu">
                                    <li className="sidebar-menu-item">
                                        <a className="sidebar-menu-button" href="ecommerce.html">
                                            <span className="sidebar-menu-text">Shop Dashboard</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-menu-item">
                                        <a className="sidebar-menu-button disabled" href="edit-product.html">
                                            <span className="sidebar-menu-text">Edit Product</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-menu-item">
                                <a className="sidebar-menu-button" data-toggle="collapse" href="#messaging_menu">
                                    <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">message</span>
                                    Messaging
                                    <span className="sidebar-menu-badge badge badge-notifications ml-auto badge-accent-dodger-blue">2</span>
                                    <span className="sidebar-menu-toggle-icon"></span>
                                </a>
                                <ul className="sidebar-submenu collapse sm-indent" id="messaging_menu">
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

                            <li className="sidebar-menu-item">
                                <a className="sidebar-menu-button" data-toggle="collapse" href="#cms_menu">
                                    <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">content_copy</span>
                                    CMS
                                    <span className="ml-auto sidebar-menu-toggle-icon"></span>
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
                                <a className="sidebar-menu-button" data-toggle="collapse" href="#account_menu">
                                    <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">account_box</span>
                                    Account
                                    <span className="ml-auto sidebar-menu-toggle-icon"></span>
                                </a>
                                <ul className="sidebar-submenu collapse sm-indent" id="account_menu">
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
                                        <a className="sidebar-menu-button" href="edit-account-profile.html">
                                            <span className="sidebar-menu-text">Profile &amp; Privacy</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-menu-item">
                                        <a className="sidebar-menu-button" href="edit-account-notifications.html">
                                            <span className="sidebar-menu-text">Email Notifications</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-menu-item">
                                        <a className="sidebar-menu-button" href="edit-account-password.html">
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
                                <a className="sidebar-menu-button" data-toggle="collapse" href="#community_menu">
                                    <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">people_outline</span>
                                    Community
                                    <span className="ml-auto sidebar-menu-toggle-icon"></span>
                                </a>
                                <ul className="sidebar-submenu collapse sm-indent" id="community_menu">
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
                        </ul></>
  )
}

export default NavApplications