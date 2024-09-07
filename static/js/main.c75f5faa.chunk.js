(this["webpackJsonpinvoice-generator"]=this["webpackJsonpinvoice-generator"]||[]).push([[0],{46:function(e,t,s){},47:function(e,t,s){},56:function(e,t,s){"use strict";s.r(t);var i=s(0),a=s.n(i),l=s(13),c=s.n(l),n=(s(46),s(24),s(47),s(38)),d=s(19),r=s(10),o=s(3),m=s(14),h=s(16);const j=Object(h.b)("invoices/addInvoice",(async e=>{let{data:t,navigate:s}=e;const i=await async function(e){let t=JSON.parse(localStorage.getItem("state"));return console.log("API call"),t?(t.push(e),localStorage.setItem("state",JSON.stringify(t)),t):(localStorage.setItem("state",JSON.stringify([e])),{message:"New object created"})}(t);return s("/"),i})),b=Object(h.b)("invoices/fetchInvoices",(async()=>await async function(){return JSON.parse(localStorage.getItem("state"))||[]}())),x=Object(h.b)("invoices/deleteInvoice",(async e=>await async function(e){const t=JSON.parse(localStorage.getItem("state")).filter((t=>t.info.id!==e));return localStorage.setItem("state",JSON.stringify(t)),t}(e))),u=Object(h.b)("invoices/copyInvoice",(async e=>{let{data:t,navigate:s}=e;const i=await async function(e){const t=JSON.parse(localStorage.getItem("state"))||[],s=JSON.parse(JSON.stringify(e));s.info.id=(+new Date+Math.floor(999999*Math.random())).toString(36),s.info.invoiceNumber=t.length+1;const{items:i}=s;return i.forEach((e=>{e.id=(+new Date+Math.floor(999999*Math.random())).toString(36)})),t.push(s),localStorage.setItem("state",JSON.stringify(t)),t}(t);return s("/"),i})),p=Object(h.b)("invoices/modifyInvoice",(async e=>{let{data:t,navigate:s}=e;console.log("object");const i=await async function(e){const t=JSON.parse(localStorage.getItem("state")).filter((t=>t.info.id!==e.info.id));return t.push(e),localStorage.setItem("state",JSON.stringify(t)),t}(t);return s("/"),i})),O=Object(h.c)({name:"invoices",initialState:{invoices:[],status:""},reducers:{},extraReducers:e=>{e.addCase(j.fulfilled,((e,t)=>{e.invoices=t.payload,e.status="New Invoice Added",console.log(e.status)})).addCase(b.fulfilled,((e,t)=>{e.invoices=t.payload})).addCase(p.fulfilled,((e,t)=>{e.status="Invoice Modified",e.invoices=t.payload,console.log(t.payload),console.log("object")})).addCase(x.fulfilled,((e,t)=>{e.status="Invoice Deleted",e.invoices=t.payload})).addCase(u.fulfilled,((e,t)=>{e.status="Invoice Copied",e.invoices=t.payload,console.log(e.status)})).addCase(b.rejected,(e=>{e.status="error"}))}}),v=e=>e.invoices.invoices,f=e=>e.invoices.status;var y=O.reducer,N=s(21),g=s(6),w=s(17),C=s(1);class I extends a.a.Component{render(){return Object(C.jsxs)(w.a,{className:"my-1 flex-nowrap",children:[null!=this.props.cellData.leading&&Object(C.jsx)(w.a.Text,{className:"bg-light fw-bold border-0 text-secondary px-2",children:Object(C.jsx)("span",{className:"border border-2 border-secondary rounded-circle d-flex align-items-center justify-content-center small",style:{width:"20px",height:"20px"},children:this.props.cellData.leading})}),Object(C.jsx)(g.a.Control,{className:this.props.cellData.textAlign,type:this.props.cellData.type,placeholder:this.props.cellData.placeholder,min:this.props.cellData.min,name:this.props.cellData.name,id:this.props.cellData.id,value:this.props.cellData.value,step:this.props.cellData.step,presicion:this.props.cellData.presicion,"aria-label":this.props.cellData.name,onChange:this.props.onItemizedItemEdit,required:!0})]})}}var T=I;class F extends a.a.Component{render(){var e=this.props.onItemizedItemEdit,t=this.props.currency,s=this.props.onRowDel,i=this.props.items.map((function(i){return Object(C.jsx)(A,{onItemizedItemEdit:e,item:i,onDelEvent:s.bind(this),currency:t},i.id)}));return Object(C.jsxs)("div",{children:[Object(C.jsxs)(d.a,{children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"ITEM"}),Object(C.jsx)("th",{children:"QTY"}),Object(C.jsx)("th",{children:"PRICE/RATE"}),Object(C.jsx)("th",{className:"text-center",children:"ACTION"})]})}),Object(C.jsx)("tbody",{children:i})]}),Object(C.jsx)(r.a,{className:"fw-bold",onClick:this.props.onRowAdd,children:"Add Item"})]})}}class A extends a.a.Component{onDelEvent(){this.props.onDelEvent(this.props.item)}render(){return Object(C.jsxs)("tr",{children:[Object(C.jsxs)("td",{style:{width:"100%"},children:[Object(C.jsx)(T,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"text",name:"name",placeholder:"Item name",value:this.props.item.name,id:this.props.item.id}}),Object(C.jsx)(T,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"text",name:"description",placeholder:"Item description",value:this.props.item.description,id:this.props.item.id}})]}),Object(C.jsx)("td",{style:{minWidth:"70px"},children:Object(C.jsx)(T,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"number",name:"quantity",min:1,step:"1",value:this.props.item.quantity,id:this.props.item.id}})}),Object(C.jsx)("td",{style:{minWidth:"130px"},children:Object(C.jsx)(T,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{leading:this.props.currency,type:"number",name:"price",min:1,step:"0.01",presicion:2,textAlign:"text-end",value:this.props.item.price,id:this.props.item.id}})}),Object(C.jsx)("td",{className:"text-center",style:{minWidth:"50px"},children:Object(C.jsx)(N.c,{onClick:this.onDelEvent.bind(this),style:{height:"33px",width:"33px",padding:"7.5px"},className:"text-white mt-1 btn btn-danger"})})]})}}var S=F,D=s(20),E=s(11),R=s(39),q=s(30),M=s.n(q),k=s(37);const G=()=>{M()(document.querySelector("#invoiceCapture")).then((e=>{const t=e.toDataURL("image/png",1),s=new k.a({orientation:"portrait",unit:"pt",format:[612,792]});s.internal.scaleFactor=1;const i=s.getImageProperties(t),a=s.internal.pageSize.getWidth(),l=i.height*a/i.width;s.addImage(t,"PNG",0,0,a,l),s.save("invoice-001.pdf")}))};var z=e=>{let{type:t,showModal:s,closeModal:i,info:a,currency:l,total:c,items:n,subTotal:h,taxAmmount:b,discountAmmount:x}=e;const O=Object(o.m)(),v=Object(m.b)();return Object(C.jsxs)("div",{children:[Object(C.jsxs)(R.a,{show:s,onHide:i,size:"lg",centered:!0,children:[Object(C.jsxs)("div",{id:"invoiceCapture",children:[Object(C.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4",children:[Object(C.jsxs)("div",{className:"w-100",children:[Object(C.jsx)("h4",{className:"fw-bold my-2",children:a.billFrom||"John Uberbacher"}),Object(C.jsxs)("h6",{className:"fw-bold text-secondary mb-1",children:["Invoice #: ",a.invoiceNumber||""]})]}),Object(C.jsxs)("div",{className:"text-end ms-4",children:[Object(C.jsx)("h6",{className:"fw-bold mt-1 mb-2",children:"Amount\xa0Due:"}),Object(C.jsxs)("h5",{className:"fw-bold text-secondary",children:[" ",l," ",c]})]})]}),Object(C.jsxs)("div",{className:"p-4",children:[Object(C.jsxs)(D.a,{className:"mb-4",children:[Object(C.jsxs)(E.a,{md:4,children:[Object(C.jsx)("div",{className:"fw-bold",children:"Billed to:"}),Object(C.jsx)("div",{children:a.billTo||""}),Object(C.jsx)("div",{children:a.billToAddress||""}),Object(C.jsx)("div",{children:a.billToEmail||""}),Object(C.jsx)("div",{children:a.billToGst||""})]}),Object(C.jsxs)(E.a,{md:4,children:[Object(C.jsx)("div",{className:"fw-bold",children:"Billed From:"}),Object(C.jsx)("div",{children:a.billFrom||""}),Object(C.jsx)("div",{children:a.billFromAddress||""}),Object(C.jsx)("div",{children:a.billFromEmail||""}),Object(C.jsx)("div",{children:a.billFromGst||""})]}),Object(C.jsxs)(E.a,{md:4,children:[Object(C.jsx)("div",{className:"fw-bold mt-2",children:"Date Of Issue:"}),Object(C.jsx)("div",{children:a.dateOfIssue||""})]})]}),Object(C.jsxs)(d.a,{className:"mb-0",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"QTY"}),Object(C.jsx)("th",{children:"DESCRIPTION"}),Object(C.jsx)("th",{className:"text-end",children:"PRICE"}),Object(C.jsx)("th",{className:"text-end",children:"AMOUNT"})]})}),Object(C.jsx)("tbody",{children:n.map(((e,t)=>Object(C.jsxs)("tr",{id:t,children:[Object(C.jsx)("td",{style:{width:"70px"},children:e.quantity}),Object(C.jsxs)("td",{children:[e.name," - ",e.description]}),Object(C.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[l," ",e.price]}),Object(C.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[l," ",e.price*e.quantity]})]},t)))})]}),Object(C.jsx)(d.a,{children:Object(C.jsxs)("tbody",{children:[Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"\xa0"}),Object(C.jsx)("td",{children:"\xa0"}),Object(C.jsx)("td",{children:"\xa0"})]}),Object(C.jsxs)("tr",{className:"text-end",children:[Object(C.jsx)("td",{}),Object(C.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"SUBTOTAL"}),Object(C.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[l," ",h]})]}),0!==b&&Object(C.jsxs)("tr",{className:"text-end",children:[Object(C.jsx)("td",{}),Object(C.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"TAX"}),Object(C.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[l," ",b]})]}),0!==x&&Object(C.jsxs)("tr",{className:"text-end",children:[Object(C.jsx)("td",{}),Object(C.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"DISCOUNT"}),Object(C.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[l," ",x]})]}),Object(C.jsxs)("tr",{className:"text-end",children:[Object(C.jsx)("td",{}),Object(C.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"TOTAL"}),Object(C.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[l," ",c]})]})]})}),a.notes&&Object(C.jsx)("div",{className:"bg-light py-3 px-4 rounded",children:a.notes})]})]}),Object(C.jsx)("div",{className:"pb-4 px-4",children:Object(C.jsxs)(D.a,{children:[Object(C.jsx)(E.a,{md:6,children:3===t?Object(C.jsxs)(r.a,{variant:"primary",className:"d-block w-100",onClick:()=>{v(u({data:{info:a,currency:l,total:c,items:n,subTotal:h,taxAmmount:b,discountAmmount:x},navigate:O}))},children:[Object(C.jsx)(N.b,{style:{width:"15px",height:"15px",marginTop:"-3px"},className:"me-2"}),"Copy Invoice"]}):1===t?Object(C.jsxs)(r.a,{variant:"primary",className:"d-block w-100",onClick:()=>{return e={info:a,currency:l,total:c,items:n,subTotal:h,taxAmmount:b,discountAmmount:x},console.log("object"),void v(p({data:e,navigate:O}));var e},children:[Object(C.jsx)(N.b,{style:{width:"15px",height:"15px",marginTop:"-3px"},className:"me-2"}),"Modify Invoice"]}):Object(C.jsxs)(r.a,{variant:"primary",className:"d-block w-100",onClick:()=>{v(j({data:{info:a,currency:l,total:c,items:n,subTotal:h,taxAmmount:b,discountAmmount:x},navigate:O}))},children:[Object(C.jsx)(N.b,{style:{width:"15px",height:"15px",marginTop:"-3px"},className:"me-2"}),"Add Invoice"]})}),Object(C.jsx)(E.a,{md:6,children:Object(C.jsxs)(r.a,{variant:"outline-primary",className:"d-block w-100 mt-3 mt-md-0",onClick:G,children:[Object(C.jsx)(N.a,{style:{width:"16px",height:"16px",marginTop:"-3px"},className:"me-2"}),"Download Copy"]})})]})})]}),Object(C.jsx)("hr",{className:"mt-4 mb-3"})]})};var J=e=>{let{id:t,isOpen:s,closeView:a}=e;const l=Object(m.c)(v);console.log(t);const c=l.find((e=>e.info.id===t)),[n,d]=Object(i.useState)(s);if(Object(i.useEffect)((()=>{d(s)}),[s]),!t)return null;return Object(C.jsx)(z,{type:3,showModal:n,closeModal:()=>{d(!1),a()},info:c.info,items:c.items,currency:c.currency,subTotal:c.subTotal,taxAmmount:c.taxAmmount,discountAmmount:c.discountAmmount,total:c.total,isOpen:n})};var B=()=>{const e=Object(m.b)(),[t,s]=Object(i.useState)(!1),[a,l]=Object(i.useState)(),c=Object(o.m)(),n=(t,i)=>{switch(i){case"Edit":c("/edit-invoice/".concat(t));break;case"Delete":e(x(t));break;case"View":l(t),s(!0)}},h=Object(m.c)(v),j=Object(m.c)(f);return Object(i.useEffect)((()=>{e(b())}),[]),Object(C.jsxs)("div",{className:"m-5",children:[Object(C.jsx)(r.a,{variant:"primary",onClick:()=>{c("/create-invoice")},children:"Create Invoice"}),"idle"!==j&&Object(C.jsxs)("div",{className:"mt-3 p-2 rounded-md bg-yellow-200",children:["Status: ",j]}),Object(C.jsxs)(d.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"#"}),Object(C.jsx)("th",{children:"Invoice Id"}),Object(C.jsx)("th",{children:"Bill To (Name)"}),Object(C.jsx)("th",{children:"Bill From (Name)"}),Object(C.jsx)("th",{children:"Date of Issue"})]})}),Object(C.jsx)("tbody",{children:h&&h.map(((e,t)=>Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:t+1}),Object(C.jsx)("td",{children:e.info.id}),Object(C.jsx)("td",{children:e.info.billTo}),Object(C.jsx)("td",{children:e.info.billFrom}),Object(C.jsx)("td",{children:e.info.dateOfIssue}),Object(C.jsx)(r.a,{variant:"outline-success",className:"m-1",onClick:()=>n(e.info.id,"View"),children:"View"}),Object(C.jsx)(r.a,{variant:"outline-info",className:"m-1",onClick:()=>n(e.info.id,"Edit"),children:"Edit"})," ",Object(C.jsx)(r.a,{variant:"outline-danger",className:"m-1",onClick:()=>n(e.info.id,"Delete"),children:"Delete"})]},t)))})]}),Object(C.jsx)(J,{id:a,isOpen:t,closeView:()=>s(!1)})]})},L=s(40);class P extends a.a.Component{constructor(e){super(e),this.editField=e=>{this.setState((()=>({[e.target.name]:e.target.value}))),this.handleCalculateTotal()},this.onCurrencyChange=e=>{this.setState(e)},this.openModal=e=>{e.preventDefault(),this.handleCalculateTotal(),this.setState({isOpen:!0})},this.closeModal=e=>this.setState({isOpen:!1});const{invoiceData:t}=this.props;if(t){const{info:e,items:s,total:i,subTotal:a,currency:l}=t;return this.state={id:e.id,currency:l,currentDate:e.currentDate,invoiceNumber:e.invoiceNumber,dateOfIssue:e.dateOfIssue,billTo:e.billTo,billToEmail:e.billToEmail,billToAddress:e.billToAddress,billFrom:e.billFrom,billFromEmail:e.billFromEmail,billFromAddress:e.billFromAddress,billToGst:e.billToGst,billFromGst:e.billFromGst,notes:e.notes,total:i,subTotal:a,taxRate:e.taxRate,taxAmmount:e.taxAmmount,discountRate:e.discountRate,discountAmmount:e.discountAmmount,items:s},this.editField=this.editField.bind(this),void(this.handleAddEvent=this.handleAddEvent.bind(this))}this.state={id:(+new Date+Math.floor(999999*Math.random())).toString(36),isOpen:!1,currency:"\u20b9",currentDate:"",invoiceNumber:"",dateOfIssue:"",billTo:"",billToEmail:"",billToAddress:"",billFrom:"",billFromEmail:"",billFromAddress:"",billToGst:"",billFromGst:"",notes:"",total:0,subTotal:0,taxRate:0,taxAmmount:0,discountRate:0,discountAmmount:0,items:[{id:(+new Date+Math.floor(999999*Math.random())).toString(36),name:"",description:"",price:0,quantity:0}]},this.editField=this.editField.bind(this),this.handleAddEvent=this.handleAddEvent.bind(this)}componentDidMount(e){this.handleCalculateTotal()}handleAddEvent(e){var t={id:(+new Date+Math.floor(999999*Math.random())).toString(36),name:"",price:1,description:"",quantity:1};this.state.items.push(t),this.setState(this.state.items,(()=>{this.handleCalculateTotal()}))}handleRowDel(e){const t=this.state.items.filter((t=>t!==e));this.setState({items:t},(()=>{this.handleCalculateTotal()}))}handleCalculateTotal(){var e=this.state.items.reduce(((e,t)=>e+parseFloat(t.price)*parseInt(t.quantity)),0).toFixed(2);this.setState({subTotal:parseFloat(e).toFixed(2)},(()=>{this.setState({taxAmmount:parseFloat(parseFloat(e)*(this.state.taxRate/100)).toFixed(2)},(()=>{this.setState({discountAmmount:parseFloat(parseFloat(e)*(this.state.discountRate/100)).toFixed(2)},(()=>{this.setState({total:e-this.state.discountAmmount+parseFloat(this.state.taxAmmount)})}))}))}))}onItemizedItemEdit(e){var t={id:e.target.id,name:e.target.name,value:e.target.value},s=this.state.items.slice().map((function(e){for(var s in e)s==t.name&&e.id==t.id&&(e[s]=t.value);return e}));this.setState({items:s}),this.handleCalculateTotal()}render(){return Object(C.jsx)(g.a,{onSubmit:this.openModal,className:"justify-content-center",children:Object(C.jsxs)(D.a,{children:[Object(C.jsx)(E.a,{md:8,lg:9,children:Object(C.jsxs)(L.a,{className:"p-4 p-xl-5 my-3 my-xl-4",children:[Object(C.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mb-3",children:[Object(C.jsxs)("div",{class:"d-flex flex-column",children:[Object(C.jsx)("div",{className:"d-flex flex-column",children:Object(C.jsxs)("div",{class:"mb-2",children:[Object(C.jsx)("span",{className:"fw-bold",children:"Current\xa0Date:\xa0"}),Object(C.jsx)("span",{className:"current-date",children:(new Date).toLocaleDateString()})]})}),Object(C.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[Object(C.jsx)("span",{className:"fw-bold d-block me-2",children:"Due\xa0Date:"}),Object(C.jsx)(g.a.Control,{type:"date",value:this.state.dateOfIssue,name:"dateOfIssue",onChange:e=>this.editField(e),style:{maxWidth:"150px"},required:"required"})]})]}),Object(C.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[Object(C.jsx)("span",{className:"fw-bold me-2",children:"Invoice\xa0Number:\xa0"}),Object(C.jsx)(g.a.Control,{type:"number",value:this.state.invoiceNumber,name:"invoiceNumber",onChange:e=>this.editField(e),min:"1",style:{maxWidth:"70px"},required:"required"})]})]}),Object(C.jsx)("hr",{className:"my-4"}),Object(C.jsxs)(D.a,{className:"mb-5",children:[Object(C.jsxs)(E.a,{children:[Object(C.jsx)(g.a.Label,{className:"fw-bold",children:"Bill to:"}),Object(C.jsx)(g.a.Control,{placeholder:"Who is this invoice to?",rows:3,value:this.state.billTo,type:"text",name:"billTo",className:"my-2",onChange:e=>this.editField(e),autoComplete:"name",required:"required"}),Object(C.jsx)(g.a.Control,{placeholder:"Email address",value:this.state.billToEmail,type:"email",name:"billToEmail",className:"my-2",onChange:e=>this.editField(e),autoComplete:"email",required:"required"}),Object(C.jsx)(g.a.Control,{placeholder:"Billing address",value:this.state.billToAddress,type:"text",name:"billToAddress",className:"my-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"}),Object(C.jsx)(g.a.Control,{placeholder:"Bill To GST",value:this.state.billToGst,type:"text",name:"billToGst",className:"my-2",autoComplete:"billToGst",onChange:e=>this.editField(e)})]}),Object(C.jsxs)(E.a,{children:[Object(C.jsx)(g.a.Label,{className:"fw-bold",children:"Bill from:"}),Object(C.jsx)(g.a.Control,{placeholder:"Who is this invoice from?",rows:3,value:this.state.billFrom,type:"text",name:"billFrom",className:"my-2",onChange:e=>this.editField(e),autoComplete:"name",required:"required"}),Object(C.jsx)(g.a.Control,{placeholder:"Email address",value:this.state.billFromEmail,type:"email",name:"billFromEmail",className:"my-2",onChange:e=>this.editField(e),autoComplete:"email",required:"required"}),Object(C.jsx)(g.a.Control,{placeholder:"Billing address",value:this.state.billFromAddress,type:"text",name:"billFromAddress",className:"my-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"}),Object(C.jsx)(g.a.Control,{placeholder:"Bill From GST",value:this.state.billFromGst,type:"text",name:"billFromGst",className:"my-2",autoComplete:"billFromGst",onChange:e=>this.editField(e)})]})]}),Object(C.jsx)(S,{onItemizedItemEdit:this.onItemizedItemEdit.bind(this),onRowAdd:this.handleAddEvent.bind(this),onRowDel:this.handleRowDel.bind(this),currency:this.state.currency,items:this.state.items}),Object(C.jsx)(D.a,{className:"mt-4 justify-content-end",children:Object(C.jsxs)(E.a,{lg:6,children:[Object(C.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between",children:[Object(C.jsx)("span",{className:"fw-bold",children:"Subtotal:"}),Object(C.jsxs)("span",{children:[this.state.currency,this.state.subTotal]})]}),Object(C.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mt-2",children:[Object(C.jsx)("span",{className:"fw-bold",children:"Discount:"}),Object(C.jsxs)("span",{children:[Object(C.jsxs)("span",{className:"small ",children:["(",this.state.discountRate||0,"%)"]}),this.state.currency,this.state.discountAmmount||0]})]}),Object(C.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mt-2",children:[Object(C.jsx)("span",{className:"fw-bold",children:"Tax:"}),Object(C.jsxs)("span",{children:[Object(C.jsxs)("span",{className:"small ",children:["(",this.state.taxRate||0,"%)"]}),this.state.currency,this.state.taxAmmount||0]})]}),Object(C.jsx)("hr",{}),Object(C.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between",style:{fontSize:"1.125rem"},children:[Object(C.jsx)("span",{className:"fw-bold",children:"Total:"}),Object(C.jsxs)("span",{className:"fw-bold",children:[this.state.currency,this.state.total.toFixed(2)||0]})]})]})}),Object(C.jsx)("hr",{className:"my-4"}),Object(C.jsx)(g.a.Label,{className:"fw-bold",children:"Notes:"}),Object(C.jsx)(g.a.Control,{placeholder:"Thanks for your business!",name:"notes",value:this.state.notes,onChange:e=>this.editField(e),as:"textarea",className:"my-2",rows:1})]})}),Object(C.jsx)(E.a,{md:4,lg:3,children:Object(C.jsxs)("div",{className:"sticky-top pt-md-3 pt-xl-4",children:[Object(C.jsx)(r.a,{variant:"primary",type:"submit",className:"d-block w-100",children:"Review Invoice"}),Object(C.jsx)(z,{type:this.props.invoiceData?1:2,showModal:this.state.isOpen,closeModal:this.closeModal,info:this.state,items:this.state.items,currency:this.state.currency,subTotal:this.state.subTotal,taxAmmount:this.state.taxAmmount,discountAmmount:this.state.discountAmmount,total:this.state.total}),Object(C.jsxs)(g.a.Group,{className:"mb-3",children:[Object(C.jsx)(g.a.Label,{className:"fw-bold",children:"Currency:"}),Object(C.jsx)(g.a.Select,{onChange:e=>this.onCurrencyChange({currency:e.target.value}),className:"btn btn-light my-1","aria-label":"Change Currency",children:Object(C.jsx)("option",{value:"\u20b9",selected:!0,children:"INR (Indian Rupee)"})})]}),Object(C.jsxs)(g.a.Group,{className:"my-3",children:[Object(C.jsx)(g.a.Label,{className:"fw-bold",children:"Tax rate:"}),Object(C.jsxs)(w.a,{className:"my-1 flex-nowrap",children:[Object(C.jsx)(g.a.Control,{name:"taxRate",type:"number",value:this.state.taxRate,onChange:e=>this.editField(e),className:"bg-white border",placeholder:"0.0",min:"0.00",step:"0.01",max:"100.00"}),Object(C.jsx)(w.a.Text,{className:"bg-light fw-bold text-secondary small",children:"%"})]})]}),Object(C.jsxs)(g.a.Group,{className:"my-3",children:[Object(C.jsx)(g.a.Label,{className:"fw-bold",children:"Discount rate:"}),Object(C.jsxs)(w.a,{className:"my-1 flex-nowrap",children:[Object(C.jsx)(g.a.Control,{name:"discountRate",type:"number",value:this.state.discountRate,onChange:e=>this.editField(e),className:"bg-white border",placeholder:"0.0",min:"0.00",step:"0.01",max:"100.00"}),Object(C.jsx)(w.a.Text,{className:"bg-light fw-bold text-secondary small",children:"%"})]})]})]})})]})})}}var W=P;var U=()=>{const{id:e}=Object(o.o)(),t=JSON.parse(localStorage.getItem("state")).find((t=>t.info.id===e));return Object(C.jsx)(W,{invoiceData:t})};function V(){const e=Object(o.q)();return console.error(e),Object(C.jsx)("div",{className:"hero bg-base-200",children:Object(C.jsxs)("div",{className:"hero-content p-10 w-9/12 justify-center flex flex-col text-center",children:[Object(C.jsx)("h1",{className:"text-5xl font-extrabold mb-5",children:"Oops!"}),Object(C.jsx)("p",{className:"text-md font-bold ",children:"Sorry, an unexpected error has occurred."}),Object(C.jsx)("p",{children:Object(C.jsx)("i",{children:e.statusText||e.message})})]})})}var Q=s(18);const Y=Object(Q.b)([{path:"/",element:Object(C.jsx)(B,{}),errorElement:Object(C.jsx)(V,{})},{path:"/create-invoice",element:Object(C.jsx)(W,{}),errorElement:Object(C.jsx)(V,{})},{path:"/edit-invoice/:id",element:Object(C.jsx)(U,{}),errorElement:Object(C.jsx)(V,{})}]);var H=()=>Object(C.jsx)("div",{className:"App d-flex flex-column align-items-center w-100",children:Object(C.jsx)(n.a,{children:Object(C.jsx)(Q.a,{router:Y})})});var X=e=>{e&&e instanceof Function&&s.e(5).then(s.bind(null,448)).then((t=>{let{getCLS:s,getFID:i,getFCP:a,getLCP:l,getTTFB:c}=t;s(e),i(e),a(e),l(e),c(e)}))};const K=Object(h.a)({reducer:{invoices:y}});c.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(m.a,{store:K,children:Object(C.jsx)(H,{})})}),document.getElementById("root")),X()}},[[56,1,3]]]);
//# sourceMappingURL=main.c75f5faa.chunk.js.map