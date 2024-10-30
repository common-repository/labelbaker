import{o as r,c as s,b as n,h as k,T as v,a1 as V,a as f,e as T,z as m,A as y,P as c,d as w,j as g}from"./index.d2b5948f.js";import{_ as A,s as S}from"./App.8a7f3b43.js";import{c as E}from"./scripts.b2d7ede5.js";import{r as N}from"./TrashIcon.2b15ded5.js";function P(t,o){return r(),s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})])}const B={data(){return{canvasContainer:k,canvasScripts:[],stats:S,TempData:v,showScriptsIndexes:[]}},components:{TrashIcon:N,PencilIcon:P},methods:{installScirptToCanvas(){V(E),this.getScripts()},changeValue(t,o,p,b,u){this.canvasContainer.editor.editor.attrs.scripts[o].fields[p].value=u},isSelected(t,o){return t===o},getElements(t){return t?k.editor.editor.find(t):this.getAllElements()},getAllElements(){return k.editor.editor.children[3].children},deleteScript(t){this.canvasContainer.editor.editor.attrs.scripts.splice(t,1),this.getScripts()},editScript(t){var b;if(this.isPro("yes")){alert("Required Pro Version");return}const o=this.canvasContainer.editor.editor.attrs.scripts[t],p=`labelbakerScript = {
                id: "${o.id}",
                name: "${o.name}",
                description: "${(b=o==null?void 0:o.description)!=null?b:""}",
                fields: ${JSON.stringify(o.fields)},
                run() {
                    ${o.code}
                }
            }`;v.scriptIndex=t,v.code=p,S.showCodeModal=!0},getScripts(){this.canvasScripts=k.editor.editor.getAttr("scripts")},toggle(t){const o=(p,b)=>{const u=p.indexOf(b);u!==-1&&p.splice(u,1)};this.showScriptsIndexes.includes(t)?o(this.showScriptsIndexes,t):this.showScriptsIndexes.push(t)}},mounted(){this.getScripts()}},L={class:"py-5"},M={class:"flex justify-between items-center mb-2"},z={key:0,class:"flex flex-col gap-3"},D={class:"px-1 py-1 flex justify-between items-center"},F=["onClick"],O={class:"flex gap-2"},q={key:0,class:"p-2"},J={key:0,class:"pb-2"},R={key:0},G=["for"],H=["onInput","value","id"],K={key:1},Q=["for"],U=["onInput","value","id"],W={key:2,class:"pb-4"},X=["for"],Y=["onInput","value","id"],Z={key:3},$=["for"],j=["onChange"],ee=["value"],te=["onChange","id"],re=n("option",null,"--None--",-1),se=["selected"],oe={key:4},ae=["for"],ne=["value","onChange","id"];function le(t,o,p,b,u,i){const C=f("PencilIcon"),I=f("TrashIcon");return r(),s("div",L,[n("div",M,[T(" Scripts "),n("button",{class:"bg-blue-500 px-2 py-1 rounded-md text-white",onClick:o[0]||(o[0]=l=>u.stats.showInstallScriptModal=!0)}," Add Script ")]),u.canvasScripts?(r(),s("div",z,[(r(!0),s(m,null,y(u.canvasScripts,(l,d)=>(r(),s("div",{key:d,class:"border-pink-500 border-2 rounded-md"},[n("div",D,[n("div",{onClick:e=>i.toggle(d),class:"cursor-pointer"},c(l.name)+" ("+c(d)+")",9,F),n("div",O,[w(C,{onClick:e=>i.editScript(d),class:"w-4 cursor-pointer"},null,8,["onClick"]),w(I,{onClick:e=>i.deleteScript(d),class:"w-4 cursor-pointer"},null,8,["onClick"])])]),u.showScriptsIndexes.includes(d)?(r(),s("div",q,[l.description?(r(),s("p",J,c(l==null?void 0:l.description),1)):g("",!0),(r(!0),s(m,null,y(l.fields,(e,h)=>{var x;return r(),s("div",{class:"flex flex-col gap-2",key:h},[e.type==="text"?(r(),s("div",R,[n("label",{for:t.id,class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},c(e.label),9,G),n("input",{onInput:a=>i.changeValue(l,d,h,e,a.target.value),value:e.value,type:"text",id:t.id,class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,40,H)])):g("",!0),e.type==="color"?(r(),s("div",K,[n("label",{for:t.id,class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},c(e.label),9,Q),n("input",{onInput:a=>i.changeValue(l,d,h,e,a.target.value),value:e.value,type:"color",id:t.id},null,40,U)])):g("",!0),e.type==="number"?(r(),s("div",W,[n("label",{for:t.id,class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},c(e.label),9,X),n("input",{onInput:a=>i.changeValue(l,d,h,e,a.target.value),value:e.value,type:"number",id:t.id,class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,40,Y)])):g("",!0),e.type==="select"?(r(),s("div",Z,[n("label",{for:e.id,class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},c(e.label),9,$),e.data?(r(),s("select",{key:0,onChange:a=>i.changeValue(l,d,h,e,a.target.value)},[(r(!0),s(m,null,y(e.data,(a,_)=>(r(),s("option",{value:a.key,key:_},c(a.value),9,ee))),128))],40,j)):(r(),s("select",{key:1,onChange:a=>i.changeValue(l,d,h,e,a.target.value),id:e.id,class:"block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[re,(r(!0),s(m,null,y(i.getElements((x=e==null?void 0:e.kind)!=null?x:null),(a,_)=>(r(),s("option",{class:"dark:text-white",selected:i.isSelected(a.attrs.name,e.value),key:_},c(a.attrs.name),9,se))),128))],40,te))])):g("",!0),e.type==="date"?(r(),s("div",oe,[n("label",{for:e.id,class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},c(e.label),9,ae),n("input",{value:e.value,type:"date",onChange:a=>i.changeValue(l,d,h,e,a.target.value),id:e.id,class:"block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,40,ne)])):g("",!0)])}),128))])):g("",!0)]))),128))])):g("",!0)])}const ge=A(B,[["render",le]]);export{ge as default};
