import Link from "next/link";
import { useSession, signOut } from "next-auth/client";

import classes from "./main-navigation.module.css";
//fwh-导航页添加session处理登录态
function MainNavigation() {
  const [session, loading] = useSession();
  function logoutHandler() {
    signOut();
  }

  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Next Auth</div>
      </Link>
      <nav>
        <ul>
          {/* 为false时候处理跳转去认证 */}
          {!session && !loading && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}
          {/* 为true时候才能访问保护资源页 */}
          {session && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
          {/* 为true时候才能访问保护资源页登出 */}
          {session && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
