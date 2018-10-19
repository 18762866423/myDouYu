
<template>
  <div class="top">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"><i class="el-icon-close" @click="show"></i><h3>选择分类</h3></div>
      </el-col>
    </el-row>

    <el-row class="navbar">
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <span :class="{red:num == 'all'}" @click="active('all')">全部</span>
        </div>
      </el-col>
      <el-col :span="21">
        <div class="grid-content bg-purple-light">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item v-for="(lis,ins) in datas.cate1Info" index="ins" :key="ins" @click=active(lis.cate1Id)>
              <p :class="{red:num === lis.cate1Id}">{{lis.cate1Name}}</p>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="8" v-for="(data,ind) in datas.cate2Info" :key="ind" :type="data.shortName"
                v-if="(num === data.cate1Id)||(num ==='all')">
          <div class="grid-content bg-purple view">
            <img :src="data.icon" alt="">
            <p>{{data.cate2Name}}</p>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>

  import axios from 'axios';
  export default {
    data: function () {
      return {
        datas:'',
        activeIndex: '1',
        isMale:true,
        num:'all'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
      },
      active:function (msg) {
        this.num=msg
      },
      show:function () {
        this.$emit('zhi',false)
      }
    },
    //https://m.douyu.com/api/cate/list?type=
    mounted(){
      axios.get('/douyu/api/cate/list')
        .then( (val) =>{
          this.datas=val.data.data;
        }).catch( (err) => {
        console.log(err);
      });
    }

  }
</script>

<style scoped>
  .top{
    background-color: #fff;
    font-size: 14px;
    color: #3f3f3f;
    line-height: 44px;
    vertical-align: bottom;
    width:100vw;
    position: relative;
    left: -20px;
  }
  .bg-purple-dark{
    color: #666;
    padding: 5px 0;
    background-color: #fff;
    position: relative;
  }
  .bg-purple-dark h3{
    font-weight: 400;
  }
  .bg-purple-dark i{
    position: absolute;
    left: 15px;
    font-size: 26px;
    top:17px;
  }
  .el-menu--horizontal{
    border: none;
    width: 120vw;
  }
  .el-row{
    overflow-x: scroll;
    width: 100%;
  }
  .bg-purple-light{
    width: 80vw;
  }
  .bg-purple span{
    display: inline-block;
    height: 44px;
    cursor: pointer;
    background-color: #fff;
    width: 52px;
  }
  .el-menu--horizontal > .el-menu-item{
    height: 44px;
    float: left;
    padding: 5px;
    white-space: nowrap;
    line-height: 32px;
    border: none;
  }
  .red{
    color: #ff5d23;
    border-bottom: solid 2px #ff5d23;
  }
  .view{
    border-right: 1px #ccc dashed;
    border-bottom: 1px #ccc dashed;
    width: 32vw;
    height: 31vw;

  }
  .view img{
    width: 18vw;
    border-radius: 50%;
    margin: 5px 0;
  }
  .el-main{
    padding: 0;
    background-color: #f4f4f4;
    overflow-x: hidden;
    overflow-y: scroll;
    height:93vw ;
  }
  .view p{
    padding: 5px 0;
    line-height: 15px;
  }

</style>
