<<<<<<< HEAD
=======
// land and water use
$("#btn1").click(function(event){
  $("#btext1").css("fill","#FFFFFF");
  $("#btn1").css("fill","#000000");
  $("#btext2").css('fill','#000000');
  $("#btn2").css('fill','none','stroke','#3C3C3B');
  if($('#water').css("display") == 'none'){
    $("#soil").show();
  }
  else{
    $("#water").hide();
    $("#soil").show();
  }
})
>>>>>>> parent of ee74037... Revert "Merge branch 'master' into ubin"
