"use client";
import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "react-quill/dist/quill.snow.css";
import { useParams, useSearchParams } from "next/navigation";
import { createGenerateTopicElement } from "@/app/lib/actions/topic-elements";
import { AddBtn } from "./Buttons";

function CreateTopicElementModal(props: any) {
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
  const submmitRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const isPractical = false;
  const createTopicElementWithParams = createGenerateTopicElement.bind(
    null,
    courseId,
    moduleId,
    topicId,
    title,
    moduleTitle,
    topicTitle,
    isPractical
  );

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <form action={createTopicElementWithParams}>
          <Modal.Header closeButton>
            <Modal.Title>Create Topic Element</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <h5>Topic Element Code/No.</h5>
              <input
                ref={titleRef}
                type="text"
                name="elementCode"
                className="form-control"
              />
            </div>
            <div className="mt-3">
              <h5>Topic Element</h5>
              <input
                ref={titleRef}
                type="text"
                name="title"
                className="form-control"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <input type="submit" hidden ref={submmitRef} />
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
            <AddBtn />
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
export default CreateTopicElementModal;
