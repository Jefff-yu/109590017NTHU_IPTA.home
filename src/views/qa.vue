<template lang="pug">
#app
  el-header.header
    el-menu.el-menu(
      :default-active="activeIndex",
      menu-trigger="hover",
      mode="horizontal",
      @select="handleSelect",
      text-color="#ffffff",
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
    .q1b
    .q2b
    .q3b
    .q4b
    .q5b
    .q6b
    .q1 1
    .q2 2
    .q3 3
    .q4 4
    .q5 5
    .q6 6
    .qt1 請問藝術學院學士班與藝設系有何不同？
    .qt2 請問藝術學院學士班與清華學院的美資班有何不同？
    .qt3 請問學士班是否大二後會做分流？
    .qt4 請問考進學士班未來修習之專業課程為何？
    .qt5 請問學士班上課地點？
    .qt6 請問學士班畢業後出路？
    .ab1
    .ab2
    .ab3
    .ab4
    .ab5
    .ab6
    .A1 A
    .A2 A
    .A3 A
    .A4 A
    .A5 A
    .A6 A
    .Ain1 (1)藝術學院學士班主要強調當代藝術中的新形式創作-科技藝術(Technology Art)，亦即運用科技媒介（如感測器晶片、網路、虛擬實境 …）從事創作。 <br>(2)藝設系主要有油畫、版畫、雕塑等專業課程以及各類工藝專業課程（木藝、玻璃藝術設計、陶瓷藝術設計…等）。
    .Ain2 (1)藝術學院學士班說明如上，藝術學院有專屬教師，也特別開出的「科技藝術」跨域課程。 <br>(2)清華學院的美資班課程設計為多元，師資與課程來自各學院。
    .Ain3 (1)本院學士班主要把「科技藝術」跨域當成專業領域來培育人才，因此不做分流。<br>(2)學生未來若志趣不合，可透過轉系方式轉至感興趣之學系就讀。
    .Ain4 請參考藝術學院學士班「修課說明」說明。
    .Ain5 (1)目前學士班大部分課程會再南大校區上課，但通識課程以及一些跨域課程會在校本部上課（每天有校本部與南大校區接駁車）。<br>(2)目前已在校本部籌劃設計蓋「藝術學院大樓」與「教育學院大樓」，相關申請已送教育部核准中。
    .Ain6-1 (1)學術研究：本學院師資除來自清華校內藝術學院、電資學院、工學院、生命科學院、人文社會等跨域教師外，我們也將聘進一群來自美國、歐洲與日本充分跨國與跨域的教師。因此有助於學生畢業後，繼續至本校或各大院校碩士班就讀甚至出國深造，而深造領域可以是科技藝術、可以是設計研究所，甚至是創新科技的理工研究所。
    .Ain6-2 (2)職業方向：我們也聘請臺灣在科技藝術活躍且經驗豐富的知名業界團隊或藝術家加入我們的學程教師顧問，讓同學得到多元的指導並在學時獲得產業連結實習。因此，學生畢業很容易與產業接軌，可任職數位藝術創作、資訊系統研發與維護、互動科技藝術、影視廣告、平面設計、網站設計、文化創意等各類產業工作。<br>(3)藝術創作：若學生對藝術創作感興趣，未來可從事專職藝術家。<br>(4)教職部份：修滿「中學教師學程」、實習一學期，並通過教師檢定後，即有資格報考各類中學教師甄試。
</template>

<script>
  export default {
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>
<style lang="sass">
.Ain6-2
  position: absolute;
  width: 978px;
  height: 187px;
  left: 166px;
  top: 1835px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.Ain6-1
  position: absolute;
  width: 772px;
  height: 152px;
  left: 379px;
  top: 1675px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.Ain5
  position: absolute;
  width: 772px;
  height: 152px;
  left: 379px;
  top: 1388px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.Ain4
  position: absolute;
  width: 772px;
  height: 152px;
  left: 379px;
  top: 1161px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.Ain3
  position: absolute;
  width: 772px;
  height: 152px;
  left: 379px;
  top: 840px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.Ain2
  position: absolute;
  width: 772px;
  height: 152px;
  left: 379px;
  top: 540px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.Ain1
  position: absolute;
  width: 742px;
  height: 152px;
  left: 379px;
  top: 186px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.A6
  position: absolute;
  width: 25px;
  height: 40px;
  left: 306px;
  top: 1755px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.A5
  position: absolute;
  width: 25px;
  height: 40px;
  left: 306px;
  top: 1463px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.A4
  position: absolute;
  width: 25px;
  height: 40px;
  left: 306px;
  top: 1166px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.A3
  position: absolute;
  width: 25px;
  height: 40px;
  left: 306px;
  top: 869px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.A2
  position: absolute;
  width: 25px;
  height: 40px;
  left: 306px;
  top: 572px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.A1
  position: absolute;
  width: 25px;
  height: 40px;
  left: 306px;
  top: 264px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.ab6
  position: absolute;
  width: 97px;
  height: 97px;
  left: 270px;
  top: 1726px;
  background: linear-gradient(180deg, #10B0A4 0%, rgba(16, 176, 164, 0) 100%);
.ab5
  position: absolute;
  width: 97px;
  height: 97px;
  left: 270px;
  top: 1434px;
  background: linear-gradient(180deg, #10B0A4 0%, rgba(16, 176, 164, 0) 100%);
.ab4
  position: absolute;
  width: 97px;
  height: 97px;
  left: 270px;
  top: 1137px;
  background: linear-gradient(180deg, #10B0A4 0%, rgba(16, 176, 164, 0) 100%);
.ab3
  position: absolute;
  width: 97px;
  height: 97px;
  left: 270px;
  top: 840px;
  background: linear-gradient(180deg, #10B0A4 0%, rgba(16, 176, 164, 0) 100%);
.ab2
  position: absolute;
  width: 97px;
  height: 97px;
  left: 270px;
  top: 543px;
  background: linear-gradient(180deg, #10B0A4 0%, rgba(16, 176, 164, 0) 100%);
.ab1
  position: absolute;
  width: 97px;
  height: 97px;
  left: 270px;
  top: 235px;
  background: linear-gradient(180deg, #10B0A4 0%, rgba(16, 176, 164, 0) 100%);
.qt6
  position: absolute;
  width: 766px;
  height: 43px;
  left: 379px;
  top: 1627px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.qt5
  position: absolute;
  width: 766px;
  height: 43px;
  left: 379px;
  top: 1345px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.qt4
  position: absolute;
  width: 766px;
  height: 43px;
  left: 379px;
  top: 1062px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.qt3
  position: absolute;
  width: 766px;
  height: 43px;
  left: 379px;
  top: 765px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.qt2
  position: absolute;
  width: 766px;
  height: 43px;
  left: 379px;
  top: 454px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.qt1
  position: absolute;
  width: 704px;
  height: 43px;
  left: 379px;
  top: 146px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.q6
  position: absolute;
  width: 33px;
  height: 46px;
  left: 226px;
  top: 1680px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.q5
  position: absolute;
  width: 33px;
  height: 46px;
  left: 226px;
  top: 1388px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.q4
  position: absolute;
  width: 33px;
  height: 46px;
  left: 226px;
  top: 1091px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.q3
  position: absolute;
  width: 33px;
  height: 46px;
  left: 226px;
  top: 794px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.q2
  position: absolute;
  width: 33px;
  height: 46px;
  left: 226px;
  top: 497px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 40px;
  letter-spacing: 0.35em;
  color: #FFFFFF;
.q1
  position: absolute;
  width: 28px;
  height: 40px;
  left: 226px;
  top: 189px;
  font-family: Mandali;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 40px;
  letter-spacing: 0.35em;
.q6b
  position: absolute;
  width: 192px;
  height: 192px;
  left: 146px;
  top: 1606px;
  border-radius: 96px;
  background: linear-gradient(180deg, #E8437F 0%, rgba(232, 67, 127, 0) 100%);
.q5b
  position: absolute;
  width: 192px;
  height: 192px;
  left: 146px;
  top: 1314px;
  border-radius: 96px;
  background: linear-gradient(180deg, #E8437F 0%, rgba(232, 67, 127, 0) 100%);
.q4b
  position: absolute;
  width: 192px;
  height: 192px;
  left: 146px;
  top: 1017px;
  border-radius: 96px;
  background: linear-gradient(180deg, #E8437F 0%, rgba(232, 67, 127, 0) 100%);
.q3b
  position: absolute;
  width: 192px;
  height: 192px;
  left: 146px;
  top: 720px;
  border-radius: 96px;
  background: linear-gradient(180deg, #E8437F 0%, rgba(232, 67, 127, 0) 100%);
.q2b
  position: absolute;
  width: 192px;
  height: 192px;
  left: 146px;
  top: 423px;
  border-radius: 96px;
  background: linear-gradient(180deg, #E8437F 0%, rgba(232, 67, 127, 0) 100%);
.q1b
  position: absolute;
  width: 192px;
  height: 192px;
  left: 146px;
  top: 115px;
  border-radius: 96px;
  background: linear-gradient(180deg, #E8437F 0%, rgba(232, 67, 127, 0) 100%);
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
    // top: 0px
    // left: 0px
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
.col
    width: 70%
    transform: translate(20%,10%)
    text-align: left
    background-color: #10B0A4
    text-color: #fff
    background-color: #E8437F
    letter-spacing: 0.1em
</style>