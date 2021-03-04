import React from 'react'
import Avatar from '@material-ui/core/Avatar'
// import GroupIcon from '@material-ui/icons/Group'
import './SideBarRow.css'

const SideBarRow = ({src, Icon, title}) => {
    return (
        <div className="sideBarRow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SideBarRow
