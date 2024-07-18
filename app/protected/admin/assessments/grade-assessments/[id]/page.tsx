"use client";
import Question from "./Question";
import { useState } from "react";
import list from "./data";
import Pagination from "@/app/components/Pagination";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./Modal";

function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMSPERPAGE = 2;
  const indexOfLastItem = currentPage * ITEMSPERPAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMSPERPAGE;
  const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="page-separator">
        <div className="page-separator__text">Questions</div>
      </div>
      {currentItems.map((data) => (
        <Question
          key={data.question_name}
          questionName={data.question_name}
          questionDescription={data.question_description}
          questionAnswer={data.question_answer}
          questionScore={data.question_score}
        />
      ))}

      <div className="card mb-24pt">
        <Pagination
          listLength={list.length}
          indexOfLastItem={indexOfLastItem}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          ITEMSPERPAGE={ITEMSPERPAGE}
        />
      </div>
      <div className="card mb-0">
        <Button variant="success" onClick={() => setModalShow(true)}>
          Submit
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
}

export default Page;
