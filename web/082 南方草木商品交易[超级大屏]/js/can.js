//画布封装函数
function canvas(o){
		o.dom.innerHTML="";
        var c=document.createElement("canvas");
        c.width=o.dom.offsetWidth;
        c.height=o.dom.offsetHeight;
        o.dom.appendChild(c);
        
        var ctx=c.getContext("2d");
			//阴影水平距离
		if(!!o.shadowOffsetX) ctx.shadowOffsetX=o.shadowOffsetX;
		//阴影垂直距离
		if(!!o.shadowOffsetY ) ctx.shadowOffsetY =o.shadowOffsetY ;
		//阴影扩张
		if(!!o.shadowBlur) ctx.shadowBlur=o.shadowBlur;
		//阴影颜色
		if(!!o.shadowColor) ctx.shadowColor=o.shadowColor; 
	if(!!o){
		for (var i = 0; i < o.s.length; i++) {
			ctx.beginPath();
			//渐变模式设置
			if(!!o.s[i].fillLinear){
				var grd = ctx.createLinearGradient(o.s[i].fillLinear[0][0],
																						o.s[i].fillLinear[0][1],
																						o.s[i].fillLinear[1][0],
																						o.s[i].fillLinear[1][1]);
			}else if(!!o.s[i].fillRadial){
				var grd = ctx.createRadialGradient( o.s[i].fillRadial[0][0],
										o.s[i].fillRadial[0][1],
										o.s[i].fillRadial[0][2],
										o.s[i].fillRadial[1][0],
										o.s[i].fillRadial[1][1],
										o.s[i].fillRadial[1][2]);
			}
			if(!!o.s[i].lineLinear){
				var grd1 = ctx.createLinearGradient(o.s[i].lineLinear[0][0],
																						o.s[i].lineLinear[0][1],
																						o.s[i].lineLinear[1][0],
																						o.s[i].lineLinear[1][1]);
			}
			//边框或线条宽度
			if(!!o.s[i].width){
				ctx.lineWidth=o.s[i].width;
			};
			//边框或线条颜色
			if(!!o.s[i].color){
				ctx.strokeStyle=o.s[i].color;
			};
			//边框或线条线性渐变
			if(!!o.s[i].lineLinearcolor){
				for (var n = 0; n < o.s[i].lineLinearcolor.length; n++) {
					grd1.addColorStop(o.s[i].lineLinearcolor[n][0], o.s[i].lineLinearcolor[n][1]);		    	
				}
				ctx.strokeStyle = grd1;
			};
      //填充色及渐变
				if(!!o.s[i].fillcolor){
					for (var n = 0; n < o.s[i].fillcolor.length; n++) {
						grd.addColorStop(o.s[i].fillcolor[n][0], o.s[i].fillcolor[n][1]);		    	
					}
						ctx.fillStyle = grd;				 
				}else{
					ctx.fillStyle = o.s[i].fillbgcolor;
				};		  
			//创建矩形或圆或线条或文本
			transform(ctx,o.s[i]);
			if(!!o.s[i].arc){
				ctx.arc(o.s[i].arc[0],o.s[i].arc[1],o.s[i].arc[2],o.s[i].arc[3],o.s[i].arc[4]);	
			}else if(!!o.s[i].rect){
				ctx.rect(o.s[i].rect[0],o.s[i].rect[1],o.s[i].rect[2],o.s[i].rect[3]);
			}else if(!!o.s[i].line){
				//设置线条端点样式,可选值round(圆形线帽),square(方形线帽)，butt(平直)
				if(!!o.s[i].tou) ctx.lineCap=o.s[i].tou;
				//设置两条线相交拐角类型,bevel(斜角),round(创建圆角),miter(尖角)                   
				if(!!o.s[i].jiao) ctx.lineJoin=o.s[i].jiao; 
				ctx.moveTo(o.s[i].line[0][0],o.s[i].line[0][1]);
				//中间点               
				for (var g = 1; g <o.s[i].line.length; g++) {
				 ctx.lineTo(o.s[i].line[g][0],o.s[i].line[g][1]);
				}
				if(o.s[i].close) ctx.closePath();
			}else if(!!o.s[i].fillText || !!o.s[i].strokeText){
				//字体设置
				if(o.s[i].font) ctx.font=o.s[i].font;
				if(!!o.s[i].fillText)
					ctx.fillText(o.s[i].fillText[0],o.s[i].fillText[1],o.s[i].fillText[2],o.s[i].fillText[3]);       
				if(!!o.s[i].strokeText)
				ctx.strokeText(o.s[i].strokeText[0],o.s[i].strokeText[1],o.s[i].strokeText[2],o.s[i].strokeText[3]);		
			}
			//填充
			if(!!o.s[i].fill){
				ctx.fill();
			}
			ctx.stroke();
		}
	}
}

function transform(ctx,obj){
	if(!!obj.translate) ctx.translate(obj.translate[0],obj.translate[1]);
	if(!!obj.scale) ctx.scale(obj.scale[0],obj.scale[1]);
	if(!!obj.rotate) ctx.rotate(obj.rotate);
}

// canvas({
// 	dom:div,
// 	s:[
// 			{
// 			line:[[0,0],[100,160],[150,60]],
// 			width:2,
// 			color:"red",
// 			tou:"round",
// 			jiao:"round",
// 			close:true,
// 			fill:true,
// 			lineLinear:[[0,0],[150,60]],                        
// 			 lineLinearcolor:[[0.1,"red"],[0.3,"green"],[1,"pink"]],
// 			 fillLinear:[[0,0],[150,150]],                   
// 			//fillRadial:[[50,50,5],[50,50,30]],           
// 			fillcolor:[[0,"red"],[1,"blue"]], 
// 			fillbgcolor:"blue",
// 			scale:[0.5,0.5],
// 			rotate:20*Math.PI/180,
// 			translate:[50,50],
// 			},
// 			{
// 			rect:[10,10,100,150],
// 			width:5,
// 			color:"red",
// 			fill:true,
// 			lineLinear:[[0,0],[0,100]],                        
// 			 lineLinearcolor:[[0.1,"red"],[0.6,"green"],[1,"pink"]],
// 			 fillLinear:[[0,0],[100,150]],                   
// 			//fillRadial:[[50,50,5],[50,50,30]],           
// 			fillcolor:[[0,"red"],[1,"blue"]], 
// 			fillbgcolor:"blue" ,
// 			scale:[2,2],
// 			rotate:20*Math.PI/180,
// 			translate:[50,50],
// 			},
// 			{
// 			arc:[150,150,40,0,2*Math.PI],
// 			width:5,
// 			color:"blue",
// 			fill:true,
// 			lineLinear:[[0,0],[200,200]],                        
// 			lineLinearcolor:[[0.1,"red"],[0.6,"green"],[1,"pink"]],
// 			 //fillLinear:[[0,0],[100,150]],                   
// 			fillRadial:[[150,150,5],[150,150,30]],           
// 			fillcolor:[[0,"red"],[1,"blue"]], 
// 			fillbgcolor:"green" 
// 			},
// 			{
// 			fillText:["aa242a",50,50,50],
// 			//strokeText:["aa242a",30,30,50], 
// 			font:"bold 40px Arial",
// 			width:2,
// 			color:"#fff",
// 			fill:true,
// 			//lineLinear:[[0,0],[100,100]],                        
// 			 //lineLinearcolor:[[0.1,"red"],[1,"green"]],
// 			 fillLinear:[[0,0],[0,-30]],                   
// 			//fillRadial:[[50,50,5],[50,50,100]],       
// 			fillcolor:[[0,"red"],[1,"#fff"]], 
// 			//fillbgcolor:"#fff" 
// 			},
//   ],
//   shadowColor:"red",                  //阴影颜色
// 	shadowBlur:5,                       //阴影扩张
// 	shadowOffsetX:2,                    //阴影水平范围
// 	shadowOffsetY:3                     //阴影垂直范围  
// })
