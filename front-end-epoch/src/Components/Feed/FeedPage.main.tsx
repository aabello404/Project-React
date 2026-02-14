import style from "./FeedPage.module.css";
import { useEffect, useState } from "react";
import EpochPost from "./EpochPost";
import LoadingAnimation from "./LoadingSkeletonFeed";
import { Link, useNavigate } from "react-router-dom";
interface DtoObject {
  id: number;
  title: string;
  location: string;
  year: number;
  imageUrl: string;
  description: string;
  catId: number;
  createdOn: Date;
}
export default function Feed() {
  const navigate = useNavigate();
  const array: DtoObject[] = [];
  const [PostsEpoch, setArray] = useState(array);
  useEffect(() => {
    const controller = new AbortController();
    const run = async () => {
      try {
        const accessToken = sessionStorage.getItem("UserEpoch");
        if (!accessToken) {
          navigate("/auth");
          return;
        }
        const response = await fetch("http://localhost:9000/user/getPost", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          signal: controller.signal,
        });
        if (response.ok) {
          const data: DtoObject[] = await response.json();
          setArray(data);
        } else {
          if (response.status === 401) navigate("/auth");
        }
      } catch (error) {
        console.log("Error fething Posts", error);
      }
    };
    run();
    return () => controller.abort();
  }, []);

  if (!PostsEpoch.length) {
    return (
      <>
        <main className={style.mainFeed}>
          <div className={style.whole}>
            <div className={style.articleContainer}>
              <LoadingAnimation />
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <main className={style.mainFeed}>
        <div className={style.whole}>
          <div className={style.articleContainer}>
            {PostsEpoch.map((e) => (
              <Link to={`/post/${e.id}`} key={e.id}>
                <EpochPost dto={e} />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
