# 模态框组件说明 #
=======================
+ 1 组件介绍
	原生Js实现，不需要依赖任何js库
+ 2 使用方法

	| 参数 |  名称 |  可选值   |   说明    |
	| ---- | --   | ---  | ----  |
	| _w |   宽度  |  	使用 px、cm 等单位定义宽度。  |   设置模态框的宽度    |
	| _h |   高度  |  	使用 px、cm 等单位定义宽度。  |   设置模态框的高度    |
	| title |   标题  |  	文本    |   设置模态框的标题   |
	| content |  内容 |  	文本    |   设置模态框的内容   |
	| keyboard |  关闭按钮 |  	true（默认） false  |   当为false时，关闭安钮消失   |
	| keyEsc |  按键 |  	true（默认） false  |   当为ture时，按下esc键会关闭对话框。 |
	| moveable |  可移动的 |  	false：不启用（默认）； true：启用；  |   是否启用对话框拖拽移动功能。 |
	| backdrop | 背景遮罩 |  	'static' true（默认） false  |   使用布尔值来启用或禁用背景遮罩，如果指定为'static'则会启动背景遮罩，但点击背景遮罩时不会触发关闭对话框的过程。 |
	| backhead | 颜色|  	color  |   改变模态框的颜色 |
	| show | 立即显示|  true（默认） false |   	是否在对话框初始化之后立即显示出来。 |
	
	调用
	例：
	```javascript
		var obj={
			_w:"600",  //宽
			_h:"200",  //高
			title:"标题",  //标题
			content:"内容",  //文字
			keyboard:true,  //叉号
			keyEsc:true,  //键盘操作
			moveable:false,	 //移动
			backdrop:true,  //遮罩层显示
			backhead:"rgb(255,255,255)",  //对话框颜色
			show:true,  //立即显示
			
		};
		var modal01 = new Modal(obj);
		
		 var btn01 = document.getElementById("btn-lg");
		 btn01.onclick =function(){
			 console.log("ok")
			 modal01.bindAlert()
		 }
	```
+ 3 作者
	> 卖核弹的小女孩
	> 
	> 电话：888888888
	> 
	> QQ：8888888888
