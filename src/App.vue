<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',

  mouted () {
    console.log('看看你是啥')
    axios
      .post('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => {
        console.log(res, '看看你是啥')
      })
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
