<template>
  <el-aside :width="isCollapse ? '64px' : '200px'">
    <el-menu
      :default-active="this.$route.path"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened="true"
      :router="true"
      :collapse="isCollapse"
      :collapse-transition="false"
    >
      <div class="toggleBtn" @click="handleToggle">
        <i class="el-icon-s-fold"></i>
      </div>
      <template v-for="route in routes">
        <!-- 【1】有二级标题 并且 hidden=false-->
        <el-submenu
          :index="route.path"
          v-if="!route.hidden && route.children && route.children.length > 1"
          :key="route.path"
          :disabled="route.meta.disabled ? true : false"
        >
          <template slot="title">
            <i :class="route.meta.icon"></i>
            <span> {{ route.meta.title }}</span>
          </template>
          <template v-for="subRoute in route.children">
            <!-- 【2】有二级标题 并且 hidden=false-->
            <el-submenu
              v-if="!subRoute.hidden && subRoute.children"
              :key="subRoute.path"
              :index="subRoute.path"
              :disabled="subRoute.meta.disabled ? true : false"
            >
              <template slot="title">
                <i :class="subRoute.meta.icon"></i>
                <span> {{ subRoute.meta.title }}</span>
              </template>
              <!-- 【3】三级标题-->
              <el-menu-item
                v-for="TSubRoute in subRoute.children"
                :key="TSubRoute.path"
                :index="TSubRoute.path"
                :disabled="TSubRoute.meta.disabled ? true : false"
              >
                <template slot="title">
                  <i :class="TSubRoute.meta.icon"></i>
                  <span> {{ TSubRoute.meta.title }}</span>
                </template>
              </el-menu-item>
            </el-submenu>
            <!-- 【2】没有二级标题 并且 hidden=false-->
            <el-menu-item
              v-else-if="!subRoute.hidden && !subRoute.children"
              :key="subRoute.path"
              :index="subRoute.path"
              :disabled="subRoute.meta.disabled ? true : false"
            >
              <template slot="title">
                <i :class="subRoute.meta.icon"></i>
                <span> {{ subRoute.meta.title }}</span>
              </template>
            </el-menu-item>
          </template>
        </el-submenu>

        <!-- 【1】没有二级标题 并且 hidden=false-->

        <el-menu-item
          v-else-if="!route.hidden"
          :key="route.path"
          :index="route.path"
          :disabled="route.meta.disabled ? true : false"
        >
          <i :class="route.meta.icon"></i>
          <span slot="title"> {{ route.meta.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      //是否折叠侧边栏
      isCollapse: false,
    };
  },
  computed: {
    //获取路由
    routes() {
      // console.log(this.$router.options.routes);
      return this.$router.options.routes;
    },
  },
  methods: {
    //侧边栏菜单折叠
    handleToggle() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style scoped>
.el-menu {
  border-right: none;
}

.el-aside {
  background-color: #545c64;
}

.toggleBtn {
  text-align: center;
  color: #fff;
  font-size: 20px;
  background-color: red;
  cursor: pointer;
}
</style>