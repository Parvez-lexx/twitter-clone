import React from 'react';
import "./sidebar.styles.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './sidebarOption.component';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className="sidebar">
        {/* <HomeIcon /> */}
        <TwitterIcon />
        <SidebarOption active Icon={HomeIcon} text="Home" />
        <SidebarOption Icon={HomeIcon} text="Explore" />
        <SidebarOption Icon={HomeIcon} text="Notifications" />
        <SidebarOption Icon={HomeIcon} text="Messages" />
        <SidebarOption Icon={HomeIcon} text="Bookmarks" />
        <SidebarOption Icon={HomeIcon} text="Lists" />
        <SidebarOption Icon={HomeIcon} text="Profile" />
        <SidebarOption Icon={HomeIcon} text="More" />
        <SidebarOption />

        <Button variant='outlined' className='sidebar_tweet' fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar;
