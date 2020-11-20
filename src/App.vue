<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
    }
  }
}
</script>

<style lang="scss">
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  html,body,.app{
    width:100%;
    height:100%;
  }

</style>
