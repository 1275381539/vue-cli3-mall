<template>
    <tab-bar>
      <tab-bar-item path='/home' activeColor='blue'>
        <img src="~assets/img/tabbar/home.png" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/home-act.png" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tab-bar-item >
      <tab-bar-item path='/list'  activeColor='blue'>
        <img src="~assets/img/tabbar/list.png" alt="" slot="item-icon">
         <img src="~assets/img/tabbar/list-act.png" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/car' activeColor='blue'>
        <img src="~assets/img/tabbar/car.png" alt="" slot="item-icon">
         <img src="~assets/img/tabbar/car-act.png" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/user' activeColor='blue'>
        <img src="~assets/img/tabbar/user.png" alt="" slot="item-icon">
         <img src="~assets/img/tabbar/user-act.png" alt="" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/tabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: 'App',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>
