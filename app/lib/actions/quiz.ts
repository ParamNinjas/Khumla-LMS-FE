"use server";
import { get, post } from "../utils";
import { wQuizGenerateUrl, rQuizUrl } from "./endpoints";
import { Diagnostic } from "../logger/logger";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getQuizzes = async (paraphraseId: string) => {
  try {
    const resp = await get(
      `${rQuizUrl}/Quizzes/ListQuizzes?paraphraseId=${paraphraseId}`
    );
    Diagnostic("SUCCESS ON GET, returning", resp.data);
    return resp.data;
  } catch (err) {
    Diagnostic("ERROR ON GET, returning", err);
    console.error(err);
  }
};

export const generateQuizzes = async (
  paraphraseId: string,
  text: string,
  courseId: string,
  moduleId: string,
  documentId: string,
  courseTitle: string,
) => {
  try {
    const resp = await post(`${wQuizGenerateUrl}/Quiz/generate`, {
      paraphraseId,
      text,
    });
    Diagnostic("SUCCESS ON POST, returning", resp);
  } catch (err) {
    Diagnostic("ERROR ON POST, returning", err);
    console.error(err);
  }

  const date = new Date().toString();
  const url = `/protected/admin/courses/${courseId}/modules/${moduleId}/document/${documentId}/generate-quizzes?title=${courseTitle}&refreshId=${date}`;
  revalidatePath(url);
  redirect(url);
};
