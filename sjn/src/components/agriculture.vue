<template>
  <div class="content">
    <headers :num="index"></headers>
      <!-- <p>益智乐园</p> -->
			<div class="S_list">
				<div class="S_top">
					<div class="S_tple">
						<span>当前位置:首页>益智乐园></span>
					</div>
					<div class="S_kc" style="padding-top: 10px;">
						<span class="S_p" style="color: #00A0E9"><p>课程:</p><span>全部</span><span></span><span></span></span>
						
					</div>
				</div>
				<div class="S_bottom">
					<div class="S_div" style="clear:both;">
						<div class="S_baoX" v-for="i in arr">
							<div class="S_xiao">
								
							</div>
							<span>{{i.title}}</span>
						</div>
					</div>
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
			index:2,
			arr:[],
		}
	},
	created(){
		this.ajax()
		this.dianji()
	},
	methods:{
		ajax(){
			this.axios.get(`http://jzfp.anhui.xingyao100.com/api/v1/categorys/${this.index}`).then((data)=>{
				console.log(data)
			})
		},
		dianji(){
			this.axios.get(`http://jzfp.anhui.xingyao100.com/api/v1/videos/${this.index}`,{params:{
				size:20,
			}}).then((data)=>{
				this.arr = data.data.data
				console.log(data)
			})
		},
		
	}
}
</script>

<style scoped>
	.S_list{
		width: 90%;
		min-height: 1200px;
		margin: 0 auto;
		background: pink;
		border-radius: 50px;
		padding: 30px;
		box-sizing: border-box;
	}
	.S_tple{
		font-size: 14px;
	}
	.S_top{
		width: 100%;
		min-height: 70px;
		clear: both;
		border-bottom: 3px cadetblue solid;
	}
	.S_p{
		clear: both;
	}
	
	.S_p>p{
		float: left;
		line-height: 30px;
	}
	.S_p>span{
		display: block;
		float: left;
		width: 80px;
		height: 30px;
		line-height: 30px;
		margin-left: 10px;
		text-align: center;
		border-radius: 30px;
		cursor: pointer;
	}
	.S_act{
		background: royalblue;
	}
	.S_bottom{
		width: 100%;
		height: auto;
		padding: 20px;
		box-sizing: border-box;
		background: red;
	}
	.S_xiao{
		width: 200px;
		height: 200px;
		border: 3px dashed #00A0E9;
	}
	.S_baoX{
		float: left;
		margin: 10px;
	}
</style>