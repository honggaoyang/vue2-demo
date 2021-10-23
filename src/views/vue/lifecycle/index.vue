<template>
  <div>
    <el-card>
      <p>创建之前：beforeCreate</p>
      <p>创建完成：created</p>
      <p>挂载之前：beforeMount</p>
      <p>挂载完成：mounted</p>
      <p>更新之前：beforeUpdate</p>
      <p>更新完成：updated</p>
      <p>销毁之前：beforeDestroy</p>
      <p>销毁完成：destroyed</p>
    </el-card>

    <p>{{ message }}</p>
    <el-button type="primary" @click="editMsg">修改</el-button>
    <el-button type="primary" @click="destroyMsg">销毁</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '生命周期',
    };
  },
  methods: {
    editMsg() {
      this.message = '我是被修改的message';
    },
    destroyMsg() {
      this.$router.push('/key');
    },
  },
  //创建前
  beforeCreate() {
    console.group('beforeCreate 创建前状态===============>');
    console.log('%c%s', 'color:blue', 'el     : ' + this.$el); //undefined
    console.log('%c%s', 'color:red', 'data   : ' + this.$data); //undefined
    console.log('%c%s', 'color:orange', 'message: ' + this.message); //undefined
  },
  // 创建完成
  created() {
    console.group('created 创建完毕状态===============>');
    console.log('%c%s', 'color:red', 'el     : ' + this.$el); //undefined
    console.log('%c%s', 'color:red', 'data   : ' + this.$data); //已被初始化 [object Object]
    console.log('%c%s', 'color:red', 'message: ' + this.message); //已被初始化 生命周期
  },
  // 挂载前
  beforeMount() {
    console.group('beforeMount 挂载前状态===============>');
    console.log('%c%s', 'color:red', 'el     : ' + this.$el); //undefined
    console.log('%c%s', 'color:red', 'data   : ' + this.$data); //已被初始化 [object Object]
    console.log('%c%s', 'color:red', 'message: ' + this.message); //已被初始化 生命周期
  },
  // 挂载完成
  mounted() {
    console.group('mounted 挂载结束状态===============>');
    console.log('%c%s', 'color:red', 'el     : ' + this.$el); //已被初始化 [object HTMLDivElement]
    console.log('%c%s', 'color:red', 'data   : ' + this.$data); //已被初始化 [object Object]
    console.log('%c%s', 'color:red', 'message: ' + this.message); //已被初始化 生命周期
  },
  // 更新前
  beforeUpdate() {
    console.group('beforeUpdate 更新前状态===============>');
    console.log('%c%s', 'color:red', 'el     : ' + this.$el);
    console.log('%c%s', 'color:red', 'data   : ' + this.$data);
    console.log('%c%s', 'color:red', 'message: ' + this.message);
  },
  // 更新完成
  updated() {
    console.group('updated 更新完成状态===============>');
    console.log('%c%s', 'color:red', 'el     : ' + this.$el);
    console.log('%c%s', 'color:red', 'data   : ' + this.$data);
    console.log('%c%s', 'color:red', 'message: ' + this.message);
  },
  // 销毁前
  beforeDestroy() {
    console.group('beforeDestroy 销毁前状态===============>');
    console.log('%c%s', 'color:red', 'el     : ' + this.$el);
    console.log('%c%s', 'color:red', 'data   : ' + this.$data);
    console.log('%c%s', 'color:red', 'message: ' + this.message);
  },
  // 销毁完成
  destroyed() {
    console.group('destroyed 销毁完成状态===============>');
    console.log('%c%s', 'color:red', 'el     : ' + this.$el);
    console.log('%c%s', 'color:red', 'data   : ' + this.$data);
    console.log('%c%s', 'color:red', 'message: ' + this.message);
  },
};
</script>

<style scoped>
</style>