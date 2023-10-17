# 内容说明:
1. 实现完整的Blog页面信息

## 目录结构:
1. pages: 
    - 首页以及其他访问路径目录
    - api: 专属请求路径目录
    - _document.js 是覆盖样式页面,设置头部信息
    - _app.js 同上
    - posts:  定义post目录URL路径 , 帖子
    - PostGrid: 帖子网格,  将帖子放入网格当中
    - post-item: 帖子详情,填充数据内容. 跳转路径等信息. 
        - 特别注意images多个图片文件时候,如何填充图片到文章?
2. _app.js
    - Layout主题样式
    - Logo信息
    - Head信息
    - 导航栏信息: 联系方式和post列表导航
    
3. posts文章处理
    - 解析文章列表: 
        - 从指定目录下获取文章数据,包含标题以及内部内容
        - 用matter组件. react-markdown, gray-matter, react-syntax-hightlighter,组件等
    - 解析文章数据: [slug].js 代表不同名字的文章
        - getStaticProps函数: 提前获取数据,填充到组件的参数当中
        - getStaticPath函数:
    - 解析文章内容详情数据:PostContent
        - Markdown解析文章
        - 引用: react-markdown, react-syntax-higlighter
        - 内容解析添加主题以及高亮
        - 解析: p(paragraph) {}
        - todo-fwh-需要重点理解解析代码的含义

4. 联系方式处理:
    - 表单样式
    - 数据交互
    - MongoDB
        - 注意数据的获取,错误的捕捉, 连接池的关闭. id回显.
    - 
5. 添加全局通知:
    - 上下文形式内容.
    - Notification 全局通知UI
    - ReactDOM.createPortal 的作用,以及Document.byid的功能

6. _document.js设置全局样式
    - 设置的包装体

# 知识点:


# 开发思路:
1. 先搭建基本页面框架,包含的内容页面等等
2. 填充页面内容:
3. 功能样式:
4. 数据交互:


# 代码实操:
1. 

