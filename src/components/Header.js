import HomeIcon  from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'
import SubscriptionsOutlinedIcon  from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon  from '@material-ui/icons/StorefrontOutlined'
import AvatarIcon from '@material-ui/core/Avatar'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import IconButton from '@material-ui/core/IconButton'
import NotifcationActiveIcon from '@material-ui/icons/NotificationsActive'
import PeopleIcon from '@material-ui/icons/People'

import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt="facebook"/>
                <div className="header_input">
                    <SearchIcon className="icon"/>
                    <input type="text" placeholder="search..."/>
                </div>
                
            </div>

            <div className="header_center">
                <div className="header_option header_option--active">
                    <HomeIcon fontsize="large"/>
                </div>
                <div className="header_option">
                    <FlagIcon fontsize="large"/>
                </div>
                <div className="header_option">
                    <SubscriptionsOutlinedIcon fontsize="large"/>
                </div>
                <div className="header_option">
                    <StorefrontOutlinedIcon fontsize="large"/>
                </div>
            </div>
            <div className="header_right">
                <div className="header_info">
                    <AvatarIcon fontsize="large"/>
                    <h4>Armand</h4>
                </div>
                <IconButton>
                    <AddIcon fontsize="large"/>
                </IconButton>
                <IconButton>
                    <ForumIcon fontsize="large"/>
                </IconButton>
                <IconButton>
                    <NotifcationActiveIcon fontsize="large"/>
                </IconButton>
                <IconButton>
                    <PeopleIcon fontsize="large"/>
                </IconButton>
                
            </div>
        </div>
    )
}

export default Header
