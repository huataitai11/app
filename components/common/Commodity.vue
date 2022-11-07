<template>
	<view class="commodity" :style="'flex-wrap:'+wrap+ ';'">
		<!-- 单个商品 -->
		<view
			 class="commodity-item"
			 v-for="(item,index) in dataList"
			 :key="item.id"
			 :style="'width:'+itemW+';'"
		 >
			<image
			 class="commodity-img"
			 :src="item.imgUrl"
			 :style="'height:'+bigH+';'"
			  ></image>
			<view class="commodity-content">
				<text class="commodity-name" :style="'font-size:'+nameSize+ ';'">
					{{item.name}}
				</text>
				<view class="">
					<text class="pprice">￥{{item.pprice}}</text>
					<text class="oprice">￥{{item.oprice}}</text>
				</view>
				<text class="discount">{{item.discount}}折</text>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default{
		props:{
			dataList:Array,
			// 宽度
			itemW:{
				type:String,
				default:'355rpx'
			},
			// 高度
			bigH:{
				type:String,
				default:'355rpx'
			},
			// 是否换行
			wrap:{
				type:String,
				default:'wrap'
			},
			// 商品文字大小
			nameSize:{
				type:String,
				default:'26rpx'
			},
			
		}
	}
</script>

<style scoped>
	.commodity{
		display: flex;
		
	}
	.commodity-item{
		padding-bottom: 20rpx;
		margin: 10rpx 10rpx;
	}
	.commodity-img{
		width: 100%;
	}
	.commodity-content{
		text-align: center;
	}
	.commodity-name{
		/* 查一下 */
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		color: #333333;
		word-break: break-all;
		padding: 6rpx 20rpx;
		
	}
	.pprice{
		text-decoration: line-through;
		font-size: 24rpx;
		color: #999;
	}
	.discount{
		border-radius: 4rpx;
		border: 1rpx solid #ff3333;
		padding: 2rpx 10rpx;
		font-size: 20rpx;
		color: #ff3333;
	}
</style>