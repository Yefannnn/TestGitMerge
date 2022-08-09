<template>
  <div>
    <div class="top">
      <ul v-for="(item, ind) in title" :key="ind" class="headerUl">
        <router-link class="link" :to="item.meta.path">{{
            item.meta.path
        }}</router-link>
      </ul>
    </div>
    <div class="buttom">
      <router-view></router-view>
    </div>

    <div>
      <h1> 我是测试字段</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$router.options.routes.filter((item) => item.meta)
    }
  },
  created() {
    console.log(this.$router.options.routes.filter((item) => item.meta))
  }
}
</script>

<style>
.top {
  height: 60px;
  background-color: rgb(207, 248, 207);
}

.buttom {
  height: calc(100vh - 78px);
  background-color: rgb(199, 235, 255);
}

.headerUl {
  height: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  float: left;
}

.link {
  text-decoration: none;
  height: 35px;
  width: 80px;
  background-color: rgb(120, 212, 240);
  margin-left: 20px;
  border-radius: 20px;
  text-align: center;
  line-height: 35px;
}
</style>
