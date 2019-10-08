<template>
    <div class="header">
        <div class="blue"></div>
        <div class="head">
          <div class="logo">
            <img src="../assets/logo.png">
          </div>
        </div>
        <ul>
          <router-link to="/" tag="li" :class="{active:num==0}">首页</router-link>
          <router-link to="/children" tag="li" :class="{active:num==1}">儿童成长</router-link>
          <router-link to="/agriculture" tag="li" :class="{active:num==2}">益智乐园</router-link>
          <router-link to="/skill" tag="li" :class="{active:num==3}">绘本故事</router-link>
          <router-link to="/characteristic" tag="li" :class="{active:num==4}">课外读物</router-link>
          <router-link to="/activity" tag="li" :class="{active:num==5}">活动</router-link>
        </ul>
    </div>
</template>
<script>
export default {
  props:['num'],
}
</script>
<style>
*{
  margin:0;
  padding:0;
  list-style: none;
  text-decoration: none;
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
}
.active{
  border: 2px dashed #65c2ff;
  border-radius: 15px;
  box-sizing: border-box;
}
</style>
