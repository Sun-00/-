<template>
 <div class="container">
     <headers :num="5"></headers>
    <div class="con">
            <div class="title">
                    <span>当前位置:</span>
                    <span>首页></span>
                    <span>活动></span>
                    <span>活动详情</span>
                  </div>
        <div class="item">
            <div v-for="i in n"  class="clearfix">
                <div style="
                width: 512px;
                height: 290px;
                border: dashed #278ed1;
                border-radius: 20px;
                float: left;">
                    <img :src="i.cover_img" alt="" style="
                    width: 100%;
                    height: 100%;
                    border: dashed #278ed1 2px ; 
                    border-radius: 20px">
                </div>
                <div class="text">
                    <p style="color: rgb(0, 160, 233);font-size: 24px"> <img src="../assets/2.png" alt="" style="vertical-align: middle">{{i.title}}</p>
                    <p>开始时间:{{i.start_time}}</p>
                    <p>结束时间:{{i.end_time}}</p>
                    <div class="jieshu">报名已结束</div>
                    <div class="jieshu chakan">查看投票排行榜</div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="title">活动介绍</div>
            <p v-html="texts" style="padding-left: 50px;"></p>
        </div>
    </div>
 </div>
</template>

<script>
import headers from './header'
export default {
 data() {
  return {
    n:'',
    texts:''
  }
 },
 components: {
   
  headers,

 },
 created() {
     var n = this.$route.params.id
     console.log(this.n);
     this.$http.get('http://jzfp.anhui.xingyao100.com/api/v1/activity_detail/'+n+'').then((data)=>{
         console.log(data.data.data);
         this.n = data.data.data
         this.texts = data.data.data[0].enter_explain
         console.log(this.texts);
     })
 },
}
</script>

<style scoped>
.clearfix::after,.clearfix::before {
    display: block;
    content: '';
}
.title {
  height: 85px;
  line-height: 85px;
  font-size: 16px;
  padding-left: 45px;
  box-sizing: border-box;

}
.title > span {
  color: #0e0e0e;
}
.clearfix::after {clear: both;}
.con {
    width: 80%;
    margin: 0 auto;
    border-radius: 40px;
    margin-top: 30px;
    /* height: 600px; */
    padding-bottom: 50px;
    /* background-color: hsla(0,0%,100%,.9); */
    background-color: rgb(100,194,255,.5);
}
.item {
    width: 90%;
    margin: auto;
    height: 300px;
    border-bottom: 1px dashed ;
    padding-bottom: 30px;
}
.text {
    float: left;
    /* width: 300px; */
    /* height: 300px; */
    padding-left: 18px;
}
.text > p {
    line-height: 35px;
}
.jieshu {
    cursor: pointer;
    background-color: rgb(153, 153, 153);
    color: #fff;
    text-align: center;
    width: 268px;
    height: 43px;
    border-radius: 18px;
    line-height: 43px;
    margin-top: 30px;
}
.chakan {
    background-color: #e99b05;
}
</style>
