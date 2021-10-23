<template>
  <div>
    <el-card>
      <strong>父向子传值 props</strong>
      <p>
        1、在子组件标签上面添加动态属性 -- 例如 :nianling='age' （:nianling
        子组件接受的属性名，age要传过去的值）
      </p>
      <p>2、在子组件页面使用props: ['nianling'], 接收</p>
      <p>3、使用nianling 就可以拿到传过来的值</p>
    </el-card>
    <el-card>
      <!-- 父组件 -->
      <strong>父组件</strong>
      <p>用户列表：{{ userList }}</p>
      <p>姓名：{{ userName }}</p>
      <p>年龄：{{ age }}</p>
    </el-card>

    <el-card>
      <!-- 使用组件 -->
      <child :userList="userList" :name="userName" :age="age"></child>
    </el-card>
  </div>
</template>

<script>
//引入组件
import child from './Child';
export default {
  //注册组件
  components: { child },
  data() {
    return {
      userList: [
        { id: '1', name: '张三' },
        { id: '2', name: '李四' },
      ],
      userName: '张三',
      age: 19,
    };
  },
};
</script>

<style>
</style>