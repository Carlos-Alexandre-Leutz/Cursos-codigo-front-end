(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-281c80c9"],{"4f7a":function(e,r,t){"use strict";var n=t("1da1");t("96cf");function a(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function u(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,r,t){return r&&u(e.prototype,r),t&&u(e,t),e}var o=t("2591"),i=function(){function e(){a(this,e)}return c(e,[{key:"inserir",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r,t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o["a"].database().ref(t).push(r);case 3:return n=e.sent,console.log("url da requiziçao",t),e.abrupt("return",n);case 8:e.prev=8,e.t0=e["catch"](0),console.error("erro ao inserir",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));function r(r,t){return e.apply(this,arguments)}return r}()},{key:"remover",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r,t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o["a"].database().ref(t).delete();case 3:return n=e.sent,console.log("url da requiziçao",t+r),e.abrupt("return",n);case 8:e.prev=8,e.t0=e["catch"](0),console.error("erro ao remover",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));function r(r,t){return e.apply(this,arguments)}return r}()},{key:"get",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=o["a"].database().ref(),e.next=4,t.child(r).get();case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e["catch"](0),console.error("erro ao obter",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));function r(r){return e.apply(this,arguments)}return r}()}]),e}(),s=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new i,e.abrupt("return",t.get(r));case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r,t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new i,e.abrupt("return",n.getId(r,t));case 2:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),p=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r,t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new i,e.abrupt("return",n.inserir(t,r));case 2:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),b=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r,t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new i,e.abrupt("return",n.editar(t,r));case 2:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),f=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r,t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new i,e.abrupt("return",a.editarId(r,t,n));case 2:case"end":return e.stop()}}),e)})));return function(r,t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r,t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new i,e.abrupt("return",n.remover(r,t));case 2:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),d={add:p,edit:b,remove:v,get:s,getPorId:l,editId:f};r["a"]=d},bb51:function(e,r,t){"use strict";t.r(r);var n=t("7a23"),a=Object(n["i"])("div",{class:"container d-flex  align-items-center"},[Object(n["i"])("div",{class:"text-center"},[Object(n["i"])("p",{class:"titulo mx-auto mb-5 "},[Object(n["h"])(" No vídeo a baixo te mostro como criar um site profissional mesmo não sabendo nada de programação "),Object(n["i"])("br"),Object(n["h"])(" E GANHAR DINHEIRO COM ELE! ")]),Object(n["i"])("div",null,[Object(n["i"])("iframe",{class:"col-12",src:"https://www.youtube.com/embed/a5IohK9uS1c",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})]),Object(n["i"])("a",{class:"btn btn-primary js-scroll-trigger mt-2 ",target:"blank ",href:"https://www.youtube.com/channel/UCd4MhWhSeqK1Ga4OKOPSxSw?view_as=subscriber"},[Object(n["h"])("Inscreva-se "),Object(n["i"])("i",{class:"fab fa-youtube"})])])],-1);function u(e,r,t,u,c,o){var i=Object(n["A"])("Multiselect");return Object(n["s"])(),Object(n["e"])("div",null,[Object(n["i"])(i,{modelValue:u.atribuidaPara,"onUpdate:modelValue":r[1]||(r[1]=function(e){return u.atribuidaPara=e}),placeholder:"Selecione o usuário",options:u.optionsUsuarios},null,8,["modelValue","options"]),a])}var c=t("a306"),o=t("a1e9"),i=t("4f7a"),s={components:{Multiselect:c["a"]},setup:function(){var e=Object(o["j"])([]),r=Object(o["j"])();return i["a"].get("teste").then((function(e){if(e.exists()){var r=e.val();console.table(r)}else console.log("No data available")})),{optionsUsuarios:e,atribuidaPara:r}}};t("d742");s.render=u;r["default"]=s}}]);
//# sourceMappingURL=chunk-281c80c9.6fec06b6.js.map