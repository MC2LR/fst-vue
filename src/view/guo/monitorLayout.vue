<template>
    <component :is="comName"></component>
</template>

<script>
  import axios from 'axios'
  import layoutOne from './monitorLayout/layoutOne'
  import layoutTwo from './monitorLayout/layoutTwo'
  import layoutThree from './monitorLayout/layoutThree'

    export default {
        name: "monitorLayout",
        components:{layoutOne,layoutTwo,layoutThree},
       
        data(){
          return{
            comName:'',
          }
        },
        created(){
          let self=this;
          let terminalKey = localStorage.getItem("terminalKey")
          // console.log(terminalKey);
          axios.post(window._CONFIG['monitorLayoutURL']+'/monitorLayout/mmonitorAreaDefinition/monitorLayout').then(
            function (res) {
              self.comName=res.data.result[0].monitorAreaCode;
              console.log(res.data.result[0].monitorAreaCode);
            }
          )
        }
    }
</script>

<style scoped>

</style>
