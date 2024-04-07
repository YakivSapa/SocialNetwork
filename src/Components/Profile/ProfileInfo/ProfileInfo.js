import Preloader from "../../common/Preloader/preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/default-profile-pic.jpg"

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
                {isOwner && <input type="file" onChange={onMainPhotoSelected} />}

                <div>
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
                </div>

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    );
};

const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;