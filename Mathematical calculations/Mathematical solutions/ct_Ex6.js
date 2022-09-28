function makered(){

  document.getElementById("butn").style.color = 'red'
}

function normal(){

  document.getElementById("butn").style.color = 'black'
}

// for Ex2 to Ex6, change the Name of the following function properly

function mappingA() {

  //precondition: 0≤ a ≤100 --> ℝ      
  //postcondition: mapping to a to one of A+, A, B+, B, C+, C, D+, D, E, or F is outputted

  
  var a=document.getElementById("number1").value;
  //var b=document.getElementById("number2").value;
  //var c=document.getElementById("num3").value;

  a = parseFloat(a);
  //b = parseFloat(b);
  //c = parseFloat(c);
  
  /* in Ex2 to Ex6, you need to replace the following line 
      with some other formulas */


      if(a>=90){
        document.getElementById("output").innerHTML= "A+";
      }
      else if(a>=80){
        document.getElementById("output").innerHTML= "A";
      }
      else if(a>=75){
        document.getElementById("output").innerHTML= "B+";
      }
      else if(a>=70){
        document.getElementById("output").innerHTML= "B";
      }
      else if(a>=65){
        document.getElementById("output").innerHTML= "C+";
      }
      else if(a>=60){
        document.getElementById("output").innerHTML= "C";
      }
      else if(a>=55){
        document.getElementById("output").innerHTML= "D+";
      }
      else if(a>=50){
        document.getElementById("output").innerHTML= "D"
      }
      else{
        document.getElementById("output").innerHTML= "F";
      }
    }
    
    
  /* in Ex2 to Ex6A, you need to rename "perimeter" to make it appropriate
     for those problems, you may also need to rename p to a better 
	 variable that you might have in your formulas above */ 

  /*in Ex6A mappingA() do sth like
  var a = ...;
  if(a >= 90)
    answer = "A+";
  else if (a>=80)
    answer = "A";
  else if ....
  */



  

 
function mappingB(){

//Pre: 0≤ a ≤100  ℝ      
//Post: mapping to a to one of A+, A, B+, B, C+, C, D+, D, E, or F is outputted

var a=document.getElementById("number1").value;

a = parseFloat(a);


  switch (true){
	case (a>=90): 
  document.getElementById("output2").innerHTML="A+";
		break;
	case (a>=80): 
  document.getElementById("output2").innerHTML="A";
		break;
    case (a>=75): 
		document.getElementById("output2").innerHTML="B+";
		break;
    case (a>=70): 
		document.getElementById("output2").innerHTML="B";
		break;
    case (a>=65): 
		document.getElementById("output2").innerHTML="C+";
		break;
    case (a>=60): 
		document.getElementById("output2").innerHTML="C";
		break;
    case (a>=55): 
		document.getElementById("output2").innerHTML="D+";
		break;
    case (a>=50): 
		document.getElementById("output2").innerHTML="D";
		break;
    case (a<50):
    document.getElementById("output2").innerHTML="F";
		
	default:
		answer="F";
  }
}
