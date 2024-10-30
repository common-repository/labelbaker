import{g as x,_ as k,V as A,M as D,T as B,h as L,s as y,U as S,m as M,a as p,o,c as a,b as e,d as u,e as m,q as d,z as v,A as b,j as c,i as w,P as E,w as z,a0 as N}from"./index.d2b5948f.js";import{_ as R,u as P,s as h}from"./App.8a7f3b43.js";import{t as W}from"./templates.7586709b.js";import{d as G,a as H}from"./template.000ba2c5.js";import{r as O}from"./PlusCircleIcon.802e99ea.js";const K=x(()=>k(()=>import("./Loading.6a886cd8.js"),["./Loading.6a886cd8.js","./App.8a7f3b43.js","./index.d2b5948f.js","./index.cfbf16fc.css"],import.meta.url)),U=x(()=>k(()=>import("./Index.3777a1e0.js"),["./Index.3777a1e0.js","./index.d2b5948f.js","./index.cfbf16fc.css","./editor.0b27adde.js","./App.8a7f3b43.js","./data.580994c3.js","./Index.8ce51d75.css"],import.meta.url)),F=x(()=>k(()=>import("./IsPro.fde0d7a5.js"),["./IsPro.fde0d7a5.js","./App.8a7f3b43.js","./index.d2b5948f.js","./index.cfbf16fc.css"],import.meta.url)),Y={props:["sidebar"],components:{PlusCircleIcon:O,VueFinalModal:A,ModalsContainer:D,LoadingVue:K,Widget:U,IsProTag:F},data(){return{dynamic:!1,active:"all",userData:P,stats:h,TempData:B,storeTemplates:W,selected:null,modalVisiblity:!1,canvasContainer:L,store:y,layoutData:null,shippingTemplateData:null,cardTemplateData:null,myTemplates:null,templates:[],searchItem:"",searchingNow:"category",user:null,deleteConfirmationMsg:!1}},computed:{avilableTemplates(){return this.templates.filter(s=>s[this.searchingNow].toLowerCase().includes(this.searchItem))}},methods:{closeModal(){this.canvasContainer.editor.clearIntervals(),this.modalVisiblity=!1,window.widget.clearAll(),window.widget=null},search(s,t){this.searchingNow=t,this.searchItem=s.target.value},setActive(s){this.active=s,this.searchingNow="category",s==="all"?this.searchItem="":this.searchItem=s},showDetails:function(s){if(this.appMode==="noAuth"&&this.isPro(s.isPro))return S("You need pro version to use this");if(this.stats.isBusy=!0,s.category==="my"){let t="";this.appMode==="noAuth"?t=this.serverEndpoint+"/template/"+s.id:t=this.serverEndpoint+"/i/"+M(this.user.email)+"/"+M(s.name),fetch(t+"?version="+Date.now()).then(n=>n.json()).then(n=>{this.selected=n,this.dynamic=this.selected.props.printMode==="dynamic",this.sidebar?this.useIt(this.selected):this.modalVisiblity=!0,h.isBusy=!1}).catch(n=>{h.isBusy=!1,alert("Enable to load template")})}else{h.isBusy=!0;let t=this.getTemplateDirectory();fetch(t+s.path).then(n=>n.json()).then(n=>{this.selected=n,this.selected.name=s.name,this.selected.id=s.id,this.selected.category=s.category,this.dynamic=this.selected.props.printMode==="dynamic",this.sidebar?this.useIt(this.selected):this.modalVisiblity=!0,h.isBusy=!1}).catch(n=>{alert("Unable to load template"),h.isBusy=!1})}},newTemplate(){this.store.activeMenu="home",this.store.activeTool="newProject"},deleteSelectedTemplate(){this.stats.isBusy=!0,G(this.selected.id,this.serverEndpoint,this.user.email,this.appMode).then(s=>{this.stats.isBusy=!1,this.modalVisiblity=!1,this.templates=[],this.storeTemplates.templates=null,this.refresh()}).catch(s=>{this.stats.isBusy=!1})},getPreview(){return this.store.activeTool==="documentSettings"?"#":this.selected.preview},rulerControl:function(){this.canvasContainer.enableRuler?this.canvasContainer.editor.enableRuler=!0:this.canvasContainer.editor.enableRuler=!1,this.canvasContainer.editor.ruler.addRuler()},gridControl:function(){this.canvasContainer.enableGrid?this.canvasContainer.editor.enableGrid=!0:this.canvasContainer.editor.enableGrid=!1,this.canvasContainer.editor.grid.addGrid()},useIt:function(s){this.selected.category==="my"&&(this.TempData.editing.name=this.selected.name,this.TempData.editing.id=this.selected.id,this.TempData.templateType=this.selected.templateTypes),this.canvasContainer.editor.clearEditor();let t=this.selected.props;for(let n in t)this.canvasContainer[n]=t[n];this.canvasContainer.editor.editorWidth=parseInt(t.cellWidth),this.canvasContainer.editor.editorHeight=parseInt(t.cellHeight),this.sidebar||(y.activeMenu="designer",y.activeTool="shape"),setTimeout(()=>{this.canvasContainer.editor.ImportData.source(this.selected.data).then(()=>{this.canvasContainer.editor.fitIntoContainer()}),this.canvasContainer.editor.transform.nodes([]),this.canvasContainer.editor.fitIntoContainer(),this.rulerControl(),this.gridControl(),this.modalVisiblity=!1},800)},inchToPx:function(s){return s.replace('"',"")*72},getSize:function(s){let t=s.split(" "),n=t[0].replace('"',""),_=t[2].replace('"',"");return{width:n,height:_}},getAssetsEndpoint(){return this.apiEndpoint+"/assets"},getShippingTemplateEndpoint(){return this.apiEndpoint+"/assets/editor/shipping/index.json"},getTemplatesEndpoint(){return this.apiEndpoint+"/templates/index.json"},getShippingTemplateDirectory(){return this.apiEndpoint+"/assets/editor/shipping/"},getCardTemplateDirectory(){return this.apiEndpoint+"/assets/editor/card/"},getTemplateDirectory(){return this.apiEndpoint+"/templates/"},getCardTemplateEndpoint(){return this.apiEndpoint+"/assets/editor/card/index.json"},getLayoutEndpoint(){return this.apiEndpoint+"/data/templates.json"},getMyTemplates(){H(this.serverEndpoint,this.user.email,this.appMode).then(s=>{s&&s.forEach(t=>{this.templates.push(t),this.TempData.myTemplates.push(t.name)})})},getTemplatePreview(s){return s.preview.includes("base64")||s.preview.includes("http")?s.preview:this.getTemplateDirectory()+s.preview},refresh(){this.user=P.details,this.storeTemplates.templates?this.storeTemplates.templates.forEach(s=>{this.templates.push(s)}):fetch(this.getTemplatesEndpoint()).then(s=>s.json()).then(s=>{this.shippingTemplateData=s,s.forEach(t=>{this.templates.push(t)}),this.storeTemplates.templates=this.templates,this.getMyTemplates()})}},watch:{selected:function(s,t){this.deleteConfirmationMsg=!1},dynamic:function(s,t){s?this.selected.props.printMode="dynamic":this.selected.props.printMode="static"}},mounted(){this.refresh()}},q={key:0,class:"md:px-3 md:py-3"},J=e("span",{class:"relative flex h-3 w-3"},[e("span",{class:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),e("span",{class:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})],-1),Q={class:"flex flex-col gap-3 items-center"},X=e("h1",{class:"text-center md:text-left font-semibold text-white text-2xl"}," Templates Hub ",-1),Z=e("p",{class:"text-white"}," Pre-designed templates for you to get started. ",-1),$={class:"md:w-1/2 w-full"},ee=e("label",{for:"default-search",class:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"},"Search",-1),te={class:"relative"},se=e("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[e("svg",{"aria-hidden":"true",class:"w-5 h-5 text-gray-500 dark:text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1),le={key:0,class:"grid md:grid-cols-8 grid-cols-2 gap-4 w-full py-5"},ie={class:"border-2 border-dotted w-full h-full rounded-md flex justify-center items-center"},re={class:"flex flex-col justify-center items-center gap-2"},oe=e("div",{class:"flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 h-full border-gray-200 border-opacity-75 dark:border-gray-700 w-full"},[e("div",{class:"w-full bg-gray-300 h-40 rounded animate-pulse"})],-1),ne=e("div",{class:"text-xs animate-pulse py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 h-6 rounded-md"},null,-1),ae=[oe,ne],de={key:1},ce={class:"border-2 py-12 border-dotted w-full h-full rounded-md flex justify-center items-center"},ue={class:"flex flex-col justify-center items-center gap-2"},he=e("span",{class:"absolute top-2 right-2 flex h-3 w-3"},[e("span",{class:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),e("span",{class:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})],-1),pe=["onClick"],me={key:0,class:"absolute top-2 right-2 text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-yellow-100 text-yellow-500 rounded-md shadow-md"},ge={class:"flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 h-full border-gray-200 border-opacity-75 dark:border-gray-700 w-full"},fe=["src"],ye={class:"flex items-center w-full"},ve={key:0,class:"text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md"},be={key:1},we={key:1},xe={class:"w-full sticky top-0 z-10 bg-gray-100 px-2 py-2"},ke=e("div",{class:"text-xs text-gray-400 tracking-wider"},"Templates",-1),_e={class:"relative w-full"},Ce=e("svg",{viewBox:"0 0 24 24",class:"w-4 absolute text-gray-400 top-1/2 transform translate-x-0.5 -translate-y-1/2 left-2",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})],-1),Te=["onClick"],Me={key:1,style:{"font-size":"11px"},class:"absolute top-2 py-1 px-2 leading-none dark:bg-gray-900 bg-yellow-100 text-yellow-500 rounded-md shadow-md"},Ee={class:"flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 h-full border-gray-200 border-opacity-75 dark:border-gray-700 w-full"},Pe=["src"],Ve={class:"flex items-center w-full"},Ie={key:0,class:"text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md"},je={key:1},Ae={style:{height:"100vh"},class:"flex relative flex-col px-10 py-10 justify-center items-center h-full w-full"},De={class:"absolute w-full top-10 right-10"},Be=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1),Le=[Be],Se=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ze=e("span",{class:"sr-only"},"Close",-1),Ne=[Se,ze];function Re(s,t,n,_,i,r){const g=p("PlusCircleIcon"),C=p("IsProTag"),T=p("LoadingVue"),V=p("Widget"),I=p("vue-final-modal");return o(),a("div",{class:d([{"px-0 md:py-0":n.sidebar},"w-full container mx-auto"])},[n.sidebar?(o(),a("div",we,[e("div",xe,[ke,e("div",_e,[e("input",{type:"text",style:{"padding-left":"32px"},class:"pl-8 my-2 h-9 bg-transparent border border-gray-300 dark:border-gray-700 dark:text-white w-full rounded-md text-sm",placeholder:"Search Templates",onInput:t[13]||(t[13]=l=>r.search(l,"name"))},null,32),Ce])]),i.templates?(o(),a("div",{key:0,class:d([{"md:grid-cols-1":n.sidebar},"grid px-2 grid-cols-1 gap-3 py-1 w-full"])},[(o(!0),a(v,null,b(r.avilableTemplates,(l,f)=>(o(),a("div",{onClick:j=>r.showDetails(l),key:f,class:"bg-white group p-1 w-full flex flex-col justify-between rounded-md dark:bg-gray-800 shadow cursor-pointer hover:ring-2 hover:ring-blue-500 hover:shadow-lg relative"},[s.appMode==="noAuth"&&s.isPro(l.isPro)?(o(),w(C,{key:0,class:"hidden group-hover:block"})):c("",!0),l.category==="my"?(o(),a("div",Me," My Template ")):c("",!0),e("div",Ee,[e("img",{src:r.getTemplatePreview(l),class:"w-full rounded shadow dark:bg-white"},null,8,Pe)]),e("div",Ve,[l.name?(o(),a("div",Ie,E(l.name),1)):c("",!0)])],8,Te))),128))],2)):(o(),a("div",je,[u(T,{class:"w-full flex justify-center",text:"Loading Templates, Please wait...."})]))])):(o(),a("div",q,[e("div",{class:d([{hidden:n.sidebar},"sticky bg-gradient-to-r from-fuchsia-600 to-pink-600 shadow-md pt-3 px-3 rounded-md top-0 z-10 bg-gray-100 dark:bg-gray-900"])},[e("button",{onClick:t[0]||(t[0]=(...l)=>r.newTemplate&&r.newTemplate(...l)),class:"absolute text-gray-700 flex items-center gap-1 bg-yellow-200 px-2 py-1 rounded-full right-2 top-2"},[u(g,{class:"w-4 h-4"}),m(" Create template "),J]),e("div",Q,[X,Z,e("div",$,[ee,e("div",te,[se,e("input",{autofocus:"",type:"search",id:"default-search",class:"block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search Templates...",onInput:t[1]||(t[1]=l=>r.search(l,"name"))},null,32)])]),e("div",{class:d([{"flex-col md:gap-1":n.sidebar},"md:flex text-white grid grid-cols-3 gap-4 md:gap-3 py-4"])},[e("div",{onClick:t[2]||(t[2]=l=>r.setActive("all")),class:d([{"bg-blue-500 text-white":i.active==="all"},"py-2 md:px-4 text-center shadow cursor-pointer rounded-full"])}," All ",2),e("div",{onClick:t[3]||(t[3]=l=>r.setActive("ad")),class:d([{"bg-blue-500 text-white":i.active==="ad"},"py-2 md:px-4 text-center shadow cursor-pointer rounded-full"])}," Ad ",2),e("div",{onClick:t[4]||(t[4]=l=>r.setActive("social")),class:d([{"bg-blue-500 text-white":i.active==="social"},"py-2 md:px-4 text-center shadow cursor-pointer rounded-full"])}," Social ",2),e("div",{onClick:t[5]||(t[5]=l=>r.setActive("banner")),class:d([{"bg-blue-500 text-white":i.active==="banner"},"py-2 md:px-4 text-center shadow cursor-pointer rounded-full"])}," Banner ",2),e("div",{onClick:t[6]||(t[6]=l=>r.setActive("business")),class:d([{"bg-blue-500 text-white":i.active==="business"},"py-2 md:px-4 text-center shadow cursor-pointer rounded-full"])}," Business ",2),e("div",{onClick:t[7]||(t[7]=l=>r.setActive("ecommerce")),class:d([{"bg-blue-500 text-white":i.active==="ecommerce"},"py-2 md:px-4 text-center shadow cursor-pointer rounded-full"])}," Ecommerce ",2),e("div",{onClick:t[8]||(t[8]=l=>r.setActive("thumbnail")),class:d([{"bg-blue-500 text-white":i.active==="thumbnail"},"py-2 md:px-4 text-center shadow cursor-pointer rounded-full"])}," Thumbnail ",2),e("div",{onClick:t[9]||(t[9]=l=>r.setActive("other")),class:d([{"bg-blue-500 text-white":i.active==="other"},"py-2 md:px-4 text-center shadow cursor-pointer rounded-full"])}," Other ",2),e("div",{onClick:t[10]||(t[10]=l=>r.setActive("my")),class:d([{"bg-blue-500 text-white":i.active==="my"},"py-2 bg-pink-500 px-2 md:px-4 text-center shadow cursor-pointer rounded-full"])}," My Templates ",2)],2)])],2),e("div",null,[i.templates.length===0?(o(),a("div",le,[e("div",{onClick:t[11]||(t[11]=(...l)=>r.newTemplate&&r.newTemplate(...l)),class:"bg-white p-3 w-full flex flex-col justify-between rounded-md dark:bg-gray-800 shadow relative cursor-pointer hover:ring-2 hover:ring-blue-500 hover:shadow-lg"},[e("div",ie,[e("div",re,[u(g,{class:"w-7 h-7"}),m(" New template ")])])]),(o(),a(v,null,b(24,l=>e("div",{key:l,class:"bg-white p-3 w-full flex flex-col justify-between rounded-md dark:bg-gray-800 shadow relative cursor-pointer"},ae)),64))])):c("",!0),i.active!=="myTemplates"?(o(),a("div",de,[e("div",{class:d([{"py-0":n.sidebar},"w-full py-5"])},[i.templates?(o(),a("div",{key:0,class:d([{"md:grid-cols-1":n.sidebar},"grid md:grid-cols-8 grid-cols-2 gap-4 w-full"])},[e("div",{onClick:t[12]||(t[12]=(...l)=>r.newTemplate&&r.newTemplate(...l)),class:"bg-white p-3 w-full flex flex-col justify-between rounded-md dark:bg-gray-800 shadow relative cursor-pointer hover:ring-2 hover:ring-blue-500 hover:shadow-lg"},[e("div",ce,[e("div",ue,[he,u(g,{class:"w-7 h-7"}),m(" New template ")])])]),(o(!0),a(v,null,b(r.avilableTemplates,(l,f)=>(o(),a("div",{onClick:j=>r.showDetails(l),key:f,class:"bg-white group p-3 w-full flex flex-col justify-between rounded-md dark:bg-gray-800 shadow relative cursor-pointer hover:ring-2 hover:ring-blue-500 hover:shadow-lg"},[l.category==="my"?(o(),a("div",me," My ")):c("",!0),s.appMode==="noAuth"&&s.isPro(l.isPro)?(o(),w(C,{key:1,class:"hidden group-hover:block"})):c("",!0),e("div",ge,[e("img",{src:r.getTemplatePreview(l),class:"w-full rounded shadow dark:bg-white"},null,8,fe)]),e("div",ye,[l.name?(o(),a("div",ve,E(l.name),1)):c("",!0)])],8,pe))),128))],2)):(o(),a("div",be,[u(T,{class:"w-full flex justify-center",text:"Loading Shipping Templates, Please wait...."})]))],2)])):c("",!0)])])),i.selected?(o(),w(I,{key:2,onKeydown:N(r.closeModal,["esc"]),modelValue:i.modalVisiblity,"onUpdate:modelValue":t[18]||(t[18]=l=>i.modalVisiblity=l),style:{"z-index":"999999"},classes:"modal-container","content-class":"modal-content"},{default:z(()=>[e("div",Ae,[e("div",De,[i.selected.category==="my"&&i.deleteConfirmationMsg===!1?(o(),a("button",{key:0,class:d([{"left-28":i.canvasContainer.semitic==="rtl","right-28":i.canvasContainer.semitic!=="rtl"},"absolute top-3 z-50 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"]),onClick:t[14]||(t[14]=l=>i.deleteConfirmationMsg=!i.deleteConfirmationMsg)},Le,2)):c("",!0),i.deleteConfirmationMsg?(o(),a("div",{key:1,class:d([{"left-28":i.canvasContainer.semitic==="rtl","right-28":i.canvasContainer.semitic!=="rtl"},"absolute top-2 z-50 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto flex gap-3 items-center dark:hover:bg-gray-800 dark:hover:text-white"])},[m(" Are you sure ? "),e("button",{class:"bg-red-500 hover:bg-red-700 text-white font-semibold rounded-md px-3 py-1",onClick:t[15]||(t[15]=(...l)=>r.deleteSelectedTemplate&&r.deleteSelectedTemplate(...l))}," Yes "),e("button",{onClick:t[16]||(t[16]=l=>i.deleteConfirmationMsg=!1)},"Cancel")],2)):c("",!0),e("button",{type:"button",onClick:t[17]||(t[17]=(...l)=>r.closeModal&&r.closeModal(...l)),class:d([{"left-2.5":i.canvasContainer.semitic==="rtl","right-2.5":i.canvasContainer.semitic!=="rtl"},"z-50 absolute top-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"])},Ne,2)]),u(V,{dynamic:i.dynamic,selected:i.selected},null,8,["dynamic","selected"])])]),_:1},8,["onKeydown","modelValue"])):c("",!0)],2)}const Ue=R(Y,[["render",Re]]);export{Ue as default};