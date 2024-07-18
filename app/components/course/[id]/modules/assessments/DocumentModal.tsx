"use client";
import dynamic from "next/dynamic";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { rCourseUrl } from "@/app/lib/actions/endpoints";
const pdfVersion = "3.11.174";
const pdfWorkerUrl = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfVersion}/pdf.worker.js`;
const apiDocUrl = `${rCourseUrl}/Document/PreviewDocument`;

function MyVerticallyCenteredModal(props: any) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Create Unit Standard{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Worker workerUrl={pdfWorkerUrl}>
          <Viewer
            fileUrl={`${apiDocUrl}/${props.documentId}`}
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="success" onClick={props.onHide}>
          Submit
        </Button>
      </Modal.Footer>{" "}
    </Modal>
  );
}
export default dynamic(() => Promise.resolve(MyVerticallyCenteredModal), {
  ssr: false,
});
