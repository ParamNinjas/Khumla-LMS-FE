import { Button } from "react-bootstrap";
import { useFormStatus } from "react-dom";

export default function CreateQuestionBtn({ setCloseModal }: any) {
  const formstatus = useFormStatus();

  if (formstatus.data) {
    setCloseModal(true);
  } else {
    setCloseModal(false);
  }

  return (
    <Button variant="success" type="submit">
      {formstatus.pending ? (
        <span className="spinner-border text-success" role="status" />
      ) : (
        <>Submit</>
      )}
    </Button>
  );
}

export function EditBtn() {
  const formstatus = useFormStatus();

  return (
    <>
      {formstatus.pending ? (
        <span className="spinner-border text-success" role="status" />
      ) : (
        <button className="btn" type="submit">
          <i style={{ fontSize: "25px" }} className="material-icons">
            send
          </i>
        </button>
      )}
    </>
  );
}

export function AddBtn() {
  const formstatus = useFormStatus();

  return (
    <>
      <button className="btn btn-success">
        {formstatus.pending ? (
          <span className="spinner-border text-success" role="status" />
        ) : (
          <>Submit</>
        )}
      </button>
    </>
  );
}
