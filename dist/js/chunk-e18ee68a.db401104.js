(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e18ee68a"],{"131e":function(t,i,e){},"13c2":function(t,i,e){t.exports=e.p+"img/1-1-5.78f0804f.gif"},"20a8":function(t,i,e){t.exports=e.p+"img/1-1-8.acbd6402.gif"},3034:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return t.isReset?s("div",{staticClass:"containerBox"},[s("audio",{attrs:{src:e("e2f7"),autoplay:"autoplay",id:"music"}}),t._l(t.gifList,(function(i,e){return s("div",{key:e,staticClass:"numberImgBox ignore_numberImgBox",class:"numberImg_"+e},[s("img",{staticClass:"numberImg",attrs:{src:t.imgIdx==e||t.mouseIdx==e?i.gifStr:i.imgStr},on:{mouseover:function(i){t.mouseIdx=e},mouseout:function(i){t.mouseIdx=-1}}})])}))],2):t._e()},n=[],o={name:"",data(){return{isReset:!0,imgIdx:0,mouseIdx:-1,gifList:[{gifStr:e("3718"),imgStr:e("a381")},{gifStr:e("4873"),imgStr:e("9a8d")},{gifStr:e("a533"),imgStr:e("64ad")},{gifStr:e("6fb8"),imgStr:e("f172")},{gifStr:e("c8e6"),imgStr:e("fcac")},{gifStr:e("13c2"),imgStr:e("a279")},{gifStr:e("fbf1"),imgStr:e("8161")},{gifStr:e("4849"),imgStr:e("bd65")},{gifStr:e("20a8"),imgStr:e("6a56")},{gifStr:e("b186"),imgStr:e("cae4")}]}},activated(){this.cutImg(),this.bus.$on("replayAudio",this.replay),this.bus.$on("result",this.submitAnswer),this.bus.$on("reload",this.reload)},methods:{submitAnswer(){this.$store.commit("setResult",1)},cutImg(){var t=setInterval(()=>{this.imgIdx++,10==this.imgIdx&&(this.imgIdx=-1,clearInterval(t))},4e3)},replay(){let t=document.getElementById("music");t.play()},reload(t){"1-1"==t&&(Object.assign(this.$data,this.$options.data()),this.isReset=!1,this.$nextTick(()=>{this.isReset=!0}))}}},r=o,g=(e("d24e"),e("cba8")),a=Object(g["a"])(r,s,n,!1,null,"d4a0364a",null);i["default"]=a.exports},3718:function(t,i,e){t.exports=e.p+"img/1-1-0.7d36e908.gif"},4849:function(t,i,e){t.exports=e.p+"img/1-1-7.7891c148.gif"},4873:function(t,i,e){t.exports=e.p+"img/1-1-1.36df663c.gif"},"64ad":function(t,i,e){t.exports=e.p+"img/1-1-2.07556c42.svg"},"6a56":function(t,i,e){t.exports=e.p+"img/1-1-8.f3c2d614.jpg"},"6fb8":function(t,i,e){t.exports=e.p+"img/1-1-3.12ab7ae2.gif"},8161:function(t,i,e){t.exports=e.p+"img/1-1-6.d3e490d2.jpg"},"9a8d":function(t,i,e){t.exports=e.p+"img/1-1-1.a1049718.svg"},a279:function(t,i,e){t.exports=e.p+"img/1-1-5.5ddd5ff3.jpg"},a381:function(t,i,e){t.exports=e.p+"img/1-1-0.4be8ca3b.svg"},a533:function(t,i,e){t.exports=e.p+"img/1-1-2.2e516905.gif"},b186:function(t,i,e){t.exports=e.p+"img/1-1-9.930dfdaf.gif"},bd65:function(t,i,e){t.exports=e.p+"img/1-1-7.618329b4.svg"},c8e6:function(t,i,e){t.exports=e.p+"img/1-1-4.b34867d2.gif"},cae4:function(t,i,e){t.exports=e.p+"img/1-1-9.8bba5183.svg"},d24e:function(t,i,e){"use strict";e("131e")},e2f7:function(t,i,e){t.exports=e.p+"media/audio-1-1.629cfa83.mp3"},f172:function(t,i,e){t.exports=e.p+"img/1-1-3.7e9af98c.svg"},fbf1:function(t,i,e){t.exports=e.p+"img/1-1-6.e62819bd.gif"},fcac:function(t,i,e){t.exports=e.p+"img/1-1-4.b8b9a1e0.jpg"}}]);