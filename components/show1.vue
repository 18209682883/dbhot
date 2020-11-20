<template>
    <div>
      <table>
          <tr>
              <td>名字</td>
              <td>价格</td>
          </tr>
          <tr v-for="(item,index) in list" :key="index">
             <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
          </tr>
      </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[]
        };
    },
    created() {

    },
    mounted() {
        this.$http.get('/static/data1.json').then(res=>{
            console.log(res)
            this.list=res.data
        })
    },
    methods: {

    }
};
</script>

<style scoped>
    td{
        border: 1px solid #000;
        line-height: 20px;
        width: 150px;
    }
    table{
        border-collapse: collapse;
    }
</style>
