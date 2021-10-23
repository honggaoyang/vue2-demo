<template>
  <div>
    <el-card>
      <strong>子组件访问父组件属性和方法 parent</strong>
      <p>this.$parent.$parent.属性名称或方法名称</p>
    </el-card>

    <el-card>
      <strong>父组件</strong>
      <p>用户名：{{ userName }}</p>
      <el-button type="primary" @click="setName">修改用户名</el-button>
    </el-card>

    <el-card>
      <child></child>
    </el-card>

    <p><strong>或者使用 root 访问跟组件</strong></p>
    <p>使用element ui 框架会影响 parent 层级</p>
    <el-button @click="useRoot" type="danger">用 root 获取</el-button> 
  </div>
</template>

<script>
import Child from './Child.vue';
export default {
  components: { Child },
  data() {
    return {
      userName: 'zhangsan',
    };
  },
  methods: {
    setName() {
      this.userName = 'wangwu';
    },
    useRoot(){
      console.log(this.$root);
    }
  },
};
</script>

<style>
</style>