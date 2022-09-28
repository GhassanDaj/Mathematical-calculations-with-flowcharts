function makered(){

  document.getElementById("butn").style.color = 'red'
}

function normal(){

  document.getElementById("butn").style.color = 'black'
}

// for Ex2 to Ex6, change the Name of the following function properly

function divisibleby6() {

  //precondition: a belongs to real numbers
  //postcondition: solution of a  is outputted

  
  var a=document.getElementById("number1").value;
  //var b=document.getElementById("number2").value;
  //var c=document.getElementById("num3").value;

  a = parseFloat(a);
  //b = parseFloat(b);
  //c = parseFloat(c);
  
  /* in Ex2 to Ex6, you need to replace the following line 
      with some other formulas */


  if (a % 6 == 0) { 

    document.getElementById("output").innerHTML= "divisble by 6";
 }
 else {
   document.getElementById("output").innerHTML="not divisble by 6";
 } 

 if (a == 0){
   document.getElementById("output").innerHTML= "program ended"
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