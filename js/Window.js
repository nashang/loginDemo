(function($){
	function Window(){
		this.config={
			width:500,
			height:300,
			title:"系统消息",
			content:"",
			handler:null,
			hasCloseBtn:false,
			btnText:"",
			hasMask:false,
			isDraggable:false,
			dragHandle:null
		}
	}
	
	Window.prototype={
		alert:function(config){
			var config=$.extend(this.config, config);
			
			if(config.hasMask){
				var mask=$("<div class='window-mask'></div>");
				mask.appendTo('body')
			};
			
			var box=$(
				'<div class="window-alert">'+
					'<div class="window-alert-header">'+config.title+'</div>'+
					'<div class="window-alert-body">'+config.content+'</div>'+
					'<div class="window-alert-footer"><input type="button" class="window-alert-btn" value="'+config.btnText+'" /></div>'+
				'</div>'
			);
			
			var btn=box.find(".window-alert-footer input[type='button']"); 
			
			if(config.isDraggable){
				if(config.dragHandle){
					box.draggable({handle:config.dragHandle});
				}else{
					box.draggable();
				}
			};
			box.appendTo('body');
			
			box.css({
				width:config.width+"px",
				height:config.height+"px",
				left:config.x||((window.innerWidth-config.width)/2+'px'),
				top:config.y||((window.innerHeight-config.height)/2+'px')
			});
			
			btn.click(function(){
				config.handler&&config.handler();
				box.remove();
				mask.remove();
			});
			
			if(config.hasCloseBtn){
				var closeBtn=$("<span class='window-alert-closeBtn'>&times<span>");
				closeBtn.appendTo(box);
				closeBtn.click(function(){
					box.remove();
					mask.remove();
				})
			};
			
		},
		confirm:function(){
			
		},
		prompt:function(){
			
		}
	}
	
	window.Window=Window;
})(jQuery)
