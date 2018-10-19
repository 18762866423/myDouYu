<template>
    <div>
      <el-container>
        <el-header>
          <a id="top"></a>
          <home-head>


          </home-head>
        </el-header>
        <el-main>
          <home-main>

          </home-main>
        </el-main>
        <el-footer>
          <span></span><a href="#top">返回顶部</a>
          <div>下载客户端</div>
          <p>
            客服热线：027-87057679 <br>
            武汉斗鱼网络科技有限公司 <br>
            湖北省武汉市东湖开发区光谷软件园F4栋8楼 <br>
          版权所有 ©www.douyu.com 鄂ICP备15011961号-1
          </p>
        </el-footer>
      </el-container>
    </div>
</template>

<script>
  import HomeHead from '../components/HomeHead.vue';
  import HomeMain from '../components/HomeMain';
    export default {
        data:function () {
            return {

            }
        },
      components:{
          HomeHead,
          HomeMain
      }

    }
</script>

<style scoped>
  .el-header, .el-footer {

    color: #333;

    height: 100px;
  }
  .el-main {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 160px;
    margin-top: 5px;
  }
  .el-container {
    margin-bottom: 40px;
  }
  .el-footer a{
    font-size: 18px;
    margin: 10px;
    color: #666;
  }
  .el-footer div{
    width: 80%;
    margin:18px auto;
    background-color:#f70 ;
    color: #fff;
    height: 45px;
    font-size: 14px;
    line-height: 45px;
    border-radius: 6px;
  }
  .el-footer span{
    background-image: url("../assets/0.png");
  }
  .el-footer p{
    font-size: 10px;
    margin-bottom: 50px;
    color: #ccc;
  }
</style>
