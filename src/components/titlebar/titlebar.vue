<style scoped lang='scss'>
.titlebar{
  width: 100%;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 5px 5px #f7f7f7;
  &.pink{
    background: #fb7299;
  }
  .titlebar-back{
    width: 16px;
    height: 30px;
    margin-left: 15px;
    margin-right: 20px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url("./img/gray_back.png");
    transform: scale(0.6);
    &.pink{
      background-image: url("./img/white_back.png");
    }
  }
  .titlebar-text{
    color: #757575;
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: 550;
    &.pink{
      color: #fff;
    }
  }
}
</style>

<template>
<div class='titlebar' :class="{pink:themePink}">
  <div class="titlebar-back" :class="{pink:themePink}" @click="goBack" ></div>
  <div class="titlebar-text" :class="{pink:themePink}">{{text}}</div>
</div>
</template>

<script>
export default {
  data(){
    return{
      themePink : false
    }
  },
  props:{
    text : {
      type: String,
      default : ''
    }
  },
  created(){
    this.setThemeStyle()
  },
  methods:{
    setThemeStyle(){
      if(this.getUserTheme()==='pink'){
        this.themePink = true;
        this.setNavigatorColor(true)
      }else{
        this.themePink = false
        this.setNavigatorColor(false)
      }
    }
  }
};
</script>