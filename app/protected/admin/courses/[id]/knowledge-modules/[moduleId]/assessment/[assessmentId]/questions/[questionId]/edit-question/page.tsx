"use client";
import Pagination from "@/app/components/Pagination";
import Table from "@/components/course/[id]/modules/optionRubric/Table";
import { useEffect, useState } from "react";
import { getParaphrases } from "@/app/lib/actions/paraphrase";
import { useSearchParams } from "next/navigation";
import CreateOptionModal from "@/components/course/[id]/modules/optionRubric/CreateOptionModal";
import CreateRubricModal from "@/components/course/[id]/modules/optionRubric/CreateRubricModal";
import { getRubrics } from "@/app/lib/actions/rubrics";
import { Modal } from "react-bootstrap";

const Body = ({ params }: { params: { questionId: string } }) => {
  const questionId = params.questionId;
  const [list, setList] = useState([]);
  const searchParams = useSearchParams();
  const refreshId = searchParams.get("refreshId");
  const questionType = searchParams.get("type");

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMSPERPAGE = 5;
  const indexOfLastItem = currentPage * ITEMSPERPAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMSPERPAGE;
  const currentItems =
    list && list.length > 0
      ? list.slice(indexOfFirstItem, indexOfLastItem)
      : [];

  const fetchRubrics = async () => {
    const response = await getRubrics(questionId);
    setList(response);
  };


  const [openOptionModal, setOpenOptionModal] = useState<boolean>(false);
  const [openRubricModal, setOpenRubricModal] = useState<boolean>(false);
  const [isCreateOptionModal, setIsCreateOptionModal] =
    useState<boolean>(false);
  const [isCreateRubricModal, setIsCreateRubricModal] =
    useState<boolean>(false);

  useEffect(() => {
    fetchRubrics();
    setIsCreateRubricModal(false);
    setIsCreateOptionModal(false);
  }, [refreshId]);

  return (
    <>
      <CreateOptionModal
        show={openOptionModal}
        onHide={() => {
          setOpenOptionModal(false);
        }}
        setIsCreateOptionModal={setIsCreateOptionModal}
      />

      <CreateRubricModal
        show={openRubricModal}
        onHide={() => {
          setOpenRubricModal(false);
        }}
        setIsCreateRubricModal={setIsCreateRubricModal}
      />

      <Modal
        size="sm"
        centered
        show={isCreateOptionModal}
        onHide={() => setIsCreateOptionModal(false)}
      >
        <Modal.Body>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#252525",
              gap: "15px",
            }}
          >
            <p>Creating Option...</p>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        size="sm"
        centered
        show={isCreateRubricModal}
        onHide={() => setIsCreateRubricModal(false)}
      >
        <Modal.Body>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#252525",
              gap: "15px",
            }}
          >
            <p>Creating Rubric...</p>
          </div>
        </Modal.Body>
      </Modal>

      <div className="page-separator mb-4">
        <div className="page-separator__text">Edit Question</div>
      </div>

      <div className="card mb-3 d-flex flex-row p-2 justify-content-end">
        {questionType == "Long Text" && (
          <div className="mx-1">
            <button
              className="btn btn-success btn-block"
              onClick={() => setOpenRubricModal(true)}
            >
              Create Rubric
            </button>
          </div>
        )}
        {questionType == "Quiz" && (
          <div className="mx-1">
            <button
              className="btn btn-success btn-block"
              onClick={() => setOpenOptionModal(true)}
            >
              Create Option
            </button>
          </div>
        )}
      </div>

      <div className="card mt-3 mb-3 overflow-auto">
        <Table list={currentItems} />
      </div>

      <div className="card mb-24pt">
        <Pagination
          listLength={list?.length}
          indexOfLastItem={indexOfLastItem}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          ITEMSPERPAGE={ITEMSPERPAGE}
        />
      </div>
    </>
  );
};

export default Body;
