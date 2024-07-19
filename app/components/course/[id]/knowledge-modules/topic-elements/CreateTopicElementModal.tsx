"use client";
import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "react-quill/dist/quill.snow.css";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { getCourse } from "@/app/lib/actions/course";
import { getKnowledgeModule } from "@/app/lib/actions/knowledge-module";
import { getKnowledgeTopic } from "@/app/lib/actions/knowledge-topic";
import { wGenerateVideoScriptUrl } from "@/app/lib/actions/endpoints";
import { post } from "@/app/lib/utils";
import { Diagnostic } from "@/app/lib/logger/logger";

function CreateTopicElementModal(props: any) {
  const {
    id: courseId,
    moduleId,
    topicId,
  } = useParams<{
    id: string;
    moduleId: string;
    topicId: string;
  }>();

  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const moduleTitle = searchParams.get("moduleTitle") || "";
  const topicTitle = searchParams.get("topicTitle") || "";
  const submmitRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const elementRef = useRef<HTMLInputElement>(null);
  const [titleError, setTitleError] = useState("");
  const [isLoader, setIsLoader] = useState(false);
  const [elementCodeError, setElementCodeError] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    let isError = false;
    if (titleRef.current!.value === "") {
      setTitleError("Please enter the Element title");
      isError = true;
    }
    if (elementRef.current!.value === "") {
      setElementCodeError("Please enter the Element Code");
      isError = true;
    }

    if (isError) return;
    setIsLoader(true);
    const [course, module, topic] = await Promise.all([
      getCourse(courseId),
      getKnowledgeModule(moduleId),
      getKnowledgeTopic(topicId),
    ]);

    const body = {
      moduleTitle: module.title,
      moduleDescription: module.description,
      topicTitle: topic.name,
      topicId: topic.id,
      topicDescription: topic.description,
      lengthOfVideoScript: topic.lengthOfVideoScript || 50,
      tone: course.videoScriptTone,
      elementTitle: titleRef.current!.value,
      elementCode: elementRef.current!.value,
    };

    console.log("body:", body);
    try {
      const data = await post(
        `${wGenerateVideoScriptUrl}/topicElement/generateSingle`,
        body
      );

      Diagnostic("SUCCESS ON POST, returning", data);
    } catch (err) {
      Diagnostic("ERROR ON POST, returning", err);
      console.error(err);
    }

    const date = new Date().toString();
    router.replace(
      `${pathname}?title=${title}&moduleTitle=${moduleTitle}&topicTitle=${topicTitle}&refreshId=${date}`
    );
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <form onSubmit={(e: any) => onSubmit(e)}>
          <Modal.Header closeButton>
            <Modal.Title>Create Topic Element</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <h5>Topic Element Code/No.</h5>
              <input
                ref={elementRef}
                name="elementCode"
                className="form-control"
                onClick={() => setElementCodeError("")}
              />
            </div>
            {elementCodeError && (
              <div className="text-danger">{elementCodeError}</div>
            )}
            <div className="mt-3">
              <h5>Topic Element</h5>
              <input
                ref={titleRef}
                name="title"
                className="form-control"
                onClick={() => setTitleError("")}
              />
            </div>
            {titleError && <div className="text-danger">{titleError}</div>}
          </Modal.Body>
          <Modal.Footer>
            <input type="submit" hidden ref={submmitRef} />
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
            <button className="btn btn-success">
              {isLoader ? (
                <span className="spinner-border text-success" role="status" />
              ) : (
                <>Submit</>
              )}
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
export default CreateTopicElementModal;
