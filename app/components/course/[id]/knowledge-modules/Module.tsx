import Link from "next/link";

type Props = {
  id: string;
  name: string;
  moduleCode: string;
  description: string;
  url: string;
};
import { removeTags } from "@/app/lib/utils";
import EditKnowledgeModuleModal from "./EditKnowledgeModuleModal";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import DeleteKnowledgeModuleModal from "./DeleteKnowledgeModuleModal";

export default function Module({
  id,
  name,
  moduleCode,
  description,
  url,
}: Props) {
  const [isEditModal, setIsEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const searchParams = useSearchParams();
  const refreshId = searchParams.get("refreshId");

  useEffect(() => {
    setIsEditModal(false);
    setDeleteModal(false);
  }, [refreshId]);

  return (
    <div className="card table-responsive my-2">
      <EditKnowledgeModuleModal
        id={id}
        name={name}
        moduleCode={moduleCode}
        description={description}
        url={url}
        show={isEditModal}
        onHide={() => setIsEditModal(false)}
      />

      <DeleteKnowledgeModuleModal
        id={id}
        name={name}
        moduleCode={moduleCode}
        description={description}
        url={url}
        show={deleteModal}
        onHide={() => setDeleteModal(false)}
      />

      <table className="table table-flush table--elevated">
        <thead>
          <tr>
            <th>
              <div className="w-75 d-flex">
                <div
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    maxWidth: "350px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {name}
                </div>
                - (
                <div
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    maxWidth: "150px",
                  }}
                >
                  {moduleCode || "N/A"}
                </div>
                )
              </div>
            </th>
            <th>
              <div className="text-right w-100">
                <div className="row">
                  <div className="col-10">
                    <div className="progress-bar ml-5 my-3 w-100">
                      <div
                        className="progress-bar-fill"
                        style={{ width: "62%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{}} className="py-2">
              <div>
                {removeTags(description || "").slice(0, 200)}
                {description.length > 200 && "..."}
              </div>
            </td>
            <td style={{ width: "300px" }} className="py-2">
              <ViewButton url={url} setIsEditModal={setIsEditModal} setDeleteModal={setDeleteModal} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function ViewButton({
  url,
  setIsEditModal,
  setDeleteModal,
}: {
  url: string;
  setIsEditModal: (isOpen: boolean) => void;
  setDeleteModal: (isOpen: boolean) => void;
}) {
  return (
    <div className="d-flex justify-content-end">
      <div>
        <Link href="#" type="button" onClick={() => setIsEditModal(true)}>
          <i className="material-icons icon-holder--outline-dark rounded-lg">
            edit
          </i>
        </Link>
      </div>
      <div>
        <Link href={url} type="button" className="ml-2">
          <i className="material-icons icon-holder--outline-dark rounded-lg">
            visibility
          </i>
        </Link>
      </div>
      <div>
        <Link
          href="#"
          type="button"
          className="ml-2"
          onClick={() => setDeleteModal(true)}
        >
          <i className="material-icons icon-holder--outline-dark rounded-lg">
            delete
          </i>
        </Link>
      </div>
    </div>
  );
}
