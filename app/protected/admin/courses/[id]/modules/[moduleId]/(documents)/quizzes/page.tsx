"use client";
import Pagination from "@/app/components/Pagination";
import Table from "@/components/course/[id]/modules/quizzes/Table";
import { useState, useEffect } from "react";
import { getDocuments } from "@/app/lib/actions/document";
import { IDocument } from "@/app/interfaces/course-document";

const Body = ({params}: {params: {moduleId: string}}) => {
  const id = params.moduleId;
  const [files, setFiles] = useState<IDocument[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMSPERPAGE = 5;
  const indexOfLastItem = currentPage * ITEMSPERPAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMSPERPAGE;
  const currentItems =
    files && files.length > 0
      ? files.slice(indexOfFirstItem, indexOfLastItem)
      : [];

  const fetchDocuments = async () => {
    const files = await getDocuments(id);
    setFiles(files);
  }
  
  useEffect(() => {
    fetchDocuments();
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
          listLength={files?.length}
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
