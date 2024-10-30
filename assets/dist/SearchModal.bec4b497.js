import{V as m,M as p,s as g,h as v,a as f,o as l,c as n,d as w,w as _,b as e,z as x,A as y,P as d,j as b,a0 as k}from"./index.d2b5948f.js";import{F as M}from"./fuse.esm.249bd5bb.js";import{_ as C,s as D}from"./App.8a7f3b43.js";const N={components:{VueFinalModal:m,ModalsContainer:p},data(){return{stats:D,store:g,menuData:null,canvasContainer:v,menus:[{name:"dashboard",title:"Dashboard",hint:"",catName:"home"},{name:"newProject",title:"New Template",hint:"",catName:"home"},{name:"myTemplates",title:"Templates",catName:"home",hint:""},{name:"shape",title:"Editor",hint:"Template Designer",catName:"designer"}]}},methods:{restoreData(){this.menuData=this.menus},setData(a){this.menuData=a},search(a){let t=a.target.value,i={keys:["title","hint"]};if(t.length===0)this.restoreData();else{let o=new M(this.menuData,i).search(t).map(r=>r.item);this.setData(o)}},goToMenus(a,t){a==="designer"&&setTimeout(()=>{this.canvasContainer.editor.fitIntoContainer()},100),this.store.activeMenu=a,this.store.activeTool=t,this.stats.showSearchModal=!1}},mounted(){setTimeout(()=>{this.$refs.input.focus()},500),this.menuData=this.menus}},S={style:{height:"100vh"},class:"flex justify-center items-center h-full w-full"},T={class:"w-full flex justify-center"},V={class:"relative w-full h-full max-w-md md:h-auto"},j={class:"relative w-full bg-white rounded-tl-lg rounded-tr-lg shadow dark:bg-gray-700"},L={class:"px-2 py-2 border-b rounded-t dark:border-gray-600"},B={key:0,class:"p-2 h-56 overflow-y-scroll"},F={class:"gap-4 flex flex-col"},z=["onClick"],E={class:"group-hover:text-white font-semibold"},I={class:"text-gray-500 text-sm group-hover:text-white"},K={class:"px-2 py-2 bg-gray-200 rounded-bl-lg rounded-br-lg"},P=e("div",{class:"flex items-center gap-2"},[e("svg",{width:"15",height:"15","aria-label":"Escape key",role:"img"},[e("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[e("path",{d:"M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"})])]),e("span",{class:"text-sm"},"to close")],-1),A=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),U=e("span",{class:"sr-only"},"Close modal",-1),q=[A,U];function G(a,t,i,h,o,r){const c=f("vue-final-modal");return l(),n("div",null,[w(c,{modelValue:o.stats.showSearchModal,"onUpdate:modelValue":t[2]||(t[2]=s=>o.stats.showSearchModal=s),style:{"z-index":"9999999"},classes:"modal-container","content-class":"modal-content",onKeydown:t[3]||(t[3]=k(s=>o.stats.showSearchModal=!1,["esc"]))},{default:_(()=>[e("div",S,[e("div",T,[e("div",V,[e("div",j,[e("div",L,[e("input",{onInput:t[0]||(t[0]=(...s)=>r.search&&r.search(...s)),ref:"input",class:"rounded-md focus:ring-3 ring-2 border-none ring-blue-500 w-full",placeholder:"Search ",type:"text"},null,544)]),o.menuData?(l(),n("div",B,[e("div",F,[(l(!0),n(x,null,y(o.menuData,(s,u)=>(l(),n("div",{key:u},[e("div",{onClick:H=>r.goToMenus(s.catName,s.name),class:"group-hover:text-white hover:bg-blue-500 cursor-pointer px-2 rounded-md py-2 hover:shadow-md group"},[e("div",E,d(s.title),1),e("div",I,d(s.hint),1)],8,z)]))),128))])])):b("",!0)]),e("div",K,[P,e("button",{type:"button",onClick:t[1]||(t[1]=s=>o.stats.showSearchModal=!o.stats.showSearchModal),class:"absolute bottom-0 right-0 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"},q)])])])])]),_:1},8,["modelValue"])])}const R=C(N,[["render",G]]);export{R as default};
