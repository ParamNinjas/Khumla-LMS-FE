"use client";
import Pagination from "@/app/components/Pagination";
import { getKnowledgeTopics } from "@/app/lib/actions/knowledge-topic";
import Table from "@/components/course/[id]/knowledge-modules/videos/Table";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Body = ({ params }: { params: { moduleId: string } }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMSPERPAGE = 5;
  const indexOfLastItem = currentPage * ITEMSPERPAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMSPERPAGE;
  const id = params.moduleId;
  const [list, setList] = useState([]);

  const currentItems =
    list && list.length > 0
      ? list.slice(indexOfFirstItem, indexOfLastItem)
      : [];

  const fetchKnowledgeTopics = async () => {
    const list = await getKnowledgeTopics(id);
    setList(list);
  };
  const searchParams = useSearchParams();
  const refreshId = searchParams.get("refreshId");

  useEffect(() => {
    fetchKnowledgeTopics();
  }, []);

  return (
    <>
      <div className="page-separator my-4">
        <div className="page-separator__text">Videos</div>
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
