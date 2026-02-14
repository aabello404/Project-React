import { useNavigate, useParams } from "react-router-dom";
import DetailsMain from "../Components/Post/details/DetalisMain";
import { useEffect, useState } from "react";
import NotFound from "../Components/pageNotFound/notFound";
import SvgLoading from "../Components/SvgLoading/SvgLoading";
export interface dto {
  id: number;
  title: string;
  location: string;
  year: number;
  imageUrl: string;
  description: string;
  userId: number;
  catId: number;
  createdOn: string;
  cat: {
    id: number;
    nameCat: string;
    epoch: {
      id: number;
      title: string;
      location: string;
      year: number;
      imageUrl: string;
      description: string;
      userId: number;
      catId: number;
      createdOn: string;
    }[];
  };
  Post: {
    name: string;
    profilePhotoUrl: null;
  };
  likesCount: number;
  likedByUser: boolean;
  Tags: {
    epochId: number;
    tagId: string;
  }[];
}

export default function Post() {
  const { id } = useParams();
  const [epochDetails, setEpochDetails] = useState<dto | undefined | null>();
  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem("UserEpoch");
  useEffect(() => {
    window.scrollTo(0, 0);
    const Controller = new AbortController();
    const getPage = async () => {
      const fUrl = `http://localhost:9000/user/post?id=${id}`;
      //console.log(fUrl);
      try {
        const response = await fetch(fUrl, {
          signal: Controller.signal,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        //console.log(data)
        if (response.ok) {
          setEpochDetails(data);
        } else {
          if (response.status === 401) navigate("/");
          setEpochDetails(null);
        }
      } catch (error) {
        console.log("error fetching data ", error);
      }
    };
    getPage();
    return () => Controller.abort();
  }, [id]);
  if (epochDetails === undefined) return <SvgLoading />;
  if (epochDetails === null) return <NotFound />;

  return (
    <>
      <DetailsMain Data={epochDetails} />
    </>
  );
}
