$("document").ready(function(){
  
  $("img").click(function(){
    $(this).fadeOut(300,function(){})
  })

  $("a").click(function(){
    $("img").fadeIn(300,function(){})
  })
})