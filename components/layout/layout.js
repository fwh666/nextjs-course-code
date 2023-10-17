import { Fragment } from 'react';

import MainNavigation from './main-navigation';

function Layout(props) {
  // 分组件使用, 导航页和子数据传递
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}
export default Layout;
