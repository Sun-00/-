<template>
  <div class="header">
      <div class="header_top"></div>
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
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
         console.log(this.catelist)
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
</style>
