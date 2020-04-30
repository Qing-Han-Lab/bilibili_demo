
<style lang="scss" scoped>
.search {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f4f4f4;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
  .search-topsearchbox {
    width: 100%;
    height: 44px;
    padding: 0px 12px;
    box-sizing: border-box;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .search-topsearchbox-searchtext {
      color: #fb7299;
      font-size: 14px;
    }
    .search-topsearchbox-inputbox {
      height: 30px;
      background-color: #f4f4f4;
      padding: 0px 50px 0px 30px;
      background-image: url("../../assets/search.png");
      background-size: 17px 17px;
      background-repeat: no-repeat;
      background-position: 10px center;
      overflow: hidden;
      position: relative;
      .close{
        width: 15px;
        height: 15px;
        background-image: url("../../assets/close.png");
        background-repeat: no-repeat;
        background-size: 100%;
        position: absolute;
        right: 10px;
        top: 7.5px;
      }
      input {
        width: 100%;
        height: 30px;
        border: 0px;
        outline: none;
        background-color: #f4f4f4;
        padding-right: 50px;
        text-indent: 20px;
        font-size: 14px;
        color: #505050;
        &::-webkit-input-placeholder{
          color: lightgray;
        }
      }
    }
  }
  .search-allsearchbox{
    width: 100%;
    background: #fff;
    padding: 0px 12px;
    box-sizing: border-box;
    padding-bottom: 20px;
    .search-allsearchbox-title{
      width: 100%;
      margin: 15px 0px;
      color: #999;
      font-size: 14px;
    }
    .search-allsearchbox-content{
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-content: flex-start;
      flex-wrap: wrap;
      .search-allsearchbox-content-item{
        color: #505050;
        font-size: 13px;
        border-radius: 15px;
        padding: 5px 10px;
        margin-right: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
      }
    }
  }
  .search-historybox{
    width: 100%;
    margin-top: 12px;
    flex: 1;
    background: #fff;
    overflow: auto;
    padding: 0px 12px;
    box-sizing: border-box;
    .search-historybox-title{
      width: 100%;
      color: #999;
      font-size: 14px;
      height: 46px;
      line-height: 46px;
      border-bottom: 1px solid #eee;
    }
    .search-historybox-item{
      width: 100%;
      height: 46px;
      font-size: 14px;
      color: #505050;
      border-bottom: 1px solid #eee;
      line-height: 46px;
    }
    .search-historybox-clear{
      width: 100%;
      text-align: center;
      color: #999;
      margin-top: 20px;
    }
  }
  .search-result{
    width: 100%;
    height: calc(100% - 44px);
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>

<template>
  <div class="search">
    <div class="search-topsearchbox">
      <div class="search-topsearchbox-inputbox">
        <input type="text" placeholder="请输入关键字!" v-model="searchKeywords" />
        <div class="close" @click="clearKeywords"></div>
      </div>
      <div class="search-topsearchbox-searchtext" @click="toSearch">搜索</div>
    </div>
    <div class="search-allsearchbox">
      <div class="search-allsearchbox-title">大家都在搜</div>
      <div class="search-allsearchbox-content">
        <div class="search-allsearchbox-content-item" v-for="(item,index) in commendList" :key="index">{{item}}</div>
      </div>
    </div>
    <div class="search-historybox">
      <div class="search-historybox-title">历史记录</div>
      <div class="search-historybox-item" v-for="(item,index) in histortList" :key="index">{{item}}</div>
      <div class="search-historybox-clear">清除历史记录</div>
    </div>
    <div class="search-result" v-if="isResult">
      <SearchResult />
    </div>
  </div>
</template>

<script>
import SearchResult from "./components/searchresult"
export default {
  data(){
    return{
      searchKeywords : '',
      isResult : false,
      commendList : ['哈哈哈','嘻嘻嘻嘻','我爱读书','LOL','跟踪报道','意大利疫情'],
      histortList : ['java','javascript','python']
    }
  },
  components:{
    SearchResult
  },
  methods:{
    clearKeywords(){
      this.searchKeywords = '';
      this.isResult = false
    },
    toSearch(){
      if(this.searchKeywords.trim()!==''){
        this.isResult = true;
        // 调取搜索接口
      }
    }
  }
};
</script>
