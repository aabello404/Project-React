import style from "./FormUpload.module.css";
import { useEffect, useRef, useState } from "react";
import YearPhotoTaken from "./YearPostUpload";
import InputsUpload from "./InputsPostUpload";
import ImageUpload from "./ImagePostUpload";
import CategoryPost from "./CategoryPostUpload";
import TagsUpload from "./TagsPostUpload";
import ResponseMessage from "./responseMessage";
import { connect } from "../../../Services/FormUpload.service";
import { useNavigate } from "react-router-dom";
export default function UploadForm() {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [btnclicked, updateStatuBtn] = useState(0);
  const [fetchActive, setStateFetch] = useState(false);
  const [submitclicked, UpdateSubmit] = useState(false);
  const [responseMessgae, UpdateStatusResponse] = useState({
    showdiv: false,
    message: "",
    messageType: false,
  });
  const [errors, updateErroStatus] = useState({
    isImageValid: false,
    isInputsTdlValid: false,
    isRadioValid: false,
    isCheckBoxValid: false,
    isYearValid: false,
  });

  useEffect(() => {
    //console.log(submitclicked, errors);
    const isNotValidForm = Object.values(errors).some((val) => val == false);
    if (!submitclicked) return;
    UpdateSubmit(false);
    if (isNotValidForm) {
      UpdateStatusResponse(() => ({
        showdiv: true,
        message: "Please fill in the required fields",
        messageType: false,
      }));
      return;
    } else {
      if (formRef.current)
        connect(formRef.current, setStateFetch, UpdateStatusResponse, navigate);
    }
  }, [errors]);
  async function handleSubmitbutton(e: any) {
    e.preventDefault();
    updateStatuBtn((pre) => pre + 1);
    UpdateSubmit(true);
  }

  return (
    <>
      <div className={style.mmPage} aria-label="page container">
        <form ref={formRef} id="form-upload" className={style.formUpload}>
          <div className={style.formHolder} id="form-holder">
            <ImageUpload _updateStatusError={updateErroStatus} />

            <div id="form-upload1" className={style.formUpload1}>
              <div className={style.iptContainer}>
                <InputsUpload
                  btnclicked={btnclicked}
                  _updateErrorStatus={updateErroStatus}
                  updateStatuBtn={updateStatuBtn}
                />
                <CategoryPost
                  _updateStatusError={updateErroStatus}
                  btnclicked={btnclicked}
                  _updateBtn={updateStatuBtn}
                />
                <TagsUpload
                  _updateStatusError={updateErroStatus}
                  btnclicked={btnclicked}
                  _updateBtn={updateStatuBtn}
                />
                <YearPhotoTaken
                  _updateStatusError={updateErroStatus}
                  btnclicked={btnclicked}
                  _updateBtn={updateStatuBtn}
                />
              </div>
              <div className={style.buttonEtmessage}>
                <ResponseMessage
                  message={responseMessgae.message}
                  showdiv={responseMessgae.showdiv}
                  messageType={responseMessgae.messageType}
                  _updateMessage={UpdateStatusResponse}
                />
                {fetchActive ? (
                  <svg
                    className={style.loader}
                    id="load-recharger"
                    viewBox="0 0 50 50"
                  >
                    <circle
                      className={style.path}
                      cx="25"
                      cy="25"
                      r="20"
                    ></circle>
                  </svg>
                ) : (
                  <button
                    type="button"
                    id="publish"
                    className={`${style.publish}  ${errors.isImageValid ? style.active : ""}`}
                    onClick={handleSubmitbutton}
                  >
                    Post
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

// async function handleSubmit(e: any) {
//   e.preventDefault();
//   const formdData = new FormData(e.currentTarget);
//   console.log(formdData);
//   const Title = formdData.get("title") as string;
//   const description = formdData.get("description") as string;
//   const location = formdData.get("location") as string;
//   const category = formdData.get("category") as string;
//   const Tags = formdData.getAll("tags[]") as string[];
//   const Yeartaken = formdData.get("YearTaken") as string;
//   console.log(Yeartaken === "0");
//   if (
//     Title === "" ||
//     description === "" ||
//     location === "" ||
//     category === null ||
//     Tags.length == 0 ||
//     Yeartaken === "0"
//   ) {
//     UpdateStatusResponse(() => ({
//       showdiv: true,
//       message: "Please fill in the required fields",
//       messageType: false,
//     }));
//     return;
//   }

//   e.preventDefault();
//   try {
//     setStateFetch(true);
//     const response = await fetch("http://localhost:9000/user/upload", {
//       method: "POST",
//       body: formdData,
//     });
//     const data = await response.json();
//     if (!response.ok) {
//       UpdateStatusResponse(() => ({
//         showdiv: true,
//         message: data.message,
//         messageType: false,
//       }));
//     } else {
//       UpdateStatusResponse(() => ({
//         showdiv: true,
//         message: data.message,
//         messageType: true,
//       }));
//     }
//   } catch (error) {
//     console.log(error);
//   } finally {
//     setStateFetch(false);
//   }
// }
