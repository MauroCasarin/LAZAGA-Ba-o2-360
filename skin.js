// Garden Gnome Software - Skin
// Pano2VR 6.1.13/18080
// Filename: 360 Gyroscopio.ggsk
// Generated 2025-11-06T08:28:51

function pano2vrSkin(player,base) {
	player.addVariable('vis_video_file', 2, false);
	player.addVariable('vis_video_youtube', 2, false);
	player.addVariable('menu_open', 2, false);
	player.addVariable('menu_touch', 2, false);
	player.addVariable('menu_cloner', 1, 0);
	player.addVariable('category_var', 0, "");
	player.addVariable('category_visible', 2, false);
	player.addVariable('node_visible', 2, false);
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
		hs='data:image/png;base64,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';
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
		hs+='bottom : 14px;';
		hs+='height : 77px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
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
			player.setUseGyro(!(player.getUseGyro()));
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