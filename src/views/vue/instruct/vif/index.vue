<template>
  <div>
    <el-card>
       v-if 控制显示与隐藏 
    </el-card>
    <el-button type="primary" @click="showBtn">显示</el-button>
    <el-button type="success" @click="hiddeBtn">隐藏</el-button>
    <el-button type="warning" @click="toggleBtn">显示隐藏</el-button>

    <p v-if="isShow">你们看到我了</p>

    
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
    showBtn() {
      this.isShow = true;
    },
    hiddeBtn() {
      this.isShow = false;
    },
    toggleBtn() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
</style>