"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

function CreateForm() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <form className="mb-0">
      <div className="list-group list-group-form">
        <div className="list-group-item">
          <div className="form-group row align-items-center mb-0">
            <label className="form-label col-form-label col-sm-3">Title</label>
            <div className="col-sm-9">
              <input
                name="title"
                type="text"
                className="form-control"
                defaultValue={title}
                placeholder="Course Name"
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
                <option>Another option</option>
                <option>Formal</option>
                <option>Informal</option>
                <option>Soft</option>
                <option>Strong</option>
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
                name="title"
                type="number"
                className="form-control"
                defaultValue="1"
                placeholder="Course Name"
                min="1"
              />
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

export default dynamic(() => Promise.resolve(CreateForm), {
  ssr: false,
});
