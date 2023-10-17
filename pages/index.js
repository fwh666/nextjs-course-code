import Hero from "../components/home-page/hero";
import FeaturedPost from "../components/home-page/featured-posts";
function HomePage(props) {
  return (
    <div>
      this is HomePage; Hero page; Posts page;
      <Hero />
      <FeaturedPost />
    </div>
  );
}
export default HomePage;

//todo-fwh-获取post文章数据并填充到页面
// export function getStaticsProps(){

// }
