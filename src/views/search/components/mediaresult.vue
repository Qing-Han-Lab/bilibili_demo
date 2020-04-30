<style lang="scss" scoped>
 .mediabox{
   width: 100%;
   height: 100%;
   padding: 0px 12px;
   box-sizing: border-box;
   .mediabox-item{
     width: 100%;
     height: 73px;
     padding: 10px 0px;
     display: flex;
     justify-content: flex-start;
     align-items: center;
     .mediabox-item-img{
       width: 117px;
       height: 100%;
       border-radius: 10px;
       margin-right: 12px;
       position: relative;
       background: #f7f7f7;
       img{
         width: 100%;
         height: 100%;
       }
       .mediabox-item-img-long{
         position: absolute;
         right: 5px;
         bottom: 5px;
         font-size: 12px;
         color: #fff;
       }
     }
     .mediabox-item-content{
       flex: 1;
       height: 100%;
       display: flex;
       flex-direction: column;
       align-items: flex-start;
       justify-content: space-between;
       .mediabox-item-content-title{
         font-size: 14px;
         color: #212121;
         height: 37px;
         line-height: 16px;
         overflow: hidden;
       }
       .mediabox-item-content-more{
         color: #999;
         font-size: 12px;
         .mediabox-item-content-more-up{
           background-image: url("http://s1.hdslb.com/bfs/static/mult/images/ico_up.png");
           background-size: 14px 12px;
           background-repeat: no-repeat;
           text-indent: 20px;
           line-height: 12px;
           height: 12px;
           margin-bottom: 5px;
         }
         .mediabox-item-content-more-down{
           width: 100%;
           display: flex;
           justify-content: flex-start;
           align-items: center;
           .mediabox-item-content-more-down-item{
             @extend .mediabox-item-content-more-up;
             background-image: url('http://s1.hdslb.com/bfs/static/mult/images/ico_play.png');
             margin-right: 15px;
             &:nth-child(2){
               background-image: url('http://s1.hdslb.com/bfs/static/mult/images/ico_danmu.png');
             }
           }
         }
       }
     }
   }
 }
</style>

<template>
  <div class="mediabox">
    <div @click="toPage('detail')" class="mediabox-item" v-for="(item,index) in list" :key="index">
      <div class="mediabox-item-img">
        <img src="https://i2.hdslb.com/bfs/archive/cf34228db3564bba1b9037ef1be728656a95c2e5.jpg@320w_200h.webp" alt="">
        <div class="mediabox-item-img-long">06:15:23</div>
      </div>
      <div class="mediabox-item-content">
        <div class="mediabox-item-content-title">[2019全球总决赛]10月26日四分之一决赛 GRF vs IG</div>
        <div class="mediabox-item-content-more">
          <div class="mediabox-item-content-more-up">哔哩哔哩赛事</div>
          <div class="mediabox-item-content-more-down">
            <div class="mediabox-item-content-more-down-item">215.4万</div>
            <div class="mediabox-item-content-more-down-item">17.2万</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list : 10
    }
  },
  methods:{
    getData(){
      this.showWaiting();
      setTimeout(()=>{
        this.list+=10;
        this.closeWaiting()
      },1000)
    }
  }
}
</script>