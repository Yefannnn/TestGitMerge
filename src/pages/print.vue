<template>
  <div>
    <el-button type="primary" @click="handlePrint">打印全部</el-button>
    <el-button type="primary" @click="handlePrint1">打印局部</el-button>
    <el-button type="primary" @click="handlePrint2">打印DOM</el-button>

    <div id="test">
      <h2 style="color: red">我是测试字段</h2>
      <h2 style="color: red">我是测试字段</h2>
      <h2 style="color: red">我是测试字段</h2>
      <h2 style="color: red">我是测试字段</h2>
      <h2 style="color: red">我是测试字段</h2>
      <h2 style="color: red">我是测试字段</h2>
      <h2 style="color: red">我是测试字段</h2>
      <h2 style="color: red">我是测试字段</h2>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handlePrint() {
      this.$Print('#app')
    },
    handlePrint1() {
      this.$Print('#test')
    },
    handlePrint2() {
      this.$Print(document.querySelector('.logo'))
    }
  }
}
</script>

<style></style>
