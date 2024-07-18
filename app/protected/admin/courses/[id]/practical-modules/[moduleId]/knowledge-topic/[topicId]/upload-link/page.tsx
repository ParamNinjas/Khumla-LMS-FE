"use client";
import Pagination from "@/app/components/Pagination";
import Table from "@/components/course/[id]/knowledge-modules/upload-link/Table";
import { useEffect, useState } from "react";
import { getKnowledgeElements } from "@/app/lib/actions/topic-elements";
import { useSearchParams } from "next/navigation";

const Body = ({ params }: { params: { topicId: string } }) => {
  const id = params.topicId;

  const [list, setList] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMSPERPAGE = 5;
  const indexOfLastItem = currentPage * ITEMSPERPAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMSPERPAGE;
  const currentItems =
    list && list.length > 0
      ? list.slice(indexOfFirstItem, indexOfLastItem)
      : [];

  const fetchKnowledgeElements = async () => {
    const list = await getKnowledgeElements(id);
    setList(list);
  };
  const searchParams = useSearchParams();
  const refreshId = searchParams.get("refreshId");

  useEffect(() => {
    fetchKnowledgeElements();
  }, [refreshId]);

  return (
    <>
      <div className="page-separator mb-4">
        <div className="page-separator__text">Video Links</div>
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
