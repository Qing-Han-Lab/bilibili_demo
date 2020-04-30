<style scoped lang='scss'>
.home {
  width: 100%;
  height: 100%;
  padding: 0px 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  .home-shadow {
    position: absolute;
    top: 44px;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
    overflow: hidden;
    @keyframes show{
      0%{
        transform: translateY(-100%);
      }100%{
        transform: translateY(0%);
      }
    }
    .home-shadow-content {
      animation: show 0.3s 1 forwards ease-in-out;
      width: 100%;
      background: #fff;
      display: flex;
      justify-content: flex-start;
      align-content: flex-start;
      flex-wrap: wrap;
      .home-shadow-content-item {
        width: 20%;
        height: 44px;
        padding: 6px 14px;
        box-sizing: border-box;
        span {
          display: inline-block;
          height: 100%;
          color: #757575;
          font-size: 14px;
          border-bottom: 1px solid #fff;
          box-sizing: border-box;
          text-align: center;
          line-height: 32px;
          &.active {
            color: #fb7299;
            border-bottom: 1px solid #fb7299;
          }
        }
      }
    }
  }
  .home-nav {
    width: 100%;
    height: 44px;
    padding: 0px 10px;
    box-sizing: border-box;
    position: relative;
    .home-nav-addmore {
      position: fixed;
      width: 30px;
      height: 30px;
      background-color: #fff;
      overflow: hidden;
      right: 12px;
      top: 51px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
      .home-nav-addmore-addbtn {
        width: 10px;
        height: 10px;
        border-top: 1px solid #333;
        border-left: 1px solid #333;
        position: relative;
        top: 3px;
        transform: rotate(45deg);
        transition: transform 0.5s;
        &.open {
          top: -4px;
          transform: rotate(225deg);
        }
      }
    }
    .home-nav-swiper {
      width: 100%;
      height: 100%;
      /deep/ .swiper-slide {
        width: auto;
        height: 100%;
        &:last-child .home-nav-swiper-item {
          margin-right: 0px;
        }
        .home-nav-swiper-item {
          height: 100%;
          box-sizing: border-box;
          border-bottom: 3px solid #fff;
          color: #757575;
          font-size: 16px;
          letter-spacing: 1px;
          line-height: 44px;
          margin-right: 30px;
          &.active {
            border-bottom: 3px solid #fb7299;
            color: #fb7299;
            font-weight: bold;
            font-size: 15px;
          }
        }
      }
    }
  }
  .home-content {
    flex: 1;
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .home-player {
      width: 100%;
      height: 110px;
      margin-bottom: 10px;
      margin-top: 10px;
    }
    .home-mediabox {
      width: 100%;
      flex: 1;
      overflow: hidden;
      .home-mediabox-swiper {
        width: 100%;
        height: 100%;
        /deep/ .swiper-slide {
          width: 100%;
          height: 100%;
          overflow: hidden;
          .home-mediabox-swiper-content {
            width: 100%;
            height: 100%;
            overflow: auto;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="home">
    <div v-if="showMoreNav" class="home-shadow">
      <div class="home-shadow-content">
        <div @click="choseNav(index)" class="home-shadow-content-item" v-for="(item,index) in navList" :key="index">
          <span :class="{active : item.active}">{{item.title}}</span>
        </div>
      </div>
    </div>
    <div class="home-nav">
      <div class="home-nav-addmore" @click="showMoreNav=!showMoreNav">
        <div class="home-nav-addmore-addbtn" :class="{open : showMoreNav}"></div>
      </div>
      <swiper class="home-nav-swiper" ref="navSwiper" :options="navSwiper">
        <swiper-slide v-for="(item,index) in navList" :key="index">
          <div
            @click="checkNav(index)"
            class="home-nav-swiper-item"
            :class="{active:item.active}"
          >{{item.title}}</div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="home-content">
      <div class="home-player">
        <Player :playerList="playerList" />
      </div>
      <div class="home-mediabox">
        <swiper
          @slideChangeTransitionStart="touchChangeSwiper"
          class="home-mediabox-swiper"
          ref="mediaSwiper"
          :options="mediaSwiper"
        >
          <swiper-slide v-for="(item,index) in navList" :key="index">
            <div
              v-infinite-scroll="loadMore"
              infinite-scroll-disabled="loading"
              infinite-scroll-distance="10"
              class="home-mediabox-swiper-content"
              @scroll="scrollEvent($event)"
            >
              <Media :ref="`media${index}`" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Player from "../../../../components/player/player";
import Media from "../../../../components/media/media";
export default {
  data () {
    return {
      loading: false,
      canAddMore: true, // 是否可以进行下拉刷新
      showMoreNav: false, // 是否展示全部的nav
      navSwiper: {
        speed: 300,
        slidesPerView: "auto",
        freeMode: true,
        freeModeSticky: true,
        freeModeMomentumRatio: 1.5
      },
      navList: [
        {
          title: "首页",
          active: true
        },
        {
          title: "动画",
          active: false
        },
        {
          title: "番剧",
          active: false
        },
        {
          title: "音乐",
          active: false
        },
        {
          title: "国创",
          active: false
        },
        {
          title: "舞蹈",
          active: false
        },
        {
          title: "科技",
          active: false
        },
        {
          title: "数码",
          active: false
        },
        {
          title: "游戏",
          active: false
        },
        {
          title: "生活",
          active: false
        }
      ],
      playerList: [
        "https://i0.hdslb.com/bfs/archive/f7d5b77dd5280b342e897e0cac4b041da0b4f61e.jpg@480w_300h.webp",
        "https:////i0.hdslb.com/bfs/archive/bc453bf1dc167e4b5e5e4b774e52627a1e4a0df8.jpg@480w_300h.webp",
        "https:////i0.hdslb.com/bfs/archive/6baa205f1b95f9c374322cf830a622669852631f.jpg@480w_300h.webp"
      ],
      mediaSwiper: {
        speed: 300
      }
    };
  },
  components: {
    Player,
    swiper,
    swiperSlide,
    Media
  },
  created () {
    this.setPullToRefresh()
  },
  methods: {
    setPullToRefresh () {
      let self = this;
      console.log(this.canAddMore)
      if (window.plus) {
        const wv = window.plus.webview.currentWebview();
        wv.setPullToRefresh({
          support: true,
          color: '#FB7299',
          style: 'circle'
        }, () => {
          let index = -1;
          for (let i = 0; i < self.navList.length; i++) {
            if (self.navList[i].active) {
              index = i;
              break;
            }
          }
          let component = self.$refs[`media${index}`][0];
          if (component) {
            component.getMoreData(false);
            wv.endPullToRefresh()
          }
        })
      }
    },
    endPullToRefresh () {
      if (window.plus) {
        let wv = window.plus.webview.currentWebview();
        wv.setPullToRefresh({
          support: false
        })
      }
    },
    choseNav(index){
       this.checkNav(index);
       this.showMoreNav = false
    },
    loadMore () {
      let index = -1;
      for (let i = 0; i < this.navList.length; i++) {
        if (this.navList[i].active) {
          index = i;
          break;
        }
      }
      let component = this.$refs[`media${index}`][0];
      if (component) {
        component.getMoreData();
      }
    },
    scrollEvent (e) {
      if (e.target.scrollTop <= 10) { // 可以进行下拉刷新
        if (!this.canAddMore) {
          this.canAddMore = true
          this.setPullToRefresh()
        }
      } else {
        if (this.canAddMore) {
          this.canAddMore = false
          this.endPullToRefresh()
        }
      }
    },
    checkNav (index) {
      let nowIndex = -1;
      for (let i = 0; i < this.navList.length; i++) {
        if (this.navList[i].active) {
          nowIndex = i;
          break;
        }
      }
      if (nowIndex !== index) {
        this.navList = this.navList.map((item, num) => {
          item.active = false;
          if (index === num) {
            item.active = true;
          }
          return item;
        })
        this.changeSwiper(index)
      }
    },
    changeSwiper (index) {
      let swiperDom1 = this.$refs.navSwiper, swiperDom2 = this.$refs.mediaSwiper;
      if (swiperDom1.swiper && swiperDom2.swiper) {
        swiperDom1.swiper.slideTo(index, 300, false)
        swiperDom2.swiper.slideTo(index, 300, false)
      }
    },
    touchChangeSwiper () {
      let swiperDom = this.$refs.mediaSwiper;
      if (swiperDom.swiper) {
        this.canAddMore = true
        let realIndex = swiperDom.swiper.realIndex;
        this.changeSwiper(realIndex)
        this.navList = this.navList.map((item, num) => {
          item.active = false;
          if (realIndex === num) {
            item.active = true;
          }
          return item;
        })
      }
    }
  }
};
</script>