import style from "./ChooseFrom.module.css";
interface childprops {
  _setAuthP: React.Dispatch<React.SetStateAction<boolean>>;
  _isSignIn: boolean;
  _setIsSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ChooseFrom(props: childprops) {
  return (
    <>
      <div
        className={`${style.chooseFrom} ${props._isSignIn ? "" : style.active}`}
      >
        <div className={style.chooseTextContent}>
          {props._isSignIn ? (
            <>
              <h1>Welcome back</h1>
              <h2>Your journey continues</h2>
              <p>
                Pick up where you left off and continue exploring history
                through images.
              </p>{" "}
              <p>new here?</p>
            </>
          ) : (
            <>
              <h1>Step into Epoch</h1>
              <h2>Every image has a story</h2>
              <p>
                Sign up to collect, explore, and revisit the moments that shaped
                history.
              </p>
              <p>Already have an account?</p>
            </>
          )}
        </div>
        <div
          className={style.svgCancel}
          id="cancelsvg"
          onClick={() => props._setAuthP(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#e3e3e3"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </div>
        <button
          type="button"
          id="sign-up-in-btn"
          onClick={() => props._setIsSignIn((pre) => !pre)}
        >
          {props._isSignIn ? "Sign up" : "Sign in"}
        </button>
      </div>
    </>
  );
}
