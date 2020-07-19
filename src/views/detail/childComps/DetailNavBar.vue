<template>
    <div id="detail">
        <nav-bar class="home-nav">
            <div slot="left" class="back" @click="back"> &lt; </div>
            <div slot="center" class="title">
                <div v-for="(item,index) in titles" 
                     :key="index" 
                     class="title-item"
                     @click="itemClick(index)"
                     :class="{active:index == currentIndex}">
                {{item}}
                </div>
            </div>
        </nav-bar>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
    components:{
        NavBar,
    },
    props:{
    },
    data(){
        return {
           titles:['商品','参数','评论','推荐'],
           currentIndex:0,
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index
            this.$emit('titleClick',index)
        },
        back(){
            this.$router.back()
        }
    }
}
</script>
<style  scoped>
.title{
    display: flex
}
.title-item{
    flex: 1;
    font-size: 13px;
}
.active{
    color: var(--color-high-text)
}
.back{
   font-size: 30px; 
}
</style>