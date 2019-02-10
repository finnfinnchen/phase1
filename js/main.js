//overview3

$("#btn_ontext").click(function(event){
  $('#pop_up').css('display','block')
  })
$("#xpopup").click(function(event){
    $('#pop_up').css('display','none')
  })
//resource 1
$("#btn_w").click(function(event){
  $("#btnwater_tec").css("fill","#FFFFFF");
  $("#btnwater_text").css("fill","#04151F");
  $("#btnsoil_text").css('fill','#FFFFFF');
  $("#btnsoil_tec").css('fill','none');
  $("#btnsoil_tec").css('stroke','#FFFFFF');
  if($('#pic_soil').css("display") == 'none'){
    $("#pic_water").show();
  }
  else{
    $("#pic_soil").hide();
    $("#pic_water").show();
  }
  })
  $("#btn_s").click(function(event){
    $("#btnsoil_tec").css("fill","#FFFFFF");
    $("#btnsoil_text").css("fill","#04151F");
    $("#btnwater_text").css('fill','#FFFFFF');
    $("#btnwater_tec").css('fill','none');
    $("#btnwater_tec").css('stroke','#FFFFFF');
    if($('#pic_water').css("display") == 'none'){
      $("#pic_soil").show();
    }
    else{
      $("#pic_water").hide();
      $("#pic_soil").show();
    }
    })
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
