$(function() {
    let id = location.search.split('=')[1]
    console.log(id)
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/getmoneyctrlproduct',
        data: {
            productid: id,
        },
        success: function(info) {
            let arr = []
            info.result.productCity.forEach(item => {
                return arr.push(item.split('有货')[0])
            })
            info.result.productCity1 = arr
                // console.log(content)
                // info.result.productCity[0] = content
            console.log(info)
            $(".add").html(template('tpl', info))
        }
    })



})