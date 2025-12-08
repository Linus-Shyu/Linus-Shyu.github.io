<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="" />
      <div class="text">
        <span>威远初级中学</span>
        无可奉告校园论坛系统
      </div>
    </div>
    <div class="nav">
      <a href="#" class="active">论坛列表</a>
      <a href="#">发表帖子</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  height: 80px;
  background: #41b883;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      height: 60px;
    }
    .text {
      color: #fff;
      font-size: 20px;
      padding-left: 10px;
      span {
        display: block;
        font-size: 14px;
        opacity: 0.7;
      }
    }
  }
  .nav {
    display: flex;
    a {
      display: block;
      border-radius: 5px;
      padding: 5px 20px;
      color: #fff;
      font-size: 18px;
      margin-left: 10px;
      &:hover,
      &.active {
        color: #41b883;
        background: #fff;
      }
    }
  }
}
</style>