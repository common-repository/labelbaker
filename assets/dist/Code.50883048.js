import{T as TempData,h as canvasContainer,V as VueFinalModal,M as ModalsContainer,S as showSuccess,a1 as installScript,a as resolveComponent,o as openBlock,c as createElementBlock,d as createVNode,w as withCtx,b as createBaseVNode,a0 as withKeys}from"./index.d2b5948f.js";import{_ as _export_sfc,s as stats}from"./App.8a7f3b43.js";const _sfc_main={data(){return{stats,TempData,canvasContainer,code:"console.log('hello labelbaker')",editor:null,scriptIndex:null,editScript:null}},components:{VueFinalModal,ModalsContainer},methods:{saveCode(){if(stats.showCodeModal=!1,window.labelbakerScript="",this.editScript&&TempData.scriptIndex!=null){eval(window.codeEditor.getValue());const script=window.labelbakerScript,convertedScript={...script};convertedScript.code=convertedScript.run.toString();let code=convertedScript.code.replace("run()","").trim();code=code.slice(1,-1).trim(),convertedScript.code=code,canvasContainer.editor.editor.attrs.scripts[this.scriptIndex]=convertedScript,showSuccess("Script Updated")}else canvasContainer.editor.editor.setAttrs({code:window.codeEditor.getValue()}),showSuccess("Code applied")},addAsScript(){window.labelbakerScript="",console.log(canvasContainer.editor.editor.getAttr("scripts")),eval(window.codeEditor.getValue());const script=window.labelbakerScript;installScript(script)},initMonacoEditor(){return new Promise((o,e)=>{require.config({paths:{vs:"https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.27.0/min/vs"}}),setTimeout(()=>{require(["vs/editor/editor.main"],()=>{var s=monaco.editor.create(document.getElementById("labelbaker-code-editor"),{value:"",language:"javascript",theme:"vs-light",minimap:{enabled:!1}});o(s)})},200)})}},mounted(){this.initMonacoEditor().then(o=>{var s;window.codeEditor=o,TempData.code&&TempData.scriptIndex!=null?(this.editScript=!0,this.scriptIndex=TempData.scriptIndex,window.codeEditor.setValue(TempData.code),this.code=TempData.code,setTimeout(()=>{TempData.code=null},200)):(s=canvasContainer.editor)!=null&&s.editor.getAttr("code")&&(window.codeEditor.setValue(canvasContainer.editor.editor.getAttr("code")),this.code=canvasContainer.editor.editor.getAttr("code"));var e=o.getAction("editor.action.formatDocument");e.run().then(null,function(d){console.error("Error formatting the document:",d)})})}},_hoisted_1={style:{height:"100vh"},class:"flex justify-center items-center h-full w-full"},_hoisted_2={class:"w-full flex justify-center"},_hoisted_3={class:"relative w-full max-w-3xl h-6xl"},_hoisted_4={class:"relative w-full bg-white rounded-lg shadow dark:bg-gray-700"},_hoisted_5=createBaseVNode("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[createBaseVNode("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),_hoisted_6=createBaseVNode("span",{class:"sr-only"},"Close modal",-1),_hoisted_7=[_hoisted_5,_hoisted_6],_hoisted_8=createBaseVNode("div",{class:"px-6 py-4 border-b rounded-t dark:border-gray-600"},[createBaseVNode("h3",{class:"text-base font-semibold text-gray-900 lg:text-xl dark:text-white"}," Code Editor ")],-1),_hoisted_9={class:"p-6"},_hoisted_10=createBaseVNode("div",{style:{height:"500px"},class:"w-full",id:"labelbaker-code-editor"},null,-1);function _sfc_render(o,e,s,d,a,r){const i=resolveComponent("vue-final-modal");return openBlock(),createElementBlock("div",null,[createVNode(i,{modelValue:a.stats.showCodeModal,"onUpdate:modelValue":e[3]||(e[3]=t=>a.stats.showCodeModal=t),style:{"z-index":"9999999"},classes:"modal-container","content-class":"modal-content",onKeydown:e[4]||(e[4]=withKeys(t=>a.stats.showCodeModal=!1,["esc"]))},{default:withCtx(()=>[createBaseVNode("div",_hoisted_1,[createBaseVNode("div",_hoisted_2,[createBaseVNode("div",_hoisted_3,[createBaseVNode("div",_hoisted_4,[createBaseVNode("button",{type:"button",onClick:e[0]||(e[0]=t=>a.stats.showCodeModal=!a.stats.showCodeModal),class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"},_hoisted_7),_hoisted_8,createBaseVNode("div",_hoisted_9,[_hoisted_10,createBaseVNode("button",{onClick:e[1]||(e[1]=(...t)=>r.saveCode&&r.saveCode(...t)),type:"button",class:"text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}," Done "),createBaseVNode("button",{onClick:e[2]||(e[2]=(...t)=>r.addAsScript&&r.addAsScript(...t)),type:"button",class:"text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}," Add as script ")])])])])])]),_:1},8,["modelValue"])])}const Code=_export_sfc(_sfc_main,[["render",_sfc_render]]);export{Code as default};
