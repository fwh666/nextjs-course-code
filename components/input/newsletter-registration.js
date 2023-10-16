import classes from "./newsletter-registration.module.css";
import { useRef } from "react";
// fwh-注册页面
function NewsletterRegistration() {
  const emailInputRef = useRef();

  function registrationHandler(event) {
    event.preventDefault();

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
    //fwh-上述注释.添加用户输入,调用api,确认结果
    fetch("/api/newsletter", {
      //路径会调用pages目录api目录下的newletter.js
      method: "POST",
      body: JSON.stringify({ email: emailInputRef }), //json处理赋值到email中
      headers: {
        "Content-Tpye": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef} //注意花括号赋值
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
