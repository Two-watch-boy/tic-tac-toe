// wait for the DOM to finish loading
console.log("this is a sanity check");

$(".btn").on("mousedown",function(){
  for (var i=0; i<10; i++){
    if (i%2===0){
      $(this).text("X");
    }else if (i%2===1){
      $(this).text("O");
    }
      console.log(i);
}
});
