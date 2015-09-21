/**
 * @authors 	Petrus.Law (petrus.law@outlook.com)
 * @date    	2015-08-24 10:18:03
 * @version 	0.0.1
 * @github      https://github.com/pyrinelaw/
 * @desc     	解决Wap端网页点击延迟与hover生效问题
 */

(function() {
	
	var pFastTouch = function(settings) {
		if(!document.querySelectorAll) return;	// 不支持html5元素查询
		if(!settings || !settings.selector) return;	// 未设置选择器
		
		settings.callbacks = settings.callbacks || {};

		var els = document.querySelectorAll(settings.selector),
			hoverClass = settings.hoverClass,
			callbacks = settings.callbacks;

		var startCb = null, moveCb = null, endCb = null;

		/**
		 * 触摸开始
		 */
		if(hoverClass || callbacks.start){
			startCb = function(event){
				var el = event.target;
				if(hoverClass){
					var	className = el.className;
					className = (className == (undefined || '')) ? hoverClass : (className + ' '+hoverClass);
					el.className = className;
				}
				if(callbacks.start) callbacks.start.call(null, el, event);
			}

			for(var i=0; i<els.length; i++){
				els[i].addEventListener('touchstart', startCb, settings.bubble || false);
			}
		}

		/**
		 * 触摸中
		 */
		if(callbacks.move){
			moveCb = function(event){
				callbacks.move.call(null, event.target, event);
			}

			for(var i=0; i<els.length; i++){
				els[i].addEventListener('touchmove', moveCb, settings.bubble || false);
			}
		}

		/**
		 * 触摸结束
		 */
		if(hoverClass || callbacks.end){
			endCb = function(event){
				el = event.target;
				if(hoverClass){
					var reg = new RegExp('(\\s|^)'+hoverClass+'(\\s|$)');
					el.className = el.className.replace(reg, ' ');
				}
				if(callbacks.end) callbacks.end.call(null, el, event);
			}

			for(var i=0; i<els.length; i++){
				els[i].addEventListener('touchend', endCb, settings.bubble || false);
				els[i].addEventListener('touchcancel', endCb, settings.bubble || false);
			}
		}
		
		var setDestory = function(el){
			if(startCb) el.removeEventListener('touchstart', startCb, false);
			if(moveCb) el.removeEventListener('touchmove', moveCb, false);
			if(endCb) el.removeEventListener('touchend', endCb, false);
			if(endCb) el.removeEventListener('touchcancel', endCb, false);
		}
		
		/**
		 * 销毁
		 */
		var destory = function(){
			for(var i=0; i<els.length; i++) setDestory(els[i]);
		}
		
		return {
			destory: destory
		};
	}
	
	window.pFastCorres = function(settings){
		return new pFastTouch(settings);
	}

})()
