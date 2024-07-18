"use client";
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { updateVideoLink } from "@/app/lib/actions/topic-elements";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function EditUrlModal(props: any) {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const moduleTitle = searchParams.get("moduleTitle") || "";
  const topicTitle = searchParams.get("topicTitle") || "";
  const [url, setUrl] = useState(props.data.url);
  const submmitRef = useRef<HTMLInputElement>(null);
  const [buttonLoader, setButtonLoader] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const submitVideoLink = async () => {
    setButtonLoader(true);
    await updateVideoLink(props.data.id, url);
    const date = new Date().toString();
    router.replace(`${pathname}?title=${title}&moduleTitle=${moduleTitle}&topicTitle=${topicTitle}&refreshId=${date}`);
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <form>
          <Modal.Header closeButton>
            <Modal.Title>Edit Video Url</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div>
              <h5>Video Link</h5>
              <input
                minLength={10}
                className="form-control mb-3"
                placeholder="Enter your Video Link here. E.g https://..."
                name="videoUrl"
                defaultValue={props.data.videoUrl}
                onChange={(e: any) => setUrl(e.target.value)}
              />
            </div>{" "}
          </Modal.Body>
          <Modal.Footer>
            <input type="submit" hidden ref={submmitRef} />
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
            <Button variant="success" onClick={() => submitVideoLink()}>
              {buttonLoader ? (
                <span className="spinner-border text-success" role="status" />
              ) : (
                <>Submit</>
              )}
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
export default dynamic(() => Promise.resolve(EditUrlModal), {
  ssr: false,
});
