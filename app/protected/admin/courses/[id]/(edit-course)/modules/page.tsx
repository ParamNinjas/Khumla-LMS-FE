"use client";
import Module from "@/components/course/[id]/modules/Module";
import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import { usePathname, useSearchParams } from "next/navigation";
import { IUnitStandard } from "@/app/interfaces/unit-standard";
import { getModules } from "@/app/lib/actions/module";

function Page({ params }: { params: { id: string } }) {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMSPERPAGE = 3;
  const indexOfLastItem = currentPage * ITEMSPERPAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMSPERPAGE;
  const [list, setList] = useState<IUnitStandard[]>([]);

  const currentItems =
    list && list.length > 0
      ? list.slice(indexOfFirstItem, indexOfLastItem)
      : [];

  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const refreshId = searchParams.get("refreshId");
  const pathname = usePathname();
  const arrUrl = pathname.split("/");
  arrUrl.pop();

  const fetchModules = async () => {
    const modules = await getModules(params.id);
    setList(modules);
  };

  useEffect(() => {
    fetchModules();
  }, [refreshId]);

  return (
    <>
      <div className="my-3"></div>

      {currentItems.length > 0 ? (
        currentItems.map((data) => {
          const url =
            arrUrl.join("/") + `/modules/${data.id}/documents?title=${title}`;

          return (
            <Module
              key={data.id}
              name={data.title}
              description={data.description}
              noOfDocuments={data.noOfDocuments}
              url={url}
            />
          );
        })
      ) : (
        <div className="card my-24pt text-center py-3">
          No Unit Standards Available...
        </div>
      )}
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
}

export default Page;
