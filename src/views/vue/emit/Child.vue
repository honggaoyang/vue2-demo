<template>
  <div>
    <strong>子组件</strong>
    <p>userId：{{ userId }}</p>
    <p>userName：{{ userName }}</p>
    <p>userAge：{{ userAge }}</p>
    <el-button type="primary" @click="byVal">把年龄传给父组件</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: 8,
      userName: 'zs',
      userAge: 25,
    };
  },
  created() {
    this.$emit('toParent', { userId: this.userId, userName: this.userName });
  },

  methods: {
    byVal() {
      this.$emit('ageEvent', { userAge: this.userAge });
    },
  },
};
</script>

<style>
</style>