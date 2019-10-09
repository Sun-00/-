<template>
  <div class="content">
    <headers :num="2"></headers>
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