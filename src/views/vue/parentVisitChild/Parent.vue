<template>
  <div>
    <el-card>
      <strong>父组件访问子组件属性和方法 refs</strong>
      <p>1、在子组件标签上添加ref引用属性 ref="chd"</p>
      <p>2、在父组件页面直接使用this.$refs.chd.属性名或方法名</p>
    </el-card>

    <el-card>
      <strong>父组件</strong>
      <p>子组件的用户名：{{ userName }}</p>
      <el-button type="primary" @click="getName">获取子组件用户名</el-button>
      <el-button type="primary" @click="editChildName"
        >修改子组件用户名</el-button
      >
    </el-card>

    <el-card>
      <child ref="chd"></child>
    </el-card>

    <p><strong>或者使用children 方法</strong></p> 
    <p>使用element ui 框架会影响 children 层级
    </p>
    <el-button @click="useChild"  type="danger">用children 获取</el-button>
  </div>
</template>

<script>
import Child from './Child.vue';
export default {
  components: { Child },
  data() {
    return {
      userName: '',
    };
  },
  methods: {
    getName() {
      console.log(this.$children);
      this.userName = this.$refs.chd.userName;
    },
    editChildName() {
      //调用子组件方法
      this.$refs.chd.setName();
    },
    useChild(){
      console.log(this.$children);
    }
  },
};
</script>

<style>
</style>