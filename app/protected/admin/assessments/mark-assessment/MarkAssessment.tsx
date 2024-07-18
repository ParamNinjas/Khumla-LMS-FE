"use client";
import "../assessments.css";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { SetStateAction, useState } from "react";
import { IStudentAnswer } from "@/app/interfaces/studentAnswer";
import ConfirmationModal from "@leafygreen-ui/confirmation-modal";
import {useRouter} from "next/navigation"


interface MarkAssessmentProps {
  answer: IStudentAnswer;
  setViewAnswers: React.Dispatch<React.SetStateAction<boolean>>;

}
export default function MarkAssessment({ answer , setViewAnswers}: MarkAssessmentProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);
const router = useRouter();



  return (
    <div
      style={{ width: "100%" }}
      className="mdk-drawer-layout js-mdk-drawer-layout"
      data-push=""
      data-responsive-width="992px"
      data-domfactory-upgraded="mdk-drawer-layout"
    >
      <div
        className="mdk-drawer-layout__content page-content"
        style={{ transform: "translate3d(0px, 0px, 0px)" }}
      >
        <div className="pt-32pt">
          <div className="container page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
            <div className="flex d-flex flex-row flex-sm-row align-items-center">
              <div className="mb-24pt mb-sm-0 mr-sm-24pt">
                <div>
                  <h2 className="mb-0">Assessements</h2>
                  <ol className="breadcrumb p-0 m-0">
                    <li className="breadcrumb-item">
                      <a href="#index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                      Grade Assessments
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="grade-details">
            <p>
              <strong>
                {answer.studentName} {answer.studentSurname}
              </strong>
            </p>
            <p>
              <strong>Course Name</strong> : {answer.assessmentId}
            </p>
          </div>
          <div className="container page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left percentage">
            <p>87%</p>
          </div>

          {answer.answers.map((Answer, index: number) => (
            <div className="container page__container flex-column flex-md-row align-items-center text-center text-sm-left question_container">
              <h5>Question {index + 1}</h5>
              <p>{Answer?.questionDescription}</p>

              <h5>Answer</h5>
              <div className="answer-section">
                <p className="answer">{Answer?.userAnswer}</p>

                <div className="mark-section">
                  <p>
                    <input
                      type="text"
                      placeholder="1"
                      style={{ width: "80px" }}
                    />
                  </p>
                  <div className="icons">
                    <p>
                      <IoCheckmarkSharp className="tick-icon" />
                    </p>
                    <p className="x-icon">
                      <FaXmark />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="confirm-btns">
          <button
          onClick={() => setViewAnswers((prev:boolean) => !prev)}
          className="btn btn-accent">Cancel</button>
          <button
            onClick={() => setOpenModal(true)}
            className="btn btn-outline-secondary"
          >
            Submit
          </button>
        </div>
        <ConfirmationModal
          open={openModal}
          onConfirm={() => {
            setOpenModal(false);
            setViewAnswers((prev:boolean) => !prev);
          }}
          onCancel={() => {
            setOpenModal(false);
          }}
          title="Submit"
          buttonText="Submit"
        >
          Are you sure you want to submit grades
        </ConfirmationModal>
      </div>
    </div>
  );
}
