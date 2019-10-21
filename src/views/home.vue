<template>
  <el-container>
      <div class="left-silder">
        <my-slider :isCollapse="isCollapse"></my-slider>
      </div>
      <div class="right-main">
        <my-header @collapseFun="handelCollapse"></my-header>
      <el-main>
        <router-view></router-view>
        <!--<el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>-->
      </el-main>
      </div>
  </el-container>
</template>

<script>
import myHeader from '../components/layout/myheader'
import mySlider from '../components/layout/slider'
export default {
  name: 'home',
  components: {
    myHeader, mySlider
  },
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handelCollapse (val) {
      this.isCollapse = val
    }
  }
}
</script>

<style>
  .el-container{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    display: flex
  }
  .el-main {
      height: 100%;
      overflow-y: auto
  }
</style>
<style lang="stylus" scoped>
  .left-silder
    width: auto
  .right-main
    flex: 1;
    position: relative
</style>
