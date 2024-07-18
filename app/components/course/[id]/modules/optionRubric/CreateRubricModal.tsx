"use client";
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { createRubric } from "@/app/lib/actions/rubrics";

function CreateRubricModal(props: any) {
  const {
    id: courseId,
    moduleId,
    assessmentId,
    questionId,
  } = useParams<{
    id: string;
    moduleId: string;
    assessmentId: string;
    questionId: string;
  }>();

  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const type = searchParams.get("type") || "";
  const [description, setDescription] = useState("");
  const [errorSubmit, setErrorSubmit] = useState(false);
  const submmitRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);

  const createRubricWithParams = createRubric.bind(
    null,
    description,
    courseId,
    moduleId,
    assessmentId,
    questionId,
    title,
    type
  );

  const submit = () => {
    submmitRef.current?.click();
    if (titleRef.current?.value && titleRef.current?.value.length > 5) {
      props.onHide();
      props.setIsCreateRubricModal(true);
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
        <form action={createRubricWithParams}>
          <Modal.Header closeButton>
            <Modal.Title>Create Rubric</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <h5>Label</h5>
              <input
                minLength={10}
                className="form-control mb-3"
                placeholder="Label: E.g 4 points, 2 points, etc..."
                name="label"
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
export default dynamic(() => Promise.resolve(CreateRubricModal), {
  ssr: false,
});
