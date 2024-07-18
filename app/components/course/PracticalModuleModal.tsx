"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useSearchParams } from "next/navigation";
import { createKnowledgeModule } from "@/app/lib/actions/knowledge-module";

function PracticalModuleModal(props: any) {
  const [description, setDescription] = useState("");
  const [createUnitModal, setCreateUnitModal] = useState(false);
  const [titleError, setTitleError] = useState("");
  const [moduleCodeError, setModuleCodeError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const submmitRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const moduleCodeRef = useRef<HTMLInputElement>(null);
  const isPractical = true;
  const createModuleWithParams = createKnowledgeModule.bind(
    null,
    description,
    props.courseId,
    props.title,
    isPractical
  );
  const searchParams = useSearchParams();
  const refreshId = searchParams.get("refreshId");

  useEffect(() => {
    setCreateUnitModal(false);
  }, [refreshId]);

  const submit = () => {
    submmitRef.current?.click();

    if (description === "")
      setDescriptionError("Please enter Module description");
    if (titleRef.current?.value === "")
      setTitleError(
        "Please enter the Max Length of 30 characters for Module Title"
      );
    if (moduleCodeRef.current?.value === "")
      setModuleCodeError(
        "Please enter the Max Length of 10 characters for Module Code/No."
      );
    else {
      props.onHide();
      setCreateUnitModal(true);
    }
  };

  return (
    <>
      <Modal show={createUnitModal} keyboard={false} centered>
        <Modal.Body>
          <div className="d-flex justify-content-center align-items-center flex-column gap-5">
            <div className="spinner-border text-primary" role="status" />
            <p style={{ color: "#252525" }}>Creating...</p>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <form action={createModuleWithParams}>
          <Modal.Header closeButton>
            <Modal.Title>Create Practical Module - {props.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div>
              <h5>Practical Module Code</h5>
              <input
                name="moduleCode"
                className="form-control mb-3"
                placeholder="Enter Module Code. E.g KM01"
                required
                minLength={1}
                maxLength={10}
                onClick={() => setModuleCodeError("")}
                ref={moduleCodeRef}
              />
            </div>
            {moduleCodeError && (
              <div className="text-danger">{moduleCodeError}</div>
            )}
            <div>
              <h5>Title</h5>
              <input
                minLength={10}
                maxLength={30}
                name="title"
                className="form-control mb-3"
                placeholder="Enter your title here..."
                required
                ref={titleRef}
                onClick={() => setTitleError("")}
              />
            </div>
            {titleError && <div className="text-danger">{titleError}</div>}
            <div onClick={() => setDescriptionError("")}>
              <h5>Description</h5>
              <ReactQuill
                value={description}
                onChange={(value) => setDescription(value)}
                style={{ color: "#252525" }}
              />
            </div>
            {descriptionError && (
              <div className="text-danger">{descriptionError}</div>
            )}
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
    </>
  );
}
export default dynamic(() => Promise.resolve(PracticalModuleModal), {
  ssr: false,
});
