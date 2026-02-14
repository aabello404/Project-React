import { Link } from "react-router-dom";
import style from "./HomeIcon.module.css";
import type { childPropsNav } from "../../Services/Interface/Interface.Service";
export default function CreatePost(props: childPropsNav) {
  return (
    <>
      <div className={style.sideTopclass} title="create Post">
        <Link to={"/compose/post"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill={props._isActive.composepost ? "black" : "#cf3636"}
          >
            <path d="M450-280h60v-170h170v-60H510v-170h-60v170H280v60h170v170ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Z" />
          </svg>
        </Link>
      </div>
    </>
  );
}
