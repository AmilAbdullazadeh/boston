import { Search as SearchIcon } from "react-bootstrap-icons";
import s from "./style.module.css";

export function SearchBar() {

    return (
        <>
            <SearchIcon size={27} className={s.icon} />
            <input
                // onKeyUp={submit}
                className={s.input}
                type="text"
                placeholder="Search a tv show you may like"
            />
        </>
    );
}
