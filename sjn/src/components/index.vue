<template>
  <div id="app">
    <headers :num="0"></headers>
      <p>首页</p>
      <footers></footers>
  </div>
</template>
<script>
import headers from './header'
import footers from './footer'
export default {
  components:{
  headers,
  footers,
},
  data() {
    return {
      type:"",
    }
  },
  created() {
    this.axios.get('http://jzfp.anhui.xingyao100.com/api/v1/categorys/0').then((response) => {
      console.log(response.data)
      this.type = response.data.data
    })
  },
}
</script>
<style scoped>
*{
  margin:0;
  padding:0;
  list-style: none;
  text-decoration: none;
}
</style>
