"use server";
import { redirect } from "next/navigation";
import { get, post, put } from "../utils";
import { rCourseUrl, wCourseUrl } from "./endpoints";
import { unstable_noStore as noStore } from "next/cache";
import { Diagnostic } from "../logger/logger";

export const createCourse = async (formData: FormData) => {
  const body = {
    title: formData.get("title"),
    description: formData.get("description"),
    videoScriptTone: formData.get("videoScriptTone"),
    instructorName: formData.get("instructorName"),
    courseLogoUrl: formData.get("courseLogoUrl"),
    thumbnailUrl: formData.get("thumbnailUrl"),
  };

  let url = "";
  try {
    const resp = await post(`${wCourseUrl}/Courses/AddCourseNew`, body);
    const data = await resp.data;
    const { id, title } = data;
    url = `/protected/admin/courses/${id}?title=${title}`;
    Diagnostic("SUCCESS ON POST, returning", data);
  } catch (err) {
    Diagnostic("ERROR ON POST, returning", err);
    throw err;
  }

  redirect(url);
};

export const getCourses = async () => {
  noStore();
  try {
    const resp = await get(`${rCourseUrl}/Courses/GetCoursesNew`);
    const data = resp.length > 0 ? resp.map((res: any) => res.data) : [];
    Diagnostic("SUCCESS ON GET, returning", data);
    return data;
  } catch (err) {
    Diagnostic("ERROR ON GET, returning", err);
    throw err;
  }
};

export const getCourse = async (id: string) => {
  try {
    const resp = await get(`${rCourseUrl}/Courses/GetCourseNew/${id}`);

    const data = resp.data;
    Diagnostic("SUCCESS ON GET, returning", data);
    return data;
  } catch (err) {
    Diagnostic("ERROR ON GET, returning", err);
    throw err;
  }
};

export const updateCourse = async (id: string, formData: FormData) => {
  const body = {
    id: id,
    title: formData.get("title"),
    description: formData.get("description"),
    videoScriptTone: formData.get("videoScriptTone"),
    instructorName: formData.get("instructorName"),
    courseLogoUrl: formData.get("courseLogoUrl"),
    thumbnailUrl: formData.get("thumbnailUrl"),
  };

  let url = "";
  try {
    const resp = await put(`${wCourseUrl}/Courses/UpdateCourseNew`, body);

    const data = await resp.data;
    const { title } = data;
    url = `/protected/admin/courses/${id}?title=${title}`;
    Diagnostic("SUCCESS ON PUT, returning", data);
  } catch (err) {
    Diagnostic("ERROR ON PUT, returning", err);
    throw err;
  }

  redirect(url);
};
