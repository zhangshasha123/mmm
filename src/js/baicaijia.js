$(function() {
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/getbaicaijiatitle',
        success: function(info) {
            console.log(info)
            $('.tab').html(template('tpl', info))
        }
    })


    function render() {
        $.ajax({
            url: 'http://localhost:3000/api/getbaicaijiaproduct',
            type: 'get',
            data: {
                titleid: 0,
            },
            success: function(info) {
                console.log(info)
                $('.products').html(template('tpl2', info))
            }
        })
    }
    render()
    $('.tab').on('click', '.mask', function() {
        let id = $(this).data('id')
        console.log(id)
        $.ajax({
            url: 'http://localhost:3000/api/getbaicaijiaproduct',
            type: 'get',
            data: {
                titleid: id,
            },
            success: function(info) {
                console.log(info)
                $('.products').html(template('tpl2', info))
            }
        })

    })


})