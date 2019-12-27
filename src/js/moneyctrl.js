$(function() {
    let pageid = 1
    let page

    function render(pageid) {
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getmoneyctrl',
            data: {
                pageid: pageid,
            },
            success: function(info) {
                console.log(info)
                $("#select").empty()
                page = Math.ceil(info.count / 10)
                console.log(page)
                for (let i = 0; i < page; i++) {
                    $("#select").append("$('<option data-id='" + (i + 1) + "' value='" + (i + 1) + "'>第" + (i + 1) + "页</option>')")
                    $("select option").each(function() {
                        let id = $(this).data('id')
                        if (pageid == id) {
                            $(this).prop("selected", true)
                        }
                    })
                }
                $('.pro-list').html(template('tpl', info))
            }

        })
    }
    render()
    let content
    let value
    render2()

    function render2() {
        $("#form").on("change", "#select", function() {
            content = $("#select option:selected")
            console.log(content)
            value = content.val()
            render(value)
            console.log(value)
        })
    }

    $(".up").on('click', function() {
        value = value || 1
        value--
        if (value == 0) {
            value = 1
            return
        }
        render(value)
    })

    $('.down').on('click', function() {
        value = value || 1
        value++
        if (value > page) {
            value = page
            return
        }
        render(value)
    })

})