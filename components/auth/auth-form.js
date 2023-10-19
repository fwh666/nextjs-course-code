import { useState, useRef } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";

import classes from "./auth-form.module.css";
//注册用户
async function createUser(email, password) {
  await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}
function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // 点击切换登陆和注册页面
  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  /**
   * 1.注册逻辑
   * 2. 邮箱和密码
   * 3. 如果是登录的就直接登录，否则创建用户
   * @param {} event
   */
  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //采用自定义密码认证模式credentials 
    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
      //是登陆态则结果成功-跳转个人资料页
      if (!result.error) {
        // set some auth state
        router.replace("/profile");
      }
    } else {
      // 非登陆态 去注册接口
      try {
        const result = await createUser(enteredEmail, enteredPassword);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    // 如果是login  调用登陆接口|| 调用注册接口
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
