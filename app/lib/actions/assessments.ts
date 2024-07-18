"use server";
import { redirect } from "next/navigation";
import { get, post, put } from "../utils";
import { rAssessmentUrl, wAssessmentUrl } from "./endpoints";
import { Diagnostic } from "../logger/logger";

export const createAssessment = async (
  courseId: string,
  moduleId: string,
  courseTitle: string,
  formData: FormData
) => {
  const body = {
    title: formData.get("title"),
    courseId,
  };

  try {
    const data = await post(
      `${wAssessmentUrl}/AddNewAssessment`,
      body
    );
    Diagnostic("SUCCESS ON POST, returning", data);
  } catch (err) {
    Diagnostic("ERROR ON POST, returning", err);

    console.error(err);
  }

  const date = new Date().toString();
  const url = `/protected/admin/courses/${courseId}/modules/${moduleId}/assessments?title=${courseTitle}&refreshId=${date}`;
  redirect(url);
};

export const getAssessments = async (id: string) => {
  try {
    const resp = await get(`${rAssessmentUrl}/Assessments/GetNewAssessments/${id}`);
    console.log(resp)
    const data = resp.data;
    Diagnostic("SUCCESS ON GET, returning", data);
    return data;
  } catch (err) {
    Diagnostic("ERROR ON GET, returning", err);

    console.error(err);
  }
};

export const updateAssessment = async (
  id: string,
  courseId: string,
  moduleId: string,
  courseTitle: string,
  formData: FormData
) => {
  const body = {
    id,
    title: formData.get("title"),
  };

  try {
    const data = await put(
      `${wAssessmentUrl}/UpdateNewAssessment`,
      body
    );
    Diagnostic("SUCCESS ON PUT, returning", data);
  } catch (err) {
    Diagnostic("ERROR ON PUT, returning", err);

    console.error(err);
  }

  const date = new Date().toString();
  const url = `/protected/admin/courses/${courseId}/modules/${moduleId}/assessments?title=${courseTitle}&refreshId=${date}`;
  redirect(url);
};