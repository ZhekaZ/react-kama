import React from 'react';
import s from './ProfileInfo.module.scss';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://loremflickr.com/320/240/paris,girl/all" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;
