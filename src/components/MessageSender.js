import React,{ useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import VideoIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon'

import './MessageSender.css'


const MessageSender = () => {
    const [Input, setInput] = useState('')
    // const [Image, setImage] = useState(null)

    const handleChange = (e) => {
        if(e.target.files[0]){
            // setImage(e.target.files[0])
        }
    }

    const handleSubmit = () => {
        console.log("submitting")
    }
    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar src="https://scontent.fbjm1-1.fna.fbcdn.net/v/t1.0-9/39887013_1494003314035257_5569973542348390400_o.jpg?_nc_cat=104&ccb=3&_nc_sid=09cbfe&_nc_ohc=R5XXQlg2naIAX9xMD9w&_nc_ht=scontent.fbjm1-1.fna&oh=0ef6d23cf042a9b0e652db1c361b779f&oe=606653C8"/>
                <form >
                    <input type="text" className="messageSender_input" placeholder="What's in your mind" value={Input} onChange={(e) => setInput(e.target.value)}/>
                    <input type="file" className="messageSender_fileSelector" onChange={handleChange}/>
                    <button type="submit" onClick={handleSubmit}>Hidden Submit</button>
                </form>
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideoIcon style={{ color:'red'}}/>
                    <h3>Video Live</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{ color:'green'}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmotionIcon style={{ color:'orange'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
