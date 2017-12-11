<template>
  <div id="topbar">
    <div class="wrapper">
      <div class="logo">Resumer</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Topbar'
  }
</script>

<style type="text/less" lang="less">
  #topbar {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
    height: 64px;
    &>.wrapper{
      min-width:1024px;
      max-width: 1440px;
      margin:0 auto;
      height:64px;
    }
    &>.wrapper{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
    }
    &>.logo{
      font-size: 24px;
      color:#000;
    }
  }
</style>
