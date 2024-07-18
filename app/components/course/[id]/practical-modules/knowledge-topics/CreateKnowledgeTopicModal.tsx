"use client";
import dynamic from "next/dynamic";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams, useSearchParams } from "next/navigation";
import CreateModuleBtn from "./CreateModuleBtn";
import { createKnowledgeTopic } from "@/app/lib/actions/knowledge-topic";
import TopicElements from "./TopicElements";
import { useState } from "react";

function CreateKnowledgeTopicModal(props: any) {
  const { id: courseId, moduleId } = useParams<{
    id: string;
    moduleId: string;
  }>();

  const [closeModal, setCloseModal] = useState(false);
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const moduleTitle = searchParams.get("moduleTitle") || "";
  const isPractical = true;
  const createKnowledgeTopicWithParams = createKnowledgeTopic.bind(
    null,
    courseId,
    moduleId,
    title,
    moduleTitle,
    isPractical
  );

  return (
    <Modal
      {...props}
      size="xl"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form action={createKnowledgeTopicWithParams}>
        <Modal.Header closeButton>
          <Modal.Title>Create Knowledge Topic</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="col-12">
              <div className="form-group row mb-0">
                <div className="col-sm-12">
                  <label htmlFor="">Knowledge Topic Code/No.</label>
                  <input
                    className="w-100 form-control"
                    type="text"
                    name="topicCode"
                    placeholder="Code of Knowledge Topic. E.g KT01..."
                  />
                </div>
                <div className="col-sm-12 py-2">
                  <label htmlFor="">Name</label>
                  <input
                    className="w-100 form-control"
                    type="text"
                    name="name"
                    placeholder="Name of Knowledge Topic ..."
                  />
                </div>
                <div className="col-sm-12 py-2">
                  <label htmlFor="">Description</label>
                  <textarea
                    style={{ height: "100px" }}
                    className="w-100 form-control"
                    name="description"
                    placeholder="Description of Knowledge Topic ..."
                  />
                </div>
              </div>
              <TopicElements />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <CreateModuleBtn setCloseModal={setCloseModal} />
        </Modal.Footer>
      </form>
    </Modal>
  );
}
export default CreateKnowledgeTopicModal;
