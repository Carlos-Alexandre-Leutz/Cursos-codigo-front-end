(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-796645fa"],{"019e":function(e,a,t){"use strict";t("0895")},"0895":function(e,a,t){},"0a26":function(e,a,t){"use strict";t.r(a);var r=t("7a23"),o={class:"row mt-5"},n={class:"col-sm-11 m-auto"},c={class:"card shadow"},i=Object(r["i"])("header",{class:"card-header"},[Object(r["i"])("strong",{class:"align-self-center"}," Crie tarefas ")],-1),l={class:"card-body"},u={class:"row"},s={class:"col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-3"},d={class:"row"},f=Object(r["i"])("label",null," Campos com * são de preenchimento obrigatório ",-1),v={class:"col-sm-2 col-md-2 col-lg-2 col-xl-2"},b=Object(r["i"])("label",null,"Referência ",-1),p={class:"col-sm-10 col-md-10 col-lg-10 col-xl-10"},m=Object(r["i"])("label",null,"* Atribuída para:",-1),O={class:"col-sm-12 col-md-12 col-lg-12 col-xl-12"},g=Object(r["i"])("label",null,"* Descrição ",-1),j={class:"d-flex mt-3 buttonsActions"},h={key:0,class:"btn btn-success",type:"submit"},y=Object(r["i"])("br",null,null,-1),w=Object(r["i"])("br",null,null,-1),x=Object(r["i"])("br",null,null,-1);function S(e,a,t,S,V,A){var E=Object(r["A"])("Multiselect");return Object(r["s"])(),Object(r["e"])("form",{onSubmit:a[6]||(a[6]=function(){return S.validarForm&&S.validarForm.apply(S,arguments)})},[Object(r["i"])("div",o,[Object(r["i"])("div",n,[Object(r["i"])("div",c,[i,Object(r["i"])("div",l,[Object(r["i"])("div",u,[Object(r["i"])("div",s,[Object(r["i"])("div",d,[f,Object(r["i"])("div",v,[b,Object(r["I"])(Object(r["i"])("input",{class:"form-control",type:"numbers",placeholder:"Digite um valor","onUpdate:modelValue":a[1]||(a[1]=function(e){return S.ViewModel.value=e}),readonly:""},null,512),[[r["F"],S.ViewModel.value]])]),Object(r["i"])("div",p,[m,Object(r["i"])(E,{modelValue:S.ViewModel.atribuidaPara,"onUpdate:modelValue":a[2]||(a[2]=function(e){return S.ViewModel.atribuidaPara=e}),placeholder:"Selecione o usuário",options:S.optionsUsuarios,disabled:S.inputReadonly},null,8,["modelValue","options","disabled"])]),Object(r["i"])("div",O,[g,Object(r["I"])(Object(r["i"])("textarea",{class:"form-control","onUpdate:modelValue":a[3]||(a[3]=function(e){return S.ViewModel.descricao=e}),readonly:S.inputReadonly,maxlength:"255",placeholder:"Digite a decrição"},null,8,["readonly"]),[[r["F"],S.ViewModel.descricao]])])]),Object(r["i"])("div",j,[S.mostrarBtnSalvar?(Object(r["s"])(),Object(r["e"])("button",h," Salvar ")):Object(r["f"])("",!0),S.mostrarBtnSalvar?(Object(r["s"])(),Object(r["e"])("input",{key:1,type:"button",class:"btn btn-warning ml-2 mr-2",onClick:a[4]||(a[4]=function(e){return S.limpaForm()}),value:"Limpar"})):Object(r["f"])("",!0),Object(r["i"])("button",{class:"btn btn-secondary",type:"reset",onClick:a[5]||(a[5]=function(a){return e.$router.push("/tarefas")})}," Voltar ")])]),y,w,x])])])])])],32)}var V=t("1da1"),A=(t("96cf"),t("159b"),t("a306")),E=t("11c1"),C=t("3d20"),k=t.n(C),I=t("6c02"),P=t("5502"),R={components:{Multiselect:A["a"]},setup:function(){var e,a,t=Object(I["d"])(),o=t.params,n=o.tarefaId,c=o.visualizar,i=Object(P["b"])(),l=function(){return n||i.state.emptyGuid},u=0,s=Object(I["e"])(),d=Object(r["x"])([]);if(c?(e=!1,a=!0):(e=!0,a=!1),!n){var f=localStorage.getItem("dataLocalStorageTarefa");if(f){var v=JSON.parse(f);v.forEach((function(e){e.value>=u&&(u=e.value+1)}))}}var b=Object(r["x"])({id:Object(r["x"])(l),value:Object(r["x"])(u),atribuidaPara:Object(r["x"])(),lablAtribuidaPara:Object(r["x"])(),descricao:Object(r["x"])()}),p=function(){b.value.id=Object(r["x"])(),b.value.value=b.value.value+1,b.value.descricao=Object(r["x"])(),b.value.atribuidaPara=Object(r["x"])()},m=function(e){e.preventDefault(),b.value.atribuidaPara?O():k.a.fire({icon:"warning",title:"Atenção",text:"Campos com * são de preenchimento obrigatório"})},O=function(){var e=localStorage.getItem("dataLocalStorageTarefa");if(n){var a=JSON.parse(e);a.forEach((function(e){if(e.id==n){console.log(e),e.id=b.value.id,e.atribuidaPara=b.value.atribuidaPara,e.descricao=b.value.descricao;var t=JSON.stringify(a);localStorage.setItem("dataLocalStorageTarefa",t),j()}}))}else if(e){b.value.id=Object(E["v4"])();var t=JSON.parse(e);h(),t.push(b.value),console.log(t);var r=JSON.stringify(t);localStorage.setItem("dataLocalStorageTarefa",r),g()}else{b.value.id=Object(E["v4"])();var o=[];h(),o.push(b.value);var c=JSON.stringify(o);localStorage.setItem("dataLocalStorageTarefa",[c]),g()}},g=function(){k.a.fire({icon:"success",title:"Concluído",text:'A tarefa "'.concat(b.value.value,'" foi adicionada')}),p()},j=function(){k.a.fire({icon:"success",title:"Concluido",text:'A tareda "'.concat(b.value.value,'" foi editada')})},h=function(){var e=localStorage.getItem("dataLocalStorageUsuario");if(e){var a=JSON.parse(e);a.forEach((function(e){e.id==b.value.atribuidaPara&&(b.value.lablAtribuidaPara=e.nome)}))}};return Object(r["q"])(Object(V["a"])(regeneratorRuntime.mark((function e(){var a,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=function(){var e=localStorage.getItem("dataLocalStorageUsuario");if(e.length>=1){var a=JSON.parse(e);a.forEach((function(e){var a={value:e.id,label:e.nome};d.value.push(a)}))}else k.a.fire({icon:"warning",title:"Atenção",text:"Você ainda não possui nenhum usuario cadastrado!\n            Deseja cadastras?",showDenyButton:!0,confirmButtonText:"Sim",denyButtonText:"Não"}).then((function(e){e.isConfirmed?s.push("/usuario/novo"):e.isDenied&&console.log("continuar cadastrando")}))},a(),t=function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(a){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("id",a),t=localStorage.getItem("dataLocalStorageTarefa"),t&&(r=JSON.parse(t),r.forEach((function(e){e.id==a&&(b.value.id=e.id,b.value.atribuidaPara=e.atribuidaPara,b.value.descricao=e.descricao,b.value.value=e.value)})));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();try{void 0!==n&&t(n)}catch(r){console.error("Erro ao obter usuario para edição",r)}case 4:case"end":return e.stop()}}),e)})))),{ViewModel:b,optionsUsuarios:d,limpaForm:p,validarForm:m,filtraLabelUsuario:h,mostrarBtnSalvar:e,inputReadonly:a}}};t("d742"),t("019e");R.render=S;a["default"]=R},"11c1":function(e,a,t){var r=t("c437"),o=t("c64e"),n=o;n.v1=r,n.v4=o,e.exports=n},"159b":function(e,a,t){var r=t("da84"),o=t("fdbc"),n=t("17c2"),c=t("9112");for(var i in o){var l=r[i],u=l&&l.prototype;if(u&&u.forEach!==n)try{c(u,"forEach",n)}catch(s){u.forEach=n}}},"17c2":function(e,a,t){"use strict";var r=t("b727").forEach,o=t("a640"),n=o("forEach");e.exports=n?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},2366:function(e,a){for(var t=[],r=0;r<256;++r)t[r]=(r+256).toString(16).substr(1);function o(e,a){var r=a||0,o=t;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}e.exports=o},"65f0":function(e,a,t){var r=t("861d"),o=t("e8b5"),n=t("b622"),c=n("species");e.exports=function(e,a){var t;return o(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!o(t.prototype)?r(t)&&(t=t[c],null===t&&(t=void 0)):t=void 0),new(void 0===t?Array:t)(0===a?0:a)}},a640:function(e,a,t){"use strict";var r=t("d039");e.exports=function(e,a){var t=[][e];return!!t&&r((function(){t.call(null,a||function(){throw 1},1)}))}},b727:function(e,a,t){var r=t("0366"),o=t("44ad"),n=t("7b0b"),c=t("50c4"),i=t("65f0"),l=[].push,u=function(e){var a=1==e,t=2==e,u=3==e,s=4==e,d=6==e,f=7==e,v=5==e||d;return function(b,p,m,O){for(var g,j,h=n(b),y=o(h),w=r(p,m,3),x=c(y.length),S=0,V=O||i,A=a?V(b,x):t||f?V(b,0):void 0;x>S;S++)if((v||S in y)&&(g=y[S],j=w(g,S,h),e))if(a)A[S]=j;else if(j)switch(e){case 3:return!0;case 5:return g;case 6:return S;case 2:l.call(A,g)}else switch(e){case 4:return!1;case 7:l.call(A,g)}return d?-1:u||s?s:A}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},c437:function(e,a,t){var r,o,n=t("e1f4"),c=t("2366"),i=0,l=0;function u(e,a,t){var u=a&&t||0,s=a||[];e=e||{};var d=e.node||r,f=void 0!==e.clockseq?e.clockseq:o;if(null==d||null==f){var v=n();null==d&&(d=r=[1|v[0],v[1],v[2],v[3],v[4],v[5]]),null==f&&(f=o=16383&(v[6]<<8|v[7]))}var b=void 0!==e.msecs?e.msecs:(new Date).getTime(),p=void 0!==e.nsecs?e.nsecs:l+1,m=b-i+(p-l)/1e4;if(m<0&&void 0===e.clockseq&&(f=f+1&16383),(m<0||b>i)&&void 0===e.nsecs&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");i=b,l=p,o=f,b+=122192928e5;var O=(1e4*(268435455&b)+p)%4294967296;s[u++]=O>>>24&255,s[u++]=O>>>16&255,s[u++]=O>>>8&255,s[u++]=255&O;var g=b/4294967296*1e4&268435455;s[u++]=g>>>8&255,s[u++]=255&g,s[u++]=g>>>24&15|16,s[u++]=g>>>16&255,s[u++]=f>>>8|128,s[u++]=255&f;for(var j=0;j<6;++j)s[u+j]=d[j];return a||c(s)}e.exports=u},c64e:function(e,a,t){var r=t("e1f4"),o=t("2366");function n(e,a,t){var n=a&&t||0;"string"==typeof e&&(a="binary"===e?new Array(16):null,e=null),e=e||{};var c=e.random||(e.rng||r)();if(c[6]=15&c[6]|64,c[8]=63&c[8]|128,a)for(var i=0;i<16;++i)a[n+i]=c[i];return a||o(c)}e.exports=n},e1f4:function(e,a){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var r=new Uint8Array(16);e.exports=function(){return t(r),r}}else{var o=new Array(16);e.exports=function(){for(var e,a=0;a<16;a++)0===(3&a)&&(e=4294967296*Math.random()),o[a]=e>>>((3&a)<<3)&255;return o}}},e8b5:function(e,a,t){var r=t("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}}}]);
//# sourceMappingURL=chunk-796645fa.63dd24a8.js.map