import s from "./style.module.css";

export function TVShowList(props) {
    return (
        <div>
            <div className={s.title}>You'll probably like :</div>
            <div className={s.list}>
                    (
                            <span className={s.tv_show_item}>
                </span>
                    )
            </div>
        </div>
    );
}
