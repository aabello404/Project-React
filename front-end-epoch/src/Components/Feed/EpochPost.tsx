import style from "./EposhPost.module.css";

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
interface EpochPostProps {
  dto: DtoObject;
}
export default function EpochPost({ dto }: EpochPostProps) {
  return (
    <>
      <div className={style.article}>
        <img src={dto.imageUrl} alt="" />
      </div>
    </>
  );
}
