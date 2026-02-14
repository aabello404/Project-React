import ReturnBack from "../../ReturnButton/ReturnButton";
import ImageDescription from "./Description";
import style from "./MainBodyDetails.module.css";
import type { childprops } from "./DetalisMain";
export default function MainBodyDetails(props: childprops) {
  return (
    <>
      <div className={style.divMainBody}>
        <ReturnBack />
        <main className={style.mainBody}>
          <ImageDescription Data={props.Data} />
        </main>
      </div>
    </>
  );
}
