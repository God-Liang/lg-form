<template>
  <div class="lg-fm">
    <div class="fm-header">
      <div class="fm-title" @click="handleHome">表单设计器</div>
    </div>
    <div class="fm-container">
      <fm-making-form ref="makingForm" saveName="生成代码" preview generateHTML generate-json clearable @handleGenerateJson="handleGenerateJson" @handleGenerateCode="handleGenerateCode">
        <template slot="action"></template>
      </fm-making-form>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
  methods: {
    handleHome() {
      this.$router.push({ path: '/' })
    },
    // 生成表单数据
    handleGenerateJson(val) {
      console.log(val)
    },
    // 生成html
    handleGenerateCode(val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss">
@import "~@/styles/index.scss";
.lg-fm {
  height: 100%;
  .fm-header {
    height: 50px;
    box-shadow: 0 1px 20px $--color-primary;
    padding: 0 10px;
    // background-image: linear-gradient(to right, #1278f6, #00b4aa);
    background-color: $--color-primary;
    position: relative;
    .fm-title {
      display: inline-block;
      line-height: 50px;
      vertical-align: middle;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      opacity: 0.8;
      margin-left: 6px;
      cursor: pointer;
    }
  }
  .fm-container {
    height: calc(100% - 50px);
    aside {
      padding: 0;
      margin: 0;
    }
  }
}
</style>
