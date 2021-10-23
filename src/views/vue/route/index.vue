<template>
  <div>
    <router-view :key="key" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style>
</style>