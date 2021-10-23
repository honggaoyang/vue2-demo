<template>
  <div>
    <strong>防抖</strong>
    <p>频繁调用函数，只显示最后一次结果</p>
    <el-card>
      <p><strong>1、滚动防抖</strong></p>
      <div class="box">
        <pre>
          //滚动函数
          scroll() {
            //获取元素
            let el = document.querySelector('.box');

            //监听元素滚动事件
            el.addEventListener(
              'scroll',
              this.debounce(function () {
                //打印滚动条距离顶部的距离
                console.log(el.scrollTop);
              })
            );
          },
          //处理防抖函数
          debounce(fun) {
            let timer = null;
            return function () {
              //如果 timer 有值，清除timer事件
              if (timer) {
                clearTimeout(timer);
              }
              timer = setTimeout(() => {
                fun();
              }, 500);
            };
          },
        </pre>
      </div> 
    </el-card>

    <el-card>
      <p><strong>2、input 输入框</strong></p>
      <p>监听用户输入，输入完成后发送请求，用户输入完成，只发送一次请求,</p>
      <p><input type="text" id="ipt" /></p>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  mounted() {
    this.scroll();

    this.ser();
  },
  methods: {
    //滚动函数
    scroll() {
      //获取元素
      let el = document.querySelector('.box');

      //监听元素滚动事件
      el.addEventListener(
        'scroll',
        this.debounce(function () { 
          
          //打印滚动条距离顶部的距离
          console.log(el.scrollTop); 
        })
      );
    },
    //处理防抖函数
    debounce(fun) {
      let timer = null;
      return function () {
        //如果 timer 有值，清除timer事件
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          fun();
        }, 500);
      };
    },

    /**
     * -------------------------------------------------------------------------------
     */

    //input处理防抖函数
    debounceInput(fun) {
      let timer = null;

      // 因为 addEventListener 第二个参数是函数，所以我们返回一个函数
      return function () {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          //debounceInput传的函数，我们执行下函数
          fun.apply(this, arguments);
        }, 500);
      };
    },
    //input 监听输入事件
    ser() {
      document.getElementById('ipt').addEventListener(
        'input', 
        this.debounceInput(function (event) {
          console.log(this);
          console.log(event);
          console.log('发送请求...');
        })
      );
    },
  },
};
</script>

<style scoped>
.box {
  background-color: darkcyan;
  width: 100%;
  height: 300px;
  border-radius: 3px;
  overflow: auto;
  color: #fff;
}
</style>