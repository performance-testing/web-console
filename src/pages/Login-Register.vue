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
    <Row style="width: 50%; height: 50%; background: #fff; margin: 0 auto; border-radius: 10px;">
      <i-col span="16" style="background: red; height: 100%;">
          左边
      </i-col>
      <i-col span="8">
          <login class="right" v-show="!gologin"></login>
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
    },
    tosign () {
      console.log('你好')
      this.gologin = true
    }
  }
}
</script>

<style>
  .login-register{
    height: 100%;
    width: 100%;
    background: url('../assets/images/login-background-img.jpg') no-repeat center;
    display: flex;
    align-items: center;
  }
  .bg2{
    width: 50%;
    height: auto;
    margin: 0 auto;
    background-color: white;
    border-radius: 10px;
  }
  .left{
    float: left;
    height: 500px;
    width: 500px;
    background-color: white;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .right{
    float: right;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .insertimage{
    position: relative;
    left: 100px;
    top: 200px;
    height: 300px;
    width: 300px;
    background-image: url("../assets/images/login-insert-img.png");
    background-size:300px,300px;
    background-repeat:no-repeat;
  }
  .change{
    position: relative;
    top: -180px;
    left: 350px;
    width: 150px;
    height: 70px;
  }
   .changemod{
     width: 150px;
     height: 30px;
     background-color: white;
    }
</style>
