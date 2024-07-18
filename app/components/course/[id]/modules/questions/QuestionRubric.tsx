import QuestionRubricDelete from "./QuestionRubricDelete";
import QuestionRubricAdd from "./QuestionRubricAdd";
import { Rubric } from "@/app/interfaces/rubric";

export default function QuestionRubric({ rubrics }: { rubrics?: Rubric[] }) {
  return (
    <>
      {rubrics &&
        rubrics.map((rubric: Rubric) => (
          <QuestionRubricDelete key={rubric.id} rubric={rubric} />
        ))}
      <QuestionRubricAdd />
    </>
  );
}
