<template>
  <div>
    <!-- 出行规划组件 -->
    <baidu-map
      class="map"
      :zoom="15"
      :scroll-wheel-zoom="true"
      @ready="handler"
    >
    </baidu-map>
  </div>
</template>

<script>
export default {
  props: {
    start: {
      type: Object,
      required: true
    },
    end: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      startPoint: null,
      endPoint: null,
      BMap: null,
      map: null
    }
  },
  methods: {
    handler({ BMap, map }) {
      this.getStart({ BMap, map })
      this.getEnd({ BMap, map })

      // 设置地图中心 和 地图等级
      map.centerAndZoom(this.startPoint, 11)
      var driving = new BMap.DrivingRoute(map, {
        renderOptions: { map: map, autoViewport: true }
      })

      const start = JSON.parse(localStorage.getItem('start'))
      const end = JSON.parse(localStorage.getItem('end'))
      //   创建两个坐标点
      let p1 = new BMap.Point(start.lng, start.lat)
      let p2 = new BMap.Point(end.lng, end.lat)
      driving.search(p1, p2)
    },
    getStart({ BMap, map }) {
      // 将 起始点 和 终点 地址进行解析  => 坐标
      let myGeo = new BMap.Geocoder()
      console.log(this.start.city + this.start.point)
      myGeo.getPoint(this.start.city + this.start.point, (point) => {
        if (point) {
          this.startPoint = point
          localStorage.setItem('start', JSON.stringify(point))
        } else {
          this.$message.error('起点地址解析失败')
        }
      })
    },
    getEnd({ BMap, map }) {
      // 将 起始点 和 终点 地址进行解析  => 坐标
      let myGeo = new BMap.Geocoder()
      myGeo.getPoint(this.end.city + this.end.point, (point) => {
        if (point) {
          console.log('point', point)
          this.endPoint = point
          localStorage.setItem('end', JSON.stringify(point))
        } else {
          this.$message.error('终点地址解析失败')
        }
      })
    }
  }
}
</script>

<style>
/* 
    出行规划组件设计总结：
    1 该组件需要的数据{出发地和终点数据对象}
    2 根据父组件传递过来的数据 通过 new BMap.Geocoder() 来 创建一个 geo实例
    3 通过geo 实例调用getPoint方法，将地址生成坐标
    4 通过 DrivingRoute方法，生成驾车实例，实例调用seach，可以生成 从p1到p2 的驾车规划路线
*/
</style>
