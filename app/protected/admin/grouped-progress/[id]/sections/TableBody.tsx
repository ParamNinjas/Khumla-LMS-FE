import { NextPage } from "next";

const TableBody: NextPage<{ list: any[] }> = ({ list }) => {
  const align = {
    section_title: "pl-48pt text-left",
    time_spent: "text-left",
    completion_rate: "text-left",
    no_of_comments: "text-center",
    points_collected: "text-center",
  };

  return (
    <>
      <tbody className="list" id="staff">
        {list &&
          list.map((data: any) => (
            <tr key={data.section_title} className="selected">
              <td className={`${align.section_title} js-lists-values-projects small`}>
                {data.section_title}
              </td>
              <td className={`${align.completion_rate} js-lists-values-projects small`}>
                <div className="progress-container">
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${data.average_completion_rate}%` }}
                    ></div>
                  </div>
                  <div className="progress-bar-text">
                    {data.average_completion_rate}%
                  </div>
                </div>
              </td>
              <td className={`text-center js-lists-values-projects small`}>
                {data.average_time_spent}
              </td>
              <td className={`text-center js-lists-values-projects small`}>
                {data.average_points}
              </td>
              <td className={`${align.completion_rate} js-lists-values-projects small`}>
                <div className="progress-container">
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${data.active_status}%` }}
                    ></div>
                  </div>
                  <div className="progress-bar-text">
                    {data.active_status}%
                  </div>
                </div>
              </td>
              <td className={`${align.no_of_comments} js-lists-values-projects small`}>
                {data.question_launched}
              </td>
              <td className={`${align.points_collected} js-lists-values-projects small`}>
                {data.notes_launched}
              </td>
              <td className={`${align.completion_rate} js-lists-values-projects small`}>
                <div className="progress-container">
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${data.downloaded_content}%` }}
                    ></div>
                  </div>
                  <div className="progress-bar-text">
                    {data.downloaded_content}%
                  </div>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </>
  );
};

export default TableBody;
