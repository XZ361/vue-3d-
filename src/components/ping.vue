<template>
     <div id="ping">
         <el-carousel :interval="4000" type="card" height="300px" >
            <el-carousel-item v-for="item in 8" :key="item" >
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
     </div>
</template>
<script>
    export default{
        data:{
            
        }
    }
</script>
<style>
    #ping{
        margin-top: 60px;
    }
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: .75;
    line-height: 350px;
    top: 50px;
  }

    .el-carousel__item:nth-child(3) {
    background:url('../assets/2.png');
      height: 430px;
  }
    .el-carousel__item:nth-child(4) {
    background:url('../assets/3.png');
      height: 430px;
  }
    .el-carousel__item:nth-child(5) {
    background:url('../assets/4.png');
      height: 430px;
  }
  .el-carousel__item:nth-child(6) {
    background:url('../assets/5.png');
      height: 430px;
  }

  .el-carousel__item:nth-child(7) {
    background:url('../assets/6.png');
      height: 430px;
  }
    .el-carousel__item:nth-child(8) {
    background:url('../assets/7.png');
      height: 430px;
  }
    .el-carousel__item:nth-child(9) {
    background:url('../assets/8.png');
      height: 430px;
  }
    .el-carousel__item:nth-child(10) {
    background:url('../assets/9.png');
 
      height: 430px;
  }
    .el-carousel__indicators{
       margin-top: -100px;
        opacity: 1.5;
       
    }

</style>