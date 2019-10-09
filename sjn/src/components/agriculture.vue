<template>
  <div class="content">
    <headers :num="index"></headers>
      <!-- <p>益智乐园</p> -->
			<div class="S_list">
				<div class="S_top">
					<div class="S_tple">
						<span>当前位置:首页>益智乐园>{{wenzi}}</span>
					</div>
					<div class="S_kc" style="padding-top: 10px;">
					<span class="S_p" style="color: #00A0E9"><p>课程:</p><span @click="qb" :class="ys==3?'S_act':''">全部</span><span v-for="(k,index) in sting" :key="k.id" :class="ys==index?'S_act':''" @click="hh(index)">{{k.cate_name}}</span></span>
					</div>
					<div class="S_kc" style="padding-top: 10px;">
					<span class="S_p" style="color: #00A0E9"><p>智能排序:</p><span @click="qb1" :class="ys2==0?'S_act':''">最新发布</span><span @click="qb2" :class="ys2==1?'S_act':''">最多喜欢</span><span @click="qb3" :class="ys2==2?'S_act':''">最多分享</span></span>
					</div>
				</div>
				<div class="S_bottom">
					<div class="S_div" style="clear:both;">
						<div class="S_baoX" v-for="i in arr" :key="i.id">
							<div class="S_xiao">
								<img :src="i.cover_img">
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
			sting:[],
			ys:3,
			ys2:0,
			wenzi:'全部',
		}
	},
	created(){
		this.ajax()
		this.dianji()
	},
	methods:{
		qb(){
			this.ys = 3
			this.wenzi='全部'
			this.dianji()
		},
		qb1(){
			this.ys2=0
		},
		qb2(){
			this.ys2=1
		},
		qb3(){
			this.ys2=2
		},
		hh(inx){
			if(inx==0){
				this.ys=0
				this.wenzi='多彩绘画课堂'
			}
			if(inx==1){
				this.ys=1
				this.wenzi='益智手工课堂'
			}
		},
		ajax(){
			this.axios.get(`http://jzfp.anhui.xingyao100.com/api/v1/categorys/${this.index}`).then((data)=>{
				console.log(data)
				this.sting = data.data.data
			})
		},
		dianji(){
			this.axios.get(`http://jzfp.anhui.xingyao100.com/api/v1/videos/${this.index}`,{params:{
				size:16,
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
		background: rgba(160,255,42,.9);
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
	}
	.S_kc{
		height: 40px;
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
		min-width: 80px;
		height: 30px;
		font-size: 14px;
		line-height: 30px;
		margin-left: 10px;
		text-align: center;
		border-radius: 30px;
		cursor: pointer;
	}
	.S_act{
		background: royalblue;
		color: #fff;
	}
	.S_bottom{
		width: 100%;
		height: 100%;
		padding: 20px;
		box-sizing: border-box;
	}
	.S_xiao{
		width: 250px;
		height: 190px;
		cursor: pointer;
		border: 3px dashed #00A0E9;
	}
	.S_xiao>img{
		width: 100%;
		height: 100%;
	}
	.S_baoX{
		text-align: center;
		float: left;
		margin: 10px;
	}
	.S_baoX>span{
		font-size: 14px;
		line-height: 30px;
		cursor: pointer;
	}
</style>