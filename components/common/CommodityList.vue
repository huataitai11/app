<template>
	<view class="commodity_list">
		<!-- 商品列表组件 -->
		<Commodity :dataList="commodityList"></Commodity>
	</view>
</template>

<script>
	import Commodity from './Commodity.vue'
	export default{
		data(){
			return{
				commodityList:[
					{
						id:1,
						imgUrl:'../../static/img/commodity1.jpg',
						name:'大衣绒毛大款2022年新款，不买血亏！！！1111111111111',
						pprice:'299',
						oprice:'599',
						discount:'5.2'
					},
					{
						id:2,
						imgUrl:'../../static/img/commodity2.jpg',
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