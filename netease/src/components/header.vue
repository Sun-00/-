<template>
  <div class="header">
      <div class="header_top">
          <div class="con">
              <p><img src="https://yanxuan.nosdn.127.net/d132c2561f18f1149d566a60d05fd9b7.gif"><a href=" ">用银行卡在严选购物，最高随机直减99元</a></p>
              <ul>
                  <li v-for="(i,index) in nav" :key="index">{{i}}</li>
                  <li @mousemove="showd(0)">
                      企业采购
                      <span class="iconfont icon-jiantouxia"></span>
                      <div class="showdiv" v-show="showss" @mouseout="hided(0)">
                          <h5 v-for="(i,index) in navL[0].info" :key="index">{{i}}</h5>
                      </div>
                  </li>
                  <li @mousemove="showd(1)">
                      客户服务
                      <span class="iconfont icon-jiantouxia"></span>
                      <div class="showdiv" v-show="shows"  @mouseout="hided(1)">
                          <h5 v-for="(i,index) in navL[1].info" :key="index">{{i}}</h5>
                      </div>
                  </li>
                  <li @mousemove="imgshow"><span class="iconfont icon-shouji"></span>App
                      <div class="shower" v-show="imgs" @mouseout="imghid">
                          <img src="../assets/erweima.png">
                          <h5>下载领1000元新人红包</h5>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
      <div class="header_con">
          <div class="logo"></div>
          <div class="search">
              <span class="iconfont icon-sousuo"></span>
              <input type="text" placeholder="日式和风绒里居家拖鞋" v-model="word" @keydown.enter="search">
              <button @click="search">搜索</button>
              <swiper :options="swiperOption" ref="mySwiper">
                  <swiper-slide v-for="(i,index) in searchlist" :key="index">{{i.keyword}}</swiper-slide>
              </swiper>
          </div>
          <div class="shopping">
            <span  class="iconfont icon-gouwuche-01"></span>
            <span>购物车</span>
            <a></a>
          </div>
          <ul class="nav">
              <li @mouseenter="shownav(0)">首页</li>
              <li v-for="(i,index) in catelist" :key="index" @mouseenter="shownav(i.id)">{{i.name}}</li>
              <li @mouseenter="shownav(0)">为你严选</li>
              <li @mouseenter="shownav(0)">众筹</li>
          </ul>
          <div class="cart" v-show="navs">
                <ul>
                    <div v-for="(j,index) in list" :key="index">
                        <li>{{j.name}}</li>
                        <p v-for="(x,index) in j.categoryList" :key="index">
                            <img :src="x.bannerUrl" :title="x.name">
                            <span>{{x.name}}</span>
                        </p>
                    </div>
                </ul>
          </div>
      </div>
  </div>
</template>

<script>
import  '../font_1472521_73iav90e9z3/iconfont.css'
export default {
  name: 'Header',
  data() {
      return {
          swiperOption: {
            direction: 'vertical',
            autoplay:true,
          },
          catelist:[],
          searchlist:[],
          showss:false,
          shows:false,
          imgs:false,
          nav:["登录/注册","我的订单","会员","甄选家"],
          navL:[{
              name:"企业采购",
              info:["企业采购","礼品卡","联系我们"]
          },
          {
              name:"客户服务",
              info:["在线客服","帮助中心","商务合作","开放平台"]
          }],
          list:[],
          navs:false,
          word:"",
          searchList:[],
      }
  },
  methods: {
      //搜索
      search(){
          this.$http('xhr/search/search.json?__timestamp=1571992333445&page=1&sortType=0&categoryId=0&descSorted=true&matchType=0&floorPrice=-1&upperPrice=-1&stillSearch=false&searchWordSource=1&size=40&keyword='+this.word+'&needPopWindow=true').then((res)=>{
            console.log(res)      
            if(res.data.data.directly==null){
                alert("没有搜索到该物品，换个词试试")
            }else{
                this.searchList = res.data.data.directly.searcherResult.result
                console.log(this.searchList)
            }     
        })
      },
      showd(i){
        if(i==0){
            this.showss = true
        }else if(i==1){
            this.shows = true
        }
      },
      hided(i){
        if(i==0){
            this.showss = false
        }else if(i==1){
            this.shows = false
        }
      },
      imgshow(){
          this.imgs = true
      },
      imghid(){
          this.imgs = false
      },
      //分类的显示隐藏 筛选
      shownav(id){
          if(id==0){
              this.navs = false
          }
          this.catelist.forEach((item)=>{
              if(id==item.id){
                  this.navs = true
                  this.list=item.subCateGroupList
              }
          })
      }
  },
  created() {
      //分类数据
      this.$http.get('xhr/globalinfo//queryTop.json?__timestamp=1571797131920').then((res)=>{
        //  console.log(res);
         this.catelist = res.data.data.cateList
        //  console.log(this.catelist)
     })
     //搜索框下轮播
     this.$http.get('xhr/search/queryHotKeyWord.json?__timestamp=1571797131913').then((res)=>{
        //  console.log(res)
         this.searchlist = res.data.data
     })
  },
}
</script>

<style scoped>
.header{
    width: 100%;
    height: 220px;
}
.header_top{
    width: 100%;
    height: 36px;
    background: rgb(51,51,51);
}
.header_top .con{
    width: 1090px;
    margin:0 auto;
}
.header_top .con p{
    line-height: 36px;
    display: inline-block;
    color: rgb(180,160,120);
}
.header_top .con p a{
    font-size: 12px;
    color: rgb(180,160,120);
}
.header_top .con ul{
    width: 513px;
    height: 16px;
    float: right;
    margin-top:10px;
}
.header_top .con ul li{
    height: 16px;
    float: left;
    padding:0 10px;
    color: #999;
    list-style: none;
    font-size: 12px;
    border-left:1px solid #666;
    cursor: pointer;
    line-height: 16px;
}
.header_top .con ul li:first-child{
    border-left:none;
}
.showdiv{
    width: 80px;
    background: #fff;
    z-index: 8;
    position: absolute;
    margin-top:8px;
}
.showdiv h5{
    padding:0 10px;
    width: 54px;
    height: 40px;
    border-bottom: 1px solid #666;
    line-height: 40px;
    text-align: center;
}
.showdiv h5:last-child{
    border: none;
}
.shower{
    width: 130px;
    position: absolute;
    background: #fff;
    z-index:8;
    top:36px;
}
.shower img{
    width: 120px;
    height: 120px;
}
.shower h5{
    padding:0 10px;
    height: 40px;
    text-align: center;
}
.header_con{
    width: 1090px;
    height: 184px;
    padding-top:20px;
    margin:0 auto;
    position: relative;
}
.header_con .logo{
    width: 124px;
    height: 60px;
    background-image: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-component/p/20170601/style/img/x1/icon-yxtop-sbc152a7ee5-e7ebdc8b2c.png?imageView&type=webp");
    background-position:0 -202px;
    display: inline-block;
}
.header_con .search{
    display: inline-block;
    border:1px solid rgb(180,160,120);
    width: 517px;
    height: 36px;
    border-radius:18px;
    position: absolute;
    left: 360px;
    top:20px;
    padding-left: 13px;
}
.search input{
    outline: none;
    border: none;
    height:34px;
    margin-left:5px;
}
.search button{
    width: 90px;
    height: 37px;
    background-color: #B4A078;
    border-top-right-radius: 19px;
    border-bottom-right-radius: 19px;
    cursor: pointer;
    float: right;
    color: #fff;
    line-height: 38px;
    text-align: center;
    font-size: 16px;
    letter-spacing: 1px;
    border: none;
}
.shopping{
    width: 134px;
    height: 38px;
    border-radius: 19px;
    border:1px solid rgb(180,160,120);  
    margin-left: 49px;
    z-index: 4;
    line-height: 38px;
    text-align: center;
    float: right;
    color:rgb(180,160,120);
    cursor: pointer;
}
.shopping:hover{
    background: rgba(180,160,120,.2);
}
.shopping .icon-gouwuche-01{
    margin-right: 7px;
}
.search .swiper-container{
    height: 30px;
} 
.search .swiper-slide{
    line-height: 30px;
    font-size: 14px;
}
.header_con ul{
    width: 1100px;
    height: 32px;
    margin-top:20px;
    box-sizing: border-box;
}
.header_con ul li{
    height: 100%;
    line-height: 32px;
    text-align: center;
    float: left;
    list-style: none;
    margin: 6px 25px 0;
    font-size: 14px;
    font-weight: bold;
    border-bottom: 2px solid #fff;
}
.header_con .nav li:first-child{
    margin-left:0;
}
.header_con .nav li:nth-of-type(11){
    margin-right:0;
}
.header_con .nav li:hover{
    border-bottom: 2px solid rgb(180,160,120);
    color: rgb(180,160,120);
}
.header_con .cart{
    width: 1202px;
    left: -56px;
    right: auto;
    position: absolute;
    top: 144px;
    z-index: 8;
    background: #fff;
}
.cart ul{
    width: 100%;
    height: 40px;
}
.cart ul div{
    width: 130px;
    float: left;
    margin-right: 20px;
}
.cart ul div li{
    width: 125px;
    height:100%;
    line-height: 40px;
    border-bottom:1px solid #999;
}
.cart ul div img{
    width: 50px;
    height: 50px;
    vertical-align: middle;
}
.cart yl div span{
    word-wrap:break-word ;
}
.cart ul div li:last-child{
    margin-right: 0;
}
</style>
