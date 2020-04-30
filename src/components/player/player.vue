<style scoped lang='scss'>
.player{
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  .player-pages{
    height: 10px;
    padding: 0px 5px;
    position: absolute;
    z-index: 3;
    bottom: 3px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0,0,0,0.5);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    .player-pages-item{
      width: 5px;
      height: 5px;
      background: #fff;
      border-radius: 50%;
      margin: 0px 2px;
      &.active{
        background: #de698c;
      }
    }
  }
  .player-swiper{
    width: 100%;
    height: 100%;
    /deep/ .swiper-slide{
      width: 100%;
      height: 100%;
      img{
         width: 100%;
         height: 100%;
      }
    }
  }
}
</style>

<template>
<div class='player'>
  <div class="player-pages">
    <div :class="{active : nowPage===index}" class="player-pages-item" v-for="(item,index) in advList" :key="index"></div>
  </div>
  <swiper @slideChangeTransitionStart="changePlayer" class="player-swiper" ref='imgSwiper' :options='imgSwiper'>
    <swiper-slide v-for="(item,index) in advList" :key="index">
      <img :src="item" alt="">
    </swiper-slide>
  </swiper>
</div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
  data(){
    return{
      nowPage : 0,
      imgSwiper:{
        speed : 300,
        loop : true,
        autoplay:true
      },
      advList : []
    }
  },
  props:{
    playerList : {
      type : Array,
      default : new Array()
    }
  },
  components:{
    swiper,
    swiperSlide
  },
  created(){
    this.advList = this.playerList
  },
  methods : {
    changePlayer(){
      let swiperDom = this.$refs.imgSwiper;
      if(swiperDom.swiper){
        let realIndex = swiperDom.swiper.realIndex;
        this.nowPage = realIndex;
      }
    }
  }
};
</script>