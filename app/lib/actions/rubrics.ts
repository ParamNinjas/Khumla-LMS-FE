"use server";
import { redirect } from "next/navigation";
import { get, post, del } from "../utils";
import { rRubricUrl, wRubricUrl } from "./endpoints";
import { Diagnostic } from "../logger/logger";

export const createRubric = async (
  description: string,
  courseId: string,
  moduleId: string,
  assessmentId: string,
  questionId: string,
  courseTitle: string,
  type: string,
  formData: FormData
) => {
  const body = {
    label: formData.get("label"),
    description,
    questionId,
  };

  console.log("body", body);
  try {
    const data = await post(`${wRubricUrl}/AddRubric`, body);
    Diagnostic("SUCCESS ON POST, returning", data);
  } catch (err) {
    Diagnostic("ERROR ON POST, returning", err);

    console.error(err);
  }

  const date = new Date().toString();
  const url = `/protected/admin/courses/${courseId}/modules/${moduleId}/assessment/${assessmentId}/questions/${questionId}/edit-question?title=${courseTitle}&type=${type}&refreshId=${date}`;
  redirect(url);
};

export const getRubrics = async (questionId: string) => {
  try {
    const resp = await get(`${rRubricUrl}/GetRubrics/${questionId}`);
    const data = resp.data;
    Diagnostic("SUCCESS ON GET, returning", data);
    return data;
  } catch (err) {
    Diagnostic("ERROR ON GET, returning", err);

    console.error(err);
  }
};

export const deleteRubric = async (rubricId: string) => {
  try {
    const resp = await del(`${wRubricUrl}/${rubricId}`);
    const data = resp.data;
    Diagnostic("SUCCESS ON DELETE, returning", data);
    return data;
  } catch (err) {
    Diagnostic("ERROR ON DELETE, returning", err);

    console.error(err);
  }
};