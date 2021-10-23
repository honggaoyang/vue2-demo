<template>
  <div>
    <el-card>
        只有在全局下才可以起作用，body有滚动条才可以，
        <pre>
            scrollBehavior(to, from, savedPosition) {
                // return 期望滚动到哪个的位置
                console.log(savedPosition);
                return {y:200}
            }
        </pre>
    </el-card>
    <div class="title">平滑滚动</div>
    <div id="nav">
      <router-link :to="{ path: '/scroll/menu1',hash:'#nav' }">菜单1</router-link>
      <router-link :to="{ path: '/scroll/menu2',hash:'#nav' }">菜单2</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
}
</style>