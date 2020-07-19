<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
        
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            scroll:null,
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            // probeType:2, // 实时监听滚动  默认值是 0 表示不监听；   1 也表示不监听；  2 表示实时监听，手机滑动时监听，但是手指离开以后的惯性也不监听；    3  表示只是时滚动就监听
            probeType:this.probeType, 
            pullUpLoad:this.pullUpLoad, // 监听是否滚动到底部
            click:true, // better-scroll 默认会阻止点击事件（表单事件不会阻止 比如（button），其他事件会，比如div的click事件）
        })
        // 实时监听滚动事件
        this.scroll.on('scroll',position=>{
           this.$emit('scroll',position)
        })
        // 监听滚动到底部
        if(this.pullUpLoad){
            this.scroll.on('pullingUp',()=>{
                this.$emit('pullingUp')
                // console.log('上拉加载更多')
            })
        }
    },
    methods:{
        scrollTo(x,y,time=300){
            this.scroll && this.scroll.scrollTo(x,y,time)

        },
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp()
        },
        refresh(){
            // console.log('-----')
            this.scroll && this.scroll.refresh()
        }
    }

}
</script>
<style scoped>


</style>