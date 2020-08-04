package com.group9.musicweb.service;

import com.group9.musicweb.entity.User;
import com.group9.musicweb.entity.Userlog;
import com.group9.musicweb.util.TableData;

import java.util.List;

public interface UserlogService {
    void saveUserlog(Userlog userlog);

    //根据用户查询其所有登录日志
    List<Userlog> queryUserlog(int userid);

    /* 获取所有用户评论，以表格形式返回 */
    TableData getallUserlog(String name, Integer pageSize, Integer pageNumber);
}
