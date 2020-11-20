<template>
  <div class="index">
    <el-container>
      <el-header>电商后台管理系统<el-button type="primary" @click="layout()">退出</el-button></el-header>
      <el-container>
        <el-aside width="200px">
          <Left></Left>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Left from '@/components/Left'
export default {
  name: "Index",
  components:{Left},
  data() {
    return {};
  },
  methods:{
    layout(){
      sessionStorage.removeItem("token");
      this.$router.push("/login")
    }
  }
};
</script>

<style lang="scss" scoped>
.index{
  width:100%;
  height:100%;
}
.index>.el-container{
  width:100%;
  height:100%;
  display: flex;
  flex-direction:column;
}
.el-header{
    background-color: #0A0F2F;
    color: #333;
    text-align: center;
    line-height: 60px;
    position: relative;
  }
.el-button{
  position:absolute;
  right:100px;
  top:10px;
}
  .index>.el-container>.el-container{
    flex:1;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height:100%;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    height:100%;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>