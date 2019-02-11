// land and water use
$("#btn1").click(function(event){
  $("#btext1").css("fill","#FFFFFF");
  $("#bottn1").css("fill","#000000");
  $("#btext2").css('fill','#000000');
  $("#bottn2").css('fill','none','stroke','#3C3C3B');
  if($('#water').css("display") == 'none'){
    $("#land").show();
  }
  else{
    $("#water").hide();
    $("#land").show();
  }
})

$("#btn2").click(function(event){
  $("#btext2").css("fill","#FFFFFF");
  $("#bottn2").css("fill","#000000");
  $("#btext1").css('fill','#000000');
  $("#bottn1").css('fill','none','stroke','#3C3C3B');
  if($('#land').css("display") == 'none'){
    $("#water").show();
  }
  else{
    $("#land").hide();
    $("#water").show();
  }
})