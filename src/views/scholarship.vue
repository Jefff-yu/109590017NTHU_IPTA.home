<template lang="pug">
#app
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
    .trec
    .tin 春之清華獎學金
    .introrec 
    .introt 簡<br><br>介
    .introin 藝術學院在2018年1月榮聘侯王淑昭女士為榮譽院長。侯王淑昭女士長期推動台灣藝文發展不遺餘力，在台灣是最早推動錄像藝術、裝置藝術、行為表演藝術的推動者之一，也是台灣推動工業與藝術結合的重要推手。侯王淑昭女士創辦的「春之文化基金會」於2018年11月捐贈1億元(每年捐款1千萬)挹注清華大學成立「春之清華藝術教育發展基金」，支持清華大學發展藝術教育，包括聘請一流師資、獎勵優秀學生、舉辦科技藝術展覽及藝術活動等。基金其中一個項目為成立「春之清華-藝術卓越獎學金」，用於獎助清華藝術學院學士班的優秀新生，第一年補助每系新生就學4年期間的學雜費，鼓勵藝術領域頂尖的學生選讀清華，細則另定。
    .forrec
    .fort 目<br><br>的
    .forin 「春之清華」藝術卓越獎學金設置目的係期盼透過獎學金之授予，吸引與爭取藝術資優學生就讀清華；同時宣揚「春之清華」藝術教育發展基金設置理念之一 ：培植優秀藝術人才。透過「春之清華」藝術卓越獎學金，鼓勵與吸引藝術領域頂尖的學生選讀清華大學藝術學院學士班，讓卓越藝術苗圃人才在清華播種，藝術之春蔓臨清華。讓台灣頂尖大學中唯有藝術學院的清華大學能孕育台灣卓越藝術人才。
    .wayrec
    .wayt 方<br><br>式
    .wayin 自108學年開始，藝術學院學士班招收之優秀學生（獎學金辦法各系另訂），每學期補助3萬，未來每學期維持在班上前幾名者（各系另定），下一個學期可持續獲此獎學金。
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
.wayin
  position: absolute;
  width: 808px;
  height: 80px;
  left: 338px;
  top: 1320px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF
.wayt
  position: absolute;
  width: 39px;
  height: 172px;
  left: 204px;
  top: 1311px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.wayrec
  position: absolute;
  width: 109px;
  height: 260px;
  left: 169px;
  top: 1259px;
  background: linear-gradient(180deg, #10B0A4 0%, rgba(16, 176, 164, 0) 100%);
.forin
  position: absolute;
  width: 826px;
  height: 226px;
  left: 338px;
  top: 887px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.fort
  position: absolute;
  width: 39px;
  height: 172px;
  left: 204px;
  top: 918px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.forrec
  position: absolute;
  width: 109px;
  height: 260px;
  left: 169px;
  top: 870px;
  background: linear-gradient(180deg, #10B0A4 0%, rgba(16, 176, 164, 0) 100%);
.introin
  position: absolute;
  width: 819px;
  height: 274px;
  left: 345px;
  top: 476px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.introt
  position: absolute;
  width: 39px;
  height: 172px;
  left: 204px;
  top: 525px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.introrec
  position: absolute;
  width: 109px;
  height: 260px;
  left: 169px;
  top: 481px;
  background: linear-gradient(180deg, #10B0A4 0%, rgba(16, 176, 164, 0) 100%);
.tin
  position: absolute;
  width: 358px;
  height: 40px;
  left: 476px;
  top: 221px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.trec
  position: absolute;
  width: 995px;
  height: 183px;
  left: 169px;
  top: 152px;
  background: linear-gradient(90deg, #E8437F 0%, rgba(232, 67, 127, 0) 100%);
#app
    position: absolute
    width: 100%
    height: 2294px
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
    height: 2200px
    background: linear-gradient(180deg, #040466 0%, #06074A 100%)
    box-shadow: 5px 5px 5px 7px rgba(0, 0, 0, 0.25)
    z-index: 0
    top: 2.5%
    left: 50%
    transform: translateX(-50%)
</style>