import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        {/* 全局ID,和通知ID配置对应 */}
          <div id="notifications"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
