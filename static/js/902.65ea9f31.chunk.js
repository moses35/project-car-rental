"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[902],{2486:function(n,e,r){r.d(e,{A:function(){return $}});var t,i,o,a,c,l,s,d,u,p,m,f,x,h=r(9439),g=r(168),v=r(7686),b=v.Z.ul(t||(t=(0,g.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 1184px;\n  margin: 0px;\n  margin-bottom: 100px;\n  padding: 0px;\n\n  column-gap: 29px;\n  row-gap: 50px;\n"]))),j=v.Z.button(i||(i=(0,g.Z)(["\n  background-color: transparent;\n  border-color: transparent;\n  font-size: 16px;\n  color: var(--button-color);\n  text-decoration: underline;\n  &:hover {\n    color: var(--button-hover-color);\n  }\n"]))),Z=v.Z.div(o||(o=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),y=(v.Z.ul(a||(a=(0,g.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  padding: 0px;\n  margin: 0px;\n  column-gap: 29px;\n  row-gap: 50px;\n"]))),v.Z.li(c||(c=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 274px;\n  height: 426px;\n\n  > button {\n    border-color: transparent;\n    background-color: var(--button-color);\n    color: var(--button-text-color);\n    border-radius: 12px;\n    width: 274px;\n    height: 44px;\n    font-size: 14px;\n    &:hover {\n      background-color: var(--button-hover-color);\n    }\n  }\n"])))),w=v.Z.div(l||(l=(0,g.Z)(["\n  position: relative;\n  min-width: 274px;\n  min-height: 268px;\n  border-radius: 14px;\n"]))),k=v.Z.img(s||(s=(0,g.Z)(["\n  width: 274px;\n  height: 268px;\n  border-radius: 14px;\n  object-fit: cover;\n"]))),C=v.Z.div(d||(d=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 14px;\n  margin-bottom: 8px;\n"]))),M=v.Z.span(u||(u=(0,g.Z)(["\n  color: var(--button-color);\n  margin: 0;\n"]))),E=v.Z.button(p||(p=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  background-color: transparent;\n  border-color: transparent;\n  width: 18px;\n  height: 18px;\n"]))),N=v.Z.p(m||(m=(0,g.Z)(["\n  margin: 0;\n  margin-bottom: auto;\n  > span {\n    border-right: 1px solid var(--line-color);\n    padding: 0 6px;\n    font-size: 12px;\n\n    color: var(--about-text);\n    &:last-child {\n      border-right: none;\n      padding-right: 0;\n    }\n    &:first-of-type {\n      padding-left: 0;\n    }\n\n    &:not(:first-of-type) span {\n      margin-left: 0;\n    }\n  }\n"]))),S=v.Z.p(f||(f=(0,g.Z)(["\n  margin: 0;\n  color: var(--car--name--text);\n  font-size: 16px;\n"]))),I=v.Z.span(x||(x=(0,g.Z)(["\n  color: var(--car--name--text);\n  font-size: 16px;\n"]))),z=r(2791);var F=r.p+"static/media/heart.282d936f414f4c6884ab9306a91dad67.svg";var L,O,P=r.p+"static/media/heartActive.97847e9195943f61800c97807e735d4f.svg",A=r(6497),B=r(9434),H=r(1945),T=v.Z.div(L||(L=(0,g.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),J=v.Z.div(O||(O=(0,g.Z)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),K=r(184),R=function(n){n.id;var e=n.img,r=n.model;return(0,K.jsx)("div",{children:(0,K.jsx)("img",{src:e,width:274,alt:r})})},V=r(4164),_=document.querySelector("#modal-root"),q=function(n){var e=n.closeModal,r=n.id,t=n.img,i=n.model;return(0,z.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]),(0,V.createPortal)((0,K.jsx)(T,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,K.jsx)(J,{children:(0,K.jsx)(R,{id:r,img:t,model:i},r)})}),_)},G=r.p+"static/media/unknown.6402404b670e849a17eb.png",U=function(n){var e=n.id,r=n.img,t=n.make,i=n.model,o=n.rentalPrice,a=n.rentalCompany,c=n.type,l=n.accessories,s=(0,B.v9)(H.O).favorites,d=(0,B.I0)(),u=(0,z.useState)(!1),p=(0,h.Z)(u,2),m=p[0],f=p[1],x=(0,z.useState)(!1),g=(0,h.Z)(x,2),v=g[0],b=g[1];(0,z.useEffect)((function(){void 0!==s.find((function(n){return n.id===e}))&&f(!0)}),[s,e]);return(0,K.jsxs)(y,{children:[(0,K.jsxs)(w,{children:[(0,K.jsx)(k,{src:r||G,alt:t}),(0,K.jsx)(E,{onClick:function(){m||(f(!0),d((0,A.IO)({id:e,img:r,make:t,model:i,rentalPrice:o,rentalCompany:a,type:c,accessories:l}))),m&&(f(!1),d((0,A.fu)(e)))},children:m?(0,K.jsx)("img",{src:P,width:18,alt:"like"}):(0,K.jsx)("img",{src:F,width:18,alt:"like"})})]}),(0,K.jsxs)(C,{children:[(0,K.jsxs)(S,{children:[t," ",(0,K.jsx)(M,{children:i})]}),(0,K.jsx)(I,{children:o})]}),(0,K.jsxs)(N,{children:[(0,K.jsxs)("span",{children:[a," "]})," ",(0,K.jsx)("span",{children:c}),(0,K.jsx)("span",{children:l[0]})]}),(0,K.jsx)("button",{onClick:function(){b(!0)},children:"Load more"}),v&&(0,K.jsx)(q,{closeModal:function(){b(!1)},id:e,img:r,model:i})]})},W=r(7689),$=function(n){var e=n.adverts,r=n.loadMore,t=(0,B.v9)(H.O).countOfItems,i=(0,W.TH)(),o=(0,z.useState)(!0),a=(0,h.Z)(o,2),c=a[0],l=a[1];return(0,z.useEffect)((function(){("/favorites"===i.pathname||0===t||t<8)&&l(!1)}),[t,l,i]),(0,K.jsxs)(Z,{children:[(0,K.jsx)(b,{children:e.map((function(n){var e=n.id,r=n.make,t=n.model,i=n.img,o=n.rentalPrice,a=n.rentalCompany,c=n.type,l=n.accessories;return(0,K.jsx)(U,{id:e,make:r,model:t,img:i,rentalPrice:o,rentalCompany:a,type:c,accessories:l},e)}))}),c&&(0,K.jsx)(j,{onClick:function(){r()},width:20,children:"Load more"})]})}},2842:function(n,e,r){r.r(e),r.d(e,{default:function(){return h}});var t=r(9439),i=r(9434),o=r(2791),a=r(4173),c=r(2486),l=r(1945),s=r(6497),d=r(1413),u=r(887),p=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"]'),m=r(184),f=function(){var n=[];n.push((0,m.jsx)("option",{value:"",children:"To $"},1));for(var e=10;e<=500;e+=10)n.push((0,m.jsx)("option",{value:e,children:e},e));return n},x=function(){f();var n=(0,i.I0)(),e=f(),r=(0,u.cI)({defaultValues:{price:""}}),t=r.register,o=r.handleSubmit,a=r.reset;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("form",{onSubmit:o((function(e){var r=e.price,t=e.brand,i=e.from,o=e.to;if(""===r||""===t||""===i||""===o)return alert("Fields are empty");n((0,s.KJ)(e)),console.log(e),a()})),children:[(0,m.jsxs)("select",(0,d.Z)((0,d.Z)({},t("brand")),{},{children:[(0,m.jsx)("option",{value:"",children:"Enter the text"},1),p.map((function(n){return(0,m.jsx)("option",{value:n,children:n},n)}))]})),(0,m.jsx)("select",(0,d.Z)((0,d.Z)({},t("price")),{},{children:e})),(0,m.jsx)("label",{htmlFor:"from",children:"From"}),(0,m.jsx)("input",(0,d.Z)((0,d.Z)({type:"number"},t("from")),{},{id:"mile1",min:0,max:5e3})),(0,m.jsx)("label",{htmlFor:"to",children:"To"}),(0,m.jsx)("input",(0,d.Z)((0,d.Z)({type:"number"},t("to")),{},{id:"mile2",min:0,max:1e4})),(0,m.jsx)("button",{type:"submit",children:"Search"})]})})},h=function(){var n=(0,o.useState)(1),e=(0,t.Z)(n,2),r=e[0],d=e[1],u=(0,i.I0)(),p=(0,o.useRef)(!0),f=(0,i.v9)(l.O),h=f.items,g=f.filter;(0,o.useEffect)((function(){p.current&&(u((0,a.B)(r)),p.current=!1)}),[u,r]),(0,o.useEffect)((function(){return function(){u((0,s.H5)())}}),[u]);var v=function(n,e){return null===n?e:e.filter((function(e){return e.make===n.brand})).filter((function(e){return parseFloat(e.rentalPrice.replace(/[^0-9.-]+/g,""))<=Number(n.price)})).filter((function(e){return console.log(Number(e.mileage)),console.log(Number(n.from)),Number(e.mileage)>=Number(n.from)&&Number(e.mileage)<=Number(n.to)}))}(g,h);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x,{}),v&&(0,m.jsx)(c.A,{adverts:v,loadMore:function(){d((function(n){return n+1})),p.current=!0}})]})}},1945:function(n,e,r){r.d(e,{O:function(){return t}});var t=function(n){return n.adverts}}}]);
//# sourceMappingURL=902.65ea9f31.chunk.js.map