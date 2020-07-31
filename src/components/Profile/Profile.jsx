import React from "react";
import classes from './Profile.module.css';
import Post from "./MyPost/Post/Post";
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {


    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}
                 dispatch={props.dispatch}/>
    </div>

}
export default Profile;