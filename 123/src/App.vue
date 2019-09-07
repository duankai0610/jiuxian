<template>
  <div id="app">
    
    <!-- 路由引入组件 -->
    <router-view></router-view>

  
    <TabBar/>

  </div>
</template>
<script>
import TabBar from "./components/tabBar"
export default {
  components:{
    TabBar,
  }
}
</script>
<style>

</style>
