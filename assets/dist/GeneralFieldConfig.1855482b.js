import{o,c as a,b as e,x as u,$ as d}from"./index.d2b5948f.js";import{_ as r}from"./App.8a7f3b43.js";const c={props:["element"],data(){return{visible:"yes"}},watch:{visible:function(l,t){l==="yes"?this.element.show():this.element.hide()}},methods:{visiblity(l){}},mounted(){this.element.isVisible()||(this.visible="no")}},m={class:"flex flex-col gap-3"},v={class:"flex gap-2 items-center justify-between"},_=e("span",null,"Visible",-1),p={class:"flex gap-2 items-center justify-between"},b=e("span",null,"Width",-1),h=["value"],g={class:"flex gap-2 items-center justify-between"},f=e("span",null,"Height",-1),y=["value"],w={class:"flex gap-2 items-center justify-between"},x=e("span",null,"Position X",-1),k=["value"],j={class:"flex gap-2 items-center justify-between"},V=e("span",null,"Position Y",-1),I=["value"];function B(l,t,n,C,i,G){return o(),a("div",m,[e("div",v,[_,u(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>i.visible=s),"true-value":"yes","false-value":"no",class:"w-20 p-1 dark:bg-gray-800 rounded",type:"checkbox"},null,512),[[d,i.visible]])]),e("div",p,[b,e("input",{onInput:t[1]||(t[1]=s=>n.element.width(s.target.value)),value:n.element.width(),class:"w-20 p-1 dark:bg-gray-800 rounded",type:"number"},null,40,h)]),e("div",g,[f,e("input",{onInput:t[2]||(t[2]=s=>n.element.height(s.target.value)),value:n.element.height(),class:"w-20 p-1 dark:bg-gray-800 rounded",type:"number"},null,40,y)]),e("div",w,[x,e("input",{onInput:t[3]||(t[3]=s=>n.element.x(s.target.value)),value:n.element.x(),class:"w-20 p-1 dark:bg-gray-800 rounded",type:"number"},null,40,k)]),e("div",j,[V,e("input",{onInput:t[4]||(t[4]=s=>n.element.y(s.target.value)),value:n.element.y(),class:"w-20 p-1 dark:bg-gray-800 rounded",type:"number"},null,40,I)])])}const E=r(c,[["render",B]]);export{E as G};
