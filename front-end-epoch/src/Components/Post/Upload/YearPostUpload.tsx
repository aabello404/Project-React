import style from "./FormUpload.module.css";
import { DateYear } from "../../../Services/FormUpload.service";
import { useEffect, useState } from "react";
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

export default function YearPhotoTaken(props: childprops) {
  const [isErrorClass, setErrorClass] = useState(false);
  const [valueYear, setValue] = useState(0);
  const handleYear = (e: any) => {
    const { value } = e.target;
    setValue(parseInt(value));
    setErrorClass(false);
  };
  useEffect(() => {
    if (props.btnclicked) {
      const result = valueYear !== 0;
      setErrorClass(!result);
      props._updateStatusError((pre) => ({
        ...pre,
        isYearValid: result,
      }));
    }
  }, [props.btnclicked]);
  return (
    <>
      <div>
        <label htmlFor="dateTaken">Year</label>
        <select
          name="YearTaken"
          id="dateTaken"
          className={`${style.dateTaken} ${isErrorClass ? style.error : ""}`}
          onChange={handleYear}
          value={valueYear}
        >
          <option value={0}>Select...</option>
          {DateYear().map((data) => (
            <option value={data} key={crypto.randomUUID()}>
              {data}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
