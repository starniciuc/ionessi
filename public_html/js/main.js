$(".slider").bxSlider({
    controls: false,
    auto: true,
    mode: "fade",
    pause: 10000
});
$(".slider-product").bxSlider({
    pager: false,
    auto: true,
    pause: 7500
});
$("#upload").change(function () {
    var fullPath = document.getElementById('upload').value;
    if (fullPath) {
        var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        var filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        $("#nameFile").html("Загружено " + filename);
    }
});

$(".btn-increment").click(function(){
    $valueElement = $(this).parents(".count-produs").find("input");
    
    if($(this).hasClass("left")){
        $v = (parseInt($valueElement.val()) - 1)>0 ? (parseInt($valueElement.val()) - 1) : 1;
        $valueElement.val($v);         
    }
    
    if($(this).hasClass("right")){
        $v = (parseInt($valueElement.val()) + 1)>0 ? (parseInt($valueElement.val()) + 1) : 1;
        $valueElement.val($v);         
    }
    
});

$("#editComapany").change(function(){
    if($(this).prop( "checked" )){
        $("#editComp").slideDown("slow");
    }
    if(!$(this).prop( "checked" )){
        $("#editComp").slideUp("slow");
    }
});

$(".setColor").click(function(){
    $(this).toggleClass("selected");
});

$(".setSize").click(function(){
    $(this).toggleClass("selected");
});
$(".goToTop").click(function(){
    $('html, body').animate({scrollTop: 0}, 1000);
});

$(".table-mode").click(function(){
    $(".grid-mode").removeClass("selected");
    $(this).addClass("selected");
    $(".view-produs").addClass("table-mode-view");
    $(".view-produs").removeClass("grid-mode-view");
});

$(".grid-mode").click(function(){
    $(".table-mode").removeClass("selected");
    $(this).addClass("selected");
    $(".view-produs").removeClass("table-mode-view");
    $(".view-produs").addClass("grid-mode-view");
});