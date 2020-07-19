<template>
    <div id="tabbar">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
#tabbar{
  display: flex;
  background: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
  z-index: 9;
  
}

</style>