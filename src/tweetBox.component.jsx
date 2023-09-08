import React from 'react';
import "./tweetBox.styles.css"
import { Avatar, Button } from '@mui/material';

function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox_input">
            <Avatar src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' />
            <input placeholder="What's happening ?" type='text' />
        </div>
        <input className='tweetBox_imageInput' placeholder="Optional: Enter image URL" type='text' />
        <Button className='tweetBox_tweetbtn'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox;
