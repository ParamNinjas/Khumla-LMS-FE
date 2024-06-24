import { Button } from "react-bootstrap";
import { useFormStatus } from "react-dom";

export default function CreateModuleBtn({ setCloseModal }: any) {
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
