<template>
  <div id="app">
        <el-container>
          <el-col :span="5" class="aside" height="660px">
            <el-menu  default-active="2" class="el-menu-vertical-demo" background-color="#545c64"  height="660px"
              text-color="#fff"
              active-text-color="#ffd04b" > 
          
                  <img src="../assets/logo.png" alt="">    
              
              
              <router-link to="/ping">
                  <el-menu-item index="1" style="height:100px">
                <i class="el-icon-menu"></i>
                <span slot="title">平面图浏览</span>
              </el-menu-item>
              </router-link>
              <el-menu-item index="2" style="height:100px">
                <i class="el-icon-setting"></i>
                <span slot="title">三维空间展示</span>
              </el-menu-item>
              <el-menu-item index="4" style="height:200px;font-size:25px;margin:80px auto;">
                
                
                <span slot="title">三维实景房产展示平台</span>
              </el-menu-item>  
            </el-menu>
          </el-col>

          <el-container>
            <el-header>
                Header
            </el-header>
            <el-main>
                <router-view name="ping"></router-view>
            </el-main>
          </el-container>
        </el-container>
  </div>
</template>

<script>
export default {
    data() {
      return {
      mag:''
      };
    },
   
  methods: {
    

  }
}
</script>

<style>
body{
  margin:0;
  padding:0
}
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 560px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
.aside {
    height: 660px;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>
