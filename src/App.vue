<template>
  <div id="app">
    <hdView />
    <div class="main">
      <ShowView />
    </div>
    <FtView />
  </div>
</template>

<script>
import HdView from "./components/HdView";
import FtView from "./components/FtView";
import ShowView from "./components/ShowView";
export default {
  components: {
    HdView,
    FtView,
    ShowView,
  },
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  font-family: "微软雅黑";
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
ul,
ol {
  list-style: none;
}
#app {
  width: 1200px;
  border: 1px solid #41b883;
  margin: 0 auto;
}
.main {
  min-height: 200px;
}
</style>
