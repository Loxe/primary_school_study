(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1845b3eb"],{"0c0d":function(o,t,n){o.exports=n.p+"img/10-1-zoonOk2.c8c5cebf.svg"},1312:function(o,t,n){o.exports=n.p+"img/10-1-zoon7.82f189e0.svg"},"134e":function(o,t,n){o.exports=n.p+"img/10-1-zoon9.bfb514e4.svg"},"1a3c":function(o,t,n){o.exports=n.p+"img/10-1-zoonOk5.ec6f82b9.svg"},"35a1":function(o,t,n){"use strict";n("d572")},"3717c":function(o,t,n){o.exports=n.p+"img/10-1-zoon2.5b136304.svg"},"3e1e":function(o,t,n){"use strict";n.r(t);var i=function(){var o=this,t=o.$createElement,i=o._self._c||t;return o.isReset?i("div",{staticClass:"container"},[i("audio",{attrs:{src:n("a728"),autoplay:"autoplay",id:"music"}}),i("div",{staticClass:"content_box"},o._l(o.zoonList,(function(t,n){return t.img1&&2!=t.result?i("img",{key:n,staticClass:"imgStyle",class:"imgCls"+(n+1)+" ignore_imgCls"+(n+1)+(1==t.result?" okZoon"+(n+1)+" ignore_okZoon"+(n+1):""),style:"top:"+t.top+"%;left:"+t.left+"%",attrs:{src:-1!=o.zoonIndex.indexOf(n)?t.img2:t.img1},on:{click:function(t){return o.clickZoon(n)}}}):o._e()})),0),i("img",{staticClass:"elephantImg ignore_elephantImg",attrs:{src:n("9573")}})]):o._e()},s=[],e={data(){return{isReset:!0,zoonIndex:[],zoonList:[{num:1,img1:n("a821"),img2:n("9d52"),top:50,left:90},{num:2,img1:n("3717c"),img2:n("9165"),top:35,left:50},{num:3,img1:n("428c"),img2:n("99ca"),top:60,left:30},{num:4,img1:n("75d5"),img2:n("a2ce9"),top:50,left:0},{num:5,img1:n("3ec3"),img2:n("4507"),top:10,left:65},{num:5,img1:n("d803"),img2:n("a074"),top:30,left:20},{num:6,img1:n("b574"),img2:n("53db"),top:55,left:65},{num:7,img1:n("1312"),img2:n("8cf3"),top:10,left:35},{num:8,img1:n("86bc"),img2:n("b6ec"),top:10,left:5},{num:9,img1:n("134e"),img2:n("83ca"),top:5,left:85}],resultNum:0}},activated(){this.bus.$on("replayAudio",this.replay),this.bus.$on("result",this.submitAnswer),this.bus.$on("reload",this.reload)},methods:{submitAnswer(){5==this.resultNum?this.$store.commit("setResult",1):(this.$store.commit("setResult",2),setTimeout(()=>{this.reload(this.$route.name)},2e3))},clickZoon(o){if(this.zoonList[o].result)return!1;this.zoonIndex.push(o),this.zoonIndex=this.zoonIndex.sort((o,t)=>o-t),2==this.zoonIndex.length&&(this.zoonList[this.zoonIndex[0]].num+this.zoonList[this.zoonIndex[1]].num==10?(this.zoonList[this.zoonIndex[0]].result=1,this.zoonList[this.zoonIndex[0]].img1=n("fc4b")("./10-1-zoonOk"+this.zoonList[this.zoonIndex[0]].num+".svg"),this.zoonList[this.zoonIndex[1]].result=2,this.zoonList[this.zoonIndex[1]].img1=n("fc4b")("./10-1-zoonOk"+this.zoonList[this.zoonIndex[0]].num+".svg"),this.resultNum++):this.$store.commit("setResult",2),this.zoonIndex=[])},replay(){let o=document.getElementById("music");o.play()},reload(o){"10-1"==o&&(Object.assign(this.$data,this.$options.data()),this.isReset=!1,this.$nextTick(()=>{this.isReset=!0}))}}},c=e,g=(n("35a1"),n("cba8")),u=Object(g["a"])(c,i,s,!1,null,"9f581208",null);t["default"]=u.exports},"3ec3":function(o,t,n){o.exports=n.p+"img/10-1-zoon5.1ffdf7e1.svg"},"428c":function(o,t,n){o.exports=n.p+"img/10-1-zoon3.63866667.svg"},4507:function(o,t,n){o.exports=n.p+"img/10-1-zoon5Active.b494f2a4.svg"},"53db":function(o,t,n){o.exports=n.p+"img/10-1-zoon6Active.f5c6b042.svg"},"66c6":function(o,t,n){o.exports=n.p+"img/10-1-zoonOk4.cfc0eca8.svg"},"75d5":function(o,t,n){o.exports=n.p+"img/10-1-zoon4.8de1b449.svg"},"83ca":function(o,t,n){o.exports=n.p+"img/10-1-zoon9Active.71a9d332.svg"},"86bc":function(o,t,n){o.exports=n.p+"img/10-1-zoon8.c9a07327.svg"},"8cf3":function(o,t,n){o.exports=n.p+"img/10-1-zoon7Active.95523d35.svg"},9165:function(o,t,n){o.exports=n.p+"img/10-1-zoon2Active.39eb6a82.svg"},9573:function(o,t,n){o.exports=n.p+"img/10-1-elephantRight.16596266.svg"},"99ca":function(o,t,n){o.exports=n.p+"img/10-1-zoon3Active.98e46055.svg"},"9d06":function(o,t,n){o.exports=n.p+"img/10-1-zoonOk1.553daae9.svg"},"9d52":function(o,t,n){o.exports=n.p+"img/10-1-zoon1Active.dd415fa1.svg"},a074:function(o,t,n){o.exports=n.p+"img/10-1-zoon5-5Active.287c50c8.svg"},a2ce9:function(o,t,n){o.exports=n.p+"img/10-1-zoon4Active.715d83bf.svg"},a728:function(o,t,n){o.exports=n.p+"media/audio-10-1.3b099b36.mp3"},a821:function(o,t,n){o.exports=n.p+"img/10-1-zoon1.76f7d87e.svg"},b574:function(o,t,n){o.exports=n.p+"img/10-1-zoon6.64e9d260.svg"},b6ec:function(o,t,n){o.exports=n.p+"img/10-1-zoon8Active.42c72bc4.svg"},d14b:function(o,t,n){o.exports=n.p+"img/10-1-zoonOk3.92ebf5b1.svg"},d572:function(o,t,n){},d803:function(o,t,n){o.exports=n.p+"img/10-1-zoon5-5.747cbf56.svg"},fc4b:function(o,t,n){var i={"./10-1-zoonOk1.svg":"9d06","./10-1-zoonOk2.svg":"0c0d","./10-1-zoonOk3.svg":"d14b","./10-1-zoonOk4.svg":"66c6","./10-1-zoonOk5.svg":"1a3c"};function s(o){var t=e(o);return n(t)}function e(o){if(!n.o(i,o)){var t=new Error("Cannot find module '"+o+"'");throw t.code="MODULE_NOT_FOUND",t}return i[o]}s.keys=function(){return Object.keys(i)},s.resolve=e,o.exports=s,s.id="fc4b"}}]);