"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[859],{5859:function(r,n,e){e.r(n),e.d(n,{default:function(){return B}});var t,o,i,l,a,c,u,d=e(9439),s=e(9434),p=e(2791),x=e(4173),b=e(1219),f=e(1945),h=e(6497),m=e(1413),g=e(887),v=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"]'),Z=e(184),j=function(){var r=[];r.push((0,Z.jsx)("option",{value:"",children:"To $"},1));for(var n=10;n<=500;n+=10)r.push((0,Z.jsx)("option",{value:n,children:n},n));return r},k=e(168),y=e(7686),w=y.Z.form(t||(t=(0,k.Z)(["\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: 50px;\n"]))),M=y.Z.select(o||(o=(0,k.Z)(["\n  width: 125px;\n  margin-right: 18px;\n  height: 48px;\n  background-color: var(--form-bg);\n  border-radius: 14px;\n  border-color: transparent;\n  font-size: 18px;\n  font-weight: 500;\n  padding: 14px 18px;\n"]))),N=y.Z.select(i||(i=(0,k.Z)(["\n  width: 224px;\n  margin-right: 18px;\n  height: 48px;\n  background-color: var(--form-bg);\n  border-radius: 14px;\n  border-color: transparent;\n  font-size: 18px;\n  font-weight: 500;\n  padding: 14px 18px;\n"]))),z=y.Z.div(l||(l=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  > label {\n    font-size: 18px;\n    color: var(--label-color);\n  }\n"]))),C=y.Z.input(a||(a=(0,k.Z)(["\n  width: 128px;\n  height: 42px;\n  background-color: var(--form-bg);\n  font-size: 18px;\n  border-top-left-radius: 14px;\n  border-bottom-left-radius: 14px;\n  padding-left: 24px;\n  border-left-color: transparent;\n  border-top-color: transparent;\n  border-bottom-color: transparent;\n  border-right-color: 1px solid rgba(138, 138, 137, 0.2);\n"]))),F=y.Z.input(c||(c=(0,k.Z)(["\n  width: 128px;\n  height: 42px;\n  background-color: var(--form-bg);\n  font-size: 18px;\n  border-top-right-radius: 14px;\n  border-bottom-right-radius: 14px;\n  border-color: transparent;\n  padding-left: 24px;\n"]))),A=y.Z.button(u||(u=(0,k.Z)(["\n  width: 136px;\n  height: 48px;\n  background-color: var(--button-color);\n  font-size: 14px;\n  border-radius: 12px;\n  border-color: transparent;\n  color: var(--button-text-color);\n  margin-left: 18px;\n  &:hover {\n    background-color: var(--button-hover-color);\n  }\n"]))),S=function(){var r=(0,s.v9)(f.O).allAdverts;j();var n=(0,s.I0)(),e=j(),t=(0,g.cI)({defaultValues:{price:""}}),o=t.register,i=t.handleSubmit,l=t.reset;return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(w,{onSubmit:i((function(r){var e=r.price,t=r.brand,o=r.from,i=r.to;if(""===e||""===t||""===o||""===i)return alert("All fields must be completed");n((0,h.KJ)(r)),l()})),children:[(0,Z.jsxs)(z,{children:[(0,Z.jsx)("label",{htmlFor:"brand",children:"Car brand"}),(0,Z.jsxs)(N,(0,m.Z)((0,m.Z)({},o("brand")),{},{children:[(0,Z.jsx)("option",{value:"",children:"Enter the text"},1),v.map((function(r){return(0,Z.jsx)("option",{value:r,children:r},r)}))]}))]}),(0,Z.jsxs)(z,{children:[(0,Z.jsx)("label",{htmlFor:"price",children:"Price/ 1 hour"}),(0,Z.jsx)(M,(0,m.Z)((0,m.Z)({},o("price")),{},{children:e}))]}),(0,Z.jsxs)(z,{children:[(0,Z.jsx)("label",{htmlFor:"from",children:"\u0421ar mileage / km"}),(0,Z.jsx)(C,(0,m.Z)((0,m.Z)({type:"number"},o("from")),{},{id:"mile1",min:0,max:5e3,placeholder:"From"}))]}),(0,Z.jsx)(F,(0,m.Z)((0,m.Z)({type:"number"},o("to")),{},{id:"mile2",min:0,max:1e4,placeholder:"To"})),(0,Z.jsx)(A,{type:"submit",onClick:function(){0===r.length&&n((0,x.q)())},children:"Search"})]})})},B=function(){var r=(0,p.useState)(1),n=(0,d.Z)(r,2),e=n[0],t=n[1],o=(0,s.I0)(),i=(0,p.useRef)(!0),l=(0,s.v9)(f.O),a=l.items,c=l.filter,u=l.allAdverts;(0,p.useEffect)((function(){i.current&&(o((0,x.B)(e)),i.current=!1)}),[o,e]),(0,p.useEffect)((function(){return function(){o((0,h.H5)())}}),[o]);var m=function(r,n,e){return null===r?n:e.filter((function(n){return n.make===r.brand})).filter((function(n){return parseFloat(n.rentalPrice.replace(/[^0-9.-]+/g,""))<=Number(r.price)})).filter((function(n){return Number(n.mileage)>=Number(r.from)&&Number(n.mileage)<=Number(r.to)}))}(c,a,u);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(S,{}),m&&(0,Z.jsx)(b.A,{adverts:m,loadMore:function(){t((function(r){return r+1})),i.current=!0}})]})}}}]);
//# sourceMappingURL=859.6647d664.chunk.js.map