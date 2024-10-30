import{m as s,o as d,c as a,b as e,x as l,a6 as p,j as u}from"./index.d2b5948f.js";import{_ as c,u as n}from"./App.8a7f3b43.js";const h={props:["template"],components:{},data(){return{width:"500px",userData:n,showOnce:!0}},methods:{getTemplateId(){return this.appMode==="auth"?s(n.details.email)+"/"+s(this.template.name):this.template.id},getUrl(){return this.appMode==="auth"?this.serverEndpoint+"/i/"+this.getTemplateId():this.serverEndpoint+"/template/"+this.getTemplateId()},key(){return this.width+"_"+this.showOnce},getShortCode(){return`[labelbaker_popup width='${this.width}' show_once='${this.showOnce}' id='${this.getTemplateId()}']`},getEmbedCode(){return`
<script src='https://cdn.jsdelivr.net/npm/@fatal_error/banner_popup@1.0.9'><\/script>
<link rel='stylesheet'  href='https://cdn.jsdelivr.net/npm/@fatal_error/banner_popup@1.0.9/style.css' media='all' />

<script>
document.addEventListener('DOMContentLoaded', function() {
    const popupConfig = {
        url: "${this.getUrl()}",
        width: '${this.width}',
        showOnce:${this.showOnce},
    };
    labelbaker.labelbakerPopup(popupConfig);
});
<\/script>
            `}},mounted(){}},b={class:"px-3 py-5 relative"},g={class:"mb-6 flex gap-10 sticky top-12 bg-gray-100 dark:bg-gray-800 p-5 rounded-md z-[9999]"},m=e("label",{for:"bannerWidth",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"},"Popup Width",-1),_=["value"],y=e("label",{for:"countries",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Show Once",-1),f=e("option",{value:"true",selected:""},"Choose an option",-1),v=e("option",{value:"true"},"Yes",-1),w=e("option",{value:"false"},"No",-1),k=[f,v,w],x={key:0,class:"py-5 shadow rounded-md p-3 mb-5"},C=e("div",{class:"pb-2"},[e("div",{class:"text-lg"},"WordPress Shortcode"),e("div",null,"Copy the shortcode and use on page where you want to show popup")],-1),O=[C],E=e("div",{class:"py-5 shadow rounded-md p-3"},[e("div",{class:"pb-2"},[e("div",{class:"text-lg"},"Embed Code"),e("div",null,"Copy the code and use it anywhere as HTML content")])],-1);function M(i,t,$,I,o,P){return d(),a("div",null,[e("div",b,[e("div",g,[e("div",null,[m,e("input",{type:"text",id:"bannerWidth",value:o.width,onInput:t[0]||(t[0]=r=>o.width=r.target.value),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"px or % (Ex. 100px or 100%)",required:""},null,40,_)]),e("div",null,[y,l(e("select",{"onUpdate:modelValue":t[1]||(t[1]=r=>o.showOnce=r),id:"countries",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},k,512),[[p,o.showOnce]])])]),i.appMode==="noAuth"?(d(),a("div",x,O)):u("",!0),E])])}const W=c(h,[["render",M]]);export{W as default};