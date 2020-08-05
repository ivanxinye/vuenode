<template>
    <canvas height="300" width="500" id="myCanvas"></canvas>
</template>

<script>
    var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.fillStyle = "red"; //设置颜色
        ctx.fillRect(50,50, 200, 200); //绘制方块
    export default {
      name: 'canvas',
      data () {
        return {
                    
        }
      },
      methods:{
            
        },
        watch:{ //监控路径变化  当路径发送变化的时候，改变面包屑导航的显示
            
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  canvas{
      border: 2px solid #a4e2f9;
      margin: 30px auto;
      display: block
      }
</style>