import s from "./style.module.css";


export function TVShowDetail(props) {
    return (
        <div className={s.container}>
            <span className={s.title}></span>
            <div> 4 / 5</div>
            <div className="row">
                <div className={`col-sm-12 col-md-8 ${s.description}`}>
                   
                </div>
            </div>
        </div>
    );
}
