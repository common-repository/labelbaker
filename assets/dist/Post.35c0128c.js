import{_ as f}from"./App.8a7f3b43.js";import{o,c as r,b as t,P as h,j as d}from"./index.d2b5948f.js";const p={props:["post","container"],data(){return{isBusy:!1}},methods:{setFeaturedImage(){this.isBusy=!0;let i=this.serverEndpoint+"/featured-image-upload",s={postId:this.post.id};this.container.editor.exportToURL(i,JSON.stringify(s)).then(e=>{this.isBusy=!1}).catch(e=>{this.isBusy=!1,console.log(e)})}}},C={class:"flex items-center mb-2 justify-between gap-2"},g={class:"w-full dark:text-white truncate ..."},m={class:"w-full text-right"},_={key:0,class:"flex",role:"status"},x=t("svg",{"aria-hidden":"true",class:"w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),b=t("span",null,"Please wait...",-1),y=[x,b];function w(i,s,e,k,a,l){var n,u;return o(),r("div",C,[t("div",g,h((u=(n=e.post.title)==null?void 0:n.rendered)!=null?u:e.post.title),1),t("div",m,[a.isBusy?(o(),r("div",_,y)):d("",!0),a.isBusy?d("",!0):(o(),r("button",{key:1,type:"button",class:"px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",onClick:s[0]||(s[0]=(...c)=>l.setFeaturedImage&&l.setFeaturedImage(...c))}," Set For this "))])])}const F=f(p,[["render",w]]);export{F as default};
