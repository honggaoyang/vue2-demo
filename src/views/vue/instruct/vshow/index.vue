<template>
  <div>
    <el-card>
      一般来说，v-if 有更高的切换开销，而 v-show
      有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show
      较好；如果在运行时条件很少改变，则使用 v-if 较好。
    </el-card>
    <el-button type="primary" @click="toggleBtn">切换</el-button>
    <h1 v-show="isShow">Hello!</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    toggleBtn() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
</style>