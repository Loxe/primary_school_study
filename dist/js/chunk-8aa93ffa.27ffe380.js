(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8aa93ffa"],{"126a":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.isReset?e("div",{staticClass:"container"},[e("audio",{attrs:{src:i("16d7"),autoplay:"autoplay",id:"music"}}),e("img",{staticClass:"tipCls ignore_tipCls",attrs:{src:i("4e1c")}}),e("div",{staticClass:"clockBox ignore_clockBox"},[e("img",{staticClass:"MintesIconCls ignore_MintesIconCls",style:"transform:rotate("+t.mintesAngle+"deg);",attrs:{src:i("edf0")}}),e("img",{staticClass:"hourIconCls ignore_hourIconCls",style:"transform:rotate("+t.hourAngle+"deg);",attrs:{src:i("f575")}})]),e("div",{staticClass:"rightBox ignore_rightBox"},[e("img",{staticClass:"rightBtnCls ignore_rightBtnCls",attrs:{src:i("3f2a")},on:{click:function(s){return t.transformClock(1)}}}),e("img",{staticClass:"rightBtnCls ignore_rightBtnCls",attrs:{src:i("c2e6")},on:{click:function(s){return t.transformClock(2)}}})])]):t._e()},n=[],o={data(){return{isReset:!0,hourAngle:180,mintesAngle:0}},activated(){this.bus.$on("replayAudio",this.replay),this.bus.$on("result",this.submitAnswer),this.bus.$on("reload",this.reload)},methods:{submitAnswer(){this.hourAngle%360==300&&this.mintesAngle%360==0?this.$store.commit("setResult",1):(this.$store.commit("setResult",2),setTimeout(()=>{this.reload(this.$route.name)},2e3))},transformClock(t){1==t?this.mintesAngle+=30:2==t&&(this.hourAngle+=15)},replay(){let t=document.getElementById("music");t.play()},reload(t){"12-3"==t&&(Object.assign(this.$data,this.$options.data()),this.isReset=!1,this.$nextTick(()=>{this.isReset=!0}))}}},r=o,a=(i("e74f"),i("cba8")),c=Object(a["a"])(r,e,n,!1,null,"67582635",null);s["default"]=c.exports},"16d7":function(t,s,i){t.exports=i.p+"media/audio-12-3.fe535a1b.mp3"},"3f2a":function(t,s,i){t.exports=i.p+"img/12-1-rightBtn1.e336a1fa.svg"},"4e1c":function(t,s,i){t.exports=i.p+"img/12-3-tip1.3a38aabf.svg"},bdf3:function(t,s,i){},c2e6:function(t,s,i){t.exports=i.p+"img/12-1-rightBtn2.d4f1ffd7.svg"},e74f:function(t,s,i){"use strict";i("bdf3")},edf0:function(t,s,i){t.exports=i.p+"img/12-1-MintesIcon.4f031cb7.svg"},f575:function(t,s,i){t.exports=i.p+"img/12-1-hourIcon.889d5707.svg"}}]);