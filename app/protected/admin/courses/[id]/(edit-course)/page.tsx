import EditForm from "@/app/components/course/[id]/editForm";
import { updateCourse, getCourse } from "@/app/lib/actions/course";

export default async function Course({ params }: { params: { id: string } }) {
  const course = await getCourse(params.id);
  const updateUserWithId = updateCourse.bind(null, params.id)

  return (
    <>
      <div className="card mt-3">
        <div
          className="table-responsive"
          data-toggle="lists"
          data-lists-sort-by="js-lists-values-employee-name"
          data-lists-values='["js-lists-values-employee-name", "js-lists-values-employer-name", "js-lists-values-projects", "js-lists-values-activity", "js-lists-values-earnings"]'
        >
          {course && (
            <EditForm
              title={course.title}
              description={course.description}
              videoScriptTone={course.videoScriptTone}
              instructorName={course.instructorName}
              courseLogoUrl={course.courseLogoUrl}
              thumbnailUrl={course.thumbnailUrl}
              action={updateUserWithId}
            />
          )}
        </div>
      </div>
    </>
  );
}
