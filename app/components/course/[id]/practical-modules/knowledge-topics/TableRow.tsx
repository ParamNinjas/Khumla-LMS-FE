import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import EditKnowledgeTopicModal from "./EditKnowledgeTopicModal";
import { Modal } from "react-bootstrap";
import DeleteKnowledgeTopicModal from "./DeleteKnowledgeTopicModal";

const TableRow = ({ document }: { document: any }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const moduleTitle = searchParams.get("moduleTitle") || "";

  const refreshId = searchParams.get("refreshId");
  const [isEditModal, setIsEditModal] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isProgress, setIsProgress] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [isGenerated, setIsGenerated] = useState(document.isGenerated);
  const [generateVideoScriptModal, setGenerateVideoScriptModal] =
    useState(false);

  const arrUrl = pathname.split("/");
  arrUrl.pop();
  const url = arrUrl.join("/");
  const { id: courseId, moduleId } = useParams<{
    id: string;
    moduleId: string;
    topicId: string;
  }>();

  useEffect(() => {
    setIsEditModal(false);
  }, [refreshId]);

  return (
    <>
      <EditKnowledgeTopicModal
        documentName={document.name}
        documentId={document.id}
        data={document}
        show={isEditModal}
        onHide={() => setIsEditModal(false)}
      />

      <DeleteKnowledgeTopicModal
        id={document.id}
        url={url}
        show={deleteModal}
        onHide={() => setDeleteModal(false)}
      />

      <Modal
        show={generateVideoScriptModal}
        onHide={() => setGenerateVideoScriptModal(false)}
        centered
        backdrop="static"
      >
        <Modal.Body
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
            height: "300px",
          }}
        >
          <div className="spinner-border text-primary" role="status" />
          <p style={{ color: "#252525" }}>Generating Video Script...</p>
        </Modal.Body>
      </Modal>
      <tr className="selected">
        <td style={{ width: "350px" }} className="py-0">
          <div className="d-flex align-items-center justify-content-center">
            <p
              className="text-center my-2"
              style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                width: "350px",
              }}
            >
              {document.topicCode}
            </p>
          </div>
        </td>
        <td style={{ width: "400px" }} className="py-0">
          <p
            className="text-center my-2"
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              width: "400px",
            }}
          >
            {document.name}
          </p>
        </td>
        <td style={{ width: "500px" }} className="py-0">
          <div className="d-flex justify-content-center">
            <Link href="#" onClick={() => setIsEditModal(true)}>
              <i className="material-icons icon-holder--outline-success rounded-lg mr-8pt">
                edit
              </i>
            </Link>
            <Link
              className=""
              prefetch={true}
              href={`${url}/knowledge-topic/${document.id}/topic-elements?title=${title}&moduleTitle=${moduleTitle}&topicTitle=${document.name}`}
            >
              <i className="material-icons icon-holder--outline-success rounded-lg mr-8pt">
                visibility
              </i>
            </Link>
            <Link href="#" type="button" onClick={() => setDeleteModal(true)}>
              <i className="material-icons icon-holder--outline-success rounded-lg mr-8pt">
                delete
              </i>
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
