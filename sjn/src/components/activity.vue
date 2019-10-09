<template>
  <div class="content">
    <headers :num="5"></headers>
    <div class="con">
      <div class="title">
        <span>当前位置:</span>
        <span>首页></span>
        <span>活动</span>
      </div>
      <div style="width: 90%;margin: 0 auto;" class="clearfix">
          <div class="item ">
              <div v-for="i in n " class="item-con">
                <div class="imgs"><img :src="i.cover_img" alt=""></div>
                <div class="text">
                    <h2 style="font-size: 16px;font-weight: normal;overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;width: 100px;padding-left: 10px;">{{i.title}}</h2>
                    <p>开始时间:{{i.start_time}}</p>
                    <p>结束时间:{{i.end_time}}</p>
                    <p>活动地点:{{i.activity_place}}</p>
                    <a href="javascript:;" class="a">详情</a>
                </div>
              </div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import headers from './header'
export default {
  data() {
    return {
      n:''
    }
  },
components:{
  headers,
},
created() {
  this.$http.get('http://jzfp.anhui.xingyao100.com/api/v1/activities',{params:{page:1,size:6}}).then((data)=>{
    console.log(data.data.data);
    this.n = data.data.data
   
  })
},
}
</script>

<style scoped>
  *{user-select: none;}
.clearfix::after,.clearfix::before {
  display: block;
  content: "";
}
.clearfix::after {
  clear: both;
}
.con {
  width: 80%;
  margin: 0 auto;
  border-radius: 40px;
  margin-top: 30px;
  /* background-color: hsla(0,0%,100%,.9); */
  background-color: rgb(100,194,255,.5);
}
.title {
  height: 85px;
  line-height: 85px;
  font-size: 12px;
  padding-left: 45px;
  box-sizing: border-box;

}
.title > span {
  color: #0e0e0e;
}
.item-con {
  width: 430px;
  height: 230px;
  float: left;
  /* margin-left: 30px; */
  margin-top: 20px;
  
  border-bottom: 1px dashed #288ed1;
}
.imgs {
  width: 252px;
  height: 160px;
  border-radius: 20px;
  border: dashed 2px #278ed1;
  float: left;
  /* margin-left: 30px; */
}
.imgs img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.active {
  width: 500px;
}
.text {
  float: left;
}
.text > p {
  font-size: 10px;
  line-height: 30px; 
  padding-left: 10px;
}
.a {
  display: block;
  width: 100%;
  margin-top: 20px;
  height: 30px;
  background-color: #00a0e9;
  text-align: center;
  font-size: 13px;
  margin-left: 10px;
  line-height: 30px;
  color: #fff;
  text-decoration: none;
  border-radius: 20px;
}
</style>