import React from 'react';
import "./widgets.styles.css";
import {
  TwitterTimelineEmbed, 
  TwitterShareButton, 
  TwitterTweetEmbed} 
from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search"

function Widgets() {
  return (
    <div className='widgets'> 
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input placeholder='Search Twitter' type='text' />
      </div>

      <div className="widgets_widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterTimelineEmbed 
          sourceType="profile"
          screenName='Parvezalam'
          options={{height: 400}}
        />
        <TwitterShareButton 
          url={'https://facebook.com/cleverprogrammer'}
          options={{text: "#reactjs is awesome", via: "parvezalam"}}
        />
      </div>
    </div>
  )
}

export default Widgets;
