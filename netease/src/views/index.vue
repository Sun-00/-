<template>
  <div class="content">
      <div class="banner">

      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            word:"电吹风",
            list:[],
        }
    },
    created() {
        // this.$http('xhr/search/search.json?__timestamp=1571992333445&page=1&sortType=0&categoryId=0&descSorted=true&matchType=0&floorPrice=-1&upperPrice=-1&stillSearch=false&searchWordSource=1&size=40&keyword='+this.word+'&needPopWindow=true').then((res)=>{
        //     console.log(res)            
        //     this.list = res.data.data.directly.searcherResult.result
        //     console.log(this.list)
        // })
    },
}
</script>

<style scoped>
.content{
    width: 100%;
}
</style>