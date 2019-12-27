$(window).resize(function() {
    let width = $(window).width()
    width = Math.max(width, 320)
    width = Math.min(width, 750)
        // 根据设计图375
    let fontsize = width / (375 / 50) //(7.5)
    $('html').css('fontSize', fontsize.toFixed(2) + 'px')
        // console.log(fontsize)
}).resize()