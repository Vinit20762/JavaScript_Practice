/* Q: Write code that
logs hi after 1 second
logs hello 3 seconds after step 1
logs hello there 5 seconds after step 2 */


//Callback hell program using anonymous funciton.
function Callback(){
  console.log("hi!");
}
setTimeout(function(){ 
 console.log("hi!");

 setTimeout(function(){
    console.log("Hello!");

  setTimeout(function(){
    console.log("Hello there");
  }, 5000);
 }, 3000);
}, 1000);  
