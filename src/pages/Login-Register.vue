<template>
  <div class="login-register">
    <!-- <div class="bg2">
      <div class="left">
        <div class="insertimage"></div>
        <div class="change" v-show="gologin">
          <div style="line-height: 17px">已有账号：</div>
          <div class="changemod">
            <div @click="tologin"   style=" font-size: 14px ;margin:0 0 0 35px;color:#1676f6 ;line-height: 30px;width: 100px ;cursor:pointer; ">立即登录
              <Icon type="ios-arrow-dropright" size="20" color="#1676f6" style="margin-left: 5px"/>
            </div>
          </div>
        </div>
        <div class="change" v-show="!gologin">
          <div style="line-height: 17px">没有账号：</div>
          <div class="changemod">
            <div style=" font-size: 14px ;margin:0 0 0 35px;color:#1676f6 ;line-height: 30px;width: 100px;cursor:pointer; " @click="tosign">立即注册
              <Icon type="ios-arrow-dropright" size="20" color="#1676f6" style="margin-left: 5px"/>
            </div>
          </div>
        </div>
      </div>
      <register class="right" v-show="gologin"></register>
      <login class="right" v-show="!gologin"></login>
    </div> -->
    <Row style="width: 60%; height: 70%; background: #fff; margin: 0 auto; border-radius: 10px;">
      <i-col span="14" style="height: 100%;">
        <div class="changemod">
          <span>已有账号：</span>
          <div class="change" @click="tosign" v-show="!gologin">
            立即注册
            <Icon type="ios-arrow-dropright" size="20" color="#1676f6" style="margin-left: 5px"/>
          </div>
          <div class="change" @click="tologin" v-show="gologin">
            立即登录
            <Icon type="ios-arrow-dropright" size="20" color="#1676f6" style="margin-left: 5px"/>
          </div>
        </div>
        <div class="insertimage">
              <img src="../assets/images/login-insert-img.png" style="width: 100%;"/>
        </div>
      </i-col>
      <i-col span="10" style=" height: 100%;" v-show="!gologin">
          <login ref="login"  class="right"></login>
      </i-col>
      <i-col span="10" style=" height: 100%;" v-show="gologin">
          <register ref="register" class="right"></register>
      </i-col>
    </Row>
  </div>
</template>
<script>
import login from '../components/Login'
import register from '../components/Register'
import bgImage from '@/assets/images/login-background-img.jpg'

export default {
  name: 'Login-Register',
  components: {
    login, register
  },
  data () {
    return {
      msg: '注册、登录页',
      gologin: false,
      bgImage
    }
  },
  methods: {
    haha () {
      console.log('你好')
    },
    tologin () {
      console.log('this.gologin', this.gologin)
      this.gologin = false
      this.$refs.register.handleReset()
    },
    tosign () {
      console.log('你好')
      this.gologin = true
      this.$refs.login.handleReset()
    }
  }
}
</script>

<style lang="less">
  .login-register{
    height: 100%;
    width: 100%;
    background: url('../assets/images/login-background-img.jpg') no-repeat center;
    display: flex;
    align-items: center;
  }
  .right{
    float: right;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .insertimage{
    overflow: hidden;
    margin-left: 105px;
    margin-top: 110px;
    height: 80%;
    width: 60%;
  }
  .changemod{
    position: relative;
    left: 420px;
    top: 80px;
    width: 100px;
    height: 45px;
  }
  .change{
    width: 100%;
    height: 60%;
    font-size: 15px;
    margin-left: 5px;
    margin-top: 3px;
    color: #1676f6;
    cursor:pointer;
  }
</style>
