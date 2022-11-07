<template>
	<!-- 热销商品 -->
	<view class="hot">
		<Commodity :dataList="hotList" itemW="230rpx" bigH="220rpx"></Commodity>
	</view>
</template>

<script>
	import Commodity from '../common/Commodity.vue'
	export default{
		data(){
			return{
				hotList:[
					{
						id:1,
						imgUrl:'../../static/img/hot1.jpg',
						name:'大衣绒毛大款2022年新款，不买血亏！！！1111111111111',
						pprice:'299',
						oprice:'599',
						discount:'5.2'
					},
					{
						id:2,
						imgUrl:'../../static/img/hot2.jpg',
						name:'大衣绒毛大款2022年新款，不买血亏！！！1111111111111',
						pprice:'299',
						oprice:'599',
						discount:'5.2'
					},
					{
						id:3,
						imgUrl:'../../static/img/hot3.jpg',
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
		}
	}
</script>

<style>
</style>