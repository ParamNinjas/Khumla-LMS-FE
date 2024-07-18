"use client";
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { createParaphrase } from "@/app/lib/actions/paraphrase";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { createQuestion } from "@/app/lib/actions/questions";
import CreateQuestionBtn from "./Buttons";

function CreateQuestionModal(props: any) {
  const {
    id: courseId,
    moduleId,
    assessmentId,
  } = useParams<{
    id: string;
    moduleId: string;
    assessmentId: string;
  }>();

  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const [description, setDescription] = useState("");
  const [submitModal, setSubmitModal] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState(false);
  const submmitRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const formStat = useFormStatus();
  const questionTypes = ["Long Text", "Quiz"];

  const pathname = usePathname();
  const arrUrl = pathname.split("/");
  arrUrl.pop();
  const url = `${arrUrl.join(
    "/"
  )}/document/${assessmentId}/questions?title=${title}`;

  const createParaphraseWithParams = createQuestion.bind(
    null,
    description,
    courseId,
    moduleId,
    assessmentId,
    title
  );

  const submit = () => {
    setSubmitModal(true);
    console.log("form stat:", formStat);

    submmitRef.current?.click();
    if (titleRef.current?.value && titleRef.current?.value.length > 10) {
      setErrorSubmit(false);
      setTimeout(() => {
        setSubmitModal(false);
      }, 2000);
      props.onHide();
    } else {
      setTimeout(() => {
        setSubmitModal(false);
        setErrorSubmit(true);
      }, 3000);
    }
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <form action={createParaphraseWithParams}>
          <Modal.Header closeButton>
            <Modal.Title>Create Question asdffasd</Modal.Title>
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
                ref={titleRef}
              />
            </div>
            <div>
              <h5>Question Description</h5>
              <ReactQuill
                value={description}
                onChange={(value) => setDescription(value)}
                style={{ color: "#252525" }}
              />
            </div>
            <div className="mt-3">
              <h5>Question Type</h5>
              <select
                id="select01"
                data-toggle="select"
                className="form-control"
                name="questionType"
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
                required
                type="number"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <input type="submit" hidden ref={submmitRef} />
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
            <CreateQuestionBtn />
          </Modal.Footer>
        </form>
      </Modal>

      <Modal
        size="sm"
        centered
        show={submitModal}
        onHide={() => setSubmitModal(false)}
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
            {errorSubmit ? (
              <div className="spinner-grow text-danger" role="status" />
            ) : (
              <div className="spinner-grow text-primary" role="status" />
            )}
            {errorSubmit ? (
              <p>Cannot create with empty field(s)</p>
            ) : (
              <p>Creating Transcript...</p>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default dynamic(() => Promise.resolve(CreateQuestionModal), {
  ssr: false,
});
