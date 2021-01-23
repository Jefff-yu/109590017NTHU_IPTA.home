<template lang="pug">
.app
  el-header.header
    el-menu.el-menu(
      :default-active="activeIndex",
      menu-trigger="hover",
      mode="horizontal",
      @select="handleSelect",
      text-color="#fff",
      background-color="#E8437F",
      letter-spacing="0.4em"
    ) 
      el-menu-item.E
      el-menu-item.L 
        img.logo(src="~@/assets/cis-1-1.png")
      el-menu-item.A IPTA 藝術學院學士班
      el-menu-item.nthuipta(index="1", menu-trigger="hover") 國立清華大學藝術學院
      el-menu-item.nthuipta(index="2", menu-trigger="hover") 
        router-link(to='Home' style="text-decoration:none") 首頁
      el-menu-item.nthuipta(index="3", menu-trigger="hover") 最新消息
      el-submenu.nthuipta(index="4", menu-trigger="hover") 
        template.nthuipta(slot="title") 招生資訊
        el-menu-item.nthuipta(index="4-1") 
          router-link(to='scholarship' style="text-decoration:none;color:#FFFFFF;") 春之清華卓越獎五名
        el-menu-item.nthuipta(index="4-2") 學士班臉書粉絲頁
        el-submenu.nthuipta(index="4-3", menu-trigger="hover") 
          template.nthuipta(slot="title") ２０２０招生資訊
          el-menu-item(index="4-3-1") ２０２０錄取名單
          el-menu-item(index="4-3-2") ２０２０招生簡章
          el-menu-item(index="4-3-3") ２０２０個人申請第二階段甄選注意事項
          el-menu-item(index="4-3-3") ２０２０報名繳交資料
        el-menu-item.nthuipta(index="4-4") 
          router-link(to='qa' style="text-decoration:none;color:#FFFFFF;") 招生Ｑ＆Ａ
        el-submenu.nthuipta(index="4-5", menu-trigger="hover") 
          template(slot="title") 過往招生資訊
          el-submenu.nthuipta(index="4-5-1", menu-trigger="hover") 
            template.nthuipta(slot="title") ２０１９年招生資訊
            el-menu-item(index="4-5-1-1") ２０１９錄取名單
            el-menu-item(index="4-5-1-2") ２０１９招生簡章
            el-menu-item(index="4-5-1-3") ２０１９個人申請第二階段甄選注意事項
            el-menu-item(index="4-5-1-4") ２０１９報名繳交資料
          el-submenu.nthuipta(index="4-5-2", menu-trigger="hover") 
            template.nthuipta(slot="title") ２０１８年招生資訊
            el-menu-item(index="4-5-2-1") ２０１８錄取名單
            el-menu-item(index="4-5-2-2") ２０１８招生簡章
            el-menu-item(index="4-5-2-3") ２０１８個人申請第二階段甄選注意事項
            el-menu-item(index="4-5-2-4") ２０１８報名繳交資料
      el-submenu.nthuipta(index="5", menu-trigger="hover") 
        template.nthuipta(slot="title") 學士班
        el-menu-item.nthuipta(index="5-1") 
          router-link(to='intro' style="text-decoration:none;color:#FFFFFF;") 學士班簡介
        el-menu-item.nthuipta(index="5-2") 學士班課程
        el-menu-item.nthuipta(index="5-3") 國際交換
        el-menu-item.nthuipta(index="5-4") 藝術學院大樓(New)
      el-submenu.nthuipta(index="6", menu-trigger="hover") 
        template.nthuipta(slot="title") 師資
        el-menu-item.nthuipta(index="6-1") 學士班師資
        el-menu-item.nthuipta(index="6-2") 藝設系師資
        el-menu-item.nthuipta(index="6-3") 音樂系師資
        el-menu-item.nthuipta(index="6-4") 電資學院師資
      el-submenu.nthuipta(index="7", menu-trigger="hover") 
        template.nthuipta(slot="title") 科藝賞析
        el-menu-item.nthuipta(index="7-1") 數位文創作品
        el-menu-item.nthuipta(index="7-2") 互動藝術作品
        el-menu-item.nthuipta(index="7-3") 動力藝術作品
        el-menu-item.nthuipta(index="7-4") 聲音藝術作品
        el-menu-item.nthuipta(index="7-4") 科技表演藝術
      el-menu-item.nthuipta(index="8", menu-trigger="hover") 
        router-link(to="contact" style="text-decoration:none") 聯絡我們
  .section
    .incontact  國立清華大學藝術學院學士班 <br><br> 30014新竹市南大路521號（教學大樓3F) <br><br> +886-3-5715131#78802/ <br><br> ipta@my.nthu.edu.tw 
    .rec 
    .rectext 聯<br><br>繫
    .cube
    .cubee
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
name: "Home",
components: {},
data() {
    return {};
},
};
</script>
<style lang="sass">
.cubee
  position: absolute
  width: 10%
  padding-top: 10%
  background: linear-gradient(225deg,#10B0A4 -0.27%,rgba(237, 240, 81, 0) 100.27%)
  animation: move1 6s infinite
  opacity: 1
@keyframes move1 
  0% 
    transform: translate3d(0, 10vh, 0) rotate(0deg)
  50% 
    transform: translate3d(82.3vw, 10vh, 0) rotate(360deg)
  100% 
    transform: translate3d(0, 10vh, 0) rotate(0deg)
.cube 
  position: absolute
  width: 10%
  padding-top: 10%
  background: linear-gradient(225deg,#10B0A4 -0.27%,rgba(237, 240, 81, 0) 100.27%)
  animation: move 4s infinite
  opacity: 1
@keyframes move 
  0% 
    transform: translate3d(0, 75vh, 0) rotate(0deg)
  50% 
    transform: translate3d(82.3vw, 75vh, 0) rotate(360deg)
  100% 
    transform: translate3d(0, 75vh, 0) rotate(0deg)
.rectext
  position: absolute
  width: 48px
  height: 161px
  left: 375px
  top: 262px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 36px
  line-height: 71px
  letter-spacing: 0.3em
  color: #FFFFFF
.rec
  position: absolute
  width: 99px
  height: 284px
  left: 342px
  top: 239px
  background: linear-gradient(180deg, #E8437F 0%, rgba(232, 67, 127, 0) 100%)
.incontact
  position: absolute
  width: 648px
  height: 181px
  left: 503px
  top: 281px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 24px
  line-height: 25px
  /* or 104% */
  text-align: justify
  letter-spacing: 0.35em
  color: #FFFFFF
.app
    position: absolute
    width: 100%
    height: 100%
    left: 0px
    top: 0px
    background: linear-gradient(180deg, rgba(156, 242, 234, 0.93) 0%, #10B0A4 100%)
.L
    width: 60px
.E
    width: 60px
.A
    letter-spacing: 0.1em
    color: #FFFFFF
.info
    top: 200px
    left: 200px
    font-family: Mandali
    font-style: normal
    font-weight: normal
    font-size: 14px
    line-height: 28px
    letter-spacing: 0.4em
.el-menu
    top: 0px
    left: 0px
    box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25)
.header
    width: 1500px
    height: 400px
    position: fixed
    background: transparent
    left: 50%
    transform: translateX(-50%)
.nthuipta
    top: 0px
    left: 0px
    font-family: Mandali
    font-style: normal
    font-weight: normal
    font-size: 14px
    line-height: 28px
    letter-spacing: 0.3em
    letter-spacing: 0.4em
    transition-property: opacity,width,height,left,font-size,color,z-index,top,background-color
.logo
    z-index: 100
    position: absolute
    top: 10px
    left: 10px
    width: 40px
    height: 40px
    border: 0px
.section
    position: absolute
    width: 1320px
    height: 50%
    background: linear-gradient(180deg, #040466 0%, #06074A 100%)
    box-shadow: 5px 5px 5px 7px rgba(0, 0, 0, 0.25)
    z-index: 0
    top: 2.5%
    left: 50%
    transform: translateX(-50%)
</style>