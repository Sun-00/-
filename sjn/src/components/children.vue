<template>
  <div class="content">
    <headers :num="1"></headers>
    <div class="con">
      <div class="list">
        <div class="l_tit">当前位置：首页>儿童成长></div>
        <div style="width: 100%; padding-bottom: 60px;">
          <div class="cur">
            <span>课程：</span>
            <ul>
              <li @click="Fnall(index)" v-for="(i,index) in 1" :key="index" :class="{active:ind==index}">全部</li>
              <li v-for="(i,index) in types" :key="index" @click="Fnch(index+1,i.id)" :class="{active:ind==index+1}">{{i.cate_name}}</li>
            </ul>
          </div>
          <div class="sort">
            <span>智能排序：</span>
            <ul>
              <li v-for="(i,index) in sort" :key="index" @click="sorts(index)" :class="{active:ine==index}">{{i}}</li>
            </ul>
          </div>
          <div class="listv">
            <div style="width: 100%;">
              <div id="table" style="min-height: 750px;">
                <ul v-for="(i,index) in lists" :key="index">
                  <li>
                    <img :src="i.cover_img">
                  </li>
                  <li>{{i.title}}</li>
                </ul>
              </div>
            </div>
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
    sort:['最新发布','最多喜欢','最多分享'],
    types:[],
    ind:"",
    ine:"",
    lists:[],
  }
},
created() {
  this.axios.get('http://jzfp.anhui.xingyao100.com/api/v1/categorys/1?t=K8gMEA2').then((response) => {
    console.log(response.data)
    this.types = response.data.data
  })
  this.axios.get('http://jzfp.anhui.xingyao100.com/api/v1/videos/1?page=1&size=12&order_type=0&t=B8lxa6uVHhQvdG9').then((response) => {
    this.lists = response.data.data
  })
},
methods: {
  Fnch(index,id){
    this.ind = index
    this.axios.get('http://jzfp.anhui.xingyao100.com/api/v1/videos/'+id+'').then((response) => {
      console.log(response.data)
      this.lists = response.data.data
    })
  },
  Fnall(index){
    this.ind = index
    this.axios.get('http://jzfp.anhui.xingyao100.com/api/v1/videos/1?page=1&size=12&order_type=0&t=B8lxa6uVHhQvdG9').then((response) => {
    this.lists = response.data.data
  })
  },
  sorts(ind){
    this.ine = ind
  }
},
}
</script>

<style scoped>
.con{
  background: #d7f6fd url('http://jzfp.anhui.xingyao100.com/web/static/img/index_bg.9879b25.png') no-repeat;
  background-size: 100%;
  padding-top:160px;
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
.list{
  width: 1200px;
  margin: auto;
  background: hsla(0,0%,100%,.9);
  border-radius: 48px;
}
.l_tit{
  height: 85px;
  line-height: 85px;
  font-size: 14px;
  padding-left: 45px;
  box-sizing: border-box;
}
.cur{
  width: 1155px;
  height: 40px;
  padding-left: 45px;
  border-bottom: 2px solid #65c2ff;
  padding-bottom: 18px;
}
.cur span,.cur ul li{
  height: 40px;
  float: left;
  line-height: 40px;
  color: #00a0e9;
}
.cur ul li{
  margin-bottom: 1px;
  font-size: 16px;
  padding: 0 25px;
  border-radius: 17px;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0 10px;
}
.sort{
 width: 1155px;
 height: 40px;
 padding: 18px 0 18px 45px;
 border-bottom: 2px solid #65c2ff;
}
.sort span,.cur ul li,.sort ul li{
  height: 40px;
  float: left;
  line-height: 40px;
  color: #00a0e9;
}
.sort ul li{
  margin-bottom: 1px;
  font-size: 16px;
  padding: 0 25px;
  border-radius: 17px;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0 10px;
}
.active{
  background: #00a0e9!important;
  color: #fff!important;
}
#table{
  padding-left: 45px;
  padding-top:40px; 
}
#table ul{
  width: 265.5px;
  height: 178px;
  float: left;
  margin-right: 16px;
  margin-bottom: 60px;
  text-align: center;
  line-height: 40px;
}
#table ul li:first-child{
  width: 100%;
  height: 182px;
  border-radius: 17px;
  border: 2px dashed #278ed1;
  box-sizing: border-box;
}
#table ul li img{
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 17px;
}
</style>