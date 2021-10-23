<template>
  <div>
    <strong>子组件</strong>
    <p>父组件传过来的值</p>
    <p>用户列表：{{ userList }}</p>
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}</p>
  </div>
</template>

<script>
export default {
  props: ['userList', 'name', 'age'],
};
</script>

<style>
</style>