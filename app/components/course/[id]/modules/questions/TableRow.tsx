import { useEffect, useState } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import EditQuestionModal from "./EditQuestionModal";
import { Modal } from "react-bootstrap";
import Link from "next/link";
import { IQuestion } from "@/app/interfaces/questions";

const TableRow = ({ data }: { data: IQuestion }) => {
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const refreshId = searchParams.get("refreshId");

  useEffect(() => {
    setIsEditModal(false);
  },[refreshId]);

  return (
    <>
      <Modal
        size="sm"
        centered
        show={isEditModal}
        onHide={() => setIsEditModal(false)}
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
            <p>Updating Question...</p>
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
            <p className="text-justify">{data.questionType}</p>
          </div>
        </td>
        <td
          style={{ width: "300px" }}
          className="text-center js-lists-values-projects small"
        >
          {data.score}
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
            href={`${pathname}/${data.id}/edit-question?title=${title}&type=${data.questionType}`}
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
            setIsEditModal={setIsEditModal}
          />
        </div>
      )}
    </>
  );
};

export default TableRow;
