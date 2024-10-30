import{g as c,_ as u,T as d,a as f,o as t,c as n,b as s,j as i,z as g,A as _,i as y}from"./index.d2b5948f.js";import{_ as h,s as x,u as b}from"./App.8a7f3b43.js";import{a as v}from"./template.000ba2c5.js";const T=c(()=>u(()=>import("./Item.502f34f4.js"),["./Item.502f34f4.js","./index.d2b5948f.js","./index.cfbf16fc.css","./template.000ba2c5.js","./App.8a7f3b43.js","./index.edaf6bce.js"],import.meta.url)),k={components:{BannerItem:T},data(){return{stats:x,user:null,templates:[],isBusy:!0,TempData:d}},methods:{create(){this.TempData.templateType=["app"],this.stats.newTemplateModal=!0},getTemplatesAfterDelete(){this.templates=[],this.getMyTemplates()},getMyTemplates(){v(this.serverEndpoint,this.user.email,this.appMode).then(l=>{l&&l.forEach(e=>{e.templateTypes.includes("app")&&this.templates.push(e)}),this.isBusy=!1}).catch(l=>{this.isBusy=!1})}},mounted(){this.user=b.details,this.getMyTemplates()}},B={class:"w-full container mx-auto px-5 py-5"},A={class:"w-full flex justify-between py-2"},w=s("h1",{class:"font-bold text-2xl dark:text-gray-200"},"Apps",-1),C={key:0},D={key:1,class:"w-full flex justify-center items-center h-1/2"},E={class:"flex flex-col gap-5"},M=s("div",{class:"font-semibold text-xl"},"No App Found",-1),N={key:2,class:"w-full flex flex-col gap-5"};function I(l,e,j,L,o,r){const p=f("BannerItem");return t(),n("div",B,[s("div",A,[w,s("button",{onClick:e[0]||(e[0]=(...a)=>r.create&&r.create(...a)),type:"button",class:"text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}," New App ")]),o.isBusy?(t(),n("div",C,"Loading Apps....")):i("",!0),o.templates.length===0&&!o.isBusy?(t(),n("div",D,[s("div",E,[M,s("button",{onClick:e[1]||(e[1]=(...a)=>r.create&&r.create(...a)),type:"button",class:"text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}," Create New App ")])])):i("",!0),o.templates?(t(),n("div",N,[(t(!0),n(g,null,_(o.templates,(a,m)=>(t(),y(p,{type:"app",onGetTemplates:r.getTemplatesAfterDelete,template:a,key:m},null,8,["onGetTemplates","template"]))),128))])):i("",!0)])}const P=h(k,[["render",I]]);export{P as default};
