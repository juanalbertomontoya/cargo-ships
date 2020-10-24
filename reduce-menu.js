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
    $("#logo-menu").attr("src","img/logo.png")
  } else {
    $(".menu-principal").removeClass("scroll");
    $(".botones-menu").removeClass("scroll");
    $(".menu-principal a").removeClass("scroll");
    $(".botones-menu > ul > li.active").removeClass("scroll");
    $(".boton-info").removeClass("scroll");
    $(".boton-lang").removeClass("scroll");
    $(".menu-contacto").removeClass("scroll");
    $("#logo-menu").attr("src","img/logo-white.png")
  }
});
