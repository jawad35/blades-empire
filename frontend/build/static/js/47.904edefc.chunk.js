(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[47],{116:function(e,c,t){"use strict";t(1);var n=t(129),r=t(3);c.a=function(e){var c=e.title;return Object(r.jsx)(n.a,{children:Object(r.jsx)("title",{children:c})})}},243:function(e,c,t){"use strict";var n=t(1),r=t(192),i=t(599),s=t(553),a=t(592),j=t(285),d=t.n(j),o=t(286),l=t.n(o),b=t(287),h=t.n(b),O=(t(244),t(3));c.a=function(e){var c=e.activeStep,t=[{label:Object(O.jsx)(r.a,{children:"Shipping Details"}),icon:Object(O.jsx)(d.a,{})},{label:Object(O.jsx)(r.a,{children:"Confirm Order"}),icon:Object(O.jsx)(l.a,{})},{label:Object(O.jsx)(r.a,{children:"Payment"}),icon:Object(O.jsx)(h.a,{})}];return Object(O.jsx)(n.Fragment,{children:Object(O.jsx)(i.a,{alternativeLabel:!0,activeStep:c,style:{boxSizing:"border-box"},children:t.map((function(e,t){return Object(O.jsx)(s.a,{active:c===t,completed:c>=t,children:Object(O.jsx)(a.a,{style:{color:c>=t?"#024e80":"rgba(0, 0, 0, 0.649)"},icon:e.icon,children:e.label})},t)}))})})}},244:function(e,c,t){},348:function(e,c,t){},554:function(e,c,t){"use strict";t.r(c);var n=t(1),r=t(243),i=t(22),s=t(116),a=(t(348),t(17)),j=t(192),d=t(3);c.default=function(e){e.history;var c=Object(i.c)((function(e){return e.cart})),t=c.shippingInfo,o=c.cartItems,l=Object(i.c)((function(e){return e.user})).user,b=o.reduce((function(e,c){return e+c.quantity*c.price}),0),h=b+0,O="".concat(t.address,", ").concat(t.city,", ").concat(t.state,", ").concat(t.pinCode,", ").concat(t.country);return Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)(s.a,{title:"Confirm Order"}),Object(d.jsx)(r.a,{activeStep:1}),Object(d.jsxs)("div",{className:"confirmOrderPage",children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"confirmshippingArea",children:[Object(d.jsx)(j.a,{children:"Shipping Info"}),Object(d.jsxs)("div",{className:"confirmshippingAreaBox",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Name:"}),Object(d.jsx)("span",{children:l.name})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Phone:"}),Object(d.jsx)("span",{children:t.phoneNo})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Address:"}),Object(d.jsx)("span",{children:O})]})]})]}),Object(d.jsxs)("div",{className:"confirmCartItems",children:[Object(d.jsx)(j.a,{children:"Your Cart Items:"}),Object(d.jsx)("div",{className:"confirmCartItemsContainer",children:o&&o.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:e.image,alt:"Product"}),Object(d.jsx)(a.b,{to:"/product/".concat(e.product),children:e.name})," ",Object(d.jsxs)("span",{children:[e.quantity," X $",e.price," ="," ",Object(d.jsxs)("b",{children:["$",e.price*e.quantity]})]})]},e.product)}))})]})]}),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"orderSummary",children:[Object(d.jsx)(j.a,{children:"Order Summery"}),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Subtotal:"}),Object(d.jsxs)("span",{children:["$",b]})]})}),Object(d.jsxs)("div",{className:"orderSummaryTotal",children:[Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"Total:"})}),Object(d.jsxs)("span",{children:["$",h]})]}),Object(d.jsx)("button",{onClick:function(){var e={subtotal:b,shippingCharges:0,totalPrice:h};sessionStorage.setItem("orderInfo",JSON.stringify(e)),window.location.href="/process/payment"},children:"Proceed To Payment"})]})})]})]})}}}]);
//# sourceMappingURL=47.904edefc.chunk.js.map