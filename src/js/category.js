$(function() {
    // 获取标题数据
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/getcategorytitle',
        success: function(info) {
            console.log(info)
            $('.lists').html(template('tpl', info))

        }
    })

    let id

    // render()
    function render() {
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getcategory',
            data: {
                titleid: id
            },
            success: function(info) {
                console.log(info)
                    // id="{{v.titleId}}" 就是#

                $('#' + id).html(template('tpl2', info))
            }
        })
    }

    $('.lists').on('click', '.title', function() {
        id = $(this).data('id')
        console.log(id)
            //   最后判断是否有hide类 有就不发送请求，没有再次发送请求
        $(this).siblings().toggleClass('hide').hasClass('hide') ? '' : render()

    })
})