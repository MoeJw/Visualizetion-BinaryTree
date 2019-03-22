var can=document.getElementById('can');
//var m=document.getElementById('p');

var ctx=can.getContext('2d');
document.body.width=window.innerWidth;
document.body.height=window.innerHeight;
can.width=window.innerWidth;
can.height=window.innerHeight-4;
var Colors=[
'#2c3e50',
'#e74c3c',
'#Ecf0f1',
'#3498db',
'#2980b9'
]
			function circ(xx,yy,Rad,dx,dy){/// this is constructer 
					this.x=xx;
					this.y=yy;
					this.dxx=dx;
					this.dy=dy;
					this.Radius=Rad;
					this.static=Rad;
					this.myColor=Colors[Zero(0,5)];
					this.draw=function(){
					ctx.beginPath();
					ctx.arc(this.x,this.y,this.Radius,0,Math.PI*2);
					ctx.strokeStyle="blue";
					//ctx.stroke();
					ctx.fillStyle=this.myColor;
					ctx.fill();


	                }
		       }
var Rad=Random(1,3);	

var dx=Random(2,0.5)-0.5;
var dy=Random(2,0.5)-0.5;
console.log(dx);
var x=0;
var y=0;  /// call constructer 
var all=[];
var mouse={
	x:null,
	y:null 
}
window.addEventListener('mousemove',function(event){
	mouse.x=event.x
	mouse.y=event.y;
	//console.log(mouse);


})
			for (var i = 0; i < 800; i++) {
				x=Random(window.innerWidth-50,50);
				Rad=Math.random()*4+1;	
				y=Random(window.innerHeight-50,50);
			var dx=Random(1,-0.5);
            var dy=Random(1,-0.5);
			var l=new circ(x,y,Rad,dx,dy);
			all.push(l);
			l.draw();
			//x+=30;
			//y+=50;
		}

function animation(){

ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
				for (var i = 0; i < all.length; i++) {
				if(all[i].x+all[i].Radius>window.innerWidth||all[i].x-all[i].Radius<0){////////// check the edges of left and right 

				all[i].dxx=-all[i].dxx;


				}////////// check the edges of left and right 
				
              if(all[i].y+all[i].Radius>window.innerHeight||all[i].y-all[i].Radius<0){////////// check the edges of left and right 

				//all[i].dxx=-all[i].dxx;
				all[i].dy=-all[i].dy;

				}//////
				all[i].x+=all[i].dxx;
				all[i].y+=all[i].dy;
				var dis=50
				if(mouse.x-all[i].x<dis&&mouse.x-all[i].x>-dis&&mouse.y-all[i].y<dis&&mouse.y-all[i].y>-dis){
					if(all[i].Radius<60)
					all[i].Radius+=3;

					//mouse.x=undefined;
				}else {
					if(all[i].Radius>Rad)
					all[i].Radius-=1;
				}
				
				all[i].draw();


				}

requestAnimationFrame(animation);
}


animation();
function Random(max, min){
	while(1){
		var temp=Math.floor(Math.random() * (max - min) ) + min;
	if(temp==0){
      temp=Math.floor(Math.random() * (max - min) ) + min;
	}else{
		return temp;
	}

	}
	
}
function Zero(max,min){
	return Math.floor(Math.random() * (max - min) ) + min;
}
//width, canvas.height
