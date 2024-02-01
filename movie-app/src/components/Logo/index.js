import s from "./style.module.css";

export function Logo({ title, subtitle, img }) {
    return (
        <div>
            <div className={s.container}>
                <img src={ img } className={s.img} alt={ title } />
                <span className={s.title}>{ title }</span>
            </div>
            <span className={s.subtitle}>{ subtitle }</span>
        </div>
    );
}
