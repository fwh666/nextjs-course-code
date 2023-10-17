import { Fragement } from "react";
import MainNavigation from "./main-navigation";

function Layout(props) {
  // 分组件使用, 导航页和子数据传递
  return (
    <Fragement>
      <MainNavigation></MainNavigation>
      <main> {props.children}</main>
    </Fragement>
  );
}
export default Layout;
