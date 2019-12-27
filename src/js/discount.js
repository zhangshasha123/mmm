$(function() {
    let id = location.search.split('=')[1]
    console.log(id)
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/getdiscountproduct',
        data: {
            productid: id,
        },
        success: function(info) {
            console.log(info)
            $(".add").html(template('tpl', info))
        }
    })
})