
const Analytics = () => {
  return (
      <>
          <div className="alert alert-soft-warning mb-lg-32pt">
                          <div className="d-flex flex-wrap align-items-start">
                              <div className="mr-8pt">
                                  <i className="material-icons">access_time</i>
                              </div>
                              <div className="flex"
                                style={{ minWidth: '180px' }}>
                                  <small className="text-100">
                                      <strong>Analytics Service Issues.</strong><br/>
                                      <span>You may experience some issues with the Analytics API. Stay up to date by following our status page.</span>
                                  </small>
                              </div>
                        </div>
                    </div>

                    <div className="page-separator">
                        <div className="page-separator__text">Overview</div>
                  </div>
        
                  <div className="row card-group-row mb-lg-8pt">
                            <div className="col-xl-3 col-md-6 card-group-row__col">
                                <div className="card card-group-row__card">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <i className="material-icons icon-32pt text-20 mb-4pt">access_time</i>
                                        <div className="d-flex align-items-center">
                                            <div className="h2 mb-0 mr-3">3.6k</div>
                                            <div className="flex">
                                                <p className="mb-0"><strong>Visits</strong></p>
                                                <p className="text-50 mb-0 mt-n1 d-flex align-items-center">
                                                    31.5%
                                                    <i className="material-icons text-accent ml-4pt icon-16pt">keyboard_arrow_up</i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 card-group-row__col">
                                <div className="card card-group-row__card">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <i className="material-icons icon-32pt text-20 mb-4pt">attach_money</i>
                                        <div className="d-flex align-items-center">
                                            <div className="h2 mb-0 mr-3">$12.3k</div>
                                            <div className="flex">
                                                <p className="mb-0"><strong>Sales</strong></p>
                                                <p className="text-50 mb-0 mt-n1 d-flex align-items-center">
                                                    51.5%
                                                    <i className="material-icons text-accent ml-4pt icon-16pt">keyboard_arrow_up</i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 card-group-row__col">
            <div className="card card-group-row__card card-body"
              style={{ position: 'relative', paddingBottom: 'calc(80px - 1.25rem)', overflow: 'hidden', zIndex: 0 }}>

                                    <div className="d-flex align-items-center">
                                        <div className="h2 mb-0 mr-3">$8.3k</div>
                                        <div className="flex">
                                            <p className="mb-0"><strong>Products</strong></p>
                                            <p className="text-50 mb-0 mt-n1 d-flex align-items-center">
                                                31.5%
                                                <i className="material-icons text-accent ml-4pt icon-16pt">keyboard_arrow_up</i>
                                            </p>
                                        </div>
                                    </div>

              <div className="chart"
                style={{ height: '80px', position: 'absolute', left: 0, right: 0, bottom: 0 }}>
                                        <canvas className="chart-canvas js-update-chart-line"
                                                id="productsChart"
                                                data-chart-hide-axes="true"
                                                data-chart-line-border-color="primary"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 card-group-row__col">
            <div className="card card-group-row__card card-body"
              style={{ position: 'relative', paddingBottom: 'calc(80px - 1.25rem)', overflow: 'hidden', zIndex: 0 }} >

                                    <div className="d-flex align-items-center">
                                        <div className="h2 mb-0 mr-3">$15.0k</div>
                                        <div className="flex">
                                            <p className="mb-0"><strong>Courses</strong></p>
                                            <p className="text-50 mb-0 mt-n1 d-flex align-items-center">
                                                31.5%
                                                <i className="material-icons text-accent ml-4pt icon-16pt">keyboard_arrow_down</i>
                                            </p>
                                        </div>
                                    </div>

              <div className="chart"
                style={{ height: '80px', position: 'absolute', left: 0, right: 0, bottom: 0 }} >
                                        <canvas className="chart-canvas js-update-chart-line-accent"
                                                id="coursesChart"
                                                data-chart-hide-axes="true"
                                                data-chart-line-border-color="teal"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
    </>
  )
}

export default Analytics