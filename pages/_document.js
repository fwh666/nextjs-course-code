import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    <Html lang="en">
      <Head></Head>
      <body>
        <Main></Main>
        <NextScript></NextScript>
        {/* 全局ID,和通知ID配置对应 */}
        <div id="notifications"></div>
      </body>
    </Html>;
  }
}
