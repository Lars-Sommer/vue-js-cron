import{_ as t,o as r,q as o,a6 as n,l as d,r as l,w as p,v as i}from"./app.af489eaa.js";const c={props:{appendItems:{type:Array,default:()=>[]}},data:function(){return{headers:[{name:"Name",value:"name"},{name:"Type",value:"type"},{name:"Default",value:"default"},{name:"Description",value:"desc"}],items:[{name:"model-value",type:"`string`",default:'`"* * * * *"`',desc:"the current cron expression"},{name:"fields",type:"`Field[]`",default:"...",desc:"each field defines on position of the cron expression"},{name:"periods",type:"`Period[]`",default:"...",desc:"the `value` porperty of a period determines which fields are visible"},{name:"locale",type:"`string`",default:'`"en"`',desc:""},{name:"custom-locale",type:"`Locale`",default:"...",desc:""},...this.appendItems]}}};function m(e,f,u,h,_,v){const s=l("md-table");return r(),o(s,{headers:e.headers,items:e.items,ref:"table"},n({_:2},[d(e.$slots,(y,a)=>({name:a,fn:p(()=>[i(e.$slots,a)])}))]),1032,["headers","items"])}var b=t(c,[["render",m],["__file","core-props.vue"]]);export{b as default};
