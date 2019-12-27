$(function() {
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/getinlanddiscount',
        success: function(info) {
            console.log(info)
            $('.ids-total').html(template('tpl', info))
        }
    })
})