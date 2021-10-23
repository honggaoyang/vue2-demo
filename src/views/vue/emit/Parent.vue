<template>
  <div>
    <el-card>
      <strong>子向父传值 emit</strong>
      <p>1、在子组件通过 emit 发射一个事件 this.$emit(事件名称,参数值);</p>
      <p>
        2、在父组件页面，在子组件标签上接收一个事件，@事件名称='自定义名称'
        自定义名称不用带括号
      </p>
      <p>3、自定义方法写上getInfo(obj) 函数名称，接收传过来的值</p>
    </el-card>

    <!-- 父组件 -->
    <el-card>
      <strong>父组件</strong>
      <p>userId：{{ id }}</p>
      <p>userName：{{ name }}</p>
      <p>userAge：{{ age }}</p>
    </el-card>

    <!-- 子组件 -->
    <el-card>
      <child @toParent="getInfo" @ageEvent="getAge" />
    </el-card>
  </div>
</template>

<script>
import Child from './Child.vue';
export default {
  components: { Child },
  data() {
    return {
      id: '',
      name: '',
      age: '',
    };
  },
  methods: {
    getInfo(obj) {
      this.id = obj.userId;
      this.name = obj.userName;
    },
    getAge(info) {
      this.age = info.userAge;
    },
  },
};
</script>

<style>
</style>