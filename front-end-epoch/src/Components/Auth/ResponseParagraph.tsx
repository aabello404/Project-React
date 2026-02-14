import style from "./ResponseParagraph.module.css";
interface childprops {
  _response: {
    isSuccess: boolean;
    message: string;
    show: boolean;
  };
}

export default function ResponsePrargraph(prpos: childprops) {
  return prpos._response.isSuccess ? (
    <p className={prpos._response.isSuccess ? style.successSignIn : ""}>
      {prpos._response.message}
    </p>
  ) : (
    <p className={prpos._response.isSuccess ? "" : style.errorSignIn}>
      {prpos._response.message}
    </p>
  );
}
