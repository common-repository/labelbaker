import{_ as n}from"./App.8a7f3b43.js";import{o as a,c as s,b as t,j as l}from"./index.d2b5948f.js";const o={props:["selected","editor"]},c={key:0},d={class:"relative inline-flex items-center cursor-pointer"},i=["checked"],f=t("div",{class:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"},null,-1),u=t("span",{class:"ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"},"Input field",-1);function p(_,r,e,g,b,h){return a(),s("div",null,[e.selected.attrs.type==="text"?(a(),s("div",c,[t("label",d,[t("input",{checked:e.selected.getAttr("inputField"),type:"checkbox",onChange:r[0]||(r[0]=k=>e.selected.getAttr("inputField")?e.selected.setAttr("inputField",!1):e.selected.setAttr("inputField",!0)),class:"sr-only peer"},null,40,i),f,u])])):l("",!0)])}const y=n(o,[["render",p]]);export{y as default};
