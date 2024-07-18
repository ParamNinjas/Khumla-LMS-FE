import { useState } from "react";
import { IParaPhraseResponseObject } from "@/app/interfaces/unit-standard";
import EditOptionModal from "./EditOptionModal";
import { Modal } from "react-bootstrap";
import EditRubricModal from "./EditRubricModal";
import { Rubric } from "@/app/interfaces/rubric";
import { removeTags } from "@/app/lib/utils";

const TableRow = ({ data }: { data: Rubric }) => {
  const [openOptionModal, setOpenOptionModal] = useState<boolean>(false);
  const [openRubricModal, setOpenRubricModal] = useState<boolean>(false);
  const [publishModal, setPublishModal] = useState(false);

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
            <p className="text-justify">{data.label}</p>
          </div>
        </td>
        <td className="text-center js-lists-values-projects small ">
          <div className="d-flex align-items-center">
            <p className="text-justify">{removeTags(data.description)}</p>
          </div>
        </td>
        <td
          style={{ width: "300px" }}
          className="text-center js-lists-values-projects small"
        >
          <button
            onClick={() => setOpenOptionModal(true)}
            className="btn btn-success rounded-pill px-4 py-2"
          >
            Edit Option
          </button>
          <button
            onClick={() => setOpenRubricModal(true)}
            className="btn btn-success rounded-pill px-4 py-2 ml-2"
          >
            Edit Rubric
          </button>
        </td>
      </tr>

      {openOptionModal && (
        <div className="card mb-0">
          <EditOptionModal
            show={openOptionModal}
            onHide={() => setOpenOptionModal(false)}
            data={data}
          />
        </div>
      )}
      
      {openRubricModal && (
        <div className="card mb-0">
          <EditRubricModal
            show={openRubricModal}
            onHide={() => setOpenRubricModal(false)}
            data={data}
          />
        </div>
      )}
    </>
  );
};

export default TableRow;
