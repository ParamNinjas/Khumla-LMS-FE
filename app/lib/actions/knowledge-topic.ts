"use server";
import { redirect } from "next/navigation";
import { del, formDataEntriesArray, get, post, put } from "../utils";
import { wCourseUrl, rCourseUrl } from "./endpoints";
import { Diagnostic } from "../logger/logger";
import { FormObject } from "@/app/interfaces/questions";
import { KnowledgeModule } from "@/app/interfaces/modules";

export const createKnowledgeTopic = async (
  courseId: string,
  moduleId: string,
  courseTitle: string,
  moduleTitle: string,
  isPractical: boolean,
  formData: FormData
) => {
  const body = {
    name: formData.get("name"),
    description: formData.get("description"),
    topicCode: formData.get("topicCode"),
    lengthOfVideoScript: formData.get("lengthOfVideoScript") || 100,
    moduleId,
  };

  const entries: any = formData.entries();
  let knowledgeTopic = {} as KnowledgeModule;
  try {
    const data = await post(
      `${wCourseUrl}/KnowledgeTopics/AddKnowledgeTopic`,
      body
    );
    knowledgeTopic = data.data;
    Diagnostic("SUCCESS ON POST, returning", data);

    createTopicElements(entries, knowledgeTopic.id);
  } catch (err) {
    Diagnostic("ERROR ON POST, returning", err);
    console.error(err);
  }

  const date = new Date().toString();

  const url = isPractical
    ? `/protected/admin/courses/${courseId}/practical-modules/${moduleId}/knowledge-topics?title=${courseTitle}&moduleTitle=${moduleTitle}&refreshId=${date}`
    : `/protected/admin/courses/${courseId}/knowledge-modules/${moduleId}/knowledge-topics?title=${courseTitle}&moduleTitle=${moduleTitle}&refreshId=${date}`;
  redirect(url);
};

export const updateKnowledgeTopic = async (
  id: string,
  description: string,
  courseId: string,
  moduleId: string,
  courseTitle: string,
  moduleTitle: string,
  isPractical: boolean,
  formData: FormData
) => {
  const body = {
    name: formData.get("name"),
    topicCode: formData.get("topicCode"),
    lengthOfVideoScript: formData.get("lengthOfVideoScript") || 0,
    id,
    moduleId,
    description,
  };

  try {
    const resp = await put(
      `${wCourseUrl}/KnowledgeTopics/UpdateKnowledgeTopic`,
      body
    );

    Diagnostic("SUCCESS ON PUT, returning", resp);
  } catch (err) {
    Diagnostic("ERROR ON PUT, returning", err);
  }

  const date = new Date().toString();
  const url = isPractical
    ? `/protected/admin/courses/${courseId}/practical-modules/${moduleId}/knowledge-topics?title=${courseTitle}&moduleTitle=${moduleTitle}&refreshId=${date}`
    : `/protected/admin/courses/${courseId}/knowledge-modules/${moduleId}/knowledge-topics?title=${courseTitle}&moduleTitle=${moduleTitle}&refreshId=${date}`;
  redirect(url);
};

export const getKnowledgeTopics = async (moduleId: string) => {
  try {
    const resp = await get(
      `${rCourseUrl}/KnowledgeTopics/GetKnowledgeTopics/${moduleId}`
    );
    const data = resp.data;
    Diagnostic("SUCCESS ON GET, returning", data);
    return data;
  } catch (err) {
    Diagnostic("ERROR ON GET, returning", err);
    console.error(err);
  }
};

export const getKnowledgeTopic = async (topicId: string) => {
  try {
    const resp = await get(
      `${rCourseUrl}/KnowledgeTopics/GetKnowledgeTopic/${topicId}`
    );
    const data = resp.data;
    Diagnostic("SUCCESS ON GET, returning", data);
    return data;
  } catch (err) {
    Diagnostic("ERROR ON GET, returning", err);
    console.error(err);
  }
};

export const createTopicElements = async (entries: any, topicId: string) => {
  const objArray = formDataEntriesArray(entries);

  for (const obj of objArray) {
    if (obj.elementCode == "" || obj.title == "") continue;
    const body: FormObject = {
      ...obj,
      topicId,
    };

    await post(`${wCourseUrl}/TopicElements/AddTopicElement`, body);
  }
  Diagnostic("SUCCESS ON POST, returning", "Success !");
};

export const deleteKnowledgeTopic = async (topicId: string) => {
  try {
    const resp = await del(
      `${wCourseUrl}/KnowledgeTopics/DeleteKnowledgeTopic/${topicId}`
    );
    const data = resp.data;
    Diagnostic("SUCCESS ON DELETE, returning", data);
    return data;
  } catch (err) {
    Diagnostic("ERROR ON DELETE, returning", err);

    console.error(err);
  }
};
