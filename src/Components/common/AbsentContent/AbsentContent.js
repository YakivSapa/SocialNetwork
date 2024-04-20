import s from "./AbsentContent.module.css";

let AbsentContent = () => {
    return (
        <div>
            <p className={s.p}>
                Sorry, this page is unavailable at the moment!
            </p>
        </div>
    )
}

export default AbsentContent;