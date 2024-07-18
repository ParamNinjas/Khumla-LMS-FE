"use client";
import Pagination from "@/app/components/Pagination";
import Table from "@/components/course/[id]/practical-modules/knowledge-topics/Table";
import { useEffect, useState } from "react";
import CreateKnowledgeTopicModal from "@/components/course/[id]/practical-modules/knowledge-topics/CreateKnowledgeTopicModal";
import { getKnowledgeTopics } from "@/app/lib/actions/knowledge-topic";
import { useSearchParams } from "next/navigation";
import { Modal } from "react-bootstrap";
import { rCourseUrl } from "@/app/lib/actions/endpoints";
import { exportToExcel } from "@/app/lib/utils";

const Body = ({ params }: { params: { id: string; moduleId: string } }) => {
  const id = params.moduleId;
  const [list, setList] = useState([]);
  const [exportModal, setExportModal] = useState(false);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMSPERPAGE = 6;
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
  const refreshId = searchParams.get("refreshId");

  useEffect(() => {
    fetchKnowledgeTopics();
    setOpenModal(false);
  }, [refreshId]);

  const exportKnowledgeTopics = () => {
    const url = `${rCourseUrl}/KnowledgeTopics/ExportKnowledgeTopics?moduleId=${id}`;
    exportToExcel(url, "knowledge_topics", setExportModal);
  };

  return (
    <>
      <CreateKnowledgeTopicModal
        show={openModal}
        onHide={() => {
          setOpenModal(false);
        }}
      />

      <Modal show={exportModal} keyboard={false} centered>
        <Modal.Body>
          <div className="d-flex justify-content-center align-items-center flex-column gap-5">
            <div className="spinner-border text-primary" role="status" />
            <p style={{ color: "#252525" }}>Exporting to Excel...</p>
          </div>
        </Modal.Body>
      </Modal>

      <div className="page-separator my-4">
        <div className="page-separator__text">Knowledge Topics</div>
      </div>
      <div className="card mb-3 d-flex flex-row p-2 justify-content-end">
      <div className="mx-1">
          <button
            className={`btn ${
              currentItems.length > 0 ? "btn-success" : "btn-secondary"
            }`}
            onClick={() => exportKnowledgeTopics()}
            disabled={!(currentItems.length > 0)}
          >
            Export Knowledge Topics
          </button>
        </div>
        <div className="mx-1">
          <button
            className="btn btn-success btn-block"
            onClick={() => setOpenModal(true)}
          >
            Add Knowledge Topic
          </button>
        </div>
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
