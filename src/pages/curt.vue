<template>
  <div>
    <div>
      <el-button @click="openPreview(0)" style="margin-bottom: 20px"
        >打开图片裁剪</el-button
      >
      <p>
        <img
          width="200px"
          style="margin-right: 20px"
          v-for="(d, index) of datas"
          :key="index"
          :src="d.thumbUrl"
          @click="openPreview(index)"
        />
      </p>
      <div>
        <h3>裁剪图片</h3>
        <img :src="src" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: '',
      datas: [
        // { thumbUrl: `/images/logo.png`, url: `/images/logo.png` },
        {
          thumbUrl: `https://img.alicdn.com/tfs/TB1uevcCrj1gK0jSZFuXXcrHpXa-1880-640.jpg`,
          url: `https://img.alicdn.com/tfs/TB1uevcCrj1gK0jSZFuXXcrHpXa-1880-640.jpg`
        },
        {
          thumbUrl: `https://img.alicdn.com/tfs/TB1v28TC8v0gK0jSZKbXXbK2FXa-1880-640.jpg`,
          url: `https://img.alicdn.com/tfs/TB1v28TC8v0gK0jSZKbXXbK2FXa-1880-640.jpg`
        }
      ]
    }
  },
  methods: {
    openPreview(index = 0) {
      //   this.$ImageCropper()
      this.$ImageCropper({
        img: this.datas[index].thumbUrl,
        // autoCrop: true,
        // autoCropWidth: 100,
        // autoCropHeight: 100,
        // fixed: true,
        // fixedNumber: [100, 100],
        type: 'base64',
        callback: (res) => {
          console.log(res)
          this.src = res
        },
        cancel: () => {
          this.$message.success('取消了')
        }
      })
    }
  }
}
</script>

<style lang="less">
.avue-dialog .el-dialog {
  min-height: 500px;
}
</style>
