import React from 'react';
import "./sidebar.styles.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutLineIcon from '@mui/icons-material/Mail';
import BookmarkBorderIcon from '@mui/icons-material/Bookmarks';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SidebarOption from './sidebarOption.component';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className="sidebar">
        {/* <HomeIcon /> */}
        {/* <TwitterIcon className='sidebar_twitterIcon'/> */}
        <SidebarOption active Icon={HomeIcon} text="Home" />
        <SidebarOption Icon={SearchIcon} text="Explore" />
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
        <SidebarOption Icon={MailOutLineIcon} text="Messages" />
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOption Icon={ListAltIcon} text="Lists" />
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
        <SidebarOption Icon={MoreHorizIcon} text="More" />
        

        <Button variant='outlined' className='sidebar_tweet' fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar;
