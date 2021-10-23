<template>
  <div>
    <!-- 模版 -->
    <router-view />
  </div>
</template>


<script>
export default {
  data () {
    return {
      
    }
  },
  watch: {
    $router:function(){
      console.log(1212);
    }
  }
}
</script>