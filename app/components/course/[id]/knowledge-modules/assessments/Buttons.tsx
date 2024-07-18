import { Button } from "react-bootstrap";
import { useFormStatus } from "react-dom";

export function CreateAssesssmentBtn() {
  const formstatus = useFormStatus();

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

export function EditAssesssmentBtn() {
  const formstatus = useFormStatus();

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
