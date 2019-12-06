<template>
	<div id="app">
		<div class="content">
			<div class="banner">
				<img :src="oban"/>
			</div>
		</div>
		<div class="nav">
			<div class="navbox">
				<p>
					<span>玩转</span><br/>
					<span>众筹</span>
				</p>
				<ul>
					<li><span>怦然心动的项目</span></li>
					<li><span>支持产品生产</span></li>
					<li><span>项目众筹成功</span></li>
					<li><span>抢先体验新品</span></li>
				</ul>
			</div>
		</div>
		<div class="cont">
			<div class="contbox">
				<div>
					<div class="header">
						<div class="header-1">
							<div class="header-2">
								<p>众筹结束</p>
							</div>
						</div>
					</div>
					<ul class="oul">
						<li class="oli" v-for="(i,index) in olist" :key="index">
							<div class="obox">
								<div class="left">
									<img :src="i.picUrl"/>
								</div>
								<div class="right">
									<p style="font-size: 20px;color: #333;letter-spacing: 0;line-height: 30px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;margin-top: 24px;">{{i.name}}</p>
									<p style="font-size: 14px;color: #999;letter-spacing: 0;line-height: 16px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;margin-top: 6px;">{{i.description}}</p>
									<div style="width: 300px;background-color: transparent;padding: 0;">
										<div style="margin-top: 38px;position: relative;">
											<div style="width: 220px;height: 2px;background-color: #F4F4F4;border-radius: 2px;position: relative;overflow: hidden;">
												<div :style="{width:i.actualAmountPercent+'%'}" style="height: 2px;background-color: #B4A078;border-radius: 2px;position: absolute;left: 0;top: 0;"></div>
											</div>
											<span style="position: absolute;color: #B4A078;font-size: 16px;line-height: 16px;top: -7px;left: 226px;">
												<span>{{i.actualAmountPercent}}</span>
												<span>%</span>
											</span>
										</div>
									</div>
									<ul class="oul-1">
										<li class="oli-1">
											<p style="line-height: 1;font-size: 14px;color: #333;">
												<span>￥</span>
												<span>{{i.actualAmount | ochange}}</span>
											</p>
											<p>已筹金额</p>
										</li>
										<li class="oli-1">
											<p style="line-height: 1;font-size: 14px;color: #333;">
												<span>{{i.actualNum}}</span>
												<span>人</span>
											</p>
											<p>支持人数</p>
										</li>
										<li class="oli-1">
											<p style="line-height: 1;font-size: 14px;color: #333;">
												<span>{{i.endTime | otime}}</span>
											</p>
											<p>剩余时间</p>
										</li>
									</ul>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div style="margin-top: 80px;">
					<div class="header">
						<div class="header-1">
							<div class="header-2">
								<p>正在众筹</p>
							</div>
						</div>
					</div>
					<ul class="oul">
						<li class="oli" v-for="(i,index) in olist2" :key="index">
							<div class="obox">
								<div class="left">
									<img :src="i.picUrl"/>
								</div>
								<div class="right">
									<p style="font-size: 20px;color: #333;letter-spacing: 0;line-height: 30px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;margin-top: 24px;">{{i.name}}</p>
									<p style="font-size: 14px;color: #999;letter-spacing: 0;line-height: 16px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;margin-top: 6px;">{{i.description}}</p>
									<div style="width: 300px;background-color: transparent;padding: 0;">
										<div style="margin-top: 38px;position: relative;">
											<div style="width: 220px;height: 2px;background-color: #F4F4F4;border-radius: 2px;position: relative;overflow: hidden;">
												<div :style="{width:i.actualAmountPercent+'%'}" style="height: 2px;background-color: #B4A078;border-radius: 2px;position: absolute;left: 0;top: 0;"></div>
											</div>
											<span style="position: absolute;color: #B4A078;font-size: 16px;line-height: 16px;top: -7px;left: 226px;">
												<span>{{i.actualAmountPercent}}</span>
												<span>%</span>
											</span>
										</div>
									</div>
									<div style="margin-top: 62px;overflow: hidden;">
										<span style="float: left;font-size: 18px;color: #2BAB52;letter-spacing: 0;line-height: 18px;">众筹成功</span>
										<span style="float: right;margin: 2px 10px 0 0;font-size: 14px;color: #999;letter-spacing: 0;line-height: 14px;">
											<span>已筹金额</span>
											<span style="margin-left: 8px;color: #333;">
												<span>￥</span>
												<span>{{i.actualAmount | ochange}}</span>
											</span>
										</span>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		filters:{
			ochange(value){
				if(value.toString().length<=5){
					return value
				}else{
					var onum = value.toString().length-4
					return value.toString().substr(0,onum) + '万'
				}
			},
			otime(value){
				var date = new Date(value)
				var D = date.getDate() + '天'
				var h = date.getHours() + '时'
				return D+h
			}
		},
		data(){
			return{
				oban:'',
				olist:'',
				olist2:'',
			}
		},
		created(){
				this.$http.get('./da.json').then((response)=>{
//					window.console.log(response.data)
					this.oban = response.data.bannerList[0].pcPicUrl
					this.olist = response.data.workingList
					this.olist2 = response.data.finishList
				})
			}
	}
</script>

<style scoped>
*{
	padding: 0;
	margin: 0;
}
.content{
	width: 100%;
	margin: 0 auto;
}
.banner{
	width: 100%;
}
.banner img{
	width: 100%;
	height: 420px;
}
.nav{
	width: 100%;
}
.navbox{
	width: 1090px;
	margin: 0 auto;
	font-size: 20px;
}
.navbox p{
	display: inline-block;
    vertical-align: middle;
    font-size: 24px;
    color: #B4A078;
    letter-spacing: 0;
    line-height: 32px;
    margin-right: 28px;
}
.navbox ul{
	display: inline-block;
    vertical-align: middle;
    height: 60px;
}
.navbox ul li{
	display: inline-block;
    height: 100%;
    width: 250px;
    text-align: center;
    border-left: 1px solid #eaeaea;
    line-height: 60px;
    box-sizing: border-box;
}
.cont{
	width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    background: #f4f4f4;
}
.contbox{
	width: 1090px;
	margin: 0 auto;
	padding: 40px 0;
}
.header{
	position: relative;
    width: 461px;
    margin: 0 auto 10px;
    height: 28px;
    background: #f4f4f4;
}
.header-1{
	position: absolute;
    top: 50%;
    width: 100%;
    height: 1px;
    background: #ccc;
}
.header-2{
	position: absolute;
    width: 221px;
    height: 30px;
    top: 50%;
    left: 50%;
    margin: -17px 0 0 -110px;
    font-size: 0;
    text-align: center;
    background: #f4f4f4;
}
.header-2 p{
	display: inline-block;
    vertical-align: middle;
    margin-left: 15px;
    font-size: 28px;
    color: #333;
    letter-spacing: 1px;
    line-height: 28px;
}
.oul{
	width: 100%;
    overflow: hidden;
    list-style: none;
}
.oli{
	float: left;
    margin-top: 20px;
    width: 535px;
    height: 220px;
    background: #fff;
    cursor: pointer;
    /*box-sizing: border-box;*/
    margin-right: 10px;
}
.oli:nth-of-type(2n){
	margin-right: 10px;
}
.obox{
	overflow: hidden;
}
.left{
	position: relative;
    float: left;
    width: 220px;
    height: 220px;
    overflow: hidden;
}
.left img{
	transition: transform 1s;
    width: 100%;
}
.right{
	float: left;
    padding-left: 15px;
    width: 300px;
}
.oul-1{
	margin-top: 37px;
    overflow: hidden;
}
.oli-1{
	width: 95px;
    overflow: hidden;
    white-space: nowrap;
    float: left;
    text-align: center;
    border-right: 1px #eee solid;
}
.oli-1:nth-of-type(3){
	border-right: none;
}
.oli-1 p{
	line-height: 2;
    font-size: 14px;
    color: #333;
}
</style>