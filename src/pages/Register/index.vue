<template>
  <!-- 注册内容 -->
  <div class="register">
    <h3>
      注册新用户
      <span class="go">
        我有账号，去
        <a href="login.html" target="_blank">登陆</a>
      </span>
    </h3>
    <div class="content">
      <label>手机号:</label>
      <input type="text" placeholder="请输入你的手机号" />
    </div>
    <div class="content">
      <label>验证码:</label>
      <input type="text" placeholder="请输入验证码" />
      <img ref="code" src="http://47.93.148.192/api/user/passport/code" alt="code" />
    </div>
    <div class="content">
      <label>登录密码:</label>
      <input type="text" placeholder="请输入你的登录密码" />
    </div>
    <div class="content">
      <label>确认密码:</label>
      <input type="text" placeholder="请输入确认密码" />
    </div>
    <div class="controls">
      <input name="m1" type="checkbox" />
      <span>同意协议并注册《尚品汇用户协议》</span>
    </div>
    <div class="btn">
      <a href="javascript:">完成注册</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Register'
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.register {
  width: 1200px;
  height: 445px;
  border: 1px solid #dfdfdf;
  margin: 0 auto;
}
.register h3 {
  background: #ececec;
  margin: 0;
  padding: 6px 15px;
  color: #333;
  border-bottom: 1px solid #dfdfdf;
  font-size: 20.04px;
  line-height: 30.06px;
}
.register h3 span {
  font-size: 14px;
  float: right;
}
.register h3 span a {
  color: #e1251b;
}
.register div:nth-of-type(1) {
  margin-top: 40px;
}
.register .content {
  padding-left: 390px;
  margin-bottom: 18px;
}
.register .content label {
  font-size: 14px;
  width: 96px;
  text-align: right;
  display: inline-block;
}
.register .content input {
  width: 270px;
  height: 38px;
  padding-left: 8px;
  box-sizing: border-box;
  margin-left: 5px;
  outline: none;
  border: 1px solid #999;
}
.register .content img {
  vertical-align: sub;
}
.register .controls {
  text-align: center;
}
.register .controls input {
  vertical-align: middle;
}
.register .btn {
  text-align: center;
  line-height: 36px;
  margin: 17px 0 0 55px;
}
.register .btn a {
  text-decoration: none;
  width: 270px;
  height: 36px;
  background: #e1251b;
  color: #fff !important;
  display: inline-block;
  font-size: 16px;
}
</style>