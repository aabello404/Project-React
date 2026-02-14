import { useEffect } from "react";
import style from "./FormUpload.module.css";
interface childprops {
  message: string;
  messageType?: boolean;
  showdiv: boolean;
  _updateMessage: React.Dispatch<
    React.SetStateAction<{
      showdiv: boolean;
      message: string;
      messageType: boolean;
    }>
  >;
}
export default function ResponseMessage(props: childprops) {
  useEffect(() => {
    if (props.showdiv) {
      const a = setTimeout(() => {
        props._updateMessage((pre) => ({
          ...pre,
          showdiv: false,
        }));
        clearTimeout(a);
      }, 6000);
    }
  }, [props.showdiv, props.message]);
  return props.messageType ? (
    <>
      <div className={style.responseMessageContainer}>
        <div
          className={`${style.responseMessage} ${props.showdiv ? style.active : ""}`}
        >
          {props.message}
        </div>
      </div>
    </>
  ) : (
    <div className={style.responseMessageContainer}>
      <div
        className={`${style.errorResponseMessage} ${props.showdiv ? style.active : ""}`}
      >
        {props.message}
      </div>
    </div>
  );
}
