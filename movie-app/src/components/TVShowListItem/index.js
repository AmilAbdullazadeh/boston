import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import s from "./style.module.css";

export function TVShowListItem(props) {
    return (
        <div  className={s.container}>
            <img
                alt={name}
                src={SMALL_IMG_COVER_BASE_URL}
                className={s.img}
            />
            <div className={s.title}>
            </div>
        </div>
    );
}
