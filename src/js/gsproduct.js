$(function() {

    let id, areaid
    $('.shop').on('click', function() {
        $('.active1').removeClass('hidden').siblings().addClass('hidden')
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getgsshop',
            success: function(info) {
                console.log(info)
                $('.active1').html(template('tpl', info))

            }
        })
        $('.active1').on('click', '.one', function() {

            id = $(this).data('id')
            console.log(id)
            let content = $(this).text()
            console.log(content)
            $('.shop').text(content)
            render()
            $('.active1').addClass('hidden')
        })
    })


    $('.area').on('click', function() {
        $('.active2').removeClass('hidden').siblings().addClass('hidden')
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getgsshoparea',
            success: function(info) {
                console.log(info)
                $('.active2').html(template('tpl2', info))

            },

        })
        $('.active2').on('click', '.one', function() {
            areaid = $(this).data('id')
            console.log(areaid)
            let content2 = $(this).text()
            console.log(content2)
            $('.area').text(content2)
            render()
            $('.active2').addClass('hidden')
        })

    })


    render()

    function render() {
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getgsproduct',
            data: {
                shopid: id,
                areaid: areaid,
            },
            success: function(info) {
                console.log(info)
                $('.ids-total').html(template('tpl3', info))
            }
        })

    }
})