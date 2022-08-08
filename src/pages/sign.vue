<template>
  <div>
    <div>sign页面组件</div>
    <avue-sign ref="sign"></avue-sign>
    <el-button type="primary" @click="handleSubmit">生成</el-button>
    <el-button
      type="danger"
      @click="
        $refs.sign.getStar(
          '黑马金牌讲师',
          '江苏省南京市黑马程序员',
          '2022年8月5日'
        )
      "
      >图章</el-button
    >
    <el-button @click="$refs.sign.clear()">清空</el-button>
    <div>
      <br />
      结果
      <img :src="img" alt="" width="80" height="50" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: ''
    }
  },
  methods: {
    handleSubmit() {
      this.img = this.$refs.sign.submit(80, 50)
      //   这里内部做了一些base64的转化
      console.log(this.img)
    }
  }
}
</script>

<style></style>
