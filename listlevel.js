let _levels = 1;
class _listLevel extends HTMLElement{
constructor(){super();
const template = `
<div class="level" style="display:grid; width:50%;">
<img style="object-fit: cover; width:60%; aspect-ratio:16/9; border-radius:5px;" src="${this.getAttribute("img")}"></img>
<span class="level_info" style="flex:0;">
<h1 style="font-size:36px;">${_levels}. ${this.getAttribute("lv")}</h2>
<h3 style="font-size:28px;">${this.getAttribute("creator")}</p>
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

window.customElements.define("list-level", _listLevel);
