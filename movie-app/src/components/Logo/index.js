import s from "./style.module.css";

export function Logo(props) {
    return (
        <div>
            <div className={s.container}>
                <img src='' className={s.img} alt='' />
                <span className={s.title}></span>
            </div>
            <span className={s.subtitle}></span>
        </div>
    );
}
