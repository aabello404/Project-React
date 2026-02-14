import { ValidateInputs } from "../../../Services/FormService/FormUpload.service";
import style from "./FormUpload.module.css";
import { useEffect, useRef, useState } from "react";
interface childProps {
  btnclicked: number;
  _updateErrorStatus: React.Dispatch<
    React.SetStateAction<{
      isImageValid: boolean;
      isInputsTdlValid: boolean;
      isRadioValid: boolean;
      isCheckBoxValid: boolean;
      isYearValid: boolean;
    }>
  >;
  updateStatuBtn: React.Dispatch<React.SetStateAction<number>>;
}

export default function InputsUpload(props: childProps) {
  const [ErrorClass, updateErrorClass] = useState({
    title: false, // does error exist on title input
    description: false,
    location: false,
  });
  const firstrenderDone = useRef(0);
  const [inputvalue, setValueInput] = useState({
    title: "",
    description: "",
    location: "",
  });

  function handleInput(e: any) {
    const { name, value } = e.target;
    setValueInput((pre) => ({
      ...pre,
      [name]: value,
    }));
  }

  function UpdateParent() {
    const errorS = ValidateInputs(inputvalue);
    const hasError = errorS.title || errorS.description || errorS.location;
    if (hasError) {
      props._updateErrorStatus((pre) => ({
        ...pre,
        isInputsTdlValid: false,
      }));
      updateErrorClass(errorS);
      return;
    }
    props._updateErrorStatus((pre) => ({
      ...pre,
      isInputsTdlValid: true,
    }));
  }

  useEffect(() => {
    firstrenderDone.current = firstrenderDone.current + 1;
    if (props.btnclicked < 1) return;
    UpdateParent();
  }, [props.btnclicked]);

  const removeError = (e: any) => {
    const { name } = e.target;
    if (e.target.classList.contains(style.error)) {
      updateErrorClass((pre) => ({
        ...pre,
        [name]: false,
      }));
    }
  };

  return (
    <>
      <input
        type="text"
        value={inputvalue.title}
        name="title"
        id="Epoch-title"
        placeholder="Title"
        className={ErrorClass.title ? style.error : ""}
        onChange={handleInput}
        onInput={removeError}
      />
      <textarea
        name="description"
        value={inputvalue.description}
        id="description"
        placeholder="write-Description"
        className={ErrorClass.description ? style.error : ""}
        onChange={handleInput}
        onInput={removeError}
      />
      <input
        type="text"
        name="location"
        value={inputvalue.location}
        className={ErrorClass.location ? style.error : ""}
        id="location"
        placeholder="Location"
        onChange={handleInput}
        onInput={removeError}
      />
    </>
  );
}
