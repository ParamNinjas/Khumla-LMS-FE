import { Diagnostic } from "./logger/logger";

export const post = async (url: string, body: any) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    Diagnostic("SUCCESS ON POST, returning", data);
    return data;
  } catch (err) {
    console.log(`[API ERROR : Method: POST; Endpoint: ${url}]`, err);
    Diagnostic("ERROR ON POST, returning", err);
    return err;
  }
};

export const put = async (url: string, body: any) => {
  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    Diagnostic("SUCCESS ON PUT, returning", data);
    return data;
  } catch (err) {
    console.log(`[API ERROR : Method: PUT; Endpoint: ${url}]`, err);
    Diagnostic("ERROR ON PUT, returning", err);
    return err;
  }
};

export const get = async (url: string) => {
  try {
    const res = await fetch(url, { cache: 'no-store' });
    const data = await res.json();
    Diagnostic("SUCCESS ON GET, returning", data);
    return data;
  } catch (err) {
    console.log(`[API ERROR : Method: GET; Endpoint: ${url}]`, err);
    Diagnostic("ERROR ON GET, returning", err);
    return err;
  }
};

export function generateRandomUserId(length?: number) {
  length = length || 8;
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var result = "";
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export const removeTags = (str: string) => str.replace(/<(?:\/)?[sp]+[^>]*>/g, "");
