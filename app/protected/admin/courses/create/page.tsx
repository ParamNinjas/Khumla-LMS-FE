import CreateForm from "@/app/components/course/create/form";
import { createCourse } from "@/app/lib/actions/course";

const Body = () => {
  const title = "Calculus";
  const description = "Mathematical Calculation and derivations of formulas";
  const videoScriptTone =
    "Video Script of Mathematical Calculation and derivations of formulas";
  const instructorName = "John Doe";
  const courseLogoUrl =
    "https://static-production.npmjs.com/255a118f56f5346b97e56325a1217a16.svg";
  const thumbnailUrl =
    "https://static-production.npmjs.com/255a118f56f5346b97e56325a1217a16.svg";

  return (
    <>
      <div className="card mb-0">
        <div
          className="table-responsive"
          data-toggle="lists"
          data-lists-sort-by="js-lists-values-employee-name"
          data-lists-values='["js-lists-values-employee-name", "js-lists-values-employer-name", "js-lists-values-projects", "js-lists-values-activity", "js-lists-values-earnings"]'
        >
          <CreateForm
            title={title}
            description={description}
            videoScriptTone={videoScriptTone}
            instructorName={instructorName}
            courseLogoUrl={courseLogoUrl}
            thumbnailUrl={thumbnailUrl}
            action={createCourse}
          />
        </div>
      </div>
    </>
  );
};

export default Body;
