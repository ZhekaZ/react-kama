import React from 'react';
import s from './ProfileInfo.module.scss';
import Preloader from "../../common/preloader/preloader";

const ProfileInfo = props => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <h2>{props.profile.fullName}</h2>
                <img src={props.profile.photos.large} alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;
