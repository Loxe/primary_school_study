(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59a4ada8"],{"03e3":function(t,i,e){t.exports=e.p+"img/button-16-active.741e516e.svg"},"0521":function(t,i,e){t.exports=e.p+"img/button-12-active.b638b9dc.svg"},"0872":function(t,i,e){t.exports=e.p+"img/button-20.47e8fb4c.svg"},"08aa":function(t,i,e){t.exports=e.p+"img/button-18.a8295479.svg"},"0ad8":function(t,i,e){t.exports=e.p+"img/button-19-active.46709beb.svg"},1738:function(t,i,e){t.exports=e.p+"media/audio-8-2.fc9c9bb6.mp3"},"18b1":function(t,i,e){t.exports=e.p+"img/button-17-active.20d782fe.svg"},"22de":function(t,i,e){t.exports=e.p+"img/button-12.9f60b801.svg"},2720:function(t,i,e){t.exports=e.p+"img/button-13-active.4edb2446.svg"},"2ad2":function(t,i,e){t.exports=e.p+"img/button-20-active.a0be6896.svg"},"2d32":function(t,i,e){t.exports=e.p+"img/button-18-active.79aebfdf.svg"},"33f2":function(t,i,e){t.exports=e.p+"img/button-11.a32a33a0.svg"},"3bae":function(t,i,e){t.exports=e.p+"img/button-19.99b1470e.svg"},"3f50":function(t,i,e){t.exports=e.p+"img/button-13.706ba41e.svg"},"40d4":function(t,i,e){t.exports=e.p+"img/button-15-active.76b093ca.svg"},"8a36":function(t,i,e){t.exports=e.p+"img/button-15.bc1b5716.svg"},b19d:function(t,i,e){t.exports=e.p+"img/button-14.ff804f52.svg"},bb81:function(t,i,e){t.exports=e.p+"img/button-17.db4adddf.svg"},c13a:function(t,i,e){"use strict";e("cce0")},c336:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return t.isReset?s("div",{staticClass:"containerBox"},[s("audio",{attrs:{src:e("1738"),autoplay:"autoplay",id:"music"}}),t._m(0),s("div",{staticClass:"boardBox"},t._l(t.dashedImg,(function(i,e){return s("div",{key:e,staticClass:"board ignore_board"},[s("img",{staticClass:"boardImg ignore_boardImg",attrs:{src:i,alt:""},on:{click:function(i){return t.pushNum(e)}}})])})),0),s("div",{staticClass:"numBox"},t._l(t.numImg,(function(i,e){return s("div",{key:e,staticClass:"numImg ignore_numImg",on:{click:function(i){return t.clickNum(e)}}},[s("img",{staticClass:"numBox_img ignore_numBox_img",class:t.moveIdx==e?"numBox_img_hover ignore_numBox_img_hover":"",attrs:{src:t.numActive==e?i.activeStr:i.imgStr,alt:""},on:{mouseover:function(i){t.moveIdx=e},mouseout:function(i){t.moveIdx=-1}}})])})),0)]):t._e()},n=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"graphicBox"},[e("div",{staticClass:"graphic1 ignore_graphic1"}),e("div",{staticClass:"graphic2 ignore_graphic2"}),e("div",{staticClass:"graphic3 ignore_graphic3"})])}],o={name:"",data(){return{isReset:!0,moveIdx:-1,numActive:10,dashedImg:[e("e243"),e("e243"),e("e243")],numImg:[{imgStr:e("33f2"),activeStr:e("fc1c"),num:11},{imgStr:e("22de"),activeStr:e("0521"),num:12},{imgStr:e("3f50"),activeStr:e("2720"),num:13},{imgStr:e("b19d"),activeStr:e("d0fe"),num:14},{imgStr:e("8a36"),activeStr:e("40d4"),num:15},{imgStr:e("c363"),activeStr:e("03e3"),num:16},{imgStr:e("bb81"),activeStr:e("18b1"),num:17},{imgStr:e("08aa"),activeStr:e("2d32"),num:18},{imgStr:e("3bae"),activeStr:e("0ad8"),num:19},{imgStr:e("0872"),activeStr:e("2ad2"),num:20}],rightAnswer:[20,15,12],answer:["","",""]}},mounted(){},activated(){this.bus.$on("replayAudio",this.replay),this.bus.$on("result",this.submitAnswer),this.bus.$on("reload",this.reload)},methods:{replay(){let t=document.getElementById("music");t.play()},clickNum(t){this.numActive=t},pushNum(t){this.numActive<10&&(this.dashedImg.splice(t,1,this.numImg[this.numActive].imgStr),this.answer[t]=this.numImg[this.numActive].num,console.log(this.answer))},submitAnswer(){this.answer.toString()===this.rightAnswer.toString()?this.$store.commit("setResult",1):(this.$store.commit("setResult",2),setTimeout(()=>{this.reload(this.$route.name)},2e3))},reload(t){"8-2"==t&&(Object.assign(this.$data,this.$options.data()),this.isReset=!1,this.$nextTick(()=>{this.isReset=!0}))}}},a=o,c=(e("c13a"),e("cba8")),u=Object(c["a"])(a,s,n,!1,null,"4403dd4c",null);i["default"]=u.exports},c363:function(t,i,e){t.exports=e.p+"img/button-16.a538479b.svg"},cce0:function(t,i,e){},d0fe:function(t,i,e){t.exports=e.p+"img/button-14-active.8ace4b46.svg"},e243:function(t,i,e){t.exports=e.p+"img/dashed.79c9b7d6.svg"},fc1c:function(t,i,e){t.exports=e.p+"img/button-11-active.bba6105d.svg"}}]);