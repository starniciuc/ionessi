
$(".slider").bxSlider({
    controls: false,
    auto: true,
    mode: "fade",
    pause: 10000,
    adaptiveHeight: true
});


$(".slider-product").bxSlider({
    pager: false,
    auto: true,
    pause: 7500,
		adaptiveHeight: true
});

$(".thumbr ul").bxSlider({
    pager: false,
    auto: false,
    slideWidth: 110,
    minSlides: 2,
    maxSlides: 3,
    slideMargin: 10,
    adaptiveHeight: true
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
$('html').click(function () {
    $(".produs-block").removeClass("active");
    $(".open-cart").removeClass("active");
    $(".grid-mode-view").addClass("enabled");
    $(".zanaves").hide();
    
    if ($(".view-produs").hasClass("table-mode-view")) {
        $(".get-size-block").slideUp("slow");
    }
});

$('#content_inner').on('click', '.btn-increment', function () {
    $valueElement = $(this).parents(".count-produs").find("input");

    if ($(this).hasClass("left")) {
        $v = (parseInt($valueElement.val()) - 1) > 0 ? (parseInt($valueElement.val()) - 1) : 1;
        $valueElement.val($v);
    }

    if ($(this).hasClass("right")) {
        $v = (parseInt($valueElement.val()) + 1) > 0 ? (parseInt($valueElement.val()) + 1) : 1;
        $valueElement.val($v);
    }

});

$("#editComapany").change(function () {
    if ($(this).prop("checked")) {
        $("#editComp").slideDown("slow");
    }
    if (!$(this).prop("checked")) {
        $("#editComp").slideUp("slow");
    }
});

$(".setColor").click(function () {
    $(this).toggleClass("selected");
		$(this).next().prop("checked", $(this).hasClass("selected"));
});

$(".setSize").click(function () {
    $(this).toggleClass("selected");
		$(this).next().prop("checked", $(this).hasClass("selected"));
});
$(".goToTop").click(function () {
    $('html, body').animate({scrollTop: 0}, 1000);
});

$(".table-mode").click(function () {
    $(".grid-mode").removeClass("selected");
    $(this).addClass("selected");
    if ($(".view-produs").hasClass("grid-mode-view")) {
        $(".produs-block").removeClass("active");
        $(".zanaves").hide();
    }
    $(".view-produs").addClass("table-mode-view");
    $(".view-produs").removeClass("grid-mode-view");
		document.cookie = 'catalogue_display=table';
});

$(".grid-mode").click(function () {
    $(".table-mode").removeClass("selected");
    $(this).addClass("selected");
    if ($(".view-produs").hasClass("table-mode-view")) {
        $(".get-size-block").hide();
        $(".open-cart").removeClass("active");
    }
    $(".view-produs").removeClass("table-mode-view");
    $(".view-produs").addClass("grid-mode-view");
		document.cookie = 'catalogue_display=grid';
});
$(".produs-block").click(function (event) {
    event.stopPropagation();
});

$(".get-size-block").click(function (event) {
    event.stopPropagation();
});

$(".open-cart").click(function (event) {
    event.stopPropagation();

    $(".open-cart").removeClass("active");
    $(".grid-mode-view").removeClass("enabled");
    $(".zanaves").hide();
    
    if ($(".view-produs").hasClass("table-mode-view")) {
        var $par = $(this).parents(".produs-block");
        var $elm = $par.find(".get-size-block");
        $(this).addClass("active");
        $elm.slideToggle("slow");
    }
    ;

    if ($(".view-produs").hasClass("grid-mode-view")) {
        var $par = $(this).parents(".produs-block");
        $(".produs-block").removeClass("active");
        $(this).toggleClass("active");
        $par.addClass("active");
        $(".grid-mode-view").removeClass("enabled");
        $(".zanaves").show();
        
        $(".produs-block").each(function (i, value) {
            var coef = 3;
            if ($(window).width() > 550) {
                if ($(window).width() <= 992) {
                    coef = 2;
                }
                if (((i + 1) % coef === 0) || (i === 0)) {
                    var $par_b = $(value);
                    $par_b.addClass("left-elm");
                }
            }
        });
    }
});

$(".close-grid-product").click(function () {
    if ($(".view-produs").hasClass("grid-mode-view")) {
        var $par = $(this).parents(".produs-block");
        $par.removeClass("active");
        $(".open-cart").removeClass("active");
        $(".grid-mode-view").addClass("enabled");
        $(".zanaves").hide();
    }
});

$(".produs").click(function () {
    if ($(".view-produs").hasClass("grid-mode-view") && $(window).width() < 551) {
        var $par = $(this).parents(".produs-block");
        $(".produs-block").removeClass("active");
        $(this).toggleClass("active");
        $par.addClass("active");
        
    }
});
$(".modal").draggable({
    handle: ".modal-body"
});

$(".open-collapse").click(function () {
    var $this = $(this);
    var $par = $this.parents(".order-list");
    var $elm = $par.find(".collapse");
    $elm.collapse("toggle");
});

$(".filter-btn").click(function () {
    $(this).toggleClass("clicked");
    if ($(this).hasClass("clicked")) {
        $(this).html("Закрыть фильтр <i class='fa fa-bars'></i>");
    } else {
        $(this).html("Открыть фильтр <i class='fa fa-bars'></i>");
    }
});

$(".ck-pers").change(function () {
    if ($(this).val() == 1) {
        $(".jurid-block").slideDown();
    } else {
        $(".jurid-block").slideUp();
    }
})

function addZoom() {
    $("#image-view").toggleClass("my-foto-zoom");
    $(".showZoom").toggleClass("hideZoom");
    if ($("#image-view").hasClass("my-foto-zoom")) {
        $(".my-foto-zoom").imagezoomsl({
            //rightoffset: 100,
            zoomrange: [2.12, 12],
            magnifiersize: [500, 470],
            scrollspeedanimate: 10,
            loopspeedanimate: 5,
            magnifiereffectanimate: "slideIn"
        });
    } else {
        $(".magnifier").remove();
        $(".cursorshade").remove();
        $(".statusdiv").remove();
        $(".tracker").remove();
    }

}

$(".sub-menu-list > a").click(function(event){
    event.stopPropagation();
});