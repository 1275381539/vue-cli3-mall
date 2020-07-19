<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        
        <tab-control :titles="['流行','新款','精选']"  
                         @tabClick='tabClick' 
                         ref='tabControl1' 
                         class="tab-control"
                         v-show="isTabFixed"/>
        <scroll class="content" 
                ref="scroll" 
                :probe-type='3'
                :pull-up-load='true'
                @scroll="contentScroll"
                @pullingUp='loadMore'>
            <home-swiper :banners='banner' @swiperImageLoad.once='swiperImageLoad'/>
            <recommend-view :recommends = 'recommend'/>
            <feature-view/>
            <tab-control :titles="['流行','新款','精选']"  
                         @tabClick='tabClick' 
                         ref='tabControl2'/>

            <goods-list :goods="showGoods"/>
        </scroll>
        <back-top @click.native="backTop" v-show="isShowBackTop"/>
    </div>
</template>
<script>

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'  
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'


import {getHomeMultidata,getHomeGoods} from 'network/home'
import {debounce} from 'components/common/utils/utils'

export default {
    name:'home',
    components:{
        HomeSwiper,
        RecommendView,
        FeatureView,

        NavBar,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
    },
    data(){
        return {
            banner:[],
            recommend:[],
            goods:{
               'pop':{page:0,list:[]}, 
               'new':{page:0,list:[]},
               'sell':{page:0,list:[]},
            },
            currentType:'pop',
            isShowBackTop:false,
            tabOffsetTop:0,
            isTabFixed:false,
        }
    },
    computed:{
        showGoods(){
            return this.goods[this.currentType].list
        }
    },
    created(){
        // 1.请求banner数据
        this.getHomeMultidata()
        // 2. 请求商品数据
        this.getHomeGoods('pop'),
        this.getHomeGoods('new'),
        this.getHomeGoods('sell')
    },
    mounted(){
        //  1. 监听图片加载事件
        const refresh = debounce(this.$refs.scroll.refresh,500) 
        this.$bus.$on('itemImageLoad',()=>{
            // console.log('------')
            // this.$refs.scroll && this.$refs.scroll.refresh()
            refresh()
        })     

    },
    methods:{
        // 1.请求banner数据
        getHomeMultidata(){
            getHomeMultidata().then(res=>{
                this.banner = res.data.banner.list;
                this.recommend = res.data.recommend.list;
            })
        },
        // 2. 请求商品数据
        getHomeGoods(type){
            const psge = this.goods[type].page + 1
            getHomeGoods(type,psge).then(res=>{
                this.goods[type].list.push(...res.data.list) 
                this.goods[type].page+=1

                // 完成上拉加载更多
                this.$refs.scroll.finishPullUp()
            })
        },
        // 3. 切换tab列表
        tabClick(index){
            switch(index){
                case 0:
                    this.currentType = 'pop'
                    break;
                case 1:
                    this.currentType = 'new'
                    break;
                case 2:
                    this.currentType = 'sell'
                    break;
            }
            this.$refs.tabControl1.currentIndex = index
            this.$refs.tabControl2.currentIndex = index
           
        },
        // 返回顶部
        backTop(){  
           this.$refs.scroll.scrollTo(0,0,1000)
        },
        // 监听滚动的距离
        contentScroll(position){
            // 1. 判断BackTop 是否显示
            this.isShowBackTop =  (-position.y) > 1000

            // 2. tabControl是否吸顶
            this.isTabFixed = (-position.y) > this.tabOffsetTop
        },    
        // 上拉加载
        loadMore(){
            this.getHomeGoods(this.currentType)
        },
        // 监听轮播图图片加载
        swiperImageLoad(){

            this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
        }
    }
}
</script>
<style scoped>
#home {
    position: relative;
    height: 100vh;
  }
.home-nav{
    background: var(--color-text);
    color: #fff;
    /* position: fixed;
    left: 0;
    right:0;
    top: 0;
    z-index: 9; */
}
.content{
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
}
.tab-control{
    position: relative;
    z-index: 9;
}
</style>