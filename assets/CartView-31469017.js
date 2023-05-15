import{u as d,r as i,o,c as a,a as c,F as _,b as u,d as e,t as l,e as m,w as p,f as h}from"./index-0189f052.js";const x={class:"container mx-auto p-4"},f={key:0,class:"flex flex-col gap-y-4"},g={class:"flex flex-col place-items-center bg-violet-50 rounded-md shadow-md p-2 md:flex-row md:justify-between"},v=["src"],y={class:"md:titlez"},C={class:"quantity flex flex-col gap-y-2 md:flex-row md:gap-x-4 md:place-items-center"},k=["onClick"],w=["onClick"],b={class:"total-price flex justify-between mt-4 p-2"},V=e("h1",{class:"md:titlez"},"Total:",-1),z={class:"md:titlez md:text-violet-800"},B={key:1,class:"flex flex-col gap-y-5 place-items-center"},L=e("p",null,"Your Cart is empty",-1),F={__name:"CartView",setup(N){const t=d();return(Q,j)=>{const n=i("RouterLink");return o(),a("div",x,[c(t).cart.length>0?(o(),a("ul",f,[(o(!0),a(_,null,u(c(t).cart,s=>(o(),a("li",g,[e("img",{src:s.image,class:"max-w-[25%]"},null,8,v),e("h1",y,l(s.name),1),e("div",C,[e("h1",null,"Quantity: "+l(s.quantity),1),e("span",{class:"bg-violet-400 text-center cursor-pointer rounded-md md:text-xl md:p-2",onClick:r=>c(t).increaseQuantity(s.id)},"+",8,k),e("span",{class:"bg-violet-400 text-center cursor-pointer rounded-md md:text-xl md:p-2",onClick:r=>c(t).decreaseQuantity(s.id)},"-",8,w)])]))),256)),e("div",b,[V,e("h1",z,l(c(t).totalCost)+" e ",1)])])):(o(),a("div",B,[L,m(n,{to:"/catalog",class:"hover:-translate-y-1 hover:shadow-md uppercase catalog bg-violet-950 text-white p-4 rounded-md duration-200 hover:p-5"},{default:p(()=>[h(" Check our Catalog ")]),_:1})]))])}}};export{F as default};
