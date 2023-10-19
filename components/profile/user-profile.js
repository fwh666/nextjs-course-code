import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";

function UserProfile() {
  // Redirect away if NOT auth

  // 增加修改密码功能- ProfileForm构造页面输入的参数,传递到api认证中
  async function changePasswordHandler(passwordData) {
    const response = await fetch("/api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data);
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      {/* 组件内提供修改参数, 再api中获取参数 对应逻辑 */}
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  );
}

export default UserProfile;
