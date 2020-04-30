<style lang="scss" scoped>
.usergraf {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .usergraf-content {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .usergraf-content-grafbox {
      width: 355px;
      height: 355px;
    }
    .usergraf-content-graftype {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 30px auto 0px;
      .usergraf-content-graftype-item {
        padding: 3px 15px;
        border: 2px solid #fb7299;
        color: #fb7299;
        border-radius: 15px;
        font-size: 14px;
        font-weight: bold;
        margin: 0px 25px;
        &.active{
          background: #fb7299;
          color: #fff;
        }
      }
    }
  }
}
</style>

<template>
  <div class="usergraf">
    <Titlebar text="用户分布" />
    <div class="usergraf-content">
      <div class="usergraf-content-grafbox"></div>
      <div class="usergraf-content-graftype">
        <div
          @click="checkMenu(index)"
          :class="{active : item.active}"
          class="usergraf-content-graftype-item"
          v-for="(item,index) in menus"
          :key="index"
        >{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china'
import Titlebar from "../../components/titlebar/titlebar"
export default {
  data () {
    return {
      menus: [
        {
          name : '地图',
          active : true
        },
        {
          name : '饼状图',
          active : false
        },{
          name : '柱状图',
          active : false
        }
      ],
      myEcharts: null,
      userList: [
        {
          city: '贵州',
          number: 25
        }, {
          city: '山东',
          number: 10
        },
        {
          city: '广东',
          number: 12
        },
        {
          city: '北京',
          number: 24
        }
        , {
          city: '上海',
          number: 8
        }],
      option: {
        title: {
          text: '哔哔哩哩用户全国分布图',
          subtext: '数据来自哔哔哩哩',
          textStyle: {
            color: '#fb7299'
          }
        },
        tooltip: {
          show: true
        },
        legend: {
          top: '0',
          right: '0',
          orient: 'vertical',
        }
      }
    }
  },
  components: {
    Titlebar
  },
  mounted () {
    this.initGraf('map');
  },
  methods: {
    initGraf (type) {
      this.myEcharts = echarts.init(document.querySelector('.usergraf-content-grafbox'));
      this.setOption(type)
      console.log(this.option)
      this.myEcharts.setOption(this.option)
    },
    setOption (type) {
      if (type === 'line') { // 柱状图
        delete this.option.visualMap
        this.option.legend.data = ["人数"]
        let xList = [], seriesList = [];
        for (let i = 0; i < this.userList.length; i++) {
          xList.push(this.userList[i].city);
          seriesList.push(this.userList[i].number)
        }
        this.option.xAxis = {
          data: xList
        }
        this.option.yAxis = {}
        this.option.series = [{
          name: '人数',
          type: 'bar',
          data: seriesList
        }]
      } else if (type === 'circle') { // 饼状图
        delete this.option.xAxis;
        delete this.option.yAxis;
        delete this.option.visualMap
        this.option.tooltip = {
          trigger: 'item'
        },
          this.option.legend.data = ["贵州", "山东", "广东", "北京", "上海"]
        let yList = [];
        for (let i = 0; i < this.userList.length; i++) {
          yList.push({
            value: this.userList[i].number,
            name: this.userList[i].city
          })
        }
        this.option.series = [
          {
            name: '人数',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: yList
          }
        ]
      } else { // 地图
          delete this.option.xAxis;
          delete this.option.yAxis;
          this.option.visualMap={
            type: 'piecewise',
            pieces: [
              { min: 50 }, // 不指定 max，表示 max 为无限大（Infinity）。
              { min: 30, max: 50 },
              { min: 20, max: 30 },
              { min: 10, max: 20 },
              { min: 1, max: 10, },
              { max: 0 }     // 不指定 min，表示 min 为无限大（-Infinity）。
            ],
            min: 0,
            max: 50,
            realtime: false,
            calculable: true,
            textStyle: {
              fontSize: 10,
              lineHeight: 10
            },
            itemWidth: 15,
            itemHeight: 10
          };
          let seriesList = []
          for(let i=0;i<this.userList.length;i++){
             let obj = {
               value : this.userList[i].number,
               name : this.userList[i].city
             } 
             seriesList.push(obj)
          }
          this.option.series=[
            {
              name: '用户分布',
              zoom: 1.25,
              type: 'map',
              map: 'china',
              label: {
                show: true
              },
              emphasis: {
                itemStyle: {
                  areaColor: 'yellow'
                }
              },
              data: seriesList
            }
          ]
      }
    },
    checkMenu (index) {
      const typeList = ['map', 'circle', 'line'];
      this.initGraf(typeList[index])
      this.menus.forEach((item,num)=>{
        item.active = false
        if(index===num){
          item.active = true
        }
      })
    }
  }
}
</script>