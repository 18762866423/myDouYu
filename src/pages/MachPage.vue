<template>
    <div class="much">
      <el-row class="top">
        <el-col>
          <img src="../assets/logo864f3e.png" alt="" class="logo">
          <span class="open">打开app</span>
          <span class="money">充值</span>
          <div class="search">
            <a></a>
            <span>分类</span>
          </div>
        </el-col>
      </el-row>
      <div class="much-main">
        <el-row>
          <el-col :span="24">
            <h3>
              <img src="../assets/1.png" alt=""><span>{{name}}</span>
            </h3>
          </el-col>
        </el-row>

        <ul class="room">
          <li v-for="(msg,ind) in datas" :key="ind">
            <a>
              <img :src="msg.roomSrc" alt="">
              <span class="count"><img src="../assets/iconfont-wofdcada.png" alt="">{{msg.nickname}}</span>
              <span class="hot"><img src="../assets/hot.png" alt="">{{msg.hn}}</span>
              <br>
              <p>{{msg.roomName}}</p>
            </a>
          </li>
        </ul>
        <el-button plain @click=much v-if="pages<=3">加载更多{{pages}}</el-button>
      </div>
    </div>
</template>
<script>
  import axios from 'axios';
  // https://m.douyu.com/api/room/list?page=1&type=jdqs
    export default {
        data: function () {
            return {
              datas:[],
              pages:0,
              name:'',
            }
        },
      mounted(){
        this.much();
      },
      methods:{
          much:function () {
            this.pages += 1;
            // let type=this.$route.params.type;
            this.name=this.$route.query.name;
            // let mix = this.$route.query.mix;
            console.log(this.$route.query.mix)
            console.log(this.$route.params.shortName)
            axios.get('/douyu/api/room/'+ this.$route.query.mix,{
              params:{
                page:this.pages,
                type:this.$route.params.shortName
              }
            }).then( (value) =>{
              this.datas= this.datas.concat(value.data.data.list)
              console.log(value.data);
            }).catch( (err) => {
              console.log(err);
            })
          }
      }
    }
</script>

<style scoped>
  .much{
    background-color: #fff;
    width: 100vw;

  }
  .logo{
    float: left;
    margin: 10px 0 0 10px;
    width: 76px;
    height: 34px;
  }
  .much-main{
    height: 92vh;
    overflow-y: scroll;
  }
  .top{
    margin: 5px auto 10px;
  }
  .open{
    width: 74px;
    border: 1px solid #ff5d23;
    border-radius: 2px;
    color: #ff5d23;
    float: left;
    height: 28px;
    text-align: center;
    line-height: 28px;
    box-sizing: border-box;
    font-size: 12px;
    margin: 15px 0 0 10px;
  }
  .money{
    float: left;
    height: 28px;
    text-align: center;
    line-height: 28px;
    box-sizing: border-box;
    font-size: 12px;
    margin: 15px 0 0 10px;
    width: 49px;
    border-radius: 2px;
    color: #fff;
    background-color: #ff5d23;
  }
  .search{
    display: inline-block;
    background-color: #fff;
    position: absolute;
    right: 65px;
    top: 10px;
    height: 45px;
    width: 45px;
    line-height: 45px;
    cursor: pointer;
    color: #aaa;
  }
  .search a{
    height: 45px;
    width: 60px;
    font-size: 100%;
    background-image: url("../assets/index.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    right: 10px;
  }
  .search span{
    position: absolute;
    right: -15px;
  }
  h3{
  text-align: left;
    font-weight: 400;
    font-size: 16px;
    margin-top: 15px;
    display: flex;
    padding: 0 15px;
  }
  h3 span{
    margin: 5px;
  }
  .room {
    width: 94vw;
    overflow: hidden;
    margin-bottom: 20px;
    margin-left: 14px;
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
    width: 100%;
    height: 20%;
    font-size: 14px;
    text-align: left;
    position: absolute;
    bottom: 0px;
    line-height: 25px;
    color: #333;
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
  .el-button{
    width: 80vw;
    margin-bottom: 40px;
  }


</style>
