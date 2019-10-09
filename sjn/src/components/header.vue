<template>
    <div class="header">
        <div class="blue"></div>
        <div class="head">
          <div class="logo">
            <img src="../assets/logo.png">
          </div>
          <div class="video">
            <select>
              <option value="viode">视频</option>
              <option value="ebook">电子书</option>
              <option value="pbook">图画书</option>
            </select>
            <input type="search">
            <span class="iconfont icon-weibiaoti-"></span>
          </div>
          <div class="login">
            <span class="iconfont icon-wode"></span>
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
import icon from "../font_1447810_nx33n8sgezc/iconfont.css";
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
  margin: 0 auto;
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
  border: 2px dashed #fff;
}
.header .active{
  border: 2px dashed #65c2ff;
  border-radius: 15px;
  box-sizing: border-box;
}
.header .video{
  width: 210px;
  height: 30px;
  border:2px solid #00a0e9;
  position: relative;
  margin-left:1000px;
  margin-top: -40px;
}
.header .video select{
  border: none;
  height: 100%;
}
.header .video input{
  width: 115px;
  height: 100%;
  border: none;
  outline: none;
  position: absolute;
  top: 0;
  left: 70px;
}
.header .video span{
  width: 30px;
  height: 22px;
  display: block;
  float: right;
  padding: 6.5px 7px;
  box-sizing: border-box;
}
.header .login{
  float: right;
  margin-top: -27.5px;
  margin-right: 240px;
}
.header .login span{
  font-size: 24px;
  cursor:pointer;
}
</style>
