// land and water use
$("#btn1").click(function(event){
  $("#btext1").css("fill","#FFFFFF");
  $("#bottn1").css("fill","#FFFFFF");
  $("#btext2").css('fill','#000000');
  $("#bottn2").css('fill','none','stroke','#3C3C3B');
  if($('#water').css("display") == 'none'){
    $("#soil").show();
  }
  else{
    $("#water").hide();
    $("#soil").show();
  }
})

// water footprint
$("#bnt4").mouseenter(function(event){
  $("#grey").show();  
    $("#bnt4").mouseleave(function(event){
  $("#grey").hide();  
    
})