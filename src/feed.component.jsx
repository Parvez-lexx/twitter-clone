import React, {useEffect, useState} from 'react';
import "./feed.styles.css";
import TweetBox from "./tweetBox.component"
import Post from './post.component';
import db from "./firebase.component";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])

  return (
    <div className='feed'>
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <TweetBox />

      {posts.map(post => (
        <Post 
        displayName={post.displayName}
        username={post.username}
        verified={post.verified} 
        text={post.text}
        avatar={post.avatar}
        image={post.image} 
        />
      ))}
      
      {/* <Post />
      <Post />
      <Post />
      <Post /> */}
    </div>
  )
}

export default Feed;
