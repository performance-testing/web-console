<template>
  <div class="signUp">
    <div class="signUpForm">
      <div>
        <span class="signUpTitle">用户注册</span>
      </div>
      <div class="input">
        <Input v-model="loginName" type="text" icon="ios-person-outline" placeholder="请输入用户名" style="width: 400px" size="large"/>
      </div>
      <div class="input">
        <Input v-model="password" type="password" @input="checkLoginName" icon="ios-unlock-outline" placeholder="请输入密码(6-20数字、字母和特殊符号)" style="width: 400px" size="large"/>
      </div>
      <div class="input">
        <Input v-model="password2" type="password" icon="ios-unlock-outline" placeholder="请再次输入您刚设置的密码" style="width: 400px" size="large"/>
      </div>
      <div class="input">
        <Input v-model="email" type="email" icon="ios-mail-outline" placeholder="请输入您的电子邮箱" style="width: 400px" size="large"/>
      </div>
      <div class="checkCodeInput">
        <Input v-model="checkCode" placeholder="请输入验证码" style="width: 250px" size="large"/>
        <div class="ivu-input-wrapper ivu-input-wrapper-large ivu-input-type" style="width: 100px;">
          <img src="" width="100" height="33" style="position: relative">
        </div>
      </div>
      <div class="checkBoxInput">
        <Checkbox v-model="rememberNameFlag" style="position: relative; top:8px">我已阅读并接受 <a href="#">《服务协议》</a></Checkbox>
      </div>
      <div class="checkBoxButton">
        <Button style="width: 230px; height: 36px; position: relative" type="primary" @click="login" size="large">立即注册</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signUp',
  data () {
    return {
      // 登录名
      loginName: '',
      // 登录密码
      password: '',
      // 校验登录密码
      password2: '',
      // 密码临时值
      email: '',
      // 验证码
      checkCode: '',
      // 服务协议
      rememberNameFlag: ''
    }
  },
  methods: {
    // 立即注册
    login() {
      let vm = this

      // 校验必填字段
      if(vm.loginName==''){
        alert("用户名必填");
        return false;
      }
      if(vm.password==''){
        alert("密码必填");
        return false;
      }
      if(vm.password2==''){
        alert("确认密码必填");
        return false;
      }
      if(vm.password2!=vm.password){
        alert("密码和确认密码不一致");
        return false;
      }
      if(vm.email==''){
        alert("电子邮箱必填");
        return false;
      }
      if(vm.checkCode==''){
        alert("验证码必填");
        return false;
      }
      if(vm.rememberNameFlag==''){
        alert("请勾选服务协议");
        return false;
      }

      // 检验验证码
      vm.$axios({
        url: '',
        data: {
          'checkCode': vm.checkCode
        }
      }).then(function (res) {
        if (res.respCode === '0000') {
          // 如果验证码检验成功,调用立即注册
          vm.$axios({
            url: '',
            data: {
              'loginName': vm.loginName,
              'password': vm.password,
              'email': vm.email
            }
          }).then(function (res) {
            if (res.respCode === '0000') {

            } else {

            }
          }).catch(function (error) {
            alert(error.respDesc);
          })
        } else {

        }
      }).catch(function (error) {
        alert(error.respDesc);
      })
    },

    // 校验用户名
    checkLoginName(){
      let vm = this

      // 校验必填字段
      if(vm.loginName==''){
        alert("用户名必填");
        return false;
      }

      // 调用校验用户名
      vm.$axios({
        url: '',
        data: {
          'loginName': vm.loginName
        }
      }).then(function (res) {
        if (res.respCode === '0000') {

        } else {

        }
      }).catch(function (error) {
        alert(error.respDesc);
      })
    },
  }
}
</script>

<style>
  .signUp{
    width: 440px;
    height: 820px;
    background-color:#fff;
  }
  .signUpForm{
    width: 400px;
    position: relative;
    left:20px ;
    top: 50px;
  }
  .signUpTitle{
    width: 118px;
    font-size: 30px;
  }
  .input{
    width: 400px;
    /*height: 56px;*/
    margin-top: 30px;
  }
  .checkCodeInput{
    width: 400px;
    margin-top: 30px;
    text-align: left;
  }
  .checkCodeInput img{
    margin-left: 50px;
  }
  .checkBoxInput{
    width: 400px;
    margin-top: 20px;
    text-align: left;
  }
  .checkBoxButton{
    width: 400px;
    margin-top: 20px;
    text-align: right;
  }
</style>
