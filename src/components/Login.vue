<template>
<div class="login">
  <div class="form">
    <div class="formleft">
      <div class="gosign">
        <span class="span1">没有账号:</span>
        <div @click="gosign"><span class="span2">立即注册</span><Icon size="15" color="cornflowerblue" type="ios-arrow-dropright" /></div>
      </div>
      <div class="image2">
      </div>
    </div>
    <div class="formright">
      <div class="formcontent">
        <div class="formcontentTitle">
          用户登录
        </div>
        <Form  :model="form">
          <FormItem prop="userName">
            <Input v-model="form.userName" placeholder="请输入用户名">
        <span slot="prepend">
          <Icon :size="16" type="ios-person"></Icon>
        </span>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="form.password" placeholder="请输入密码">
        <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
        </span>
            </Input>
          </FormItem>
          <FormItem>
            <Button @click="handleSubmit" type="primary" long>登录</Button>
          </FormItem>
        </Form>

      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    gosign () {
      console.log('注册账号')
    }

  }
}
</script>

<style scoped="less">
  .span1{
    font-size: 10px;
  }
  .span2{
    font-size: 13px;
    color: cornflowerblue;
  }
  .login {
    background: url("../assets/image/157482022261.png");
    background-size: 100% 100%;
    height: 100%;
    position: fixed;
    width: 100%;}
    .form{
      position: absolute;
      left:368px;
      top:111px;
      width: 800px;
      height: 500px;
      background-color: #fff;
    }
  .formleft{
    float:left;
    width: 400px;
    height: 100%;
    background-color: darkseagreen;
  }
  .formright {
    float:left;
    width: 400px;
    height: 100%;
    background-color:indianred;
  }
  .image2{
    width: 300px;
    height: 300px;
    background-color: brown;
    position: absolute;
    top:200px;
    left:50px;
  }
  .gosign{
    width: 200px;
    height: 50px;
    position: absolute;
    left: 200px;
    top:100px;
    background-color: aliceblue;
  }
  .formcontent{
    width: 300px;
    height: 300px;
    position: relative;
    left: 50px;
    top:100px;
    background-color: white;
  }
  .formcontentTitle{
    line-height: 50px;
    font-weight:500;
    font-family:SimHei;
    text-align: center;
    font-size: 18px;
    height: 50px;
    background-color: darkseagreen;
  }
  .formcontentInput{
    height: 50px;
    background-color: aqua;
  }
  .input{
    width: 220px;
    height: 32px;
    margin-top:8px;
    border-radius:4px;
    border: 1px solid #DBDBDB;
  }
  input::-webkit-input-placeholder { /* WebKit browsers */
    color:grey;
    font-size:12px;
  }
  input::-moz-placeholder  { /* WebKit browsers */
    color: grey;
    font-size:12px;
  }
</style>
