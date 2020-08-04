package com.group9.musicweb.service;

import com.group9.musicweb.entity.Tag;
import com.group9.musicweb.util.TableData;

import java.util.List;

public interface TagService {
    List<Tag> queryAllTag();

    /* 获取所有标签，以表格形式返回 */
    TableData getAllTag(String name, Integer pageSize, Integer pageNumber);
}
