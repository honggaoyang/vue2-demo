<template>
  <div>
    <el-card>
      <p><strong>自定义指令</strong></p>
      <pre>
        export default {
          directives: {
            focus: {
              // 指令的定义
              inserted: function (el) {
                el.focus();
              },
            },
          },
        };


        使用 v-focus
      </pre>
      <p>文本框自动获取焦点和默认值v-focus v-val</p>
      <input type="text" v-focus v-val />

      <p v-bg="color">设置背景色</p>
    </el-card>

    <el-card>
      <strong>钩子函数</strong>
      <p>
        bind
        只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
      </p>
      <p>
        inserted 被绑定元素插入父节点时调用
        (仅保证父节点存在，但不一定已被插入文档中)。
      </p>
      <p>
        update 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode
        更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
        (详细的钩子函数参数见下)。
      </p>
      <p>componentUpdated 指令所在组件的 VNode 及其子 VNode 全部更新后调用。</p>
      <p>unbind 只调用一次，指令与元素解绑时调用。</p>
    </el-card>

    <el-card>
      <strong>钩子函数参数</strong>
      <p>el：元素，可以直接操作DOM</p>
      <p>
        binding：对象包含以下
        property，name、value、oldValue、expression、arg、modifiers
      </p>
      <p>vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。</p>
      <p>
        oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
      </p>
    </el-card>

    <el-card>
      <strong>动态指令参数</strong>
      <p v-fixed:bottom="20">我是一个p标签</p>
    </el-card>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      color: 'blue',
      fontSize: '20px',
    };
  },
  directives: {
    //自动获取焦点
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus();
      },
    },
    //默认值
    val: {
      // 指令的定义
      inserted: function (el) {
        el.value = '我是默认值';
      },
    },
    //设置背景颜色
    bg: {
      bind: function (el, binding) {
        el.style.color = binding.value;
      },
    },

    // 动态指令参数
    fixed: {
      bind: function (el, binding) {
        el.style.position = 'fixed';
        // var s = binding.arg == 'left' ? 'left' : 'top';
        el.style[binding.arg] = binding.value + 'px';
      },
    },
  },
};
</script>

<style>
</style>