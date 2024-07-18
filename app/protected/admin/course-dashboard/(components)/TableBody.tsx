import Link from "next/link";
import { NextPage } from "next";

const TableBody: NextPage<{ list: any[] }> = ({ list }) => {
  const PASSMARK = 50;

  return (
    <>
      <tbody className="list" id="staff">
        {list &&
          list.map((data: any, key) => (
            <tr key={data.student_id} className="selected">
              
              <td className="text-center js-lists-values-projects small">
                <div className="d-flex align-items-center">
                  <a href="#">
                    <i className="material-icons mr-8pt">edit</i>
                  </a>
                  <a href="#">
                    <i className="material-icons mr-8pt">delete</i>
                  </a>
                  <Link
                    href={{
                      pathname: `/protected/admin/course-dashboard/${data.student_id}/sections`,
                      query: { id: data.student_id, name: data.student_name },
                    }}
                  >
                    <i className="material-icons mr-8pt">visibility</i>
                  </Link>
                </div>
              </td>
              <td className="text-center js-lists-values-projects small">
                {data.student_id}
              </td>
              <td className="text-center js-lists-values-projects small">
                {data.student_name}
              </td>
              <td className="text-center js-lists-values-projects small">
                <div className="progress-container">
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${data.completion_rate}%` }}
                    ></div>
                  </div>
                  <div className="progress-bar-text">
                    {data.completion_rate}%
                  </div>
                </div>
              </td>
              <td className="text-center js-lists-values-projects small">
                {data.time_spent}
              </td>
              <td className="text-center js-lists-values-projects small">
                {data.points_collected}
              </td>
              <td className="text-center js-lists-values-projects small">
                <div className="align-items-center">
                  {data.completion_rate >= PASSMARK ? (
                    <>
                      <a href="#" className="text-success">
                        <i className="material-icons mr-8pt">thumb_up</i>
                      </a>
                      <a href="" className="text-70">
                        <span className="js-lists-values-employer-name text-success">
                          On Track
                        </span>
                      </a>
                    </>
                  ) : (
                    <>
                      <a href="#" className="text-danger">
                        <i className="material-icons mr-8pt">thumb_down</i>
                      </a>
                      <a href="" className="text-70">
                        <span className="js-lists-values-employer-name text-danger">
                          Behind
                        </span>
                      </a>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </>
  );
};

export default TableBody;
