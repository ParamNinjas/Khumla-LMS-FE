
const CurrentUser = () => {
  return (
      <>
        <div className="page-separator">
            <div className="page-separator__text">Current Users</div>
        </div>

        <div className="card mb-lg-32pt">

<div className="table-responsive"
     data-toggle="lists"
     data-lists-sort-by="js-lists-values-employee-name"
     data-lists-values='["js-lists-values-employee-name", "js-lists-values-employer-name", "js-lists-values-projects", "js-lists-values-activity", "js-lists-values-earnings"]'>

    <div className="card-header">
        <form className="form-inline">
            <label className="mr-sm-2 form-label"
                   >Filter by:</label>
            <input type="text"
                   className="form-control search mb-2 mr-sm-2 mb-sm-0"
                   id="inlineFormFilterBy"
                   placeholder="Search ..."/>

            <label className="sr-only"
                   >Role</label>
            <select id="inlineFormRole"
                    className="custom-select mb-2 mr-sm-2 mb-sm-0">
                <option value="All Roles">All Roles</option>
            </select>

            <div className="ml-auto mb-2 mb-sm-0 custom-control-inline mr-0">
                <label className="form-label mb-0"
                       >Active</label>
                <div className="custom-control custom-checkbox-toggle ml-8pt">
                    <input 
                           type="checkbox"
                           id="active"
                           className="custom-control-input"/>
                    <label className="custom-control-label"
                           >Active</label>
                </div>
            </div>
        </form>
    </div>

    <table className="table mb-0 thead-border-top-0 table-nowrap">
        <thead>
            <tr>

                              <th style={{ width: '18px' }}
                    className="pr-0">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox"
                               className="custom-control-input js-toggle-check-all"
                               data-target="#staff"
                               id="customCheckAllstaff"/>
                        <label className="custom-control-label"
                               ><span className="text-hide">Toggle all</span></label>
                    </div>
                </th>

                <th>
                    <a 
                       className="sort"
                       data-sort="js-lists-values-employee-name">Employee</a>
                </th>

                              <th style={{ width: '150px' }}>
                    <a 
                       className="sort"
                       data-sort="js-lists-values-employer-name">Employer</a>
                </th>

                              <th className="text-center"
                                  style={{ width: '48px' }}>
                    <a 
                       className="sort"
                       data-sort="js-lists-values-projects">Projects</a>
                </th>

                              <th style={{ width: '37px' }}>Status</th>

                              <th style={{ width: '120px' }}>
                    <a 
                       className="sort"
                       data-sort="js-lists-values-activity">Activity</a>
                </th>
                              <th style={{ width: '51px' }}>
                    <a 
                       className="sort"
                       data-sort="js-lists-values-earnings">Earnings</a>
                </th>
                              <th style={{ width: '24px' }}
                    className="pl-0"></th>
            </tr>
        </thead>
        <tbody className="list"
               id="staff">

            <tr className="selected">

                <td className="pr-0">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox"
                               className="custom-control-input js-check-selected-row"
                               
                               id="customCheck1_1"/>
                        <label className="custom-control-label"
                               ><span className="text-hide">Check</span></label>
                    </div>
                </td>

                <td>

                                  <div className="media flex-nowrap align-items-center"
                                      style={{ whiteSpace: 'nowrap' }}>
                        <div className="avatar avatar-32pt mr-8pt">

                            <img src="/assets/images/people/110/guy-1.jpg"
                                 alt="Avatar"
                                 className="avatar-img rounded-circle"/>

                        </div>
                        <div className="media-body">

                            <div className="d-flex flex-column">
                                <p className="mb-0"><strong className="js-lists-values-employee-name">Michael Smith</strong></p>
                                <small className="js-lists-values-employee-email text-50"></small>
                            </div>

                        </div>
                    </div>

                </td>

                <td>
                    <div className="d-flex align-items-center">
                        <a href="#"
                           className="text-warning"><i className="material-icons mr-8pt">star</i></a>
                        <a href=""
                           className="text-70"><span className="js-lists-values-employer-name">Black Ops</span></a>
                    </div>
                </td>

                <td className="text-center js-lists-values-projects small">12</td>

                <td>

                    <a href=""
                       className="chip chip-outline-secondary">Admin</a>

                </td>

                <td className="text-50 js-lists-values-activity small">3 days ago</td>
                <td className="js-lists-values-earnings small">$12,402</td>
                <td className="text-right pl-0">
                    <a href=""
                       className="text-50"><i className="material-icons">more_vert</i></a>
                </td>
            </tr>

            <tr>

                <td className="pr-0">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox"
                               className="custom-control-input js-check-selected-row"
                               id="customCheck1_2"/>
                        <label className="custom-control-label"
                               ><span className="text-hide">Check</span></label>
                    </div>
                </td>

                <td>

                                  <div className="media flex-nowrap align-items-center"
                                      style={{ whiteSpace: 'nowrap' }}>
                        <div className="avatar avatar-32pt mr-8pt">

                            <span className="avatar-title rounded-circle">CS</span>

                        </div>
                        <div className="media-body">

                            <div className="d-flex flex-column">
                                <p className="mb-0"><strong className="js-lists-values-employee-name">Connie Smith</strong></p>
                                <small className="js-lists-values-employee-email text-50"></small>
                            </div>

                        </div>
                    </div>

                </td>

                <td>
                    <div className="d-flex align-items-center">
                        <a href="#"
                           className="text-warning"><i className="material-icons mr-8pt">star</i></a>
                        <a href=""
                           className="text-70"><span className="js-lists-values-employer-name">Backend Ltd</span></a>
                    </div>
                </td>

                <td className="text-center js-lists-values-projects small">42</td>

                <td>

                    <a href=""
                       className="chip chip-outline-secondary">User</a>

                </td>

                <td className="text-50 js-lists-values-activity small">1 week ago</td>
                <td className="js-lists-values-earnings small">$1,943</td>
                <td className="text-right pl-0">
                    <a href=""
                       className="text-50"><i className="material-icons">more_vert</i></a>
                </td>
            </tr>

            <tr>

                <td className="pr-0">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox"
                               className="custom-control-input js-check-selected-row"
                               id="customCheck1_3"/>
                        <label className="custom-control-label"
                               ><span className="text-hide">Check</span></label>
                    </div>
                </td>

                <td>

                                  <div className="media flex-nowrap align-items-center"
                                      style={{ whiteSpace: 'nowrap' }}>
                        <div className="avatar avatar-32pt mr-8pt">

                            <img src="/assets/images/people/110/guy-2.jpg"
                                 alt="Avatar"
                                 className="avatar-img rounded-circle"/>

                        </div>
                        <div className="media-body">

                            <div className="d-flex flex-column">
                                <p className="mb-0"><strong className="js-lists-values-employee-name">John Connor</strong></p>
                                <small className="js-lists-values-employee-email text-50"></small>
                            </div>

                        </div>
                    </div>

                </td>

                <td>
                    <div className="d-flex align-items-center">
                        <a href="#"
                           className="text-warning"><i className="material-icons mr-8pt">star</i></a>
                        <a href=""
                           className="text-70"><span className="js-lists-values-employer-name">Frontted</span></a>
                    </div>
                </td>

                <td className="text-center js-lists-values-projects small">31</td>

                <td>

                    <a href=""
                       className="chip chip-outline-secondary">Manager</a>

                </td>

                <td className="text-50 js-lists-values-activity small">2 weeks ago</td>
                <td className="js-lists-values-earnings small">$1,401</td>
                <td className="text-right pl-0">
                    <a href=""
                       className="text-50"><i className="material-icons">more_vert</i></a>
                </td>
            </tr>

            <tr className="selected">

                <td className="pr-0">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox"
                               className="custom-control-input js-check-selected-row"
                               
                               id="customCheck1_4"/>
                        <label className="custom-control-label"
                               ><span className="text-hide">Check</span></label>
                    </div>
                </td>

                <td>

                                  <div className="media flex-nowrap align-items-center"
                                      style={{ whiteSpace: 'nowrap' }}>
                        <div className="avatar avatar-32pt mr-8pt">

                            <span className="avatar-title rounded-circle">LB</span>

                        </div>
                        <div className="media-body">

                            <div className="d-flex flex-column">
                                <p className="mb-0"><strong className="js-lists-values-employee-name">Laza Bogdan</strong></p>
                                <small className="js-lists-values-employee-email text-50"></small>
                            </div>

                        </div>
                    </div>

                </td>

                <td>
                    <div className="d-flex align-items-center">
                        <a href="#"
                           className="text-warning"><i className="material-icons mr-8pt">star</i></a>
                        <a href=""
                           className="text-70"><span className="js-lists-values-employer-name">Frontted</span></a>
                    </div>
                </td>

                <td className="text-center js-lists-values-projects small">44</td>

                <td>

                    <a href=""
                       className="chip chip-outline-secondary">Admin</a>

                </td>

                <td className="text-50 js-lists-values-activity small">3 weeks ago</td>
                <td className="js-lists-values-earnings small">$22,402</td>
                <td className="text-right pl-0">
                    <a href=""
                       className="text-50"><i className="material-icons">more_vert</i></a>
                </td>
            </tr>

        </tbody>
    </table>
</div>

<div className="card-footer p-8pt">

    <ul className="pagination justify-content-start pagination-xsm m-0">
        <li className="page-item disabled">
            <a className="page-link"
               href="#"
               aria-label="Previous">
                <span aria-hidden="true"
                      className="material-icons">chevron_left</span>
                <span>Prev</span>
            </a>
        </li>
        <li className="page-item dropdown">
            <a className="page-link dropdown-toggle"
               data-toggle="dropdown"
               href="#"
               aria-label="Page">
                <span>1</span>
            </a>
            <div className="dropdown-menu">
                <a href=""
                   className="dropdown-item active">1</a>
                <a href=""
                   className="dropdown-item">2</a>
                <a href=""
                   className="dropdown-item">3</a>
                <a href=""
                   className="dropdown-item">4</a>
                <a href=""
                   className="dropdown-item">5</a>
            </div>
        </li>
        <li className="page-item">
            <a className="page-link"
               href="#"
               aria-label="Next">
                <span>Next</span>
                <span aria-hidden="true"
                      className="material-icons">chevron_right</span>
            </a>
        </li>
    </ul>

</div>

</div>
    </>
  )
}

export default CurrentUser