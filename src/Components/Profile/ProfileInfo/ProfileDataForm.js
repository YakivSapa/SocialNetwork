import { reduxForm } from "redux-form";
import { Input, Textarea, createField } from "../../common/FormsControls/FormsControls";

const ProfileDataForm = ({ handleSubmit }) => {
    return <form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
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
        {/* <div>
            <b>Contacts: </b>{Object.keys(profile.contacts).map(key => {
                return <Contact contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div> */}
    </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;