<template>
  <div class="home">
    {{ msg }}
    <Login></Login>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'home 主页面'
    }
  }
}
</script>

<style>
  .home {  }
</style>
