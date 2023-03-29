<template>
  <div class="main">
    <div class="stage">
      <!--snake内部的div 表示蛇的各部分-->
      <div></div>

      <!--  设置食物-->
      <div class="food">
        <!--添加四个小div 来设置食物的样式-->
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

    </div>
    <div class="score-panel">
      <div class="score">
        <div>
          SCORE: <span class="score">0</span>
        </div>
        <div>
          LEVEL: <span class="level">1</span>
        </div>

      </div>
    </div>
  </div>

</template>
<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    // HelloWorld,
  },
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
