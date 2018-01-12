<template>
  <div class="app-container">
    <div class="chat-box">
      <div class="chat-dialog">
          <!-- 聊天信息框 -->
        <div id="msg_end" style="height:0px; overflow:hidden"></div>
      </div>
      <div class="input-box">
        <input type="text" v-model="msg" @keyup.enter="sendMsg" placeholder="有什么话想跟我聊聊吗?"><button @click="sendMsg" class="btn">发送</button>
      </div>
    </div>
  </div>
</template>

<script>
  // import * as obj from "xxx" 会将 "xxx" 中所有 export 导出的内容组合成一个对象返回
  import * as apiService from '@/api/api'
  import myImgUrl from '@/assets/image/10.png'
  import robotImgUrl from '@/assets/image/icon.png'
  export default {
    name: 'chat',
    data () {
      return {
        msg: '',
        myImg: myImgUrl,
        robotImg: robotImgUrl
      }
    },
    created () {
    },
    mounted () {
      let heigth = $(window).height() - $('.yd-navbar-item').height()
      // $('.chat-box').height(heigth)
      $('.chat-dialog').height(heigth - 100)
      console.log($('.chat-dialog').height())
    },
    methods: {
      sendMsg () {
        let Question = '<div data-v-f801db62 class="user clearfix">' +
          '<span data-v-f801db62>' + this.msg + '</span>' +
          '<img data-v-f801db62 src=' + this.myImg + ' alt="">' +
          '</div>'
        $(Question).insertBefore($('#msg_end'))
        // $('.chat-dialog').append(Question)
        this.msg = ''
        this.ctrlScroll()
        let params = {
          key: '50c6bee830774ee7af9e057c4c2cb352',
          info: this.msg,
          userid: 'aadahwhfwaoywiauo'
        }
        apiService.getMsg(params).then(res => {
          console.log(res.data)
          let robotRes = res.data.text
          let answer = '<div  data-v-f801db62 class="robot clearfix">' +
            '<img data-v-f801db62 src=' + this.robotImg + ' alt="">' +
            '<span data-v-f801db62 >' + robotRes + '</span>' +
            '</div>'
          $(answer).insertBefore($('#msg_end'))
          // $('.chat-dialog').append(answer)
          this.ctrlScroll()
        }).catch(err => {
          console.log(err)
        })
      },
      ctrlScroll () {
        // bug scrollTop不能大于他的高度
        $('.chat-dialog').animate({ scrollTop: $('#msg_end').offset().top }, {duration: 500, easing: 'swing'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .chat-box{
    .chat-dialog{
      overflow: auto;
      padding-bottom: 60px;
      .robot {
        width: 100%;
        text-align: left;
        padding: 10px;
        img{
          float: left;
          border: 5px solid #fff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 10px;
          overflow: hidden;
          vertical-align: middle;
        }
        span{
          float: left;
          width: 80%;
          padding: 0;
          left: 0;
          word-wrap: break-word;
          padding: 5px;
          line-height: 30px;
          font-size: 18px;
          background-color: rgb(240,255,255);
        }
        div{
          display: inline-block;
          width: 40px;
          height: 40px;
        }
      }
      .user {
        width: 100%;
        text-align: right;
        padding: 20px;
        img{
          float: left;
          border: 5px solid #fff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-left: 10px;
          overflow: hidden;
          vertical-align: middle;
        }
        span{
          float: left;
          width: 80%;
          padding: 0;
          left: 0;
          word-wrap: break-word;
          padding: 5px;
          line-height: 30px;
          font-size: 18px;
          background-color: rgb(240,255,255);
        }
      }
    }
    .input-box{
      padding:5px;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 8%;
      background-color: #fff;
      input{
        float: left;
        padding-left: 10px;
        border: 1px #ccc solid;
        border-radius: 5px;
        width: 85%;
        height: 100%;
      }
      button{
        float: left;
        width: 14%;
        margin-left: 3px;
        color: #333;
        height: 100%;
        border-radius: 5px;
        background-color: #FED837;
        border: none;
      }
    }
  }
</style>
