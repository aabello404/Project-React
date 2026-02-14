import { Link } from "react-router-dom";

interface relatedEpoch {
  image: {
    id: number;
    title: string;
    location: string;
    year: number;
    imageUrl: string;
    description: string;
    catId: number;
    createdOn: string;
  };
}
export default function RelatedPost(props: relatedEpoch) {
  return (
    <>
      <Link to={`/post/${props.image.id}`}>
        <img src={props.image.imageUrl} alt="" />
      </Link>
    </>
  );
}
