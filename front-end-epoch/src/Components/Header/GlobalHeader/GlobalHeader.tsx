import { Link, useNavigate } from "react-router-dom";
import acountProfile from "../../../assets/svg/account_circle_53dp_E3E3E3_FILL1_wght400_GRAD0_opsz48.svg";
import style from "./GlobalHeader.module.css";
import { useState, type ChangeEvent } from "react";
function GlobalHeader() {
  const [serachInput, setInput] = useState("");
  const navigate = useNavigate();
  function hanldeInputs(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setInput(value);
  }
  function handleSearch() {
    serachInput.trim() && navigate(`/search/${serachInput.trim()}`);
  }
  return (
    <>
      <header className={style.main}>
        <div className={style.companyname}>
          <a href="" id="home-link" title="home">
            <svg
              width="180"
              height="60"
              viewBox="80 30 240 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text x="69%" y="85" text-anchor="middle">
                Epoch
              </text>
              <path
                d="M120,105 C160,120 240,120 280,105"
                stroke="red"
                stroke-width="3"
                fill="none"
                stroke-linecap="round"
                opacity="0.8"
              />
            </svg>
          </a>
        </div>
        <div className={style.profile}>
          <div className={style.iptsearch}>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="search"
                className={style.searchbox}
                value={serachInput}
                placeholder="Search for history, monument, etc."
                name="EpochSearch"
                onChange={hanldeInputs}
              />
              <button
                type="submit"
                className={style.btnsearch}
                onClick={handleSearch}
              >
                Search
              </button>
            </form>
          </div>
          <Link to={"/profile"}>
            <div className="profilecontainer">
              <img
                src={acountProfile}
                alt=""
                className={style.profilephoto}
                title="profile"
              />
            </div>
          </Link>
        </div>
      </header>
    </>
  );
}
export default GlobalHeader;
