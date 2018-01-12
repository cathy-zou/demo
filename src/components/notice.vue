<template>
  <yd-rollnotice :autoplay="speed">
    <yd-rollnotice-item><span :style="noticeStyle"> 荐 </span>{{notice1}}</yd-rollnotice-item>
    <yd-rollnotice-item><span :style="noticeStyle"> 荐 </span>{{notice2}}</yd-rollnotice-item>
    <yd-rollnotice-item><span :style="noticeStyle"> 荐 </span>{{notice3}}</yd-rollnotice-item>
  </yd-rollnotice>
</template>

<script>
  export default {
    name: 'notice',
    props: {
      'notice1': {
        type: String
      },
      'notice2': {
        type: String
      },
      'notice3': {
        type: String
      },
      'speed': {
        default: '2000',
        type: String
      },
      'noticeStyle': {
        default: 'color:#F00;margin-right:5px;',
        type: String
      }
    },
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .yd-rollnotice{
    padding-left: 30px;
    background-color: rgba(128,128,128,0.1);
  }
</style>
