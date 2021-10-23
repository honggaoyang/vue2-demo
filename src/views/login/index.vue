<template>
  <div>
    <!-- <div style="height:1400px"></div> -->
    <button @click="handleLogin">登录</button></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleLogin() {
      this.$router.push('/home');
    },
  },
};
</script>

<style scoped>
</style>