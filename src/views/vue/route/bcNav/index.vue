<template>
  <div>
    <!-- router、routes、route的区别 -->
    <el-card>
      <strong>router、routes、route的区别</strong>
      <p>
        1、router：路由器对象（new的路由器对象），包含一些操作路由的功能函数，来实现编程式导航。一般指的是在任何组件内访问路由。如：路由编程式导航的$router.push()
      </p>
      <p>
        2、routes：指创建vue-router路由实例的配置项。用来配置多个route路由对象
      </p>
      <p>
        3、route：指路由对象表示当前激活的路由的状态信息。如：this.$route指的是当前路由对象，path/meta/query/params
      </p>
    </el-card>
    <!-- 声明式导航 -->
    <el-card>
      <strong>声明式导航 router-link 会生成a标签</strong>
      <p>router-link 等同于router.push()</p>
      <p><router-link to="/key">声明式导航</router-link></p>
    </el-card>
    <!-- 编程式导航 -->
    <el-card>
      <strong>编程式导航</strong>
      <p>一、this.$router.replace() 它不会向 history 添加新记录，不能后退</p>
      <p>
        二、this.$router.push() 这个方法会向 history
        栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。
      </p>
      <p>
        <el-button @click="$router.push('/key')">编程式导航</el-button>
        <el-button @click="tokeyPush" type="primary"
          >编程式导航push 有历史记录</el-button
        >
        <el-button @click="tokeyReplace" type="primary"
          >编程式导航replace 无历史记录</el-button
        >
      </p>
      <p>该方法的参数可以是一个字符串路径，或者一个描述地址的对象。例如：</p>
      <pre>
        // 字符串
        router.push('home')

        // 对象
        router.push({ path: 'home' })

        // 命名的路由 router里面配置的name名字 params 动态路径参数，以冒号开头 ，
        如果路由里面配置了/user/:userId 在地址栏显示，如果不配置不在地址栏显示，在页面也可以使用params拿到传过来的参数
        router.push({ name: 'user', params: { userId: '123' }})

        // 带查询参数，变成 /register?plan=private
        router.push({ path: 'register', query: { plan: 'private' }}) 
      </pre>
      <p>
        <el-button @click="queryBtn" type="warning">query 参数</el-button>
        <el-button @click="paramsBtn" type="warning">params 参数</el-button>
      </p>
      <p>注意：如果提供了 path，params 会被忽略</p>
      <pre>
        const userId = '123'

        router.push({ name: 'user', params: { userId }}) ====> /user/123

        router.push({ path: `/user/${userId}` }) ====> /user/123

        // 这里的 params 不生效
        router.push({ path: '/user', params: { userId }}) ====> /user
      </pre>
      <p>同样的规则也适用于 router-link 组件的 to 属性。</p>
    </el-card>
    <el-card>
      <strong>router.go</strong>
      <p>
        这个方法的参数是一个整数，意思是在 history
        记录中向前或者后退多少步，类似 window.history.go(n)
      </p>
      <pre>
        // 在浏览器记录中前进一步，等同于 history.forward()
        router.go(1)

        // 后退一步记录，等同于 history.back()
        router.go(-1)

        // 前进 3 步记录
        router.go(3)

        // 如果 history 记录不够用，那就默默地失败呗
        router.go(-100)
        router.go(100)  
      </pre>
      <el-button @click="$router.go(1)" type="primary">前进一步</el-button>
      <el-button @click="$router.go(-1)" type="primary">后退一步</el-button>
      <el-button @click="$router.go(-3)" type="primary">后退三步</el-button>
      <el-button @click="$router.go(-100)" type="primary">后退100步</el-button>
    </el-card>
    <el-card>
      <strong>操作 History</strong>
      <pre>
        你也许注意到 router.push、 router.replace 和 router.go 跟 

        window.history.pushState、 window.history.replaceState 和 window.history.go (opens new window)好像，实际上它们确实是效仿 window.history API 的。
        

        因此，如果你已经熟悉 Browser History APIs (opens new window)，那么在 Vue Router 中操作 history 就是超级简单的。

        还有值得提及的，Vue Router 的导航方法 (push、 replace、 go) 在各类路由模式 (history、 hash 和 abstract) 下表现一致。
      </pre>
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    tokeyPush() {
      // 对象
      this.$router.push({ path: '/key' });
    },
    tokeyReplace() {
      //字符串
      this.$router.replace('/key');
    },
    queryBtn() {
      // query参数，变成 /key?id=666
      this.$router.push({ path: '/key', query: { id: '666' } });
    },
    paramsBtn() {
      // params参数 name router.js 里面配置的name名字  params 动态路由配置的
      this.$router.push({ name: 'vueKey', params: { id: '888' } });
    },
  },
};
</script>

<style>
</style>