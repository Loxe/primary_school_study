(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e3b5465"],{"0b2d":function(t,e,i){t.exports=i.p+"img/2-1-brown-active.7722e162.svg"},"127e":function(t,e,i){t.exports=i.p+"img/2-1-white-active.5db15c4e.svg"},"1fb0":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isReset?s("div",{staticClass:"containerBox"},[s("audio",{attrs:{src:i("913d"),autoplay:"autoplay",id:"music"}}),s("div",{staticClass:"horseList contantActive"},t._l(t.horseImg,(function(t,e){return s("img",{key:e,staticClass:"horse",class:"horse_"+e,attrs:{src:t.imgStr,alt:""}})})),0),s("div",{staticClass:"numBox"},t._l(t.numImg,(function(e,i){return s("div",{key:i,staticClass:"num",class:t.numActive==i?"numBg":"",on:{click:function(e){return t.clickNum(e,i)}}},[s("img",{staticClass:"numBox_img",class:t.mouseIdx==i?"numBox_img_hover":"",attrs:{src:t.numActive==i?e.activeStr:e.imgStr,alt:""},on:{mouseover:function(e){t.mouseIdx=i},mouseout:function(e){t.mouseIdx=-1}}})])})),0)]):t._e()},o=[],n={name:"",data(){return{isReset:!0,mouseIdx:-1,numActive:10,horseImg:[{imgStr:i("f809"),hoverStr:i("0b2d")},{imgStr:i("487a"),hoverStr:i("60af")},{imgStr:i("2093"),hoverStr:i("127e")},{imgStr:i("efaf"),hoverStr:i("98d0")},{imgStr:i("b408"),hoverStr:i("2ea6")},{imgStr:i("45f9"),hoverStr:i("4be1")}],numImg:[{imgStr:i("25bc"),activeStr:i("304b")},{imgStr:i("4c88"),activeStr:i("5f66")},{imgStr:i("fda8"),activeStr:i("2013")},{imgStr:i("2261"),activeStr:i("9999")},{imgStr:i("416d"),activeStr:i("641c")},{imgStr:i("d3db"),activeStr:i("a662")}],rightAnswer:3}},activated(){this.bus.$on("replayAudio",this.replay),this.bus.$on("result",this.submitAnswer),this.bus.$on("reload",this.reload)},methods:{replay(){let t=document.getElementById("music");t.play()},clickNum(t,e){this.numActive=e},submitAnswer(){this.rightAnswer==this.numActive+1?this.$store.commit("setResult",1):(this.$store.commit("setResult",2),setTimeout(()=>{this.reload(this.$route.name)},2e3))},reload(t){"2-1-3"==t&&(Object.assign(this.$data,this.$options.data()),this.isReset=!1,this.$nextTick(()=>{this.isReset=!0}))}}},c=n,r=(i("3d6a"),i("cba8")),a=Object(r["a"])(c,s,o,!1,null,"7892aa86",null);e["default"]=a.exports},2013:function(t,e,i){t.exports=i.p+"img/button-3-active.5336826d.svg"},2093:function(t,e,i){t.exports=i.p+"img/2-1-white.efd4b991.svg"},2261:function(t,e,i){t.exports=i.p+"img/button-4.f71e5492.svg"},"25bc":function(t,e,i){t.exports=i.p+"img/button-1.1189f60a.svg"},"2ea6":function(t,e,i){t.exports=i.p+"img/2-1-winered-active.0ac5b495.svg"},"304b":function(t,e,i){t.exports=i.p+"img/button-1-active.1326c233.svg"},"3d6a":function(t,e,i){"use strict";i("9053")},"416d":function(t,e,i){t.exports=i.p+"img/button-5.8b5fa2da.svg"},"45f9":function(t,e,i){t.exports=i.p+"img/2-1-red.15d7e1ea.svg"},"487a":function(t,e,i){t.exports=i.p+"img/2-1-gray.10c954ac.svg"},"4be1":function(t,e,i){t.exports=i.p+"img/2-1-red-active.c24e4cb9.svg"},"4c88":function(t,e,i){t.exports=i.p+"img/button-2.5591506f.svg"},"5f66":function(t,e,i){t.exports=i.p+"img/button-2-active.c7bc8d0b.svg"},"60af":function(t,e,i){t.exports=i.p+"img/2-1-gray-active.e6675e12.svg"},"641c":function(t,e,i){t.exports=i.p+"img/button-5-active.bb61780c.svg"},9053:function(t,e,i){},"913d":function(t,e,i){t.exports=i.p+"media/audio-2-1-3.064fce90.mp3"},"98d0":function(t,e,i){t.exports=i.p+"img/2-1-yellow-active.aad9ff0e.svg"},9999:function(t,e,i){t.exports=i.p+"img/button-4-active.b9bfaef6.svg"},a662:function(t,e,i){t.exports=i.p+"img/button-6-active.53164acc.svg"},b408:function(t,e,i){t.exports=i.p+"img/2-1-winered.e7d5afdb.svg"},d3db:function(t,e,i){t.exports=i.p+"img/button-6.9582c265.svg"},efaf:function(t,e,i){t.exports=i.p+"img/2-1-yellow.c1211e31.svg"},f809:function(t,e,i){t.exports=i.p+"img/2-1-brown.c4d81ddc.svg"},fda8:function(t,e,i){t.exports=i.p+"img/button-3.955958ae.svg"}}]);