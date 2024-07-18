"use client";
import dynamic from "next/dynamic";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams, useSearchParams } from "next/navigation";
import { createDocument } from "@/app/lib/actions/document";
import CreateModuleBtn from "./CreateModuleBtn";
import { useEffect, useState } from "react";

function CreateDocumentModal(props: any) {
  const { id: courseId, moduleId } = useParams<{
    id: string;
    moduleId: string;
  }>();

  const searchParams = useSearchParams();
  const [closeModal, setCloseModal] = useState(false);
  const title = searchParams.get("title") || "";
  const createDocumentWithParams = createDocument.bind(
    null,
    courseId,
    moduleId,
    title
  );

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form action={createDocumentWithParams}>
        <Modal.Header closeButton>
          <Modal.Title>Create Module</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <h5>Name</h5>
            <input
              minLength={10}
              className="form-control mb-3"
              placeholder="Enter your title here..."
              name="name"
            />
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
export default dynamic(() => Promise.resolve(CreateDocumentModal), {
  ssr: false,
});
