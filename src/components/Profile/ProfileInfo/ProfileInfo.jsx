import React from "react";
import classes from './ProfileInfo.module.css';




const ProfileInfo = () => {
    return <div>
        Main content
        <div>
            <img
                src={'https://lifeistravel.com.ua/media/k2/items/cache/1784e00b0b60f953190c43cb5b6689b8_L.jpg'}/>
        </div>
        <div className={classes.descriptionBlock}>
            ava + description
        </div>

    </div>

}
export default ProfileInfo;