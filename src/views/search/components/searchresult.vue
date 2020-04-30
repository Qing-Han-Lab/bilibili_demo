<style lang="scss" scoped>
.result {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #f4f4f4;
  .result-top {
    width: 100%;
    height: 44px;
    background: #fff;
    box-shadow: 0px 2px 2px solid #f4f4f4;
    padding: 0px 12px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .result-top-item {
      height: 30px;
      border-bottom: 2px solid #fff;
      font-size: 13px;
      color: #757575;
      line-height: 30px;
      &.active {
        border-bottom: 2px solid #fb7299;
        color: #fb7299;
      }
    }
  }
  .result-down {
    flex: 1;
    width: 100%;
    overflow: hidden;
    .result-down-swiper {
      width: 100%;
      height: 100%;
      overflow: hidden;
      /deep/ .swiper-slide {
        width: 100%;
        height: 100%;
        .result-down-swiper-content {
          width: 100%;
          height: 100%;
          overflow: auto;
        }
      }
    }
  }
}
</style>
<template>
  <div class="result">
    <div class="result-top">
      <div
        @click="checkMenus(index)"
        :class="{active : item.active}"
        class="result-top-item"
        v-for="(item,index) in menus"
        :key="index"
      >{{item.title}}</div>
    </div>
    <div class="result-down">
      <swiper
        @slideChangeTransitionStart="swiperChange"
        class="result-down-swiper"
        ref="swiper"
        :options="swiperOption"
      >
        <swiper-slide v-for="(item,index) in menus" :key="index">
          <div
            v-if="item.isInit"
            class="result-down-swiper-content"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
          >
            <MediaResult :ref="`media${index}`" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import MediaResult from "./mediaresult";
export default {
  data() {
    return {
      nowIndex : 0,
      menus: [
        {
          title: "默认排序",
          name: "default",
          active: true,
          isInit : true
        },
        {
          title: "播放多",
          name: "play",
          active: false,
          isInit : false
        },
        {
          title: "新发布",
          name: "send",
          active: false,
          isInit : false
        },
        {
          title: "弹幕多",
          name: "text",
          active: false,
          isInit : false
        }
      ],
      swiperOption: {
        speed: 300
      },
      loading : false
    };
  },
  components: {
    swiper,
    swiperSlide,
    MediaResult
  },
  methods: {
    checkMenus(index) {
      this.nowIndex = index;
      this.menus = this.menus.map((item, num) => {
        item.active = false;
        if (num === index) {
          item.active = true;
          if(!item.isInit){
            item.isInit = true
          }
        }
        return item;
      });
      let swiperDom = this.$refs.swiper;
      if (swiperDom.swiper) {
        swiperDom.swiper.slideTo(index, 300, false);
      }
    },
    swiperChange() {
      let swiperDom = this.$refs.swiper;
      if (swiperDom.swiper) {
        this.checkMenus(swiperDom.swiper.realIndex);
      }
    },
    loadMore(){
      let component = this.$refs[`media${this.nowIndex}`][0];
      if(component){
        component.getData();
      }
    }
  }
};
</script>