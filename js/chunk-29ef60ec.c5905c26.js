(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29ef60ec"],{"159b":function(e,r,t){var n=t("da84"),a=t("fdbc"),c=t("17c2"),o=t("9112");for(var i in a){var u=n[i],s=u&&u.prototype;if(s&&s.forEach!==c)try{o(s,"forEach",c)}catch(l){s.forEach=c}}},"17c2":function(e,r,t){"use strict";var n=t("b727").forEach,a=t("a640"),c=a("forEach");e.exports=c?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},"2c5d":function(e,r,t){"use strict";t.r(r);var n=t("7a23"),a={class:"row mt-5"},c={class:"col-sm-11 m-auto"},o={class:"card shadow"},i=Object(n["i"])("header",{class:"card-header"},[Object(n["i"])("strong",{class:"align-self-center"}," Novo usuário ")],-1),u={class:"card-body"},s={class:"row"},l={class:"col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-3"},f={class:"row"},d=Object(n["i"])("label",null," Campos com * são de preenchimento obrigatório ",-1),p={class:"col-sm-12 col-md-12 col-lg-12 col-xl-12"},b=Object(n["i"])("label",null,"* Nome",-1),v={class:"col-sm-12 col-md-12 col-lg-12 col-xl-12"},m=Object(n["i"])("label",null,"* Descrição ",-1),h={class:"d-flex mt-3 buttonsActions"},w={key:0,class:"btn btn-success",type:"submit"},O=Object(n["i"])("br",null,null,-1),j=Object(n["i"])("br",null,null,-1),g=Object(n["i"])("br",null,null,-1);function y(e,r,t,y,x,R){return Object(n["s"])(),Object(n["e"])("form",{onSubmit:r[5]||(r[5]=Object(n["K"])((function(){return y.validarForm&&y.validarForm.apply(y,arguments)}),["prevent"]))},[Object(n["i"])("div",a,[Object(n["i"])("div",c,[Object(n["i"])("div",o,[i,Object(n["i"])("div",u,[Object(n["i"])("div",s,[Object(n["i"])("div",l,[Object(n["i"])("div",f,[d,Object(n["i"])("div",p,[b,Object(n["J"])(Object(n["i"])("input",{class:"form-control",type:"text","onUpdate:modelValue":r[1]||(r[1]=function(e){return y.ViewModel.nome=e}),required:"",readonly:y.inputReadonly,placeholder:"Digite o nome",maxlength:"30"},null,8,["readonly"]),[[n["G"],y.ViewModel.nome]])]),Object(n["i"])("div",v,[m,Object(n["J"])(Object(n["i"])("textarea",{class:"form-control","onUpdate:modelValue":r[2]||(r[2]=function(e){return y.ViewModel.descricao=e}),required:"",maxlength:"255",readonly:y.inputReadonly,placeholder:"Digite a descrição"},null,8,["readonly"]),[[n["G"],y.ViewModel.descricao]])])]),Object(n["i"])("div",h,[y.mostrarBtnSalvar?(Object(n["s"])(),Object(n["e"])("button",w," Salvar ")):Object(n["f"])("",!0),y.mostrarBtnSalvar?(Object(n["s"])(),Object(n["e"])("input",{key:1,type:"button",class:"btn btn-warning ml-2 mr-2",onClick:r[3]||(r[3]=function(r){return e.limpaForm()}),value:"Limpar"})):Object(n["f"])("",!0),Object(n["i"])("button",{class:"btn btn-secondary",type:"reset",onClick:r[4]||(r[4]=function(r){return e.$router.push("/usuarios")})}," Voltar ")])]),O,j,g])])])])])],32)}var x=t("1da1"),R=(t("96cf"),t("159b"),t("3d20")),k=t.n(R),E=t("6c02"),S=t("5502"),V=t("4f7a"),I={components:{},setup:function(){console.log("chegou");var e,r,t=Object(E["d"])(),a=t.params,c=a.usuarioId,o=a.visualizar,i=Object(S["b"])(),u=function(){return c||i.state.emptyGuid};o?(e=!1,r=!0):(e=!0,r=!1);var s=Object(n["x"])({id:Object(n["x"])(u()),nome:Object(n["x"])(),descricao:Object(n["x"])()}),l=function(){s.value.id=Object(n["x"])(),s.value.descricao=Object(n["x"])(),s.value.nome=Object(n["x"])()},f=function(e){e.preventDefault(),d()},d=function(){var e={nome:s.value.nome,descricao:s.value.descricao};console.log("data",e),V["a"].add("usuarios",e).then((function(){k.a.fire({icon:"success",title:"Concluído",text:'O item "'.concat(s.value.nome,'" foi adicionado ')}),l()})).catch((function(e){console.error(e)}))},p=function(){k.a.fire({icon:"success",title:"Concluído",text:'O item "'.concat(s.value.nome,'" foi editado  ')})},b=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(r){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("id",r),t=localStorage.getItem("dataLocalStorageUsuario"),t&&(n=JSON.parse(t),n.forEach((function(e){e.id==r&&(s.value.id=e.id,s.value.nome=e.nome,s.value.descricao=e.descricao)})));case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();try{void 0!==c&&b(c)}catch(v){console.error("Erro ao obter usuario para edição",v)}return{ViewModel:s,status200Edt:p,validarForm:f,mostrarBtnSalvar:e,inputReadonly:r,salvaForm:d}}};t("d742"),t("6b58");I.render=y;r["default"]=I},"4f7a":function(e,r,t){"use strict";var n=t("1da1");t("96cf");function a(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function c(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,r,t){return r&&c(e.prototype,r),t&&c(e,t),e}var i=t("2591"),u=function(){function e(){a(this,e)}return o(e,[{key:"inserir",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r,t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i["a"].database().ref(t).push(r);case 3:return n=e.sent,console.log("url da requiziçao",t),e.abrupt("return",n);case 8:e.prev=8,e.t0=e["catch"](0),console.error("erro ao inserir",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));function r(r,t){return e.apply(this,arguments)}return r}()},{key:"remover",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r,t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i["a"].database().ref(t).delete();case 3:return n=e.sent,console.log("url da requiziçao",t+r),e.abrupt("return",n);case 8:e.prev=8,e.t0=e["catch"](0),console.error("erro ao remover",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));function r(r,t){return e.apply(this,arguments)}return r}()},{key:"get",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=i["a"].database().ref(),e.next=4,t.child(r).get();case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e["catch"](0),console.error("erro ao obter",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));function r(r){return e.apply(this,arguments)}return r}()}]),e}(),s=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new u,e.abrupt("return",t.get(r));case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r,t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new u,e.abrupt("return",n.getId(r,t));case 2:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),f=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r,t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new u,e.abrupt("return",n.inserir(t,r));case 2:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),d=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r,t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new u,e.abrupt("return",n.editar(t,r));case 2:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),p=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r,t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new u,e.abrupt("return",a.editarId(r,t,n));case 2:case"end":return e.stop()}}),e)})));return function(r,t,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r,t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new u,e.abrupt("return",n.remover(r,t));case 2:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),v={add:f,edit:d,remove:b,get:s,getPorId:l,editId:p};r["a"]=v},"65f0":function(e,r,t){var n=t("861d"),a=t("e8b5"),c=t("b622"),o=c("species");e.exports=function(e,r){var t;return a(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!a(t.prototype)?n(t)&&(t=t[o],null===t&&(t=void 0)):t=void 0),new(void 0===t?Array:t)(0===r?0:r)}},"6b58":function(e,r,t){"use strict";t("e271")},"8c16":function(e,r,t){},a640:function(e,r,t){"use strict";var n=t("d039");e.exports=function(e,r){var t=[][e];return!!t&&n((function(){t.call(null,r||function(){throw 1},1)}))}},b727:function(e,r,t){var n=t("0366"),a=t("44ad"),c=t("7b0b"),o=t("50c4"),i=t("65f0"),u=[].push,s=function(e){var r=1==e,t=2==e,s=3==e,l=4==e,f=6==e,d=7==e,p=5==e||f;return function(b,v,m,h){for(var w,O,j=c(b),g=a(j),y=n(v,m,3),x=o(g.length),R=0,k=h||i,E=r?k(b,x):t||d?k(b,0):void 0;x>R;R++)if((p||R in g)&&(w=g[R],O=y(w,R,j),e))if(r)E[R]=O;else if(O)switch(e){case 3:return!0;case 5:return w;case 6:return R;case 2:u.call(E,w)}else switch(e){case 4:return!1;case 7:u.call(E,w)}return f?-1:s||l?l:E}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},d742:function(e,r,t){"use strict";t("8c16")},e271:function(e,r,t){},e8b5:function(e,r,t){var n=t("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}}}]);
//# sourceMappingURL=chunk-29ef60ec.c5905c26.js.map