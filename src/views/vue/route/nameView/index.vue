<template>
  <div>
    <el-card>
      <strong>命名视图</strong>
      <p>
        同级展示多个视图，而不是嵌套展示。例如：企业官网header、content、footer
        三个视图，这个时候命名视图就派上用场了。如果router-view
        没有设置名字，那么默认为default
      </p>
      <pre>
        {{ msg }}
      </pre>
      <p>
        一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。确保正确使用
        components 配置 (带上 s)：
      </p>
      <pre>
        const router = new VueRouter({
          routes: [
            {
              path: 'website',
              components: {
                default: () => import('@/views/vue/route/nameView/header'),
                content: () => import('@/views/vue/route/nameView/content'),
                footer: () => import('@/views/vue/route/nameView/footer')
              }
            }
          ]
        })
      </pre>
    </el-card>
    <p>
      <el-button type="primary" @click="$router.push('/nameView/website')"
        >显示命名视图</el-button
      >
    </p>
    <router-view class="head"></router-view>
    <router-view class="cont" name="content"></router-view>
    <router-view class="foot" name="footer"></router-view>

    <el-card>
      <strong>嵌套命名视图</strong>
      <p>
        我们也有可能使用命名视图创建嵌套视图的复杂布局。这时你也需要命名用到的嵌套
        router-view 组件。我们以一个设置面板为例：
      </p>
      <pre>
        /settings/emails                                       /settings/profile
        +-----------------------------------+                  +------------------------------+
        | UserSettings                      |                  | UserSettings                 |
        | +-----+-------------------------+ |                  | +-----+--------------------+ |
        | | Nav | UserEmailsSubscriptions | |  +------------>  | | Nav | UserProfile        | |
        | |     +-------------------------+ |                  | |     +--------------------+ |
        | |     |                         | |                  | |     | UserProfilePreview | |
        | +-----+-------------------------+ |                  | +-----+--------------------+ |
        +-----------------------------------+                  +------------------------------+


        //嵌套命名视图
        {{ msg2 }}

        {{ msg3 }}
      </pre>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: `<router-view class="head"></router-view>

      <router-view class="cont" name="content"></router-view>
      
      <router-view class="foot" name="footer"></router-view>`,
      msg2: `
      <div>
        <h1>User Settings</h1>
        <NavBar/>
        <router-view/>
        <router-view name="helper"/>
      </div>`,
      msg3: `
      {
        path: '/settings',
        // 你也可以在顶级路由就配置命名视图
        component: UserSettings,
        children: [{
          path: 'emails',
          component: UserEmailsSubscriptions
        }, {
          path: 'profile',
          components: {
            default: UserProfile,
            helper: UserProfilePreview
          }
        }]
      }`,
    };
  },
};
</script>

<style scoped>
</style>