$(document).ready(function() {
  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});


$(function(){
  $.scrollIt({
    topOffset:-120,
    scrollTime:400})
})


$(window).resize(function() {
}), $("a.show").click(function() {
    return $(this).hide(), 
    $("#menu-wrap").show(), 
    $("a.hide").show(), 
    mh = $(".menu-items").height(), 
    $(".menu-items").css("margin-top", -(mh / 2) + "px"), !1
}), $("a.hide").click(function() {
    return $(this).hide(), $("#menu-wrap").fadeOut(), $("a.show").fadeIn(), !1
}), $(".menu-items li a").click(function() {
    $("a.hide").click()
});


