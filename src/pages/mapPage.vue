<template>
  <div>
    <div class="mapaddress">
      <!-- <h3>地图 --- Vue Baidu Map</h3>
      <mapAddress></mapAddress> -->
      <h3>原生逆解析 ---</h3>
      <p>属性1 animate 可以用来调整标记点的动画 设置布尔值 默认 false</p>
      <p>属性2 dragging 可以控制marker标记是否可拖拽 布尔值 默认false</p>
      <p>属性3 icon 改变标记点图标 图片对象 默认无}</p>
      <p>属性4 是否需要边框 布尔值 默认false</p>
      <p>事件1 dragend 移动标记结束触发</p>
      <myAddress
        center="南京市建邺区中和路101号"
        :animate="true"
        :dragging="true"
        :icon="iconPath"
        @dragend="dragend"
        :showAddressBar="false"
        :autoLocation="false"
      ></myAddress>
    </div>
    <myDivers :start="diverServe.start" :end="diverServe.end"></myDivers>
  </div>
</template>

<script>
import mapAddress from '@/components/MapAddress.vue'
import myAddress from '@/components/myAddress.vue'
import myDivers from '@/components/myDivers.vue'
export default {
  components: {
    mapAddress,
    myAddress,
    myDivers
  },
  data() {
    return {
      iconPath: {
        url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif',
        size: { width: 300, height: 157 }
      },
      diverServe: {
        start: {
          city: '南京市',
          point: '雨花台区三鸿路'
        },
        end: {
          city: '南京市',
          point: '建邺区中和路101号'
        }
      }
    }
  },
  methods: {
    dragend({ type, target, pixel, point }) {
      console.log('point', point)
      // 通过point 拿到标记点移动后的位置
      this.$message.success('标记点目前的位置是' + point.lat + ',' + point.lng)
    }
  }
}
</script>

<style></style>
