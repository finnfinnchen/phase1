// the use of resource
$("#soil_btn").click(function(event){
  $("#s_text").css("fill","#FFFFFF");
  $("#s_rec").css("fill","#000000");
  $("#w_text").css('fill','#000000');
  $("#water_btn").css('fill','none','stroke','#3C3C3B');
  if($('#water_consumption').css("display") == 'none'){
    $("#soil_consumption").show();
  }
  else{
    $("#water_consumption").hide();
    $("#soil_consumption").show();
  }
$("#water_btn").click(function(event){
  $("#w_text").css("fill","#FFFFFF");
  $("#w_rec").css("fill","#000000");
  $("#s_text").css('fill','#000000');
  $("#soil_btn").css('fill','none','stroke','#3C3C3B');
  if($('#soil_consumption').css("display") == 'none'){
    $("#water_consumption").show();
  }
  else{
    $("#soil_consumption").hide();
    $("#water_consumption").show();
  }

// land and water comparison
$("#btn1").click(function (event) {
  $("#btext1").css("fill", "#FFFFFF");
  $("#bottn1").css("fill", "#000000");
  $("#btext2").css('fill', '#000000');
  $("#bottn2").css('fill','none','stroke','#3C3C3B');
  if($('#water').css("display") == 'none'){
    $("#land").show();
  }
  else{
    $("#water").hide();
    $("#land").show();
  }
})

$("#btn2").click(function (event) {
  $("#btext2").css("fill", "#FFFFFF");
  $("#bottn2").css("fill", "#000000");
  $("#btext1").css('fill', '#000000');
  $("#bottn1").css('fill','none','stroke','#3C3C3B');
  if($('#land').css("display") == 'none'){
    $("#water").show();
  }
  else{
    $("#land").hide();
    $("#water").show();
  }
}) 