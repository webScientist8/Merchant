<template>
  <el-aside width="auto" style="background-color: rgb(238, 241, 246)">
    <el-menu
      unique-opened
      router
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <div v-for="(route , index) in Routers" :key="index">
        <el-submenu :key="index" :index="route.name">
          <template slot="title"><i class="el-icon-message"></i>{{route.meta.name}}</template>
            <el-menu-item v-for="(cRoute,cIndex) in route.children" :key="cIndex" :index="cRoute.name" :route="cRoute">{{cRoute.meta.name}}</el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </el-aside>
</template>

<script>
import sliderPath from '../../router/silderPath'
export default {
  name: 'slider',
  props: ['isCollapse'],
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
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<style lang="stylus" scoped>
</style>
