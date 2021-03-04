import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline' 
import NearMeIcon from '@material-ui/icons/NearMe'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import './Post.css'

const Post = ({ profilePic,message,timestamp,imgName,username}) => {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profilePic} className="post_avatar"/>
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
                </div>
            </div>

            <div className="post_bottom">
                {imgName && <img src={imgName} alt='tesignImage'/>}
                {message}
                
            </div>

            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon/>
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                </div>
                <div className="post_option">
                    <NearMeIcon/>
                    <p>Share</p>
                </div>
                <div className="post_option">
                    <AccountCircleIcon/>
                    <ExpandMoreIcon/>
                </div>
            </div>

        </div>
    )
}

export default Post
