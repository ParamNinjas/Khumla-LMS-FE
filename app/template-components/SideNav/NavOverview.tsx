
const NavOverview = () => {
  return (
      <>
          <div className="sidebar-heading">Overview</div>
                        <ul className="sidebar-menu">
                            <li className="sidebar-menu-item active">
                                <a className="sidebar-menu-button" href="index.html">
                                    <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">insert_chart_outlined</span>
                                    <span className="sidebar-menu-text">Dashboard</span>
                                </a>
                            </li>
                            <li className="sidebar-menu-item">
                                <a className="sidebar-menu-button" data-toggle="collapse" href="#dashboards_menu">
                                    <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">link</span>
                                    Shortcuts
                                    <span className="ml-auto sidebar-menu-toggle-icon"></span>
                                </a>
                                <ul className="sidebar-submenu collapse sm-indent" id="dashboards_menu">
                                    <li className="sidebar-menu-item active">
                                        <a className="sidebar-menu-button" href="index.html">
                                            <span className="sidebar-menu-text">Analytics Dashboard</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-menu-item">
                                        <a className="sidebar-menu-button" href="analytics.html">
                                            <span className="sidebar-menu-text">Analytics 2 Dashboard</span>
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
                                    <li className="sidebar-menu-item">
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
                                        <a className="sidebar-menu-button disabled" href="ui-card-metrics.html">
                                            <span className="sidebar-menu-text">Card Metrics</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
    </>
  )
}

export default NavOverview