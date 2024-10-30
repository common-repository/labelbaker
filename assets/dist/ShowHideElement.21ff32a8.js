import{h as v,o as l,c as i,b as e,z as g,A as w,q as p,e as u,P as m}from"./index.d2b5948f.js";import{i as x,D as y}from"./index.edaf6bce.js";import{_ as f}from"./App.8a7f3b43.js";const b={props:["selected","showHideFor"],data(){return{canvasContainer:v,elements:[],showDropdown:null,hideDropdown:null}},methods:{removeElement(n){this.elements.splice(n,1),this.selected.setAttr(this.showHideFor+"showHideElements",this.elements)},addElement(n,t,d){n.preventDefault();let a={id:t._id,name:t.name(),action:d},r=this.elements.findIndex(s=>s.id===a.id);r!=-1?this.elements[r].action=d:this.elements.push(a),a.action==="show"?this.showDropdown.hide():this.hideDropdown.hide(),this.selected.setAttr(this.showHideFor+"showHideElements",this.elements)},filterList:function(n){return n.filter(t=>t.getClassName()!=="Transformer"&&t.name()!=="guid-line"&&t.name()!=="anchor")}},watch:{selected:function(n){var t,d;this.elements=(d=(t=this.selected.attrs)==null?void 0:t[this.showHideFor+"showHideElements"])!=null?d:[]}},mounted(){var r,s;x();const n=document.getElementById("addShowElementsDropdown"),t=document.getElementById("addShowElements"),d=document.getElementById("addHideElementsDropdown"),a=document.getElementById("addHideElements");this.showDropdown=new y(n,t),this.hideDropdown=new y(d,a),this.elements=(s=(r=this.selected.attrs)==null?void 0:r[this.showHideFor+"showHideElements"])!=null?s:[]}},k={class:"flex flex-col gap-2 py-4"},_=["onClick"],E=e("svg",{"aria-hidden":"true",class:"w-3.5 h-3.5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),D=e("span",{class:"sr-only"},"Remove",-1),H=[E,D],C={class:"mb-5"},B=e("button",{id:"addShowElements","data-dropdown-toggle":"addShowElementsDropdown",class:"text-white w-full bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-small rounded-lg text-sm px-1.5 py-1 text-center inline-flex justify-between items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",type:"button"},[u("Add show element "),e("svg",{class:"w-4 h-4 ml-2","aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})])],-1),L={id:"addShowElementsDropdown",class:"z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"},S={class:"py-2 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"addShowElements"},F=["onClick"],T=e("button",{id:"addHideElements","data-dropdown-toggle":"addHideElementsDropdown",class:"text-white w-full bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-small rounded-lg text-sm px-1.5 py-1 text-center inline-flex justify-between items-center dark:bg-yellow-600 dark:yellow:bg-blue-700 dark:focus:ring-yellow-800",type:"button"},[u("Add hide element "),e("svg",{class:"w-4 h-4 ml-2","aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})])],-1),z={id:"addHideElementsDropdown",class:"z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"},A={class:"py-2 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"addHideElements"},I=["onClick"];function j(n,t,d,a,r,s){return l(),i("div",null,[e("div",k,[(l(!0),i(g,null,w(r.elements,(o,h)=>(l(),i("div",{key:h},[e("span",{id:"badge-dismiss-green",class:p([{"text-green-800 bg-green-100 rounded dark:bg-green-900 dark:text-green-300":o.action==="show","text-yellow-800 bg-yellow-100 rounded dark:bg-yellow-900 dark:text-yellow-300":o.action==="hide"},"inline-flex items-center px-2 py-1 mr-2 text-sm font-medium"])},[u(m(o.name)+" ",1),e("button",{type:"button",onClick:c=>s.removeElement(h),class:p([{"text-green-400  hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300":o.action==="show","text-yellow-400  hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-800 dark:hover:text-yellow-300":o.action==="hide"},"inline-flex items-center p-0.5 ml-2 text-sm bg-transparent rounded-sm"]),"data-dismiss-target":"#badge-dismiss-green","aria-label":"Remove"},H,10,_)],2)]))),128))]),e("div",C,[B,e("div",L,[e("ul",S,[(l(!0),i(g,null,w(s.filterList(r.canvasContainer.editor.layer.children).slice().reverse(),(o,h)=>(l(),i("li",{key:h},[e("a",{onClick:c=>s.addElement(c,o,"show"),href:"#",class:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"},m(o.name()),9,F)]))),128))])])]),e("div",null,[T,e("div",z,[e("ul",A,[(l(!0),i(g,null,w(s.filterList(r.canvasContainer.editor.layer.children).slice().reverse(),(o,h)=>(l(),i("li",{key:h},[e("a",{onClick:c=>s.addElement(c,o,"hide"),href:"#",class:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"},m(o.name()),9,I)]))),128))])])])])}const V=f(b,[["render",j]]);export{V as default};