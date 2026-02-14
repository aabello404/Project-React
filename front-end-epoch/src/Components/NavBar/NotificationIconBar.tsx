import style from "./NotificationIconBar.module.css";
import notibell from "../../assets/svg/check_circle_unread_65dp_000000_FILL1_wght400_GRAD0_opsz48.svg";
//import { useState } from "react";
import type { childPropsNavNot } from "../../Services/Interface/Interface.Service";
export default function NotificationIconBar(props: childPropsNavNot) {
  //const [isopen, setState] = useState(false);

  return (
    <>
      <div className={style.notificationContainer}>
        <div
          className={style.sideTopclass}
          title="Notifications"
          onClick={props.onclick}
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
              d="M18 8A6 6 0 0 0 6 8C6 12 4 14 4 14H20C20 14 18 12 18 8ZM10.26 21.31A2 2 0 0 0 13.74 21.31"
              fill={props._isActive.notification ? "black" : "white"}
            />
          </svg>
        </div>
        <span className={style.notificationCounter}>0</span>
        <div
          className={style.notifeed}
          style={{ display: props._isActive.notification ? "flex" : "none" }}
        >
          <img src={notibell} alt="" />
          <p>Nothing here yet!</p>
        </div>
      </div>
    </>
  );
}
