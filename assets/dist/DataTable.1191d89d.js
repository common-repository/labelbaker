import{F as p}from"./fuse.esm.249bd5bb.js";import{o as a,c as r,e as k,j as n,b as t,z as f,A as y,q as x,x as m,$ as _,P as v,t as w,v as D,f as T}from"./index.d2b5948f.js";import{_ as S}from"./App.8a7f3b43.js";const C={props:["data","chooseTemplate","buttons","container","tableVisible","hideButton"],data(){return{tableData:null,showTable:!0}},methods:{getFlex(e){return typeof e[0]!="number"},getData(){return this.tableData},setData(e){this.tableData=e},restoreData(){this.tableData=JSON.parse(JSON.stringify(this.data))},searchData(e){let o=e.target.value,l=[];for(let d in this.data[0])l.push(d);const u={shouldSort:!0,matchAllTokens:!0,findAllMatches:!0,includeScore:!0,threshold:0,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,keys:l};if(o.length===0)this.restoreData();else{let s=new p(this.tableData,u).search(o).map(i=>i.item);this.setData(s)}},isImage(e){return e.match(/\.(jpeg|jpg|gif|svg|png)$/)!=null},fomatTableContent(e,o){if(typeof e=="object"){let u="";for(let d in e){let s=`<div class="flex gap-2"><b>${d}</b> : ${this.fomatTableContent(e[d])}</div>`;u+=s}return u}return typeof e=="number"?e:this.isImage(e)?`<img width="100" src="${e}" class="rounded shadow" />`:`<div class="text-ellipsis no-wrap overflow-hidden ..."><div class="font-bold">${this.formatColumnName(o)}</div> ${e}</div>`},formatColumnName(e){return e?typeof e=="number"?"":e.includes("_")?e.replace("_"," ").replace("_"," "):e:""}},mounted(){this.showTable=this.tableVisible,setTimeout(()=>{this.tableData=JSON.parse(JSON.stringify(this.data))},500)},watch:{data:function(e,o){this.tableData=JSON.parse(JSON.stringify(this.data))}}},c=e=>(w("data-v-7d50a7c7"),e=e(),D(),e),N={key:0},V={key:1},j={key:1},z={key:0},F={class:"flex flex-col md:flex-row items-center py-4 rounded px-3 shadow-sm justify-between gap-10 mb-5 sticky top-14 z-10 bg-slate-50/90 dark:bg-slate-700/90 backdrop-blur-sm"},I={class:"w-full"},B={class:"relative"},J=c(()=>t("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[t("svg",{"aria-hidden":"true",class:"w-5 h-5 text-gray-500 dark:text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1)),M={key:0,id:"templates",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},O=T('<option selected data-v-7d50a7c7>Choose a template</option><option value="US" data-v-7d50a7c7>United States</option><option value="CA" data-v-7d50a7c7>Canada</option><option value="FR" data-v-7d50a7c7>France</option><option value="DE" data-v-7d50a7c7>Germany</option>',5),P=[O],A={key:1,class:"flex justify-end w-full rounded-md",role:"group"},L=c(()=>t("button",{type:"button",class:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"}," Print All ",-1)),H=c(()=>t("button",{type:"button",class:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"}," Print Selected ",-1)),U=c(()=>t("button",{type:"button",class:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"}," Print all except selected ",-1)),q=[L,H,U],E={class:"overflow-x-auto overflow-y-auto relative"},G={class:"w-full text-sm border-2 text-left rounded shadow text-gray-500 dark:text-gray-400"},R={class:"p-4 w-4"},K={class:"flex items-center"},Q=["value"],W=c(()=>t("label",{for:"checkbox-table-search-1",class:"sr-only"},"checkbox",-1)),X=["innerHTML"],Y={key:1,class:"h-full w-full"};function Z(e,o,l,u,d,s){return a(),r("div",null,[l.hideButton?n("",!0):(a(),r("button",{key:0,onClick:o[0]||(o[0]=i=>d.showTable=!d.showTable),class:"w-auto flex mb-4 gap-1 bg-blue-500 px-3 py-2 rounded-md text-white shadow-md"},[d.showTable?(a(),r("div",N,"Hide")):(a(),r("div",V,"Show")),k(" DataTable")])),d.showTable?(a(),r("div",j,[s.getData()?(a(),r("div",z,[t("div",F,[t("div",I,[t("div",B,[J,t("input",{type:"search",class:"block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500",placeholder:"Search your data...",required:"",onInput:o[1]||(o[1]=(...i)=>s.searchData&&s.searchData(...i))},null,32)])]),l.chooseTemplate?(a(),r("select",M,P)):n("",!0),l.buttons?(a(),r("div",A,q)):n("",!0)]),t("div",E,[t("table",G,[t("tbody",null,[(a(!0),r(f,null,y(s.getData(),(i,h)=>(a(),r("tr",{key:h,class:x([{flex:s.getFlex(i)},"bg-white px-2 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"])},[t("td",R,[t("div",K,[m(t("input",{"onUpdate:modelValue":o[2]||(o[2]=b=>l.container.selectedData=b),value:h,id:"checkbox-table-search-1",type:"checkbox",class:"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,8,Q),[[_,l.container.selectedData]]),W])]),(a(!0),r(f,null,y(i,(b,g)=>(a(),r("td",{key:g,innerHTML:s.fomatTableContent(b,g),class:"py-4 px-6"},null,8,X))),128))],2))),128))])])])])):n("",!0),s.getData()?n("",!0):(a(),r("div",Y,[t("small",null,v(e.$t("data.noDataToPreview")),1)]))])):n("",!0)])}const ae=S(C,[["render",Z],["__scopeId","data-v-7d50a7c7"]]);export{ae as default};
