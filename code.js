


function Tree(){
	var Root=null
  var allnodes=[];
	this.update=function (){
		var point=Root;
         point.draw2();
         this.inorder(point);

  
		/**/
	}////update
	
	 
		   this.inorder=function(node){

		    if(node !== null){
		    	if(node.father!=null){
		    		if(node.father.nextL!=null){if(node.father.nextL.value==node.value)node.WhichWay="left";}
		    	if(node.father.nextR!=null){if(node.father.nextR.value==node.value)node.WhichWay="right";}
		    	if(node.WhichWay!=node.father.WhichWay){

		    	   }

		    	}

		   // console.log(node.value);
		    node.draw2();
		    if(node.nextL!=null){
		    	node.one.Sx=node.x-15;
           node.one.Sy=node.y+10;
		    	this.X(node);
		  this.Y(node);
		    }if(node.nextR!=null){
				this.X1(node);
		  		this.Y1(node);
		  		node.one1.Sx=node.x+15;
          node.one1.Sy=node.y+10;
		    }
		    
		        this.inorder(node.nextL);
		        
		        this.inorder(node.nextR);
		    }
}
  
	this.X=function(Root){
		
    	
       if(Root.x<Root.nextL.x+ Root.RangeLengthLx){ //////////////demo
	//Root.nextL.x
	//Root.nextL.y;
		Root.nextL.x-=speed;
		Root.one.ex-=speed;

         }
	if(Root.one.Sx>=Root.x){
	    Root.one.Sx-=1;
		

		}
if(Root.x>Root.nextL.x+ Root.RangeLengthLx){
			Root.nextL.x+=1;
		Root.one.ex+=1;
		} 
    }

	

     
     this.Y=function(Root){
     	var id=setInterval(this.lo,1000)
     	this.lo=function(){
     		     			console.log(1)

     		if(counter>100000000){
		clearInterval(id);

     		}else{
     			counter++;
     			if((Root.nextL.y-Root.y> Root.RangeLengthLy)){
			Root.one.ey-=speed;
			Root.nextL.y-=speed;

}else{
	if(Root.nextL.y-Root.y!= Root.RangeLengthLy){
			     if(Root.nextL.y-Root.y> Root.RangeLengthLy){
			     Root.one.ey-=1;
				Root.nextL.y-=1;
			    //console.log(555);
	}else{
		 Root.one.ey+=1;
		 Root.nextL.y+=1;
	}
	}

}
     		}
     		
     	}

     	var counter=0;

     }

	
	this.X1=function(Root){
	if(Root.nextR.x-Root.x> Root.RangeLengthRx){
		while(Root.nextR.x-Root.x!= Root.RangeLengthRx){
			Root.nextR.x-=1;
		Root.one1.ex-=1;
		}
     
	}else if(Root.nextR.x-Root.x< Root.RangeLengthRx){
		while(Root.nextR.x-Root.x!=Root.RangeLengthRx){
			Root.nextR.x+=1;
		Root.one1.ex+=1;
		}
	}
         //console.log(Root.nextR.x+"::"+Root.x)

	if(Root.one1.Sx>=Root.x){
	    Root.one1.Sx+=1;
		

		}


     }
     this.Y1=function(Root){
     	if((Root.nextR.y-Root.y>Root.RangeLengthRy)){
			Root.one1.ey-=speed;
			Root.nextR.y-=speed;


}else{
	if(Root.nextR.y-Root.y!= Root.RangeLengthRy){
			     if(Root.nextR.y-Root.y>Root.RangeLengthRy){
			     Root.one1.ey-=1;
				Root.nextR.y-=1;
			    //console.log(555);
	}else{
		 Root.one1.ey+=1;
		 Root.nextR.y+=1;
	}
	}

}
     }
	this.add=function(x,y,value){//////////////////////////////////////////////////////////////////////////////////////
	var node=new Node(x,y,Rad,value);
var point=Root;
		if(Root==null){
         Root=node;
         
  		
		}else{
			/**/
			allnodes.push(node);
        this.insertNode(point, node);

        
		}
    
	}

this.insertNode=function (point,x){
   
    // if the data is less than the node
    // data move left of the tree 
           
    if(x.value < point.value){
    
        // if left is null insert node here
         var temp1=null;
			var temp2=null;
			temp2=point.nextR;
			temp1=point.nextL;
			if(temp1!=null){temp1.father.RangeLengthLx=temp1.father.RangeLengthLx+13; temp1.father.RangeLengthLy=temp1.father.RangeLengthLy+1}
			if(temp2!=null){temp2.father.RangeLengthRx=temp2.father.RangeLengthRx+13;temp2.father.RangeLengthRy=temp2.father.RangeLengthRy+1}
			/*if(temp1!=null){temp1.father.RangeLengthLx=temp1.father.RangeLengthLx+10; }
			if(temp2!=null){temp2.father.RangeLengthRx=temp2.father.RangeLengthRx+10;}
			if(temp1!=null){temp1.father.RangeLengthLy=temp1.father.RangeLengthLy+1; }
			if(temp2!=null){temp2.father.RangeLengthLy=temp2.father.RangeLengthLy+1; }*/
        if(point.nextL === null){
            point.nextL = x;
          
            x.father=point;
             //alert(x.father)
            point.insert(x.x,x.y,null,null)
				if(point.nextR==null){point.insert(x.x,x.y,null,null);}else{
					point.insert(x.x,x.y,point.nextR.x,point.nextR.y)

				}
				

            /////////////
        } // if left is not null recurr until 
            // null is found
        else{
         this.insertNode(point.nextL, x); 
        
     }
 
           
           
    
 
    // if the data is more than the node
    // data move right of the tree 
    }else{
    
        // if right is null insert node here
         var temp1=null;
			var temp2=null;
			temp2=point.nextR;
			temp1=point.nextL;
			if(temp1!=null){temp1.father.RangeLengthLx=temp1.father.RangeLengthLx+8; temp1.father.RangeLengthLy=temp1.father.RangeLengthLy+1}
			if(temp2!=null){temp2.father.RangeLengthRx=temp2.father.RangeLengthRx+8;temp2.father.RangeLengthRy=temp2.father.RangeLengthRy+1}
        if(point.nextR === null){
           point.nextR = x;
            x.father=point;
           if(point.nextL==null){point.insert(null,null,x.x,x.y);}else{
					//point.insert(x.x,x.y,point.nextL.x,point.nextL.y);
					point.insert(point.nextL.x,point.nextL.y,x.x,x.y,);
				}
           ////
        }
        else{ this.insertNode(point.nextR,x);}
 
            // if right is not null recurr until 
            // null is found
           
    }
}
}



//var x=new line(sx,sy,ex,ey);
/*var Root=new Node(600,60,Rad,true,false);
var x=new Node(700,apperPostion,Rad,true,false);
Root.insert(x.x,x.y,null,null);
var x2=new Node(1200,apperPostion,Rad,false);
Root.insert(x.x,x.y,x2.x,x2.y);
*/
var textInput= document.getElementById("get");
var tree=new Tree();


	tree.add(600,90,200);
	/*tree.add(700,500,7);
	//tree.add(700,500,8);
	tree.add(700,500,2);
	tree.add(700,100,2);
	tree.add(800,500,11);
	tree.add(100,500,11);
	tree.add(700,500,10);
	tree.add(700,100,10);
	tree.add(700,100,10);
	tree.add(700,100,3);
	tree.add(700,100,1);
      tree.add(700,100,1);
      tree.add(700,100,0.5);*/


	
	



//tree.add(700,600,1)
function Frame(){
	speed=10;
text.clearRect(0,0,window.innerWidth,window.innerHeight);
//text.font = "15px Arial";
//text.fillText("1",600-5,200+5);
	//console.log("Root"+Root.x+"::"+(Root.y)+" ChildNode"+x.x+"::"+x.y+"   Line"+Root.one.Sx+"::"+Root.one.Sy);

tree.update();
//tree.update2();


	requestAnimationFrame(Frame);

}
function Run(){
//alert(textInput.value);
//tree.add(2000,500,Zero(500,0));
	tree.add(2000,500,parseInt(textInput.value));
Frame();
}



function Zero(max,min){
	return Math.floor(Math.random() * 500);
}





