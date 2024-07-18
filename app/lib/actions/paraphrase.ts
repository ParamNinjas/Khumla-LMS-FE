"use server";
import { get, post, put } from "../utils";
import { rCourseUrl, wAudioGenerateUrl, wCourseUrl } from "./endpoints";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { IResponseObject } from "@/app/lib/restapi/response";
import { IParaPhraseResponseObject } from "@/app/interfaces/unit-standard";
import { redirect } from "next/navigation";
import { Diagnostic } from "../logger/logger";

export const createParaphrase = async (
  description: string,
  courseId: string,
  moduleId: string,
  documentId: string,
  courseTitle: string,
  formData: FormData
) => {
  const body = {
    title: formData.get("title"),
    description,
    videoUrl: formData.get("videoUrl"),
    documentId,
  };

  try {
    const data = await post(
      `${wCourseUrl}/Paraphrase/AddParaphrase/NonSystemGenerated`,
      body
    );
    Diagnostic("SUCCESS ON POST, returning", data);
  } catch (err) {
    Diagnostic("ERROR ON POST, returning", err);

    throw err;
  }

  const date = new Date().toString();
  const url = `/protected/admin/courses/${courseId}/modules/${moduleId}/document/${documentId}/upload-link?title=${courseTitle}&refreshId=${date}`;
  revalidatePath(url);
  redirect(url);
};

export const updateParaphrase = async (
  id: string,
  description: string,
  courseId: string,
  moduleId: string,
  documentId: string,
  courseTitle: string,
  formData: FormData
) => {
  const body = {
    id,
    title: formData.get("title"),
    description,
    videoUrl: formData.get("videoUrl"),
  };
  try {
    const resp = await put(
      `${wCourseUrl}/Paraphrase/UpdateParaphrase/NonSystemGenerated`,
      body
    );
    const data = await resp.data;
    Diagnostic("SUCCESS ON PUT, returning", data);
  } catch (err) {
    Diagnostic("ERROR ON PUT, returning", err);
    throw err;
  }

  const date = new Date().toString();
  const url = `/protected/admin/courses/${courseId}/modules/${moduleId}/document/${documentId}/upload-link?title=${courseTitle}&refreshId=${date}`;
  revalidatePath(url);
  redirect(url);
};

export const getParaphrases = async (id: string) => {
  noStore();
  try {
    const resp = await get(`${rCourseUrl}/Paraphrase/${id}`);
    const data = resp.map(
      (res: IResponseObject<IParaPhraseResponseObject[]>) => res.data
    );
    Diagnostic("SUCCESS ON GET, returning", data);
    return data;
  } catch (err) {
    Diagnostic("ERROR ON GET, returning", err);
    throw err;
  }
};

export const confirmParaphrase = async (
  id: string,
  description: string,
  courseId: string,
  moduleId: string,
  documentId: string,
  courseTitle: string,
  formData: FormData
) => {
  const body = {
    id,
    title: formData.get("title"),
    description,
    paraphraseStatus: 1,
  };

  try {
    const data = await put(`${wCourseUrl}/Paraphrase/ConfirmParaphrase`, body);
    Diagnostic("SUCCESS ON PUT, returning", data);
  } catch (err) {
    Diagnostic("ERROR ON PUT, returning", err);

    throw err;
  }
  const date = new Date().toString();
  const url = `/protected/admin/courses/${courseId}/modules/${moduleId}/document/${documentId}/paraphrase-document?title=${courseTitle}&refreshId=${date}`;
  revalidatePath(url);
  redirect(url);
};

export const confirmAudio = async (
  id: string,
  isConfirm: boolean,
  courseId: string,
  moduleId: string,
  documentId: string,
  courseTitle: string
) => {
  const audioStatus = isConfirm ? 1 : 0;

  try {
    const data = await put(`${wCourseUrl}/Paraphrase/ConfirmAudio`, {
      id,
      audioStatus,
    });
    Diagnostic("SUCCESS ON PUT, returning", data);
  } catch (err) {
    Diagnostic("ERROR ON PUT, returning", err);
    throw err;
  }

  const date = new Date().toString();
  const url = `/protected/admin/courses/${courseId}/modules/${moduleId}/document/${documentId}/confirm-audio?title=${courseTitle}&refreshId=${date}`;
  revalidatePath(url);
  redirect(url);
};

export const generateAudio = async (payload: any) => {
  const body = {
    text: payload.text,
    voice: "",
    paraphraseId: payload.paraphraseId,
  };

  try {
    const data = await post(`${wAudioGenerateUrl}/Audio/generate`, body);
    Diagnostic("SUCCESS ON POST, returning", data);
  } catch (err) {
    Diagnostic("ERROR ON POST, returning", err);

    throw err;
  }

  const url = `/protected/admin/courses/${payload.courseId}/modules/${payload.moduleId}/document/${payload.documentId}/paraphrase-document?title=${payload.documentTitle}`;
  revalidatePath(url);
  redirect(url);
};

export const updateVideoLink = async (id: string, videoLink: string) => {
  try {
    const data = await put(`${wCourseUrl}/Paraphrase/UploadVideoLink`, {
      id,
      videoLink,
    });
    Diagnostic("SUCCESS ON PUT, returning", data);
  } catch (error) {
    Diagnostic("ERROR ON PUT, returning", error);

    throw error;
  }
};
