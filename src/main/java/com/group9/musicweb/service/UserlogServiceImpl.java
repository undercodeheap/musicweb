package com.group9.musicweb.service;

import com.group9.musicweb.Dao.UserlogRepository;
import com.group9.musicweb.entity.User;
import com.group9.musicweb.entity.Userlog;
import com.group9.musicweb.util.TableData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserlogServiceImpl implements UserlogService {
    @Autowired
    private UserlogRepository userlogRepository;

    @Override
    public List<Userlog> queryUserlog(int userid) {
        return userlogRepository.QueryUserlog(userid);
    }

    @Override
    public TableData getallUserlog(String name, Integer pageSize, Integer pageNumber) {
        List<Userlog> newsList;
        if (name != null && name != "") {
            newsList = userlogRepository.QueryallUserlog(name, pageNumber, pageSize);
        } else {
            newsList = userlogRepository.QueryallUserlog(pageNumber, pageSize);
        }
        long total = userlogRepository.queryCount(name);
        TableData data = new TableData(pageNumber, total, newsList);
        return data;
    }

    @Override
    public void saveUserlog(Userlog userlog) {
        userlogRepository.save(userlog);
    }
}
