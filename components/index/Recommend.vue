<template>
	<!-- 推荐 -->
	<view class="recommend bg-color">
		<view class="recommend-item">
			<image class="item-big" src="../../static/img/Children.jpg" mode=""></image>
			<view class="item-samll">
				<image class="item-img" src="../../static/img/Children1.jpg" mode=""></image>
				<image class="item-img" src="../../static/img/Children2.jpg" mode=""></image>
				<image class="item-img" src="../../static/img/Children3.jpg" mode=""></image>
			</view> 
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.recommend{
		padding: 20rpx;
	}
	.recommend-item{
		display: flex;
		flex-direction: column;
		border-radius: 20rpx;
		border: 2rpx solid #cccccc;
		overflow: hidden;
		margin: 20rpx 0;
	}
	.item-big{
		width: 100%;
		height: 300rpx;
	}
	.item-samll{
		width: 100%;
		height: 240rpx;
	}
	.item-img{
		width: 33.333%;
		height: 240rpx;
	}
	
</style>