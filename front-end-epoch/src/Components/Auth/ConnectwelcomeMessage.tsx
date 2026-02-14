import style from "./ConnectwelcomeMessage.module.css";
interface childprops {
  _setAuthP: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ConnectMessage(props: childprops) {
  return (
    <>
      <div className={style.connectInfo}>
        <h1 className={style.welcomeTitle}>
          Welcome to <span className={style.brand}>Epoch</span>
        </h1>
        <p className={style.welcomeSubtitle}>
          Explore history through images that shaped civilizations.
        </p>
        <div className={style.categories}>
          <span>CARS</span>
          <span>MOSQUES</span>
          <span>CITIES</span>
        </div>
        <button
          type="button"
          className={style.connectBtn}
          id="btnconnect"
          onClick={() => props._setAuthP(true)}
        >
          Connect
        </button>
      </div>
    </>
  );
}
