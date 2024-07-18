"use client";
import Pagination from "@/app/components/Pagination";
import Table from "@/components/course/[id]/knowledge-modules/assessments/Table";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CreateAssessmentModal from "@/components/course/[id]/knowledge-modules/assessments/CreateAssessmentModal";
import { Assessment } from "@/app/interfaces/assessments";
import { getAssessments } from "@/app/lib/actions/assessments";

const Body = ({ params }: { params: { id: string } }) => {
  const { id: courseId } = params;
  const searchParams = useSearchParams();
  const refreshId = searchParams.get("refreshId");
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMSPERPAGE = 4;
  const indexOfLastItem = currentPage * ITEMSPERPAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMSPERPAGE;
  const currentItems =
    assessments && assessments.length > 0
      ? assessments.slice(indexOfFirstItem, indexOfLastItem)
      : [];

  const fetchAssessments = async () => {
    const data = await getAssessments(courseId);
    setAssessments(data);
  };

  useEffect(() => {
    fetchAssessments();
    setOpenModal(false);
  }, [refreshId]);


  return (
    <>
      <CreateAssessmentModal
        show={openModal}
        onHide={() => {
          setOpenModal(false);
        }}
      />

      <div className="page-separator my-4">
        <div className="page-separator__text">Assessments</div>
      </div>

      <div className="card mb-3 d-flex flex-row p-2 justify-content-end">
        <div className="mx-1">
          <button
            className="btn btn-success btn-block"
            onClick={() => setOpenModal(true)}
          >
            Generate Assessment
          </button>
        </div>
        <div className="mx-1">
          <button
            className="btn btn-success btn-block"
            onClick={() => setOpenModal(true)}
          >
            Create Assessment
          </button>
        </div>
      </div>

      <div className="card mt-3 mb-3 overflow-auto">
        <Table list={currentItems} />
      </div>

      <div className="card mb-0">
        <Pagination
          listLength={assessments?.length}
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
