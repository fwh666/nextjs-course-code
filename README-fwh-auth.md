# 内容操作：
1. 注册页面 singup.js
2. 登录页面
3. 认证登录态
4. 无效登录剔除session态
5. 保护访问的路径和页面校验登录态
6. 整合Next-auth 本地逻辑校验，后续可以通过三方Google其他模式



# 功能页面：
1. 注册接口：
    - api： 

# 注意：
1. 教程    "next-auth": "^3.4.2", 官方最新4.0+


# Next-auth使用解析:
1. Provider:  import { Provider } from 'next-auth/client';
    - 
2. useSesson: import { useSession, signOut } from 'next-auth/client';

3. signOut:

4. getSession: 

5. NextAuth: import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
    - 


# 其他介绍
next-auth 是一个用于身份验证的库，它可以与 Next.js 和其他 Node.js 项目一起使用。它支持多种身份验证提供程序，例如 Google、Facebook、Twitter、GitHub 等。使用 next-auth 可以轻松地实现用户身份验证和授权，同时提供了一些有用的功能，例如会话管理和 CSRF 保护。
