import { useState } from "react";
import style from "./AuthPanel.module.css";
import SignIn from "./AuthSignin";
import SignUp from "./AuthSingup";
import ChooseFrom from "./ChooseFrom";
interface childprops {
  _isauthPanel: boolean;
  _setAuthP: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AuthPanel(props: childprops) {
  const [isSignIn, setIsSignIn] = useState(true);
  function handleClose(e: any) {
    if (e.target.classList.contains(style.visible)) {
      props._setAuthP(false);
    }
  }

  return (
    <>
      <div
        className={`${style.allcontent} ${props._isauthPanel ? style.visible : ""}`}
        onClick={handleClose}
        id="boxid"
      >
        <div className={style.boxContainer}>
          <ChooseFrom
            _setAuthP={props._setAuthP}
            _isSignIn={isSignIn}
            _setIsSignIn={setIsSignIn}
          />
          <SignIn _iSsingIn={isSignIn} _isauthPanel={props._isauthPanel} />
          <SignUp _iSsingIn={isSignIn} _isauthPanel={props._isauthPanel} />
        </div>
      </div>
    </>
  );
}
