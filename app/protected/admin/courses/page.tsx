import { getCourses } from "@/app/lib/actions/course";
import Courses from "@/components/course/Courses";

const Page = async () => {
  const list = await getCourses();
  return (
    <>
      <div className="card mb-0">
        <div
          className="table-responsive"
          data-toggle="lists"
          data-lists-sort-by="js-lists-values-employee-name"
          data-lists-values='["js-lists-values-employee-name", "js-lists-values-employer-name", "js-lists-values-projects", "js-lists-values-activity", "js-lists-values-earnings"]'
        >
          <Courses list={list} />
        </div>
      </div>
    </>
  );
};

export default Page;
