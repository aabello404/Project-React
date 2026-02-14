import { type NavigateFunction } from "react-router-dom";

export async function Fetch(
  _formRef: HTMLFormElement,
  navigate: NavigateFunction,
) {
  return new Promise<boolean | string>(async (resolve, reject) => {
    try {
      const fd = new FormData(_formRef);
      for (let t of fd.entries()) {
        console.log(t[0], t[1]);
      }
      const accessToken = sessionStorage.getItem("UserEpoch");
      if (!accessToken) navigate("/auth");
      const response = await fetch("http://localhost:9000/user/editprofile", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: fd,
      });
      if (response.ok) resolve(true);
      else if (response.status === 401) navigate("/auth");
      else reject("Something went confliction !");
    } catch (error) {
      console.error(error);
      reject("Something went wrong!");
    }
  });
}
