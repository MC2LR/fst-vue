<template>
    <div class="container" style="border: black 0.01rem solid">
        <div >
          <component :is="UpName"></component>
        </div>
        <div >
          <component :is="DownName"></component>
        </div >
    </div>
</template>

<script>
  import UpOne from '../areaPatternThree/A1'
  import UpTwo from '../areaPatternThree/A2'
  import UpThree from '../areaPatternThree/A3'
  import DownOne from '../areaPatternThree/C1'
  import DownTwo from '../areaPatternThree/C2'
  import DownThree from '../areaPatternThree/C3'
  import axios from 'axios'
    export default {
        name: "layoutThree",
        components:{UpOne,UpTwo,UpThree,DownOne,DownTwo,DownThree},
      data(){
          return{
            UpName:'',
            DownName:''
           }
          },
      created(){
          let self=this;
          axios.get('http://10.167.20.2:8080/jeecg-boot/monitorLayout/mmonitorAreaDefinition/monitorLayout?macId=58485458458').then(
            function(res){
            console.log(res);
            self.UpName=res.data.result.pattern[0].monitorPatternCode;
            self.DownName=res.data.result.pattern[0].monitorPatternCode;
          })
      }
    }

</script>

<style scoped>

</style>
