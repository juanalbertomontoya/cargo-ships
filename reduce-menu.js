$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll > 30) {
    $(".menu-principal").addClass("scroll");
    $(".botones-menu").addClass("scroll");
    $(".menu-principal a").addClass("scroll");
    $(".botones-menu > ul > li.active").addClass("scroll");
    $(".boton-info").addClass("scroll");
    $(".boton-lang").addClass("scroll");
    $(".menu-contacto").addClass("scroll");
    $(".boton-menu-mobile > span").addClass("scroll");
    $(".menu-principal > div > div > div#boton-esp > a").addClass("scroll");
    $("#logo-menu").attr("src","img/logo.png")
  } else {
    $(".menu-principal").removeClass("scroll");
    $(".botones-menu").removeClass("scroll");
    $(".menu-principal a").removeClass("scroll");
    $(".botones-menu > ul > li.active").removeClass("scroll");
    $(".boton-info").removeClass("scroll");
    $(".boton-lang").removeClass("scroll");
    $(".menu-contacto").removeClass("scroll");
    $(".boton-menu-mobile > span").removeClass("scroll");
    $(".menu-principal > div > div > div#boton-esp > a").removeClass("scroll");
    $("#logo-menu").attr("src","img/logo-white.png");
  }
});

$("#boton-menu-mobile").on("click", function () {
  $(".botones-menu").toggleClass("on");
});
