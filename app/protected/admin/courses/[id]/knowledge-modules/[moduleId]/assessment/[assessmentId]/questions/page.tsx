"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Modal } from "react-bootstrap";
import { getQuestions } from "@/app/lib/actions/questions";
import Question from "@/components/course/[id]/modules/questions/Question";
import { IQuestion } from "@/app/interfaces/questions";
import QuestionAdd from "@/components/course/[id]/modules/questions/QuestionAdd";

const Body = ({ params }: { params: { assessmentId: string } }) => {
  const assessmentId = params.assessmentId;
  const [list, setList] = useState([]);
  const searchParams = useSearchParams();
  const refreshId = searchParams.get("refreshId");
  const [isCreateModal, setIsCreateModal] = useState(false);

  const fetchQuestions = async () => {
    const response = await getQuestions(assessmentId);
    setList(response);
  };

  useEffect(() => {
    fetchQuestions();
    setIsCreateModal(false);
  }, [refreshId]);

  return (
    <>
      <Modal
        size="sm"
        centered
        show={isCreateModal}
        onHide={() => setIsCreateModal(false)}
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
            <p>Creating Question...</p>
          </div>
        </Modal.Body>
      </Modal>
      <div className="page-separator mb-4">
        <div className="page-separator__text">Questions</div>
      </div>

      <QuestionAdd />

      {list &&
        list.map((question: IQuestion) => (
          <Question key={question.id} question={question} />
        ))}
    </>
  );
};

export default Body;
