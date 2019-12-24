<template>
  <div class="register">
    <div class="form">
      <span class="title">用户注册</span>
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="0" style="margin-top: 20px">
        <FormItem prop="loginName">
          <Input class="input" v-model="formValidate.loginName" placeholder="请输入用户名">
            <Icon type="ios-person-outline" slot="suffix"  size="25"/>
          </Input>
        </FormItem>
        <FormItem  prop="password">
          <Input class="input" v-model="formValidate.password" placeholder="请输入密码">
            <Icon type="ios-lock-outline" slot="suffix" size="25" />
          </Input>
        </FormItem>
        <FormItem   prop="password2">
          <Input class="input" v-model="formValidate.password2" placeholder="请输入密码">
            <Icon type="ios-lock-outline" slot="suffix" size="25" />
          </Input>
        </FormItem>
        <FormItem   prop="email">
          <Input class="input" v-model="formValidate.email" placeholder="请输入邮箱">
            <Icon type="ios-lock-outline" slot="suffix" size="25" />
          </Input>
        </FormItem>
        <FormItem  prop="qqNo">
          <Input class="input" v-model="formValidate.qqNo" placeholder="请输入QQ号">
            <Icon type="ios-lock-outline" slot="suffix" size="25" />
          </Input>
        </FormItem>
        <FormItem  prop="checkCode">
          <Row>
            <i-col span="8" style=" height: 100%; margin-left: 68px" >
              <Input v-model="formValidate.checkCode" placeholder="请输入验证码"></Input>
            </i-col>
            <i-col span="7" style="height: 100%; background-color: blue ;margin-left: 30px"  >
              <img src="" width="100%" height="100%"  />
            </i-col>
          </Row>
        </FormItem>
        <FormItem >
          <Row>
            <i-col span="8" style=" height: 100%; margin-left: 47px" >
              <Checkbox v-model="rememberNameFlag">记住用户名</Checkbox>
            </i-col>
            <i-col span="8" style="height: 100%;">
              <Button @click="handlelogin('formValidate')" style="width: 140px;margin-left: 35px;background-color: #4d69f6;">
                <span style="color: white" >登录</span>
              </Button>
            </i-col>
          </Row>
          <Row>
            <i-col span="8" style="height: 100%; margin-left: 250px">
              <span @click="findpassword" style="cursor:pointer;color:grey">找回密码</span>
            </i-col>
          </Row>
        </FormItem>
      </Form>
      <!--      <div class="input">
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
          </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      ruleValidate: {
      },
      formValidate: {
        // 登录名
        loginName: '',
        // 密码临时值
        passwordtemp: '',
        // 登录密码
        password: '',
        // 登录密码2
        password2: '',
        // 电子邮箱
        email: '',
        // 验证码
        checkCode: '',
        qqNo: ''
      },
      // 登录名
      loginName: '',
      // 密码临时值
      passwordtemp: '',
      // 登录密码
      password: '',
      // 验证码
      checkCode: '',
      // 是否记住用户名
      rememberNameFlag: false
    }
  },
  methods: {

    handleReset () {
      // 或者手动将各个属性置空
      console.log('调用了吗？')
      console.log(this.$refs['formValidate'], '看看情况')
      this.$refs['formValidate'].resetFields()
    },
    handlelogin () {
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

<style lang="less">
  .register{
    width: 100%;
    height: 100%;
    background-color:#fff;
    .title{
      width: 100%;
      font-size: 18px;
    }
    .input{
      width: 70%;
      margin-left: 20px;
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
      position: relative;
      top:25px;
      width: 100%;
      height: 90%;
      background-color: #fff;
    }
  }
</style>
