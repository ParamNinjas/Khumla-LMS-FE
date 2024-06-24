"use client";
import Pagination from "@/app/components/Pagination";
import Table from "@/components/course/[id]/modules/optionRubric/Table";
import { useEffect, useState } from "react";
import { getParaphrases } from "@/app/lib/actions/paraphrase";
import { useSearchParams } from "next/navigation";
import CreateOptionModal from "@/components/course/[id]/modules/optionRubric/CreateOptionModal";
import CreateRubricModal from "@/components/course/[id]/modules/optionRubric/CreateRubricModal";

const Body = ({ params }: { params: { questionId: string } }) => {
  const questionId = params.questionId;
  const [list, setList] = useState([]);
  const searchParams = useSearchParams();
  const refreshId = searchParams.get("refreshId");

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMSPERPAGE = 5;
  const indexOfLastItem = currentPage * ITEMSPERPAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMSPERPAGE;
  const currentItems =
    list && list.length > 0
      ? list.slice(indexOfFirstItem, indexOfLastItem)
      : [];

  const fetchParaphrases = async () => {
    const response = await getParaphrases(questionId);
    setList(response);
  };

  useEffect(() => {
    fetchParaphrases();
  }, [refreshId]);

  const [openOptionModal, setOpenOptionModal] = useState<boolean>(false);
  const [openRubricModal, setOpenRubricModal] = useState<boolean>(false);

  return (
    <>
      <CreateOptionModal
        show={openOptionModal}
        onHide={() => {
          setOpenOptionModal(false);
        }}
      />

      <CreateRubricModal
        show={openRubricModal}
        onHide={() => {
          setOpenRubricModal(false);
        }}
      />

      <div className="page-separator mb-4">
        <div className="page-separator__text">Edit Question</div>
      </div>

      <div className="card mb-3 d-flex flex-row p-2 justify-content-end">
        <div className="mx-1">
          <button
            className="btn btn-success btn-block"
            onClick={() => setOpenRubricModal(true)}
          >
            Create Rubric
          </button>
        </div>
        <div className="mx-1">
          <button
            className="btn btn-success btn-block"
            onClick={() => setOpenOptionModal(true)}
          >
            Create Option
          </button>
        </div>
      </div>

      <div className="card mt-3 mb-3">
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
