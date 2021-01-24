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
        router-link(to="Home", style="text-decoration: none") 首頁
      el-menu-item.nthuipta(index="3", menu-trigger="hover") 最新消息
      el-submenu.nthuipta(index="4", menu-trigger="hover") 
        template.nthuipta(slot="title") 招生資訊
        el-menu-item.nthuipta(index="4-1") 
          router-link(
            to="scholarship",
            style="text-decoration: none; color: #ffffff"
          ) 春之清華卓越獎五名
        el-menu-item.nthuipta(index="4-2") 學士班臉書粉絲頁
        el-submenu.nthuipta(index="4-3", menu-trigger="hover") 
          template.nthuipta(slot="title") ２０２０招生資訊
          el-menu-item(index="4-3-1") ２０２０錄取名單
          el-menu-item(index="4-3-2") ２０２０招生簡章
          el-menu-item(index="4-3-3") ２０２０個人申請第二階段甄選注意事項
          el-menu-item(index="4-3-3") ２０２０報名繳交資料
        el-menu-item.nthuipta(index="4-4") 
          router-link(to="qa", style="text-decoration: none; color: #ffffff") 招生Ｑ＆Ａ
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
          router-link(to="intro", style="text-decoration: none; color: #ffffff") 學士班簡介
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
        router-link(to="contact", style="text-decoration: none") 聯絡我們
  .section
    .introrec
    .intro 學士班簡介
    .inleft 國立清華大學在2016年11月與國立新竹教育大學合校後，增設了以培養優秀美術設計與音樂人才為宗旨的「藝術學院」，前為「國立新竹教育大學 人文社會與藝術學院」。目前藝術學院設有藝術與設計學系（創作組、設計組、碩士班及在職專班）、音樂學系（學士班、碩士班及在職專班），專任教師25位（藝術與設計學系14位、音樂學系11位），院以培養優秀美術設計與音樂人才為宗旨，在多元的師資培育激盪下，培育出許多優秀的藝術家和設計新銳，並屢獲國內外大獎，展現出令人矚目的創作能量，受相關產業矚目與青睞。
    .inright 除此，本學院106學年度成立藝術學院【〝科技藝術〞跨域學士班】， 由許素朱(小牛）院長率領藝術學院教師以及臺灣一群科技藝術特種部隊擔任教師與顧問指導，特別聘請陶亞倫老師擔任學士班班主任，希望培養一群臺灣科技藝術的尖兵。106學年度也會開始籌設【科技藝術研究所】，含新媒體藝術組、創新科技組等兩組。數位時代來臨，新形式的科技與藝術結合之創作如雨後春筍，清華大學的是國內科學與科技頂尖學府，這對藝術學院發展「科技藝術」具有得天獨厚的優勢。期望為清華創造新的「科技藝術跨域 DNA」、以及「科技藝術跨域的新文化」，讓清華成為臺灣藝術界的跨域先鋒！
    .glrec 
    .glt 科技藝術<br>，新當代藝術
    .gli 「科技藝術（TechArt）」是當代藝術的新形式創作也是國際藝術發展的重要趨勢，包含互動藝術、電腦動畫、電腦音樂與聲音藝術、數位表演、混合藝術、數位社群、創客藝術…等。在當代數位美學與數位藝術的基礎下，我們結合創新科技，如各種互動感測技術、虛擬/擴增/混合實境、物聯網、人工智慧、大數據分析…，把「科技藝術」結合視為「專業領域」在清華做跨域研究創作人才培育。在清華強大的科技研發環境下，科技與藝術充滿著難以預期的實驗性與挑戰性，期締造臺灣TechArt 2.0新契機與新氣象！
    .grrec
    .grt 共享環境發揮創意美學
    .gri 我們師資群除來自清華校內藝術學院、電資學院、工學院、人文社會等跨域教師外，我們也將聘進一群來自美國、歐洲與日本跨國與跨域的教師。我們也聘請臺灣在科技藝術活躍且經驗豐富的知名業界團隊或藝術家（豪華朗機工、帝凱科技、何理互動設計…）加入我們的教師群。我們師資每個人本身都是跨領域背景，所開的每一門課也都是已跨域融合後的課。同學可在跨域多元指導與跨域共享學習環境裡，發揮自我與創意美學！
    .rlrec
    .rli 發揮數位自造無限能力
    .rlt 同學進來需自己make自己的學習環境。自己動手做自己的創客桌子，自己動手make數位機具。在自己make的創客空間，用自己make的數位機具，繼續創造更多科技藝術碰撞的研究與創作。
    .rrrec
    .rri 數位藝術跨域文創轉繹
    .rrt 我們結合智慧科技與創新藝術，讓科技謙和無形的融入數位藝術的創作，讓藝術展現當代的無限可能性；而在數位文創應用方面，期盼科技能讓生活空間充滿智慧與互動，隨時隨地提供資訊讓所有數據導入城市社會，讓整個社會形成一個大的智慧城市實驗室，並最終期盼促成創意人才育成及數位文創經濟之發展。
    .btnrec
    .btnt 我們歡迎喜歡科技與藝術的夥伴，來報考清大藝術學院科技藝術跨域學士班，讓我們一起來締造清大「科技藝術跨域的新DNA」以及「科技藝術跨域的新文化」！
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
.btnt
  position: absolute;
  width: 933px;
  height: 131px;
  left: 186px;
  top: 1913px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.btnrec
  position: absolute;
  width: 1091px;
  height: 244px;
  left: 107px;
  top: 1860px;
  background: linear-gradient(180deg, #10B0A4 0%, rgba(16, 176, 164, 0) 100%);
.rrt
  position: absolute;
  width: 450px;
  height: 291px;
  left: 717px;
  top: 1529px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.rri
  position: absolute;
  width: 327px;
  height: 44px;
  left: 718px;
  top: 1409px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.rrrec
  position: absolute;
  width: 465px;
  height: 99px
  left: 667px;
  top: 1380px;
  background: linear-gradient(90deg, #E8437F 0%, rgba(232, 67, 127, 0) 100%)
.rlt
  position: absolute
  width: 444px
  height: 197px
  left: 139px
  top: 1520px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 40px
  letter-spacing: 0.35em
  color: #FFFFFF
.rli
  position: absolute
  width: 350px
  height: 44px
  left: 139px
  top: 1409px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 24px
  line-height: 40px
  letter-spacing: 0.35em
  color: #FFFFFF
.rlrec
  position: absolute
  width: 474px
  height: 99px
  left: 99px
  top: 1380px
  background: linear-gradient(90deg, #E8437F 0%, rgba(232, 67, 127, 0) 100%)
.gri
  position: absolute
  width: 413px
  height: 355px
  left: 811px
  top: 751px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 40px
  letter-spacing: 0.35em
  color: #FFFFFF
.grt
  position: absolute
  width: 25px
  height: 405px
  left: 705px
  top: 747px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 24px
  line-height: 40px
  letter-spacing: 0.35em
  color: #FFFFFF
.grrec
  position: absolute
  width: 99px
  height: 465px
  left: 668px
  top: 712px
  background: linear-gradient(180deg, #10B0A4 0%, rgba(16, 176, 164, 0) 100%)
.gli
  position: absolute
  width: 379px
  height: 474px
  left: 227px
  top: 708px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 40px
  letter-spacing: 0.35em
  color: #FFFFFF
.glt
  position: absolute
  width: 44px
  height: 404px
  left: 139px
  top: 751px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 24px
  line-height: 40px
  letter-spacing: 0.35em
  color: #FFFFFF
.glrec
  position: absolute
  width: 99px
  height: 465px
  left: 100px
  top: 717px
  background: linear-gradient(180deg, #10B0A4 0%, rgba(16, 176, 164, 0) 100%)
.inright
  position: absolute
  width: 573px
  height: 411px
  left: 663px
  top: 259px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 40px
  letter-spacing: 0.35em
  color: #FFFFFF
.inleft
  position: absolute
  width: 516px
  height: 395px
  left: 100px
  top: 259px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 40px
  letter-spacing: 0.35em
  color: #FFFFFF
.introrec
  position: absolute
  width: 1200px
  height: 99px
  left: 100px
  top: 117px
  background: linear-gradient(90deg, #E8437F 0%, rgba(232, 67, 127, 0) 100%)
.intro
  position: absolute
  width: 270px
  height: 40px
  left: 120px
  top: 148px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 36px
  line-height: 40px
  letter-spacing: 0.35em
  color: #FFFFFF
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
  color: #FFFFFF
</style>