<template>
  <div class="login-register">
    {{ msg }}
    <login></login>
  </div>
</template>
<script>
import login from '../components/Login'
export default {
  name: 'Login-Register',
  components: {
    login
  },
  data () {
    return {
      msg: '注册、登录页'
    }
  }
}
</script>

<style>

</style>
