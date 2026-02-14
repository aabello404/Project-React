import { Link } from "react-router-dom";
import style from "./HomeIcon.module.css";

import type { childPropsNav } from "../../Services/Interface/Interface.Service";

export default function HomeIcon(props: childPropsNav) {
  return (
    <>
      <div className={style.HomeContainer} title="Home">
        <Link to={"/"}>
          <div className={style.sideTopclass}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="black"
              fill={props._isActive.home ? "black" : "white"}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" />
            </svg>
          </div>
        </Link>
      </div>
    </>
  );
}
