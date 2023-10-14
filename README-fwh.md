## 思路：
一/官方:
0. 实现结果
    - 首页列表有效数据
    - 浏览所有数据
    - 日期条件筛选数据功能实现
    - 点击详情展示数据

1. 创建页面
    - 首页
    - 事件所有页面
    - 事件详情页
    - 过滤事件页
2. 添加组件
    - 首页
    - 添加列表组件
    - 添加详情组件
    - 自定义数据源
3. 添加样式
4. 添加按钮和icon
5. 标头导航页面
    - 主题Layout配置
6. 添加年月条件过滤数据。
    - 特殊定于js文件是[...slug].js  可以解析多路径形式
    - 例如： http://127.0.0.1:3000/events/2021/5  这种

7. 核心知识点：文件路由
    - http://127.0.0.1:3000/  根路径。 具体是pages目录下的index.js文件
    - http://127.0.0.1:3000/events 目录路径。 具体是pages目录下的events目录下index.js文件
    - http://127.0.0.1:3000/events/e2  id路径。 具体是pages目录下的events目录下[eventId].js文件   方括号命名是按照获取的id值 唯一值，作为解析路径。  可以是其他key命名。
    - http://127.0.0.1:3000/events/2021/5  多级目录路径。 具体是pages目录下的events目录下[...slug].js文件   方括号命名且内部包含三个点形式。 解析return页面样式
  

二\自定义
0. 首页: - 包含搜索页面 - 列表页面 
1.
 创建事件列表页 
 2. 事件详情页 
 3. 事件搜索页 
 4. 结果 文件目录: 
 1. pages:
 只存放页面js 
 2. components: 存放相关通用组件js


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
