"use client";
import Pagination from "@/app/components/Pagination";
import Table from "@/components/course/[id]/modules/generate-quizzes/Table";
import { useEffect, useState } from "react";
import { getParaphrases } from "@/app/lib/actions/paraphrase";
import { useSearchParams } from "next/navigation";

const Body = ({ params }: { params: { documentId: string } }) => {
  const documentId = params.documentId;
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
    const response = await getParaphrases(documentId);
    setList(response);
  };

  useEffect(() => {
    fetchParaphrases();
  }, [refreshId]);

  return (
    <>
      <div className="page-separator mb-4">
        <div className="page-separator__text">
          Quizzes
        </div>
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
