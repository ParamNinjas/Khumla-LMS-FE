"use server";
import { redirect } from "next/navigation";
import { get, post, put } from "../utils";
import {
  wCourseUrl,
  rCourseUrl,
  rDocumentParaphraseUrl,
} from "./endpoints";
import { Diagnostic } from "../logger/logger";

export const uploadDocuments = async (
  courseId: string,
  moduleId: string,
  courseTitle: string,
  formData: FormData
) => {
  try {
    const res = await fetch(`${wCourseUrl}/Document/Modules/${moduleId}/upload`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    Diagnostic("SUCCESS ON POST, returning", data);
  } catch (err) {
    Diagnostic("ERROR ON POST, returning", err);
  }

  const date = new Date().toString();
  const url = `/protected/admin/courses/${courseId}/modules/${moduleId}/documents?title=${courseTitle}&refreshId=${date}`;
  redirect(url);
};

export const createDocument = async (
  courseId: string,
  moduleId: string,
  courseTitle: string,
  formData: FormData
) => {
  const body = {
    documentName: formData.get("name"),
    moduleId,
  };

  try {
    const resp = await post(`${wCourseUrl}/Document/Modules/Create`, body);
    const data = await resp.json();
    Diagnostic("SUCCESS ON POST, returning", data);
  } catch (err) {
    Diagnostic("ERROR ON POST, returning", err);
  }

  const date = new Date().toString();
  const url = `/protected/admin/courses/${courseId}/modules/${moduleId}/documents?title=${courseTitle}&refreshId=${date}`;
  redirect(url);
};

export const updateDocument = async (
  documentId: string,
  courseId: string,
  moduleId: string,
  courseTitle: string,
  formData: FormData
) => {
  const body = {
    documentName: formData.get("name"),
    documentId,
  };

  try {
    const resp = await put(`${wCourseUrl}/Document/Modules/UpdateDocumentName`, body);

    Diagnostic("SUCCESS ON PUT, returning", resp);
  } catch (err) {
    Diagnostic("ERROR ON PUT, returning", err);
  }

  const date = new Date().toString();
  const url = `/protected/admin/courses/${courseId}/modules/${moduleId}/documents?title=${courseTitle}&refreshId=${date}`;
  redirect(url);
};

export const getDocuments = async (moduleId: string) => {
  try {
    const resp = await get(`${rCourseUrl}/Document/Documents/${moduleId}`);
    const data = resp.data;
    Diagnostic("SUCCESS ON GET, returning", data);
    return data;
  } catch (err) {
    Diagnostic("ERROR ON GET, returning", err);
    console.error(err);
  }
};

export const paraphraseDocument = async (
  documentId: string,
  documentUrl: string
) => {
  try {
    const data = await post(`${rDocumentParaphraseUrl}/parse`, {
      documentUrl,
      documentId,
    });
    Diagnostic("SUCCESS ON POST, returning", data);
  } catch (err) {
    Diagnostic("ERROR ON POST, returning", err);
    console.error(err);
  }
};