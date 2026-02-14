import style from "./AuthHeader.module.css";
function AuthHeader() {
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
            <form action="" method="get">
              <input
                type="search"
                className={style.searchbox}
                placeholder="Search for history, monument, etc."
                name="productsearch"
                required
              />
            </form>
          </div>
        </div>
      </header>
    </>
  );
}
export default AuthHeader;
