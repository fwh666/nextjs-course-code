import PostItem from './post-item';
import classes from './posts-grid.module.css';

function PostsGrid(props) {
  const { posts } = props; //传入posts文章数据
  
  /**
   * 网格样式,填充数据到其中, ul模式无序
   */
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
export default PostsGrid;
