(function(t){function e(e){for(var i,c,r=e[0],o=e[1],l=e[2],u=0,p=[];u<r.length;u++)c=r[u],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&p.push(s[c][0]),s[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(i=!1)}i&&(n.splice(e--,1),t=c(c.s=a[0]))}return t}var i={},s={app:0},n=[];function c(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=i,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(a,i,function(e){return t[e]}.bind(null,i));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("85ec"),s=a.n(i);s.a},2033:function(t,e,a){t.exports=a.p+"img/store.e88975e4.svg"},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("div",{staticClass:"navbar navbar-dark shadow-sm py-3"},[a("div",{staticClass:"container d-flex justify-content-between"},[a("nav-link",{attrs:{icon:"store",title:"Главная"}}),a("nav-link",{attrs:{icon:"cart",title:"Корзина",to:"cart"}})],1)]),a("notifications"),a("router-view",{staticClass:"mb-5"}),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"text-muted shadow-sm py-3 footer bg-light"},[a("div",{staticClass:"container"},[a("p",{staticClass:"mb-0"},[t._v("Created by riptid3r")]),a("p",[t._v("2020")])])])}],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-flex align-items-center"},[i("router-link",{staticClass:"navbar-brand d-flex align-items-center ml-2 text-dark",attrs:{to:"/"+t.to}},[i("img",{staticClass:"cover",attrs:{src:a("5981")("./"+t.icon+".svg"),alt:"store-ico",width:"20",height:"20"}}),i("strong",{staticClass:"ml-2"},[t._v(t._s(t.title))])])],1)},r=[],o={props:{icon:{type:String,default:null},title:{type:String,default:null},to:{type:String,default:"",required:!1}}},l=o,d=a("2877"),u=Object(d["a"])(l,c,r,!1,null,null,null),p=u.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition-group",{staticClass:"notifications d-flex flex-column-reverse",attrs:{name:"fade",tag:"div"}},t._l(t.notifications,(function(e){return a("div",{key:e.id,staticClass:"notification rounded-lg bg-success pl-4 pr-5 py-3 d-flex align-items-center mb-2"},[a("div",{staticClass:"d-flex flex-column"},[a("h4",{staticClass:"text-white mb-1"},[t._v(t._s(e.title))]),a("p",{staticClass:"text-light mb-0"},[t._v(t._s(e.desc))])])])})),0)},f=[],g=a("2f62"),h={computed:{...Object(g["c"])(["notifications"])}},v=h,b=Object(d["a"])(v,m,f,!1,null,null,null),C=b.exports,_={name:"App",components:{NavLink:p,Notifications:C}},x=_,y=(a("034f"),Object(d["a"])(x,s,n,!1,null,null,null)),E=y.exports,w=a("8c4f"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"goods-block py-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.store,(function(e){return a("card",{attrs:{card:e},on:{"put-in-cart":t.putInCart}})})),1)])])},j=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-4"},[a("img",{staticClass:"w-100 cover px-3",attrs:{src:t.card.image,alt:"image",height:"280"}}),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row align-items-center justify-content-between px-2"},[a("h4",{staticClass:"col-12 mb-3 text-center text-md-left border-bottom pb-4"},[t._v(t._s(t.card.name))]),a("strong",{staticClass:"mb-2 col-12 col-md-6 mb-md-0 text-center text-md-left"},[t._v(t._s(t._f("spaceSeparator")(t.card.price))+" ₽")]),a("button",{staticClass:"btn btn-outline-success col-12 col-md-6",on:{click:function(e){return t.$emit("put-in-cart",t.card)}}},[t._v(t._s(t.card.inCart?"В корзине":"Купить"))])])])])])},A=[],T={props:{card:{type:Object,default:()=>({})}},filters:{spaceSeparator(t){return t.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 ")}}},I=T,k=Object(d["a"])(I,S,A,!1,null,null,null),N=k.exports,$={components:{Card:N},methods:{...Object(g["b"])(["SAVE_CARD","SAVE_NOTIF","REMOVE_NOTIF"]),putInCart(t){this.SAVE_CARD(Object.assign(t,{inCart:!t.inCart,count:1})).then(()=>{if(t.inCart){const t=Math.random(),e=Object.freeze({title:"Успешно",desc:"Товар добавлен в корзину",id:t});this.SAVE_NOTIF(e),setTimeout(()=>this.removeNotification(t),3e3)}})},removeNotification(t){const e=this.notifications.findIndex(e=>e.id===t);if(-1===e)throw new Error("Notification ID was not finded");this.REMOVE_NOTIF(e)}},computed:{...Object(g["c"])(["store","notifications"])}},D=$,M=Object(d["a"])(D,O,j,!1,null,null,null),V=M.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cart-block py-5 d-flex bg-white"},[a("div",{staticClass:"container"},[t.cart.length?a("div",{staticClass:"row"},[a("div",{staticClass:"col d-flex flex-column"},t._l(t.cart,(function(e){return a("div",{staticClass:"good-card rounded-lg bg-white p-4 row align-items-center justify-content-between shadow-sm mb-4"},[a("div",{staticClass:"col col-md-3 col-12"},[a("img",{staticClass:"rounded-lg border p-2 cover",attrs:{src:e.image,alt:"alt",height:"100%",width:"100%"}})]),a("div",{staticClass:"col d-flex align-items-center col-md-3 px-0 col-12 mt-3 mt-md-0"},[a("strong",{staticClass:"w-100 text-center"},[t._v(t._s(e.name))])]),a("div",{staticClass:"col-12 col-md-3 col-sm-4 mt-md-0 my-3 mb-md-0"},[a("div",{staticClass:"input-group d-flex justify-content-center"},[a("div",{staticClass:"input-group-prepend"},[a("button",{staticClass:"btn btn-outline-secondary",on:{click:function(a){return t.setItem(e,!1)}}},[t._v("-")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.count,expression:"item.count"}],staticClass:"text-center",staticStyle:{"max-width":"60px"},attrs:{type:"text"},domProps:{value:e.count},on:{input:function(a){a.target.composing||t.$set(e,"count",a.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",on:{click:function(a){return t.setItem(e,!0)}}},[t._v("+")])])])]),a("div",{staticClass:"col-sm-12 d-flex flex-column w-100 col-md-3 px-0"},[a("button",{staticClass:"btn btn-danger my-sm-3",on:{click:function(a){return t.deleteFromCart(e)}}},[t._v("Удалить")])])])})),0),a("div",{staticClass:"price-block bg-white col-md-3 p-4 shadow-sm rounded-lg h-50 ml-md-3"},[t._m(0),t._l(t.cart,(function(e){return a("div",{staticClass:"row justify-content-between align-items-center px-3"},[a("p",[t._v(t._s(e.name))]),a("p",[a("b",[t._v(t._s(t._f("spaceSeparator")(e.price*e.count))+" ₽")])])])})),a("h4",{staticClass:"mt-2 border-top pt-3"},[t._v("Итого:"),a("strong",{staticClass:"ml-2"},[t._v(t._s(t._f("spaceSeparator")(t.finalPrice))+" ₽")])]),a("button",{staticClass:"btn btn-success w-100 mt-3"},[t._v("Оформить заказ")])],2)]):a("div",{staticClass:"starter-template"},[t._m(1)])])])},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"mb-4 w-100 text-center"},[a("b",[t._v("Список товаров в корзине:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"container",attrs:{role:"main"}},[a("p",{staticClass:"lead"},[a("strong",[t._v("В корзину ничего не добавлено")])])])}],P={methods:{...Object(g["b"])(["SAVE_CARD","SET_ITEM"]),deleteFromCart(t){this.SAVE_CARD(Object.assign(t,{inCart:!1}))},setItem(t,e){let a=t;e?(++a.count,this.SET_ITEM(a)):--a.count<=0&&this.SAVE_CARD(Object.assign(t,{inCart:!1}))}},computed:{...Object(g["c"])(["cart"]),finalPrice(){let t=0;for(let e=0;e<this.cart.length;e++)t+=this.cart[e].price*this.cart[e].count;return t}},filters:{spaceSeparator(t){return t.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 ")}}},R=P,L=Object(d["a"])(R,F,B,!1,null,null,null),J=L.exports;i["a"].use(w["a"]);const U=[{path:"/",name:"Home",component:V},{path:"/cart",name:"Cart",component:J}],q=new w["a"]({mode:"history",base:"",routes:U});var z=q;i["a"].use(g["a"]);var H=new g["a"].Store({state:{store:[{name:"Adidas Easy Boost",price:82163,image:"https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",inCart:!1,count:0,index:0},{name:"Adidas Easy Boost",price:82163,image:"https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",inCart:!1,count:0,index:1},{name:"Adidas Easy Boost",price:82163,image:"https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",inCart:!1,count:0,index:2},{name:"Adidas Easy Boost",price:82163,image:"https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",inCart:!1,count:0,index:3},{name:"Adidas Easy Boost",price:82163,image:"https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",inCart:!1,count:0,index:4},{name:"Adidas Easy Boost",price:82163,image:"https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",inCart:!1,count:0,index:5},{name:"Adidas Easy Boost",price:82163,image:"https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",inCart:!1,count:0,index:6},{name:"Adidas Easy Boost",price:82163,image:"https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",inCart:!1,count:0,index:7},{name:"Adidas Easy Boost",price:82163,image:"https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",inCart:!1,count:0,index:8},{name:"Adidas Easy Boost",price:82163,image:"https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",inCart:!1,count:0,index:9},{name:"Adidas Easy Boost",price:82163,image:"https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",inCart:!1,count:0,index:10},{name:"Adidas Easy Boost",price:82163,image:"https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",inCart:!1,count:0,index:11}],cart:[],notifications:[]},mutations:{SET_CARD:async(t,e)=>{if(!0===e.inCart)t.cart.push(e);else for(let a=0;a<t.cart.length;a++)t.cart[a]===e&&t.cart.splice(a,1);for(let a=0;a<t.store.length;a++)if(t.store[a]===e){t.store.splice(a,1,e);break}},SAVE_ITEM:async(t,e)=>{for(let a=0;a<t.notifications.length;a++)t.notifications[a].index===e.index&&Object.assign(t.notifications[a],e)},ADD_NOTIF:async(t,e)=>{t.notifications.push(e)},SPLICE_NOTIF:async(t,e)=>{t.notifications.splice(e,1)}},actions:{SAVE_CARD:async(t,e)=>{t.commit("SET_CARD",e)},SAVE_NOTIF:async(t,e)=>{t.commit("ADD_NOTIF",e)},REMOVE_NOTIF:async(t,e)=>{t.commit("SPLICE_NOTIF",e)},SET_ITEM:async(t,e)=>{t.commit("SAVE_ITEM",e)}}});a("ab8b");i["a"].config.productionTip=!1,new i["a"]({router:z,store:H,render:function(t){return t(E)}}).$mount("#app")},5981:function(t,e,a){var i={"./cart.svg":"6dd6","./store.svg":"2033"};function s(t){var e=n(t);return a(e)}function n(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=n,t.exports=s,s.id="5981"},"6dd6":function(t,e,a){t.exports=a.p+"img/cart.31fddad0.svg"},"85ec":function(t,e,a){}});