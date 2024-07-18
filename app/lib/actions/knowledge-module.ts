"use server";
import { redirect } from "next/navigation";
import { del, get, post, put } from "../utils";
import { rCourseUrl, wCourseUrl } from "./endpoints";
import { Diagnostic } from "../logger/logger";

export const createKnowledgeModule = async (
  description: string,
  courseId: string,
  courseTitle: string,
  isPractical = false,
  formData: FormData
) => {
  const body = {
    title: formData.get("title"),
    moduleCode: formData.get("moduleCode"),
    description: description,
    courseId,
    isPractical,
  };

  try {
    const data = await post(
      `${wCourseUrl}/KnowledgeModules/AddKnowledgeModule`,
      body
    );
    Diagnostic("SUCCESS ON POST, returning", data);
  } catch (err) {
    Diagnostic("ERROR ON POST, returning", err);

    console.error(err);
  }

  const date = new Date().toString();
  const url = isPractical
    ? `/protected/admin/courses/${courseId}/practical-modules?title=${courseTitle}&refreshId=${date}`
    : `/protected/admin/courses/${courseId}/knowledge-modules?title=${courseTitle}&refreshId=${date}`;
  redirect(url);
};

export const getKnowledgeModules = async (id: string) => {
  try {
    const resp = await get(
      `${rCourseUrl}/KnowledgeModules/GetKnowledgeModules/${id}`
    );
    const data = resp.data;
    Diagnostic("SUCCESS ON GET, returning", data);
    return data;
  } catch (err) {
    Diagnostic("ERROR ON GET, returning", err);

    console.error(err);
  }
};

export const getPracticalModules = async (id: string) => {
  try {
    const resp = await get(
      `${rCourseUrl}/KnowledgeModules/GetPracticalKnowledgeModules/${id}`
    );
    const data = resp.data;
    Diagnostic("SUCCESS ON GET, returning", data);
    return data;
  } catch (err) {
    Diagnostic("ERROR ON GET, returning", err);

    console.error(err);
  }
};

export const getKnowledgeModule = async (id: string) => {
  try {
    const resp = await get(
      `${rCourseUrl}/KnowledgeModules/GetKnowledgeModule/${id}`
    );
    const data = resp.data;
    Diagnostic("SUCCESS ON GET, returning", data);
    return data;
  } catch (err) {
    Diagnostic("ERROR ON GET, returning", err);
    console.error(err);
  }
};

export const updateKnowledgeModule = async (
  id: string,
  description: string,
  courseId: string,
  courseTitle: string,
  isPractical : boolean = false,
  formData: FormData
) => {
  const body = {
    id,
    title: formData.get("title"),
    moduleCode: formData.get("moduleCode"),
    description: description,
    courseId,
  };

  try {
    const resp = await put(
      `${wCourseUrl}/KnowledgeModules/UpdateKnowledgeModule`,
      body
    );
    const data = resp.data;
    Diagnostic("SUCCESS ON PUT, returning", data);
  } catch (err) {
    Diagnostic("ERROR ON PUT, returning", err);
    console.error(err);
  }

  const date = new Date().toString();
  const url = isPractical
    ? `/protected/admin/courses/${courseId}/practical-modules?title=${courseTitle}&refreshId=${date}`
    : `/protected/admin/courses/${courseId}/knowledge-modules?title=${courseTitle}&refreshId=${date}`;
  redirect(url);
};

export const deleteKnowledgeModule = async (moduleId: string) => {
  try {
    const resp = await del(
      `${wCourseUrl}/KnowledgeModules/DeleteKnowledgeModule/${moduleId}`
    );
    const data = resp.data;
    Diagnostic("SUCCESS ON DELETE, returning", data);
    return data;
  } catch (err) {
    Diagnostic("ERROR ON DELETE, returning", err);

    console.error(err);
  }
};
