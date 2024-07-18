"use client";
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useParams, useSearchParams } from "next/navigation";
import { updateQuestion } from "@/app/lib/actions/questions";

function EditQuestionModal(props: any) {
  const { id: courseId, moduleId, assessmentId } = useParams<{
    id: string;
    moduleId: string;
    assessmentId: string;
  }>();

  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const [description, setDescription] = useState(props.data.description);
  const submmitRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const questionTypes = ["Long Text", "Quiz"];
  const updateQuestionWithParams = updateQuestion.bind(
    null,
    props.data.id,
    description,
    courseId,
    moduleId,
    assessmentId,
    title
  )

  const submit = () => {
    submmitRef.current?.click();
    if (titleRef.current?.value && titleRef.current?.value.length > 5) {
      props.onHide();
      props.setIsEditModal(true);
    } 
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form action={updateQuestionWithParams}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Question</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <h5>Title</h5>
            <input
              minLength={10}
              className="form-control mb-3"
              placeholder="Enter your title here..."
              name="title"
              required
              defaultValue={props.data.title}
              ref={titleRef}
            />
          </div>
          <div>
            <h5>Question Description</h5>
            <ReactQuill
              value={description}
              onChange={(value) => setDescription(value)}
            />
          </div>
          <div className="mt-3">
            <h5>Question Type</h5>
            <select
              id="select01"
              data-toggle="select"
              className="form-control"
              name="questionType"
              defaultValue={props.data.questionType}
            >
              <option selected={false}>Select Question Type</option>
              {questionTypes.map((name: string) => (
                <option selected={false}>{name}</option>
              ))}
            </select>
          </div>

          <div className="mt-3">
            <h5>Score</h5>
            <input
              className="form-control mb-3"
              placeholder="Enter Question Score..."
              name="score"
              type="number"
              defaultValue={props.data.score}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <input type="submit" hidden ref={submmitRef} />
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="success" onClick={() => submit()}>
            Submit
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
export default dynamic(() => Promise.resolve(EditQuestionModal), {
  ssr: false,
});
