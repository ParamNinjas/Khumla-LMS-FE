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

function CreateOptionModal(props: any) {
  const { id, moduleId, documentId } = useParams<{
    id: string;
    moduleId: string;
    documentId: string;
  }>();

  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const [description, setDescription] = useState("");
  const [submitModal, setSubmitModal] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState(false);
  const submmitRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const formStat = useFormStatus();
  const answerTypes = ["Yes", "No"];

  const pathname = usePathname();
  const arrUrl = pathname.split("/");
  arrUrl.pop();
  const url = `${arrUrl.join("/")}/edit-question?title=${title}`;

  const createParaphraseWithParams = createParaphrase.bind(
    null,
    description,
    id,
    moduleId,
    documentId,
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
            <Modal.Title>Create Option</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <h5>Label</h5>
              <input
                minLength={10}
                className="form-control mb-3"
                placeholder="Enter your label here..."
                name="title"
                required
                ref={titleRef}
              />
            </div>
            <div>
              <h5>Description</h5>
              <ReactQuill
                value={description}
                onChange={(value) => setDescription(value)}
                style={{ color: "#252525" }}
              />
            </div>
            <div className="mt-3">
              <h5>Is Correct</h5>
              <select
                id="select01"
                data-toggle="select"
                className="form-control"
                name="documentTone"
              >
                <option selected={false}>Select Question Type</option>
                {answerTypes.map((name: string) => (
                  <option selected={false}>{name}</option>
                ))}
              </select>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <input type="submit" hidden ref={submmitRef} />
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
            <Link className="btn btn-success" href={url} onClick={props.onHide}>
              Submit
            </Link>
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
export default dynamic(() => Promise.resolve(CreateOptionModal), {
  ssr: false,
});
