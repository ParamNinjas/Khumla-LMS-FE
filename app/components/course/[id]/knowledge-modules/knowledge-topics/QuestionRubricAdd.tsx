import { AddBtn } from "./Buttons";

export default function QuestionRubric() {
  return (
    <div
      style={{ columnGap: "20px" }}
      className="form-group d-flex mb-0 align-items-center"
    >
      <input
        style={{ width: "750px" }}
        type="text"
        className="form-control"
        placeholder="Rubric ..."
        name="options[0][description]"
      />
      <input
        style={{ width: "150px" }}
        type="number"
        className="form-control"
        placeholder="Points: E.g. 4"
        name="options[0][label]"
      />
      <AddBtn />
    </div>
  );
}
