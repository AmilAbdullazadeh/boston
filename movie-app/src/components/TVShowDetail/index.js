import { FiveStarRating } from "../FiveStarRating";
import s from "./style.module.css";

export function TVShowDetail({ tvShow }) {
  const rating = Math.floor(tvShow?.vote_average / 2);
  return (
    <div className={s.container}>
      <span className={s.title}>{tvShow?.name}</span>
      <FiveStarRating rating={rating} />
      <div>{rating} / 5</div>
      <div className="row">
        <div className={`col-sm-12 col-md-8 ${s.description}`}>
          {tvShow?.overview}
        </div>
      </div>
    </div>
  );
}