<template>
	<div style="width: 100%;height: 100%;padding-top: 20px;" class="bigbox">
		<p style="font-size: 18px;width: 1090px;margin: auto;margin-bottom: 20px;">首页 &nbsp;><span style="font-size: 14px;margin-left: 10px;color: #999;">居家生活</span></p>
		<div style="width: 1090px;height: 310px;margin: auto;">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<img src="https://yanxuan.nosdn.127.net/83494a9f095406d6c4aab41175029c70.jpg?imageView&quality=95&thumbnail=1090x310" />
					</div>
					<div class="swiper-slide">
						<img src="https://yanxuan.nosdn.127.net/6cdfb06507f2881bcb2759463e6a7fe8.jpg?imageView&quality=95&thumbnail=1090x310" />
					</div>
					<div class="swiper-slide">
						<img src="https://yanxuan.nosdn.127.net/66580f71a654c34ecc941614b5feb854.jpg?imageView&quality=95&thumbnail=1090x310" />
					</div>
				</div>
				<!-- Add Pagination -->
				<div class="swiper-pagination swiper-pagination-white"></div>
				<!-- Add Arrows -->
				<div class="swiper-button-next swiper-button-white"></div>
				<div class="swiper-button-prev swiper-button-white"></div>
			</div>
		</div>
		<div class="content" style="margin-top: 30px;">
			<div class="top">
				<div class="left">分类:</div>
				<div class="right">
					<a v-for="(i,index) in arr" class="spa" @click="btn(i,index)" :key='index' :class="{spacolor:num==index}">{{i}}</a>
				</div>
			</div>
			<div class="toptwo">
				<div class="left leftsss">配送地区:</div>
				<div class="rights">
					<a v-for="(i,index) in arrtwo" class="spa" :key='index' @click="btntwo(index)" :class="{spacolors:nums==index}">{{i}}</a>
				</div>
			</div>
			<div class="topthree">
				<div class="left leftss">排序:</div>
				<div class="rights">
					<a v-for="(i,index) in arrthree" class="spa" :key='index' @click="btnthree(i,index)" :class="{spacolorss:numss==index}">{{i}}</a>
				</div>
			</div>
			<div class="center" style="padding-left: 40px;padding-right: 40px;padding-top: 30px;overflow: hidden;">
				<div v-if="num==1" style="width: 100%;overflow: hidden;padding-bottom:40px;padding-top:40px;text-align: center;">
					<h3 style="font-size: 24px;font-weight: 700;line-height: 44px;">双11定金购</h3>
					<p  style="font-size: 18px;margin-top: 10px;color: #999;">双11定金购</p>
				</div>
				<div class="smallbox" v-for="(t,index) in list" :key='index' @mouseover="imgs(index)" @mouseout="leas">
					<img :src="like==index?im[index]:t.one" id="imggs" />
					<h6>{{t.two}}</h6>
					<p class="pone">{{t.three}}</p>
					<p class="ptwo">{{t.four}}</p>
				</div>
			</div>
		</div>
		<div class="l">
			<ul class="ls">
				<span class="left1">- 热销榜 -</span>
				<li>
					<img src="http://yanxuan.nosdn.127.net/d83d6cc58589e7b9540e57809920d961.png">
					<p>
						<span class="left2">全站</span><br>
						<span class="left3">热销榜</span>
					</p>

				</li>
				<li>
					<img src="http://yanxuan.nosdn.127.net/288d84fe691240d9f87271b293f39b67.png">
					<p>
						<span class="left2">居家</span><br>
						<span class="left3">生活榜</span>
					</p>
				</li>
				<li>
					<img src="http://yanxuan.nosdn.127.net/8ca4557361e2fff394a5a94d0b73f3c6.png">
					<p>
						<span class="left2">服饰</span><br>
						<span class="left3">鞋包榜</span>
					</p>
				</li>
				<li>
					<img src="http://yanxuan.nosdn.127.net/2318b65e996e14bc0707880040dfabb0.png">
					<p>
						<span class="left2">美食</span><br>
						<span class="left3">酒水榜</span>
					</p>
				</li>
				<li>
					<img src="http://yanxuan.nosdn.127.net/270bc2465ac7eed90ada40c92166678b.png">
					<p>
						<span class="left2">数码</span><br>
						<span class="left3">家电榜</span>
					</p>
				</li>
				<li>
					<img src="http://yanxuan.nosdn.127.net/4723267aef758a7d805bb7c1447fdc44.png">
					<p>
						<span class="left2">个人</span><br>
						<span class="left3">清洁榜</span>
					</p>
				</li>
				<li>
					<img src="http://yanxuan.nosdn.127.net/eec3af53eb17a4b117043e18ae7c7418.png">
					<p>
						<span class="left2">运动</span><br>
						<span class="left3">旅行榜</span>
					</p>
				</li>
				<li>
					<img src="http://yanxuan.nosdn.127.net/a94b2f7f7ada813ae9c93f84d3d60d6f.png">
					<p>
						<span class="left2">母婴</span><br>
						<span class="left3">亲子榜</span>
					</p>
				</li>
				<li>
					<img src="http://yanxuan.nosdn.127.net/9cb33f543dddd54c7cc157d29650dbf4.png">
					<p>
						<span class="left2">全球</span><br>
						<span class="left3">特色榜</span>
					</p>
				</li>
			</ul>
		</div>
		<div class="r">
			<ul class="rs">
				<img src="https://yanxuan.nosdn.127.net/4fb793a683fab9ef657007d9371c70d1.gif">
				<li class="right1">
					<i class="iconfont erwema">&#xe680;</i>
				</li>
				<li class="right2">
					<p>扫码领</p>
					<p>APP1000元</p>
					<p>新人礼</p>
				</li>
				<li class="right3">
					<i class="iconfont">&#xe665;</i>
					<span>订阅电子刊</span>
				</li>
				<li class="right3">
					<i class="iconfont">&#xe7c2;</i>
					<span>在线客服</span>
				</li>
				<li class="right3">
					<i class="iconfont">&#xe677;</i>
					<span>回顶部</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	export default {
		data() {
			return {
				im:[
				"https://yanxuan-item.nosdn.127.net/b658182c275d8c884c9312eebfb8b051.jpg?quality=95&thumbnail=245x245&imageView",
				"https://yanxuan-item.nosdn.127.net/b9f03a2ceb20ec082d34af83b9a48e48.jpg?quality=95&thumbnail=245x245&imageView",
				"https://yanxuan-item.nosdn.127.net/0e8c9e33189399074be0aad15a8425b0.jpg?quality=95&thumbnail=245x245&imageView",
				"https://yanxuan-item.nosdn.127.net/3c3c1d894a52020a991be805601d71ab.jpg?quality=95&thumbnail=245x245&imageView",
				"https://yanxuan-item.nosdn.127.net/d247ff114d4d000abc39b4cb09988db2.png?quality=95&thumbnail=245x245&imageView",
				"https://yanxuan-item.nosdn.127.net/3edc55fa06c65032f6130d2e4a70e89f.png?quality=95&thumbnail=245x245&imageView",
				"https://yanxuan-item.nosdn.127.net/6505732b6f83627aa62913f4b5eb3162.png?quality=95&thumbnail=245x245&imageView",
				"https://yanxuan-item.nosdn.127.net/712ba349c8d3615b4e6b3145992c528f.png?quality=95&thumbnail=245x245&imageView",
				"https://yanxuan-item.nosdn.127.net/154dcdaae35c979f8903956e524f5b66.png?quality=95&thumbnail=245x245&imageView",
				"https://yanxuan-item.nosdn.127.net/39d13be31c163beed2b7409dab3b808d.png?quality=95&thumbnail=245x245&imageView",
				"https://yanxuan-item.nosdn.127.net/2d8b06ef578f3b61f6c24ad8713213da.png?quality=95&thumbnail=245x245&imageView",
				"https://yanxuan-item.nosdn.127.net/39da8e19335432c46882a3f80e2e4300.png?quality=95&thumbnail=245x245&imageView"
				],
				arr: ['全部','双11定金购','新品首发','好味精选','饼干糕点','小食糖巧','肉类零食','坚果炒货','蜜饯果干','冲调饮品','传统茗茶','茗茶礼盒','茶包花茶','滋补食材','保健品','乳品饮料','酒类名酒','馆米面','粮油方便食品','南北干货','调味酱菜','水果蔬菜','肉蛋海鲜','冷冻冷藏','网易黑猪','全球美食'],
				arrtwo: ['全部', '香港', '澳门', '台湾', '日韩', '欧洲', '美洲'],
				arrthree: ['默认', '价格', '上架时间'],
				list: [],
				num: 0,
				nums: 0,
				numss: 0,
				biglist: [],
				like: 100,
			}

		},
		created() {
			this.axios.get('./file.json').then((data) => {
				console.log(data.data)
				this.list = data.data.results[0].arrs[0].small
				this.biglist = data.data.results
			})
		},
		methods: {
			leas(){
				this.like=100
			},
			imgs(index) {
				this.like = index
			},
			btn(i, index) {
				this.num = index
				console.log(i)
				this.list = this.biglist[index].arrs[this.nums].small
			},
			btntwo(index) {
				this.nums = index
				//				console.log(this.biglist)
				this.list = this.biglist[this.num].arrs[index].small
				console.log(this.list)

			},
			btnthree(index) {
				this.numss = index
			},
		},
		mounted() {
			new Swiper('.swiper-container', {
				autoplay: true,
				spaceBetween: 30,
				effect: 'fade',
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});
		}
	}
//	window.open('html')
</script>

<style>
	.rs {
		width: 72px;
		height: auto;
		background: white;
	}
	
	.rs img {
		width: 72px;
		height: 150px;
	}
	
	.right1 {
		width: 70px;
		height: 70px;
	}
	
	.right1 .erwema {
		font-size: 70px;
	}
	
	.right2 {
		width: 70px;
		height: 70px;
		text-align: center;
		padding-top: 15px;
		box-sizing: border-box;
		border-bottom: 1px #ccc solid;
	}
	
	.right2 p:nth-of-type(1) {
		font-size: 12px;
		color: #404040;
	}
	
	.right2 p:nth-of-type(2) {
		font-size: 12px;
		color: #BD2C00;
	}
	
	.right2 p:nth-of-type(3) {
		font-size: 12px;
		color: #BD2C00;
	}
	
	.right3 {
		width: 70px;
		height: 78px;
		padding-top: 15px;
		box-sizing: border-box;
		border-bottom: 1px #ccc solid;
	}
	
	.right3 i {
		font-size: 26px;
		text-align: center;
		display: block;
	}
	
	.right3 span {
		font-size: 12px;
		text-align: center;
		display: block;
		padding-top: 10px;
	}
	
	.ls {
		width: 110px;
		height: 365px;
		border: 1px #ccc solid;
		border-left: none;
		background: white;
		z-index: 2;
	}
	
	.ls li {
		width: 108px;
		height: 35px;
		border-bottom: 1px #ccc solid;
	}
	
	.ls li:nth-of-type(9) {
		border-bottom: none;
	}
	
	.left1 {
		font-size: 16px;
		color: #BB3344;
		text-align: center;
		line-height: 38px;
		border-bottom: 1px #ccc solid;
		/*box-sizing: border-box;*/
		display: block;
		background: url(http://yanxuan.nosdn.127.net/7c1853dd59b79d823ad3c4f3a0330049.png) bottom no-repeat;
	}
	
	.ls img {
		float: left;
		width: 30px;
		height: 30px;
		margin-left: 5px;
	}
	
	.left2 {
		font-size: 10px;
		margin-left: 10px;
		height: 15px;
		display: block;
		float: left;
		font-weight: 400;
		margin-top: 5px;
	}
	
	.left3 {
		font-size: 10px;
		margin-left: 10px;
		height: 15px;
		display: block;
		float: left;
		font-weight: 400;
	}
	
	.ls li p:hover {
		color: #BB3344;
	}
	
	.l {
		position: fixed;
		left: 3%;
		top: 20%;
		width: 110px;
		height: 363px;
	}
	
	.r {
		position: fixed;
		right: 3%;
		top: 20%;
		width: 110px;
		height: 363px;
	}
	
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	.imges {
		display: none;
	}
	
	.smallbox {
		width: 245px;
		overflow: hidden;
		float: left;
		text-align: center;
		margin-right: 6px;
		margin-bottom: 50px;
	}
	
	.smallbox img {
		width: 245px;
		height: 245px;
	}
	
	.smallbox h6 {
		font-size: 16px;
		line-height: 20px;
		margin: 20px 0;
	}
	
	.smallbox:hover {
		background-color: #f4f0ea;
	}
	
	.pone {
		font-size: 15px;
		padding-bottom: 10px;
		color: red;
		line-height: 22px;
		width: 50%;
		height: 22px;
		margin: auto;
		border-bottom: 1px solid #E5E5E5;
	}
	
	.ptwo {
		color: #999;
		font-size: 15px;
		margin-top: 15px;
	}
	
	.spa {
		margin-right: 30px;
		margin-bottom: 16px;
		font-size: 14px;
		color: #333;
	}
	
	.spacolors {
		color: #b4a078;
	}
	
	.spacolorss {
		color: #b4a078;
	}
	
	.spacolor {
		color: #b4a078;
	}
	
	.spa:hover {
		color: #b4a078;
	}
	
	.bigbox {
		background: #f5f5f5;
	}
	
	.content {
		width: 1090px;
		overflow: hidden;
		background: white;
		margin: auto;
	}
	
	.left {
		font-size: 14px;
		color: #999;
		float: left;
		margin-right: 28px;
	}
	
	.top {
		padding-top: 20px;
		padding-left: 40px;
		padding-right: 40px;
		overflow: hidden;
		padding-bottom: 20px;
		border-bottom: 1px dashed #E5E5E5;
	}
	
	.toptwo,
	.topthree {
		padding-top: 20px;
		overflow: hidden;
		padding-bottom: 20px;
		border-bottom: 1px dashed #E5E5E5;
		padding-left: 40px;
		padding-right: 40px;
	}
	
	.right {
		float: right;
		width: 930px;
	}
	
	.rights {
		float: left;
	}
	
	.leftss {
		margin-right: 50px;
	}
	
	.leftsss {
		margin-right: 17px;
	}
</style>