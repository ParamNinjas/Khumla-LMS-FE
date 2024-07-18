import { useEffect, useRef, useState } from "react";
import { createQuestion } from "@/app/lib/actions/questions";
import { useParams, useSearchParams } from "next/navigation";
import { AddBtn } from "./Buttons";

export default function KnowlegeTopicAdd() {
  const [description, setDescription] = useState("");
  const ref = useRef<HTMLFormElement>(null);

  const {
    id: courseId,
    moduleId,
    assessmentId,
  } = useParams<{
    id: string;
    moduleId: string;
    assessmentId: string;
  }>();
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const refreshId = searchParams.get("refreshId");

  const createQuestionWithParams = createQuestion.bind(
    null,
    description,
    courseId,
    moduleId,
    assessmentId,
    title
  );

  useEffect(() => {
    ref.current?.reset();
    setDescription("");
  }, [refreshId]);

  return (
    <form ref={ref} action={createQuestionWithParams}>
      <div className="row">
        <div className="card col-11">
          <div className="form-group row mb-0">
            <div className="col-sm-12">
              <h4>Create Knowledge Topic</h4>
            </div>
            <div className="col-sm-12">
              <label htmlFor="">Name</label>
              <input className="w-100 form-control" type="text" />
            </div>
            <div className="col-sm-12 py-2">
              <label htmlFor="">Description</label>
              <textarea
                style={{ height: "100px" }}
                className="w-100 form-control"
              />
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="">Topic Elements</label>
            <div
              style={{ columnGap: "20px" }}
              className="form-group d-flex mb-0 align-items-center"
            >
              <input
                type="text"
                className="form-control w-100"
                placeholder="Topic Element ..."
                name="options[0][description]"
              />
              <AddBtn />
            </div>
          </div>
        </div>
        <div
          style={{ rowGap: "20px" }}
          className="col-1 card d-flex p-3 align-items-center"
        >
          <AddBtn />
        </div>
      </div>
    </form>
  );
}
