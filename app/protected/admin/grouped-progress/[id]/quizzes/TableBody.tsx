import { NextPage } from "next";

const TableBody: NextPage<{ list: any[] }> = ({ list }) => {
  const PASSMARK = 50;
  const align = {
    quiz_name: "pl-64pt text-left",
    average_attempts: "text-center",
    average_result: "text-center",
    average_time_spent: "text-center",
  };


  return (
    <>
      <tbody className="list" id="staff">
        {list &&
          list.map((data: any) => (
            <tr key={data.quiz_name} className="selected">
              <td className={`${align.quiz_name} js-lists-values-projects small`} >
                {data.quiz_name}
              </td>
              <td className={`${align.average_attempts} js-lists-values-projects small`} >
                {data.average_attempts}
              </td>
              <td className={`${align.average_result} js-lists-values-projects small`}>
                <div className="align-items-center">
                  {data.average_result >= PASSMARK ? (
                    <a href="#" className="text-success">
                      <i className="material-icons mr-8pt">check_circle</i>
                    </a>
                  ) : (
                    <a href="#" className="text-danger">
                      <i className="material-icons mr-8pt">cancel</i>
                    </a>
                  )}

                  <a href="" className="text-70">
                    <span className="js-lists-values-employer-name">
                      {data.average_result}%
                    </span>
                  </a>
                </div>
              </td>
              <td className={`${align.average_time_spent} js-lists-values-projects small`}>
                {data.average_time_spent}
              </td>
            </tr>
          ))}
      </tbody>
    </>
  );
};

export default TableBody;
