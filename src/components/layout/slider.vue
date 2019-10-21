<template>
  <el-aside width="auto" style="background-color: rgb(238, 241, 246)">
    <div :class="isCollapse ? 'logo min-logo' : 'logo'">
      <img src="../../assets/logo.png" alt="">
    </div>
    <el-menu
      class="el-menu"
      :default-active="activeMenu"
      unique-opened
      router
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
        <el-submenu :key="index" :index="route.name">
          <template slot="title"><i class="el-icon-message"></i>{{route.meta.name}}</template>
            <el-menu-item v-for="(cRoute,cIndex) in route.children" :key="cIndex" :index="cRoute.name" :route="cRoute">{{cRoute.meta.name}}</el-menu-item>
        </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
import sliderPath from '../../router/silderPath'
export default {
  props: ['isCollapse'],
  name: 'slider',
  data () {
    return {
      Routers: sliderPath
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
  .el-aside {
    height: 100%;
    color: #333;
    overflow-y: auto
  }
</style>

<style lang="stylus" scoped>
  .logo
    width: 200px
    transition: width 0.5s linear
    img
      width: 100%
  .min-logo
    width 64px;
    transition: width 0.3s

</style>
