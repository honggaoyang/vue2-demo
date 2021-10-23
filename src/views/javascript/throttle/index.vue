<template>
  <div>
    <strong>节流</strong>
    <p>
      一段时间内，只执行一次某个操作，过了这一段时间，还有操作的话，继续执行新的操作
    </p>
    <el-card>
      <p><strong>1、滚动节流</strong></p>
      <div class="scrollBox">
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </div>
    </el-card>

    <el-card>
      <p><strong>2、拖动</strong></p>
      <div class="divBox">
        <div>
          <p id="ppp" draggable="true" @dragstart="drag($event)">
            我可以被拖动
          </p>
        </div>
        <div id="ddd" @drop="drop($event)" @dragover="allowDrop($event)"></div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  mounted() {
    this.scroll();
  },
  methods: {
    //节流函数
    throttle(fun, delay = 1000) {
      let timer = null;
      return function () {
        if (timer) {
          return;
        }
        timer = setTimeout(() => {
          fun();
          timer = null;
        }, delay);
      };
    },
    scroll() {
      let scrEl = document.querySelector('.scrollBox');
      scrEl.addEventListener(
        'scroll',
        this.throttle(function () {
          // console.log(scrEl.scrollTop);
          console.log(1);
        }, 500)
      );
    },
  

    
    drag(ev) {
      ev.dataTransfer.setData('Text', ev.target.id);
    },
    allowDrop(ev) {
      console.log(1);
      ev.preventDefault();
    },
    drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData('Text');
      ev.target.appendChild(document.getElementById(data));
    },
  },
};
</script>

<style scoped>
.scrollBox {
  width: 100%;
  height: 300px;
  background-color: darkseagreen;
  overflow: auto;
}
.divBox {
  display: flex;
}
.divBox div {
  margin-right: 50px;
  width: 150px;
  height: 100px;
  background: darkturquoise;
  display: flex;
  align-items: center;
  justify-content: center;
}
.divBox div:nth-child(1) {
  background: lightcoral;
}
</style>