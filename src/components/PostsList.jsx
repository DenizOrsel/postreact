import classes from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length === 0 ? (
        <div style={{textAlign: 'center', color: 'white'}}>
          <h1>No posts yet!</h1>
          <p>Be the first to post something!</p>
        </div>
      ) : (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={Math.random().toString(36).substr(2)}
              body={post.body}
              author={post.author}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default PostsList;
