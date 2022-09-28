function makered(){

  document.getElementById("butn").style.color = 'red'
}

function normal(){

  document.getElementById("butn").style.color = 'black'
}

// for Ex2 to Ex6, change the Name of the following function properly

function volumn() {

  //precondition: w, h, g belongs to real numbers
  //postcondition: volume f is calculated and outputted

  
  var w=document.getElementById("number1").value;
  var h=document.getElementById("number2").value;
  var g=document.getElementById("number3").value;

  w = parseInt(w);
  h = parseInt(h);
  g = parseInt(g);
  
  /* in Ex2 to Ex6, you need to replace the following line 
      with some other formulas */
  
  var f = 4/3*Math.PI*w*h*g;
  let p = f.toFixed();
 
    
  /* in Ex2 to Ex6A, you need to rename "perimeter" to make it appropriate
     for those problems, you may also need to rename p to a better 
	 variable that you might have in your formulas above */ 

  /* in Ex6A mappingA() do sth like
  var a = ...;
  if(a >= 90)
    answer = "A+";
  else if (a>=80)
    answer = "A";
  else if ....
  */

  document.getElementById("output").innerHTML="perimeter: "+p; 

}

/* in Ex6B for mappingB() , 
function mappingB(){

  uncomment and complete this block
  var a = ...
  switch (true){
	case (a>=90): 
		answer="A+";
		break;
	case (a>=80): 
		answer="A";
		break;
		// you need to add more cases for other letter grades
	default:
		answer="F";
  }
  
}*/