<style scoped lang='scss'>
.topbar {
  width: 100%;
  height: 44px;
  padding: 0px 12px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 5px #f2f2f2;
  &.pink {
    background: #fb7299;
  }
  .topbar-logo {
    width: 62px;
    height: 28px;
    background-image: url("../../../assets/bilibili_logo.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-y: -3px;
  }
  .topbar-input {
    background-color: #f4f4f4;
    width: 112px;
    height: 24px;
    border-radius: 12px;
    background-image: url("../../../assets/search.png");
    background-repeat: no-repeat;
    background-size: 11px 11px;
    background-position: 11px center;
    overflow: hidden;
    color: #999;
    font-size: 12px;
    text-indent: 30px;
    line-height: 27px;
    &.pink {
      background-color: #fff;
    }
  }
  .topbar-right {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .topbar-right-userimg {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 1px solid #fff;
      overflow: hidden;
      margin-right: 12px;
      background-image: url("../../../assets/userhead.png");
      background-size: 100%;
      background-repeat: no-repeat;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .topbar-right-down {
      width: 80px;
      height: 25px;
      background: #fb7299;
      color: #fff;
      font-size: 14px;
      text-align: center;
      line-height: 25px;
      border-radius: 5px;
      &.pink {
        background: #fff;
        color: #fb7299;
      }
    }
  }
}
</style>

<template>
  <div class="topbar" :class="{pink:themePink}">
    <div class="topbar-logo"></div>
    <div @click="toPage('search')" class="topbar-input" :class="{pink:themePink}">我用初音玩游戏</div>
    <div class="topbar-right">
      <div class="topbar-right-userimg">
        <img :src="userImage" alt />
      </div>
      <div class="topbar-right-down" :class="{pink:themePink}">下载 APP</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      themePink: false,
      userImage : require('../../../assets/userhead.png')
    };
  },
  created() {
    this.setUserThemeStyle()
    let userInfo = this.getUserInfo();
    if(userInfo){
      this.userImage = userInfo.headimgurl;
    }
  },
  methods: {
    setUserThemeStyle() {
      let userThemeStyle = this.getUserTheme();
      if (userThemeStyle === "pink") {
        this.themePink = true;
        this.setNavigatorColor(true)
        console.log("粉色的");
      }else{
        this.themePink = false;
        this.setNavigatorColor(false)
        console.log('白色的')
      }
      let userInfo = this.getUserInfo();
      if(userInfo){
        this.userImage = userInfo.headimgurl;
      }else{
        this.userImage = require('../../../assets/userhead.png')
      }
    }
  }
};
</script>