
var  element= document.getElementById("input");
 document.querySelector(".numbers").addEventListener("click", foo);
  function foo(event){
       element.value+=event.target.innerHTML;
  }

  document.querySelector(".operations").addEventListener("click", myfunction);
  function myfunction(event){
       element.value+=event.target.innerHTML;
  }

  document.querySelector("#ans").addEventListener("click", cal);
   function cal(event){
    element.value=eval(element.value);
   }
   document.querySelector("#clr").addEventListener("click",clear);
   function clear(){
       element.value=' ';
   }