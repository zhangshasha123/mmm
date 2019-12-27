$(function() {
    //   根据分类的id获取分类的名称
    // categoryid 
    let content = decodeURI(location.search)
    let id = content.split('=')[1]
        // console.log(id)



    function render() {
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getcategorybyid',
            data: {
                categoryid: id
            },
            success: function(info) {
                console.log(info)
            }
        })
    }
    render()
    render2()
    let pageid = 1
    let page

    function render2(pageid) {
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getproductlist',
            data: {
                categoryid: id,
                pageid: pageid,
            },
            success: function(info) {
                console.log(info)
                $("#select").empty()
                page = Math.ceil(info.result.count / 10)
                console.log(page)
                for (var i = 0; i < page; i++) {
                    // $('#select').append($('<option data-id="' + i + '" value="">第' + i + '页</option>'))
                    $("#select").append("$('<option data-id='" + (i + 1) + "' value='" + (i + 1) + "'>第" + (i + 1) + "页</option>')")
                    $("#select option").each(function() {
                        var txt = $(this).data("id")
                        if (pageid == txt) {
                            $(this).prop("selected", true)
                        }
                    })
                }
                $('.pro-introduce').html(template('tpl', info))
            }
        })
    }
    var option
    var value

    function render() {
        $("#form").on("change", "#select", function() {
            option = $("#select option:selected") //获取选中的选项
            value = option.val()
            render2(value)
        })
    }
    render()

    $(".up").click(function() {
        value = value || 1
        value--
        if (value == 0) {
            value = 1
            return
        }
        render2(value)
    })

    $(".down").click(function() {
        value = value || 1
        value++
        if (value > page) {
            value = page
            return
        }
        render2(value)
    })

})