<template lang="pug">
  #app
    #container
      el-header.header
        el-menu.el-menu(:default-active='activeIndex' menu-trigger='hover' mode='horizontal' @select='handleSelect' text-color='#fff' background-color='#E8437F' letter-spacing='0.4em' )      
          el-menu-item.E
          el-menu-item.L       
            img.logo( src='~@/assets/cis-1-1.png')
          el-menu-item.A IPTA 藝術學院學士班
          el-menu-item.nthuipta(index='1' menu-trigger='hover') 國立清華大學藝術學院
          el-menu-item.nthuipta(index='2' menu-trigger='hover') 首頁
          el-menu-item.nthuipta(index='3' menu-trigger='hover') 最新消息
          el-submenu.nthuipta(index='4' menu-trigger='hover') 
            template.nthuipta(slot='title') 招生資訊
            el-menu-item.nthuipta(index='4-1') 春之清華卓越獎五名
            el-menu-item.nthuipta(index='4-2') 學士班臉書粉絲頁
            el-submenu.nthuipta(index='4-3' menu-trigger='hover') 
              template.nthuipta(slot='title') ２０２０招生資訊
              el-menu-item(index='4-3-1') ２０２０錄取名單
              el-menu-item(index='4-3-2') ２０２０招生簡章
              el-menu-item(index='4-3-3') ２０２０個人申請第二階段甄選注意事項
              el-menu-item(index='4-3-3') ２０２０報名繳交資料
            el-menu-item.nthuipta(index='4-4') 招生Ｑ＆Ａ
            el-submenu.nthuipta(index='4-5' menu-trigger='hover') 
              template(slot='title') 過往招生資訊
              el-submenu.nthuipta(index='4-5-1' menu-trigger='hover') 
                template.nthuipta(slot='title') ２０１９年招生資訊
                el-menu-item(index='4-5-1-1') ２０１９錄取名單
                el-menu-item(index='4-5-1-2') ２０１９招生簡章
                el-menu-item(index='4-5-1-3') ２０１９個人申請第二階段甄選注意事項
                el-menu-item(index='4-5-1-4') ２０１９報名繳交資料
              el-submenu.nthuipta(index='4-5-2' menu-trigger='hover') 
                template.nthuipta(slot='title') ２０１８年招生資訊
                el-menu-item(index='4-5-2-1') ２０１８錄取名單
                el-menu-item(index='4-5-2-2') ２０１８招生簡章
                el-menu-item(index='4-5-2-3') ２０１８個人申請第二階段甄選注意事項
                el-menu-item(index='4-5-2-4') ２０１８報名繳交資料
          el-submenu.nthuipta(index='5' menu-trigger='hover') 
            template.nthuipta(slot='title') 學士班
            el-menu-item.nthuipta(index='5-1') 學士班簡介
            el-menu-item.nthuipta(index='5-2') 學士班課程
            el-menu-item.nthuipta(index='5-3') 國際交換
            el-menu-item.nthuipta(index='5-4') 藝術學院大樓(New)
          el-submenu.nthuipta(index='6' menu-trigger='hover') 
            template.nthuipta(slot='title') 師資
            el-menu-item.nthuipta(index='6-1') 學士班師資
            el-menu-item.nthuipta(index='6-2') 藝設系師資
            el-menu-item.nthuipta(index='6-3') 音樂系師資
            el-menu-item.nthuipta(index='6-4') 電資學院師資
          el-submenu.nthuipta(index='7' menu-trigger='hover') 
            template.nthuipta(slot='title') 科藝賞析
            el-menu-item.nthuipta(index='7-1') 數位文創作品
            el-menu-item.nthuipta(index='7-2') 互動藝術作品
            el-menu-item.nthuipta(index='7-3') 動力藝術作品
            el-menu-item.nthuipta(index='7-4') 聲音藝術作品
            el-menu-item.nthuipta(index='7-4') 科技表演藝術
          el-menu-item.nthuipta(index='8' menu-trigger='hover') 聯絡我們
      .section
        img.group36(src='~@/assets/Group 36.png')
        .spring 「春之清華」獎學金鼓勵藝術卓越學生「第一志願」選讀清華（5名）
        .characteristic 學士班特色
        .incha1 清華是國際頂尖科技大學
        .incha2 加上合校後的藝術學院 
        .incha3 具備發展「科技藝術」的卓越條件 
        .incha4 我們號召年輕一代的科技藝術專家 
        .incha5 規劃科技藝術跨域特別課程 
        .incha6 並與業界合作推出創意跨域專題
        .coab 核心能力
        .coabin 社會關懷與品格實踐能力美感認知與經典欣賞能力自然感知與創新發想能力邏輯思辨與語文溝通能力國際觀點與在地行動能力資訊掌握與科技應用能力
        img.group35(src='~@/assets/Group 35.png')
        .Lt 清華大學2018年成立藝術學院〝科技藝術〞跨域「學士班」。「科技藝術（TechArt）」是當代藝術的新形式創作也是國際藝術發展的重要趨勢，包含虛擬藝術、互動藝術、電腦動畫、電腦音樂、聲音藝術、科技性表演藝術、混合藝術、網路社群、創客藝術、仿生藝術、生物藝術、人工生命等。在當代數位美學與數位藝術的基礎下，我們結合創新科技，如各種互動感測技術、虛擬實境、物聯網、人工智慧、大數據分析、基因工程...把「科技」與「藝術」結合視為「未來文化學」，培養前瞻性、跨域研究與創作人才。
        .Rt 因應未來產業的發展趨勢，創新科技與當代藝術結合之創作如雨後春筍。清華大學是國內科學與科技的頂尖學府，對藝術學院發展「科技藝術」具有得天獨厚的優勢。本班師資除來自清華校內藝術學院、電資學院、工學院、生命科學院、人文社會等跨域教師外，我們也將聘進一群來自美國、歐洲與日本跨國與跨域的專業教師。也廣邀在臺灣在科技藝術創作領域最頂尖的業界團隊與藝術家加入我們的教學團隊，讓同學得到專業與多元的指導，並在共享學習、共享創意的環境裡，開創未來的產業，盡情發揮自己的潛能。
        button.news1 最新消息
        button.news2 最新消息
        button.actibu 活動公告
        button.awrbu 獲獎公告
        button.offibu 系所公告
        button.i1  
        .S1
        .S3
        .S4
        .S5
        .S6
        .S7
        .S8
        .S9
        button.R2 
        .R3
        .R4
        .R5
        .R6
        .R7
        img.p2_1(src='~@/assets/2.png')
        img.p2_2(src='~@/assets/2.png')
        img.p2_3(src='~@/assets/2.png')
        img.p1_1(src='~@/assets/10.png')
        img.p1_2(src='~@/assets/10.png')
        img.p1_3(src='~@/assets/10.png')
        img.p3_1(src='~@/assets/3.png')
        img.p3_2(src='~@/assets/3.png')
        img.p3_3(src='~@/assets/3.png')
        img.p4_1(src='~@/assets/4.png')
        img.p4_2(src='~@/assets/4.png')
        img.p4_3(src='~@/assets/4.png')
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        i.rain
        button.t1_1 【徵件公告】春之清華—藝術卓越獎科技藝術類 甄選辦法
        button.t1_2 【展覽】《那顆Ｇ1咻！》國立清華大學藝術學院學士班第一屆系展
        button.t1_3 【獲獎】《那顆Ｇ1咻！》國立清華大學藝術學院學士班第一屆系展獲獎名單
        button.t2_1 國立清華大學藝術學院學士班 徵聘【助理教授級以上】專任教師1名
        button.t2_2 【講座】《 科技物件與人類幻象講座IX》6/16 Tue
        button.t2_3 【獲獎】2020春之清華 – 藝術卓越獎 科技藝術類 獲獎名單
        button.t3_1 國立清華大學藝術學院學士班公開徵求班主任候選人啓事
        button.t3_2 【演講】05/28 從腦科學看藝術 
        button.t3_3 【獲獎】2020藝術學院學士班春之清華獎學金 獲獎名單
        button.t4_1 2020個人申請錄取名單
        button.t4_2 【講座】05/26 當代劇場展演實務 華山藝文林璞總監
        button.t4_3 【獲獎】2019藝術學院學士班春之清華獎學金 獲獎名單
      button
        img.group6( src='~@/assets/Group 6.png')
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return{
    }
  }
}
</script>
<style lang="sass">
#app
  position: absolute
  width: 100%
  height: 2294px
  left: 0px
  top: 0px
  background: linear-gradient(180deg, rgba(156, 242, 234, 0.93) 0%, #10B0A4 100%)
  margin: auto
  aligin: center
#container
  margin: 0 auto
  width: 80%
.E
  width: 60px
.A
  letter-spacing: 0.1em
  color: #FFFFFF
.L
  width: 60px
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
  left: -20px
  position: fixed
  background: transparent
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
  left: 60px
  top: 60px
  background: linear-gradient(180deg, #040466 0%, #06074A 100%)
  box-shadow: 5px 5px 5px 7px rgba(0, 0, 0, 0.25)
  z-index: 0
.IPTA
  position: absolute
  width: 90px
  height: 52px
  left: 150px
  top: 15px
  font-family: 
  font-style: normal
  font-weight: normal
  font-size: 36px
  line-height: 71px
  letter-spacing: 0.1em
  color: #FFFFFF
.spring
  position: relative
  width: 1020px
  height: 130px
  left: 145px
  top: -50px
  background: linear-gradient(180deg, rgba(232, 67, 127, 0) 0%, #10B0A4 100%)
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 24px
  line-height: 180px
  margin-top: 10em
  text-align: center
  letter-spacing: 0.3em
  color: #FFFFFF
  z-index: 100
.group6
  z-index: 2
  position: absolute
  width: 1174px
  height: 757.57px
  left: 125px
  top: 120px
  &:hover
    animation: swing 1s ease
    animation-iteration-count: 1
@keyframes swing
  10%
    transform: translateY(10px)
  20%
    transform: translateY(0px)
  30%
    transform: translateY(8px)
  40%
    transform: translateY(0px)
  50%
    transform: translateY(6px)
  60%
    transform: translateY(0px)
  70%
    transform: translateY(4px)
  80%
    transform: translateY(0px)
  85%
    transform: translateY(2px)
  90%
    transform: translateY(0px)
  95%
    transform: translateY(1px)
  96%
    transform: translateY(0px)
  97%
    transform: translateY(0.5px)
  98%
    transform: translateY(0px)
  99%
    transform: translateY(0.5px)
  100%
    transform: translateY(0px)
.header
  z-index: 50
.characteristic
  position: absolute
  width: 55px
  height: 272px
  left: 200px
  top: 742px
  background: linear-gradient(180deg, #E8437F 0%, rgba(232, 67, 127, 0) 100%)
  writing-mode: vertical-lr 
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 24px
  line-height: 55px
  text-align: center
  letter-spacing: 0.5em
  color: #FFFFFF
.incha1
  position: absolute
  width: 343px
  height: 187.38px
  left: 294px
  top: 780px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 35px
  text-align: justify
  letter-spacing: 0.5em
  color: #FFFFFF
.incha2
  position: absolute
  width: 343px
  height: 187.38px
  left: 294px
  top: 810px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 35px
  text-align: justify
  letter-spacing: 0.5em
  color: #FFFFFF
.incha3
  position: absolute
  width: 343px
  height: 187.38px
  left: 294px
  top: 840px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 35px
  text-align: justify
  letter-spacing: 0.5em
  color: #FFFFFF
.incha4
  position: absolute
  width: 360px
  height: 187.38px
  left: 294px
  top: 870px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 35px
  text-align: justify
  letter-spacing: 0.5em
  color: #FFFFFF
.incha5
  position: absolute
  width: 343px
  height: 187.38px
  left: 294px
  top: 900px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 35px
  text-align: justify
  letter-spacing: 0.5em
  color: #FFFFFF
.incha6
  position: absolute
  width: 343px
  height: 187.38px
  left: 294px
  top: 930px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 35px
  text-align: justify
  letter-spacing: 0.5em
  color: #FFFFFF
.coab
  position: absolute
  width: 55px
  height: 272px
  left: 712px
  top: 742px
  background: linear-gradient(180deg, #E8437F 0%, rgba(232, 67, 127, 0) 100%)
  writing-mode: vertical-lr 
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 24px
  line-height: 55px
  text-align: center
  letter-spacing: 1em
  color: #FFFFFF
.coabin
  position: absolute
  width: 330px
  height: 187.38px
  left: 804px
  top: 778px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 30px
  text-align: center
  letter-spacing: 1em
  color: #FFFFFF
.group35
  position: absolute
  width: 961.3px
  height: 250px
  left: 191px
  top: 1126px
.Lt
  position: absolute
  width: 438.18px
  height: 251px
  left: 195px
  top: 1123px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 13px
  line-height: 25px
  text-align: justify
  letter-spacing: 0.35em
  color: #FFFFFF
.Rt
  position: absolute
  width: 438.18px
  height: 251px
  left: 709px
  top: 1129px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 13px
  line-height: 25px
  text-align: justify
  letter-spacing: 0.35em
  color: #FFFFFF
.group36
  position: absolute
  width: 1320px
  height: 2200px
  left: -70px
  top: 0px
.news1
  position: absolute
  width: 200px
  height: 34px
  left: 578px
  top: 1537px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 36px
  line-height: 25px
  text-align: justify
  letter-spacing: 0.3em
  color:#FFFFFF
  button
  border: transparent
  background: transparent
  cursor: pointer
  transition: all 0.2s ease-in-out
  &:hover
    transform: scale(1.1)
.news2
  position: absolute
  width: 200px
  height: 34px
  left: 580px
  top: 1537px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 36px
  line-height: 25px
  text-align: justify
  letter-spacing: 0.3em
  color: #9CF2EA
  button
  border: transparent
  background: transparent
  cursor: pointer
  transition: all 0.2s ease-in-out
  &:hover
    transform: scale(1.1)
.actibu
  position: absolute
  width: 184px
  height: 51px
  left: 576px
  top: 1613px
  background: linear-gradient(180deg, #10B0A4 0%, rgba(16, 176, 164, 0) 100%)
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 24px
  line-height: 50px
  text-align: center
  letter-spacing: 0.35em
  color: #FFFFFF
  button
  border: transparent
  cursor: pointer
  transition: all 0.2s ease-in-out
  &:hover
    transform: scale(1.1)
.awrbu
  position: absolute
  width: 184px
  height: 51px
  left: 903px
  top: 1613px
  background: linear-gradient(180deg, #10B0A4 0%, rgba(16, 176, 164, 0) 100%)
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 24px
  line-height: 50px
  text-align: center
  letter-spacing: 0.35em
  color: #FFFFFF
  button
  border: transparent
  cursor: pointer
  transition: all 0.2s ease-in-out
  &:hover
    transform: scale(1.1)
.offibu
  position: absolute
  width: 184px
  height: 51px
  left: 253px
  top: 1613px
  background: linear-gradient(180deg, #10B0A4 0%, rgba(16, 176, 164, 0) 100%)
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 24px
  line-height: 50px
  text-align: center
  letter-spacing: 0.35em
  color: #FFFFFF
  button
  border: transparent
  cursor: pointer
  transition: all 0.2s ease-in-out
  &:hover
    transform: scale(1.1)
.p1_1
  left: 200px
  top: 1697px
  position: absolute
.p1_2
  left: 525px
  top: 1697px
  position: absolute
.p1_3
  left: 850px
  top: 1697px
  position: absolute
.p2_1
  left: 200px
  top: 1788px
  position: absolute
.p2_2
  left: 525px
  top: 1788px
  position: absolute
.p2_3
  left: 850px
  top: 1788px
  position: absolute
.p3_1
  left: 200px
  top: 1879px
  position: absolute
.p3_2
  left: 525px
  top: 1879px
  position: absolute
.p3_3
  left: 850px
  top: 1879px
  position: absolute
.p4_1
  left: 200px
  top: 1970px
  position: absolute
.p4_2
  left: 525px
  top: 1970px
  position: absolute
.p4_3
  left: 850px
  top: 1970px
  position: absolute
.t1_1
  position: absolute
  width: 258px
  height: 44px
  left: 233px
  top: 1700px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 11px
  line-height: 22px
  letter-spacing: 0.3em
  color: #FFFFFF
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  button
  border: transparent
  background: transparent
  cursor: pointer
  transition: all 0.2s ease-in-out
  &:hover
    transform: scale(1.1)
.t1_2
  position: absolute
  width: 258px
  height: 44px
  left: 553px
  top: 1700px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 11px
  line-height: 22px
  letter-spacing: 0.3em
  color: #FFFFFF
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  button
  border: transparent
  background: transparent
  cursor: pointer
  transition: all 0.2s ease-in-out
  &:hover
    transform: scale(1.1)
.t1_3
  position: absolute
  width: 265px
  height: 44px
  left: 880px
  top: 1700px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 11px
  line-height: 22px
  letter-spacing: 0.2em
  color: #FFFFFF
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  button
  border: transparent
  background: transparent
  cursor: pointer
  transition: all 0.2s ease-in-out
  &:hover
    transform: scale(1.1)
.t2_1
  position: absolute
  width: 258px
  height: 44px
  left: 233px
  top: 1790px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 11px
  line-height: 22px
  letter-spacing: 0.3em
  color: #FFFFFF
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  button
  border: transparent
  background: transparent
  cursor: pointer
  transition: all 0.2s ease-in-out
  &:hover
    transform: scale(1.1)
.t2_2
  position: absolute
  width: 258px
  height: 44px
  left: 553px
  top: 1790px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 11px
  line-height: 22px
  letter-spacing: 0.3em
  color: #FFFFFF
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  button
  border: transparent
  background: transparent
  cursor: pointer
  transition: all 0.2s ease-in-out
  &:hover
    transform: scale(1.1)
.t2_3
  position: absolute
  width: 265px
  height: 44px
  left: 880px
  top: 1790px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 11px
  line-height: 22px
  letter-spacing: 0.3em
  color: #FFFFFF
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  button
  border: transparent
  background: transparent
  cursor: pointer
  transition: all 0.2s ease-in-out
  &:hover
    transform: scale(1.1)
.t3_1
  position: absolute
  width: 258px
  height: 44px
  left: 233px
  top: 1880px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 11px
  line-height: 22px
  letter-spacing: 0.3em
  color: #FFFFFF
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  button
  border: transparent
  background: transparent
  cursor: pointer
  transition: all 0.2s ease-in-out
  &:hover
    transform: scale(1.1)
.t3_2
  position: absolute
  width: 258px
  height: 44px
  left: 553px
  top: 1883px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 11px
  line-height: 22px
  letter-spacing: 0.3em
  color: #FFFFFF
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  button
  border: transparent
  background: transparent
  cursor: pointer
  transition: all 0.2s ease-in-out
  &:hover
    transform: scale(1.1)
.t3_3
  position: absolute
  width: 265px
  height: 44px
  left: 880px
  top: 1880px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 11px
  line-height: 22px
  letter-spacing: 0.3em
  color: #FFFFFF
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  button
  border: transparent
  background: transparent
  cursor: pointer
  transition: all 0.2s ease-in-out
  &:hover
    transform: scale(1.1)
.t4_1
  position: absolute
  width: 258px
  height: 44px
  left: 233px
  top: 1975px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 11px
  line-height: 22px
  letter-spacing: 0.3em
  color: #FFFFFF
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  button
  border: transparent
  background: transparent
  cursor: pointer
  transition: all 0.2s ease-in-out
  &:hover
    transform: scale(1.1)
.t4_2
  position: absolute
  width: 258px
  height: 44px
  left: 553px
  top: 1970px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 11px
  line-height: 22px
  letter-spacing: 0.3em
  color: #FFFFFF
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  button
  border: transparent
  background: transparent
  cursor: pointer
  transition: all 0.2s ease-in-out
  &:hover
    transform: scale(1.1)
.t4_3
  position: absolute
  width: 265px
  height: 44px
  left: 880px
  top: 1970px
  font-family: Mandali
  font-style: normal
  font-weight: normal
  font-size: 11px
  line-height: 22px
  letter-spacing: 0.3em
  color: #FFFFFF
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  button
  border: transparent
  background: transparent
  cursor: pointer
  transition: all 0.2s ease-in-out
  &:hover
    transform: scale(1.1)
.i1
  position: absolute
  left: 810px
  top: 400px
  height: 100px
  width: 100px
  background: transparent
  border-radius: 50%
  border: 1px solid #FFFFFF
  opacity: 0.2
  animation: spinner5 1000ms linear infinite
@keyframes spinner5
  to
    transform: scale(6)
    opacity: 0
.S1
  position: absolute
  left: 810px
  top: 700px
  height: 30px
  width: 30px
  background: transparent
  border-radius: 0%
  border: 1px solid #FFFFFF
  opacity: 0.2
  animation: spinner1 1000ms linear infinite
@keyframes spinner1
  to
    transform: scale(5)
    opacity: 0
.R2
  position: absolute
  left: 510px
  top: 770px
  height: 50px
  width: 50px
  background: transparent
  border-radius: 0%
  border: 1px solid #FFFFFF
  opacity: 0.2
  animation: spinner3 1000ms ease infinite
@keyframes spinner3
  to
    transform: rotate(360deg)
.R3
  position: absolute
  left: 600px
  top: 950px
  height: 100px
  width: 100px
  background: transparent
  border-radius: 0%
  border: 1px solid #FFFFFF
  opacity: 0.2
  animation: spinner3 2000ms ease infinite
@keyframes spinner3
  to
    transform: rotate(360deg)
.R4
  position: absolute
  left: 550px
  top: 900px
  height: 200px
  width: 200px
  background: transparent
  border-radius: 0%
  border: 1px solid #FFFFFF
  opacity: 0.2
  animation: spinner4 1000ms ease infinite
@keyframes spinner4
  to
    transform: rotate(180deg)
.R5
  position: absolute
  left: 500px
  top: 850px
  height: 300px
  width: 300px
  background: transparent
  border-radius: 0%
  border: 1px solid #FFFFFF
  opacity: 0.2
  animation: spinner3 2000ms ease infinite
@keyframes spinner3
  to
    transform: rotate(360deg)
.R6
  position: absolute
  left: 450px
  top: 800px
  height: 400px
  width: 400px
  background: transparent
  border-radius: 0%
  border: 1px solid #FFFFFF
  opacity: 0.2
  animation: spinner4 1000ms ease infinite
.R7
  position: absolute
  left: 400px
  top: 750px
  height: 500px
  width: 500px
  background: transparent
  border-radius: 0%
  border: 1px solid #FFFFFF
  opacity: 0.2
  animation: spinner3 2000ms ease infinite
.S3
  position: absolute
  left: 510px
  top: 1700px
  height: 30px
  width: 30px
  background: transparent
  border-radius: 0%
  border: 1px solid #FFFFFF
  opacity: 0.2
  animation: spinner1 1200ms linear infinite
.S4
  position: absolute
  left: 310px
  top: 900px
  height: 10px
  width: 10px
  background: transparent
  border-radius: 0%
  border: 1px solid #FFFFFF
  opacity: 0.2
  animation: spinner1 8000ms linear infinite
.S5
  position: absolute
  left: 660px
  top: 1200px
  height: 50px
  width: 50px
  background: transparent
  border-radius: 0%
  border: 1px solid #FFFFFF
  opacity: 0.2
  animation: spinner1 6000ms linear infinite
.S6
  position: absolute
  left: 110px
  top: 300px
  height: 100px
  width: 100px
  background: transparent
  border-radius: 0%
  border: 1px solid #FFFFFF
  opacity: 0.2
  animation: spinner1 5000ms linear infinite
.S7
  position: absolute
  left: 1000px
  top: 1000px
  height: 70px
  width: 70px
  background: transparent
  border-radius: 0%
  border: 1px solid #FFFFFF
  opacity: 0.2
  animation: spinner1 2000ms linear infinite
.S8
  position: absolute
  left: 110px
  top: 1600px
  height: 30px
  width: 30px
  background: transparent
  border-radius: 0%
  border: 1px solid #FFFFFF
  opacity: 0.2
  animation: spinner1 3000ms linear infinite
.S9
  position: absolute
  left: 910px
  top: 1800px
  height: 50px
  width: 50px
  background: transparent
  border-radius: 0%
  border: 1px solid #FFFFFF
  opacity: 0.2
  animation: spinner1 2000ms linear infinite
.rain 
  background: #10B0A4 
  height: 200px
  position: absolute
  width: 5px
  opacity: 1
$rain: 150
@for $i from 1 through $rain 
  $top: (random(90)) * 1%
  $left: random(100) * 1%
  $opacity: (random(30) + 30) * 0.01
  $delay: random(20) - 1s
  .rain:nth-of-type(#{$i}) 
    animation-name: rain-#{$i}
    animation-delay: $delay
    animation-duration: random(6) + 5s
    animation-iteration-count: infinite
    left: $left
    opacity: $opacity
    top: -$top
  @keyframes rain-#{$i} 
    0% 
      left: $left
      opacity: $opacity
      top: -$top
    100% 
      opacity: 0
      top: $top 
</style>