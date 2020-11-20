<template>
    <div>
      <el-container>
         <el-aside width="200px">
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
         </el-aside>
         <el-main>
            <router-view></router-view>
         </el-main>
       </el-container>
    </div>
</template>

<script>
export default {
   data() {
      return {
        data: [{
          label: '后台首页',

        }, {
          label: '相册管理',

        }, {
          label: '商品列表',
          
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data.label);
               // if(data.label=="后台首页"){
               //    console.log('1121')
               //    this.$router.push('/index/show')
               // }else if(data.label=="相册管理"){
               //    this.router.push('/index/xiang')
               // }else if(data.label=="商品列表"){
               //    this.$router.push('/index/shop')
               // }
               switch(data.label){
            case "后台首页":this.$router.push('/index/sk1/show1');break;
            case "相册管理":this.$router.push('/index/sk1/xiang');break;
            case "商品列表":this.$router.push('/index/sk1/shop');break;

        }
      },
      tui(){
         sessionStorage.clear();
         this.$router.push('/loig')
      }
    }
};
</script>

<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
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
