$(function() {
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/getcoupon',
        success: function(info) {
            console.log(info)
            $('.count').html(template('tpl', info))
        }
    })
})