import { useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
  const { eventId } = props;
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]); //fwh-添加评论列表-需要获取数据放入评论列表页面当中


  useEffect(() => {
    if (showComments) {
      fetch('/api/comments/' + eventId)
        .then((response) => response.json())
        .then((data) => {
          setComments(data.comments);
        }); //fwh-获取评论列表数据
    }
  }, [showComments]); //回显评论数据

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    fetch('/api/comments/' + eventId, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {/* //fwh-onAddComment属性是在组件中,后期props定义的 */}
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {/* 回显评论列表-需要获取数据放入评论列表页面当中 */}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;
