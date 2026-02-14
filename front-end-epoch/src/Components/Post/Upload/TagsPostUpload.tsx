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
export default function TagsUpload(props: childprops) {
  const [classError, updateErrorClass] = useState(false);
  const [checkValidation, UpdateCheckStatus] = useState({
    car: false,
    mosque: false,
    city: false,
    people: false,
    bicycle: false,
    morocco: false,
    horse: false,
    Africa: false,
    usa: false,
  });

  useEffect(() => {
    if (props.btnclicked < 1) return;

    const validArry = Object.values(checkValidation).some((element) => {
      return element == true;
    });
    // console.log(validArry)

    //console.log("result=", result);
    props._updateStatusError((pre) => ({
      ...pre,
      isCheckBoxValid: validArry,
    }));

    updateErrorClass(!validArry);
  }, [props.btnclicked]);

  function handleChecks(e: any) {
    const { value, checked } = e.target;
    UpdateCheckStatus((pre) => ({
      ...pre,
      [value]: checked,
    }));

    updateErrorClass(false);
  }
  // console.log(checkValidation);
  return (
    <>
      <div
        className={`${style.Tagscontainer} ${classError ? style.error : ""}`}
      >
        <p>#Tags:</p>
        <ul>
          <li>
            <input
              type="checkbox"
              className={style.checkboxChoices}
              name="tags[]"
              defaultValue="car"
              placeholder="car"
              id="carCategory"
              checked={checkValidation.car}
              onChange={handleChecks}
            />{" "}
            <label htmlFor="carCategory">Car</label>
          </li>
          <li>
            <input
              type="checkbox"
              className={style.checkboxChoices}
              name="tags[]"
              defaultValue="mosque"
              placeholder="mosque"
              id="mosqueCategory"
              checked={checkValidation.mosque}
              onChange={handleChecks}
            />{" "}
            <label htmlFor="mosqueCategory">Mosque</label>
          </li>
          <li>
            <input
              type="checkbox"
              className={style.checkboxChoices}
              name="tags[]"
              defaultValue="city"
              placeholder="city"
              checked={checkValidation.city}
              id="cityCategory"
              onChange={handleChecks}
            />{" "}
            <label htmlFor="cityCategory">City</label>
          </li>
          <li>
            <input
              type="checkbox"
              className={style.checkboxChoices}
              name="tags[]"
              defaultValue="people"
              placeholder="people"
              id="people"
              onChange={handleChecks}
              checked={checkValidation.people}
            />{" "}
            <label htmlFor="people">people</label>
          </li>
          <li>
            <input
              type="checkbox"
              className={style.checkboxChoices}
              name="tags[]"
              defaultValue="bicycle"
              placeholder="bicycle"
              checked={checkValidation.bicycle}
              id="bicycle"
              onChange={handleChecks}
            />{" "}
            <label htmlFor="bicycle">bicycle</label>
          </li>
          <li>
            <input
              type="checkbox"
              className={style.checkboxChoices}
              name="tags[]"
              defaultValue="morocco"
              placeholder="morocco"
              checked={checkValidation.morocco}
              id="morocco"
              onChange={handleChecks}
            />{" "}
            <label htmlFor="morocco">morocco</label>
          </li>
          <li>
            <input
              type="checkbox"
              className={style.checkboxChoices}
              name="tags[]"
              defaultValue="horse"
              placeholder="horse"
              checked={checkValidation.horse}
              id="horse"
              onChange={handleChecks}
            />{" "}
            <label htmlFor="horse">horse</label>
          </li>
          <li>
            <input
              type="checkbox"
              className={style.checkboxChoices}
              name="tags[]"
              defaultValue="Africa"
              placeholder="Africa"
              checked={checkValidation.Africa}
              id="Africa"
              onChange={handleChecks}
            />{" "}
            <label htmlFor="Africa">Africa</label>
          </li>
          <li>
            <input
              type="checkbox"
              className={style.checkboxChoices}
              name="tags[]"
              defaultValue="usa"
              checked={checkValidation.usa}
              placeholder="usa"
              id="usa"
              onChange={handleChecks}
            />{" "}
            <label htmlFor="usa">usa</label>
          </li>
        </ul>
      </div>
    </>
  );
}
