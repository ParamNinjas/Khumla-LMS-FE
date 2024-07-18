import { NextPage } from "next";

type Props = {
  currentPage: number;
  setCurrentPage: (pageNo: number) => void;
  listLength: number;
  indexOfLastItem: number;
  ITEMSPERPAGE: number;
};

const Pagination: NextPage<Props> = ({
  currentPage,
  setCurrentPage,
  listLength,
  indexOfLastItem,
  ITEMSPERPAGE,
}) => {
  const NOOFPAGES = Math.ceil(listLength / ITEMSPERPAGE);
  const numbers = Array.from({ length: NOOFPAGES }, (_, index) => index + 1);

  return (
    <>
      <div className="card-footer p-8pt">
        <ul className="pagination justify-content-start pagination-xsm m-0">
          <li className={`page-item ${currentPage == 1 ? "disabled" : ""}`}>
            <a
              className={`page-link ${currentPage == 1 ? "" : "text-success"}`}
              onClick={() => setCurrentPage(currentPage - 1)}
              aria-label="Previous"
            >
              <span aria-hidden="true" className="material-icons">
                chevron_left
              </span>
              <span>Prev</span>
            </a>
          </li>
          <li className="page-item dropdown">
            <a
              className="page-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              aria-label="Page"
            >
              <span>{currentPage}</span>
            </a>
            <div className="dropdown-menu">
              {numbers.map((n) => (
                <a
                  onClick={() => setCurrentPage(n)}
                  className="dropdown-item active"
                >
                  {n}
                </a>
              ))}
            </div>
          </li>
          <li
            className={`page-item ${
              indexOfLastItem >= listLength ? "disabled" : ""
            }`}
          >
            <a
              className={`page-link ${indexOfLastItem >= listLength ? "" : "text-success"}`}
              onClick={() => setCurrentPage(currentPage + 1)}
              aria-label="Next"
            >
              <span>Next</span>
              <span aria-hidden="true" className="material-icons">
                chevron_right
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
