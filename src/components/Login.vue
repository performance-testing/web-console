<template>
  <div class="login">
    <Input placeholder="Enter text" style="width: auto">
      <Icon type="ios-search" slot="suffix" />
    </Input>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: '登录组件',
      value1: ''
    }
  }
}
</script>

<style>
</style>
