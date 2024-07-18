import { useEffect, useState } from "react";
import EditTopicElement from "./EditTopicElement";
import { Modal } from "react-bootstrap";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import CopyButton from "./CopyIcon";
import DeleteTopicElementModal from "./DeleteTopicElementModal";

const TableRow = ({ data }: { data: any }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [closeLoader, setCloseLoader] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const refreshId = searchParams.get("refreshId");
  const [generateVideoScriptModal, setGenerateVideoScriptModal] =
    useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const {
    id: courseId,
    moduleId,
    topicId,
  } = useParams<{
    id: string;
    moduleId: string;
    topicId: string;
  }>();

  useEffect(() => {
    setGenerateVideoScriptModal(false);
    setCloseLoader(false);
  }, [refreshId]);

  return (
    <>
      <DeleteTopicElementModal
        id={data.id}
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

      <Modal
        show={closeLoader}
        onHide={() => setCloseLoader(false)}
        centered
        backdrop={false}
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
          <p style={{ color: "#252525" }}>Saving Your changes...</p>
        </Modal.Body>
      </Modal>

      <EditTopicElement
        show={openModal}
        onHide={() => {
          setOpenModal(false);
        }}
        data={data}
        setCloseLoader={setCloseLoader}
      />

      <tr className="selected">
        <td style={{ width: "250px" }} className="py-0">
          <div className="d-flex justify-content-center align-items-center">
            <p
              style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                width: "250px",
              }}
              className="text-center my-2"
            >
              {data.elementCode}
            </p>
          </div>
        </td>
        <td style={{ width: "250px" }} className="py-0">
          <div className="d-flex justify-content-center align-items-center">
            <p
              style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                width: "250px",
              }}
              className="text-center my-2"
            >
              {data.title}
            </p>
          </div>
        </td>
        <td style={{ width: "200px" }} className="py-0">
          <div className="text-center">
            <CopyButton textToCopy={data.videoScript} />
          </div>
        </td>
        <td style={{ cursor: "pointer", width: "230px" }} className="py-0">
          <div className="text-center">
            <div>
              <i
                className="material-icons icon-holder--outline-success rounded-lg mr-8pt"
                onClick={() => setOpenModal(true)}
              >
                edit
              </i>
              <i
                className="material-icons icon-holder--outline-success rounded-lg mr-8pt"
                onClick={() => setDeleteModal(true)}
              >
                delete
              </i>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};
export default TableRow;
