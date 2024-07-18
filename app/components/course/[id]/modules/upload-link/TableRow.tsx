import { useEffect, useState } from "react";
import VideoPopUpModal from "./VideoPopUpModal";
import { IParaPhraseResponseObject } from "@/app/interfaces/unit-standard";
import { useSearchParams } from "next/navigation";
import EditTranscriptModal from "./EditTranscriptModal";
import EditUrlModal from "./EditUrlModal";

const TableRow = ({ data }: { data: IParaPhraseResponseObject }) => {
  const [openPreviewModal, setOpenPreviewModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [openUrlModal, setOpenUrlModal] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const refreshId = searchParams.get("refreshId");

  useEffect(() => {
    setOpenUrlModal(false);
  }, [refreshId]);

  return (
    <>
      <tr className="selected">
        <td
          style={{ width: "500px" }}
          className="text-center mx-auto text-justify js-lists-values-projects small"
        >
          <div
            style={{ marginLeft: "5em" }}
            className="d-flex align-items-center"
          >
            <p
              style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                width: "350px",
              }}
              className="text-justify"
            >
              {data.title}
            </p>
          </div>
        </td>
        <td
          style={{ width: "200px" }}
          className="text-center mx-auto text-justify js-lists-values-projects small"
        >
          <div className="d-flex align-items-center ml-5">
            <p
              className="text-justify"
              style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                width: "170px",
              }}
            >
              {data.videoUrl ? data.videoUrl : "No Video Link"}
            </p>
          </div>
        </td>
        <td
          style={{ width: "300px" }}
          className="text-center js-lists-values-projects small"
        >
          {data.isSystemGenerated ? (
            <button
              className="btn btn-success rounded-pill px-4 py-2"
              onClick={() => setOpenUrlModal(true)}
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
            className={`btn ${
              data.videoUrl && data.videoUrl !== ""
                ? "btn-success"
                : "btn-secondary"
            } rounded-pill px-4 py-2`}
            onClick={() => setOpenPreviewModal(true)}
            disabled={!(data.videoUrl && data.videoUrl !== "")}
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

          {openUrlModal && (
            <div className="card mb-0">
              <EditUrlModal
                show={openUrlModal}
                onHide={() => setOpenUrlModal(false)}
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
