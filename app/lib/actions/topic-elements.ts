"use server";
import { redirect } from "next/navigation";
import { del, formDataEntriesArray, get, post, put } from "../utils";
import { wCourseUrl, rCourseUrl, wGenerateVideoScriptUrl } from "./endpoints";
import { Diagnostic } from "../logger/logger";
import { FormObject } from "@/app/interfaces/questions";
import { getKnowledgeModule } from "./knowledge-module";
import { getKnowledgeTopic } from "./knowledge-topic";
import { getCourse } from "./course";

export const createTopicElement = async (
  courseId: string,
  moduleId: string,
  topicId: string,
  courseTitle: string,
  moduleTitle: string,
  topicTitle: string,
  isPractical: boolean,
  formData: FormData
) => {
  const body = {
    title: formData.get("title"),
    elementCode: formData.get("elementCode"),
    topicId,
  };

  try {
    const data = await post(
      `${wCourseUrl}/TopicElements/AddTopicElement`,
      body
    );

    Diagnostic("SUCCESS ON POST, returning", data);
  } catch (err) {
    Diagnostic("ERROR ON POST, returning", err);
    console.error(err);
  }

  const date = new Date().toString();

  const url = isPractical
    ? `/protected/admin/courses/${courseId}/practical-modules/${moduleId}/knowledge-topic/${topicId}/topic-elements?title=${courseTitle}&moduleTitle=${moduleTitle}&topicTitle=${topicTitle}&refreshId=${date}`
    : `/protected/admin/courses/${courseId}/knowledge-modules/${moduleId}/knowledge-topic/${topicId}/topic-elements?title=${courseTitle}&moduleTitle=${moduleTitle}&topicTitle=${topicTitle}&refreshId=${date}`;
  redirect(url);
};

export const createGenerateTopicElement = async (
  courseId: string,
  moduleId: string,
  topicId: string,
  courseTitle: string,
  moduleTitle: string,
  topicTitle: string,
  isPractical: boolean,
  formData: FormData
) => {
  const [course, module, topic] = await Promise.all([
    getCourse(courseId),
    getKnowledgeModule(moduleId),
    getKnowledgeTopic(topicId),
  ]);

  const body = {
    moduleTitle: module.title,
    moduleDescription: module.description,
    topicTitle: topic.name,
    topicId: topic.id,
    topicDescription: topic.description,
    lengthOfVideoScript: topic.lengthOfVideoScript || 50,
    tone: course.videoScriptTone,
    elementTitle: formData.get("title"),
    elementCode: formData.get("elementCode"),
  };

  console.log("body:", body)
  try {
    const data = await post(
      `${wGenerateVideoScriptUrl}/topicElement/generateSingle`,
      body
    );

    Diagnostic("SUCCESS ON POST, returning", data);
  } catch (err) {
    Diagnostic("ERROR ON POST, returning", err);
    console.error(err);
  }

  const date = new Date().toString();

  const url = isPractical
    ? `/protected/admin/courses/${courseId}/practical-modules/${moduleId}/knowledge-topic/${topicId}/topic-elements?title=${courseTitle}&moduleTitle=${moduleTitle}&topicTitle=${topicTitle}&refreshId=${date}`
    : `/protected/admin/courses/${courseId}/knowledge-modules/${moduleId}/knowledge-topic/${topicId}/topic-elements?title=${courseTitle}&moduleTitle=${moduleTitle}&topicTitle=${topicTitle}&refreshId=${date}`;
  redirect(url);
};

export const updateTopicElement = async (
  id: string,
  description: string,
  videoScript: string,
  courseId: string,
  moduleId: string,
  topicId: string,
  courseTitle: string,
  moduleTitle: string,
  topicTitle: string,
  isPractical: boolean,
  formData: FormData
) => {
  const body = {
    title: formData.get("title"),
    elementCode: formData.get("elementCode"),
    id,
    moduleId,
    description,
    videoScript,
    topicId,
  };

  try {
    const resp = await put(
      `${wCourseUrl}/TopicElements/UpdateTopicElement`,
      body
    );
    console.log("resp:", resp);

    Diagnostic("SUCCESS ON PUT, returning", resp);
  } catch (err) {
    Diagnostic("ERROR ON PUT, returning", err);
  }

  const date = new Date().toString();
  const url = isPractical
    ? `/protected/admin/courses/${courseId}/practical-modules/${moduleId}/knowledge-topic/${topicId}/topic-elements?title=${courseTitle}&moduleTitle=${moduleTitle}&topicTitle=${topicTitle}&refreshId=${date}`
    : `/protected/admin/courses/${courseId}/knowledge-modules/${moduleId}/knowledge-topic/${topicId}/topic-elements?title=${courseTitle}&moduleTitle=${moduleTitle}&topicTitle=${topicTitle}&refreshId=${date}`;
  redirect(url);
};

export const getKnowledgeElements = async (topicId: string) => {
  try {
    const resp = await get(
      `${rCourseUrl}/TopicElements/GetTopicElements/${topicId}`
    );
    const data = resp.data;
    Diagnostic("SUCCESS ON GET, returning", data);
    return data;
  } catch (err) {
    Diagnostic("ERROR ON GET, returning", err);
    console.error(err);
  }
};

export const generateVideoScript = async (
  id: string,
  description: string,
  courseId: string,
  moduleId: string,
  topicId: string,
  courseTitle: string
) => {
  try {
    const [course, module, topic] = await Promise.all([
      getCourse(courseId),
      getKnowledgeModule(moduleId),
      getKnowledgeTopic(topicId),
    ]);

    const body = {
      moduleTitle: module.title,
      moduleDescription: module.description,
      topicTitle: topic.name,
      topicId: topic.id,
      topicDescription: topic.description,
      lengthOfVideoScript: topic.lengthOfVideoScript || 50,
      tone: course.videoScriptTone,
    };

    await fetch(`${wGenerateVideoScriptUrl}/topicElement/generate`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    Diagnostic("SUCCESS ON POST");
  } catch (err) {
    Diagnostic("ERROR ON POST, returning", err);
    console.error(err);
  }

  const date = new Date().toString();
  const url = `/protected/admin/courses/${courseId}/knowledge-modules/${moduleId}/knowledge-topic/${topicId}/topic-elements?title=${courseTitle}&refreshId=${date}`;
  redirect(url);
};

export const createTopicElements = async (entries: any, topicId: string) => {
  const objArray = formDataEntriesArray(entries);

  const promiseArray = [];
  for (const obj of objArray) {
    const body: FormObject = {
      ...obj,
      topicId,
    };

    promiseArray.push(
      post(`${wCourseUrl}/TopicElements/AddTopicElement`, body)
    );
  }
  const response = await Promise.all(promiseArray);
  Diagnostic("SUCCESS ON POST, returning", response);
};

export const updateVideoLink = async (elementId: string, videoUrl: string) => {
  try {
    const data = await put(`${wCourseUrl}/TopicElements/UploadVideoUrl`, {
      elementId,
      videoUrl,
    });
    Diagnostic("SUCCESS ON PUT, returning", data);
  } catch (error) {
    Diagnostic("ERROR ON PUT, returning", error);

    throw error;
  }
};

export const deleteTopicElement = async (elementId: string) => {
  try {
    const resp = await del(
      `${wCourseUrl}/TopicElements/DeleteTopicElement/${elementId}`
    );
    const data = resp.data;
    Diagnostic("SUCCESS ON DELETE, returning", data);
    return data;
  } catch (err) {
    Diagnostic("ERROR ON DELETE, returning", err);

    console.error(err);
  }
};
