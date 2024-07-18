
const Checklist = () => {
  return (
      <>
          <div className="row card-group-row mb-lg-8pt">
                            <div className="col-lg card-group-row__col">
                                <div className="card card-group-row__card">
                                    <div className="card-header d-flex align-items-center">
                                        <strong className="flex">Checklist</strong>
                                        <div><a href="#"
                                               data-target="#todo"
                                               className="js-toggle-check-all">Mark All as Completed</a></div>
                                    </div>
                                    <div className="progress rounded-0"
                          style={{ height: '4px' }}>
                                        <div className="progress-bar bg-primary"
                              style={{ width: '40%' }}></div>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-unstyled list-todo"
                                            id="todo">
                                            <li>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input"
                                                           id="customCheck1"/>
                                                    <label className="custom-control-label"
                                                           >Wireframe the CRM application pages</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input"
                                                           id="customCheck2"/>
                                                    <label className="custom-control-label"
                                                           >Design a new page in Sketch</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input"
                                                           id="customCheck3"/>
                                                    <label className="custom-control-label"
                                                           >Quote the custom work</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input"
                                                           id="customCheck4"/>
                                                    <label className="custom-control-label"
                                                           >Interview John for Full-Stack Developer</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input"
                                                           id="customCheck5"/>
                                                    <label className="custom-control-label"
                                                           >Research the success of CRM</label>
                                                </div>
                                            </li>
                                        </ul>
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
                            </div>
                            <div className="col-lg card-group-row__col">
                                <div className="card card-group-row__card">
                                    <div className="card-header d-flex align-items-center">
                                        <strong className="flex">Team Skills</strong>
                                        <a href="#"><i className="material-icons text-50">more_horiz</i></a>
                                    </div>
                                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                        <ul className="list-unstyled list-skills w-100">
                                            <li className="mb-8pt">
                                                <div className="text-50 border-right"><small>HTML</small></div>
                                                <div className="flex">
                                      <div className="progress"
                                          style={{ height: '4px' }}>
                                                        <div className="progress-bar bg-primary"
                                                             role="progressbar"
                                              style={{ width: '61%' }} ></div>
                                                    </div>
                                                </div>
                                                <div className="text-70"><small>61%</small></div>
                                            </li>
                                            <li className="mb-8pt">
                                                <div className="text-50 border-right"><small>CSS</small></div>
                                                <div className="flex">
                                      <div className="progress"
                                          style={{ height: '4px' }}>
                                                        <div className="progress-bar bg-accent"
                                                             role="progressbar"
                                              style={{ width: '39%' }}></div>
                                                    </div>
                                                </div>
                                                <div className="text-70"><small>39%</small></div>
                                            </li>
                                            <li className="mb-8pt">
                                                <div className="text-50 border-right"><small>JavaScript</small></div>
                                                <div className="flex">
                                      <div className="progress"
                                          style={{ height: '4px' }}>
                                                        <div className="progress-bar bg-warning"
                                                             role="progressbar"
                                              style={{ width: '76%' }}
                                                             ></div>
                                                    </div>
                                                </div>
                                                <div className="text-70"><small>76%</small></div>
                                            </li>
                                            <li className="mb-8pt">
                                                <div className="text-50 border-right"><small>Rails</small></div>
                                                <div className="flex">
                                      <div className="progress"
                                          style={{ height: '4px' }}>
                                                        <div className="progress-bar bg-black-50"
                                                             role="progressbar"
                                              style={{ width: '28%' }} ></div>
                                                    </div>
                                                </div>
                                                <div className="text-70"><small>28%</small></div>
                                            </li>
                                            <li className="mb-8pt">
                                                <div className="text-50 border-right"><small>Vue.js</small></div>
                                                <div className="flex">
                                      <div className="progress"
                                          style={{ height: '4px' }}>
                                                        <div className="progress-bar bg-black-20"
                                                             role="progressbar"
                                              style={{ width: '50%' }} ></div>
                                                    </div>
                                                </div>
                                                <div className="text-70"><small>50%</small></div>
                                            </li>
                                            <li className="mb-0">
                                                <div className="text-50 border-right"><small>Laravel</small></div>
                                                <div className="flex">
                                      <div className="progress"
                                          style={{ height: '4px' }}>
                                                        <div className="progress-bar bg-black-20" style={{ width: '60%' }} ></div>
                                                    </div>
                                                </div>
                                                <div className="text-70"><small>60%</small></div>
                                            </li>
                                        </ul>
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
                            </div>
                        </div>
    </>
  )
}

export default Checklist