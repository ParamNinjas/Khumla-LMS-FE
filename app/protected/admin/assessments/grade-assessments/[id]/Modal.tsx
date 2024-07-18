import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function MyVerticallyCenteredModal(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modal-header">
        <div className="modal-title h4" id="contained-modal-title-vcenter">
          Submit Grading
        </div>
        <button onClick={props.onHide} type="button" className="btn btn-icon">
          <i className="material-icons">close</i>
        </button>
      </div>
      <Modal.Body>
        <p className="font-size-16pt">
          Are you sure want to submit these Grading?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="success" onClick={props.onHide}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
