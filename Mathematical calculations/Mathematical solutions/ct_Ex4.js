function makered(){

  document.getElementById("butn").style.color = 'red'
}

function normal(){

  document.getElementById("butn").style.color = 'black'
}

// for Ex2 to Ex6, change the Name of the following function properly

function equation() {

  //precondition: a, b, c belongs to real numbers
  //postcondition: whether the equation has 2, 1, or 0 roots in ℝ is outputted

  
  var a=document.getElementById("number1").value;
  var b=document.getElementById("number2").value;
  var c=document.getElementById("num3").value;

  a = parseFloat(a);
  b = parseFloat(b);
  c = parseFloat(c);
  
  /* in Ex2 to Ex6, you need to replace the following line 
      with some other formulas */

    let discriminant = b * b - 4 * a * c;

  if (discriminant > 0) { 

    document.getElementById("output").innerHTML= "it has 2 distinct roots";

  }
  else if (discriminant == 0) {
    zero = -b / (2 * a);
  document.getElementById("output").innerHTML="its roots are identical";
 }
 else {
   document.getElementById("output").innerHTML="it has no roots in real numbers";
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