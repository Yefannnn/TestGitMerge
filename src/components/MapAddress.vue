<template>
  <div>
    <!-- 封装一个地图  需要实现父组件输入一个地址信息，就立即生成地图 -->
    <baidu-map
      class="bm-view"
      :center="center"
      :zoom="zoom"
      @ready="handler"
      showZoomInfo
    >
      <bm-marker
        :position="center"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
        @dragend="endMarker"
      ></bm-marker>
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    </baidu-map>
  </div>
</template>

<script>
export default {
  name: 'MapAddress',
  data() {
    return {
      center: { lng: 116.404, lat: 39.915 },
      zoom: 16,
      markerPoint: { lng: 0, lat: 0 }
    }
  },
  mounted() {},
  methods: {
    handler({ BMap, map }) {
      console.log('map', map)
      // this.center.lng = 116.404
      // this.center.lat = 39.915
      // this.zoom = 15
    },
    endMarker(val) {
      // console.log('标记点移动了 ', val.point)
      this.markerPoint = val.point
      // 在这里可以重新获取标记点的坐标
      // 创建一个编码器实例
      let geocoder = new BMap.Geocoder()
      geocoder.getLocation(this.markerPoint, (res) => {
        console.log(res)
        this.$message.success(
          '您目前所在的位置是' +
            res.address +
            '坐标是' +
            res.point.lng +
            ',' +
            res.point.lat
        )
      })
    }
  }
}
</script>

<style scoped>
.bm-view {
  width: 600px;
  height: 400px;
}
</style>
