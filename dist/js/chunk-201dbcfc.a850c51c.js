(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-201dbcfc"],{1016:function(t,i,s){t.exports=s.p+"img/7-2-option5.5164ce9b.svg"},"13bf":function(t,i,s){t.exports=s.p+"img/7-2-option2.c9aa15a0.svg"},2565:function(t,i,s){t.exports=s.p+"media/audio-7-2.2eaefd72.mp3"},"486f":function(t,i,s){},7395:function(t,i,s){t.exports=s.p+"img/7-2-option4-active.1d219a95.svg"},"75dd":function(t,i,s){t.exports=s.p+"img/7-2-option5-active.10f371e3.svg"},b9b4:function(t,i,s){t.exports=s.p+"img/7-2-option2-active.a2b05e71.svg"},cd8c:function(t,i,s){t.exports=s.p+"img/7-2-option1-active.8ac608f1.svg"},ced0:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.isReset?e("div",{staticClass:"containerBox"},[e("audio",{attrs:{src:s("2565"),autoplay:"autoplay",id:"music"}}),e("div",{staticClass:"question"},[e("div",{staticClass:"questionImg1 ignore_questionImg1"}),e("div",{staticClass:"questionImg2 ignore_questionImg2",on:{click:function(i){return i.target!==i.currentTarget?null:t.pushGraphic(i,0)}}},[e("img",{attrs:{src:"",alt:""},on:{click:function(i){return i.target!==i.currentTarget?null:t.pushImg(i,0)}}}),e("div",{staticClass:"line ignore_line"})]),e("div",{staticClass:"questionImg3 ignore_questionImg3"}),e("div",{staticClass:"questionImg4 ignore_questionImg4",on:{click:function(i){return i.target!==i.currentTarget?null:t.pushGraphic(i,1)}}},[e("img",{attrs:{src:"",alt:""},on:{click:function(i){return i.target!==i.currentTarget?null:t.pushImg(i,1)}}}),e("div",{staticClass:"line ignore_line"})]),e("div",{staticClass:"questionImg5 ignore_questionImg5"})]),e("div",{staticClass:"graphicBox"},t._l(t.graphicImg,(function(i,s){return e("div",{key:s,staticClass:"graphicImg",class:"graphicImg_"+s},[e("img",{staticClass:"graphic",class:"graphic_"+s,attrs:{src:t.numActive==s?i.activeStr:i.imgStr,alt:""},on:{click:function(i){return t.clickGraphic(s)}}})])})),0)]):t._e()},n=[],c={name:"",data(){return{isReset:!0,numActive:10,graphicImg:[{imgStr:s("ec4e"),activeStr:s("cd8c")},{imgStr:s("13bf"),activeStr:s("b9b4")},{imgStr:s("dcda"),activeStr:s("e394")},{imgStr:s("d099"),activeStr:s("7395")},{imgStr:s("1016"),activeStr:s("75dd")}],rightAnswer:[1,2],answer:["",""]}},mounted(){},activated(){this.bus.$on("replayAudio",this.replay),this.bus.$on("result",this.submitAnswer),this.bus.$on("reload",this.reload)},methods:{replay(){let t=document.getElementById("music");t.play()},clickGraphic(t){this.numActive=t},pushGraphic(t,i){this.numActive<10&&(t.target.children[0].src=this.graphicImg[this.numActive].imgStr,this.answer[i]=this.numActive+1)},pushImg(t,i){this.numActive<10&&(t.target.src=this.graphicImg[this.numActive].imgStr,this.answer[i]=this.numActive+1)},submitAnswer(){this.answer.toString()===this.rightAnswer.toString()?this.$store.commit("setResult",1):(this.$store.commit("setResult",2),setTimeout(()=>{this.reload(this.$route.name)},2e3))},reload(t){"7-2"==t&&(Object.assign(this.$data,this.$options.data()),this.isReset=!1,this.$nextTick(()=>{this.isReset=!0}))}}},r=c,a=(s("dd03"),s("cba8")),o=Object(a["a"])(r,e,n,!1,null,"12c6fd02",null);i["default"]=o.exports},d099:function(t,i,s){t.exports=s.p+"img/7-2-option4.978832fb.svg"},dcda:function(t,i,s){t.exports=s.p+"img/7-2-option3.f99217fe.svg"},dd03:function(t,i,s){"use strict";s("486f")},e394:function(t,i,s){t.exports=s.p+"img/7-2-option3-active.a5a94cf3.svg"},ec4e:function(t,i,s){t.exports=s.p+"img/7-2-option1.623e39e6.svg"}}]);