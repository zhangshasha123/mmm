$(function() {
    let id = decodeURI(location.search).split('=')[1]

    console.log(id)
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/getproduct?',
        data: {
            productid: id,
        },
        success: function(info) {
            console.log(info)
            $('.addbox').html(template('tpl', info))
        }
    })

    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/getproductcom',
        data: {
            productid: id,
        },
        success: function(info) {
            console.log(info)
            $('.talk').html(template('tpl2', info))
        }
    })
})