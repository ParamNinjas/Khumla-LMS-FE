import { Button } from "react-bootstrap";
import { useFormStatus } from "react-dom";

export default function EditBtn() {
  const formstatus = useFormStatus();

  return (
    <button className="btn btn-success btn-block">
      {formstatus.pending ? (
        <span className="spinner-border text-success" role="status" />
      ) : (
        <>Submit</>
      )}
    </button>
  );
}
