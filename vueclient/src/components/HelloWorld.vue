<template>
  <div class="container" @mousedown="jump" @mouseup="jump">
    <div class="blank" v-bind:style="{ height: height + 'px'}"></div>
    <div class="ball">{{this.height}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      height: 470,
      a:0.5
    }
  },
  methods:{
    jump(){
      console.log('jumping')
      this.a = -this.a;
      var id = setInterval(() => {
          if(this.height > 470) {
            console.log("to the end!")
            clearInterval(id)
            this.height = 470
          } else if(this.height < 0){
            clearInterval(id)
            this.height = 0
          } else {
                this.height = this.height + this.a
            } 
      }, 10);
           
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container{
  width: 100%;
  height: 500px;
  margin: auto;
  background: blue;
}
div.blank{
	width: 100%;
  margin: 0;
  background:yellow;
}
div.ball{
  border-radius: 50%;
	width: 30px;
	height: 30px;
  background:red;
  margin: 0 auto 0 100px;
}
</style>
