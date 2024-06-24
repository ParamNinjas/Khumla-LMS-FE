"use client";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import Modal from "./Modal";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function PageHeader({ title }: { title: string }) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const name = searchParams.get("title");

  let isModule = false;
  let isCreateModule = false;
  let isEditModule = false;
  let isEditCourse = false;
  let isCourse = false;
  let isEditDocument = false;
  const { id } = useParams<{ id: string }>();

  const arrUrl = pathname.split("/");
  const suffixPath = arrUrl.pop() || "";

  const actionLinks = [
    "paraphrase-document",
    "confirm-audio",
    "upload-link",
    "generate-quizzes",
    "questions",
    "edit-question",
  ];
  const arrLink = [
    "edit",
    "documents",
    "audios",
    "videos",
    "quizzes",
    "assessments",
  ];

  const stepperMap: any = {
    "paraphrase-document": "Paraphrase Sections",
    "confirm-audio": "Confirm Audio",
    "upload-link": "Upload Link",
    "generate-quizzes": "Generate Quizzes",
    documents: "Modules",
    audios: "Audios",
    videos: "Videos",
    edit: "Edit",
    assessments: "Assessments",
    questions: "Questions",
    "edit-question": "Edit Question",
  };

  const urlDocumentMap: any = {
    "paraphrase-document": "documents",
    "confirm-audio": "audios",
    "upload-link": "videos",
    "generate-quizzes": "quizzes",
    questions: "assessments",
  };

  let backUrl = "";

  if (pathname == "/protected/admin/courses") {
    title = "Courses";
    isCourse = true;
  } else if (pathname == `/protected/admin/courses/${id}`) {
    isEditCourse = true;
  } else if (pathname.indexOf("/modules/create") !== -1) {
    title = `Create Unit Standard`;
    isCreateModule = true;
  } else if (pathname.indexOf("/modules") !== -1) {
    title = `${name}`;
    if ([...arrLink, ...actionLinks].indexOf(suffixPath) === -1) {
      isModule = true;
    } else {
      if (actionLinks.indexOf(suffixPath) !== -1) {
        const arr = pathname.split("/");
        const urlSlice = arr.slice(0, -3);
        backUrl = `${urlSlice.join("/")}/${
          urlDocumentMap[suffixPath]
        }?title=${title}`;
        isEditDocument = true;
      } else if (arrLink.indexOf(suffixPath) !== -1) isEditModule = true;

      title =
        name + " - " + (stepperMap[suffixPath] ? stepperMap[suffixPath] : "");
    }
  }

  return (
    <>
      <Modal
        show={openModal}
        onHide={() => setOpenModal(false)}
        courseId={id}
        title={name}
      />

      <div className="border-bottom-2 py-32pt position-relative z-1">
        <div className="container page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
          <div className="flex d-flex justify-content-between flex-column flex-sm-row align-items-center mb-24pt mb-md-0">
            <div
              style={{ width: "850px" }}
              className="mb-24pt mb-sm-0 mr-sm-24pt"
            >
              <h2 className="mb-0">{title}</h2>

              <ol className="breadcrumb p-0 m-0">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>

                <li className="breadcrumb-item active">{title}</li>
              </ol>
            </div>
            <div>
              {isCourse && (
                <Link
                  className="btn btn-success"
                  href={`/protected/admin/courses/create`}
                >
                  Create Course
                </Link>
              )}
              {isEditCourse && (
                <Link
                  className="btn btn-success"
                  href={`/protected/admin/courses`}
                >
                  All Courses
                </Link>
              )}
              {isEditModule && (
                <Link
                  className="btn btn-success"
                  href={`/protected/admin/courses/${id}/modules?title=${name}`}
                >
                  Unit Standards
                </Link>
              )}
              {isModule && (
                <button
                  className="btn btn-success"
                  onClick={() => setOpenModal(true)}
                >
                  Create Unit Standard
                </button>
              )}
              {isEditDocument && (
                <Link className="btn btn-success" href={backUrl}>
                  Documents
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
