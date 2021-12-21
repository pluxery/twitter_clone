import React from 'react'
import "./News.css"
import Tweet from "../Tweet/Tweet";
import Post from "../Post/Post";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import Layout from "../Layout/Layout";
import post_db from "../Data/Post_db";


function News() {
    return (
        <Layout active={true}>
            <div className={"news"}>
                <div className={"news__header"}>
                    <h2>Home</h2>
                    <AutoAwesomeOutlinedIcon className={"news__tweetStarIcon"}/>
                </div>

                <Tweet
                    avatar={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7ZHHUdN_3p6I5EAb0khNR1ESNmRw_z-vLgs-qma5nH4xSxAGC38uSZ9rldLMUTmGkfw&usqp=CAU"}/>

                {post_db.map((item, pos) => {
                        return (
                            <Post name={item.name}
                                  text={item.text}
                                  user={item.user}
                                  avatar={item.avatar}
                                  image={item.image}
                                  blueMark={item.blueMark}
                            />
                        )
                    }
                )
                }


            </div>
        </Layout>
    )
}

export default News