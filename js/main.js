//chile water scarcity
$("#btn1").click(function(event){
  $("#b1_tec").css("fill","#FFFFFF");
  $("#b1_text").css("fill","#04151F");
  $("#b2_text").css('fill','#FFFFFF');
  $("#b2_tec").css('fill','none');
  $("#b2_tec").css('stroke','#FFFFFF');
  $("#b3_text").css('fill','#FFFFFF');
  $("#b3_tec").css('fill','none');
  $("#b3_tec").css('stroke','#FFFFFF');
  if($('#pic2').css("display") == 'none'&& $('#pic3').css("display") == 'none'){
    $("#pic1").show();
  }
  else{
    $("#pic2").hide();
    $("#pic3").hide();
    $("#pic1").show();
  }
})
$("#btn2").click(function(event){
  $("#b2_tec").css("fill","#FFFFFF");
  $("#b2_text").css("fill","#04151F");
  $("#b1_text").css('fill','#FFFFFF');
  $("#b1_tec").css('fill','none');
  $("#b1_tec").css('stroke','#FFFFFF');
  $("#b3_text").css('fill','#FFFFFF');
  $("#b3_tec").css('fill','none');
  $("#b3_tec").css('stroke','#FFFFFF');
  if($('#pic1').css("display") == 'none'&& $('#pic3').css("display") == 'none'){
    $("#pic2").show();
  }
  else{
    $("#pic1").hide();
    $("#pic3").hide();
    $("#pic2").show();
  }
})
$("#btn3").click(function(event){
  $("#b3_tec").css("fill","#FFFFFF");
  $("#b3_text").css("fill","#04151F");
  $("#b2_text").css('fill','#FFFFFF');
  $("#b2_tec").css('fill','none');
  $("#b2_tec").css('stroke','#FFFFFF');
  $("#b1_text").css('fill','#FFFFFF');
  $("#b1_tec").css('fill','none');
  $("#b1_tec").css('stroke','#FFFFFF');
  if($('#pic2').css("display") == 'none'&& $('#pic1').css("display") == 'none'){
    $("#pic3").show();
  }
  else{
    $("#pic2").hide();
    $("#pic1").hide();
    $("#pic3").show();
  }
})

//production growth1

$('.btn_pg1').mouseenter(function(event){
  $('.btn_pg1').addClass('faded');
  $(this).removeClass('faded');
})

$('.btn_pg1').mouseleave(function(event){
  $('.btn_pg1').removeClass('faded');
})
