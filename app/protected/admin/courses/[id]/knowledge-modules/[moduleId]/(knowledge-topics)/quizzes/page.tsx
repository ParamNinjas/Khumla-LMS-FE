"use client";
import Pagination from "@/app/components/Pagination";
import Table from "@/components/course/[id]/knowledge-modules/quizzes/Table";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getKnowledgeTopics } from "@/app/lib/actions/knowledge-topic";

const Body = ({ params }: { params: { moduleId: string } }) => {
  const id = params.moduleId;
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMSPERPAGE = 5;
  const indexOfLastItem = currentPage * ITEMSPERPAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMSPERPAGE;
  const currentItems =
    list && list.length > 0
      ? list.slice(indexOfFirstItem, indexOfLastItem)
      : [];

  const fetchKnowledgeTopics = async () => {
    const list = await getKnowledgeTopics(id);
    setList(list);
  };
  const searchParams = useSearchParams();

  useEffect(() => {
    fetchKnowledgeTopics();
  }, []);

  return (
    <>
      <div className="page-separator my-4">
        <div className="page-separator__text">Quizzes</div>
      </div>

      <div className="card mt-3 mb-3 overflow-auto">
        <Table list={currentItems} />
      </div>

      <div className="card mb-0">
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
