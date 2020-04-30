<style lang='scss' scoped>
  .layout{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .layout-content{
      flex: 1;
      width: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
    .layout-downbar{
      width: 100%;
      height: 50px;
      border-top: 1px solid #f2f2f2;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .layout-downbar-item{
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #707070;
        font-size: 12px;
        background-color: #fff;
        transition: background-color 0.3s;
        &:active{
          background-color: #f4f4f4;
        }
        &.active{
          color: #fb7299;
        }
        .layout-downbar-item-iconbyhome{
          width: 21px;
          height: 21px;
          background-size: 100%;
          background-repeat: no-repeat;
          background-image: url("./img/home.png");
          margin-bottom: 2px;
          &.active{
            background-image: url("./img/home_on.png");
          }
        }
        .layout-downbar-item-iconbymine{
          @extend .layout-downbar-item-iconbyhome;
          background-image: url("./img/mine.png");
          &.active{
            background-image: url("./img/mine_on.png");
          }
        }
      }
    }
  }
</style>
<template>
  <div class="layout">
    <Topbar ref="topbar" />
    <div class="layout-content">
        <component :is="componentName" @check="checkMenu" @changColor="changeColor" ></component>
    </div>
    <div class="layout-downbar">
      <div @click="changeBarMenus(index)" :class="{active : item.active}" class="layout-downbar-item" v-for="(item,index) in downMenus" :key="index">
        <div :class="`layout-downbar-item-iconby${item.name} ${item.active?'active':''}`"></div>
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from './components/topbar'
import Home from './components/home/home'
import Mine from './components/mine/mine'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
  data(){
    return{
     componentName : 'Home',
     downMenus: [
       {
         name : 'home',
         comp : 'Home',
         title : '主页',
         active : true
       },
       {
         name : 'mine',
         comp : 'Mine',
         title : '我的',
         active : false
       }
     ]
    }
  },
  components:{
    Topbar,
    Home,
    Mine,
    swiper,
    swiperSlide
  },
  created(){
    let defaultTheme = window.localStorage.getItem('userTheme');
    if(!defaultTheme){
     this.setUserTheme('white')
     this.setNavigatorColor(false)
    }else{
      if(defaultTheme==='pink'){
        console.log('修改成粉色的navigator')
        this.setNavigatorColor(true)
      }else{
        console.log('修改成白色的navigator')
        this.setNavigatorColor(false)
      }
    }
  },
  methods : {
    changeBarMenus(num){ // 切换主页和我的
      this.componentName = this.downMenus[num].comp;
      this.downMenus = this.downMenus.map((item,index)=>{
        item.active = false;
        if(num===index){
          item.active = true;
        }
        return item;
      })
    },
    checkMenu(index){
      this.changeBarMenus(index)
    },
    changeColor(){ // 修改头部导航样式
      let component = this.$refs.topbar;
      if(component){
        component.setUserThemeStyle()
      }
    }
  }
}
</script>