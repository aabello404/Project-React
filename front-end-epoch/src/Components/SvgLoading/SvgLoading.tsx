import style from "./SvgLoading.module.css";

export default function SvgLoading() {
  return (
    <div>
      <svg className={style.loader} id="load-recharger" viewBox="0 0 50 50">
        <circle className={style.path} cx="25" cy="25" r="20"></circle>
      </svg>
    </div>
  );
}
