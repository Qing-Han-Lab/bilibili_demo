<style lang="scss" scoped>
.detail {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  .detail-shadowbox {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    .detail-shadowbox-content {
      width: 100%;
      transform: translateY(100%);
      transition: transform 0.5s;
      &.show {
        transform: translateY(0%);
      }
      .detail-shadowbox-content-top {
        width: 100%;
        height: 150px;
        background: #fff;
        padding: 14px 15px 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .detail-shadowbox-content-top-title {
          text-align: center;
          font-size: 14px;
          color: #505050;
        }
        .detail-shadowbox-content-top-waybox {
          width: 100%;
          flex: 1;
          display: flex;
          justify-content: space-around;
          align-items: center;
          .detail-shadowbox-content-top-waybox-item {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            img {
              width: 44px;
              height: 44px;
              border-radius: 50%;
              overflow: hidden;
              margin-bottom: 10px;
            }
          }
        }
      }
      .detail-shadowbox-content-cancel {
        width: 100%;
        height: 55px;
        text-align: center;
        line-height: 55px;
        color: #505050;
        font-size: 16px;
        border-top: 1px solid #eee;
        background: #fff;
      }
    }
  }
  .detail-videobox {
    width: 100%;
    height: 211px;
    background: #f7f7f7;
    position: relative;
    video {
      width: 100%;
      height: 100%;
    }
  }
  .detail-morebox {
    flex: 1;
    width: 100%;
    overflow: auto;
    position: relative;
    .detail-morebox-videotext {
      width: 100%;
      margin-top: 10px;
      padding: 0px 12px;
      box-sizing: border-box;
      .detail-morebox-videotext-title {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .detail-morebox-videotext-title-tags {
          padding: 2px 5px;
          background: #f4f4f4;
          border-radius: 10px;
          margin-right: 10px;
          font-size: 12px;
          color: #fb7299;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          img {
            width: 16px;
            height: 16px;
            margin-right: 3px;
          }
        }
        .detail-morebox-videotext-title-name {
          flex: 1;
          color: #212121;
        }
      }
      .detail-morebox-videotext-videoinfo {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 12px;
        color: #999;
        margin-top: 6px;
        .detail-morebox-videotext-videoinfo-upname {
          color: #212121;
          margin-right: 18px;
        }
      }
      .detail-morebox-videotext-useroprite {
        width: 100%;
        margin-top: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 26px;
        .detail-morebox-videotext-useroprite-many {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .detail-morebox-videotext-useroprite-many-item {
            color: #999;
            font-size: 10px;
            background-image: url("../../assets/close.png");
            background-size: 20px 20px;
            background-repeat: no-repeat;
            text-indent: 25px;
            margin-right: 10px;
            height: 26px;
            line-height: 26px;
          }
        }
        .detail-morebox-videotext-useroprite-reply {
          color: #999;
          font-size: 10px;
          background-image: url("../../assets/close.png");
          background-size: 20px 20px;
          background-repeat: no-repeat;
          text-indent: 25px;
          margin-right: 10px;
          height: 26px;
          line-height: 26px;
        }
      }
    }
    .detail-morebox-commendbox {
      margin-top: 15px;
      width: 100%;
      padding: 0px 12px;
      box-sizing: border-box;
      position: relative;
      height: 835px;
      overflow: hidden;
      .detail-morebox-commendbox-getmore {
        color: #fff;
        background: #fb7299;
        font-size: 15px;
        padding: 7px 18px;
        border-radius: 15px;
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        letter-spacing: 0.5px;
        &.show {
          animation: show 0.5s 1 forwards ease-in-out;
        }
        &.hide {
          animation: hide 0.5s 1 forwards ease-in-out;
        }
        @keyframes show {
          0% {
            bottom: -100px;
          }
          100% {
            bottom: 20px;
          }
        }
        @keyframes hide {
          0% {
            bottom: 20px;
          }
          100% {
            bottom: -100px;
          }
        }
      }
    }
  }
  .detail-sharepic {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .detail-sharepic-picture {
      width: 250px;
      height: 450px;
      background-color: #fff;
      background-image: url("./img/share.jpg");
      background-repeat: no-repeat;
      background-size: 100%;
      background-position-y: -25px;
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      .detail-sharepic-picture-userbox {
        width: 100%;
        height: 50px;
        display: flex;
        padding: 0px 15px;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
        color: #fb7299;
        font-weight: bold;
        font-size: 14px;
        background: rgba(0, 0, 0, 0.8);
        img {
          width: 40px;
          height: 40px;
          border: 1px solid #fff;
          border-radius: 50%;
          margin-right: 15px;
        }
      }
      .close {
        position: absolute;
        width: 25px;
        height: 25px;
        font-size: 20px;
        line-height: 25px;
        text-align: center;
        color: #fff;
        transform: rotate(45deg);
        top: -30px;
        right: -30px;
        border-radius: 50%;
        border: 1px solid #fff;
      }
    }
    .detail-sharepic-btn {
      padding: 10px 20px;
      color: #fff;
      border-radius: 20px;
      background: #fb7299;
      font-size: 14px;
      margin-top: 20px;
      letter-spacing: 1px;
    }
  }
}
</style>

<template>
  <div class="detail">
    <Topbar />
    <div class="detail-videobox">
      <video controls>
        <source :src="videoUrl" type="video/mp4" />
      </video>
    </div>
    <div class="detail-morebox" @scroll="scrollEvent($event)">
      <div class="detail-morebox-videotext">
        <div class="detail-morebox-videotext-title">
          <div class="detail-morebox-videotext-title-tags">
            <img src="http://s1.hdslb.com/bfs/static/mult/images/ic_popular.svg" alt />
            热门
          </div>
          <div class="detail-morebox-videotext-title-name">【基德】告诉你2020这些灾难，和全球变暖的背后联系</div>
        </div>
        <div class="detail-morebox-videotext-videoinfo">
          <div class="detail-morebox-videotext-videoinfo-upname">吟游大诗人</div>54.2万次观看 1593条弹幕 2020-03-13
        </div>
        <div class="detail-morebox-videotext-useroprite">
          <div class="detail-morebox-videotext-useroprite-many">
            <div class="detail-morebox-videotext-useroprite-many-item">收藏</div>
            <div class="detail-morebox-videotext-useroprite-many-item" @click="downLoad">缓存</div>
            <div class="detail-morebox-videotext-useroprite-many-item" @click="shareTo">分享</div>
          </div>
          <div class="detail-morebox-videotext-useroprite-reply">评论</div>
        </div>
      </div>
      <div class="detail-morebox-commendbox">
        <Media />
        <div
          @click="toHome"
          :class="[showMore?'show':'hide']"
          class="detail-morebox-commendbox-getmore"
        >发现更多好看视频</div>
      </div>
    </div>
    <div class="detail-shadowbox" v-if="shareFlag">
      <div class="detail-shadowbox-content" :class="{show : shareShow}">
        <div class="detail-shadowbox-content-top">
          <div class="detail-shadowbox-content-top-title">分享至</div>
          <div class="detail-shadowbox-content-top-waybox">
            <div
              @click="share(index)"
              class="detail-shadowbox-content-top-waybox-item"
              v-for="(item,index) in shareList"
              :key="index"
            >
              <img :src="item.url" alt />
              {{item.name}}
            </div>
          </div>
        </div>
        <div class="detail-shadowbox-content-cancel" @click="cancelShare">取消</div>
      </div>
    </div>
    <div class="detail-sharepic" v-if="sharePicFlag">
      <div class="detail-sharepic-picture">
        <div class="close" @click="sharePicFlag=false">+</div>
        <div class="detail-sharepic-picture-userbox">
          <img :src="userInfo.headimgurl" alt />
          {{userInfo.nickname}}
        </div>
      </div>
      <div class="detail-sharepic-btn" @click="share(0)">分享</div>
    </div>
  </div>
</template>

<script>
import Topbar from "../layout/components/topbar";
import Media from "../../components/media/media";
import html2canvas from "html2canvas";
export default {
  data() {
    return {
      videoUrl: 'https://vdept.bdstatic.com/4a7159474b42386a7a6d615169685561/414e686941363139/373bc260b9e9190a0e77f8d8541bda45ffe7daa393fa75769b1584e865642de0b895325e44a4926d39c85c33229111ba.mp4?auth_key=1584548864-0-0-ebce46ca6209d8da9d001779ef96da98',
      showMore: false,
      shareFlag: false,
      shareShow: false,
      shareList: [
        {
          url: require("./img/share_wechat.png"),
          name: "微信",
          type: "WXSceneSession", // 微信好友
          way: "weixin"
        },
        {
          url: require("./img/share_discover.png"),
          name: "朋友圈",
          type: "WXSceneTimeline", // 朋友圈
          way: "weixin"
        },
        {
          url: require("./img/share_qq.png"),
          name: "QQ",
          type: "QQ",
          way: "qq"
        },
        {
          url: require("./img/share_qzone.png"),
          name: "QQ空间",
          type: "QQ",
          way: "qq"
        }
      ],
      sharePicFlag: false,
      userInfo: {
        headimgurl: require("../../assets/userhead.png"),
        nickname: ""
      }
    };
  },
  components: {
    Topbar,
    Media
  },
  methods: {
    isLogin() {
      // 判断是否有登陆态
      const userInfo = this.getUserInfo();
      if (Object.keys(userInfo).length !== 0) {
        this.userInfo = userInfo;
        return true;
      }
      return false;
    },
    scrollEvent(e) {
      let scrollTop = e.target.scrollTop,
        clientHeight = e.target.clientHeight,
        scrollHeight = e.target.scrollHeight;
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        this.showMore = true;
      } else {
        this.showMore = false;
      }
    },
    toHome() {
      if (window.plus) {
        // 返回layout页面
        let wvList = window.plus.webview.all();
        for (let i = 1; i < wvList.length; i++) {
          wvList[i].close();
        }
      } else {
        window.location.href = "/index.html#/";
      }
    },
    collect() {
      // 收藏
      this.$toast("已收藏");
    },
    shareTo() {
      if (this.isLogin()) {
        this.shareFlag = true;
        setTimeout(() => {
          this.shareShow = true;
        }, 200);
      } else {
        this.$toast("请先登陆后再分享");
      }
    },
    cancelShare() {
      this.shareShow = false;
      setTimeout(() => {
        this.shareFlag = false;
      }, 500);
    },
    share(index) {
      // 分享
      this.sharePicFlag = true;
      this.cancelShare();
      let self = this;
      const shareInfo = this.shareList[index];
      if (window.plus) {
        window.plus.share.getServices(
          function(services) {
            let shareItem = null;
            for (let i = 0; i < services.length; i++) {
              if (services[i].id === shareInfo.way) {
                shareItem = services[i];
                break;
              }
            }
            if (shareItem) {
              html2canvas(document.querySelector(".detail-sharepic-picture"), {
                allowTaint: true // 跨域图片
              }).then(canvas => {
                canvas.style.position = "absolute";
                canvas.style.left = "-9999px";
                document.querySelector(".detail").appendChild(canvas);
                let picUrl = canvas.toDataURL();
                // 先保存到本地再分享

                let bitmap = new window.plus.nativeObj.Bitmap("shareImg");
                bitmap.loadBase64Data(picUrl, function() {
                  bitmap.save(
                    "_doc/share.jpg",
                    {},
                    function(event) {
                      let saveImgUrl = event.target;
                      window.plus.gallery.save(saveImgUrl, function() {
                        window.plus.nativeUI.toast("图片保存成功");
                        window.plus.io.resolveLocalFileSystemURL(
                          saveImgUrl,
                          function(ety) {
                            let shareUrl = ety.toLocalURL();
                            let shareMessage = {
                              title: "分享",
                              content: "分享内容",
                              pictures: [shareUrl]
                            };
                            if (shareInfo.way === "weixin") {
                              // wechat
                              shareMessage.extra = {
                                scene: shareInfo.type
                              };
                            } else {
                              // qq
                              // qq操作  后面可能会加上
                            }
                            shareItem.send( // 分享图片
                              shareMessage,
                              function() {
                                self.sharePicFlag = false;
                                window.plus.nativeUI.toast("分享成功");
                                document
                                  .querySelector(".detail")
                                  .removeChild(canvas);
                              },
                              function(err) {
                                window.plus.nativeUI.toast(err.message);
                              }
                            );
                          },
                          function() {
                            window.plus.nativeUI.toast("获取图片失败");
                          }
                        );
                      });
                    },
                    function(err) {
                      window.plus.nativeUI.toast(err.message);
                    }
                  );
                });
              });
            } else {
              self.$toast("没有找到分享途径");
            }
          },
          function(err) {
            self.$toast(err.message);
          }
        );
      } else {
        html2canvas(document.querySelector(".detail-sharepic-picture"), {
          allowTaint: true // 跨域图片
        }).then(canvas => {
          canvas.style.position = "absolute";
          canvas.style.left = "-9999px";
          document.querySelector(".detail").appendChild(canvas);
          setTimeout(() => {
            document.querySelector(".detail").removeChild(canvas);
            self.sharePicFlag = false;
          }, 3000);
        });
        console.log("正在分享");
      }
    },
    downLoad() {
      // 缓存
      let self = this;
      if (window.plus) {
        var downLoad = window.plus.downloader.createDownload(
          this.videoUrl,
          {},
          function(d, status) {
            if (status === 200) {
              // 下载完成
              self.closeWaiting();
              window.plus.push.createMessage('视频已经保存到本地','',{
                title : '哔哔哩哩'
              })
              window.plus.io.resolveLocalFileSystemURL(
                d.filename,
                function(entry) {
                  let path = entry.toLocalURL(); // 本地mp4文件地址
                  window.plus.gallery.save(
                    path,
                    function() {
                      window.plus.nativeUI.toast("已保存到相册");
                    },
                    function() {
                      window.plus.nativeUI.toast("保存失败");
                    }
                  );
                },
                function() {
                  window.plus.nativeUI.toast("没有找到文件");
                }
              );
            }
          }
        );
        downLoad.start();
        self.showWaiting("正在下载视频...");
      }
    }
  }
};
</script>
