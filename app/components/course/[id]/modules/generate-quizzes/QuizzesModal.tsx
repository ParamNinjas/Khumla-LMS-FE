import dynamic from "next/dynamic";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function QuizzesModal(props: any) {

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
          style={{ transform: "translate3d(0px, 0px, 0px)", color: '#252525' }}
        >
          {props.quizzes.map((data: any) => (
            <div key={data.id} className="mb-3">
              <div style={{ fontSize: "16px", fontWeight: "500" }}>
                {data.description}
              </div>
              <div className="d-flex flex-column">
                {data.options.map((option: any) => (
                  <div className="d-flex flex-row" style={{ fontSize: "14px" }}>
                    <div className="pr-2">
                      <input className="mr-1" type="radio" name={data.id} />
                      {option.label}.
                    </div>
                    <div style={{ width: "700px" }}>{option.description}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: "14px" }}>
                <b>Answer:</b> {data.answer}
              </div>
            </div>
          ))}
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
export default dynamic(() => Promise.resolve(QuizzesModal), {
  ssr: false,
});
