(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf4a1ff4"],{"45f0":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isReset?s("div",{ref:"box",staticClass:"containerBox",on:{mousemove:function(e){t.handleHammer&&t.holdHammer(e)}}},[s("audio",{attrs:{src:i("da2c"),autoplay:"autoplay",id:"music"}}),s("div",{staticClass:"eggBox ignore_eggBox"},t._l(t.eggImg,(function(e,i){return s("div",{key:i,staticClass:"egg ignore_egg"},[s("img",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"item.show"}],staticClass:"goldEgg ignore_goldEgg",class:"goldEgg_"+i,attrs:{"data-click":"no",src:e.imgStr,alt:""},on:{click:function(e){t.handleHammer&&t.breakEgg(e,i)}}})])})),0),s("div",{ref:"hammer",staticClass:"hammer ignore_hammer",class:t.inAnimation?"rotuteHammer":"",style:{left:t.floatLeft,top:t.floatTop},on:{click:t.clickHammer}})]):t._e()},o=[],r={name:"",data(){return{isReset:!0,mouseIdx:-1,handleHammer:!1,inAnimation:!1,eggImg:[{show:!0,imgStr:i("ce4c"),hoverStr:i("f860"),clickStr:""},{show:!0,imgStr:i("ce4c"),hoverStr:i("f860"),clickStr:""},{show:!0,imgStr:i("ce4c"),hoverStr:i("f860"),clickStr:i("c32c")},{show:!0,imgStr:i("ce4c"),hoverStr:i("f860"),clickStr:""},{show:!0,imgStr:i("ce4c"),hoverStr:i("f860"),clickStr:""},{show:!0,imgStr:i("ce4c"),hoverStr:i("f860"),clickStr:i("c32c")},{show:!0,imgStr:i("ce4c"),hoverStr:i("f860"),clickStr:""},{show:!0,imgStr:i("ce4c"),hoverStr:i("f860"),clickStr:""},{show:!0,imgStr:i("ce4c"),hoverStr:i("f860"),clickStr:""},{show:!0,imgStr:i("ce4c"),hoverStr:i("f860"),clickStr:""}],floatLeft:"",floatTop:"",rightAnswer:[3,6],answer:[]}},activated(){this.bus.$on("replayAudio",this.replay),this.bus.$on("result",this.submitAnswer),this.bus.$on("reload",this.reload)},methods:{replay(){let t=document.getElementById("music");t.play()},clickHammer(){this.handleHammer=!0},holdHammer(t){let e=.16*window.innerHeight;this.$store.state.appviewHeight&&(e=.16*this.$store.state.appviewHeight);let i=document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset,s=this.$refs.box.offsetTop+e+this.$refs.hammer.clientWidth/2-i,o=.1*document.body.clientWidth-20;this.floatLeft=(t.clientX-o).toFixed(2)+"px",this.floatTop=(t.clientY-s).toFixed(2)+"px",t.clientX>.85*document.body.clientWidth&&(this.floatLeft=.6*document.body.clientWidth+"px"),t.clientY<e&&(this.floatTop=this.$refs.box.offsetTop)},breakEgg(t,e){this.inAnimation=!0,setTimeout(()=>{this.inAnimation=!1},1e3),"no"==t.target.dataset.click&&(this.eggImg[e].imgStr=this.eggImg[e].clickStr,""==this.eggImg[e].clickStr&&(this.eggImg[e].show=!1),this.answer.push(e+1),this.answer.sort(),t.target.dataset.click="yes")},submitAnswer(){this.rightAnswer.toString()===this.answer.toString()?this.$store.commit("setResult",1):(this.$store.commit("setResult",2),setTimeout(()=>{this.reload(this.$route.name)},2e3))},reload(t){"2-2"==t&&(Object.assign(this.$data,this.$options.data()),this.isReset=!1,this.$nextTick(()=>{this.isReset=!0}))}}},c=r,a=(i("df44"),i("cba8")),n=Object(a["a"])(c,s,o,!1,null,"90d44778",null);e["default"]=n.exports},a3d2:function(t,e,i){},c32c:function(t,e,i){t.exports=i.p+"img/2-2-rightEgg.befb7467.svg"},ce4c:function(t,e,i){t.exports=i.p+"img/2-2-goldEgg.3b503c0b.svg"},da2c:function(t,e,i){t.exports=i.p+"media/audio-2-2.150280e2.mp3"},df44:function(t,e,i){"use strict";i("a3d2")},f860:function(t,e,i){t.exports=i.p+"img/2-2-goldEgg-active.18999f10.svg"}}]);