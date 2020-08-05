<template>
    <canvas height="300" width="500" id="myCanvas"></canvas>
</template>

<script>
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