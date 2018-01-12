<template>
  <div class="app-container">
    <notice notice1="与机器人畅聊植物大战僵尸!" notice2="正在上映电影 早知道" notice3="预知天气如何 请看下回分解"></notice>
    <div class="grid">
      <ul>
        <li v-for="item in grids">
          <router-link class="link" :to="{path: item.link}">
            <img :src="item.images">
            <p>{{item.msg}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import notice from '@/components/notice'
  export default {
    name: 'home',
    components: {notice},
    data () {
      return {
        grids: [
          {images: require('@/assets/image/1.png'), msg: '聊天机器人', link: '/chat'},
          {images: require('@/assets/image/2.png'), msg: '百度地图', link: '/map'},
          {images: require('@/assets/image/3.png'), msg: '敬请期待', link: '/'},
          {images: require('@/assets/image/4.png'), msg: '敬请期待', link: '/'},
          {images: require('@/assets/image/5.png'), msg: '敬请期待', link: '/'},
          {images: require('@/assets/image/6.png'), msg: '敬请期待', link: '/'},
          {images: require('@/assets/image/7.png'), msg: '敬请期待', link: '/'},
          {images: require('@/assets/image/8.png'), msg: '敬请期待', link: '/'},
          {images: require('@/assets/image/9.png'), msg: '敬请期待', link: '/'}
        ]
      }
    },
    created () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .yd-rollnotice{
    padding-left: 30px;
    background-color: rgba(128,128,128,0.1);
  }
  .grid{
    height: 390px;
    background-color: transparent;
    ul{
      padding-left: 0;
      text-align: center;
      li{
        float: left;
        border-left: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        width: 33.2222%;
        height: 130px;
        .link{
          display: block;
          img{
            margin-top: 24px;
            vertical-align: middle;
            width: 60px;
          }
          p{
            height: 45px;
            line-height: 45px;
          }
        }
      }
    }
  }
</style>
