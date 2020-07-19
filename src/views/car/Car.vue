<template>
    <div class="cart">
        <nav-bar class="cart-nav">
            <div slot="center">购物车({{length}})</div>
        </nav-bar>

        <cart-list/>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

import CartList from './childComps/CartList'
export default {
    components:{
        NavBar,
        CartList,
    },
    computed:{
        length(){
            return this.$store.state.acrtList.length
        }
    }
}
</script>
<style scoped>
.cart-nav{
    background: var(--color-text);
    color: #fff;
}
</style>