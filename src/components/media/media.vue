<style scoped lang='scss'>
.media {
  width: 100%;
  min-height: 100%; // 可有可无
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  flex-wrap: wrap;
  box-sizing: border-box;
  .media-item {
    width: 170px;
    margin-bottom: 20px;
    .media-item-img {
      width: 100%;
      height: 105px;
      position: relative;
      border-radius: 5px;
      overflow: hidden;
      background: #f7f7f7;
      img {
        width: 100%;
        height: 100%;
      }
      .media-item-more {
        width: 100%;
        position: absolute;
        bottom: 5px;
        left: 0;
        z-index: 5;
        display: flex;
        padding: 0px 15px;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
        .media-item-more-item {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 10px;
          color: #fff;
          margin-right: 20px;
          width: auto;
          i {
            display: inline-block;
            width: 16px;
            height: 16px;
            background-size: 100%;
            background-repeat: no-repeat;
            background-image: url("https://s1.hdslb.com/bfs/static/mult/images/TV-Play.png");
            margin-right: 10px;
          }
        }
      }
    }
    .media-item-text {
      margin-top: 10px;
      width: 170px;
      height: 36px;
      font-size: 13px;
      color: #212121;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
}
</style>

<template>
  <div class="media">
    <div @click="toPage('detail')" class="media-item" v-for="(item,index) in list" :key="index">
      <div class="media-item-img">
        <img src="http://i0.hdslb.com/bfs/archive/ffa59406d17b474f02730fbce48ba78378cb827d.jpg@320w_200h.webp" alt />
        <div class="media-item-more">
          <div class="media-item-more-item">
            <i></i>
            100W
          </div>
          <div class="media-item-more-item">
            <i></i>
            100W
          </div>
        </div>
      </div>
      <div class="media-item-text">骁话一下：给《外国人永久居留管理条例》提意见</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list : [1,2,3,4,5,6,7,8,9,10],
    }
  },
  created(){
   
  },
  methods:{
    getMoreData(type=true){ // type为true加到尾部，type为false加到头部
      if(type){
        this.list = this.list.concat([1,2,3,4,5])
      }else{
       this.list = [1,2,3,4,5].concat(this.list)
      }
      this.$toast('刷新成功')
    }
  }
};
</script>