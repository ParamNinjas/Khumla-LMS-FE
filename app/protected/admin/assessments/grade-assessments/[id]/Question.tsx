import { useState } from "react";

type Props = {
  questionName: string;
  questionDescription: string;
  questionAnswer: string;
  questionScore: number;
};
export default function ({
  questionName,
  questionDescription,
  questionAnswer,
  questionScore,
}: Props) {
  const [grade, setGrade] = useState(0);
  const [isGraded, setIsGraded] = useState(false);

  return (
    <div className="card table-responsive my-24pt">
      <table className="table table-flush table--elevated">
        <thead>
          <tr>
            <th>{questionName}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{questionDescription}</td>
          </tr>
          <tr>
            <td>
              <strong>ANSWER: </strong>
            </td>
            <td></td>
          </tr>
          <tr>
            <td className="py-1">{questionAnswer}</td>
            {isGraded ? (
              <td style={{ width: "170px" }} className="py-1">
                <Grade
                  setIsGraded={setIsGraded}
                  grade={grade}
                  questionScore={questionScore}
                />
              </td>
            ) : (
              <td style={{ width: "200px" }} className="py-1">
                <GradeInput
                  setIsGraded={setIsGraded}
                  setGrade={setGrade}
                  grade={grade}
                  questionScore={questionScore}
                />
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function GradeInput({
  setIsGraded,
  setGrade,
  grade,
  questionScore,
}: {
  setIsGraded: (isGraded: boolean) => void;
  setGrade: (grade: number) => void;
  grade: number;
  questionScore: number;
}) {
  return (
    <div className="d-flex w-100">
      <div className="d-flex w-75">
        <input
          type="number"
          className="form-control"
          defaultValue={grade}
          min="0"
          max={questionScore}
          onChange={(e) => setGrade(+e.target.value)}
        />
        <div className="text-center w-100 py-2"> / {questionScore}</div>
      </div>
      <div>
        <button
          onClick={() => setIsGraded(true)}
          type="button"
          className="btn btn-success"
        >
          <i className="material-icons">check</i>
        </button>
      </div>
    </div>
  );
}

function Grade({
  setIsGraded,
  grade,
  questionScore,
}: {
  setIsGraded: (isGraded: boolean) => void;
  grade: number;
  questionScore: number;
}) {
  return (
    <div className="d-flex w-100">
      <div className="d-flex w-75">
        <div className="text-center w-100 py-2">Score: {grade} / {questionScore}</div>
      </div>
      <div>
        <button
          onClick={() => setIsGraded(false)}
          type="button"
          className="btn btn-outline-success"
        >
          <i className="material-icons">edit</i>
        </button>
      </div>
    </div>
  );
}
