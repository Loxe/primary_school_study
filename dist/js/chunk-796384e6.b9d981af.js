(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-796384e6"],{"57f4":function(t,i,e){t.exports=e.p+"media/audio-3-3.53fee17a.mp3"},"76bf":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return t.isReset?s("div",{staticClass:"containerBox"},[s("audio",{attrs:{src:e("57f4"),autoplay:"autoplay",id:"music"}}),s("div",{staticClass:"doorBox"},t._l(t.doorImg,(function(i,e){return s("img",{key:e,staticClass:"door ignore_door",attrs:{src:t.active==e?i.activeStr:i.imgStr,alt:""},on:{click:function(i){return t.clickDoor(i,e)}}})})),0),s("div",{staticClass:"boy"}),s("div",{staticClass:"girl"})]):t._e()},a=[],r={name:"",data(){return{isReset:!0,active:10,doorImg:[{imgStr:e("db79"),activeStr:e("a6b1")},{imgStr:e("db79"),activeStr:e("a6b1")},{imgStr:e("db79"),activeStr:e("a6b1")},{imgStr:e("db79"),activeStr:e("a6b1")},{imgStr:e("db79"),activeStr:e("a6b1")},{imgStr:e("db79"),activeStr:e("a6b1")},{imgStr:e("db79"),activeStr:e("a6b1")},{imgStr:e("db79"),activeStr:e("a6b1")},{imgStr:e("db79"),activeStr:e("a6b1")}]}},mounted(){},activated(){this.bus.$on("replayAudio",this.replay),this.bus.$on("result",this.submitAnswer),this.bus.$on("reload",this.reload)},methods:{replay(){let t=document.getElementById("music");t.play()},clickDoor(t,i){this.active=i},submitAnswer(){4==this.active?this.$store.commit("setResult",1):(this.$store.commit("setResult",2),setTimeout(()=>{this.reload(this.$route.name)},2e3))},reload(t){"3-3"==t&&(Object.assign(this.$data,this.$options.data()),this.isReset=!1,this.$nextTick(()=>{this.isReset=!0}))}}},o=r,c=(e("8638"),e("cba8")),n=Object(c["a"])(o,s,a,!1,null,"6399339a",null);i["default"]=n.exports},8638:function(t,i,e){"use strict";e("f79d")},a6b1:function(t,i,e){t.exports=e.p+"img/3-3-door-active.62a4acc5.svg"},db79:function(t,i,e){t.exports=e.p+"img/3-3-door.7fe6495e.svg"},f79d:function(t,i,e){}}]);