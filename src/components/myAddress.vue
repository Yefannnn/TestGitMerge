<template>
  <baidu-map class="map" :zoom="15" :scroll-wheel-zoom="true" @ready="handler">
    <bm-geolocation
      anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
      :showAddressBar="this.$attrs.showAddressBar"
      :autoLocation="this.$attrs.autoLocation"
    ></bm-geolocation>
    <!-- 标记点 -->
    <bm-marker
      :position="markerPoint"
      :dragging="this.$attrs.dragging"
      :animation="this.$attrs.animate ? 'BMAP_ANIMATION_BOUNCE' : ''"
      :icon="this.$attrs.icon"
      @dragend="dragend"
    ></bm-marker>
  </baidu-map>
</template>

<script>
export default {
  props: {
    center: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      markerPoint: { lng: 116.404, lat: 39.915 },
      iconReWrite: {
        url: '',
        size: ''
      }
    }
  },
  created() {
    this.iconReWrite = this.$attrs.icon
  },
  methods: {
    // 地图加载完毕
    handler({ BMap, map }) {
      const that = this
      //   组件加载完毕，解析父组件传递过来的地址
      const myGeo = new BMap.Geocoder()
      // 将地址解析结果显示在地图上，并调整地图视野
      myGeo.getPoint(
        this.center,
        function (point) {
          if (point) {
            map.centerAndZoom(point, 16)
            // map.addOverlay(new BMap.Marker(point, { title: that.center }))
            that.markerPoint = point
          } else {
            alert('您选择的地址没有解析到结果！')
          }
        },
        '北京市'
      )
    },
    dragend({ type, target, pixel, point }) {
      //   console.log(type, target, pixel, point)
      this.$emit('dragend', { type, target, pixel, point })
    }
  }
}
</script>

<style>
.map {
  width: 600px;
  height: 400px;
}
</style>

{ name:'xxx', age:122 } const observer = Object.defineproty(obj,'name',{ get(){
} set(val){ obj.name = val } }) //observer就是一个数据监听器对象 // vm._data =
observer vm._data.name = observer.name vm.name = observer.name => observer name
setter => data name
