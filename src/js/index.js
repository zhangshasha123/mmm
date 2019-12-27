$(function() {

    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/getindexmenu',
        success: function(info) {
            // console.log(info)
            $('.mm-list').html(template('tpl', info))
            $('.mm-list li:nth-child(8)').addClass('more')

        }
    })

    $('.mm-list').on('click', '.more', function() {
        // console.log(111)
        // $(this).nextAll().toggleClass('active')
        // $(this).nextAll().fadeToggle()
        $(this).nextAll().slideToggle()
    })


    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/getmoneyctrl',
        success: function(info) {
            // console.log(info)
            $('.pro-list').html(template('tpl2', info))
        }
    })
})