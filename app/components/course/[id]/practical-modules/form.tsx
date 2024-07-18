"use client";
import { IUnitStandard } from "@/app/interfaces/unit-standard";
import dynamic from "next/dynamic";
import { useState } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useParams, useSearchParams } from "next/navigation";
import { updateKnowledgeModule } from "@/app/lib/actions/knowledge-module";
import EditBtn from "./Buttons";

function EditForm({ module }: { module: any }) {
  const [description, setDescription] = useState<string>(module.description);
  const { id: courseId, moduleId } = useParams<{
    id: string;
    moduleId: string;
  }>();
  const searchParams = useSearchParams();
  const courseTitle = searchParams.get("title") || "";
  const isPractical = false;

  const updateKnowledgeModuleWithParams = updateKnowledgeModule.bind(
    null,
    moduleId,
    description,
    courseId,
    courseTitle,
    isPractical
  );

  return (
    <form action={updateKnowledgeModuleWithParams} className="mb-0">
      <div className="list-group list-group-form">
        <div className="list-group-item">
          <div className="form-group row align-items-center mb-0">
            <label className="form-label col-form-label col-sm-3">
              Code/No.
            </label>
            <div className="col-sm-9">
              <input
                name="moduleCode"
                defaultValue={module.moduleCode}
                className="form-control"
                placeholder="Enter Module Code. E.g KM01"
              />
            </div>
          </div>
        </div>{" "}
        <div className="list-group-item">
          <div className="form-group row align-items-center mb-0">
            <label className="form-label col-form-label col-sm-3">Title</label>
            <div className="col-sm-9">
              <input
                name="title"
                defaultValue={module.title}
                className="form-control"
                placeholder="Module Name"
              />
            </div>
          </div>
        </div>
        <div className="list-group-item">
          <div className="form-group row align-items-center mb-0">
            <label className="form-label col-form-label col-sm-3">
              Description
            </label>
            <div className="col-sm-9">
              <ReactQuill
                value={description}
                onChange={(value) => setDescription(value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="m-3">
        <EditBtn />
      </div>
    </form>
  );
}

export default dynamic(() => Promise.resolve(EditForm), {
  ssr: false,
});
