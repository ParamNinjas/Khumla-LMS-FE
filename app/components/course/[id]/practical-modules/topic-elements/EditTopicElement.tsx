"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useParams, useSearchParams } from "next/navigation";
import { updateTopicElement } from "@/app/lib/actions/topic-elements";

function EditTopicElement(props: any) {
  const {
    id: courseId,
    moduleId,
    topicId,
  } = useParams<{
    id: string;
    moduleId: string;
    topicId: string;
  }>();

  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const moduleTitle = searchParams.get("moduleTitle") || "";
  const topicTitle = searchParams.get("topicTitle") || "";

  const [description, setDescription] = useState("");
  const [videoScript, setVideoScript] = useState("");
  const isPractical = true;
  const updateTopicElementWithParams = updateTopicElement.bind(
    null,
    props.data.id,
    description,
    videoScript,
    courseId,
    moduleId,
    topicId,
    title,
    moduleTitle,
    topicTitle,
    isPractical
  );

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form action={updateTopicElementWithParams}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Topic Element</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <h5>Topic Element Code/No.</h5>
            <input
              type="text"
              name="elementCode"
              className="form-control"
              defaultValue={props.data.elementCode}
            />
          </div>
          <div>
            <h5>Topic Element</h5>
            <input
              type="text"
              name="title"
              className="form-control"
              defaultValue={props.data.title}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button
            variant="success"
            onClick={() => {
              props.onHide(), props.setCloseLoader(true);
            }}
            type="submit"
          >
            Confirm
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
export default dynamic(() => Promise.resolve(EditTopicElement), {
  ssr: false,
});
