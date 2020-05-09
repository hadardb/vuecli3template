<!--
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2020-05-03 14:10:22
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-05-03 15:37:38
 -->
<template>
  <div class="myGrid">
    <div class="area1">
      <slot name="area1"></slot>
    </div>
    <div class="area2"><slot name="area2"></slot></div>
    <div class="area3"><slot name="area3"></slot></div>
    <div class="area4"><slot name="area4"></slot></div>
    <div class="area5"><slot name="area5"></slot></div>
    <div class="area6"><slot name="area6"></slot></div>
    <div class="area7"><slot name="area7"></slot></div>
    <div class="area8"><slot name="area8"></slot></div>
    <div class="area9"><slot name="area9"></slot></div>
    <div class="area10"><slot name="area10"></slot></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.myGrid {
  display: grid;
  grid-template-rows: 280px 200px 280px 535px;
  grid-template-columns: 930px 930px 2000px 930px 930px;
  grid-row-gap: 20px;
  grid-column-gap: 30px;
  grid-template-areas:
    'area1 area3 area6 area7 area9'
    'area1 area4 area6 area7 area9'
    'area2 area4 area6 area8 area10'
    'area2 area5 area6 area8 area10'
    'area2 area5 area6 area8 area10';
}

.area1 {
  grid-area: area1;
  background-color: #000;
}

.area2 {
  grid-area: area2;
  background-color: #29d;
}

.area3 {
  grid-area: area3;
  background-color: #562;
}

.area4 {
  grid-area: area4;
  background-color: aqua;
}

.area5 {
  grid-area: area5;
  background-color: yellow;
}

.area6 {
  grid-area: area6;
  background-color: brown;
}

.area7 {
  grid-area: area7;
  background-color: aqua;
}

.area8 {
  grid-area: area8;
  background-color: #29d;
}

.area9 {
  grid-area: area9;
  background-color: aqua;
}

.area10 {
  grid-area: area10;
  background-color: #29d;
}
</style>
