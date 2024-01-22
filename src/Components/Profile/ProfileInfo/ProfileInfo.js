import Preloader from "../../common/Preloader/preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    debugger
    return (
        <div>
            <div>
                <img src="http://david-f.jalbum.net/Pinboard/slides/beautiful%20beach.jpg" />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                Profile picture + Description
            </div>
        </div>
    );
};

export default ProfileInfo;