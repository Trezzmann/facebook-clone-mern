import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <Post
                profilePic="https://scontent.fbjm1-1.fna.fbcdn.net/v/t1.0-9/39887013_1494003314035257_5569973542348390400_o.jpg?_nc_cat=104&ccb=3&_nc_sid=09cbfe&_nc_ohc=R5XXQlg2naIAX9xMD9w&_nc_ht=scontent.fbjm1-1.fna&oh=0ef6d23cf042a9b0e652db1c361b779f&oe=606653C8"
                message="yooo this a message"
                timestamp="1601493943737"
                imgName="https://scontent.fbjm1-1.fna.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/s526x296/100746349_6179788759758_1030723294124310528_n.png.jpg?_nc_cat=1&ccb=3&_nc_sid=7e83b1&_nc_ohc=cy0318gWszEAX9dRa5u&_nc_ht=scontent.fbjm1-1.fna&_nc_tp=31&oh=c056a0645f62fec7c0f30a3765e893cb&oe=6064F0CA"
                username="Armand"
            />
            {/* Posts=>Post */}
        </div>
    )
}

export default Feed
