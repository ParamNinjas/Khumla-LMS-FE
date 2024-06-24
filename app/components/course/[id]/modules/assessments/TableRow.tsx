import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import DocumentModal from "./DocumentModal";
import EditAssessmentModal from "./EditAssessmentModal";
import { Assessment } from "@/app/interfaces/assessments";

const TableRow = ({ assessment }: { assessment: Assessment }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const refreshId = searchParams.get("refreshId");
  const [modalShow, setModalShow] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);

  const arrUrl = pathname.split("/");
  arrUrl.pop();
  const url = arrUrl.join("/");

  useEffect(() => {
    setIsEditModal(false);
  }, [refreshId]);

  return (
    <>
      <DocumentModal
        documentId={assessment.id}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <EditAssessmentModal
        title={assessment.title}
        assessmentId={assessment.id}
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
              {assessment.title}
            </p>
          </div>
        </td>
        <td
          style={{ width: "300px" }}
          className="text-center js-lists-values-projects small"
        >
          <Link
            className="btn btn-success rounded-pill px-4 py-2"
            href={`${url}/assessment/${assessment.id}/questions?title=${title}`}
          >
            View
          </Link>
          <button
            className="btn btn-success rounded-pill px-4 py-2 ml-2"
            onClick={() => setIsEditModal(true)}
          >
            Edit
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
