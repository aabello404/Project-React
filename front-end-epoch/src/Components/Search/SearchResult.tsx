import type { dtoSearch } from "../../Services/Interface/Interface.Service";
import { Link } from "react-router-dom";
import style from "./searchResult.module.css";
function SearchResult(props: dtoSearch) {
  const Epoch = props.data.map((e) => e.epoch);

  return (
    <main className={style.mainFeed}>
      <div className={style.whole}>
        <div className={style.articleContainer}>
          {Epoch.map((e) => (
            <Link to={`/post/${e.id}`} key={e.id}>
              <div className={style.article}>
                <img src={e.imageUrl} alt="" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default SearchResult;
