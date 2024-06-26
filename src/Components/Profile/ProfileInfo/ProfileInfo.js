import { useState } from "react";
import Preloader from "../../common/Preloader/preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/default-profile-pic.jpg";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.profilePicture}>
                    <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
                    {isOwner && <input type="file" className={s.fileInput} onChange={onMainPhotoSelected} />}
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />
                }

            </div>
        </div>
    );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div>
        <div>
            <b>Full name: </b>{profile.fullName}
        </div>
        <div>
            <b>Looking for a job: </b>{profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills: </b>{profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me: </b>{profile.aboutMe}
        </div>
        <div>
            <b>Contacts: </b>{Object.keys(profile.contacts).map(key => {
                return <Contact contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
        {isOwner && <div><button className={s.button} onClick={goToEditMode}>Edit</button></div>}
    </div>
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;