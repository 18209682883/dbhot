<template>
    <div class="zqd_div1">

         <el-form label-width="80px">

            <el-form-item label="用户名">
            <el-input placeholder="请输入用户" v-model="user"></el-input>
            </el-form-item>

            <el-form-item label="密码">
               <el-input placeholder="密码" v-model="mima"></el-input>
            </el-form-item>

            <el-button type="primary" @click="deng()">登录</el-button>
            <el-button @click="chong()">重置</el-button>
         </el-form>

    </div>
</template>

<script>
export default {
    data() {
        return {
         user:'',
         mima:'',
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
      deng(){
         if(this.user==""||this.mima==""){
            alert('请输入')
            return false
         }else if(this.user!='admin'||this.mima!="admin"){
            alert('登录失败')
            return false
         }
         this.$http.post('http://ceshi5.dishait.cn/admin/login',{
            username:this.user,
            password:this.mima
         }).then(res=>{
            console.log(res)
            console.log(res.data.msg)
            console.log(res.data.data.token)
            if(res.data.msg=='ok'){
               sessionStorage.setItem('token',res.data.data.token)
               this.$router.push('/index')
            }
         })
      }
    }
};
</script>

<style scoped>
   .zqd_div1{
      width: 300px;
      height: 250px;
      background: #fff;
      padding: 20px;
      text-align: center;
      margin: 10% auto;
      border: 1px solid #000;
   }
</style>
