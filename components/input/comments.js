import { useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    // send data to API
    //fwh-上述注释-添加请求api
    fetch("/api/comments" + eventId, {//comments的js文件处理
      method: "POST",
      body: JSON.stringify({ commentData }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {/* //fwh-onAddComment属性是在组件中,后期props定义的 */}
      {showComments && <NewComment onAddComment={addCommentHandler} />} 
      {showComments && <CommentList />}
    </section>
  );
}

export default Comments;
