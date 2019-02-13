// the use of resource
$("#soilbtn").click(function(event){
  $("#stext").css("fill","#FFFFFF");
  $("#srec").css("fill","#000000");
  $("#wtext").css('fill','#000000');
  $("#waterbtn").css('fill','none','stroke','#3C3C3B');
  if($('#water1').css("display") == 'none'){
    $("#soil1").show();
  }
  else{
    $("#water1").hide();
    $("#soil1").show();
  }
$("#waterbtn").click(function(event){
  $("#wtext").css("fill","#FFFFFF");
  $("#wrec").css("fill","#000000");
  $("#stext").css('fill','#000000');
  $("#soilbtn").css('fill','none','stroke','#3C3C3B');
  if($('#soil1').css("display") == 'none'){
    $("#water1").show();
  }
  else{
    $("#soil1").hide();
    $("#water1").show();
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
}); 
    
    
// trade flow
    $(document).ready(function() {

    $('.group-viz01').on('mouseenter', function(event){
      $('.group-viz01').addClass('faded');
      $(this).removeClass('faded');
    })

    $('.group-viz01').on('mouseleave', function(event){
      $('.group-viz01').removeClass('faded');
    });