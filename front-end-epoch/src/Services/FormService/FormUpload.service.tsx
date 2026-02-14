import type { NavigateFunction } from "react-router-dom";

export function DateYear() {
  const years = [];
  const year = new Date().getFullYear();
  for (let index = year; index > 1860; index--) {
    years.push(index);
  }
  return years;
}

export async function connect(
  event: HTMLFormElement,
  _setStateFetch: React.Dispatch<React.SetStateAction<boolean>>,
  _UpdateStatusResponse: React.Dispatch<
    React.SetStateAction<{
      showdiv: boolean;
      message: string;
      messageType: boolean;
    }>
  >,
  navigate: NavigateFunction,
) {
  const FD = new FormData(event);
  try {
    const accessToken = sessionStorage.getItem("UserEpoch");
    if (!accessToken) navigate("/auth");
    _setStateFetch(true);
    const response = await fetch("http://localhost:9000/user/upload", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: FD,
    });
    const data = await response.json();
    if (!response.ok) {
      _UpdateStatusResponse(() => ({
        showdiv: true,
        message: data.message,
        messageType: false,
      }));
    } else {
      if (response.status === 401) navigate("/auth");
      _UpdateStatusResponse(() => ({
        showdiv: true,
        message: data.message,
        messageType: true,
      }));
    }
  } catch (error) {
    console.log(error);
  } finally {
    _setStateFetch(false);
  }
}

export function ValidateInputs(inputvalue: {
  title: string;
  description: string;
  location: string;
}) {
  let Error: {
    title: boolean;
    description: boolean;
    location: boolean;
  } = { title: false, description: false, location: false };

  inputvalue.title === ""
    ? (Error = {
        ...Error,
        title: true,
      })
    : (Error = {
        ...Error,
        title: false,
      });
  inputvalue.description === ""
    ? (Error = {
        ...Error,
        description: true,
      })
    : (Error = {
        ...Error,
        description: false,
      });
  inputvalue.location === ""
    ? (Error = {
        ...Error,
        location: true,
      })
    : (Error = {
        ...Error,
        location: false,
      });

  return Error;
}
