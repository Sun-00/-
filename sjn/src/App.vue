<template>
  <div id="app">
    <div class="header">
        <div class="blue"></div>
        <div class="head">
          <div class="logo">
            <img src="./assets/logo.png">
          </div>
        </div>
        <ul>
          <li>首页</li>
          <li v-for="(i,index) in type" :key="index">{{i.cate_name}}</li>
          <li>活动</li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
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
<style>
*{
  margin:0;
  padding:0;
  list-style: none;
  text-decoration: none;
}
#app{
  width: 100%;
}
.header{
  width: 100%;
  height: 144px;
}
.blue{
  width: 100%;
  height: 26px;
  background: rgb(100,194,255)
}
.head{
  width: 100%;
  height: 54px;
  padding: 10px 0;
}
.head .logo{
  margin-left:200px;
}
.header ul{
  width: 100%;
  height: 44px;
  margin-left:200px;
}
.header ul li{
  float: left;
  line-height: 40px;
  font-size: 16px;
  margin: 0 16px;
  cursor: pointer;
  padding: 0 20px;
  box-sizing: border-box;
  border: 2px solid #fff;
}
.active{

}
</style>
