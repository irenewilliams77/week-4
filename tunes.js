function print() {
    var input = 
    document.getElementById("userInput").value;
    document.getElementById("output").innerHTML  = input;
  }
 // function print (){
  //  var print = document.getElementById("userInput").value;
  //     if (print === null || print === ""){
  //     prompt("Please request song");
  //     }else{
 //          prompt("Thank you!")
 //      }
 //  }
   var userInput = document.getElementById("userInput").value;
   songRequest = document.getElementById("output").innerHTML;
   button = document.getElementById(submit);

   button.onclick = function(){
       enterSong(userInput);
   }
   var newSong = function(userSong){
       var output = ("userInput");
       return songRequest.innerHTML = output;
   }
  // function print(){
   // var print = document.getElementById("submit");
    //userInput = input.value;
    //document.getElementById("output").innerHTML = input;
//}
//var requestSong = window.prompt ("Please request a song");
//Responds();

//function Responds() {
   // document.write("Thank you for requesting the song" + " " + requestSong);
//}



