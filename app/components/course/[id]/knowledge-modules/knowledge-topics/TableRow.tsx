import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import EditKnowledgeTopicModal from "./EditKnowledgeTopicModal";
import DeleteKnowledgeTopicModal from "./DeleteKnowledgeTopicModal";
import {
  generateVideoScript,
  getKnowledgeTopic,
} from "@/app/lib/actions/knowledge-topic";
import { getCourse } from "@/app/lib/actions/course";
import { getKnowledgeModule } from "@/app/lib/actions/knowledge-module";
import { getKnowledgeElements } from "@/app/lib/actions/topic-elements";
import { post } from "@/app/lib/utils";
import { wGenerateVideoScriptUrl } from "@/app/lib/actions/endpoints";

const TableRow = ({ document }: { document: any }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const moduleTitle = searchParams.get("moduleTitle") || "";

  const refreshId = searchParams.get("refreshId");
  const [isEditModal, setIsEditModal] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isProgress, setIsProgress] = useState(false);
  const [isTryAgain, setIsTryAgain] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [isGenerated, setIsGenerated] = useState(document.isGenerated);

  const arrUrl = pathname.split("/");
  arrUrl.pop();
  const url = arrUrl.join("/");
  const { id: courseId, moduleId } = useParams<{
    id: string;
    moduleId: string;
    topicId: string;
  }>();

  useEffect(() => {
    setIsEditModal(false);
  }, [refreshId]);

  const generateVideoScriptWithProgress = async (e: any) => {
    try {
      const [course, module, topic, topicElements] = await Promise.all([
        getCourse(courseId),
        getKnowledgeModule(moduleId),
        getKnowledgeTopic(document.id),
        getKnowledgeElements(document.id),
      ]);

      const acc = Math.floor(100 / topicElements.length);
      let total = 0;
      for (const element of topicElements) {
        const body = {
          moduleTitle: module.title,
          moduleDescription: module.description,
          topicTitle: topic.name,
          topicId: topic.id,
          topicDescription: topic.description,
          lengthOfVideoScript: topic.lengthOfVideoScript,
          tone: course.videoScriptTone,
          elementTitle: element.title,
          elementCode: element.elementCode,
          elementId: element.id,
        };

        await post(
          `${wGenerateVideoScriptUrl}/topicElement/generateUpdateSingle`,
          body
        );
        total += acc;
        setProgress(total);
      }

      setTimeout(() => {
        setIsProgress(false);
        setIsGenerated(true);
      }, 5000);
    } catch (err) {
      setIsTryAgain(true);
      console.error(err);
    }
  };

  /* const generateVideoScriptWithProgress = async (e: any) => {
    e.preventDefault();
    const [course, module, topic, topicElements] = await Promise.all([
      getCourse(courseId),
      getKnowledgeModule(moduleId),
      getKnowledgeTopic(document.id),
      getKnowledgeElements(document.id),
    ]);

    for (const element of topicElements) {
      const body = {
        moduleTitle: module.title,
        moduleDescription: module.description,
        topicTitle: topic.name,
        topicId: topic.id,
        topicDescription: topic.description,
        lengthOfVideoScript: topic.lengthOfVideoScript,
        tone: course.videoScriptTone,
        elementTitle: element.title,
        elementCode: element.elementCode,
        elementId: element.id,
      };

      await post(
        `${wGenerateVideoScriptUrl}/topicElement/generateUpdateSingle`,
        body
      ); 
    }

    const body = { ...topic, isGenerated: true };
    await put(`${wCourseUrl}/KnowledgeTopics/UpdateKnowledgeTopic`, body);


    const data = JSON.stringify({
      documentId: document.id,
      documentTitle: document.title,
      courseId,
      moduleId,
      title,
    });

    setProgress(25);
    fetch("/api/generate-video-script", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((response) => {
        const reader = response.body?.getReader();
        if (!reader) {
          throw new Error("Response body is null");
        }
        // Get the size of the blob
        let loaded = 0,
          estimatedTotal = 0;

        const push = async () => {
          if (!reader) {
            throw new Error("Reader is undefined");
          }
          const { done, value } = await reader.read();
          if (done) {
            console.log("Done");
            return;
          }

          loaded += value.length;
          estimatedTotal += value.length; // Estimate total size incrementally

          const progress = Math.min(
            Math.round((loaded / estimatedTotal) * 100),
            100
          );
          setProgress(progress);
          push();
        };

        push().catch((err) => {
          console.error("Stream reading error:", err);
          throw err;
        });

        setProgress(100);
        setTimeout(() => {
          setIsProgress(false);
          setIsGenerated(true);
        }, 5000);
      })
      .catch((error) => {
        setIsTryAgain(true);
        console.log("Error Generating Video Script");
      });
  }; */

  return (
    <>
      <EditKnowledgeTopicModal
        documentName={document.name}
        documentId={document.id}
        data={document}
        show={isEditModal}
        onHide={() => setIsEditModal(false)}
      />

      <DeleteKnowledgeTopicModal
        id={document.id}
        url={url}
        show={deleteModal}
        onHide={() => setDeleteModal(false)}
      />

      <tr className="selected">
        <td style={{ width: "250px" }} className="py-0">
          <div className="d-flex align-items-center justify-content-center">
            <p
              className="text-center my-2"
              style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                width: "250px",
              }}
            >
              {document.topicCode}
            </p>
          </div>
        </td>
        <td style={{ width: "300px" }} className="py-0">
          <p
            className="text-center my-2"
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              width: "300px",
            }}
          >
            {document.name}
          </p>
        </td>
        <td style={{ width: "400px" }} className="py-0">
          <div className="text-center my-2 w-100">
            {isProgress ? (
              <button
                style={{ width: "185px" }}
                type="button"
                className="btn btn-outline-success btn-sm rounded-pill py-1 px-3 w-100"
              >
                <div className="progress-container w-100 my-1">
                  <div className="progress-bar w-100">
                    <div
                      className="progress-bar-fill"
                      style={{
                        width: `${progress}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </button>
            ) : (
              <button
                style={{ width: "185px" }}
                type="button"
                onClick={(e) => {
                  try {
                    e.preventDefault();
                    setIsProgress(true);
                    generateVideoScriptWithProgress(e);
                  } catch (e: any) {
                    console.log("Error Generating Video Script");
                  }
                }}
                className="btn btn-outline-success btn-sm rounded-pill py-1 px-3 w-100"
              >
                {isTryAgain
                  ? "Network Error: Try Again"
                  : isGenerated
                  ? "Regenerate"
                  : "Generate Video Script"}
              </button>
            )}
            {isTryAgain}
          </div>
        </td>
        <td style={{ width: "700px" }} className="py-0">
          <div className="d-flex justify-content-center">
            <Link href="#" onClick={() => setIsEditModal(true)}>
              <i className="material-icons icon-holder--outline-success rounded-lg mr-8pt">
                edit
              </i>
            </Link>
            <Link
              className=""
              prefetch={true}
              href={`${url}/knowledge-topic/${document.id}/topic-elements?title=${title}&moduleTitle=${moduleTitle}&topicTitle=${document.name}`}
            >
              <i className="material-icons icon-holder--outline-success rounded-lg mr-8pt">
                visibility
              </i>
            </Link>
            <Link href="#" type="button" onClick={() => setDeleteModal(true)}>
              <i className="material-icons icon-holder--outline-success rounded-lg mr-8pt">
                delete
              </i>
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
