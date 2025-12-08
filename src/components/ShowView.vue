<template>
  <div class="ShowView">
    <div class="itembox" v-for="item in [1,2,3]" :key="item">
      <div class="top">
        <h2>这是标题区域</h2>
        <div class="time">2022-1-24 9:45</div>
      </div>
      <div class="center">
        互助县威远初级中学 is a school in Qinghai.
        互助县威远初级中学 is situated nearby to 互助土族自治县城南学校,
        and close to 互助县人民医院.
      </div>
      <div class="info">
        <div class="list">
          所属分类：
          <span>地理位置</span>
        </div>
        <div class="author">
          作者
          <span>mapcarta</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

.<style lang="less" scoped>
.ShowView {
    padding: 30px;
}
.itembox{
  padding: 30px 0;
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    h2{
      font-size: 25px;
      color: green;
      width: 750px;
    }
    .time{
      font-size: 14px;
      color: green;
    }
  }
  .center{
    background: wheat;
    border-radius: 5px;
    padding: 15px;
    font-size: 17px;
    line-height: 1.8em;
    color: black;
    margin-bottom: 10px;
  }
  .info{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: green;
    span{
      font-size: 16px;
      color: green;
      
    }
  }
}
</style>