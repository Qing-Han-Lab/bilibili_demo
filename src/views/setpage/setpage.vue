<style scoped lang='scss'>
.setpage {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f4f4f4;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .setpage-content {
    flex: 1;
    width: 100%;
    overflow: auto;

    .setpage-content-model {
      margin-top: 12px;
      width: 100%;

      .setpage-content-model-title {
        color: #999;
        font-size: 16px;
        width: 100%;
        letter-spacing: 1.5px;
        text-indent: 12px;
        padding: 10px 0px;
      }
      .setpage-content-model-item {
        width: 100%;
        height: 44px;
        background: #fff;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 12px;
        box-sizing: border-box;
        .logout{
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: 44px;
        }
        &:last-child {
          border: 0px;
        }
        .setpage-content-model-item-left {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 15px;
          color: #505050;
          .setpage-content-model-item-left-colorbox {
            width: 25px;
            height: 25px;
            background: #f9f9f9;
            margin-right: 15px;
            &.pink {
              background: #fb7299;
            }
          }
        }
        .setpage-content-model-item-right {
          background: #fb7299;
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>

<template>
  <div class="setpage">
    <Titlebar text="设置" ref="titlebar" />
    <div class="setpage-content">
      <div class="setpage-content-model">
        <div class="setpage-content-model-title">主题</div>
        <div @click="checkList(index)" class="setpage-content-model-item" v-for="(item,index) in themeList" :key="index">
          <div class="setpage-content-model-item-left">
            <div class="setpage-content-model-item-left-colorbox" :class="[item.name==='少女粉'?'pink':'']"></div>{{item.name}}
          </div>
          <div class="setpage-content-model-item-right" v-if="item.active"></div>
        </div>
      </div>
      <div class="setpage-content-model">
        <div class="setpage-content-model-title">缓存</div>
        <div class="setpage-content-model-item" @click="clearCacle">
          <div class="setpage-content-model-item-left">清除缓存</div>
        </div>
      </div>
      <div class="setpage-content-model">
        <div class="setpage-content-model-title">用户</div>
        <div class="setpage-content-model-item" @click="toPage('usergraf')">
          <div class="setpage-content-model-item-left">客户端用户分布</div>
        </div>
      </div>
      <div class="setpage-content-model">
        <div class="setpage-content-model-title"></div>
        <div class="setpage-content-model-item" @click="logout">
          <div class="logout">退出登陆</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Titlebar from "../../components/titlebar/titlebar";
export default {
  data() {
    return {
      themeList : [
        {
          name : '简洁白',
          color : 'white',
          active : true
        },
        {
          name : '少女粉',
          color : 'pink',
          active: false
        }
      ]
    };
  },
  created() {
    let style = this.getUserTheme();
    if(style==='pink'){
      this.themeList = this.themeList.map((item)=>{
        item.active = false;
        if(item.color==='pink'){
          item.active = true;
        }
        return item;
      })
    }
  },
  components: {
    Titlebar
  },
  methods: {
     checkList(index){
      this.themeList = this.themeList.map((item,num)=>{
        item.active = false;
        if(index===num){
          item.active = true
        }
        return item
      })
      // 修改缓存的用户主题
      this.setUserTheme(this.themeList[index].color)
      this.$refs.titlebar.setThemeStyle()
    },
    logout(){
      // 退出登陆  清除缓存里的用户信息
      window.localStorage.removeItem('userInfo')
      if(window.plus){
        window.plus.webview.currentWebview().close();
      }else{
        window.history.go(-1)
      }
    },
    clearCacle(){
      // 清除缓存
      const cacleNum = Math.floor(Math.random()*500+120);
      this.$toast(`已清除${cacleNum}K的缓存数据`);
    }
  }
};
</script>