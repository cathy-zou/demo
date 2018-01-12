<template>
  <div class="layout">
    <div class="header">
      <headers></headers>
    </div>
    <div class="content">
      <contents></contents>
    </div>
  </div>
</template>

<script>
  import { headers, contents } from '@/view/layout'
  export default {
    name: 'layout',
    components: {
      headers,
      contents
    },
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  body{
    height: auto;
  }
</style>
