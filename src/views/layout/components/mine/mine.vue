<style scoped lang='scss'>
.mine {
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .mine-top {
    height: 130px;
    background-image: url("../image/bannerTop.png");
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    position: relative;
    .mine-top-userimg {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-image: url("../../../../assets/userhead.png");
      background-repeat: no-repeat;
      background-size: 100%;
      position: absolute;
      left: 12px;
      bottom: -40px;
      overflow: hidden;
      z-index: 100;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .mine-down {
    width: 100%;
    flex: 1;
    padding: 0px 12px;
    box-sizing: border-box;
    overflow: auto;
    .mine-down-user {
      width: 100%;
      padding-top: 60px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 20px;
      color: #212121;
      font-weight: 550;
      position: relative;
      .mine-down-user-reset {
        color: #fb7299;
        font-size: 14px;
        position: absolute;
        right: 0px;
        top: 16px;
        letter-spacing: 1px;
      }
      .mine-down-user-levbox {
        margin-left: 52px;
        position: relative;
        width: 87px;
        height: 12px;
        background: #f4f4f4;
        border-radius: 12px;
        color: #fff;
        text-align: right;
        color: #fff;
        font-size: 12px;
        .mine-down-user-levbox-levprocess {
          height: 100%;
          width: 70%;
          border-radius: 12px;
          background: #ffb37c;
          position: absolute;
          top: 0;
          left: 0;
        }
        .mine-down-user-levbox-text {
          position: absolute;
          top: 0;
          height: 100%;
          right: 5px;
          line-height: 12px;
          z-index: 5;
        }
        .mine-down-user-levbox-lev1 {
          width: 28px;
          height: 14px;
          background-image: url("http://s1.hdslb.com/bfs/static/mult/images/lv1.png");
          background-size: 100%;
          background-repeat: no-repeat;
          position: absolute;
          top: -2px;
          left: -25.5px;
          z-index: 3;
        }
        .mine-down-user-levbox-lev2 {
          @extend .mine-down-user-levbox-lev1;
          background-image: url("http://s1.hdslb.com/bfs/static/mult/images/lv2.png");
        }
        .mine-down-user-levbox-lev3 {
          @extend .mine-down-user-levbox-lev1;
          background-image: url("http://s1.hdslb.com/bfs/static/mult/images/lv3.png");
        }
        .mine-down-user-levbox-lev4 {
          @extend .mine-down-user-levbox-lev1;
          background-image: url("http://s1.hdslb.com/bfs/static/mult/images/lv4.png");
        }
        .mine-down-user-levbox-lev5 {
          @extend .mine-down-user-levbox-lev1;
          background-image: url("http://s1.hdslb.com/bfs/static/mult/images/lv5.png");
        }
      }
    }
    .mine-down-carebox {
      width: 100%;
      margin-top: 16px;
      font-size: 14px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .mine-down-carebox-item {
        margin-right: 40px;
        display: flex;
        justify-content: flex-start;
        align-items: baseline;
        color: #757575;
        .mine-down-carebox-item-num {
          color: #212121;
          font-weight: 510;
          margin-right: 5px;
        }
      }
    }
    .mine-down-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      .mine-down-content-nocontent {
        width: 280px;
        height: 160px;
        background-image: url("../image/noContent.png");
        background-repeat: no-repeat;
        background-size: 100%;
        margin-top: 85px;
        margin-bottom: 15px;
      }
      p {
        font-size: 16px;
        text-align: center;
        color: #999;
        margin: 0px;
        span {
          color: #fb7299;
        }
      }
    }
  }
}
</style>

<template>
  <div class="mine">
    <Canvascheck v-if="checkFlag" ref="cvsCheck" :complateFunc="componentFinish" :imgSrc="imgUrl" :hideFunc="()=>{checkFlag=false}" />
    <div class="mine-top">
      <div class="mine-top-userimg" @click="choseLoginWay">
        <img :src="initUserInfo.headimgurl" alt />
      </div>
    </div>
    <div class="mine-down">
      <div class="mine-down-user">
        {{initUserInfo.nickname?initUserInfo.nickname:'请登陆'}}
        <div class="mine-down-user-reset" @click="toSetPage">设置</div>
        <div class="mine-down-user-levbox">
          <div class="mine-down-user-levbox-text">4565/10000</div>
          <div class="mine-down-user-levbox-levprocess"></div>
          <div class="mine-down-user-levbox-lev4"></div>
        </div>
      </div>
      <div class="mine-down-carebox">
        <div class="mine-down-carebox-item">
          <div class="mine-down-carebox-item-num">99</div>关注
        </div>
        <div class="mine-down-carebox-item">
          <div class="mine-down-carebox-item-num">20</div>粉丝
        </div>
      </div>
      <div class="mine-down-content">
        <div class="mine-down-content-nocontent"></div>
        <p>你还没有投过稿</p>
        <p>
          快去发现
          <span @click="toHome">新内容</span>吧!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Canvascheck from '../../../../components/canvascheck/canvascheck'
export default {
  data() {
    return {
      loginType : '',
      checkFlag : false,
      imgUrl : require('../image/t1.png'),
      initUserInfo: {
        headimgurl: require("../../../../assets/userhead.png"),
        nickname: "请登陆"
      }
    };
  },
  components:{
    Canvascheck
  },
  created() {
    this.initUserData();
    this.endPullToRefresh();
  },
  methods: {
    endPullToRefresh(){
      if(window.plus){
        let wv = window.plus.webview.currentWebview();
        wv.setPullToRefresh({
          support : false
        })
      }
    },
    initUserData() {
      const userInfo = this.getUserInfo();
      if (userInfo) {
        this.initUserInfo = userInfo;
        return true;
      }
      return false;
    },
    toHome() {
      this.$emit("check", 0);
    },
    toSetPage() {
      // 跳转登陆页
      if (window.plus) {
        let wv = window.plus.webview.create(
          "/index.html#/setpage",
          "setpage",
          {}
        );
        wv.onclose = () => {
          // 更新当前页的颜色样式
          /* let firstWV = window.plus.webview.all()[0];
           firstWV.reload(); */
          this.$emit("changColor");
          if (!this.initUserData()) {
            this.initUserInfo = {
              headimgurl: require("../../../../assets/userhead.png"),
              nickname: "请登陆"
            };
          }
        };
        wv.show("pop-in");
      } else {
        this.toPage("setpage");
      }
    },
    login(ways) {
      // 登陆   way为qq，weixin，sinaweibo,pc
      let self = this;
      if (ways !== "pc") {
        if (window.plus) {
          // app端登陆方法
          window.plus.oauth.getServices(
            function(servers) {
              let serverItem = null;
              for (let i = 0; i < servers.length; i++) {
                if (servers[i].id === ways) {
                  serverItem = servers[i];
                  break;
                }
              }
              if (serverItem !== null) {
                console.log("哇哈哈哈哈哈~~~");
                serverItem.login(
                  function(event) {
                    console.log(JSON.stringify(event.target.userInfo) + "123");
                    self.setUserInfo(event.target.userInfo); // 保持用户信息
                    self.initUserInfo = event.target.userInfo;
                  },
                  function(err) {
                    window.plus.nativeUI.toast(err.message);
                  }
                );
              } else {
                console.log("哇呜呜呜呜呜~~~");
                window.plus.nativeUI.toast("没有您登陆用的平台");
              }
            },
            function(err) {
              window.plus.nativeUI.toast(err.message);
            }
          );
        }
      } else {
        // pc端
        console.log("哈哈哈");
        const userInfo = {
          openid: "pc_openId",
          headimgurl:
            "http://img3.imgtn.bdimg.com/it/u=218375221,1552855610&fm=11&gp=0.jpg",
          nickname: "pc测试昵称",
          email: "1225972361@qq.com",
          phonenumber: "18786793424",
          sex: "mail",
          province: "贵州省",
          city: "贵阳市",
          country: "中国"
        };
        self.setUserInfo(userInfo);
        self.initUserInfo = userInfo;
      }
    },
    choseLoginWay() {
      let self = this;
      console.log("登陆");
      if (window.plus) {
        const actionSheetButtons = [
          {
            title: "微信",
            color: "#FB7299"
          },
          {
            title: "QQ",
            color: "#FB7299"
          }
        ];
        window.plus.nativeUI.actionSheet(
          {
            title: "请选择登陆的平台",
            cancel: "取消",
            buttons: actionSheetButtons
          },
          function(e) {
            const chooseWay = actionSheetButtons[e.index - 1].title;
            if (chooseWay === "QQ") {
              self.loginType = 'qq';
              self.checkFlag = true;
              //self.login("qq");
            } else if (chooseWay === "微信") {
              self.loginType = 'weixin';
              self.checkFlag = true;
              //self.login("weixin");
            }
          }
        );
      } else {
        self.loginType = 'pc';
        this.checkFlag = true;
        //this.login("pc");
      }
    },
    componentFinish(state){
      let type = this.loginType;
      if(state){ // 验证成功
        this.login(type);
      }else{ // 验证失败
        return;
      }
    }
  }
};
</script>