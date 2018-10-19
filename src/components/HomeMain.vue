<template>
  <div class="content">
    <!--轮播图-->
    <template>
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <a href=""></a>
        </el-carousel-item>
      </el-carousel>
    </template>
    <!-- 分类数据 -->
    <div v-for="(data,index) in datas.data" :key="index">
      <!--{{data}}-->
      <el-row :gutter="10">
        <el-col :span="6">
          <div class="main-top">
            <img :src="data.icon" alt=""><span>{{data.tabName}}</span>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="main-top center">
            <template v-for="(li,ins) in data.cate2Info" v-if="ins<=1">
              <span>
                {{li.cate2Name}}
              </span>
            </template>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="main-top right">
            <router-link :to=" '/much/'+data.shortName +'?name='+data.tabName+'&mix='+'mixList' ">
              <span>更多</span><i class="fa fa-chevron-circle-right"></i>
            </router-link>
          </div>
        </el-col>
      </el-row>

      <ul class="room">

        <li v-for="(lis,ind) in data.list" :key="ind">
          <a href="">
            <img :src="lis.roomSrc" alt="">
            <span class="count"><img src="../assets/iconfont-wofdcada.png" alt="">{{lis.nickname}}</span>
            <span class="hot"><img src="../assets/hot.png" alt="">{{lis.hn}}</span>
            <br>
            <p>{{lis.roomName}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  // https://m.douyu.com/api/home/mix
  import axios from 'axios';

  export default {
    data: function () {
      return {
        datas: []
      }
    },
    mounted() {
      axios.get("/douyu/api/home/mix")
        .then((value) => {
          this.datas = value.data;
        }).catch((err) => {
        console.log(err);
      })
    }
  }
</script>

<style scoped>
  .content {
    margin-top: 10px;
  }

  /deep/ .el-carousel__container {
    height: 245px;
  }

  /deep/ .el-carousel__indicators {
    line-height: 42px;
    position: absolute;
    bottom: 20px;
  }

  /deep/ .el-carousel__button {
    display: block;
    opacity: .48;
    width: 30px;
    height: 10px;
    background-color: #00B7FF;
    border-radius: 5px;
    border: none;
    outline: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  /deep/ .el-carousel__arrow {
    z-index: 3;
  }

  .el-carousel__item:nth-child(3) {
    background-image: url("https://gfs-op.douyucdn.cn/slide/2018/0904/201809041126509938.jpg");
    background-repeat: no-repeat;
  }

  .el-carousel__item:nth-child(4) {
    background-image: url("https://gfs-op.douyucdn.cn/slide/2018/09/20/9ce31ed3baf31c26224b50c187bc981a.jpg");
    background-repeat: no-repeat;
  }

  .el-carousel__item:nth-child(5) {
    background-image: url("https://cs-op.douyucdn.cn/douyu-vrp-admin/2018/04/17/74f597bc8edb5ede895053b3abd08b9b.jpg");
    background-repeat: no-repeat;
  }

  .el-carousel__item:nth-child(6) {
    background-image: url("https://sta-op.douyucdn.cn/douyu-vrp-admin/2018/09/19/7aa6d37b56edfce8e5093fddd97bfdff.jpg");
    background-repeat: no-repeat;
  }

  .main-top {
    height: 42px;
    line-height: 42px;
    overflow: hidden;
    font-size: 14px;
  }

  .main-top > img {
    float: left;
    width: 18px;
    height: 18px;
    margin: 12px 0px 0;
  }

  .right {
    text-align: right;
  }
  .right >a >span{
    color: #666;
  }
  .center {
    text-align: left;
  }

  .center span {
    margin-right: 10px;
    padding: 3px 6px;
    border-radius: 12px;
    border: solid 1px #ff5d23;
    font-size: 12px;
    font-weight: 200;
  }

  .right i {
    color: #ccc;
    margin: 0 10px;
  }

  .room {
    width: 94vw;
    overflow: hidden;
    margin-bottom: 20px;
  }

  .room li {
    width: 45vw;
    margin: 0.8vw;
    height: 17vh;
    float: left;
    position: relative;
  }

  .room li > a {
    width: 100%;
    height: 100%;
    display: inline-block;
  }

  .room li a > img {
    width: 100%;
    height: 80%;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  .room li p {
    width: 80%;
    height: 20%;
    font-size: 14px;
    text-align: left;
    position: absolute;
    bottom: 0px;
    line-height: 25px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }

  .count img {
    width: 15px;
  }

  .count {
    position: absolute;
    left: 10px;
    bottom: 20px;
    color: #fff;
    font-size: 12px;
    line-height: 28px;
  }

  .hot img {
    width: 15px;
  }

  .hot {
    position: absolute;
    right: 10px;
    top: 6px;
    color: #fff;
    font-size: 12px;
    line-height: 28px;
  }

</style>
