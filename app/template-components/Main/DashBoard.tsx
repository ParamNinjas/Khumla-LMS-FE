
const DashBoard = () => {
  return (
      <>
          
          <div className="border-bottom-2 py-32pt position-relative z-1">
    <div className="container-fluid page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
        <div className="flex d-flex flex-column flex-sm-row align-items-center mb-24pt mb-md-0">

            <div className="mb-24pt mb-sm-0 mr-sm-24pt">
                <h2 className="mb-0">Dashboard</h2>

                <ol className="breadcrumb p-0 m-0">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>

                    <li className="breadcrumb-item active">

                        Dashboard

                    </li>

                </ol>

            </div>

            <div className="dropdown">
                <a href=""
                   className="border rounded d-flex align-items-center p-16pt"
                   data-toggle="dropdown"
                   data-caret="false">

                    <div className="avatar avatar-sm mr-8pt">

                        <span className="avatar-title rounded bg-primary">FM</span>

                    </div>

                    <small className="ml-4pt flex">
                        <span className="d-flex align-items-center">
                            <span className="flex d-flex flex-column">
                                <strong className="text-100">FrontendMatter Inc.</strong>
                                <span className="text-50">Select company</span>
                            </span>
                            <i className="material-icons icon-16pt text-50 ml-4pt">arrow_drop_down</i>
                        </span>
                    </small>
                </a>
                <div className="dropdown-menu w-100">
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

        <div className="row"
             role="tablist">
            <div className="col-auto d-flex flex-column">
                <h6 className="m-0">&dollar;12.3k</h6>
                <p className="text-50 mb-0 d-flex align-items-center">
                    Earnings
                    <i className="material-icons text-accent ml-4pt icon-16pt">keyboard_arrow_up</i>
                </p>
            </div>
            <div className="col-auto border-left">
                <h6 className="m-0">264</h6>
                <p className="text-50 mb-0 d-flex align-items-center">
                    Sales
                    <i className="material-icons text-accent ml-4pt icon-16pt">keyboard_arrow_up</i>
                </p>
            </div>
            <div className="col-auto border-left">
                <a href=""
                   className="btn btn-accent">New Report</a>
            </div>
        </div>

    </div>
              </div>
    </>
  )
}

export default DashBoard