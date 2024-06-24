import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IDocument } from "@/app/interfaces/course-document";
import { paraphraseDocument } from "@/app/lib/actions/document";
import { useEffect, useState } from "react";
import DocumentModal from "./DocumentModal";
import { Button, Modal } from "react-bootstrap";
import EditDocumentModal from "./EditDocumentModal";

const TableRow = ({ document }: { document: IDocument }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const refreshId = searchParams.get("refreshId");
  const [modalShow, setModalShow] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [paraphraseModal, setParaphraseModal] = useState(false);
  const [paraphraseError, setParaphraseError] = useState(false);

  const arrUrl = pathname.split("/");
  arrUrl.pop();
  const url = arrUrl.join("/");

  useEffect(() => {
    setIsEditModal(false);
  }, [refreshId]);

  const paraphrase = async (documentId: string, documentUrl: string) => {
    try {
      setParaphraseModal(true);
      await paraphraseDocument(documentId, documentUrl);
      setParaphraseModal(false);
      router.push(
        `${url}/document/${documentId}/paraphrase-document?title=${title}`
      );
    } catch (err) {
      console.log(err);
      setParaphraseError(true);
    }
  };

  const toPercent = ({
    noOfConfirmedParapharases,
    noOfParapharases,
  }: {
    noOfConfirmedParapharases: number;
    noOfParapharases: number;
  }) => {
    if (noOfConfirmedParapharases == 0 && noOfParapharases == 0) return 0;
    return (noOfConfirmedParapharases / noOfParapharases) * 100;
  };

  return (
    <>
      <Modal
        show={paraphraseModal}
        onHide={() => setParaphraseModal(false)}
        aria-labelledby="contained-modal-title-vcenter"
        backdrop={false}
        keyboard={false}
        centered
        size="lg"
      >
        <Modal.Body>
          {paraphraseError ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                height: "300px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#252525"
                className="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
              <p style={{ color: "#252525", textAlign: "center" }}>
                An error occured while paraphrasing.
              </p>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setParaphraseModal(false), setParaphraseError(false);
                  }}
                >
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={() => paraphrase(document.id, document.fileBlobUrl)}
                >
                  Retry
                </Button>
              </Modal.Footer>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                height: "300px",
              }}
            >
              <div className="spinner-border text-primary" role="status" />
              <p style={{ color: "#252525", textAlign: "center" }}>
                Please wait while we paraphrase your document...
              </p>
            </div>
          )}
        </Modal.Body>
      </Modal>

      <DocumentModal
        documentId={document.id}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <EditDocumentModal
        documentName={document.name}
        documentId={document.id}
        show={isEditModal}
        onHide={() => setIsEditModal(false)}
      />

      <tr className="selected">
        <td
          style={{ width: "300px" }}
          className="text-center mx-auto text-justify js-lists-values-projects small"
        >
          <div className="d-flex align-items-center ml-5">
            <p>
              <i className="material-icons ">file_present</i>
            </p>
            <p
              className="text-justify"
              style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                width: "350px",
              }}
            >
              {document.name}
            </p>
          </div>
        </td>
        <td
          style={{ width: "200px" }}
          className="text-center js-lists-values-projects small"
        >
          <div className="progress-container">
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{
                  width: `${toPercent(document)}%`,
                }}
              ></div>
            </div>
            <div className="progress-bar-text">
              {document.noOfConfirmedParapharases} / {document.noOfParapharases}
            </div>
          </div>
        </td>
        <td
          style={{ width: "300px" }}
          className="text-center js-lists-values-projects small"
        >
          <button
            className={`btn ${
              document.fileBlobUrl && document.fileBlobUrl !== ""
                ? "btn-success"
                : "btn-secondary"
            } rounded-pill px-4 py-2`}
            onClick={() => setModalShow(true)}
            disabled={!(document.fileBlobUrl && document.fileBlobUrl !== "")}
          >
            Preview File
          </button>
        </td>
        <td
          style={{ width: "300px" }}
          className="text-center js-lists-values-projects small"
        >
          <button
            className="btn btn-success rounded-pill px-4 py-2 mr-2"
            onClick={() => setIsEditModal(true)}
          >
            Edit
          </button>

          {document.status === "GeneratedParaphrase" ? (
            <Link
              className="btn btn-success rounded-pill px-4 py-2"
              href={`${url}/document/${document.id}/paraphrase-document?title=${title}`}
            >
              View
            </Link>
          ) : (
            <button
              className={`btn ${
                document.fileBlobUrl && document.fileBlobUrl !== ""
                  ? "btn-success"
                  : "btn-secondary"
              } rounded-pill px-4 py-2`}
              onClick={() => paraphrase(document.id, document.fileBlobUrl)}
              disabled={!(document.fileBlobUrl && document.fileBlobUrl !== "")}
            >
              Paraphase
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

export default TableRow;
