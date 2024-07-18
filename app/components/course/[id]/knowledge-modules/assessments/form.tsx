"use client";
import { IUnitStandard } from "@/app/interfaces/unit-standard";
import { updateModule } from "@/app/lib/actions/module";
import dynamic from "next/dynamic";
import { useState } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useParams, useSearchParams } from "next/navigation";
import { removeTags } from "@/app/lib/utils";

function EditForm({ module }: { module: IUnitStandard }) {
  const [queryPrompt, setQueryPrompt] = useState<string>("");
  const [text, setText] = useState<string>(module.description);
  const { id: courseId, moduleId } = useParams<{
    id: string;
    moduleId: string;
  }>();
  const searchParams = useSearchParams();
  const courseTitle = searchParams.get("title") || "";

  const tones = ["Informal", "Formal", "Soft", "Strong"];
  console.log()
  const updateModuleWithParams = updateModule.bind(
    null,
    moduleId,
    removeTags(text),
    courseId,
    courseTitle,
    removeTags(queryPrompt),
  );

  return (
    <form action={updateModuleWithParams} className="mb-0">
      <div className="list-group list-group-form">
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
              <ReactQuill value={text} onChange={(value) => setText(value)} />
            </div>
          </div>
        </div>
        <div className="list-group-item">
          <div className="form-group row align-items-center mb-0">
            <label className="form-label col-form-label col-sm-3">
              Document Tone
            </label>
            <div className="col-sm-9">
              <select
                id="select01"
                data-toggle="select"
                className="form-control"
              >
                <option selected={false}>Select Tone</option>
                {tones.map((name: string) => (
                  <option selected={module.documentTone === name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="list-group-item">
          <div className="form-group row align-items-center mb-0">
            <label className="form-label col-form-label col-sm-3">
              Length of Paragraph
            </label>
            <div className="col-sm-9">
              <input
                name="lengthOfParagraph"
                type="number"
                className="form-control"
                defaultValue={module.lengthOfParagraph}
                placeholder="Course Name"
                min="1"
              />
            </div>
          </div>
        </div>
        <div className="list-group-item">
          <div className="form-group row align-items-center mb-0">
            <label className="form-label col-form-label col-sm-3">
              AI Query Prompt
            </label>
            <div className="col-sm-9">
              <ReactQuill
                value={queryPrompt}
                onChange={(value) => setQueryPrompt(value)}
              />
            </div>
          </div>
        </div>

        <div className="list-group-item">
          <div className="form-group row align-items-center mb-0">
            <label className="form-label col-form-label col-sm-3">
              Audio voices
            </label>
            <div className="col-sm-9">
              <select
                id="select01"
                data-toggle="select"
                className="form-control"
                name="audioVoice"
                defaultValue={module.audioVoice}
              >
                <option selected={false}>Select voice</option>
                {tones.map((name: string) => (
                  <option selected={false}>{name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="m-3">
        <button className="btn btn-success btn-block">Submit</button>
      </div>
    </form>
  );
}

export default dynamic(() => Promise.resolve(EditForm), {
  ssr: false,
});
