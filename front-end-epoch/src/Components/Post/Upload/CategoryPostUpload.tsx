import { useEffect, useState } from "react";
import style from "./FormUpload.module.css";
interface childprops {
  _updateStatusError: React.Dispatch<
    React.SetStateAction<{
      isImageValid: boolean;
      isInputsTdlValid: boolean;
      isRadioValid: boolean;
      isCheckBoxValid: boolean;
      isYearValid: boolean;
    }>
  >;
  btnclicked: number;
  _updateBtn: React.Dispatch<React.SetStateAction<number>>;
}
export default function CategoryPost(props: childprops) {
  const [isErrorRadio, classState] = useState(false);
  const [clickedRadio, UpdateState] = useState(false);
  function checkRadio() {
    UpdateState(true); // upadating state so it wont be an error
    classState(false); //updating the error color if it exist
  }
  useEffect(() => {
    if (props.btnclicked) {
      props._updateStatusError((pre) => ({
        ...pre,
        isRadioValid: clickedRadio,
      }));
      classState(clickedRadio == false);
    }
    //console.log(props.btnclicked);
  }, [props.btnclicked]);
  return (
    <>
      <div
        className={`${style.catcontainer} ${isErrorRadio ? style.error : ""} `}
      >
        <p>Categorie:</p>
        <ul>
          <li>
            <input
              type="radio"
              className="radiocheck"
              name="category"
              defaultValue="car"
              placeholder="car"
              id="carCategory"
              onClick={checkRadio}
            />{" "}
            <label htmlFor="carCategory">Car</label>
          </li>
          <li>
            <input
              type="radio"
              className="radiocheck"
              name="category"
              defaultValue="mosque"
              placeholder="mosque"
              id="mosqueCategory"
              onClick={checkRadio}
            />{" "}
            <label htmlFor="mosqueCategory">Mosque</label>
          </li>
          <li>
            <input
              type="radio"
              className="radiocheck"
              name="category"
              defaultValue="city"
              placeholder="city"
              id="cityCategory"
              onClick={checkRadio}
            />{" "}
            <label htmlFor="cityCategory">City</label>
          </li>
        </ul>
      </div>
    </>
  );
}
