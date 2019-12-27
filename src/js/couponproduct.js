$(function() {

    let id = location.search.split('=')[1]
    console.log(id)
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/getcouponproduct',
        data: {
            couponid: id,
        },
        success: function(info) {
            console.log(info)
            $(".content").html(template('tpl', info))
        }
    })
})