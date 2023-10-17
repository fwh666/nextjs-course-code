import Head from "next/head";
import { Fragment } from "react";

import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

function PostDeatailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}
// context的参数哪里来? 为什么还需要getStaticPaths获取
// context就是对应的[slug].js的URL路径, 比如: https://127.0.0.1/posts/zhangsan   那么zhangsan就是slug 就是context
export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

//获取本地目录下文章的文件名, 将文件名作为slug传递
export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDeatailPage;
