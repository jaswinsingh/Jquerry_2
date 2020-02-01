  $(document).ready(function(){

  $("#bttn1").click(function(){
    $("#box1").css("height","300px");  //Q1. set Height to 300px
  });

  $("#bttn2").click(function(){
    $("#box2").css({"margin-left":"400px","transition":"5s"}); //Q2. set div to left with transition
  });

  $("#bttn3").click(function(){
    $("#box3 p:eq(1)").css({"width":"max-content"});//Q4  Wrap second paragraph
  });

  $("#bttn4").click(function(){
    $("#bttn4").attr("disabled", true); //Q5. button click change input field value and disable the button
      $("#test3").val("hello");
  });

  $("#bttn5").click(function(){
    $("#box5 p:not(.intro)").css({"background-color":"transparent"});//Q5 remove background color from p tage which one don't have any class
  });

  $("#bttn6").click(function(){
    $("#list1 li").filter(':nth-child(4), :nth-child(5), :nth-child(6)').css({"background-color":"orange"});//Q6  add background color inside 4, 5 and 6
  });

  $("#bttn7").click(function(){
    $("#list2 li:not(:nth-child(1)").css({"border-color":"red"});//Q7. except 1 add border color to all element
  });

  $("#bttn9").click(function(){     //Q8. click on tab button content section need to be change
    $("#fr").css({"display":"none"});
    $("#sr").css({"display":"block"});
  });
  $("#bttn8").click(function(){
    $("#fr").css({"display":"block"});
    $("#sr").css({"display":"none"});
  });

  $("#bttn10").click(function(){       //Q9.  button click back to top with smooth scroll
    $("html").animate({ scrollTop: 0 }, 4000);
  });

  mybutton = document.getElementById("box4"); //Q3.  display fixed and relative
    // alert("hello");
  window.onscroll = function() {scrollFunction(); };
  function scrollFunction() {
    // alert(document.documentElement.scrollTop );
    if (document.documentElement.scrollTop >= 700 && document.documentElement.scrollTop  <= 900 ){
      // alert("700 $$ 900");
      mybutton.style.position = "fixed";
      mybutton.style.top = 0;
      mybutton.style.width = "100%";

    } else if(document.documentElement.scrollTop  > 900 || document.documentElement.scrollTop  < 700) {
      mybutton.style.position = "relative";
      // alert("900");
    }
  }

});
