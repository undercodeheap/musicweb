package com.group9.musicweb.service;

import com.group9.musicweb.entity.Comment;
import com.group9.musicweb.util.TableData;
import org.springframework.stereotype.Service;

import java.util.List;


public interface CommentService {
    void saveComment(Comment comment);

    List<Comment> findCommentsByMusic_Id(int id);

    /* 获取所有评论，以表格形式返回 */
    TableData getallComment(String name, Integer pageSize, Integer pageNumber);
}
