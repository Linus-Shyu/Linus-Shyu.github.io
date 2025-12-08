<template>
  <div class="footer">
    <div>
      ©版权所有：<a href="http://192.168.11.250" target="_blank"
        >互助县威远初级中学</a
      >
      Copyright: ©版权所有：Huzhu County Weiyuan Junior middle School
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
  height: 70px;
  background: #41b883;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    opacity: 0.8;
    a {
      color: black;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>