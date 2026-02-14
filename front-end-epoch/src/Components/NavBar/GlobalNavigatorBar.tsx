import style from "./GlobalNavigatorBar.module.css";
import { setLocation } from "../../Services/NavService/Nav.Service";
import HomeIcon from "./HomeIcon";
import ExploreIcon from "./ExploreIcon";
import NotificationIconBar from "./NotificationIconBar";
import SettingsIconBar from "./SettingsIcons";
import CreatePost from "./CreatePost";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function GlobalNavigator() {
  const Path = useLocation();

  const [isactive, setActive] = useState({
    home: false,
    explore: false,
    notification: false,
    composepost: false,
    settings: false,
  });
  useEffect(() => {
    setActive(setLocation(Path.pathname));
  }, [Path.pathname]);
  const Handleswitch = () => {
    isactive.notification
      ? setActive(setLocation(Path.pathname))
      : setActive({
          home: false,
          explore: false,
          notification: true,
          settings: false,
          composepost: false,
        });
  };
  const HandleSwitchSettings = () => {
    isactive.settings
      ? setActive(setLocation(Path.pathname))
      : setActive({
          home: false,
          explore: false,
          notification: false,
          settings: true,
          composepost: false,
        });
  };

  return (
    <>
      <nav className={style.main}>
        <div className={style.navigcontainer}>
          <div className={style.navContainer1}>
            <HomeIcon _isActive={isactive} />
            <ExploreIcon _isActive={isactive} />
            <NotificationIconBar _isActive={isactive} onclick={Handleswitch} />
            <CreatePost _isActive={isactive} />
          </div>
          <SettingsIconBar
            _isActive={isactive}
            onclick={HandleSwitchSettings}
          />
        </div>
      </nav>
    </>
  );
}

// const [ishome,setStateH]=useState(false);
// const [isexplore,setStateE]=useState(false);
// const [isnoti,setStateN]=useState(false);
// const [isSett,setStateS]=useState(false);
