<template>
    <div>
      <ul class="zqd_ul">
         <li>UNI-ADMIN</li>
         <li class="oli">
            <router-link to="/index/sk1">首页</router-link>
         </li>
         <li>
            <router-link to="/index/sk2">商品</router-link>
         </li>
         <li>订单</li>
         <li>会员</li>
         <li>设置</li>
         <li><button @click="tui()">退出</button></li>
      </ul>
      <router-view></router-view>

      <!-- <el-container>
         <el-aside width="200px">
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
         </el-aside>
         <el-main>
            <router-view></router-view>
         </el-main>
       </el-container> -->

    </div>
</template>

<script>
export default {


  };

</script>

<style scoped>
*{
   margin: 0;
   padding: 0;
   list-style: none;
}
.zqd_ul{
   width: 100%;
   height: 50px;
   background: #545C64;
   padding-left: 20px;
   display: flex;
}
.zqd_ul>li{
   line-height: 49px;
   /* float: left; */
   /* color: #fff; */
   /* margin-left: 10px; */
   flex: 1;
   text-align: center;
}
.zqd_ul>li:hover{
   color: burlywood;
   border-bottom: 1px solid burlywood;
}
/* .zqd_ul .oli{
   margin-left: 600px;
} */
.zqd_ul>li>button{
   margin-left: 20px;
}


</style>

