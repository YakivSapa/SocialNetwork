import Preloader from "../../common/Preloader/preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/* <div>
                <img src="http://david-f.jalbum.net/Pinboard/slides/beautiful%20beach.jpg" />
            </div> */}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    );
};

export default ProfileInfo;