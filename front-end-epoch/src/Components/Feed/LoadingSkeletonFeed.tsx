import style from "./LoadingSkeletonFeed.module.css";
const height = [
  style.skeletonh1,
  style.skeletonh2,
  style.skeletonh3,
  style.skeletonh4,
  style.skeletonh3,
  style.skeletonh4,
  style.skeletonh1,
  style.skeletonh3,
  style.skeletonh2,
];
export default function LoadingAnimation() {
  return (
    <>
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          className={`${style.skeletonCard} ${height[i % height.length]}`}
          key={i}
        ></div>
      ))}
    </>
  );
}
