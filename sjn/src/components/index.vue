<template>
  <div id="app">
    <headers :num="0"></headers>
    <div class="con">
        <div class="ban">
        <img src="http://jzfp.anhui.xingyao100.com/web/static/img/index_bg.9879b25.png">
      </div>
      <div class="content">
          <div class="children">
            <div class="index_tit">
              <img :src="titimg">
              <span>儿童成长 </span><span style="color: rgb(255, 255, 255); border-left: 2px solid rgb(255, 255, 255); padding-left: 6px; cursor: pointer;">更多</span>
            </div>
            <div class="child">
              <ul class="cursor clearfix" v-for="(i,index) in children" :key="index">
                <li>
                  <img :src="i.cover_img">
                </li>
                <li>{{i.title}}</li>
              </ul>
            </div>
        </div>
        <div class="agriculture">
          <div class="index_tit">
            <img :src="titimg">
            <span>益智乐园 </span><span style="color: rgb(0, 160, 233); border-left: 2px solid rgb(0, 160, 233); padding-left: 6px; cursor: pointer;">更多</span>
          </div>
          <div class="child">
            <ul class="cursor clearfix" v-for="(i,index) in agriculture" :key="index">
              <li>
                <img :src="i.cover_img">
              </li>
              <li>{{i.title}}</li>
            </ul>
          </div>
        </div>
        <div class="skill">
          <div class="index_tit">
            <img :src="titimg">
            <span>绘本故事 </span><span style="color: rgb(0, 160, 233); border-left: 2px solid rgb(0, 160, 233); padding-left: 6px; cursor: pointer;">更多</span>
          </div>
          <div class="child">
            <ul class="cursor clearfix" v-for="(i,index) in skill" :key="index">
              <li>
                <img :src="i.cover_img">
              </li>
              <li>{{i.title}}</li>
            </ul>
          </div>
        </div>
        <div class="characteristic">
          <div class="index_tit">
            <img :src="titimg">
            <span>课外读物 </span><span style="color: rgb(0, 160, 233); border-left: 2px solid rgb(0, 160, 233); padding-left: 6px; cursor: pointer;">更多</span>
          </div>
          <div class="child">
            <ul class="cursor clearfix" v-for="(i,index) in characteristic" :key="index">
              <li>
                <img :src="i.cover_img">
              </li>
              <li>{{i.title}}</li>
            </ul>
          </div>
        </div>
        <div class="activity">
          <div class="index_tit">
            <img :src="titimg">
            <span>活动 </span><span style="color: rgb(0, 160, 233); border-left: 2px solid rgb(0, 160, 233); padding-left: 6px; cursor: pointer;">更多</span>
          </div>
          <div class="child">
            <ul class="cursor clearfix" v-for="(i,index) in activity" :key="index">
              <li>
                <img :src="i.cover_img">
              </li>
              <li>{{i.title}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="code">
        <div class="index_code">
          <i></i>
          <div class="rcode">
            <img src="data:image/png;base64,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">
          </div>
          <i></i>
        </div>
        <h4>扫描二维码</h4>
        <h4>了解更多精彩内容</h4>
      </div>
    </div>
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
      type:[],
      titimg:"data:image/png;base64,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",
      children:[],
      agriculture:[],
      skill:[],
      characteristic:[],
      activity:[],
    }
  },
  created() {
    this.axios.get('http://jzfp.anhui.xingyao100.com/api/v1/categorys/0').then((response) => {
      // console.log(response.data)
      this.type = response.data.data
    })
    this.axios.get('http://jzfp.anhui.xingyao100.com/api/v1/videos/1?page=1&size=7&t=9zj5RaTd').then((response) => {
      // console.log(response.data)
      this.children = response.data.data
    })
    this.axios.get('http://jzfp.anhui.xingyao100.com/api/v1/videos/2?page=1&size=7&t=a61XY5ij02TS2OBVfEAI3WT8jCn').then((response) => {
      // console.log(response.data)
      this.agriculture = response.data.data
    })
    this.axios.get('http://jzfp.anhui.xingyao100.com/api/v1/videos/3?page=1&size=9&t=Nv8so6sO7').then((response) => {
      // console.log(response.data)
      this.skill = response.data.data
    })
    this.axios.get('http://jzfp.anhui.xingyao100.com/api/v1/ebooks/16?page=1&size=7&order_type=0&t=d49Llp91R').then((response) => {
      // console.log(response.data)
      this.characteristic = response.data.data
    })
    this.axios.get('http://jzfp.anhui.xingyao100.com/api/v1/activities/?page=1&size=4&t=MP94F99dXuFwwlTXhziQ').then((response) => {
      // console.log(response.data)
      this.activity = response.data.data
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
.clearfix::before, .clearfix::after {
  content: '';
  display: table;
  clear: both;
}
.con{
  background: #d7f6fd url('http://jzfp.anhui.xingyao100.com/web/static/img/index_bg.9879b25.png') no-repeat;
  background-size: 100%;
}
.ban{
  width: 100%;
}
.ban img{
  width: 100%;
  height: 100%;
}
.children{
  width: 100%;
  height: auto;
  background: url('http://jzfp.anhui.xingyao100.com/web/static/img/rtjybg.8f255a7.png') no-repeat;
  background-size: 100% 100%;
  margin-top:-4px;
  color:#fff;
}
.children .index_tit span{
  color:#fff;
}
.index_tit{
  width: 100%;
  height: 80px;
  padding-top: 40px;
  background-size: 100%;
  font-size: 22px;
  text-align: center;
}
.index_tit * {
  vertical-align: middle;
}
.agriculture{
  width: 100%;
  background: url('http://jzfp.anhui.xingyao100.com/web/static/img/yzlybg.cd9ca3a.png') no-repeat;
  background-size: 100% 100%;
} 
.index_tit span{
  color: rgb(0, 160, 233)
}
.skill{
  width: 100%;
  background: url('http://jzfp.anhui.xingyao100.com/web/static/img/hbgsbg.a8c8dcb.png') no-repeat;
  background-size: 100% 100%;
}
.characteristic{
  width: 100%;
  background: url('http://jzfp.anhui.xingyao100.com/web/static/img/kwdwbg.95c61ea.png') no-repeat;
  background-size: 100% 100%;
}
.activity{
  width: 100%;
  background: url('http://jzfp.anhui.xingyao100.com/web/static/img/hdbg.d61abde.png') no-repeat;
  background-size: 100% 100%;
}
.code{
  width: 100%;
}
.code h4{
  text-align: center;
  line-height: 28px;
  color: #278ed1;
}
.index_code{
  width: 1200px;
  height: 136px;
  margin: auto;
  margin-top: 60px;
}
.index_code i {
  width: 505px;
  border-bottom: 3px dashed #278ed1;
  float: left;
  margin-top: 61.5px;
}
.rcode{
  width: 126px;
  height: 126px;
  border: 3px dashed #278ed1;
  padding: 3.5px;
  box-sizing: border-box;
  float: left;
  margin: 0 32px;
  margin-bottom: 10px;
}
.rcode img {
  width: 113px;
  height: 113px;
}
.child{
  margin-left:200px;
}
.child .cursor{
  width: 381px;
  display: inline-block;
  margin-bottom: 20px;
  margin-right:35px;
}
.child .cursor li:first-child{
  width: 100%;
  height: 235px;
  border-radius: 17px;
  border: 2px dashed #278ed1;
  box-sizing: border-box;
}
.child .cursor li img{
  width: 100%;
  height: 100%;
  border-radius: 17px;
}
.child .cursor li{
  width: 100%;
  line-height: 60px;
  text-align: center;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
