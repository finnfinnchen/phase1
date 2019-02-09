// land and water use 
$("#btn1").click(function(event){
  $("#btext1").css("fill","#808080");
  $("#btn1").css("fill","#808080");
  $("#btn2").css('fill','#000000');
 $("#btext2").css("fill",'#000000');
$("#btn2").css('fill','none','stroke','#3C3C3B');
  if($('#water').css("display") == 'none'){
    $("#soil").show();
  }
  else{
    $("#water").hide();
    $("#soil").show();
  }
})
