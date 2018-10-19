<template>
  <div class="top">
    <el-row>
      <el-col>
        <img src="../assets/logo864f3e.png" alt="">
        <span class="open">打开app</span>
        <span class="money">充值</span>
        <div class="search">
          <a href=""><i class="icon"></i></a>
        </div>
        <div class="bbb">
          <a class="aaa" @click="show">

          </a>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="show">
        <div>
          <ul>
            <li class="red">推荐</li>
            <li v-for="(data,index) in datas" :key="index">
              <router-link :to=" '/much/'+data.shortName+'?name='+data.name+'&mix='+'list' ">
                {{data.name}}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="menu">
          <div v-if="isMale">
            <home-class @zhi="chuan">
            </home-class>
            <div></div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios'
  import HomeClass from '../components/HomeClass'
  export default {
    data:function () {
      return {
        datas:[],
        isMale:false,
      }
    },
    mounted(){
      axios.get('/douyu/api/cate/recList')
        .then( (val) =>{
          this.datas=val.data.data
        }).catch( (err) => {
        console.log(err);
      })
    },
    methods:{
      show:function () {
        this.isMale=true;
        $('body').css({
          overflow:'hidden'
        })
        $('.show').css({
          overflow:'hidden'
        })
      },
      chuan:function (str) {
        this.isMale=str;
        $('body').css({
          overflow:'scroll'
        })
        $('.show').css({
          overflow:'scroll'
        })
      }
    },
    components:{
      HomeClass,
    }
  }
</script>

<style scoped>
  .top{
    position: fixed;
    z-index: 6;
    background-color: #fff;
    width: 100vw;
  }
  img {
    float: left;

    width: 76px;
    height: 34px;
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
    height: 18px;
    width: 18px;
    background-color: #fff;
  }
  .search a{
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    text-decoration: none;
    color: inherit;
    z-index: 6;
  }
  i{
    position: fixed;
    width: 18px;
    height: 18px;
    right: 20px;
    top: 20px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcTIyMjExMTExMTExMTIyMjIyMjExMTQ0NDExMTMzM1VVVTExMT8/PzExMTAwMDQ0NDMzM+qFs/IAAAARdFJOUwA4j+fcooP1FWVLA7UIzihTGdI73wAAASBJREFUOMu1VElixCAMGxabLQT4/2fHkJadtoeOTwQU2UYyr9dHguElVFISjD4gnJGpxcW2LPdzqoirBKxsJh9JZJ7WOkL5ChMGaVMYV781J5gaU5pcxUjPqELVczH6DdxErgl1+9YX1Xy5pUwtUsI+mdhdjKWEdZ94zfbqrkbFqFu3V4BOWvt4UIFyhErKDiBeC6EmTnpSS/xZke4nW1B/8KzoAo7eqaA/Md0/1vTVOKQUD6B2ZCrnHF7VJLqXaM52dxLxLVEvKltMWPXqRIWtVyLZ1Y4mXGwf1dRQoA1hh3p4Hqux1OzybiD996COqFBmU3JjrTVl7BLwBeVRpT6kLXaaL0djewzuZ1AzanFtMAgAGHVnTfX7a4QK//NxewM4RxEY8NzUNwAAAABJRU5ErkJggg==);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: inline-block;
  }
  .show{
    margin-top: 5px;
    overflow-x: scroll;
    position: relative;
  }
  .show ul{
    width:317vw ;
    height: 44px;

  }
  li{
    float: left;
    padding: 10px 2px 0;
    margin: 0 3px 10px;
    white-space: nowrap;
    vertical-align: bottom;
    font-size: 14px;
  }
  li.red{
    border-bottom: solid 2px #ff5d23;
    color: #ff5d23;
  }
  li a{
    font-size: 14px;
    color: #0f0f0f;
  }
  .show .menu{
    position: absolute;
    top: -2px;
    z-index: 7;
    width: 49px;
    height: 46px;
    left: 76vw;
  }
   .aaa{
    position: absolute;
    top: 47px;
    background-image: url("../assets/index.png");
    background-size: 49px 44px;
    width: 49px;
    height: 44px;
     z-index: 7;
     right: 20px;
  }
   .bbb{
     background-color: #fff;
   }
  .menu > div{
    position: fixed;
    top: 0;
    left: 20px;
    height: 100vh;
    width: 100vw;
  }
  .menu > div >div{
    position: absolute;
    height: 100vh;
    background-color: rgba(0,0,0,.3);
  }
</style>
