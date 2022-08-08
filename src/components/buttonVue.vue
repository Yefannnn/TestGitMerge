<template>
  <div>
    <div class="tools" v-show="disPlay">
      <a
        href="javascript:;"
        v-for="item in typeAllList"
        :key="item.id"
        @click="btnStart(item.type)"
        :aria-disabled="item.id === disableId ? true : false"
      >
        {{ item.name }}</a
      >
    </div>
    <input
      @mouseover="changeDispaly(true)"
      @mouseout="changeDispaly(false)"
      id="toolsBox"
      type="button"
      value="工具箱"
    />
    <video
      id="MediaShare"
      autoplay
      muted
      playsinline
      v-if="MediaShareDisplay"
    ></video>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      disPlay: false,
      timer: null,
      disableId: '',
      MediaShareDisplay: false,
      typeAllList: [
        {
          id: '1',
          name: '屏幕录制',
          type: 'MediaRecorder'
        },
        {
          id: '2',
          name: '屏幕共享',
          type: 'MediaShare'
        }
      ]
    }
  },
  methods: {
    async btnStart(type) {
      switch (type) {
        // 屏幕录制
        case 'MediaRecorder':
          // 生成一个视频媒体流
          var stream = await navigator.mediaDevices.getDisplayMedia({
            video: true
          })
          //   确定录制视频的编码流
          const mime = MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
            ? 'video/webm;codecs=vp9'
            : 'video/webm'

          // 创建一个媒体记录器实例
          let mediaRecorder = new MediaRecorder(stream, {
            mimeType: mime
          })
          // 监听媒体记录器的dataavailable事件
          let chunks = []
          mediaRecorder.addEventListener('dataavailable', (e) => {
            // 将数据push数组中
            chunks.push(e.data)
          })
          // 监听媒体记录器的停止事件
          mediaRecorder.addEventListener('stop', async () => {
            // 将数组中的数据转化成二进制数据
            let blob = new Blob(chunks, {
              type: chunks[0].type
            })
            console.log('blob', blob)
            // 将二进制数据转化成url地址
            let url = URL.createObjectURL(blob)
            console.log('url', url)
            // 创建 a 链接 ，自动跳转下载
            try {
              await this.$confirm('是否需要下载录制的视频？')
              let a = document.createElement('a')
              a.href = url
              a.download = 'video.webm'
              a.click()
            } catch (error) {
              this.$message.warning('已取消下载')
            }
          })
          mediaRecorder.start()

          break
        // 屏幕共享
        case 'MediaShare':
          // 获取媒体流
          let stream1 = await navigator.mediaDevices.getDisplayMedia({
            video: true
          })

          this.MediaShareDisplay = true
          this.$nextTick(() => {
            //  创建一个video
            const video = document.querySelector('#MediaShare')
            // console.log('video', video)
            video.srcObject = stream1
            console.log('video', video)
            stream1.getVideoTracks()[0].addEventListener('ended', () => {
              this.$message('共享结束~')
              this.disableId = '2'
              this.MediaShareDisplay = false
            })
          })

          break
      }
    },
    // 优化误触的情况
    changeDispaly(isDis) {
      this.timer = null
      if (isDis) {
        this.disPlay = isDis
      } else {
        this.timer = setTimeout(() => {
          this.disPlay = isDis
        }, 1500)
      }
    }
  }
}
</script>

<style>
/* 

let btn = document.querySelector('button')
        btn.addEventListener('click', async () => {
            // 选择媒体流video，生成mediaStream对象
            let stream = await navigator.mediaDevices.getDisplayMedia({
                video: true
            })
            console.log('stream', stream)
            // 确定录制的格式
            const mime = MediaRecorder.isTypeSupported('video/webm;codecs=vp9') ? 'video/webm;codecs=vp9' : 'video/webm'
            // 创建一个媒体记录器实例
            let mediaRecorder = new MediaRecorder(stream, {
                mimeType: mime
            })
            console.log('mediaRecorder', mediaRecorder)
            // 监听媒体记录器的dataavailable事件
            let chunks = []
            mediaRecorder.addEventListener('dataavailable', (e) => {
                // 将数据push数组中
                chunks.push(e.data)
            })
            // 监听媒体记录器的停止事件
            mediaRecorder.addEventListener('stop', () => {
                // 将数组中的数据转化成二进制数据
                let blob = new Blob(chunks, {
                    type: chunks[0].type
                })
                console.log('blob', blob)
                // 将二进制数据转化成url地址
                let url = URL.createObjectURL(blob)
                console.log('url', url)
                // 创建 a 链接 ，自动跳转下载
                let a = document.createElement('a')
                a.href = url
                a.download = 'video.webm'
                a.click()
            })
            mediaRecorder.start()
        })

 */
</style>
