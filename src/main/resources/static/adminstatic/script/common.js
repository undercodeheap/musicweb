/**
 * 公共js，用来放公用的js
 */
/**
 * 获取根目录路径
 */
function getRootPath() {
    var curWwwPath = window.document.location.href;
    var pathName = window.document.location.pathname;
    var pos = curWwwPath.indexOf(pathName);
    var localhostPaht = curWwwPath.substring(0,pos);
    var projectName = pathName.substring(0,pathName.substr(1).indexOf('/')+1);
    return (localhostPaht+projectName);
}

//判断不为空的方法
function isNotNull(str) {
    if (str == null || str == "" || str == undefined) {
        return false;
    } else {
        return true;
    }
}
//关闭窗口的方法
function closeWin() {
    window.opener=null; window.open('','_self'); window.close();
}
