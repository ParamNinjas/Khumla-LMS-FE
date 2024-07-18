"use client";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";
import EditModuleBtn from "./EditModuleBtn";
import ReactQuill from "react-quill";
import { updateKnowledgeTopic } from "@/app/lib/actions/knowledge-topic";

function EditKnowledgeTopicModal(props: any) {
  const { id: courseId, moduleId } = useParams<{
    id: string;
    moduleId: string;
  }>();
  const [description, setDescription] = useState(props.data.description);
  const searchParams = useSearchParams();
  const [closeEditModal, setCloseEditModal] = useState(false);
  const title = searchParams.get("title") || "";
  const moduleTitle = searchParams.get("moduleTitle") || "";
  const isPractical = true;
  const updateKnowledgeTopicWithParams = updateKnowledgeTopic.bind(
    null,
    props.data.id,
    description,
    courseId,
    moduleId,
    title,
    moduleTitle,
    isPractical
  );

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form action={updateKnowledgeTopicWithParams}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Knowledge Topic</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <h5>Topic Code/No.</h5>
            <input
              className="form-control mb-3"
              placeholder="Enter your Topic Code. E.g KT01"
              name="topicCode"
              defaultValue={props.data.topicCode}
            />
          </div>
          <div>
            <h5>Name</h5>
            <input
              minLength={2}
              className="form-control mb-3"
              placeholder="Enter your title here..."
              name="name"
              defaultValue={props.data.name}
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
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <EditModuleBtn setCloseEditModal={setCloseEditModal} />
        </Modal.Footer>
      </form>
    </Modal>
  );
}
export default EditKnowledgeTopicModal;
