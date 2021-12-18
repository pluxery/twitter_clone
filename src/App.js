import React from 'react';
import './Layout/Layout.css'
import News from "./News/News";
import Profile from "./Profile/Profile";
import Login from "./Login/Login"
import Register from "./Register/Register"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NotificationFragmentAll from "./Notification/NotificationFragmentAll";
import NotificationFragmentMentions from "./Notification/NotificationFragmentMentions";
import Notification from "./Notification/Notification";
import Explore from "./Explore/Explore";
import User from "./User/User";
import TabMedia from "./Profile/Tabs/TabMedia";
import TabReplies from "./Profile/Tabs/TabReplies";
import TabLikes from "./Profile/Tabs/TabLikes";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<News/>}/>
                <Route path="/profile" exact element={<Profile/>}/>
                <Route path="/user/:id" exact element={<User/>}/>

                <Route path="/login" element={<Login/>}/>
                <Route path="/register" exact element={<Register/>}/>

                <Route path="/notifications" exact element={<Notification/>}/>
                <Route path="/notifications/all" exact element={<NotificationFragmentAll/>}/>
                <Route path={"/notifications/mentions"} exact element={<NotificationFragmentMentions/>}/>

                <Route path="/profile/tweets_with_replies" exact element={<TabReplies/>}/>
                <Route path="/profile/media" exact element={<TabMedia/>}/>
                <Route path="/profile/likes" exact element={<TabLikes/>}/>

                <Route path={"/explore"} exact element={<Explore/>}/>

            </Routes>
        </Router>


    );

}

export default App;