function Modal(obj){
	this._w = obj._w;
	this._h = obj._h;
	this.title = obj.title;
	this.content = obj.content;
	this.topNum = 0;
	this.keyboard = obj.keyboard;
	this.keyEsc = obj.keyEsc;
	this.moveable = obj.moveable;
	this.isMouseDown =false;
	this.backdrop = obj.backdrop;
	this.backhead = obj.backhead;
	this.show = obj.show;
	
	this.posX = 0;
	this.posY = 0;
	
	this.bindDOM();
	if(this.keyboard){
		this.bindshut();
	}
	if(this.keyEsc){
		this.bindKey();
	}
	if(this.moveable){
		this.bindmobie();
	}
	if(this.backdrop=='static'){
		this.backclieck();
	}
	
}
//生成模态框
Modal.prototype.bindDOM = function(){
	var str = "";
	 str+='<div class="modal-for-page fade">';
	str+='<div class="modal" id="modal">';
			str+='<div class="modal-dialog">';
				str+='<div class="modal-content">';
					str+='<div class="modal-header">';
						str+='<h4 class="modal-title">'+this.title+'</h4>';
						if(this.keyboard){
							str+='<button type="button" class="modal-btn">x</button>';
						}
					str+='</div>';
					str+='<div class="modal-body">';
						str+='<div class="modal-text">'+this.content+'</div>';
					str+='</div>';
					str+='<div class="modal-footer">';
						if(this.keyboard){
						str+='<button type="button" class="btn btn-default">关闭</button>';
						}
						str+='<button type="button" class="btn btn-primary">确认</button>';
					str+='</div>';
				str+='</div>';
			str+='</div>';
		str+='</div>';
		 str+='</div>';
		 if(this.backdrop){
			str+='<div class="modal-bg"></div>';
		}
	document.body.innerHTML+=str;
	this.modal = document.getElementById("modal");
	this.modal_bg = document.getElementsByClassName("modal-bg")[0];
	this.modal_page = document.getElementsByClassName("modal-for-page")[0];
	this.modal_header = document.getElementsByClassName("modal-header")[0];
	this.modal_bg =  document.getElementsByClassName("modal-bg")[0];
	
	this.modal.style.width=this._w+"px";
	this.modal.style.height=this._h+"px";
};

//手动关闭按钮
Modal.prototype.bindshut = function(){
	var that = this;
	this.modal_btn = document.getElementsByClassName("modal-btn")[0];
	this.btn_default =document.getElementsByClassName("btn-default")[0];

	this.modal_btn.onclick = function(){
		if(that.show){
		setTimeout(function(){
			that.modal_page.style.display = "none";
		 },500);
		}else{
			that.modal_page.style.display = "none";
		}
		 that.modal_page.className = "modal-for-page fade";
		that.modal_bg.style.opacity="0";
	};
	
	this.btn_default.addEventListener("click",function(){
		if(that.show){
		setTimeout(function(){
			that.modal_page.style.display = "none";
		 },500);
		}else{
			that.modal_page.style.display = "none";
		}
		 that.modal_page.className = "modal-for-page fade";
		that.modal_bg.style.opacity="0";
	},false);
};
//键盘关闭按钮
Modal.prototype.bindKey = function(){
	var that = this;
	document.addEventListener("keydown",function(event){
		event=event || window.event;
		console.log(event.keyCode);
		if(event.keyCode == 27){
			if(that.show){
			setTimeout(function(){
				that.modal_page.style.display = "none";
			 },500);
			}else{
				that.modal_page.style.display = "none";
			}
			 that.modal_page.className = "modal-for-page fade";
			that.modal_bg.style.opacity="0";
		}
		
	});
};
// 网页调用事件
Modal.prototype.bindAlert = function(){
	var that = this;
	that.modal_page.style.display = "block";
	if(that.show){
	setTimeout(function(){
		that.modal_page.className = "modal-for-page fade in";
	 },500);
	 }else{
		that.modal_page.className = "modal-for-page fade in"; 
	 }
	that.modal_bg.style.opacity="0.5";
	that.modal.style.top = "245px";
};
//移动事件
Modal.prototype.bindmobie = function(){
	//添加鼠标点击或手指点击事件
	// this.modal.style.margin = "0";
	 this.modal.style.position = "absolute";
	 this.modal.style.left = window.innerWidth/2-this._w/2+"px";
	 console.log(this.modal.style.width);
	var that =this;
	this.modal_header.addEventListener("mousedown",function(evt){
			var event = evt || window.event;
			
			//获取鼠标点击或手指点击时的视口坐标
			that.posX = event.offsetX;
			that.posY = event.offsetY;
			//点击时调用画圆的方法
			console.log(that.posY);
			that.isMouseDown = true; //鼠标按下
			document.addEventListener("mousemove",function(evt){
				
				if( !that.isMouseDown ){
					return false;
				}else{
					console.log("ok");
					var event = evt || window.event;
					
					that.modal.style.left = event.clientX-that.posX+"px";
					that.modal.style.top = event.clientY-that.modal_header.offsetHeight-that.posY+"px";
					
				}
			});
	});

		document.addEventListener("mouseup",function(evt){
			that.isMouseDown = false; //鼠标未按下
			console.log(that.isMouseDown);
		});
	
	function getAllOffsetTop(obj){
		var allTop=0;//用来保存所有的offsetTop之和
		
		while(obj){
			//将对象的offsetTop属性累加保存到allTop中
			allTop+=obj.offsetTop+obj.clientTop;
			//找到对象的有定位属性的父元素，将其重新赋值给obj，实现了逐级向上查找。
			obj=obj.offsetParent;
		}
		return allTop;
	}	
	//找封装函数实现所有offsetLeft之和
	function getAllOffsetLeft(obj){
	
		var allLeft=0;//用来保存所有的offsetTop之和
		while(obj){
			//将对象的offsetTop属性累加保存到allTop中
			allLeft+=obj.offsetLeft+obj.clientLeft;
			//找到对象的有定位属性的父元素，将其重新赋值给obj，实现了逐级向上查找。
			obj=obj.offsetParent;
		}
		return allLeft;
	}
	
};
//背景点击
	Modal.prototype.backclieck = function(){
		var that = this;
		this.modal_page.addEventListener("click",function(){
			console.log("ok");
			if(that.show){
			setTimeout(function(){
				that.modal_page.style.display = "none";
			}	,500);
			}else{
			that.modal_page.style.display = "none";
			}
			that.modal_page.className = "modal-for-page fade";
			that.modal_bg.style.opacity="0";
		},false);
	};