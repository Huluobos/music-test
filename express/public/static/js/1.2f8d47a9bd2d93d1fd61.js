webpackJsonp([1],{"5LoO":function(t,e){},"G+SY":function(t,e,s){t.exports=s.p+"static/img/weixin2.25f99d8.jpg"},L8Y5:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Cz8s"),n=(s("mtWM"),{data:function(){return{word:"黄昏来到，还未上灯。在落日的光辉中年轻的行人驾着车辇来了。他的驾车的马，嘴里喷着白沫，他的衣袍上蒙着尘土。他在我的门前下车，用疲乏的声音问：“她在哪里呢？”因为深深害羞，我不好意思说出：“她就是我.愁倦的行人.她就是我！”",index:0,letter:[],strs:[],profile:{},loveMusicListid:"",loveMusicList:[],bannerList:[]}},components:{headerDom:i.a},mounted:function(){this.getArr(this.word)},methods:{getBanner:function(){var t=this;this.$axios.get("banner").then(function(e){console.log(e),200==e.code&&(t.bannerList=e.banners)}).catch(function(t){console.log(t)})},getArr:function(t){this.letter=t.split("");var e=this.letter;this.forEacharr(e)},forEacharr:function(t){for(var e=0;e<t.length;e++)this.timeoUT(t[e],e)},timeoUT:function(t,e){var s=this;setTimeout(function(){s.strs.push(t)},200*e)}},created:function(){this.getBanner(),this.$store.dispatch("getUserData")}}),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("headerDom"),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"banner"},[s("el-carousel",{attrs:{interval:5e3,arrow:"always",height:"400px"}},t._l(t.bannerList,function(t,e){return s("el-carousel-item",{key:e},[s("div",{staticClass:"elementimgbox"},[s("img",{staticStyle:{display:"block"},attrs:{src:t.imageUrl,alt:"这个图片可能上天了...."}})])])}),1)],1),t._v(" "),s("div",{staticClass:"text"},[t._l(this.strs,function(e,i){return s("span",{key:i,staticClass:"strs"},[t._v("\n          "+t._s(e)+"\n          "),"，"==e||"。"==e||"："==e||"”"==e?s("br"):t._e(),t._v(" "),"\n"==e?s("div",{staticStyle:{height:"1rem"}}):t._e()])}),t._v(" "),t._m(0)],2),t._v(" "),t._m(1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weixin"},[e("img",{attrs:{src:s("G+SY"),alt:""}}),this._v(" "),e("div",{staticClass:"wxTxt"},[this._v("微信：小小的太阳y ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"kaBaSiJi-iframe"},[e("iframe",{attrs:{width:"100%",height:"700",src:"https://cybermap.kaspersky.com/cn/widget/dynamic/dark",frameborder:"0"}})])}]};var a=s("VU/8")(n,r,!1,function(t){s("5LoO")},"data-v-e78234d6",null);e.default=a.exports}});
//# sourceMappingURL=1.2f8d47a9bd2d93d1fd61.js.map