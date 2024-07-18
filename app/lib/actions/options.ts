"use server";
import { del, get, post } from "../utils";
import { rOptionUrl, wOptionUrl } from "./endpoints";
import { Diagnostic } from "../logger/logger";

export const createOption = async (
  label: string,
  description: string,
  questionId: string
) => {
  try {
    const resp = await post(`${wOptionUrl}/AddOption`, {
      label,
      description,
      questionId,
    });

    const data = resp.data;
    Diagnostic("SUCCESS ON GET, returning", data);
    return data;
  } catch (err) {
    Diagnostic("ERROR ON GET, returning", err);

    console.error(err);
  }
};

export const getOptions = async (questionId: string) => {
  try {
    const resp = await get(`${rOptionUrl}/GetOptions/${questionId}`);
    const data = resp.data;
    Diagnostic("SUCCESS ON GET, returning", data);
    return data;
  } catch (err) {
    Diagnostic("ERROR ON GET, returning", err);

    console.error(err);
  }
};

export const deleteOption = async (optionId: string) => {
  try {
    const resp = await del(`${wOptionUrl}/${optionId}`);
    const data = resp.data;
    Diagnostic("SUCCESS ON DELETE, returning", data);
    return data;
  } catch (err) {
    Diagnostic("ERROR ON DELETE, returning", err);

    console.error(err);
  }
};
