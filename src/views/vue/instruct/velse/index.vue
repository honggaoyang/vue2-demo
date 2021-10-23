<template>
  <div>
    <p v-if="isShow">男</p>
    <p v-else>女</p>
    <el-button type="primary" @click="toggleBtn">切换</el-button>

    <p>{{ random }}</p>
    <p v-if="random > 0.5">我大于0.5</p>
    <p v-else>我小于0.5</p>
    <el-button type="primary" @click="randomBtn">切换随机数</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      random: Math.random(),
    };
  },
  methods: {
    toggleBtn() {
      this.isShow = !this.isShow;
    },
    randomBtn() {
      // this.$message({ message: '恭喜你，这是一条成功消息', type: 'success' });
      this.random = Math.random();
    },
  },
};
</script>

<style scoped>
</style>