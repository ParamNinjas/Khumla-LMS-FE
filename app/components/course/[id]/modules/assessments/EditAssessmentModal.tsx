"use client";
import dynamic from "next/dynamic";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams, useSearchParams } from "next/navigation";
import { updateDocument } from "@/app/lib/actions/document";
import { useState, useEffect } from "react";
import { CreateAssesssmentBtn, EditAssesssmentBtn } from "./Buttons";
import { updateAssessment } from "@/app/lib/actions/assessments";

function EditAssessmentModal(props: any) {
  const { id: courseId, moduleId } = useParams<{
    id: string;
    moduleId: string;
  }>();

  const searchParams = useSearchParams();
  const [closeEditModal, setCloseEditModal] = useState(false);
  const title = searchParams.get("title") || "";
  const updateAssessmentWithParams = updateAssessment.bind(
    null,
    props.assessmentId,
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
      <form action={updateAssessmentWithParams}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Assessment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <h5>Title</h5>
            <input
              minLength={10}
              className="form-control mb-3"
              placeholder="Enter your title here..."
              name="title"
              defaultValue={props.title}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <EditAssesssmentBtn />
        </Modal.Footer>
      </form>
    </Modal>
  );
}
export default dynamic(() => Promise.resolve(EditAssessmentModal), {
  ssr: false,
});
