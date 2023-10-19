import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import { verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';
/**
 * 1. 重写NextAuht函数
 * 2. 当前路径针对 http://127.0.0.1:3000/api/auth/providers
 * 3. 官网： https://next-auth.js.org/providers/credentials
 * 注意：当前是3版本写法，  官网是4版本写法
 */
export default NextAuth({
    //todo-fwh-???
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        // 链接自定义数据库, 查询登陆账号和密码匹配,  成功最终将数据放入session中
        const client = await connectToDatabase();

        const usersCollection = client.db().collection('users');

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error('Could not log you in!');
        }

        client.close();
        return { email: user.email };
        
      },
    }),
  ],
});
