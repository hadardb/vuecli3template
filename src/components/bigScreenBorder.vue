<!--
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2020-05-03 15:17:40
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-05-03 15:54:00
 -->
<template>
  <div class="pack">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.pack {
  width: 100%;
  height: 100%;
  border: 4px solid;
  border-image: radial-gradient(circle at top center, #50f6f6 2%,
  #1b5559 30%, #1d5459 60%) 1;
  clip-path: inset(0 round 10px);
  box-sizing: border-box;
}
</style>
