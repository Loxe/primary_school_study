(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2664543f"],{1065:function(t,e,i){t.exports=i.p+"img/5-1-letter10-active.4d9ce226.svg"},1111:function(t,e,i){t.exports=i.p+"img/5-1-letter9.7fc8b0de.svg"},"1a18":function(t,e,i){t.exports=i.p+"img/5-1-letter3-active.e679da15.svg"},"2cd5":function(t,e,i){t.exports=i.p+"img/5-1-letter6.b9a25f48.svg"},3474:function(t,e,i){t.exports=i.p+"img/5-1-letter7.70e02da5.svg"},"4bbe":function(t,e,i){t.exports=i.p+"img/5-1-letter4-active.e5f7b107.svg"},"4c15":function(t,e,i){t.exports=i.p+"img/5-1-letter5.d7a17049.svg"},"598c":function(t,e,i){t.exports=i.p+"img/5-1-letter3.eaf55842.svg"},"5c4c":function(t,e,i){t.exports=i.p+"img/5-1-letter2.44bc5113.svg"},"5d0b":function(t,e,i){t.exports=i.p+"img/5-1-letter9-active.2e3d7702.svg"},6582:function(t,e,i){t.exports=i.p+"img/5-1-postbox7.4ce8242c.svg"},7451:function(t,e,i){t.exports=i.p+"img/5-1-letter1-active.ce7217b1.svg"},"771f":function(t,e,i){},8861:function(t,e,i){t.exports=i.p+"img/5-1-letter10.100c7258.svg"},"9e71":function(t,e,i){t.exports=i.p+"img/5-1-letter5-active.487973b9.svg"},a6d3:function(t,e,i){t.exports=i.p+"img/5-1-letter2-active.d3f47015.svg"},c522:function(t,e,i){"use strict";i("771f")},c6ce:function(t,e,i){t.exports=i.p+"img/5-1-letter7-active.1f0b3113.svg"},c6da:function(t,e,i){t.exports=i.p+"img/5-1-letter8-active.03d6c330.svg"},c6e2:function(t,e,i){t.exports=i.p+"media/audio-5-1.a3ccb7de.mp3"},caed:function(t,e,i){t.exports=i.p+"img/5-1-postbox5.173249c4.svg"},cb33:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isReset?s("div",{staticClass:"containerBox"},[s("audio",{attrs:{src:i("c6e2"),autoplay:"autoplay",id:"music"}}),s("div",{staticClass:"mailBox"},[s("img",{staticClass:"postbox ignore_postbox",attrs:{src:i("caed")},on:{mouseenter:function(e){return t.enterFn(5,t.answerFive)}}}),s("img",{staticClass:"postbox ignore_postbox",attrs:{src:i("6582")},on:{mouseenter:function(e){return t.enterFn(7,t.answerSeven)}}}),s("img",{staticClass:"postbox ignore_postbox",attrs:{src:i("d4c5")},on:{mouseenter:function(e){return t.enterFn(9,t.answerNine)}}})]),s("div",{staticClass:"letterBox"},t._l(t.letterImg,(function(t,e){return s("div",{directives:[{name:"drag",rawName:"v-drag"}],key:e,staticClass:"letter ignore_letter",class:"letterCls"+(e+1),style:"background-image:url("+t.imgStr+")",attrs:{"data-idx":e}})})),0)]):t._e()},n=[],r={name:"",data(){return{isReset:!0,letterImg:[{imgStr:i("d780"),activeStr:i("7451"),num:9},{imgStr:i("5c4c"),activeStr:i("a6d3"),num:9},{imgStr:i("598c"),activeStr:i("1a18"),num:5},{imgStr:i("ecc1"),activeStr:i("4bbe"),num:10},{imgStr:i("4c15"),activeStr:i("9e71"),num:6},{imgStr:i("2cd5"),activeStr:i("d728"),num:9},{imgStr:i("3474"),activeStr:i("c6ce"),num:7},{imgStr:i("f60a"),activeStr:i("c6da"),num:9},{imgStr:i("1111"),activeStr:i("5d0b"),num:7},{imgStr:i("8861"),activeStr:i("1065"),num:5}],dragIndex:-1,mouseTimer:null,answerFive:[],answerSeven:[],answerNine:[]}},activated(){this.bus.$on("replayAudio",this.replay),this.bus.$on("result",this.submitAnswer),this.bus.$on("reload",this.reload)},directives:{drag:{inserted:function(t,e,i){t.onmousedown=function(e){let s=e.clientX-t.offsetLeft,n=e.clientY-t.offsetTop;document.onmousemove=function(e){let i=e.clientX-s,r=e.clientY-n;t.style.left=i+"px",t.style.top=r+"px"},document.onmouseup=function(e){i.context.dragIndex=Number(e.target.dataset.idx),i.context.mouseTimer=setTimeout(()=>{i.context.dragIndex=-1},100),t.style.left="",t.style.top="",document.onmousemove=null,document.onmouseup=null}}}}},methods:{replay(){let t=document.getElementById("music");t.play()},enterFn(t,e){"number"==typeof this.dragIndex&&this.dragIndex>=0&&(clearTimeout(this.mouseTimer),this.letterImg[this.dragIndex].num==t&&(this.letterImg[this.dragIndex].imgStr="",e.push(t)),this.$forceUpdate(),this.dragIndex=-1)},submitAnswer(){"55"==this.answerFive.join("")&&"77"==this.answerSeven.join("")&&"9999"==this.answerNine.join("")?this.$store.commit("setResult",1):(this.$store.commit("setResult",2),setTimeout(()=>{this.reload(this.$route.name)},2e3))},reload(t){"5-1"==t&&(Object.assign(this.$data,this.$options.data()),this.isReset=!1,this.$nextTick(()=>{this.isReset=!0}))}}},o=r,c=(i("c522"),i("cba8")),a=Object(c["a"])(o,s,n,!1,null,"0fd0bf51",null);e["default"]=a.exports},d4c5:function(t,e,i){t.exports=i.p+"img/5-1-postbox9.e65ec1ed.svg"},d728:function(t,e,i){t.exports=i.p+"img/5-1-letter6-active.e5f0ff1f.svg"},d780:function(t,e,i){t.exports=i.p+"img/5-1-letter1.23797a26.svg"},ecc1:function(t,e,i){t.exports=i.p+"img/5-1-letter4.b01022a5.svg"},f60a:function(t,e,i){t.exports=i.p+"img/5-1-letter8.a206cbff.svg"}}]);