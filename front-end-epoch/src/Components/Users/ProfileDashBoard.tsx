import style from "./ProfileDashBoard.module.css";
import ProfileIcon from "../../assets/svg/account_circle_53dp_E3E3E3_FILL1_wght400_GRAD0_opsz48.svg";
import { useRef, useState } from "react";
import SvgLoading from "../SvgLoading/SvgLoading";
import { useNavigate } from "react-router-dom";
import { Fetch } from "../../Services/UserService/EditProfile.service";
interface childprops {
  Data: {
    id: number;
    createdOn: Date;
    name: string;
    email: string;
    hash: string;
    lastUpdate: Date;
    profilePhotoUrl: string | null;
  };
}
export default function ProfileDashBoard(props: childprops) {
  const navigate = useNavigate();
  const UrlProfile = props.Data.profilePhotoUrl
    ? props.Data.profilePhotoUrl
    : ProfileIcon;
  const dateJoined = new Date(props.Data.createdOn).getFullYear();
  const [Url, setUrl] = useState("");
  const [isInputDisabled, setInputState] = useState(true);
  const [isfetchActive, setStateFetch] = useState(false);
  const [isEdit, setEditState] = useState(false);
  const formref = useRef(null);
  async function handleEditclick() {
    if (!isEdit) {
      setInputState(false);
      setEditState(true);
      return;
    }
    if (!formref.current) return;
    setStateFetch(true);
    try {
      const response = await Fetch(formref.current, navigate);
      if (response) location.reload();
    } catch (err) {
      console.log("Error fetching data", err);
    } finally {
      setStateFetch(false);
      setInputState(true);
      setEditState(false);
    }
  }
  function renderImage(e: any) {
    const files = e.target.files[0];
    if (!files) {
      setUrl("");
      return;
    }
    const url = URL.createObjectURL(files);
    setUrl(url);
  }
  function handleCancel() {
    setInputState(true);
    setEditState(false);
  }

  return (
    <>
      <main className={style.DashBoardMain}>
        <div className={style.ProfilePhotoContainer}>
          <div className={style.inputProfileImageHolder}>
            <div
              className={`${style.svgContainer} ${isEdit ? style.active : ""}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 -960 960 960"
                width="48px"
                fill="#000000"
              >
                <path d="M120-120v-128l575-574q8-8 19-12.5t23-4.5q11 0 22 4.5t20 12.5l44 44q9 9 13 20t4 22q0 11-4.5 22.5T823-694L248-120H120Zm619-577 40-40-41-41-40 40 41 41Z" />
              </svg>
            </div>
            <div className={`${style.inputTag} ${isEdit ? style.active : ""}`}>
              <form ref={formref} onSubmit={(e) => e.preventDefault()}>
                <input
                  type="file"
                  name="editProfilphoto"
                  id="profileInput"
                  accept="image/*"
                  title="Select"
                  onChange={renderImage}
                />
              </form>
            </div>
            {Url ? <img src={Url} alt="" /> : <img src={UrlProfile} alt="" />}
          </div>
        </div>
        <div className={style.ProfileDetailsContainer}>
          <div className={style.ButtunHolder}>
            {isEdit && (
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
            )}
            {isfetchActive ? (
              <SvgLoading />
            ) : (
              <button
                type="button"
                className={isEdit ? style.SaveBtn : ""}
                onClick={handleEditclick}
              >
                {isEdit ? "Save" : "Edit"}
              </button>
            )}
          </div>
          <div className={style.inputsContainer}>
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              className={isInputDisabled ? "" : style.active}
              defaultValue={props.Data.name}
              disabled={isInputDisabled}
              title="name"
            />
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              className={isInputDisabled ? "" : style.active}
              defaultValue={props.Data.email}
              disabled={isInputDisabled}
              title="Email"
            />
            <label htmlFor="">Date joined</label>
            <input
              type="text"
              name="dateJoined"
              defaultValue={dateJoined}
              disabled
              title="DateJoined"
            />
          </div>
        </div>
      </main>
    </>
  );
}
