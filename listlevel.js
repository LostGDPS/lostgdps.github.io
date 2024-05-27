let _levels = 1;
class _listLevel extends HTMLElement{
constructor(){super();
const template = `
<div class="level" style="display:grid; width:50%;">
<img style="object-fit: cover; width:100%; aspect-ratio:16/9; border-radius:5px;" src="${this.getAttribute("img")}"></img>
<span class="level_info" style="flex:0;">
<h2 style="font-size:100%;">${_levels}. ${this.getAttribute("lv")}</h2>
<p style="font-size:75%;">${this.getAttribute("creator")}</p>
</span>
</div>
<br/><br/>
`
this.innerHTML=template;
_levels+=1;
}
connectedCallback(){
}
}

window.customElements.define("list-level", _listLevel);"list-level", _listLevel);