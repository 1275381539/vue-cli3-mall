<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" :key="index" class="tab-control-item" @click="tabItemClick(index)">
            <span :class="{active:index === currentIndex}">{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
      return {
          currentIndex:0
      }
    },
    methods:{
      tabItemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick', index)
      }
    }
}
</script>
<style  scoped>
  .tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background: #fff;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    border-bottom: 2px solid var(--color-text);
    color: var(--color-high-text);
  }
</style>