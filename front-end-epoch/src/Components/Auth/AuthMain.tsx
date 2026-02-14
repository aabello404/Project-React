import ConnectMessage from "./ConnectwelcomeMessage";
import AuthPanel from "./AuthPanel";
import GridImages from "./gridImages";
import style from "./AuthMain.module.css";
import AuthHeader from "../Header/AuthHeader/AuthHeader";
import { useState } from "react";

export default function AuthMain() {
  const [IsAuthpanelactive, setStateAuthpanel] = useState(false);
  return (
    <>
      <div className={style.AuthBody}>
        <AuthHeader />
        <ConnectMessage _setAuthP={setStateAuthpanel} />
        <AuthPanel
          _isauthPanel={IsAuthpanelactive}
          _setAuthP={setStateAuthpanel}
        />
        <GridImages />
      </div>
    </>
  );
}
