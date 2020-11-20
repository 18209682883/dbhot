<template>
  <div class="login">
      <section>
        <el-form   label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="pwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login()">登录</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </section>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      username:"",
      pwd:""
    }
  },
  methods:{
    login(){
      this.$http.post("/login",{"username":this.username,"password":this.pwd}).then((res)=>{
        console.log(res)
        if(res.data.meta.msg=="登录成功"){
          //将token存储到sessionStorage中,然后实现跳转
          sessionStorage.setItem("token",res.data.data.token)
          this.$router.push("/index")
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  width:100%;
  height:100%;
  background:blue;
  position:relative;
  section{
    position: absolute;
    width:400px;
    height:250px;
    background:#fff;
    left:50%;
    top:50%;
    transform: translate(-200px,-125px);
    padding:20px;
  }
}
</style>