import{m as a,o as d,c as n,b as e,j as l,bS as p}from"./index.d2b5948f.js";import{_ as c,u as o}from"./App.8a7f3b43.js";const u={props:["template"],components:{},data(){return{width:"100%",userData:o}},methods:{getTemplateId(){return this.appMode==="auth"?a(o.details.email)+"/"+a(this.template.name):this.template.id},getUrl(){return this.appMode==="auth"?this.serverEndpoint+"/i/"+this.getTemplateId():this.serverEndpoint+"/template/"+this.getTemplateId()},getShortCode(){return`[labelbaker_banner width='${this.width}' id='${this.getTemplateId()}']`},getEmbedCode(){let t=p(5);return`
<script src='https://cdn.jsdelivr.net/npm/@fatal_error/banner_popup@1.0.9' id='labelbaker-banner-js-js'><\/script>
<link rel='stylesheet' id='labelbaker-banner-css-css' href='https://cdn.jsdelivr.net/npm/@fatal_error/banner_popup@1.0.9/style.css' media='all' />

<div id="${t}"></div>
<script>
document.addEventListener('DOMContentLoaded', function() {
    const bannerConfig = {
        url: "${this.getUrl()}",
        width: '${this.width}',
        container: '${t}'
    };
    labelbaker.labelbakerBanner(bannerConfig);
});
<\/script>
            `}},mounted(){}},h={class:"px-3 py-5 relative"},b={class:"mb-6 sticky top-12 bg-gray-100 dark:bg-gray-800 p-5 rounded-md z-[9999]"},m=e("label",{for:"bannerWidth",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"},"Banner Width",-1),_=["value"],g={key:0,class:"py-5 shadow rounded-md p-3 mb-5"},y=e("div",{class:"pb-2"},[e("div",{class:"text-lg"},"WordPress Shortcode"),e("div",null,"Copy the shortcode and use where you can apply shortcode")],-1),v=[y],f=e("div",{class:"py-5 shadow rounded-md p-3"},[e("div",{class:"pb-2"},[e("div",{class:"text-lg"},"Embed Code"),e("div",null,"Copy the code and use it anywhere as HTML content")])],-1);function k(t,r,x,w,s,C){return d(),n("div",null,[e("div",h,[e("div",b,[m,e("input",{type:"text",id:"bannerWidth",value:s.width,onInput:r[0]||(r[0]=i=>s.width=i.target.value),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"px or % (Ex. 100px or 100%)",required:""},null,40,_)]),t.appMode==="noAuth"?(d(),n("div",g,v)):l("",!0),f])])}const E=c(u,[["render",k]]);export{E as default};
