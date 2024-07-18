import { useState } from "react";
import VideoPopUpModal from "./VideoPopUpModal";
import { IParaPhraseResponseObject } from "@/app/interfaces/unit-standard";
import EditTranscriptModal from "./EditTranscriptModal";
import { Modal } from "react-bootstrap";

const TableRow = ({ data }: { data: IParaPhraseResponseObject }) => {
  const [openPreviewModal, setOpenPreviewModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [isCreateModal, setIsCreateModal] = useState(false);
  const [url, setUrl] = useState(data.videoUrl || "")

  return (
    <>
    <Modal 
      size="sm"
      centered
      show={isCreateModal}
      onHide={() => setIsCreateModal(false)}
      backdrop={false}
      keyboard={false}
    >
      <Modal.Body>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#252525', gap: '15px'}}>
        <div className="spinner-grow text-primary" role="status"/>
        <p>
          Creating Quetion...
        </p>
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
        <input
          type="text"
          placeholder="Input link"
          className="rounded text-center"
          defaultValue={data.videoUrl}
          onChange={(evt: any) => setUrl(evt.target.value)}
        />
      </td>
      <td
        style={{ width: "300px" }}
        className="text-center js-lists-values-projects small"
      >
        {data.isSystemGenerated ? (
          <button
            className="btn btn-success rounded-pill px-4 py-2"
            onClick={() => console.log("")}
          >
            Upload Link
            <i className="material-icons ml-1">publish</i>
          </button>
        ) : (
          <button
            className="btn btn-success rounded-pill px-4 py-2 ml-2"
            onClick={() => setOpenEditModal(true)}
          >
            Edit
            <i className="material-icons ml-1">edit</i>
          </button>
        )}
      </td>
      <td
        style={{ width: "300px" }}
        className="text-center js-lists-values-projects small"
      >
        <button
          onClick={() => setOpenPreviewModal(true)}
          className={`btn ${
            url.length === 0 ? "btn-secondary" : "btn-success"
          }  rounded-pill px-4 py-2`}
          disabled={url.length === 0}
        >
          Preview
          <i className="material-icons ml-1">open_in_new</i>
        </button>

        {openEditModal && (
          <div className="card mb-0">
            <EditTranscriptModal
              show={openEditModal}
              onHide={() => setOpenEditModal(false)}
              data={data}
            />
          </div>
        )}

        {openPreviewModal && (
          <div className="card mb-0">
            <VideoPopUpModal
              url={data.videoUrl}
              show={openPreviewModal}
              onHide={() => setOpenPreviewModal(false)}
              data={data}
            />
          </div>
        )}
      </td>
    </tr>
    </>
  );
};

export default TableRow;
