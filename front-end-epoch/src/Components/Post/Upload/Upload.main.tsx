import ReturnBack from "../../ReturnButton/ReturnButton";
import style from "./Upload.main.module.css";
import UploadForm from "./FormUpload";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function MainUpload() {
  const navigate = useNavigate();
  const accesstoken = sessionStorage.getItem("UserEpoch");
  useEffect(() => {
    if (!accesstoken) {
      navigate("/auth");
      return;
    }
  });

  return (
    <>
      <main className={style.mainUpload}>
        <ReturnBack />
        <UploadForm />
      </main>
    </>
  );
}
