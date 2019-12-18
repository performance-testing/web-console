<template>
  <div class="login">
    <div class="form">
      <div class="input">
        <span class="loginTitle">用户登录</span>
      </div>
      <div class="input">
        <Input v-model="loginName" placeholder="请输入用户名" style="width: 280px " >
          <Icon type="ios-person-outline" slot="suffix" size="25" />
        </Input>
      </div>
      <div class="input">
        <Input v-model="passwordtemp"  placeholder="请输入密码" style="width: 280px "  @on-blur="hiden">
          <Icon type="ios-unlock-outline" slot="suffix" size="25" />
        </Input>
      </div>
      <div class="checkcode">
        <Input v-model="checkCode" placeholder="请输入验证码" style="width: 130px " >
        </Input>
        <img src="" width="90" height="36" style="position: relative; left:60px">
        <div>
        </div>
      </div>
      <div class="checkcode">
        <Checkbox v-model="rememberNameFlag" style="position: relative; top:8px">记住用户名</Checkbox>
        <Button style="width: 100px; position: relative; left:95px" type="primary" @click="login">立即登录</Button>
      </div>
      <div class="forgetPassword">
        <div style="cursor:pointer;" @click="findpassword"><span style="color: cornflowerblue">找回密码</span></div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      // 登录名
      loginName: '',
      // 密码临时值
      passwordtemp: '',
      // 登录密码
      password: '',
      // 验证码
      checkCode: '',
      // 是否记住用户名
      rememberNameFlag: ''
    }
  },
  methods: {
    login () {
      console.log('用户名', this.loginName, '登录密码', this.password)
    },
    hiden () {
      let str = ''
      if (this.passwordtemp.trim() !== '') {
        for (var i = 0; i < this.passwordtemp.length; i++) {
          str = str + '*'
        }
        this.password = this.passwordtemp
        this.passwordtemp = str
      }
    },
    findpassword () {
      console.log('找回密码')
    }
  }
}
</script>

<style>
  .login{
    background-color:#fff;
  }
  .loginTitle{
    width: 280px;
    font-size: 18px;
  }
  .input{
    width: 280px;
    margin-top: 20px;
  }
  .checkcode{
    width: 280px;
    display: flex;
    margin-top: 20px;
    margin-left: 0px;
  }
  .forgetPassword{
    width: 280px;
    display: flex;
    margin-top: 5px;
    margin-left: 230px;
  }
  .form{
    width: 300px;
    position: relative;
    left:50px ;
    top:100px;
  }
</style>
