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