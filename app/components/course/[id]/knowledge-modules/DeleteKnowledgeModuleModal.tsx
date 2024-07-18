"use client";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useState } from "react";
import { deleteKnowledgeModule } from "@/app/lib/actions/knowledge-module";

function DeleteKnowledgeModuleModal(props: any) {
  const [isSpinner, setIsSpinner] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";

  const delKnowledgeModule = async () => {
    setIsSpinner(true);
    await deleteKnowledgeModule(props.id!);
    const date = new Date().toString();
    router.replace(`${pathname}?title=${title}&refreshId=${date}`, {
      scroll: false,
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete Knowledge Module</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h5>Are you sure you want to Delete?</h5>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          No
        </Button>
        <button
          className="btn btn-success"
          onClick={() => delKnowledgeModule()}
        >
          {isSpinner ? (
            <span className="spinner-border text-success" role="status" />
          ) : (
            <>Yes</>
          )}
        </button>
      </Modal.Footer>
    </Modal>
  );
}
export default DeleteKnowledgeModuleModal;
