<template>
	<!-- 推荐店铺 -->
	<view class="shop">
		<view class="shop-item">
			<!-- 消除底部的空白区域 -->
			<view class="shop-big">
				<image class="shop-big" src="../../static/img/shop.jpg" mode=""></image>
			</view>
			
			<scroll-view class="scroll-content" scroll-x="true" >
				<view class="scroll-item">
					<Commodity 
					 :dataList="shopList" 
					 itemW="200rpx" 
					 bigH="200rpx"
					 wrap="nowrap"
					 nameSize="20rpx"
					></Commodity>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Commodity from '../common/Commodity.vue'
	export default{
		data(){
			return{
				shopList:[
					{
						id:1,
						imgUrl:'../../static/img/shop1.jpg',
						name:'大衣绒毛大款2022年新款，不买血亏！！！1111111111111',
						pprice:'299',
						oprice:'599',
						discount:'5.2'
					},
					{
						id:2,
						imgUrl:'../../static/img/shop2.jpg',
						name:'大衣绒毛大款2022年新款，不买血亏！！！1111111111111',
						pprice:'299',
						oprice:'599',
						discount:'5.2'
					},
					{
						id:3,
						imgUrl:'../../static/img/shop3.jpg',
						name:'大衣绒毛大款2022年新款，不买血亏！！！1111111111111',
						pprice:'299',
						oprice:'599',
						discount:'5.2'
					},
					{
						id:4,
						imgUrl:'../../static/img/shop4.jpg',
						name:'大衣绒毛大款2022年新款，不买血亏！！！1111111111111',
						pprice:'299',
						oprice:'599',
						discount:'5.2'
					}
				]
			}
		},
		components:{
			Commodity
		},
		
	}
</script>

<style scoped>
	.shop-big{
		width: 100%;
		height: 350rpx;
	}
	.scroll-content{
		width: 100%;
		/* 不允许换行 */
		white-space: nowrap;
	}
	.scroll-item{
		display: inline-block;
	}
</style>