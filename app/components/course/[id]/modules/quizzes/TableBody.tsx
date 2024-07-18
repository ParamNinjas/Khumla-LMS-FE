import { IDocument } from "@/app/interfaces/course-document";
import { NextPage } from "next";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const TableBody: NextPage<{ list: any[] }> = ({ list }) => {
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const moduleTitle = searchParams.get("moduleTitle") || "";

  const arrUrl = pathname.split("/");
  arrUrl.pop();
  const url = arrUrl.join("/");

  const toPercent = ({
    noOfQuizzes,
    noOfParapharases,
  }: {
    noOfQuizzes: number;
    noOfParapharases: number;
  }) => {
    if (noOfQuizzes == 0 && noOfParapharases == 0) return 0;
    return (noOfQuizzes / noOfParapharases) * 100;
  };

  return (
    <>
      <tbody className="list" id="staff">
        {list.length > 0 ? (
          list.map((document: IDocument, key) => (
            <tr key={key} className="selected">
              <td
                style={{ width: "300px" }}
                className="text-center mx-auto text-justify js-lists-values-projects small"
              >
                <div className="d-flex align-items-center ml-5">
                  <p className="px-2">
                    <i className="fa-solid fa-question"></i>
                  </p>
                  <p
                    className="text-justify"
                    style={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      width: "350px",
                    }}
                  >
                    {document.name}
                  </p>
                </div>
              </td>
              <td
                style={{ width: "200px" }}
                className="text-center js-lists-values-projects small"
              >
                <div className="progress-container">
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${toPercent(document)}%` }}
                    ></div>
                  </div>
                  {document.noOfQuizzes} / {document.noOfParapharases}
                </div>
              </td>
              <td
                style={{ width: "300px" }}
                className="text-center js-lists-values-projects small"
              >
                <Link
                  className="btn btn-success rounded-pill px-4 py-2"
                  href={`${url}/document/${document.id}/generate-quizzes?title=${title}&moduleTitle=${moduleTitle}&topicTitle=${document.name}`}
                >
                  View
                </Link>
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
