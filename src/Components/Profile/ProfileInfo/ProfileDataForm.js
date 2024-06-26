import { reduxForm } from "redux-form";
import { Input, Textarea, createField } from "../../common/FormsControls/FormsControls";
import s from "./ProfileInfo.module.css";
import style from "../../common/FormsControls/FormsControls.module.css"

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <b>Full name: </b> {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job: </b>
            {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
        </div>
        <b>My professional skills: </b>
        {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
        <div>
            <b>About me: </b>
            {createField("About me", "aboutMe", [], Textarea)}
        </div>
        <div>
            <b>Contacts: </b>{Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                </div>
            })}
        </div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}
        <div><button className={s.button}>Save</button></div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;