import React from 'react'
import "./News.css"
import Tweet from "../Tweet/Tweet";
import Post from "../Post/Post";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import Layout from "../Layout/Layout";

function News() {
    return (
        <Layout active={true}>
        <div className={"news"}>
            <div className={"news__header"}>
                <h2>Home</h2>
                <AutoAwesomeOutlinedIcon className={"news__tweetStarIcon"}/>
            </div>

            <Tweet avatar={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7ZHHUdN_3p6I5EAb0khNR1ESNmRw_z-vLgs-qma5nH4xSxAGC38uSZ9rldLMUTmGkfw&usqp=CAU"}/>

            <Post name={"Nikolai"} user={"niko1988"}
                  text={"Учение без размышления бесполезно, но и размышление без учения опасно"}
                  avatar={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVwuRNoxx7EmdZYZzaDkE-_-AnxEnbhWnid7xMcSofCf5aDTbMfM-reKGWd7Z8jWFXKA&usqp=CAU"}
                  image={"https://i.pinimg.com/originals/d2/6e/18/d26e18036945de590092c6e143e035dc.jpg"}
                  blueMark={true}/>

            <Post name={"Sveta"} user={"happyXD"}
                  text={"Учение без размышления бесполезно, но и размышление без учения опасно"}
                  avatar={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvke8Pr8T6xz52yM8v0ieg0oQy9L9SwfkO4hy4IKoRpxyQBKSGUWto7sWmzj9YYgm1VzU&usqp=CAU"}
                  image={"https://media.istockphoto.com/photos/hands-forming-a-heart-shape-with-sunset-silhouette-picture-id636379014?k=20&m=636379014&s=612x612&w=0&h=Zb6EobVr_BR278tpANKvKzfcQMIz-P_2Tv3XVXZufAM="}
                  blueMark={false}/>


            <Post name={"Nikolai"} user={"niko1988"}
                  text={"Учение без размышления бесполезно, но и размышление без учения опасно"}
                  avatar={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVwuRNoxx7EmdZYZzaDkE-_-AnxEnbhWnid7xMcSofCf5aDTbMfM-reKGWd7Z8jWFXKA&usqp=CAU"}
                  image={"https://klike.net/uploads/posts/2019-06/1560329641_2.jpg"}
                  blueMark={true}/>

            <Post name={"Sveta"} user={"happyXD"}
                  text={"Учение без размышления бесполезно, но и размышление без учения опасно"}
                  avatar={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvke8Pr8T6xz52yM8v0ieg0oQy9L9SwfkO4hy4IKoRpxyQBKSGUWto7sWmzj9YYgm1VzU&usqp=CAU"}
                  image={"https://media.istockphoto.com/photos/hands-forming-a-heart-shape-with-sunset-silhouette-picture-id636379014?k=20&m=636379014&s=612x612&w=0&h=Zb6EobVr_BR278tpANKvKzfcQMIz-P_2Tv3XVXZufAM="}
                  blueMark={false}/>

        </div>
        </Layout>
    )
}

export default News