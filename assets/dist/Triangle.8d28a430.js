import{_ as s}from"./App.8a7f3b43.js";import{o,c as d,b as e}from"./index.d2b5948f.js";const l={props:["editor","selected"]},n={class:"w-full"},c=e("div",{class:"text-xs text-gray-400 tracking-wider mb-2"},"Radius",-1),u=["value"];function i(b,r,t,g,p,f){return o(),d("div",null,[e("div",n,[c,e("input",{class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",type:"number",min:"0",value:t.selected.radius(),onInput:r[0]||(r[0]=a=>t.selected.radius(parseInt(a.target.value)))},null,40,u)])])}const m=s(l,[["render",i]]);export{m as default};