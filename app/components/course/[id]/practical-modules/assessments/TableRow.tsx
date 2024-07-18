import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Assessment } from "@/app/interfaces/assessments";
import QuestionsModal from "./QuestionsModal";
import { getQuestions } from "@/app/lib/actions/questions";
import { Modal } from "react-bootstrap";
import { getOptions } from "@/app/lib/actions/options";
import { getRubrics } from "@/app/lib/actions/rubrics";

const TableRow = ({ assessment }: { assessment: Assessment }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const moduleTitle = searchParams.get("moduleTitle") || "";

  const [viewQuizModal, setViewQuestionModal] = useState(false);
  const [questions, setQuestions] = useState<any>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isEditModal, setIsEditModal] = useState(false);

  const arrUrl = pathname.split("/");
  arrUrl.pop();
  const url = arrUrl.join("/");

  const previewQuestions = async (assessmentId: string) => {
    setViewQuestionModal(true);
    const list = await getQuestions(assessmentId);
    console.log("data: ", list);

    let questions = [];

    for (let data of list) {
      let options = [],
        question = { ...data };

      if (data.questionType == "Quiz") options = await getOptions(data.id);
      else options = await getRubrics(data.id);

      question.options = options;
      questions.push(question);
    }
    setViewQuestionModal(false);
    setQuestions(questions);
    setOpenModal(true);
  };

  return (
    <>
      <Modal
        size="sm"
        centered
        show={viewQuizModal}
        onHide={() => setViewQuestionModal(false)}
        backdrop={false}
        keyboard={false}
      >
        <Modal.Body>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#252525",
              gap: "15px",
            }}
          >
            <div className="spinner-grow text-primary" role="status" />
            <p>loading preview...</p>
          </div>
        </Modal.Body>
      </Modal>
      {openModal && (
        <div className="card mb-0">
          <QuestionsModal
            show={openModal}
            onHide={() => setOpenModal(false)}
            data={assessment}
            questions={questions}
          />
        </div>
      )}
      <tr className="selected">
        <td
          style={{ width: "300px" }}
          className="text-center mx-auto text-justify js-lists-values-projects small"
        >
          <div className="d-flex align-items-center ml-5">
            <p>
              <i className="material-icons ">file_present</i>
            </p>
            <p
              className="text-justify"
              style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                width: "350px",
              }}
            >
              {assessment.title}
            </p>
          </div>
        </td>
        <td
          style={{ width: "300px" }}
          className="text-center js-lists-values-projects small"
        >
          <button
            className="btn btn-success rounded-pill px-4 py-2"
            onClick={() => setIsEditModal(true)}
          >
            Edit
          </button>
          <Link
            className="btn btn-success rounded-pill px-4 py-2 ml-2"
            href={`${url}/assessment/${assessment.id}/questions?title=${title}&moduleTitle=${moduleTitle}&topicTitle=${assessment.title}`}
          >
            View
          </Link>
          <button
            onClick={() => previewQuestions(assessment.id!)}
            className="btn btn-success rounded-pill px-4 py-2 ml-2"
          >
            Preview
            <i className="material-icons">open_in_new</i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
