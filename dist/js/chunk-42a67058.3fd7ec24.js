(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42a67058"],{"03e3":function(t,i,s){t.exports=s.p+"img/button-16-active.741e516e.svg"},"0521":function(t,i,s){t.exports=s.p+"img/button-12-active.b638b9dc.svg"},"0872":function(t,i,s){t.exports=s.p+"img/button-20.47e8fb4c.svg"},1278:function(t,i,s){},"13bf":function(t,i,s){t.exports=s.p+"img/7-2-option2.c9aa15a0.svg"},2261:function(t,i,s){t.exports=s.p+"img/button-4.f71e5492.svg"},"22de":function(t,i,s){t.exports=s.p+"img/button-12.9f60b801.svg"},"2ad2":function(t,i,s){t.exports=s.p+"img/button-20-active.a0be6896.svg"},"32af":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.isReset?e("div",{staticClass:"containerBox"},[e("audio",{attrs:{src:s("3fe9"),autoplay:"autoplay",id:"music"}}),t._m(0),e("div",{staticClass:"boardBox"},[e("div",{staticClass:"board board1 ignore_board"}),e("div",{staticClass:"board board2 ignore_board"},[e("img",{staticClass:"boardImg ignore_boardImg",attrs:{src:s("e243"),alt:""},on:{click:function(i){return t.pushNum(i,0)}}})]),e("div",{staticClass:"board board3 ignore_board"}),e("div",{staticClass:"board board4 ignore_board"},[e("img",{staticClass:"boardImg ignore_boardImg",attrs:{src:s("e243"),alt:""},on:{click:function(i){return t.pushNum(i,1)}}})]),e("div",{staticClass:"board board5 ignore_board"})]),e("div",{staticClass:"numBox"},t._l(t.numImg,(function(i,s){return e("div",{key:s,staticClass:"numImg ignore_numImg",on:{click:function(i){return t.clickNum(s)}}},[e("img",{staticClass:"numBox_img ignore_numBox_img",class:t.moveIdx==s?"numBox_img_hover ignore_numBox_img_hover":"",attrs:{src:t.numActive==s?i.activeStr:i.imgStr,alt:""},on:{mouseover:function(i){t.moveIdx=s},mouseout:function(i){t.moveIdx=-1}}})])})),0)]):t._e()},n=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"question"},[e("div",{staticClass:"questionImg1 ignore_questionImg1"}),e("div",{staticClass:"questionImg2 ignore_questionImg2"},[e("img",{attrs:{src:s("ec4e"),alt:""}})]),e("div",{staticClass:"questionImg3 ignore_questionImg3"}),e("div",{staticClass:"questionImg4 ignore_questionImg4"},[e("img",{attrs:{src:s("13bf"),alt:""}})]),e("div",{staticClass:"questionImg5 ignore_questionImg5"})])}],o={name:"",data(){return{isReset:!0,moveIdx:-1,numActive:10,numImg:[{imgStr:s("2261"),activeStr:s("9999"),num:4},{imgStr:s("c363"),activeStr:s("03e3"),num:16},{imgStr:s("4c88"),activeStr:s("5f66"),num:2},{imgStr:s("22de"),activeStr:s("0521"),num:12},{imgStr:s("0872"),activeStr:s("2ad2"),num:20}],rightAnswer:[4,16],answer:["",""]}},mounted(){},activated(){this.bus.$on("replayAudio",this.replay),this.bus.$on("result",this.submitAnswer),this.bus.$on("reload",this.reload)},methods:{replay(){let t=document.getElementById("music");t.play()},clickNum(t){this.numActive=t},pushNum(t,i){this.numActive<10&&(t.target.src=this.numImg[this.numActive].imgStr,this.answer[i]=this.numImg[this.numActive].num)},submitAnswer(){this.answer.toString()===this.rightAnswer.toString()?this.$store.commit("setResult",1):(this.$store.commit("setResult",2),setTimeout(()=>{this.reload(this.$route.name)},2e3))},reload(t){"7-3"==t&&(Object.assign(this.$data,this.$options.data()),this.isReset=!1,this.$nextTick(()=>{this.isReset=!0}))}}},a=o,r=(s("ed1a"),s("cba8")),u=Object(r["a"])(a,e,n,!1,null,"2247a85e",null);i["default"]=u.exports},"3fe9":function(t,i,s){t.exports=s.p+"media/audio-7-3.f0ef0dd2.mp3"},"4c88":function(t,i,s){t.exports=s.p+"img/button-2.5591506f.svg"},"5f66":function(t,i,s){t.exports=s.p+"img/button-2-active.c7bc8d0b.svg"},9999:function(t,i,s){t.exports=s.p+"img/button-4-active.b9bfaef6.svg"},c363:function(t,i,s){t.exports=s.p+"img/button-16.a538479b.svg"},e243:function(t,i,s){t.exports=s.p+"img/dashed.79c9b7d6.svg"},ec4e:function(t,i,s){t.exports=s.p+"img/7-2-option1.623e39e6.svg"},ed1a:function(t,i,s){"use strict";s("1278")}}]);