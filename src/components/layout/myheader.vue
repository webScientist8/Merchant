<template>
  <el-header>
    <el-radio-group v-model="isCollapse">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <div>
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>王小虎</span>
    </div>
  </el-header>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      isCollapse: true
    }
  },
  watch: {
    isCollapse (val, oldval) {
      this.$emit('collapseFun', this.isCollapse)
    }
  }
}
</script>

<style lang="stylus">
  .el-header
    color: #333
    line-height: 60px
    font-size 12px
    display flex
    justify-content space-between
    background: #B3C0D1
</style>
