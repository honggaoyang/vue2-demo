<template>
  <div>
    <el-card>
      <strong>事件总线</strong>
      <pre>
          1.全局注册组件
          Vue.prototype.$bus=new Vue()
          
          2.监听事件 一般在created() 里面监听 组件创建完成监听，先监听事件，当发出事件后立马执行
          this.$bus.$on('imgLoadOver', () => {
            console.log('------');
          });

          3.发射事件  当发射事件发出的时候，触发监听事件
          this.$bus.$emit('imgLoadOver');
      </pre>
      <el-button type="primary" @click="eventBtn">执行事件</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  created() {
    this.$bus.$on('imgLoadOver', () => {
      console.log('有人发送了一个事件');
    });
  },
  methods: {
    eventBtn() {
      this.$bus.$emit('imgLoadOver');
    },
  },
};
</script>

<style>
</style>