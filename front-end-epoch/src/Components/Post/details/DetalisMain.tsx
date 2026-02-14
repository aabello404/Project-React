import GlobalHeader from "../../Header/GlobalHeader/GlobalHeader";
import GlobalNavigator from "../../NavBar/GlobalNavigatorBar";
import { type dto } from "../../../Pages/Post";
import MainBodyDetails from "./MainBodyDetails";
export interface childprops {
  Data: dto;
}
export default function DetailsMain(props: childprops) {
  return (
    <>
      <GlobalHeader />
      <GlobalNavigator />
      <MainBodyDetails Data={props.Data} />
    </>
  );
}
