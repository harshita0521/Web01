$(document).ready(function(){

// HEADER

$("#head").mouseover(function(){

$(this).addClass("animate__animated animate__headShake");

});

$("#head").mouseout(function(){

$(this).removeClass("animate__animated animate__headShake");

});

// GUITAR

$("#guitarHead").mouseover(function(){

$(this).addClass("headingEffect animate__animated animate__heartBeat");

});

$("#guitarHead").mouseout(function(){

$(this).removeClass("headingEffect animate__animated animate__heartBeat");

});

$("#guitarImg").click(function(){

$(this).toggleClass("imageEffect animate__animated animate__pulse");

});

$("#guitarText").mouseover(function(){

$(this).addClass("textEffect");

});

$("#guitarText").mouseout(function(){

$(this).removeClass("textEffect");

});

// TABLA

$("#tablaHead").mouseover(function(){

$(this).addClass("headingEffect animate__animated animate__heartBeat");

});

$("#tablaHead").mouseout(function(){

$(this).removeClass("headingEffect animate__animated animate__heartBeat");

});

$("#tablaImg").click(function(){

$(this).toggleClass("imageEffect animate__animated animate__pulse");

});

$("#tablaText").mouseover(function(){

$(this).addClass("textEffect");

});

$("#tablaText").mouseout(function(){

$(this).removeClass("textEffect");

});

// HARMONICA

$("#harmonicaHead").mouseover(function(){

$(this).addClass("headingEffect animate__animated animate__heartBeat");

});

$("#harmonicaHead").mouseout(function(){

$(this).removeClass("headingEffect animate__animated animate__heartBeat");

});

$("#harmonicaImg").click(function(){

$(this).toggleClass("imageEffect animate__animated animate__pulse");

});

$("#harmonicaText").mouseover(function(){

$(this).addClass("textEffect");

});

$("#harmonicaText").mouseout(function(){

$(this).removeClass("textEffect");

});

// SITAR

$("#sitarHead").mouseover(function(){

$(this).addClass("headingEffect animate__animated animate__heartBeat");

});

$("#sitarHead").mouseout(function(){

$(this).removeClass("headingEffect animate__animated animate__heartBeat");

});

$("#sitarImg").click(function(){

$(this).toggleClass("imageEffect animate__animated animate__pulse");

});

$("#sitarText").mouseover(function(){

$(this).addClass("textEffect");

});

$("#sitarText").mouseout(function(){

$(this).removeClass("textEffect");

});

});