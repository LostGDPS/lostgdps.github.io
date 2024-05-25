 _levels = 1;
class _listLevel extends HTMLElement{
	constructor(){super();
		const template = `
<div class="level" style="display:grid; max-height:11vh; width:50%;">
	<img style="object-fit: cover; height:9vh; width:100%; aspect-ratio:16/9; border-radius:5px;" src="${this.getAttribute("img")}"></img>
	<span class="level_info" style="flex:0;">
		<h2 style="font-size:2vh;">${_levels}. ${this.getAttribute("lv")}</h2>
		<p style="font-size:1vh;">${this.getAttribute("creator")}</p>
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