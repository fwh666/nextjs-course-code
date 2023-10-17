import Link from "next/link";

import Logo from "./logo";
import classes from "./main-navigation.module.css";
/**
 * 头部导航信息及样式
 * 链接+logo信息
 * @returns
 */
function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
