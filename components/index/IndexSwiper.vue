<template>
	<!-- 轮播图 -->
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		<swiper-item>
			<view class="swiper-item">
				<image class="swiper-img" src="../../static/img/swiper1.jpg" mode=""></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image class="swiper-img" src="../../static/img/swiper2.jpg" mode=""></image>
			</view>
		</swiper-item><swiper-item>
			<view class="swiper-item">
				<image class="swiper-img" src="../../static/img/swiper3.jpg" mode=""></image>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		name:"IndexSwiper",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	/* 不加app里面会出问题 */
	swiper{
		width: 100%;
		height: 400rpx;
	}
	/* swiper本身有150px的默认高度 */
	.swiper-img{
		width: 100%;
		height: 400rpx;
	}
</style>