import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="http://david-f.jalbum.net/Pinboard/slides/beautiful%20beach.jpg"></img>
            </div>
            <div className={s.descriptionBlock}>
                Profile picture + Description
            </div>
        </div>
    );
};

export default ProfileInfo;