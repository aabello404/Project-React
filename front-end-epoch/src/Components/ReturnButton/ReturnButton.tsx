import { useNavigate } from "react-router-dom";
import style from "./ReturnButton.module.css";
export default function ReturnBack() {
  const navigate = useNavigate();
  function HandleReturn() {
    if (window.history.length > 1) {
      return navigate(-1);
    } else return navigate("/");
  }
  return (
    <>
      <div className={style.returnBtnContainer}>
        <svg
          onClick={HandleReturn}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </div>
    </>
  );
}
