"use client";
import Pagination from "@/app/components/Pagination";
import { getKnowledgeElements } from "@/app/lib/actions/topic-elements";
import CreateTopicElementModal from "@/components/course/[id]/knowledge-modules/topic-elements/CreateTopicElementModal";
import Table from "@/components/course/[id]/knowledge-modules/topic-elements/Table";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Body = ({ params }: { params: { topicId: string } }) => {
  const id = params.topicId;

  const [list, setList] = useState([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMSPERPAGE = 9;
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
    setOpenModal(false);
  }, [refreshId]);

  return (
    <>
      <CreateTopicElementModal
        show={openModal}
        onHide={() => {
          setOpenModal(false);
        }}
      />

      <div className="page-separator mb-4">
        <div className="page-separator__text">Topic Elements</div>
      </div>

      <div className="card mb-3 d-flex flex-row p-2 justify-content-end">
        <div className="mx-1">
          <button
            className="btn btn-success btn-block"
            onClick={() => setOpenModal(true)}
          >
            Create Topic Element
          </button>
        </div>
      </div>

      <div className="card mt-3 mb-3 overflow-auto">
        <Table list={currentItems!} />
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
