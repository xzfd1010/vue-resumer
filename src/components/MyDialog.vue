<template>
  <div class="dialogWrapper" v-show="visible">
    <div class="dialog">
      <header>{{title}}
        <!--点击关闭时触发close方法-->
        <span class="close" @click="close">&times;</span>
      </header>
      <main>
        <!--插槽中定义要显示的内容-->
        <slot></slot>
      </main>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'MyDialog',
    props: ['title', 'visible'], // visible属性从父级获取，由父组件控制子组件的状态
    methods: {
      close() {
        // 子组件派发了一个close事件，父组件可以监听这个事件
        this.$emit('close')
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .dialogWrapper {
    position: fixed;
    background: hsla(0, 0%, 0%, 0.25);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dialog {
    background: white;
    min-height: 4em;
    min-width: 10em;

    > header {
      padding: 16px;
      display: flex;
      justify-content: space-between;
    }

    > main {
      padding: 16px;
    }

  }
</style>
