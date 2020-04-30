<style lang='scss' scoped>
.checkbox {
  position: fixed;
  width: 100%;
  top: 44px;
  bottom: 50px;
  background: rgba(255, 255, 255, 0.9);
  z-index: 150;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .checkbox-picturebox {
    width: 300px;
    height: 150px;
    background: #ccc;
    position: relative;
    #cvs2 {
      position: absolute;
      top: 0;
      left: -100px;
    }
  }
  .checkbox-touchbox {
    width: 300px;
    height: 20px;
    background: #cccccc;
    margin-top: 50px;
    border-radius: 20px;
    position: relative;
    .checkbox-touchbox-process {
      width: 0px;
      height: 100%;
      background: green;
      border-radius: 20px;
    }
    .checkbox-touchbox-touchball {
      width: 20px;
      height: 20px;
      background: #999;
      border: 10px solid #f7f7f7;
      position: absolute;
      top: -10px;
      left: -20px;
      border-radius: 50%;
    }
  }
}
</style>

<template>
  <div class="checkbox" v-if="showFlag">
    <div class="checkbox-picturebox">
      <canvas id="cvs1" :width="canvasWidth" :height="canvasHeight"></canvas>
      <canvas
        :style="{ left : cvs2Left+'px'}"
        id="cvs2"
        :width="canvasWidth"
        :height="canvasHeight"
      ></canvas>
    </div>
    <div class="checkbox-touchbox">
      <div :style="{width : baseWidth+'px'}" class="checkbox-touchbox-process"></div>
      <div
        :style="{left : ballLeft+'px'}"
        class="checkbox-touchbox-touchball"
        @touchstart="touchBegin($event)"
        @touchmove="touchMove($event)"
        @touchend="touchEnd"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showFlag: true,
      cvs2Left: 0,
      shadowSize: 0,
      randomX: 0,
      randomY: 0,
      canvasWidth: 0,
      canvasHeight: 0,
      boxWidth: 0,
      ballWidth: 0,
      ballLeft: -20,
      startX: 0
    }
  },
  props: {
    imgSrc: {
      type: String,
      default: ''
    },
    complateFunc: {
      type: Function,
      default: () => {
        console.log('ok!')
      }
    },
    hideFunc: {
      type: Function,
      default: () => { }
    }
  },
  mounted () {
    let dom = document.querySelector('.checkbox-touchbox-touchball');
    let canvas = document.querySelector('.checkbox-picturebox');
    if (dom) {
      this.ballWidth = dom.offsetWidth / 2;
      this.ballLeft = -dom.offsetWidth / 2
      this.canvasWidth = canvas.offsetWidth;
      this.canvasHeight = canvas.offsetHeight;
      this.boxWidth = document.querySelector('.checkbox-touchbox').offsetWidth
    }
    this.shadowSize = Math.floor((this.canvasWidth / 6) / 6 * 7);
    this.initAllCanvas();
    this.randomX = this.getRandomNum(80, this.canvasWidth - this.shadowSize);
    this.randomY = this.getRandomNum(30, this.canvasHeight - this.shadowSize);
    this.cvs2Left = -this.randomX + 2;
  },
  computed: {
    baseWidth () {
      return this.ballLeft + this.ballWidth;
    }
  },
  methods: {
    makeShow () {
      this.showFlag = true;
    },
    makeHide () {
      this.showFlag = false;
      this.complateFunc();
      this.hideFunc();
    },
    getRandomNum (min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    touchBegin (e) {
      this.startX = e.touches[0].pageX;
    },
    touchMove (e) {
      let nowX = e.touches[0].pageX;
      let moveX = nowX - this.startX;
      this.ballLeft += moveX;
      this.cvs2Left += moveX;
      if (this.ballLeft < -this.ballWidth) {
        this.ballLeft = -this.ballWidth
      }
      if (this.ballLeft > this.boxWidth - this.ballWidth) {
        this.ballLeft = this.boxWidth - this.ballWidth;
      }
      if (this.cvs2Left < (-this.randomX + 2)) {
        this.cvs2Left = -this.randomX + 2
      }
      if (this.cvs2Left > this.canvasWidth - this.randomX - this.shadowSize) {
        this.cvs2Left = this.canvasWidth - this.randomX - this.shadowSize;
      }
      this.startX = nowX;
    },
    touchEnd () {
      if (this.cvs2Left > -5 && this.cvs2Left < 5) {
        this.complateFunc(true);
        this.makeHide();
      } else {
        let processDom = document.querySelector('.checkbox-touchbox-process');
        let ballDom = document.querySelector('.checkbox-touchbox-touchball');
        let cvs2 = document.querySelector('#cvs2');
        processDom.style.transition = 'width 0.5s';
        ballDom.style.transition = 'left 0.5s';
        cvs2.style.transition = 'left 0.5s';
        this.ballLeft = -this.ballWidth;
        this.cvs2Left = -this.randomX + 2;
        setTimeout(() => {
          processDom.style.transition = null;
          ballDom.style.transition = null;
          cvs2.style.transition = null;
          this.complateFunc(false);
          this.makeHide();
        }, 500);
      }
    },
    drawLogo (ctx, x, y) {
      const size = this.canvasWidth / 6;
      ctx.beginPath();
      ctx.moveTo(x, y);
      x += Math.floor(size / 3)
      ctx.lineTo(x, y);
      x += Math.floor(size / 3) / 2;
      ctx.arc(x, y, Math.floor(size / 3) / 2, -Math.PI, 0);
      x += (size / 2);
      ctx.lineTo(x, y)
      y += Math.floor(size / 3);
      ctx.lineTo(x, y);
      y += Math.floor(size / 3) / 2;
      ctx.arc(x, y, Math.floor(size / 3) / 2, -Math.PI / 2, Math.PI / 2, true);
      y += (size / 2);
      ctx.lineTo(x, y);
      x -= size;
      ctx.lineTo(x, y);
      ctx.closePath()
      ctx.stroke()
    },
    initAllCanvas () {
      this.initCvs1();
      this.initCvs2();
    },
    initCvs1 () {
      let ctx = document.getElementById('cvs1').getContext('2d');
      let img = document.createElement('img');
      img.src = this.imgSrc;
      //img.src = 'http://i0.hdslb.com/bfs/archive/ffa59406d17b474f02730fbce48ba78378cb827d.jpg@320w_200h.webp';
      img.onload = () => {
        ctx.drawImage(img, 0, 0, this.canvasWidth, this.canvasHeight);
        ctx.stroke()
        this.drawLogo(ctx, this.randomX, this.randomY);
        ctx.fillStyle = '#333';
        ctx.fill()
      }
      img.onerror = () => {
        console.log('error')
      }
    },
    initCvs2 () {
      let ctx = document.getElementById('cvs2').getContext('2d');
      let img = document.createElement('img');
      img.src = this.imgSrc;
      img.onload = () => {
        this.drawLogo(ctx, this.randomX, this.randomY);
        ctx.clip()
        ctx.drawImage(img, 0, 0, this.canvasWidth, this.canvasHeight);
      }
      img.onerror = () => {
        console.log('error')
      }
    }
  }
}
</script>