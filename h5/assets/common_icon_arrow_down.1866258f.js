import{y as e,o as s,c as t,w as a,d as i,n as r,x as n,b as o,E as A,h as d,f as c}from"./index.d09173fe.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";var l=h({name:"UniDrawer",components:{keypress:{name:"Keypress",props:{disable:{type:Boolean,default:!1}},mounted(){const e={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]};document.addEventListener("keyup",(s=>{if(this.disable)return;const t=Object.keys(e).find((t=>{const a=s.key,i=e[t];return i===a||Array.isArray(i)&&i.includes(a)}));t&&setTimeout((()=>{this.$emit(t,{})}),0)}))},render:()=>{}}},emits:["change"],props:{mode:{type:String,default:""},mask:{type:Boolean,default:!0},maskClick:{type:Boolean,default:!0},width:{type:Number,default:220}},data:()=>({visibleSync:!1,showDrawer:!1,rightMode:!1,watchTimer:null,drawerWidth:220}),created(){this.drawerWidth=this.width,this.rightMode="right"===this.mode},methods:{clear(){},close(e){("mask"!==e||this.maskClick)&&this.visibleSync&&this._change("showDrawer","visibleSync",!1)},open(){this.visibleSync||this._change("visibleSync","showDrawer",!0)},_change(e,s,t){this[e]=t,this.watchTimer&&clearTimeout(this.watchTimer),this.watchTimer=setTimeout((()=>{this[s]=t,this.$emit("change",t)}),t?50:300)}}},[["render",function(h,l,w,g,m,p){const u=c,y=e("keypress");return m.visibleSync?(s(),t(u,{key:0,class:r([{"uni-drawer--visible":m.showDrawer},"uni-drawer"]),onTouchmove:A(p.clear,["stop","prevent"])},{default:a((()=>[i(u,{class:r(["uni-drawer__mask",{"uni-drawer__mask--visible":m.showDrawer&&w.mask}]),onClick:l[0]||(l[0]=e=>p.close("mask"))},null,8,["class"]),i(u,{class:r(["uni-drawer__content",{"uni-drawer--right":m.rightMode,"uni-drawer--left":!m.rightMode,"uni-drawer__content--visible":m.showDrawer}]),style:o({width:m.drawerWidth+"px"})},{default:a((()=>[n(h.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"]),i(y,{onEsc:l[1]||(l[1]=e=>p.close("mask"))})])),_:3},8,["class","onTouchmove"])):d("",!0)}],["__scopeId","data-v-31b87047"]]),w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAQAAAD8fJRsAAAAlElEQVQY02NggIPFPIt5EDwWBPP7aQYGBk0YjwnGmFX8X+O/xqxiGJ8RQs0W/3eLgY+BgeETk1rqSyQd/9sY+BgYGBgY+P63IemYbfzvDMIuJpPUs1Ad/ycxIAEIj4mBYVb0fysUCatZ0QwMjIt5vt1gkGZABU+5NJh+uGMIMzBI/3Bn4dj53ZeRHVX8/8/ULQy4AADxcSbsd55eMwAAAABJRU5ErkJggg==",g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAgUlEQVQI12OcZfP/MAMaYPzG4M7E8oIBA/znYnnBlHSHoRdDpjfpDhMDA3cT40sUg15yNzEwMDEwxHxiqEJRXxXziYGBEcKedea/MVT92TQTBgYGBiaoqgK4eigLKpF2hHEpAwMDA+PStCMoEgwM7OWM3xi/sZdjOp5htstsFwQPANfSHgSLdqvDAAAAAElFTkSuQmCC";export{w as _,g as a,l as b};
