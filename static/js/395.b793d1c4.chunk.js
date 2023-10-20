"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[395],{2575:function(n,r,t){t.d(r,{A:function(){return T}});var e,o,i,a,c,s,l,p,d,u,x,f,m=t(9439),h=t(168),g=t(7686),v=g.Z.ul(e||(e=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 0px;\n  margin: 0px;\n  column-gap: 29px;\n  row-gap: 50px;\n"]))),b=g.Z.button(o||(o=(0,h.Z)(["\n  background-color: transparent;\n  border-color: transparent;\n  font-size: 16px;\n  color: var(--button-color);\n  text-decoration: underline;\n  &:hover {\n    color: var(--button-hover-color);\n  }\n"]))),Z=(g.Z.ul(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  padding: 0px;\n  margin: 0px;\n  column-gap: 29px;\n  row-gap: 50px;\n"]))),g.Z.li(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 274px;\n  height: 426px;\n\n  > button {\n    border-color: transparent;\n    background-color: var(--button-color);\n    color: var(--button-text-color);\n    border-radius: 12px;\n    width: 274px;\n    height: 44px;\n    font-size: 14px;\n    &:hover {\n      background-color: var(--button-hover-color);\n    }\n  }\n"])))),j=g.Z.div(c||(c=(0,h.Z)(["\n  position: relative;\n  min-width: 274px;\n  min-height: 268px;\n  border-radius: 14px;\n"]))),y=g.Z.img(s||(s=(0,h.Z)(["\n  width: 274px;\n  height: 268px;\n  border-radius: 14px;\n  object-fit: cover;\n"]))),k=g.Z.div(l||(l=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 14px;\n  margin-bottom: 8px;\n"]))),w=g.Z.span(p||(p=(0,h.Z)(["\n  color: var(--button-color);\n  margin: 0;\n"]))),C=g.Z.button(d||(d=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  background-color: transparent;\n  border-color: transparent;\n  width: 18px;\n  height: 18px;\n"]))),O=g.Z.p(u||(u=(0,h.Z)(["\n  margin: 0;\n  margin-bottom: auto;\n  > span {\n    border-right: 1px solid var(--line-color);\n    padding: 0 6px;\n    font-size: 12px;\n\n    color: var(--about-text);\n    &:last-child {\n      border-right: none;\n      padding-right: 0;\n    }\n    &:first-of-type {\n      padding-left: 0;\n    }\n\n    &:not(:first-of-type) span {\n      margin-left: 0;\n    }\n  }\n"]))),z=g.Z.p(x||(x=(0,h.Z)(["\n  margin: 0;\n  color: var(--car--name--text);\n  font-size: 16px;\n"]))),P=g.Z.span(f||(f=(0,h.Z)(["\n  color: var(--car--name--text);\n  font-size: 16px;\n"]))),A=t(2791);var I=t.p+"static/media/heart.282d936f414f4c6884ab9306a91dad67.svg";var E=t.p+"static/media/heartActive.97847e9195943f61800c97807e735d4f.svg",L=t(6497),S=t(9434),_=t(1945),F=t(184),H=function(n){var r=n.id,t=n.img,e=n.make,o=n.model,i=n.rentalPrice,a=n.rentalCompany,c=n.type,s=n.accessories,l=(0,S.v9)(_.O).favorites,p=(0,S.I0)(),d=(0,A.useState)(!1),u=(0,m.Z)(d,2),x=u[0],f=u[1];return(0,A.useEffect)((function(){void 0!==l.find((function(n){return n.id===r}))&&f(!0)}),[l,r]),(0,F.jsxs)(Z,{children:[(0,F.jsxs)(j,{children:[(0,F.jsx)(y,{src:t,alt:e}),(0,F.jsx)(C,{onClick:function(){x||(f(!0),p((0,L.IO)({id:r,img:t,make:e,model:o,rentalPrice:i,rentalCompany:a,type:c,accessories:s}))),x&&(f(!1),p((0,L.fu)(r)))},children:x?(0,F.jsx)("img",{src:E,width:18,alt:"like"}):(0,F.jsx)("img",{src:I,width:18,alt:"like"})})]}),(0,F.jsxs)(k,{children:[(0,F.jsxs)(z,{children:[e," ",(0,F.jsx)(w,{children:o})]}),(0,F.jsx)(P,{children:i})]}),(0,F.jsxs)(O,{children:[(0,F.jsxs)("span",{children:[a," "]})," ",(0,F.jsx)("span",{children:c}),(0,F.jsx)("span",{children:s[0]})]}),(0,F.jsx)("button",{onClick:function(){return null},children:"Load more"})]})},M=t(7689),T=function(n){var r=n.adverts,t=n.loadMore,e=(0,S.v9)(_.O).countOfItems,o=(0,M.TH)(),i=(0,A.useState)(!0),a=(0,m.Z)(i,2),c=a[0],s=a[1];return(0,A.useEffect)((function(){("/favorites"===o.pathname||0===e||e<8)&&s(!1)}),[e,s,o]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(v,{children:r.map((function(n){var r=n.id,t=n.make,e=n.model,o=n.img,i=n.rentalPrice,a=n.rentalCompany,c=n.type,s=n.accessories;return(0,F.jsx)(H,{id:r,make:t,model:e,img:o,rentalPrice:i,rentalCompany:a,type:c,accessories:s},r)}))}),c&&(0,F.jsx)(b,{onClick:function(){t()},width:20,children:"Load more"})]})}},7395:function(n,r,t){t.r(r);var e=t(2575),o=t(9434),i=t(1945),a=t(184);r.default=function(){var n=(0,o.v9)(i.O).favorites;return(0,a.jsx)(e.A,{adverts:n})}},1945:function(n,r,t){t.d(r,{O:function(){return e}});var e=function(n){return n.adverts}}}]);
//# sourceMappingURL=395.b793d1c4.chunk.js.map