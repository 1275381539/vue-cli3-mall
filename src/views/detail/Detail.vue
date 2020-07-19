<template>
    <div id="detail">
        <detail-nav-bar @titleClick='titleClick' ref="nav"/>
        <scroll class="content" ref='scroll' @scroll='contentScroll' :probeType='3'>
            <detail-swiper :top-images="topImages"/>
                <div>
                    <detail-base-info :goods="goods"></detail-base-info>
                    <detail-shop-info :shop="shop"></detail-shop-info>
                    <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
                    <detail-param-info ref="param" :param-info="paramInfo"></detail-param-info>
                    <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
                    <detail-recommend-info ref="recommend" :recommend-list="recommendList"></detail-recommend-info>
                </div>
        </scroll>
        <detail-bottom-bar @addToCart='addToCart'/>
        <back-top @click.native="backTop" v-show="isShowBackTop"/>
    </div>
</template>
<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailRecommendInfo from './childComps/DetailRecommendInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
import {debounce} from 'components/common/utils/utils'

export default {
    name:'Detail',
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        DetailRecommendInfo,
        DetailBottomBar,

        Scroll,
        BackTop,
    },
    data(){
        return {
            iid:null,
            topImages:[],
            goods:{},
            shop: {},
            detailInfo: {},
            paramInfo: {},
            commentInfo: {},
            recommendList: [],
            themeTops: [],
            currentIndex:0,
            isShowBackTop:false,
        }
    },
    created(){
        // 1. 保存商品id
        this.iid = this.$route.params.id

        // 2. 根据商品id请求数据
        getDetail(this.iid).then(res=>{
            const data = res.result
            // 1. 获取轮播图数据
            this.topImages = data.itemInfo.topImages

            // 2. 获取商品信息
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

            // 3.获取店铺信息
            this.shop = new Shop(data.shopInfo);

            // 4.获取商品信息
            this.detailInfo = data.detailInfo

            // 5.保存参数信息
            this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

            // 6.保存评论信息
            if (data.rate.list) {
                this.commentInfo = data.rate.list[0];
            }
            this.$nextTick(()=>{
                // 这里dom已经渲染完成了，但是图片依然有可能没有加载出来
                //
                this.themeTops=[]
                this.themeTops.push(0);
                this.themeTops.push(this.$refs.param.$el.offsetTop);
                this.themeTops.push(this.$refs.comment.$el.offsetTop);
                this.themeTops.push(this.$refs.recommend.$el.offsetTop);
                this.themeTops.push(Number.MAX_VALUE)
                // console.log(this.themeTops)
            })
            
        })
        // 获取推荐数据
        getRecommend().then((res, error) => {
            // this.recommendList = res.data.list   
        })
    },
    methods:{
        titleClick(index){
            // console.log(this.$refs.scroll)
            this.$refs.scroll.scrollTo(0,(-this.themeTops[index]+44),500)
        },
        contentScroll(position){
            const positionY = -position.y
            this.isShowBackTop =  (-position.y) > 1000
            const length = this.themeTops.length;
            for(var i=0;i<length-1;i++){
                if(positionY >= this.themeTops[i] && positionY <= this.themeTops[i+1]){
                    this.$refs.nav.currentIndex = i
                }
            }
        },
        addToCart(){
            // 1.创建对象
            const obj = {}
            // 2.对象信息
            obj.iid = this.iid;
            obj.imgURL = this.topImages[0]
            obj.title = this.goods.title
            obj.desc = this.goods.desc;
            obj.newPrice = this.goods.realPrice;
            // 3.添加到Store中
            // this.$store.commit('addCart', obj)把数据通过mutations添加到state
            this.$store.dispatch('addCart', obj).then(res =>{
                console.log(res)
            }) // 把数据通过actions添加到state
            // 为什么要用actions添加 而不用mutations
            // 1. mutations里面一般只是改变state的状态，但是这里的数据还需要一些判断操作，所以放在actions
            // 2. actions除了做异步操作外，一些复杂的逻辑也要放在这个里面

        },
        // 返回顶部
        backTop(){  
           this.$refs.scroll.scrollTo(0,0,1000)
        },
    }
}
</script>
<style  scoped>
#detail{
    position: relative;
    z-index: 10;
    background: #fff;
}
.content{
    height: calc(100vh - 44px);
}
</style>