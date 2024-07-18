"use client";
import dynamic from "next/dynamic";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";
import EditModuleBtn from "./EditModuleBtn";
import ReactQuill from "react-quill";
import { updateKnowledgeModule } from "@/app/lib/actions/knowledge-module";

function EditKnowledgeTopicModal(props: any) {
  const { id: courseId } = useParams<{
    id: string;
  }>();
  const [description, setDescription] = useState(props.description || "");
  const [titleError, setTitleError] = useState("");
  const [moduleCodeError, setModuleCodeError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const searchParams = useSearchParams();
  const [closeEditModal, setCloseEditModal] = useState(false);
  const title = searchParams.get("title") || "";
  const isPractical = false;
  const updateKnowledgeTopicWithParams = updateKnowledgeModule.bind(
    null,
    props.id,
    description,
    courseId,
    title,
    isPractical
  );

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form
        action={updateKnowledgeTopicWithParams}
        onSubmit={(e) => {
          const form = e.currentTarget;
          const moduleCode = form.moduleCode.value;
          const title = form.title;

          if (moduleCode.length > 10 || title.length > 30) {
            e.preventDefault();
            setModuleCodeError(
              "Please enter the Max Length of 10 characters for Module Code/No."
            );
            setTitleError(
              "Please enter the Max Length of 30 characters for Module Title"
            );
            return;
          } else if (description === "") {
            setDescriptionError("Please enter Module description");
            return;
          }
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Knowledge Module</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <h5>Module Code/No.</h5>
            <input
              maxLength={10}
              className="form-control mb-3"
              placeholder="Enter your Module Code. E.g KM01"
              name="moduleCode"
              defaultValue={props.moduleCode}
              onClick={() => setModuleCodeError("")}
            />
          </div>
          {moduleCodeError && (
            <div className="text-danger">{moduleCodeError}</div>
          )}

          <div>
            <h5>Title</h5>
            <input
              maxLength={80}
              className="form-control mb-3"
              placeholder="Enter your title here..."
              name="title"
              defaultValue={props.name}
              onClick={() => setTitleError("")}
            />
          </div>
          {titleError && <div className="text-danger">{titleError}</div>}
          <div>
            <h5>Description</h5>
            <ReactQuill
              value={description}
              onChange={(value) => setDescription(value)}
              style={{ color: "#252525" }}
            />
          </div>
          {descriptionError && <div className="text-danger">{descriptionError}</div>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <EditModuleBtn setCloseEditModal={setCloseEditModal} />
        </Modal.Footer>
      </form>
    </Modal>
  );
}
export default dynamic(() => Promise.resolve(EditKnowledgeTopicModal), {
  ssr: false,
});
