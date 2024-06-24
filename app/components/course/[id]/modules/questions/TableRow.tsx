import { useState } from "react";
import { IParaPhraseResponseObject } from "@/app/interfaces/unit-standard";
import { useParams, useSearchParams, usePathname } from "next/navigation";
import EditQuestionModal from "./EditQuestionModal";
import { Modal } from "react-bootstrap";
import Link from "next/link";

const TableRow = ({ data }: { data: IParaPhraseResponseObject }) => {
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [publishModal, setPublishModal] = useState(false);
  const [url, setUrl] = useState(data.videoUrl || "");
  const pathname = usePathname();

  const {
    assessmentId,
  } = useParams<{
    id: string;
    moduleId: string;
    assessmentId: string;
  }>();

  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";


  return (
    <>
      <Modal
        size="sm"
        centered
        show={publishModal}
        onHide={() => setPublishModal(false)}
        backdrop={false}
        keyboard={false}
      >
        <Modal.Body>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#252525",
              gap: "15px",
            }}
          >
            <div className="spinner-grow text-primary" role="status" />
            <p>Uploading Link...</p>
          </div>
        </Modal.Body>
      </Modal>

      <tr className="selected">
        <td
          style={{ width: "500px" }}
          className="text-center mx-auto text-justify js-lists-values-projects small"
        >
          <div
            style={{ marginLeft: "10em" }}
            className="d-flex align-items-center"
          >
            <p className="text-justify">{data.title}</p>
          </div>
        </td>
        <td className="text-center js-lists-values-projects small ">
          <div className="d-flex align-items-center">
            <p className="text-justify">Quiz or Long Text</p>
          </div>
        </td>
        <td
          style={{ width: "300px" }}
          className="text-center js-lists-values-projects small"
        >
          30
        </td>
        <td
          style={{ width: "300px" }}
          className="text-center js-lists-values-projects small"
        >
          <button
            onClick={() => setOpenEditModal(true)}
            className="btn btn-success rounded-pill px-4 py-2"
          >
            Edit
            <i className="material-icons ml-1">open_in_new</i>
          </button>
          <Link
            // href={`${pathname}/${data.id}?title=${title}`}
            href={`${pathname}/${assessmentId}/edit-question?title=${title}`}
            className="btn btn-success rounded-pill px-4 py-2 ml-2"
          >
            View
          </Link>
        </td>
      </tr>

      {openEditModal && (
        <div className="card mb-0">
          <EditQuestionModal
            show={openEditModal}
            onHide={() => setOpenEditModal(false)}
            data={data}
          />
        </div>
      )}
    </>
  );
};

export default TableRow;
