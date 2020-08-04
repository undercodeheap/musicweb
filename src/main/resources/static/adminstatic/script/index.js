/**
 * 主页js
 * @type {{init: {pageInit: index.init.pageInit}, event: {}}}
 */
var index = {
    init:{
        pageInit:function () {
            var ifm = document.getElementById("bframe");
            //ifm.height = document.documentElement.clientHeight-50;
            ifm.height = $("#iframe-div").height();
            $("#bframe").attr("src",getRootPath()+"/musicAdmin");
        }
    },
    event:{
        // 退出方法
        exit:function () {
            window.location.href = "/admin/login";
        },
        switchMenu:function (index,id) {
            //点击切换菜单的方法
            if (isNotNull(index)) {
                // 取消当前的active选择属性
                $(".active").removeClass("active");
                // 加上点击这个的选中属性
                $("#"+id).addClass("active");
                var frame = $("#bframe");
                switch (index) {
                    case 2:
                        frame.attr("src",getRootPath()+"/musicAdmin");
                        break;
                    case 3:
                        frame.attr("src",getRootPath()+"/musicDelete");
                        break;
                    case 4:
                        frame.attr("src",getRootPath()+"/commentDelete");
                        break;
                    case 5:
                        frame.attr("src",getRootPath()+"/tagControl");
                        break;
                    case 6:
                        frame.attr("src",getRootPath()+"/userLoginlog")
                        break;
                    case 7:
                        frame.attr("src",getRootPath()+"/userMusiccol")
                        break;
                }
            }
        }
    }
}