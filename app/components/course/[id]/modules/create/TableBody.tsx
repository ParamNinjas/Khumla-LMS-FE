import { NextPage } from "next";
import Button from "./Button";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const TableBody: NextPage<{ list: any[] }> = ({ list }) => {
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  const arrUrl = pathname.split("/");
  arrUrl.pop();
  const url =
    arrUrl.join("/") +
    `/paraphrase-document?title=${title}&step=1`;

  return (
    <>
      <tbody className="list" id="staff">
        {list.length > 0 ? (
          list.map((data: any, key) => (
            <tr key={key} className="selected">
              <td
                style={{ width: "300px" }}
                className="text-center mx-auto text-justify js-lists-values-projects small"
              >
                <div className="d-flex align-items-center ml-5">
                  <p>
                    <i className="material-icons ">file_present</i>
                  </p>
                  <p className="text-justify">{data}</p>
                </div>
              </td>
              <td
                style={{ width: "300px" }}
                className="text-center js-lists-values-projects small"
              >
                <button
                  className="btn btn-success rounded-pill px-4 py-2"                  
                >
                  View
                </button>
              </td>
              <td
                style={{ width: "300px" }}
                className="text-center js-lists-values-projects small"
              >
                <Link
                  className="btn btn-success rounded-pill px-4 py-2"
                  href={url}
                >
                  Paraphase
                </Link>
              </td>
              <td
                style={{ width: "300px" }}
                className="text-center js-lists-values-projects small"
              >
                <button
                  className="btn btn-outline-success rounded-pill px-4 py-2"                  
                >
                  Pending
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr className="selected">
            <td
              style={{ width: "300px" }}
              className="text-center mx-auto text-justify js-lists-values-projects small"
            ></td>
            <td
              style={{ width: "600px" }}
              className="text-center js-lists-values-projects small"
            >
              No Document Files...
            </td>
            <td
              style={{ width: "300px" }}
              className="text-center js-lists-values-projects small"
            ></td>
          </tr>
        )}
      </tbody>
    </>
  );
};

export default TableBody;
