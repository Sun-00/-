<template>
	<div>
		<div class="S_content">
			<div class="S_header">
				<div class="S_her_top">
					<span>首页 → <span>个护清洁</span></span>
				</div>
				<div class="lunbo" @mouseenter.stop="S_cleartid" @mouseout.stop="S_daktid">
					<ul class="S_index">
						<li v-for="(k,index) in S_img" :key="k.id">
							<img :src="k" :style="aindex==index?'opacity:1':'opacity:0'" />
						</li>
					</ul>
					<div class="S_left" @mouseout.stop="S_yichuqu" @mouseenter="S_cleartid" @click.stop="S_jianj"><</div>
					<div class="S_right" @mouseout.stop="S_yichuqu" @mouseenter="S_cleartid" @click.stop="S_jiaj">></div>
					<div class="S_dwei" :style="{marginLeft:-S_yquan*(10+10)/2+'px'}">
							<a href="javascript:;" @mouseout="S_yichuqu"  @mouseenter="S_adj(index)" :style="aindex==index?'background:red':''" v-for="(s,index) in S_yquan" :key="s.id"></a>
					</div>
				</div>
				<div class="S_her_lun">
					<div class="fl">分类:</div>
					<ul class="S_list">
						<li @click="qbdj" :class="typage==-1?'active':''">全部</li>
						<li @click="lidj(index)" :class="typage==index?'active':''" v-for="(i,index) in itemArr" :key="i.id">{{i.name}}</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				itemArr: [],
				typage:-1,
				S_img:[
					   'https://yanxuan.nosdn.127.net/8ed8ce65140d826e322ec799f5d5a275.jpg?imageView&quality=95&thumbnail=1090x310',
					   'https://yanxuan.nosdn.127.net/0538989c3a7b47bdcd8801bcbed8d859.jpg?imageView&quality=95&thumbnail=1090x310',
					   'https://yanxuan.nosdn.127.net/1465cbcab72135243dbf57e8a031d909.jpg?imageView&quality=95&thumbnail=1090x310',
					   'https://yanxuan.nosdn.127.net/1bddd405120d3b8da5d067722629bbb2.jpg?imageView&quality=95&thumbnail=1090x310',
					  ],
				S_yquan:0,
				aindex:0,
				aindex1:0,
				tid:null,
			}
		},
		mounted(){
			this.S_yquan = this.S_img.length
		},
		methods:{
			S_cleartid(){
				clearInterval(this.tid)
			},
			S_daktid(){
				this.S_yichuqu1()
			},
			lidj(inx){
				this.typage = inx
			},
			qbdj(){
				this.typage = -1
			},
			S_adj(inx){
				this.aindex = inx
			},
			S_jianj(){
				if(this.aindex<=0){
					this.aindex=this.S_img.length-1
				}else{
					this.aindex--
				}
			},
			S_jiaj(){
				if(this.aindex>=this.S_img.length-1){
					this.aindex=0
				}else{
					this.aindex++
				}
			},
			S_yichuqu(){
				clearInterval(this.tid)
			},
			S_yichuqu1(){
				this.tid=setInterval(()=>{
					if(this.aindex>=this.S_img.length-1){
						this.aindex=0
					}else{
						this.aindex++
					}
				},500)
			},
		},
		created() {
			this.axios.get('/api/globalinfo//queryTop.json', {
				params: {
					'__timestamp': 1571797131920,
				}
			}).then((item) => {
				this.itemArr = item.data.data.cateList[3].subCateList
			})
			this.S_yichuqu1()
		}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}

	body {
		background: #CCCCCC;
	}
	.lunbo:hover>.S_right{
		display: block;
	}
	.lunbo:hover>.S_left{
		display: block;
	}
	.S_dwei{
		position: absolute;
		bottom: 10px;
		left: 50%;
		text-align: center;
	}
	.S_dwei>a{
		float: left;
		width: 10px;
		height: 10px;
		border: 1px solid #eee;
		border-radius: 10px;
		text-decoration: none;
		background: pink;
		color: #000;
		margin-left: 10px;
	}
	.S_left{
		width: 50px;
		height: 50px;
		border-radius: 20px;
		cursor: pointer;
		background: rgba(155,155,155,.5);
		position: absolute;
		color: #000;
		line-height: 45px;
		text-align: center;
		display: none;
		font-size: 35px;
		left: 20px;
		top: 50%;
		margin-top: -25px;
	}
	.S_right{
		width: 50px;
		height: 50px;
		border-radius: 20px;
		cursor: pointer;
		background: rgba(155,155,155,.5);
		position: absolute;
		color: #000;
		display: none;
		line-height: 45px;
		text-align: center;
		font-size: 35px;
		right: 20px;
		top: 50%;
		margin-top: -25px;
		transition: all 1s;
	}
	.active{
		color: darkkhaki;
	}

	.S_content {
		width: 85%;
		height: auto;
		background: #ccc;
		margin: 0 auto;
	}

	.S_header {
		width: 100%;
		height: auto;
	}

	.S_her_top {
		width: 100%;
		height: 10%;
		background: palegoldenrod;
		padding: 10px;
		box-sizing: border-box;
	}

	.S_her_top>span {
		height: 100%;
		line-height: 30px;
		font-size: 12px;
	}
	.S_her_lun{
		padding-left: 80px;
		box-sizing: border-box;
		background: #fff;
		position: relative;
	}

	.S_her_lun>span {
		display: block;
		margin: 20px;
		line-height: 40px;
		background: orange;
	}

	.S_her_top>span>span {
		color: #666;
	}
	.S_list{
		height: auto;
		padding: 20px;
		box-sizing: border-box;
	}
	.S_list>li{
		list-style: none;
		display: inline-block;
		width: 100px;
		line-height: 40px;
		font-size: 14px;
		text-align: center;
		cursor: pointer;
	}
	
	.S_list>li:hover{
		color: darkkhaki;
	}
	.fl{
		float: left;
		width: 100px;
		color: #555;
		text-align: center;
		position: absolute;
		left: 20px;
		top: 30px;
		font-size: 14px;
	}
	.S_index>li{
		width: 100%;
		height: 400px;
		list-style: none;
		float: left;
		position: absolute;
		top:0;
	}
	.lunbo{
		width: 100%;
		height: 400px;
		position: relative;
		overflow: hidden;
	}
	.S_index>li>img{
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: all 1s;
	}
</style>
