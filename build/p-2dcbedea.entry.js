import{r as t,d as i,h as e,H as s,c as o}from"./p-fd83c6f5.js";import{g as a}from"./p-667e92e8.js";import{c as n}from"./p-5b51185b.js";const r=class{constructor(e){t(this,e),this.ionStyle=i(this,"ionStyle",7)}sizeChanged(){this.emitStyle()}connectedCallback(){this.emitStyle()}emitStyle(){const t=this.getSize();this.ionStyle.emit({["title-"+t]:!0})}getSize(){return void 0!==this.size?this.size:"default"}render(){const t=a(this),i=this.getSize();return e(s,{class:Object.assign({[t]:!0,["title-"+i]:!0},n(this.color))},e("div",{class:"toolbar-title"},e("slot",null)))}get el(){return o(this)}static get watchers(){return{size:["sizeChanged"]}}};r.style={md:":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:0.0125em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.title-small){width:100%;height:100%;font-size:15px;font-weight:normal}"};export{r as ion_title}