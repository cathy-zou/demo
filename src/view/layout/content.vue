<template>
  <section class="content">
    <transition name="fade" mode="out-in">
      <router-view :key="key"></router-view>
    </transition>
  </section>
</template>

<script>
  export default {
    name: 'contents',
    computed: {
      key () {
        return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content{
    position: absolute;
    box-sizing: border-box;
    background-color: rgb(255,250,250);
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    padding-top: 44px;
  }
</style>
