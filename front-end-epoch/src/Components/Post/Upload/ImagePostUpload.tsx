import style from "./FormUpload.module.css";
import { useEffect, useState } from "react";
interface chilprops {
  _updateStatusError: React.Dispatch<
    React.SetStateAction<{
      isImageValid: boolean;
      isInputsTdlValid: boolean;
      isRadioValid: boolean;
      isCheckBoxValid: boolean;
      isYearValid: boolean;
    }>
  >;
}
export default function ImageUpload(props: chilprops) {
  const [Url, setUrl] = useState("");
  const [isphototselected, UpdateState] = useState(false);
  function renderImage(event: any) {
    const files = event.target && event.target.files[0];
    if (!files) {
      setUrl("");
      UpdateState(false);
    } else {
      UpdateState(true);
      const Url = URL.createObjectURL(files);
      setUrl(Url);
    }
  }
  useEffect(() => {
    props._updateStatusError((pre) => ({
      ...pre,
      isImageValid: isphototselected,
    }));
  }, [isphototselected]);
  return (
    <>
      <div className={style.photoDisplay} id="AZER">
        {isphototselected && Url && (
          <img
            src={Url}
            className={style.EpochDisplay}
            alt=""
            id="Epoch-display"
            title="click to add"
          />
        )}

        <input
          type="file"
          name="photo"
          id="image-Epoch"
          placeholder="add"
          accept="image/*"
          onChange={renderImage}
        />
        <div className={style.MessageContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="70px"
            fill="white"
          >
            <path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Z" />
          </svg>
          <p className={style.dragPara}>Drag &amp; Drop Files Here</p>
          or click to browse
        </div>
      </div>
    </>
  );
}
