$("#surl").on("blur", function () {
    makeCode();
    var aa = $('#surl').val();
    var bb = $('#name').val();
    if (aa != '' && bb !='' ) {
        $('#button').removeClass('hide')
    }
    else if(aa == '' || bb =='') {
        $('#button').addClass('hide')
    }

}).on("keydown", function (e) {
    if (e.keyCode == 13) {
        makeCode();
    }
});

$("#name").on("blur", function () {
    var aa = $('#surl').val();
    var bb = $('#name').val();
    if (aa != '' && bb !='' ) {
        $('#button').removeClass('hide')
    }
    else if(aa == '' || bb =='') {
        $('#button').addClass('hide')
    }

});



$(function () {
    setTimeout(function () {
        var biz = $('#qrcode img').attr('src');
    }, 2000);
});



$("#button").bind("click",pdfdownload);
