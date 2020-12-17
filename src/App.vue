<template lang="pug">
  .Bigground
    .background
    .bar
    //- .newsb
    //-   .newspagetitle {{newstitle}}
    //-     .newsmail {{newsm}}
    //- .newsflex
    //-   .newsitem(v-for="item in news")
    //-     .newtext {{item.bb}}
    //-       .newpp {{item.pp}}
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      // newstitle: '國立清華大學藝術學院',
      // newsm: '國立清華大學藝術學院 Email   Tel:+886-3-5715131 #78801   2020 Copyright ©',
      // news:[
      //   {bb:'yeee',pp:'yaaaa'},
      //   {bb:'yee',pp:'yaaa'},
      //   {bb:'ye',pp:'yaa'},
      //   {bb:'y',pp:'ya'},
      //   {bb:'yeeee',pp:'yaaaaa'},
      //   {bb:'yeeeee',pp:'yaaaaaa'}
      // ]
    }
  }
}
</script>
<style lang="sass">
.Bigground
  position: relative
  width: 1440px
  height: 2312px
  top: -12px
  left: -10px
  overflow-y: scroll
  background: linear-gradient(180deg, rgba(156, 242, 234, 0.93) 0%, #10B0A4 100%)
  mix-blend-mode: multiply
.bar
  position: absolute
  width: 1320px
  height: 138px
  left: 61px
  top: 0px
  background: #E8437F
.background
  position: absolute
  width: 1320px
  height: 2269px
  left: 61px
  top: 26px
  background: linear-gradient(180deg, #040466 0%, #06074A 100%)
  box-shadow: 5px 5px 5px 7px rgba(0, 0, 0, 0.25)
// .newspagetitle
//   text-align: left
//   font-size: 50px
// .newsb
//   background-color:#AFC7CF
// .newsmail
//   text-align: right
//   font-size: 14px
// .newsflex
//   display: flex
//   flex-direction: row
//   flex-wrap:wrap
//   justify-content: space-between
// .newsitem
//   width: 69px
//   height: 69px
//   padding: 49px
//   background-color: #aaa
  
// .newtext
//   font-size: 24px
//   margin-bottom: 10px
//   font-weight: 500
// .newpp
//   font-size: 40px
//   margin-bottom: 10px
</style>
