$(document).ready(function () {
    var test = window.location.href;

    var skuId = test.split("?", 2)

    $("#bcTarget3").barcode(skuId[1], "code128", {
        output: 'css',       //渲染方式 css/bmp/svg/canvas
        barWidth: 2,        //单条条码宽度
        barHeight: 40,     //单体条码高度
        showHRI: true,    //是否在条码下方显示内容
        addQuietZone: false  //是否添加空白区（内边距）
    });

});