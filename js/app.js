// wait for the DOM to finish loading
console.log("this is a sanity check2");

// the global move number
window.onload= function(){
  var i = 0;
  $(".game").on("mousedown",function(event){
    console.log("this is my event.target " + $(event.target).text());
    if ($(event.target).text() === " ") {
      if (i % 2 === 1){
          $(this).text("O");
          console.log("o");
      }else{
          $(this).text("X");
          console.log("x");
      }
      i++;
      console.log (i);
      if(i === 9){
        alert("Sad Panda, No More Spaces!");
      }
    }else{
      alert("Space Taken, Please Choose Another");
    }
  });//closes mousedown

  $(".reset").on("mousedown",function (){
    $(".game").text(" ");
    i = 0;
    console.log ("calling all x's and o's", i);
  });
};
//end window onload
console.log("end of sanity check2");
