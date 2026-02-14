import { Link } from "react-router-dom";
import type { childPropsNav } from "../../Services/Interface/Interface.Service";
import style from "./ExploreIcon.module.css";
import { useState } from "react";
export default function ExploreIcon(props: childPropsNav) {
  const [isopen, setState] = useState(false);
  return (
    <>
      <div className={style.explorediv} title="Explore">
        <Link to={"/explore"}>
          <div
            className={style.sideTopclass}
            onClick={() => setState(!isopen)}
            id="style.exploreIconContainer"
          >
            <svg
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
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.2426 7.75736L14.1213 14.1213L7.75736 16.2426L9.87868 9.87868L16.2426 7.75736Z"
                fill={props._isActive.explore ? "black" : "white"}
              />
            </svg>
          </div>
        </Link>
        <div className={style.exploreListContainer}>
          <ul className={style.exploreLists}>
            <li>
              <a href="#">Cars</a>
            </li>
            <li>
              <a href="#">City</a>
            </li>
            <li>
              <a href="#">Mosque</a>
            </li>
            <li>
              <a href="#">Sport</a>
            </li>
            <li>
              <a href="#">Life style</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
