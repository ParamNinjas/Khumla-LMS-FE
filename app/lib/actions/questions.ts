"use server";
import { redirect } from "next/navigation";
import { del, formDataEntriesArray, get, post, put } from "../utils";
import {
  rAssessmentUrl,
  wOptionUrl,
  wQuestionUrl,
  wRubricUrl,
} from "./endpoints";
import { Diagnostic } from "../logger/logger";
import { IQuestion, FormObject } from "@/app/interfaces/questions";

export const createQuestion = async (
  description: string,
  courseId: string,
  moduleId: string,
  assessmentId: string,
  courseTitle: string,
  formData: FormData
) => {
  const body = {
    questionType: formData.get("questionType"),
    score: formData.get("score"),
    description,
    assessmentId,
  };

  const entries: any = formData.entries();
  let question = {} as IQuestion;
  try {
    const data = await post(`${wQuestionUrl}/AddQuestion`, body);
    question = data.data;
    Diagnostic("SUCCESS ON POST, returning", data);

    const correctValue: any = formData.get("correctValue") || "";

    createUpdateOptionRubric(
      entries,
      question.id!,
      question.questionType,
      correctValue
    );
  } catch (err) {
    Diagnostic("ERROR ON POST, returning", err);
    console.error(err);
  }

  const date = new Date().toString();
  const url = `/protected/admin/courses/${courseId}/modules/${moduleId}/assessment/${assessmentId}/questions?title=${courseTitle}&refreshId=${date}`;
  redirect(url);
};

export const updateQuestion = async (
  id: string,
  description: string,
  courseId: string,
  moduleId: string,
  assessmentId: string,
  courseTitle: string,
  formData: FormData
) => {
  const body = {
    id,
    title: formData.get("title"),
    questionType: formData.get("questionType"),
    score: formData.get("score"),
    description,
    assessmentId,
  };

  const entries: any = formData.entries();

  let question = {} as IQuestion;
  try {
    const data = await put(`${wQuestionUrl}/UpdateQuestion`, body);
    question = data.data;
    Diagnostic("SUCCESS ON PUT, returning", data);

    const correctValue: any = formData.get("correctValue") || "";

    createUpdateOptionRubric(
      entries,
      question.id!,
      question.questionType,
      correctValue
    );
  } catch (err) {
    Diagnostic("ERROR ON POST, returning", err);
    console.error(err);
  }

  const date = new Date().toString();
  const url = `/protected/admin/courses/${courseId}/modules/${moduleId}/assessment/${assessmentId}/questions?title=${courseTitle}&refreshId=${date}`;
  redirect(url);
};

export const getQuestions = async (assessmentId: string) => {
  try {
    const resp = await get(
      `${rAssessmentUrl}/Questions/GetQuestions/${assessmentId}`
    );
    console.log(resp);
    const data = resp.data;
    Diagnostic("SUCCESS ON GET, returning", data);
    return data;
  } catch (err) {
    Diagnostic("ERROR ON GET, returning", err);

    console.error(err);
  }
};

export const deleteQuestion = async (questionId: string) => {
  try {
    const resp = await del(
      `${wQuestionUrl}/questionId?questionId=${questionId}`
    );
    const data = resp.data;
    Diagnostic("SUCCESS ON DELETE, returning", data);
    return data;
  } catch (err) {
    Diagnostic("ERROR ON DELETE, returning", err);

    console.error(err);
  }
};

export const createUpdateOptionRubric = async (
  entries: any,
  questionId: string,
  questionType: string,
  correctValue: string
) => {
  const objArray = formDataEntriesArray(entries);
  const createUrl =
    questionType == "Quiz"
      ? `${wOptionUrl}/AddOption`
      : `${wRubricUrl}/AddRubric`;
  const updateUrl =
    questionType == "Quiz"
      ? `${wOptionUrl}/UpdateOption`
      : `${wRubricUrl}/UpdateRubric`;

  const promiseArray = [];
  for (const obj of objArray) {
    const body: FormObject =
      questionType == "Quiz"
        ? {
            ...obj,
            isCorrect: correctValue == obj.label,
            questionId,
          }
        : {
            ...obj,
            questionId,
          };

    if (body && body.id) {
      promiseArray.push(put(updateUrl, body));
    } else if (obj.label !== "" && obj.description !== "") {
      promiseArray.push(post(createUrl, body));
    }
  }
  const response = await Promise.all(promiseArray);
  Diagnostic("SUCCESS ON POST, returning", response);
};
