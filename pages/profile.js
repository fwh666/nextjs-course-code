import { getSession } from "next-auth/client";

import UserProfile from "../components/profile/user-profile";

function ProfilePage() {
  return <UserProfile />;
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  // 加载页面前  先加载session验证登陆态  非登陆态的跳转到认证页面去登陆认证
  /**
   * 这段代码是在JavaScript（可能是Next.js框架）中返回一个对象，该对象表示一个重定向操作。这通常在服务器端渲染(SSR)或静态生成(SSG)的页面中使用。

- `redirect`: 表示要进行重定向的操作。
- `destination: '/auth'`: 表示重定向的目标URL，这里是'/auth'。
- `permanent: false`: 表示这是一个临时重定向，而不是永久重定向。如果设置为`true`，则表示永久重定向（HTTP状态码301），`false`表示临时重定向（HTTP状态码307）。
   */
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default ProfilePage;
