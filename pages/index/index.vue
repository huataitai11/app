<template>
	<view class="index">
		
		<scroll-view 
			scroll-x="true" 
			class="scroll-content" 
			:scroll-into-view="scrollIntoIndex" 
		>
			<view 
				:id="'top'+index"
				class="scroll-item" 
				v-for="(item,index) in topBar" 
				:key="item.name"
				@tap="changeTap(index)"
			>
				<text :class="topBarIndex === index ? 'filter-active-color' : 'f-color'">
					{{item.name}}
				</text>
			</view>
		</scroll-view>
		
		<swiper 
			@change="onChangeTap" 
			:current="topBarIndex"
			:style="'height:'+clentHeight+'px;'"
		>
			<swiper-item
				v-for="(item,index) in topBar"
				:key="item.name"
			>
				<view class="home-data">
					<!-- 推荐模板 -->
					<IndexSwiper></IndexSwiper>
					<Recommend></Recommend>
					<Card cardTitle='猜你喜欢'></Card>
					<CommodityList></CommodityList>
					
					<!-- 其他模板：运动户外，美妆... -->
					<!-- <Banner></Banner>
					<Icons></Icons>
					<Card cardTitle="热销爆品"></Card>
					<Hot></Hot>
					<Card cardTitle="推荐店铺"></Card>
					<Shop></Shop>
					<Card cardTitle="为您推荐"></Card> -->
					
				</view>
				
			</swiper-item>
		</swiper>
		
		
		
		
		
		
	</view>
</template>

<script>
	import IndexSwiper from "../../components/index/IndexSwiper.vue"
	import Recommend from "../../components/index/Recommend.vue"
	import Card from "../../components/common/Card.vue"
	import CommodityList from "../../components/common/CommodityList.vue"
	import Banner from '../../components/index/Banner.vue'
	import Icons from '../../components/index/Icons.vue'
	import Hot from '../../components/index/Hot.vue'
	import Shop from '../../components/index/Shop.vue'
	export default {
		data() {
			return {
				// 选中的索引
				topBarIndex:0,
				// 跟随滚动的索引id
				scrollIntoIndex:'',
				// 内容块的高度
				clentHeight:0,
				// 顶栏数据
				topBar:[
					{name:'推荐'},
					{name:'运动户外'},
					{name:'服饰内衣'},
					{name:'鞋靴箱包'},
					{name:'美妆个护'},
					{name:'家居数码'},
					{name:'食品母婴'},
				]
			}
		},
		onLoad() {

		},
		onReady() {
			let view=uni.createSelectorQuery().select('.home-data')
			console.log(view);
			view.boundingClientRect(data => {
			  this.clentHeight=data.height
			}).exec();
		},
		methods: {
			// 切换tap栏
			changeTap(index){
				if(this.topBarIndex === index){
					return
				}
				this.topBarIndex = index
				this.scrollIntoIndex = 'top'+index
			},
			onChangeTap(e){
				this.changeTap(e.detail.current)
			}
		},
		components:{
			IndexSwiper,
			Recommend,
			Card,
			CommodityList,
			Banner,
			Icons,
			Hot,
			Shop
		}
	}
</script>

<style scoped>
	.scroll-content{
		width: 100%;
		height: 80rpx;
		/* 不允许换行 */
		white-space: nowrap;
	}
	.scroll-item{
		display: inline-block;
		padding: 10rpx 30rpx;
		font-size: 32rpx;
	}
	.filter-active-color{
		padding: 10rpx 0;
		border-bottom: 6rpx solid #49bdfb;
	}
</style>
