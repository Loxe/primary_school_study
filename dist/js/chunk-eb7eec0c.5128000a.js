(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb7eec0c"],{"0135":function(t,n,e){t.exports=e.p+"img/4-1-num5.651dbf15.svg"},"05be":function(t,n,e){t.exports=e.p+"img/button-8-active.8e948323.svg"},"099f":function(t,n,e){t.exports=e.p+"img/4-1-penC3.289c6dfb.svg"},"103e":function(t,n,e){t.exports=e.p+"img/4-1-pen2.aa2db8df.svg"},1138:function(t,n,e){t.exports=e.p+"img/4-1-pen7.03447040.svg"},2013:function(t,n,e){t.exports=e.p+"img/button-3-active.5336826d.svg"},2261:function(t,n,e){t.exports=e.p+"img/button-4.f71e5492.svg"},"25bc":function(t,n,e){t.exports=e.p+"img/button-1.1189f60a.svg"},2843:function(t,n,e){t.exports=e.p+"img/4-1-num3.f861d129.svg"},"2db4":function(t,n,e){t.exports=e.p+"img/4-1-num6.4ce62317.svg"},"304b":function(t,n,e){t.exports=e.p+"img/button-1-active.1326c233.svg"},3126:function(t,n,e){t.exports=e.p+"img/4-1-penC5.01225f62.svg"},3399:function(t,n,e){t.exports=e.p+"img/4-1-pen1.347c0d2d.svg"},"393f":function(t,n,e){t.exports=e.p+"img/4-1-penC1.10682478.svg"},"416d":function(t,n,e){t.exports=e.p+"img/button-5.8b5fa2da.svg"},4221:function(t,n,e){t.exports=e.p+"img/4-1-penC7.de5ea856.svg"},4612:function(t,n,e){t.exports=e.p+"img/4-1-pen4.7a7b70d1.svg"},"4c76":function(t,n,e){t.exports=e.p+"img/4-1-penC4.19313414.svg"},"4c88":function(t,n,e){t.exports=e.p+"img/button-2.5591506f.svg"},5080:function(t,n,e){t.exports=e.p+"img/4-1-num7.991370b0.svg"},"52fe":function(t,n,e){t.exports=e.p+"img/button-8.eeff441e.svg"},"5ee2":function(t,n,e){t.exports=e.p+"img/button-7-active.e0bea711.svg"},"5f2e":function(t,n,e){t.exports=e.p+"media/audio-4-1-2.4b281f2d.mp3"},"5f66":function(t,n,e){t.exports=e.p+"img/button-2-active.c7bc8d0b.svg"},6010:function(t,n,e){t.exports=e.p+"img/4-1-pen3.5d49b9aa.svg"},"641c":function(t,n,e){t.exports=e.p+"img/button-5-active.bb61780c.svg"},"67cb":function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,s=t._self._c||n;return t.isReset?s("div",{staticClass:"container"},[s("audio",{attrs:{src:e("5f2e"),autoplay:"autoplay",id:"music"}}),s("div",{staticClass:"top_box"},[s("ul",{staticClass:"yh_box ignore_yh_box"},t._l(t.roundList,(function(n,e){return s("li",{key:e,staticClass:"roundDiv ignore_roundDiv",style:n?"background:"+t.penList[n-1].color:"",on:{click:function(n){return t.toColor(e)}}})})),0),s("div",{staticClass:"threeNum_box ignore_threeNum_box"},[s("div",{staticClass:"topNumBox ignore_topNumBox",on:{click:t.toNum}},[s("img",{staticClass:"topNum ignore_topNum",attrs:{src:t.numVal?t.numList[t.numVal].num3:""}})]),s("img",{staticClass:"oneNum ignore_oneNum",attrs:{src:e("a55f")}}),s("img",{staticClass:"kNum ignore_kNum",attrs:{src:e("6a59")}})])]),s("div",{staticClass:"bottom_box"},[s("div",{staticClass:"questionBox1 ignore_questionBox1"},t._l(t.penList,(function(n,e){return s("div",{key:e,staticClass:"penClsBox ignore_penClsBox"},[s("img",{staticClass:"penCls ignore_penCls",attrs:{src:t.penIndex==e?n.pen2:n.pen1},on:{click:function(n){return t.clickPen(e)}}})])})),0),s("div",{staticClass:"questionBox2 ignore_questionBox2"},t._l(t.numList,(function(n,e){return s("div",{key:e,staticClass:"numClsBox ignore_numClsBox"},[s("img",{staticClass:"numCls ignore_numCls",attrs:{src:t.numIndex==e?n.num2:n.num1},on:{click:function(n){return t.clickNum(e)}}})])})),0)])]):t._e()},i=[],o={data(){return{isReset:!0,roundList:["","","","","",""],numVal:"",penList:[{pen1:e("3399"),pen2:e("393f"),color:"#FE9402"},{pen1:e("103e"),pen2:e("7bc2"),color:"#FF7476"},{pen1:e("6010"),pen2:e("099f"),color:"#F8C701"},{pen1:e("4612"),pen2:e("4c76"),color:"#AAFD4F"},{pen1:e("ec84"),pen2:e("3126"),color:"#56DAF4"},{pen1:e("8f05"),pen2:e("e895"),color:"#70A5FE"},{pen1:e("1138"),pen2:e("4221"),color:"#AB8DFF"}],penIndex:-1,numList:[{num1:e("25bc"),num2:e("304b"),num3:e("c002")},{num1:e("4c88"),num2:e("5f66"),num3:e("a55f")},{num1:e("fda8"),num2:e("2013"),num3:e("2843")},{num1:e("2261"),num2:e("9999"),num3:e("6a59")},{num1:e("416d"),num2:e("641c"),num3:e("0135")},{num1:e("d3db"),num2:e("a662"),num3:e("2db4")},{num1:e("a122"),num2:e("5ee2"),num3:e("5080")},{num1:e("52fe"),num2:e("05be"),num3:e("b97c")},{num1:e("99ed"),num2:e("d4d2"),num3:e("86f4")}],numIndex:-1}},activated(){this.bus.$on("replayAudio",this.replay),this.bus.$on("result",this.submitAnswer),this.bus.$on("reload",this.reload)},methods:{submitAnswer(){var t=Array.from(new Set(this.roundList)),n=this.roundList.filter(n=>n==t[0]).length,e=this.roundList.filter(n=>n==t[1]).length;6!=this.roundList.filter(t=>t).length||2!=t.length||2!=n&&4!=n||2!=e&&4!=e||5!=this.numVal?(this.$store.commit("setResult",2),setTimeout(()=>{this.reload(this.$route.name)},2e3)):this.$store.commit("setResult",1)},toNum(){this.numIndex>=0&&(this.numVal=this.numIndex)},toColor(t){this.penIndex>=0&&(this.roundList[t]=this.penIndex+1,this.$forceUpdate())},clickPen(t){this.penIndex=t},clickNum(t){this.numIndex=t},replay(){let t=document.getElementById("music");t.play()},reload(t){"4-1-2"==t&&(Object.assign(this.$data,this.$options.data()),this.isReset=!1,this.$nextTick(()=>{this.isReset=!0}))}}},u=o,c=(e("f70d"),e("cba8")),p=Object(c["a"])(u,s,i,!1,null,"1c0f4815",null);n["default"]=p.exports},"6a59":function(t,n,e){t.exports=e.p+"img/4-1-num4.410f242f.svg"},"7bc2":function(t,n,e){t.exports=e.p+"img/4-1-penC2.705700e6.svg"},"86f4":function(t,n,e){t.exports=e.p+"img/4-1-num9.1fd19c3f.svg"},"8f05":function(t,n,e){t.exports=e.p+"img/4-1-pen6.f7b49c89.svg"},9999:function(t,n,e){t.exports=e.p+"img/button-4-active.b9bfaef6.svg"},"99ed":function(t,n,e){t.exports=e.p+"img/button-9.60aac594.svg"},a122:function(t,n,e){t.exports=e.p+"img/button-7.79288b23.svg"},a55f:function(t,n,e){t.exports=e.p+"img/4-1-num2.3f7d5b61.svg"},a662:function(t,n,e){t.exports=e.p+"img/button-6-active.53164acc.svg"},b97c:function(t,n,e){t.exports=e.p+"img/4-1-num8.a2fae736.svg"},c002:function(t,n,e){t.exports=e.p+"img/4-1-num1.e46cfc41.svg"},d3db:function(t,n,e){t.exports=e.p+"img/button-6.9582c265.svg"},d4d2:function(t,n,e){t.exports=e.p+"img/button-9-active.6c04ab7a.svg"},df0c:function(t,n,e){},e895:function(t,n,e){t.exports=e.p+"img/4-1-penC6.095c735c.svg"},ec84:function(t,n,e){t.exports=e.p+"img/4-1-pen5.a1f983ae.svg"},f70d:function(t,n,e){"use strict";e("df0c")},fda8:function(t,n,e){t.exports=e.p+"img/button-3.955958ae.svg"}}]);