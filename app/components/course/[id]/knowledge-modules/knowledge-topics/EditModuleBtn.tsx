import { Button } from "react-bootstrap";
import { useFormStatus } from "react-dom";

export default function EditModuleBtn({ setCloseEditModal }: any) {
  const formstatus = useFormStatus();

  if (formstatus.data) {
    setCloseEditModal(true);
  } else {
    setCloseEditModal(false);
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
