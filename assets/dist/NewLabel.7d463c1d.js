import{V as y,M as k,h as p,s as w,T as v,p as x,a as C,o as g,c,d as T,w as M,b as e,q as N,x as o,Z as n,P as s,z as L,A as _,j as H,a0 as P}from"./index.d2b5948f.js";import{_ as V,s as f}from"./App.8a7f3b43.js";const b={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]},S={componenets:{VueFinalModal:y,ModalsContainer:k},data(){return{stats:f,canvasContainer:p,myEditor:null,sheets:b,selected:"a4",pageWidth:595.28,pageHeight:841.89,pageMarginTop:0,pageMarginLeft:0,cell:null,cellWidth:200,cellHeight:100,cellPaddingTop:0,cellPaddingLeft:0,store:w,TempData:v,canvasContainer:p,sameAsDocument:!1,editor:null,templateName:""}},methods:{createNew(){if(this.templateName.length===0)return alert("Template name required");this.TempData.editing.name=this.templateName,window.location.href="#/editor",this.store.activeMenu="designer",this.store.activeTool="shape",setTimeout(()=>{this.canvasContainer.cellWidth=this.cellWidth,this.canvasContainer.cellHeight=this.cellHeight,this.canvasContainer.cellPaddingLeft=this.cellPaddingLeft,this.canvasContainer.cellPaddingTop=this.cellPaddingTop,this.canvasContainer.pageHeight=this.pageHeight,this.canvasContainer.pageWidth=this.pageWidth,this.canvasContainer.pageMarginLeft=this.pageMarginLeft,this.canvasContainer.pageMarginTop=this.pageMarginTop,this.canvasContainer.format=this.selected,this.canvasContainer.editor.editorWidth=this.cellWidth,this.canvasContainer.editor.editorHeight=this.cellHeight,this.canvasContainer.editor.background.fill("white"),this.canvasContainer.editor.background.width(this.cellWidth),this.canvasContainer.editor.background.height(this.cellHeight),this.canvasContainer.editor.clearAll(),this.canvasContainer.editor.fitIntoContainer(),this.canvasContainer.editor.grid.addGrid(),this.canvasContainer.editor.ruler.addRuler();const l=x();p.useLayout=!1,f.showNewModal=!1,l.success("New Design Created!",{position:"bottom-center",timeout:2e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1}),this.canvasContainer.editor.fitIntoContainer()},100)},isCustomSize:function(){for(const l in b){let[t,i]=b[l];if(t!==this.pageWidth&&i!==this.pageHeight)return!0}return!1},setPageSize:function(l){let t=l.target.value;if(this.selected=t,t!=="custom"){var[i,h]=b[l.target.value];this.pageWidth=i,this.pageHeight=h}}},mounted(){setTimeout(()=>{this.editor=this.canvasContainer.editor},100)}},W={style:{height:"100vh"},class:"flex justify-center items-center h-full w-full"},z={class:"relative w-full h-full max-w-md md:h-auto"},U={class:"relative bg-white rounded-lg shadow dark:bg-gray-700"},j=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),B=e("span",{class:"sr-only"},"Close",-1),D=[j,B],F={class:"p-6"},O={class:"w-full flex flex-col gap-2"},A={class:"relative mt-5 w-full"},q=e("label",{for:"templateName",class:"absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"},"Template Name",-1),E={class:"w-full flex flex-col gap-2 p-2 rounded border-yellow-500 border-2 mt-6"},I={class:"flex justify-between"},K={class:"block mb-1 text-sm w-full font-medium text-gray-900 dark:text-gray-400"},G={class:"flex gap-5 justify-between"},R=["selected"],Z=["selected","value"],J={key:0,class:"w-full border-2 rounded p-2 hover:shadow-xl"},Q={class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"},X={class:"flex gap-5 justify-between"},Y={class:"w-full border-blue-500 border-2 rounded p-2 hover:shadow-xl"},$={class:"mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 flex gap-5 justify-between"},ee={class:"flex gap-5 justify-between"},te={class:"flex gap-5 justify-between"};function re(l,t,i,h,r,d){const m=C("vue-final-modal");return g(),c("div",null,[T(m,{modelValue:r.stats.showNewModal,"onUpdate:modelValue":t[12]||(t[12]=a=>r.stats.showNewModal=a),style:{"z-index":"9999999"},classes:"modal-container","content-class":"modal-content",onKeydown:t[13]||(t[13]=P(a=>r.stats.showNewModal=!1,["esc"]))},{default:M(()=>[e("div",W,[e("div",z,[e("div",U,[e("button",{type:"button",onClick:t[0]||(t[0]=a=>r.stats.showNewModal=!1),class:N([{"left-2.5":r.canvasContainer.semitic==="rtl","right-2.5":r.canvasContainer.semitic!=="rtl"},"absolute top-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"])},D,2),e("div",F,[e("div",O,[e("div",A,[o(e("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=a=>r.templateName=a),id:"templateName",class:"block px-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" "},null,512),[[n,r.templateName]]),q]),e("div",E,[e("div",I,[e("h1",K,s(l.$t("sidebar.pageSettings.text")),1)]),e("div",G,[e("div",null,[e("small",null,s(l.$t("sidebar.pageSettings.marginLeft")),1),o(e("input",{class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500","onUpdate:modelValue":t[2]||(t[2]=a=>r.pageMarginLeft=a),type:"number"},null,512),[[n,r.pageMarginLeft]])]),e("div",null,[e("small",null,s(l.$t("sidebar.pageSettings.marginTop")),1),o(e("input",{class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500","onUpdate:modelValue":t[3]||(t[3]=a=>r.pageMarginTop=a),type:"number"},null,512),[[n,r.pageMarginTop]])])]),e("select",{class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",onChange:t[4]||(t[4]=(...a)=>d.setPageSize&&d.setPageSize(...a))},[e("option",{selected:d.isCustomSize(),value:"custom"}," Custom size ",8,R),(g(!0),c(L,null,_(r.sheets,(a,u)=>(g(),c("option",{selected:r.selected===u,key:u,value:u},s(u.toUpperCase()),9,Z))),128))],32),r.selected==="custom"?(g(),c("div",J,[e("h1",Q,s(l.$t("sidebar.pageSettings.customPageSize")),1),e("div",X,[e("div",null,[e("small",null,s(l.$t("common.width")),1),o(e("input",{class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500","onUpdate:modelValue":t[5]||(t[5]=a=>r.pageWidth=a),type:"number"},null,512),[[n,r.pageWidth]])]),e("div",null,[e("small",null,s(l.$t("common.height")),1),o(e("input",{class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500","onUpdate:modelValue":t[6]||(t[6]=a=>r.pageHeight=a),type:"number"},null,512),[[n,r.pageHeight]])])])])):H("",!0)]),e("div",Y,[e("h1",$,s(l.$t("sidebar.pageSettings.labelSize")),1),e("div",ee,[e("div",null,[e("small",null,s(l.$t("common.width")),1),o(e("input",{class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500","onUpdate:modelValue":t[7]||(t[7]=a=>r.cellWidth=a),type:"number"},null,512),[[n,r.cellWidth]])]),e("div",null,[e("small",null,s(l.$t("common.height")),1),o(e("input",{class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500","onUpdate:modelValue":t[8]||(t[8]=a=>r.cellHeight=a),type:"number"},null,512),[[n,r.cellHeight]])])]),e("div",te,[e("div",null,[e("small",null,s(l.$t("sidebar.pageSettings.paddingLeft")),1),o(e("input",{class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500","onUpdate:modelValue":t[9]||(t[9]=a=>r.cellPaddingLeft=a),type:"number"},null,512),[[n,r.cellPaddingLeft]])]),e("div",null,[e("small",null,s(l.$t("sidebar.pageSettings.paddingTop")),1),o(e("input",{class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500","onUpdate:modelValue":t[10]||(t[10]=a=>r.cellPaddingTop=a),type:"number"},null,512),[[n,r.cellPaddingTop]])])])]),e("button",{onClick:t[11]||(t[11]=(...a)=>d.createNew&&d.createNew(...a)),class:"h-8 flex items-center gap-2 px-3 rounded-md shadow text-white justify-center hover:shadow-lg bg-green-500"},s(l.$t("common.new")),1)])])])])])]),_:1},8,["modelValue"])])}const se=V(S,[["render",re]]);export{se as default};
