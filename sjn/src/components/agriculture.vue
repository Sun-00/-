<template>
  <div class="content">
    <headers :num="index"></headers>
      <!-- <p>益智乐园</p> -->
			<div class="S_list">
				
			</div>
  </div>
</template>

<script>
import headers from './header'
export default {
	components:{
		headers,
	},
	data() {
		return {
			index:2
		}
	},
	created(){
		this.ajax()
	},
	methods:{
		ajax(){
			this.axios.get(`http://jzfp.anhui.xingyao100.com/api//v1/categorys/${this.index}`).then((data)=>{
				console.log(data)
			})
		}
	}
}
</script>

<style scoped>
	.S_list{
		width: 80%;
		height: 500px;
		margin: 0 auto;
		background: pink;
		border-radius: 50px;
	}
</style>