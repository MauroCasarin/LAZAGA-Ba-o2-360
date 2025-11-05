// Garden Gnome Software - Skin
// Pano2VR 6.1.13/18080
// Filename: 360 Interfas St.ggsk
// Generated 2025-11-05T11:20:03

function pano2vrSkin(player,base) {
	player.addVariable('vis_video_file', 2, false);
	player.addVariable('vis_video_youtube', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._icono360=document.createElement('div');
		els=me._icono360__img=document.createElement('img');
		els.className='ggskin ggskin_icono360';
		hs=basePath + 'images/icono360.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('alt','Restablecer vista');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Icono360";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 67px;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._icono360.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._icono360.onclick=function (e) {
			player.setDefaultView();
		}
		me._icono360.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._icono360);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('alt','Usar dos dedos para hacer zoom');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-80;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 3px;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.onclick=function (e) {
			player.changeFovLog(-2,true);
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._image_1);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('alt','Mover a derecha');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 3px;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_2.onclick=function (e) {
			player.changePanLog(-5.2,true);
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._image_2);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('alt','zonas interactivas clic para abrir elementos');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggDx=80;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 3px;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._image_3);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me.skinTimerEvent();
};