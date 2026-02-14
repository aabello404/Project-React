import { useEffect, useState } from "react";
import style from "./AuthSignin.module.css";
import SvgEye from "./SvgEyePassword";
import {
  ValidateInputs,
  HandleSignIn,
} from "../../Services/AuthService/SignIn.service.ts";
import ResponsePrargraph from "./ResponseParagraph";
import { useNavigate } from "react-router-dom";
interface childprops {
  _iSsingIn: boolean;
  _isauthPanel: boolean;
}
export default function SignIn(props: childprops) {
  const navigate = useNavigate();
  const [errorInputs, setError] = useState({
    email: false,
    errorEmailMessage: "",
    password: false,
    ErrorPasswordMessage: "",
  });
  const [isPasswordvisible, setVisibilityPassword] = useState(false);
  const [issumbmit, setSubmit] = useState(false);
  const [response, setResponse] = useState({
    isSuccess: false,
    message: "",
    show: false,
  });
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  function handleInput(event: any) {
    const { name, value } = event.target;
    setInputs((pre) => ({
      ...pre,
      [name]: value,
    }));
    setError((pre) => ({
      ...pre,
      [name]: false,
    }));
  }
  useEffect(() => {
    if (!response.show) return;
    const timer = setTimeout(() => {
      setResponse((pre) => ({
        ...pre,
        show: false,
      }));
    }, 5000);
    return () => clearTimeout(timer);
  }, [response.show]);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const errors = ValidateInputs(inputs);
    setError(errors);
    console.log("in btn", issumbmit);
    const Haserror = errors.email || errors.password;
    if (Haserror) {
      return;
    }
    setSubmit(true);
    const response = await HandleSignIn(inputs);
    setResponse(response);
    if (response.isSuccess) navigate("/");
    setSubmit(false);
  }
  return (
    <>
      <form
        id="auth-signin"
        className={`${style.formulaire} ${props._iSsingIn && props._isauthPanel ? style.active : ""}`}
        noValidate
        method="post"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1>Welcome back!</h1>
        <div className={style.labeliptwrapper}>
          <div
            className={`${style.labelipt} ${errorInputs.email ? style.error : ""}`}
          >
            <label htmlFor="Email">
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
              id="Email"
              value={inputs.email}
              name="email"
              placeholder="Enter your mail"
              onChange={handleInput}
            />
          </div>
          <p className={style.Emailerrorsignin}>
            {errorInputs.email && errorInputs.errorEmailMessage}
          </p>
        </div>
        <div className={style.labeliptwrapper}>
          <div
            className={`${style.labelipt} ${errorInputs.password ? style.error : ""}`}
          >
            <label htmlFor="Password">
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
              type={isPasswordvisible ? "text" : "password"}
              name="password"
              id="Password"
              placeholder="Enter your password"
              value={inputs.password}
              onChange={handleInput}
            />
            <div
              title={isPasswordvisible ? "hide" : "show"}
              onClick={() => setVisibilityPassword((pre) => !pre)}
              className={style.hideshowpassword}
            >
              <SvgEye _isPasswordVissibe={isPasswordvisible} />
            </div>
          </div>

          <p className={style.passworderrorsignin}>
            {errorInputs.password && errorInputs.ErrorPasswordMessage}
          </p>
        </div>
        <div className={style.btnS}>
          {response.show && <ResponsePrargraph _response={response} />}
          {issumbmit ? (
            <svg
              className={style.loader}
              id="load-recharger"
              viewBox="0 0 50 50"
            >
              <circle className={style.path} cx="25" cy="25" r="20"></circle>
            </svg>
          ) : (
            <button
              type="submit"
              id="btnsignin"
              onClick={handleSubmit}
              className={style.btnsignin}
            >
              Sign in
            </button>
          )}
        </div>
      </form>
    </>
  );
}
