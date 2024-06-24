import dynamic from "next/dynamic";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function VideoPopUpModal(props: any) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.data.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <div
          className="mdk-drawer-layout__content page-content"
          style={{ transform: "translate3d(0px, 0px, 0px)" }}
        >
          <div className="card">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src={props.data.videoUrl}
                allowFullScreen={true}
              />
            </div>
            <div className="card-body">
              <label className="form-label">Description</label>
              <p>
                {props.data.description}
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
       
      </Modal.Footer>
    </Modal>
  );
}
export default dynamic(() => Promise.resolve(VideoPopUpModal), {
  ssr: false,
});
