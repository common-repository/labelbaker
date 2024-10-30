import{V as y,M as p,h as g,s as h,a as f,o as a,c as d,b as e,z as m,A as w,P as i,i as x,w as v,q as k,j as u,a0 as C}from"./index.d2b5948f.js";import{_ as z}from"./App.8a7f3b43.js";const P={components:{VueFinalModal:y,ModalsContainer:p},data(){return{selected:null,modalVisiblity:!1,canvasContainer:g,store:h,layoutSheetData:null,layoutSocialData:null,type:"sheet"}},methods:{showDetails:function(s,l="sheet"){this.type=l,this.modalVisiblity=!0,this.selected=s},formatSocialText(s){return s.replace(/-/g," ")},useIt:function(s){let l=s.labels_size;this.type==="social"&&(l=s.sheet_size);let{width:n,height:c}=this.getSize(l),{width:t,height:r}=this.getSize(s.sheet_size);this.canvasContainer.layoutPageWidth=this.inchToPx(t),this.canvasContainer.layoutPageHeight=this.inchToPx(r),this.canvasContainer.layoutCellHeight=this.inchToPx(c),this.canvasContainer.layoutCellWidth=this.inchToPx(n),this.canvasContainer.layoutPageMarginLeft=this.inchToPx(s.left_margin),this.canvasContainer.layoutPageMarginTop=this.inchToPx(s.top_margin),this.canvasContainer.layoutCellPaddingLeft=this.inchToPx(s.horizontal_spacing),this.canvasContainer.layoutCellPaddingTop=this.inchToPx(s.vertical_spacing),this.modalVisiblity=!1,h.activeMenu="designer",h.activeTool="documentSettings",g.useLayout=!0},inchToPx:function(s){return this.type=="social"?s:s.replace('"',"")*72},getSize:function(s){let l=0,n=0;if(this.type==="sheet"){let t=s.split(" ");l=t[0].replace('"',""),n=t[2].replace('"',"")}if(this.type==="social"){let t=s.split("x");l=parseInt(t[0]),n=parseInt(t[1])}return{width:l,height:n}},getPreviewLink(){return this.type==="social"?this.getAssetsEndpoint()+"/social/"+this.selected.preview:this.getAssetsEndpoint()+"/"+this.selected.preview},getLayoutEndpoint(){return this.apiEndpoint+"/data/layouts.json"},getSocialApiEndpoint(){return this.apiEndpoint+"/assets/social/layouts.json"},getAssetsEndpoint(){return this.apiEndpoint+"/assets"}},mounted(){fetch(this.getLayoutEndpoint()).then(s=>s.json()).then(s=>{this.layoutSheetData=s}),fetch(this.getSocialApiEndpoint()).then(s=>s.json()).then(s=>{this.layoutSocialData=s})}},S={class:"grid grid-cols-2 md:grid-cols-8 gap-4 w-full"},V=["onClick"],T={class:"flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full"},L=["src"],E={class:"flex items-center w-full"},j={class:"text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md"},D={style:{height:"100vh"},class:"flex justify-center items-center h-full w-full"},A={class:"bg-white dark:bg-gray-800 md:flex md:w-2/3 md:h-2/3 rounded shadow-lg px-2 py-2"},M={key:0,class:"w-full flex items-center px-5"},B=["src"],H={class:"w-full flex flex-col justify-between md:ring-1 px-2 py-3 rounded"},I={class:"flex justify-between my-2"},W={class:"py-2 flex flex-col flex-grow h-full"},F=e("h1",{class:"font-bold py-5"},"Layout details",-1),K={class:"w-full text-lg text-left text-gray-500 dark:text-gray-400"},N={class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},U=e("td",null,"Labels size",-1),q={class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},R=e("td",null,"Top margin",-1),G={class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},J=e("td",null,"Vertical spacing",-1),O={class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},Q=e("td",null,"Corners",-1),X={class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},Y=e("td",null,"Right margin",-1),Z={class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},$=e("td",null,"Left margin",-1),ee={class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},te=e("td",null,"Horizontal spacing",-1),se={class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},le=e("td",null,"Sheet size",-1),ie={class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},oe=e("td",null,"Bottom margin",-1),ne={class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},re=e("td",null,"Labels per sheet",-1);function ae(s,l,n,c,t,r){const b=f("vue-final-modal");return a(),d("div",null,[e("div",S,[(a(!0),d(m,null,w(t.layoutSheetData,(o,_)=>(a(),d("div",{onClick:de=>r.showDetails(o),key:_,class:"bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow cursor-pointer hover:ring-2 hover:ring-blue-500 hover:shadow-lg"},[e("div",T,[e("img",{src:r.getAssetsEndpoint()+"/"+o.preview,class:"w-full mr-2 dark:bg-white"},null,8,L)]),e("div",E,[e("div",j,i(o.labels_size),1)])],8,V))),128))]),t.selected?(a(),x(b,{key:0,onKeydown:l[2]||(l[2]=C(o=>t.modalVisiblity=!1,["esc"])),modelValue:t.modalVisiblity,"onUpdate:modelValue":l[3]||(l[3]=o=>t.modalVisiblity=o),style:{"z-index":"9999999"},classes:"modal-container","content-class":"modal-content"},{default:v(()=>[e("div",D,[e("div",A,[t.type!=="social"?(a(),d("div",M,[e("img",{src:r.getPreviewLink(),class:k([{"h-full":t.type=="sheet","w-full":t.type==="social"},"mr-2 dark:bg-white"])},null,10,B)])):u("",!0),e("div",H,[e("div",I,[e("button",{class:"bg-green-500 text-white px-4 font-semibold py-2 rounded shadow",onClick:l[0]||(l[0]=o=>r.useIt(t.selected))}," Use it "),e("button",{class:"bg-red-500 text-white px-4 font-semibold py-2 rounded shadow",onClick:l[1]||(l[1]=o=>t.selected=null)},"Cancel")]),e("div",W,[F,e("table",K,[e("tr",N,[U,e("td",null,i(t.selected.labels_size),1)]),e("tr",q,[R,e("td",null,i(t.selected.top_margin),1)]),e("tr",G,[J,e("td",null,i(t.selected.vertical_spacing),1)]),e("tr",O,[Q,e("td",null,i(t.selected.corners),1)]),e("tr",X,[Y,e("td",null,i(t.selected.right_margin),1)]),e("tr",Z,[$,e("td",null,i(t.selected.left_margin),1)]),e("tr",ee,[te,e("td",null,i(t.selected.horizontal_spacing),1)]),e("tr",se,[le,e("td",null,i(t.selected.sheet_size),1)]),e("tr",ie,[oe,e("td",null,i(t.selected.bottom_margin),1)]),e("tr",ne,[re,e("td",null,i(t.selected.labels_per_sheet),1)])])])])])])]),_:1},8,["modelValue"])):u("",!0)])}const ge=z(P,[["render",ae]]);export{ge as default};
