/**
 * 新闻列表js
 * @type {{init: {}, event: {}}}
 */
var newsList = {
    init: {
        tableInit: function () {
            $("#search_table").bootstrapTable({
                url: getRootPath() + "/queryMusicList", // 获取表格数据的url
                cache: false, // 设置为 false 禁用 AJAX 数据缓存， 默认为true
                striped: true,  //表格显示条纹，默认为false
                pagination: true, // 在表格底部显示分页组件，默认false
                pageList: [10, 20], // 设置页面可以显示的数据条数
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
                sortName: 'createTime', // 要排序的字段
                sortOrder: 'desc', // 排序规则
                columns: [
                    {
                        checkbox: true, // 显示一个勾选框
                        align: 'center' // 居中显示
                    }, {
                        field: 'name', // 返回json数据中的name
                        title: '音乐名', // 表格表头显示文字
                        align: 'center', // 左右居中
                        valign: 'middle'// 上下居中
                    }, {
                        field: 'zuozhe',
                        title: '作者',
                        align: 'center',
                        valign: 'middle',
                    },
                    {
                        field: 'info',
                        title: "信息",
                        align: 'center',
                        valign: 'middle',
                    }, {
                        field: 'tagName',
                        title: "类型",
                        align: 'center',
                        valign: 'middle',
                    }, {
                        title: "操作",
                        align: 'center',
                        valign: 'middle',
                        formatter: function (value, row, index) {
                            return '<button class="btn btn-primary btn-sm" onclick="newsList.event.checkMusic(' + row.id + ',\'' + row.resaddr + '\',\'' + row.mvresaddr + '\'' + ')">审批</button>';
                        }
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

        checkMusic: function (musicId, musicaddr, mvaddr) {
            $('#picModal').modal('show');
            $("#showPic").show();
            $("#musicId").val(musicId);
            $("#audio")[0].src = "/static/users/music/songs/" + musicaddr;
            $("#video")[0].src = "/static/users/music/mvs/" + mvaddr;

        },
        saveTag: function () {
            var id = $("#musicId").val();
            var tagId = $("#tag").val();
            var info = $("#info").val();
            modals.confirm("确定审核通过吗？", function () {
                $.ajax({
                    type: "post",
                    url: getRootPath() + "/checkmusic",
                    dataType: "json",
                    data: {id: id, tagId: tagId, info: info},
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