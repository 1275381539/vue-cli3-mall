<template>
  <div>
    <scroll class="content">
      <div>
        <cart-list-item v-for="item in cartList" :key="item.iid" :item-info='item'></cart-list-item>
      </div>
    </scroll>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import CartListItem from './CartListItem'
  import BottomBar from './BottomBar'

	export default {
		name: "CartList",
    components: {
      Scroll, 
      CartListItem,
      BottomBar,
    },
    computed:{
      cartList(){
        return this.$store.state.acrtList
      }
    }
	}
</script>

<style scoped>
.content{
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
</style>
