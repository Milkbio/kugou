<template>
  <div id="app">
    <mt-header fixed title="酷狗APP"></mt-header>
    <router-view/>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'App',
  mounted () {
    Axios('/proxy/rank/list?json=true').then(({data}) => {
      console.log(data)
    })
  }
}
</script>

<style>
</style>
