$(".design").click(function(){
    $(".design").hide()
    $(".services1").show()
})

$(".services1").click(function(){
    $(".services1").hide()
    $(".design").show()
})

$(".development").click(function(){
    $(".development").hide()
    $(".services2").show()
})

$(".services2").click(function(){
    $(".services2").hide()
    $(".development").show()
})

$(".product").click(function(){
    $(".product").hide()
    $(".services3").show()
})

$(".services3").click(function(){
    $(".services3").hide()
    $(".product").show()
})

// $("folio").click(function(){
//     $("folio1").alert("DELANI STUDIO");
//     $("folio1").fadeIn("DELANI STUDIO");
//     $("folio1").fadeIn("");
//   });

var folio = [0,1,2,3,4,5,6,7]
folio.forEach(function(ele,index){
    index=index+1
    $(".folio"+index).mouseover(function(){
        $(".folio"+index+" .folio").show()
        $(".folio"+index).addClass("darken")
    })
    $(".folio"+index).mouseout(function(){
        $(".folio"+index+" .folio").hide()
        $(".folio"+index).removeClass("darken")
    })  
    
})