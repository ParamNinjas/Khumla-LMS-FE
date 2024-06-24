import Link from "next/link";
import { NextPage } from "next";
import { usePathname } from "next/navigation";

const TableBody: NextPage<{ list: any[] }> = ({ list }) => {
  const pathname = usePathname();
  const align = {
    student_name: "pl-112pt text-left",
    student_surname: "pl-48pt text-left",
    assessment_name: "pl-112pt text-left",
    action: "text-center",
  };

  return (
    <>
      <tbody className="list" id="staff">
        {list &&
          list.map((data: any) => (
            <tr key={data.assessment_id} className="selected">
              <td
                className={`${align.student_name} js-lists-values-projects small`}
              >
                {data.student_name}
              </td>
              <td
                className={`${align.student_surname} js-lists-values-projects small`}
              >
                {data.student_surname}
              </td>
              <td
                className={`${align.assessment_name} js-lists-values-projects small`}
              >
                {data.assessment_name}
              </td>
              <td className={`${align.action} js-lists-values-projects small`}>
                <Link
                  className="chip chip-outline-success"
                  href={`${pathname}/${data.assessment_id}?assessment_name=${data.assessment_name}&name=${data.student_name} ${data.student_surname}`}
                >
                  Grade Assessment
                  <i className="material-icons ">assignment_turned_in</i>
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </>
  );
};

export default TableBody;
