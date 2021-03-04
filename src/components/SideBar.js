import React from 'react'
import SideBarRow from './SideBarRow'
import HospitalIcon from '@material-ui/icons/LocalHospital'
import GroupIcon from '@material-ui/icons/Group'
import StoreFrontIcon from '@material-ui/icons/Storefront'
import WatchIcon from '@material-ui/icons/VideoLabelRounded'
import FriendIcon from '@material-ui/icons/PeopleAltOutlined'
import EventIcon from '@material-ui/icons/Event'

import './SideBar.css'

const SideBar = () => {
    return (
        <div className="sidebar">
            <SideBarRow src='https://scontent.fbjm1-1.fna.fbcdn.net/v/t1.0-9/39887013_1494003314035257_5569973542348390400_o.jpg?_nc_cat=104&ccb=3&_nc_sid=09cbfe&_nc_ohc=R5XXQlg2naIAX9xMD9w&_nc_ht=scontent.fbjm1-1.fna&oh=0ef6d23cf042a9b0e652db1c361b779f&oe=606653C8' title="Armand Tresko"/>
            <SideBarRow Icon={HospitalIcon} title="Covid 19 centre d'information"/>
            <SideBarRow Icon={GroupIcon} title="Groups"/>
            <SideBarRow Icon={StoreFrontIcon} title="Market Place"/>
            <SideBarRow Icon={WatchIcon} title="Watch"/>
            <SideBarRow Icon={FriendIcon} title="Friends"/>
            <SideBarRow Icon={EventIcon} title="Events"/>

        </div>
    )
}

export default SideBar
