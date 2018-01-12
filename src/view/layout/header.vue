<template>
  <div class="header">
    <yd-navbar title="首页">
      <router-link :to="{path: '/home'}" slot="left">
        <yd-icon name="home-outline" size=".5rem" color="#FF685D"></yd-icon>
      </router-link>
    </yd-navbar>
  </div>
</template>

<script>
export default {
  name: 'headers',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.header{
  margin: 0;
  .yd-navbar{
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px!important;
    background: #fff;
    font-size: 18px;
    box-shadow: 2px 1px 3px #ccc;
  }
}
</style>
