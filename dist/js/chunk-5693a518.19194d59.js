(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5693a518"],{"33f2":function(t,e,i){t.exports=i.p+"img/button-11.a32a33a0.svg"},"435a":function(t,e,i){t.exports=i.p+"media/audio-11-2.2df8e1f8.mp3"},"463f":function(t,e,i){"use strict";i("ff71")},"5ee2":function(t,e,i){t.exports=i.p+"img/button-7-active.e0bea711.svg"},"6f64":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isReset?s("div",{staticClass:"containerBox"},[s("audio",{attrs:{src:i("435a"),autoplay:"autoplay",id:"music"}}),s("div",{staticClass:"numBox"},t._l(t.numImg,(function(e,i){return s("div",{key:i,staticClass:"numImg ignore_numImg",on:{click:function(e){return t.clickNum(i)}}},[s("img",{staticClass:"numBox_img ignore_numBox_img",class:t.moveIdx==i?"numBox_img_hover ignore_numBox_img_hover":"",attrs:{src:t.numActive==i?e.activeStr:e.imgStr,alt:""},on:{mouseover:function(e){t.moveIdx=i},mouseout:function(e){t.moveIdx=-1}}})])})),0)]):t._e()},n=[],o={name:"",data(){return{isReset:!0,moveIdx:-1,numActive:99,numImg:[{imgStr:i("a122"),activeStr:i("5ee2"),num:7},{imgStr:i("99ed"),activeStr:i("d4d2"),num:9},{imgStr:i("b243"),activeStr:i("701d"),num:10},{imgStr:i("33f2"),activeStr:i("fc1c"),num:11}],rightAnswer:11,answer:""}},mounted(){},activated(){this.bus.$on("replayAudio",this.replay),this.bus.$on("result",this.submitAnswer),this.bus.$on("reload",this.reload)},methods:{replay(){let t=document.getElementById("music");t.play()},clickNum(t){this.numActive=t,this.answer=this.numImg[t].num},submitAnswer(){this.answer==this.rightAnswer?this.$store.commit("setResult",1):(this.$store.commit("setResult",2),setTimeout(()=>{this.reload(this.$route.name)},2e3))},reload(t){"11-2"==t&&(Object.assign(this.$data,this.$options.data()),this.isReset=!1,this.$nextTick(()=>{this.isReset=!0}))}}},u=o,a=(i("463f"),i("cba8")),c=Object(a["a"])(u,s,n,!1,null,"31c57fc4",null);e["default"]=c.exports},"701d":function(t,e,i){t.exports=i.p+"img/button-10-active.a02b57e2.svg"},"99ed":function(t,e,i){t.exports=i.p+"img/button-9.60aac594.svg"},a122:function(t,e,i){t.exports=i.p+"img/button-7.79288b23.svg"},b243:function(t,e,i){t.exports=i.p+"img/button-10.72f707c8.svg"},d4d2:function(t,e,i){t.exports=i.p+"img/button-9-active.6c04ab7a.svg"},fc1c:function(t,e,i){t.exports=i.p+"img/button-11-active.bba6105d.svg"},ff71:function(t,e,i){}}]);