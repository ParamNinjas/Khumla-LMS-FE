"use client";
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { updateParaphrase } from "@/app/lib/actions/paraphrase";
import { useParams, useSearchParams } from "next/navigation";

function EditOptionModal(props: any) {
  const { id, moduleId, documentId } = useParams<{
    id: string;
    moduleId: string;
    documentId: string;
  }>();

  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const [description, setDescription] = useState(props.data.description);
  const submmitRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const answerTypes = ["Yes", "No"];
  const updateParaphraseWithParams = updateParaphrase.bind(
    null,
    props.data.id,
    description,
    id,
    moduleId,
    documentId,
    title
  );

  const submit = () => {
    submmitRef.current?.click();
    if (titleRef.current?.value && titleRef.current?.value.length > 10) {
      props.onHide();
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form action={updateParaphraseWithParams}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Option</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <h5>Label</h5>
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
            <h5>Description</h5>
            <ReactQuill
              value={description}
              onChange={(value) => setDescription(value)}
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
          <Button variant="success" onClick={() => submit()}>
            Submit
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
export default dynamic(() => Promise.resolve(EditOptionModal), {
  ssr: false,
});
