const Body = () => {
  return (
    <>
      <div className="page-section bg-alt border-bottom-2">
        <div className="container page__container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-6 mb-24pt mb-lg-0">
                  <p className="text-70 mb-0">
                    <strong>Prepared for</strong>
                  </p>
                  <h2>Alexander Watson</h2>
                  <p className="text-50">
                    640 Joy Bypass Suite 448
                    <br />
                    Germany
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="text-70 mb-0">
                    <strong>Prepared by</strong>
                  </p>
                  <h2>Huma Inc.</h2>
                  <p className="text-50">
                    32 Noah Cliffs Suite 626, Romania
                    <br />
                    Tax ID RO18880609
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-lg-right d-flex flex-lg-column mb-24pt mb-lg-0 border-bottom border-lg-0 pb-16pt pb-lg-0">
              <div className="flex">
                <p className="text-70 mb-8pt">
                  <strong>Invoice</strong>
                </p>
                <p className="text-50">
                  15 Mar 2018
                  <br />
                  10003578
                </p>
              </div>
              <div>
                <button className="btn btn-accent">
                  Download{" "}
                  <i className="material-icons icon--right">file_download</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container page__container">
        <form action="fixed-edit-account.html">
          <div className="row">
            <div className="col-lg-9 pr-lg-0">
              <div className="page-section">
                <h4>Invoice Summary</h4>

                <div className="card table-responsive mb-24pt">
                  <table className="table table-flush table--elevated">
                    <thead>
                      <tr>
                        <th>Description</th>
                        <th style={{ width: "60px" }} className="text-right">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p className="mb-0">
                            <strong>Basic Plan - Monthly Subscription</strong>
                          </p>
                          <p className="text-50">
                            For the period of June 20, 2018 to July 20, 2018
                          </p>
                        </td>
                        <td className="text-right">
                          <strong>&dollar;9</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Credit discount</strong>
                        </td>
                        <td className="text-right">
                          <strong>-&dollar;5</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table className="table table-flush">
                    <tfoot>
                      <tr>
                        <td className="text-right text-70">
                          <strong>Subtotal</strong>
                        </td>
                        <td style={{ width: "60px" }} className="text-right">
                          <strong>&dollar;4</strong>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-right text-70">
                          <strong>Total</strong>
                        </td>
                        <td style={{ width: "60px" }} className="text-right">
                          <strong>&dollar;4</strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="px-16pt">
                  <p className="text-70 mb-8pt">
                    <strong>Invoice paid</strong>
                  </p>
                  <div className="media">
                    <div className="media-left mr-16pt">
                      <img src="assets/images/visa.svg" alt="visa" width="38" />
                    </div>
                    <div className="media-body text-50">
                      You don't need to take further action. Your credit card
                      Visa ending in 2819 has been charged on June 20, 2018.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 page-nav">
              <div className="page-section pt-lg-112pt">
                <nav className="nav page-nav__menu">
                  <a className="nav-link" href="fixed-billing.html">
                    Subscription
                  </a>
                  <a className="nav-link" href="fixed-billing-upgrade.html">
                    Upgrade Account
                  </a>
                  <a className="nav-link" href="fixed-billing-payment.html">
                    Payment Information
                  </a>
                  <a className="nav-link" href="fixed-billing-history.html">
                    Payment History
                  </a>
                  <a
                    className="nav-link active"
                    href="fixed-billing-invoice.html"
                  >
                    Invoice
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Body;
