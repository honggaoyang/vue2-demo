<template>
  <div>
    <el-card>用-key-管理可复用的元素</el-card>
    <p v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" />
    </p>
    <p v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" />
    </p>
    <el-button type="primary" @click="toggleBtn">切换</el-button>
    <p>上面是没有添加key的，文本框输入内容后点击切换内容被复用了</p>

    <p v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="userName" />
    </p>
    <p v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="Email" />
    </p>
    <p>这个是添加key的，文本框输入内容点击切换内容被清空了</p>
    <el-card>
      <p>编程式导航菜单传过来的query参数：{{$route.query}}</p>
      <p>编程式导航菜单传过来的params参数：{{$route.params}}</p>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginType: 'username',
    };
  },
  methods: {
    toggleBtn() {
      if (this.loginType === 'username') {
        this.loginType = 'email';
      } else {
        this.loginType = 'username';
      }
    },
  },
};
</script>

<style>
</style>