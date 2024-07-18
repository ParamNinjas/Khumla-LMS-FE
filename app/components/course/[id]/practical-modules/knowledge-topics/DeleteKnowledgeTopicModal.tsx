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
import { deleteKnowledgeTopic } from "@/app/lib/actions/knowledge-topic";

function DeleteKnowledgeTopicModal(props: any) {
  const { id: courseId } = useParams<{
    id: string;
  }>();
  const [isSpinner, setIsSpinner] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const moduleTitle = searchParams.get("moduleTitle") || "";

  const delKnowledgeTopic = async () => {
    setIsSpinner(true);
    await deleteKnowledgeTopic(props.id!);
    const date = new Date().toString();
    router.replace(
      `${pathname}?title=${title}&moduleTitle=${moduleTitle}&refreshId=${date}`,
      {
        scroll: false,
      }
    );
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete Knowledge Topic</Modal.Title>
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
        <button className="btn btn-success" onClick={() => delKnowledgeTopic()}>
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
export default DeleteKnowledgeTopicModal;
