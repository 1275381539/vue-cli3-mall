<template>
    <div class="goods">
        <goods-list-item v-for="(item,index) in goods" :goods-item='item' :key="index"/>
    </div>
</template>
<script>
import GoodsListItem from './GoodsListItem'
export default {
    components:{
        GoodsListItem
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
    .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: var(--color-background);
    padding: 2px;
  }
</style>