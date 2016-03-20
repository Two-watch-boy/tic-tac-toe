// wait for the DOM to finish loading
console.log("this is a sanity check2");

// the global move number
window.onload= function(){
  var i = 0;
  $(".btn").on("mousedown",function(event){
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
    }else{
      alert("Space Taken");
    }
  });
};//end window onload
console.log("end of sanity check2");
