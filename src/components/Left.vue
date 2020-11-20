<template>
    <div class="left">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
</template>
<script>
export default {
     data() {
      return {
        data: [{
          label: '用户管理',
          children: [{
            label: '用户列表'
          }]
        },
        {
          label: '商品管理',
          children: [{
            label: '商品列表'
          }]
        }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        switch(data.label){
            case "用户列表":this.$router.push("/index/user");break;
            case "商品列表":this.$router.push("/index/goods");break;
        }
        
      }
    }
  };

</script>