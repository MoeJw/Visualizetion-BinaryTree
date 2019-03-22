var can=document.getElementById("can");
can.width=window.innerWidth;
can.height=window.innerHeight;
can.style.background="#eee";
var counter=0;
text=can.getContext('2d');
var Rad=20;
var RangeLength=60;
var apperPostion=500;
var speed=15;
var sx=0;
var sy=0;
var ex=0;
var ey=0;
var flag=1;
function line(sx,sy,ex,ey){ //constructor of the line
	this.Sx=sx;//// postion of the start line
	this.Sy=sy;/////////////////////////////
	this.ex=ex;/// postion of the end of the line
	this.ey=ey;//////////////////////////////////
	this.draw=function(){
		text.beginPath();
		
text.moveTo(this.Sx,this.Sy);
text.lineTo(this.ex,this.ey);
text.stroke();
	}
}
function Node(x,y,rad,val){  ///// constructor of the Node
	
	this.x=x; ///postion of the Node
	this.y=y;    ////////////////
	this.WhichWay=null;
	this.Radius=rad
	this.leftx=null;//////left child postion
	this.lefty=null;
	this.rightx=null;///right child postion
	this.righty=null;
	this.one=null;
	this.nextL=null
	this.nextR=null;
	this.one1=null;
	this.value=val;
	this.father=null;
	this.RangeLengthLx=40;
	this.RangeLengthLy=40;
	this.RangeLengthRx=40;
	this.RangeLengthRy=40;

	this.string=this.value+"";
	this.draw2=function(){
		if(this.nextL!=null&&this.one!=null&&this.leftx!=null){ //// check if ther child (one==true==insert) or dosn't have any left or right child(lefr==flase)
		this.one.draw();
	
	}

	if(this.nextR!=null&&this.one1!=null&&this.rightx!=null){
		this.one1.draw();

	}
		text.beginPath();
		
		text.arc(this.x,this.y,this.Radius,0,Math.PI*2);
        text.fillStyle="blue";
		text.stroke();
		text.font = "10px Arial";
       text.fillText(this.string,this.x-5,this.y+5);

	}
	this.insert=function(leftx,lefty,rightx,righty){ /// insert node to the left or right
    this.leftx=leftx;  ///
    this.lefty=lefty;
    this.rightx=rightx;
    this.righty=righty;
    
    this.one=new line(this.x+18	,this.y+10,this.leftx+5,this.lefty-15);// construct a line bettween the child Node and the father Node

	this.one1=new line(this.x,this.y+10,this.rightx-5,this.righty-15);
	}/// 
	this.update=function(){

	}
	this.move=function(){

	}


}