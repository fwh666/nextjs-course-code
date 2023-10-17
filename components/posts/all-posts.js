import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

function AllPosts(props) {
  return (
    <section>
      <h1>all posts</h1>
      <PostsGrid posts={props.posts}></PostsGrid>
    </section>
  );
}
export default AllPosts;
