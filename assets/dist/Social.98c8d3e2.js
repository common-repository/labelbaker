import{V as f,M as y,h as d,s as h,a as m,o as a,c as r,z as x,A as b,b as i,P as v,j as u,i as w,w as _,a0 as C}from"./index.d2b5948f.js";import{_ as k}from"./App.8a7f3b43.js";const P={components:{VueFinalModal:f,ModalsContainer:y},data(){return{selected:null,modalVisiblity:!1,canvasContainer:d,store:h,layoutSheetData:null,layoutSocialData:null,type:"sheet"}},methods:{showDetails:function(e,t="sheet"){this.type=t,this.modalVisiblity=!0,this.selected=e},formatSocialText(e){return e.replace(/-/g," ")},useIt:function(e){let t=e.labels_size;this.type==="social"&&(t=e.sheet_size);let{width:o,height:c}=this.getSize(t),{width:s,height:n}=this.getSize(e.sheet_size);this.canvasContainer.layoutPageWidth=this.inchToPx(s),this.canvasContainer.layoutPageHeight=this.inchToPx(n),this.canvasContainer.layoutCellHeight=this.inchToPx(c),this.canvasContainer.layoutCellWidth=this.inchToPx(o),this.canvasContainer.layoutPageMarginLeft=this.inchToPx(e.left_margin),this.canvasContainer.layoutPageMarginTop=this.inchToPx(e.top_margin),this.canvasContainer.layoutCellPaddingLeft=this.inchToPx(e.horizontal_spacing),this.canvasContainer.layoutCellPaddingTop=this.inchToPx(e.vertical_spacing),this.modalVisiblity=!1,h.activeMenu="designer",h.activeTool="documentSettings",d.useLayout=!0},inchToPx:function(e){return this.type=="social"?e:e.replace('"',"")*72},getSize:function(e){let t=0,o=0;if(this.type==="sheet"){let s=e.split(" ");t=s[0].replace('"',""),o=s[2].replace('"',"")}if(this.type==="social"){let s=e.split("x");t=parseInt(s[0]),o=parseInt(s[1])}return{width:t,height:o}},getPreviewLink(){return this.type==="social"?this.getAssetsEndpoint()+"/social/"+this.selected.preview:this.getAssetsEndpoint()+"/"+this.selected.preview},getLayoutEndpoint(){return this.apiEndpoint+"/data/layouts.json"},getSocialApiEndpoint(){return this.apiEndpoint+"/assets/social/layouts.json"},getAssetsEndpoint(){return this.apiEndpoint+"/assets"}},mounted(){fetch(this.getLayoutEndpoint()).then(e=>e.json()).then(e=>{this.layoutSheetData=e}),fetch(this.getSocialApiEndpoint()).then(e=>e.json()).then(e=>{this.layoutSocialData=e})}},S={key:0,class:"grid md:grid-cols-6 gap-4 w-full"},T=["onClick"],V={class:"flex xl:flex-row flex-col items-center justify-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full"},E=["src"],z={class:"flex items-center w-full"},j={class:"text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md"},D={class:"flex justify-center items-center mt-10 w-full"},L={class:"bg-white dark:bg-gray-800 flex md:w-2/3 md:h-2/3 rounded shadow-lg px-2 py-2"},A={class:"w-full flex flex-col justify-between items-center px-2 py-3 rounded"},M={class:"py-2 flex flex-col items-center h-full"},B=i("div",{class:"w-full text-center font-semibold text-2xl"}," You want to apply this layout? ",-1),H={class:"w-full flex items-center justify-center gap-10 py-10"};function I(e,t,o,c,s,n){const p=m("vue-final-modal");return a(),r("div",null,[s.layoutSocialData?(a(),r("div",S,[(a(!0),r(x,null,b(s.layoutSocialData,(l,g)=>(a(),r("div",{onClick:W=>n.showDetails(l,"social"),key:g,class:"bg-white p-3 w-full flex flex-col justify-between rounded-md dark:bg-gray-800 shadow cursor-pointer hover:ring-2 hover:ring-blue-500 hover:shadow-lg"},[i("div",V,[i("img",{src:n.getAssetsEndpoint()+"/social/"+l.preview,class:"h-32 mr-2 dark:bg-white"},null,8,E)]),i("div",z,[i("div",j,v(n.formatSocialText(l.labels_size)),1)])],8,T))),128))])):u("",!0),s.selected?(a(),w(p,{key:1,onKeydown:t[2]||(t[2]=C(l=>s.modalVisiblity=!1,["esc"])),modelValue:s.modalVisiblity,"onUpdate:modelValue":t[3]||(t[3]=l=>s.modalVisiblity=l),style:{"z-index":"9999999"},classes:"modal-container","content-class":"modal-content"},{default:_(()=>[i("div",D,[i("div",L,[i("div",A,[i("div",M,[B,i("div",H,[i("button",{class:"bg-green-500 text-white px-4 font-semibold py-2 rounded shadow",onClick:t[0]||(t[0]=l=>n.useIt(s.selected))}," Yes "),i("button",{class:"bg-red-500 text-white px-4 font-semibold py-2 rounded shadow",onClick:t[1]||(t[1]=l=>s.selected=null)}," No ")])])])])])]),_:1},8,["modelValue"])):u("",!0)])}const K=k(P,[["render",I]]);export{K as default};