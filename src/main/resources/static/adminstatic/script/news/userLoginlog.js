/**
 * 新闻列表js
 * @type {{init: {}, event: {}}}
 */
var userLoginlog = {
    init: {
        tableInit: function () {
            $("#search_table").bootstrapTable({
                url: getRootPath() + "/queryLoginlogList", // 获取表格数据的url
                cache: false, // 设置为 false 禁用 AJAX 数据缓存， 默认为true
                striped: true,  //表格显示条纹，默认为false
                pagination: true, // 在表格底部显示分页组件，默认false
                pageList: [10], // 设置页面可以显示的数据条数
                pageSize: 10, // 页面数据条数
                pageNumber: 1, // 首页页码
                sidePagination: 'server', // 设置为服务器端分页
                uniqueId: "id",          //每一行的唯一标识，一般为主键列
                queryParams: function (params) { // 请求服务器数据时发送的参数，可以在这里添加额外的查询参数，返回false则终止请求
                    return {
                        pageSize: params.limit, // 每页要显示的数据条数
                        pageNumber: params.offset,
                        /*                        sort: params.sort, // 要排序的字段
                                                sortOrder: params.order, // 排序规则*/
                        name: $('#name').val()
                    }
                },
                sortName: 'add_time', // 要排序的字段
                sortOrder: 'desc', // 排序规则
                columns: [
                    {
                        field: 'user.name', // 返回json数据中的name
                        title: '用户', // 表格表头显示文字
                        align: 'center', // 左右居中
                        valign: 'middle'// 上下居中
                    },
                    {
                        field: 'ip', // 返回json数据中的name
                        title: 'ip地址', // 表格表头显示文字
                        align: 'center', // 左右居中
                        valign: 'middle'// 上下居中
                    },
                    {
                        field: 'add_time', // 返回json数据中的name
                        title: '登陆时间', // 表格表头显示文字
                        align: 'center', // 左右居中
                        valign: 'middle'// 上下居中
                    }
                ],
                onLoadSuccess: function () {  //加载成功时执行
                },
                onLoadError: function () {  //加载失败时执行

                },
                onDblClickRow: function (row) {
                }
            });
        },
        initModal: function () {
            $('#picModal').on('show.bs.modal', function () {

            });
            $('#picModal').on('hidden.bs.modal', function () {
                self.location.reload();
            });

        },
    },
    event: {

        // checkMusic: function (musicId, musicaddr, mvaddr) {
        //     $('#picModal').modal('show');
        //     $("#showPic").show();
        //     $("#musicId").val(musicId);
        //     $("#audio")[0].src = "/static/users/music/songs/" + musicaddr;
        //     $("#video")[0].src = "/static/users/music/mvs/" + mvaddr;
        //
        // },
        deleteComment: function (id) {
            modals.confirm("确定要删除该音乐？", function () {
                $.ajax({
                    type: "post",
                    url: getRootPath() + "/deletecomment",
                    dataType: "json",
                    data: {id: id},
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        modals.error("请求错误,请联系管理员！");
                    },
                    success: function (data) {
                        if (data.state) {
                            modals.ok(data.message, function () {
                                self.location.reload();
                            });
                        } else {
                            modals.error(data.message);
                        }
                    }
                });
            });
        },
        searchNewsList: function () {
            $("#search_table").bootstrapTable("refresh");
        }
    }
}