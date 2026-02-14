import { useState, type ChangeEvent } from "react";
import style from "./AuthSignup.module.css";
import SvgEye from "./SvgEyePassword";
import {
  CreateUser,
  ValidateInputs,
} from "../../Services/AuthService/SingUp.service";
import { useNavigate } from "react-router-dom";
interface childprops {
  _iSsingIn: boolean;
  _isauthPanel: boolean;
}
export default function SignUp(props: childprops) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [responseResult, setResponse] = useState({
    isSuccess: false,
    Message: "",
  });
  const [isPasswordvisible, setVisibilityPassword] = useState({
    password: false,
    repeatPassword: false,
  });
  const [errorInputs, setErrorInput] = useState({
    name: false,
    nameErrorMessage: "",
    email: false,
    emailErrorMessage: "",
    password: false,
    passwordErrorMessage: "",
    repeatPassword: false,
    repeatPasswordErrorMessage: "",
  });
  function handleInputs(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setInputs((pre) => ({
      ...pre,
      [name]: value,
    }));
    setErrorInput((pre) => ({
      ...pre,
      [name]: false,
    }));
  }

  async function handleSubmit() {
    const Errors = ValidateInputs(inputs);
    setErrorInput(Errors);
    const HasErrors =
      Errors.email || Errors.name || Errors.password || Errors.repeatPassword;
    if (HasErrors) return;
    else {
      try {
        const response = await CreateUser(inputs);
        setResponse(response);
        const timer = setTimeout(() => {
          navigate("/");
          clearTimeout(timer);
        }, 2000);
      } catch (error: any) {
        setResponse(error);
        console.log(error);
      }
    }
  }

  return (
    <>
      <form
        id="signup-form"
        noValidate
        method="post"
        className={`${style.formulaire} ${!props._iSsingIn && props._isauthPanel ? style.active : ""}`}
        onSubmit={(e) => e.preventDefault()}
      >
        <h1>Get Started</h1>
        <div className={style.labeliptwrapper}>
          <div
            className={`${style.labelipt} ${errorInputs.name ? style.error : ""} `}
          >
            <label htmlFor="firstname">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" />
              </svg>
            </label>
            <input
              type="text"
              name="name"
              id="firstname"
              placeholder="Name"
              value={inputs.name}
              onChange={handleInputs}
            />
          </div>
          <p id="firstname-error-sign-up">
            {" "}
            {errorInputs.name && errorInputs.nameErrorMessage}
          </p>
        </div>
        <div className={style.labeliptwrapper}>
          <div
            className={`${style.labelipt} ${errorInputs.email ? style.error : ""} `}
          >
            <label htmlFor="Email2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
              </svg>
            </label>
            <input
              type="email"
              id="Email2"
              name="email"
              placeholder="Email address"
              value={inputs.email}
              onChange={handleInputs}
            />
          </div>
          <p id="Email-error-sign-up">
            {errorInputs.email && errorInputs.emailErrorMessage}
          </p>
        </div>
        <div className={style.labeliptwrapper}>
          <div
            className={`${style.labelipt} ${errorInputs.password ? style.error : ""} `}
          >
            <label htmlFor="Password-az">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm240-200q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z" />
              </svg>
            </label>
            <input
              type={isPasswordvisible.password ? "text" : "password"}
              name="password"
              id="Password-az"
              placeholder="Password (8 or more chracters)"
              value={inputs.password}
              onChange={handleInputs}
            />
            <div
              title={isPasswordvisible.password ? "hide" : "show"}
              onClick={() =>
                setVisibilityPassword((pre) => ({
                  ...pre,
                  password: !pre.password,
                }))
              }
              id="hideshowpasswordsignup"
            >
              <SvgEye _isPasswordVissibe={isPasswordvisible.password} />
            </div>
          </div>
          <p id="passworderrorsignup">
            {errorInputs.password && errorInputs.passwordErrorMessage}
          </p>
        </div>
        <div className={style.labeliptwrapper}>
          <div
            className={`${style.labelipt} ${errorInputs.repeatPassword ? style.error : ""} `}
          >
            <label htmlFor="Password-fg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm240-200q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z" />
              </svg>
            </label>
            <input
              type={isPasswordvisible.repeatPassword ? "text" : "password"}
              name="repeatPassword"
              id="Password-fg"
              placeholder="Repeat password"
              value={inputs.repeatPassword}
              onChange={handleInputs}
            />
            <div
              title={isPasswordvisible.repeatPassword ? "hide" : "show"}
              id="hideshowRpasswordsignup"
              onClick={() =>
                setVisibilityPassword((pre) => ({
                  ...pre,
                  repeatPassword: !pre.repeatPassword,
                }))
              }
            >
              <SvgEye _isPasswordVissibe={isPasswordvisible.repeatPassword} />
            </div>
          </div>
          <p id="Rpassworderrorsignup">
            {errorInputs.repeatPassword &&
              errorInputs.repeatPasswordErrorMessage}
          </p>
        </div>
        <div className={style.btnS}>
          <p
            className={
              responseResult.isSuccess ? style.successSignUp : style.errorSignUp
            }
          >
            {responseResult.Message}
          </p>
          <button type="submit" id="btn-signup" onClick={handleSubmit}>
            Sign up
          </button>
        </div>
      </form>
    </>
  );
}
