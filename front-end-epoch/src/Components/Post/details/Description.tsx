import { useEffect, useState } from "react";
import style from "./ImageDescription.module.css";
import type { childprops } from "./DetalisMain";
import RelatedPost from "./RelatedPosts";
import { useNavigate } from "react-router-dom";
import Profile from "../../../assets/svg/account_circle_53dp_E3E3E3_FILL1_wght400_GRAD0_opsz48.svg";
export default function ImageDescription(props: childprops) {
  //console.log(props.Data.Post.name.split(' ')[0])
  const [isliked, setLike] = useState(false);
  const [likeCount, ChangeLikeCount] = useState(props.Data.likesCount);
  const navigate = useNavigate();
  const like = props.Data.likedByUser;
  useEffect(() => {
    setLike(like);
    ChangeLikeCount(props.Data.likesCount);
  }, [props.Data.likedByUser, props.Data.likesCount]);
  const id = props.Data.id;
  //console.log(id);
  const accessToken = sessionStorage.getItem("UserEpoch");
  const controller = new AbortController();
  if (!accessToken) navigate("/auth");
  const CreateOrDeleteLike = async () => {
    if (!isliked) {
      try {
        const response = await fetch("http://localhost:9000/epoch/like", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ id }),
          signal: controller.signal,
        });
        if (!response.ok) {
          if (response.status === 401) navigate("/auth");
          return;
        }
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        const response = await fetch("http://localhost:9000/epoch/removelike", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ id }),
          signal: controller.signal,
        });
        const data = await response.json();
        if (!response.ok) {
          console.error(data.message);
          return;
        }
      } catch (err) {
        console.error("error Unliking", err);
      }
    }
    return () => controller.abort();
  };

  function handleLike() {
    isliked
      ? ChangeLikeCount((pre) => pre - 1)
      : ChangeLikeCount((pre) => pre + 1);
    CreateOrDeleteLike();
    setLike((pre) => !pre);
  }
  return (
    <>
      <div>
        <div className={style.imagefull}>
          <div className={style.posterInfo}>
            <img
              src={
                props.Data.Post.profilePhotoUrl
                  ? props.Data.Post.profilePhotoUrl
                  : Profile
              }
              alt={props.Data.Post.name}
              className={style.posterAvatar}
            />
            <span className={style.posterName}>
              {props.Data.Post.name.split(" ")[0]}
            </span>
          </div>

          <img
            src={props.Data.imageUrl}
            alt=""
            className={style.displayphoto}
          />

          <div
            className={style.likediv}
            title={isliked ? "Unlike" : "Like"}
            onClick={handleLike}
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className={isliked ? style.heartclicked : ""}
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span>{likeCount}</span>
          </div>
        </div>
      </div>
      <div className={style.infoboxcontainer}>
        <div className={style.infobox}>
          <h2>Information</h2>
          <hr />
          <p id="title-para">
            <span>Title: </span>
            {props.Data.title}
          </p>
          <hr />
          <p id="location-para">
            <span>Location: </span>
            {props.Data.location}
          </p>
          <hr />
          <p id="category-para">
            <span>Year: </span>
            {props.Data.year}
          </p>
          <hr />
          <section
            id="Description-section"
            className={style.Descriptionsection}
          >
            <span>Description: </span>
            <br />
            {props.Data.description}
          </section>
          <hr />
          <div id="tags-list-div">
            <span>Tags:</span>
            <ul className={style.taglist}>
              {props.Data.Tags.map((e) => (
                <li key={crypto.randomUUID()}>{e.tagId}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={style.relatedImages}>
        {props.Data.cat.epoch.map((e) => (
          <RelatedPost image={e} key={e.id} />
        ))}
      </div>
    </>
  );
}
