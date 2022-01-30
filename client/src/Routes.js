import React from 'react';
import {Route, Routes} from "react-router-dom";
import News from "./News/News";
import Profile from "./Profile/Profile";
import User from "./User/User";
import Notification from "./Notification/Notification";
import NotificationFragmentAll from "./Notification/NotificationFragmentAll";
import NotificationFragmentMentions from "./Notification/NotificationFragmentMentions";
import TabReplies from "./Profile/Tabs/TabReplies";
import TabMedia from "./Profile/Tabs/TabMedia";
import TabLikes from "./Profile/Tabs/TabLikes";
import Explore from "./Explore/Explore";
import Login from "./Authorization/Login";
import Register from "./Authorization/Register";
import PostId from "./Post/PostId";
import EditProfile from "./Profile/EditProfile";

export const useRoutes = (isSignIn) => {

    if (isSignIn) {
        return (
            <Routes>
                <Route path="/feed" exact element={<News/>}/>
                <Route path="/profile/:id" exact element={<Profile/>}/>
                <Route path="/profile/edit" exact element={<EditProfile/>}/>
                <Route path="/user/:id" exact element={<User/>}/>

                <Route path="/post/:id" exact element={<PostId/>}/>

                <Route path="/notifications" exact element={<Notification/>}/>
                <Route path="/notifications/all" exact element={<NotificationFragmentAll/>}/>
                <Route path={"/notifications/mentions"} exact element={<NotificationFragmentMentions/>}/>

                <Route path="/profile/tweets_with_replies" exact element={<TabReplies/>}/>
                <Route path="/profile/media" exact element={<TabMedia/>}/>
                <Route path="/profile/likes" exact element={<TabLikes/>}/>

                <Route path={"/explore"} exact element={<Explore/>}/>

            </Routes>

        );
    }
    return (
        <Routes>
            <Route path="/" exact element={<Login/>}/>
            <Route path="/signup" exact element={<Register/>}/>
        </Routes>
    )

}

export default useRoutes;