function makered(){

  document.getElementById("butn").style.color = 'red'
}

function normal(){

  document.getElementById("butn").style.color = 'black'
}

// for Ex2 to Ex6, change the Name of the following function properly

function largestOf3() {

  //precondition: w, h, g belongs to real numbers
  //postcondition: Largest number of w, h AND g is outputted

  
  var w=document.getElementById("number1").value;
  var h=document.getElementById("number2").value;
  var g=document.getElementById("num3").value;

  w = parseFloat(w);
  h = parseFloat(h);
  g = parseFloat(g);
  
  /* in Ex2 to Ex6, you need to replace the following line 
      with some other formulas */
  
  if (w > h && w > g) {
    document.getElementById("output").innerHTML="largest: "+w;

  }
 else if (h > w && h > g) {
   document.getElementById("output").innerHTML="largest: "+h;
 }
 else {
   document.getElementById("output").innerHTML="largest: "+g;
 } 
    
}
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