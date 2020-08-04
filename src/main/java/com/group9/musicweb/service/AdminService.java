package com.group9.musicweb.service;

import com.group9.musicweb.entity.Admin;

public interface AdminService {
    Admin checkAdmin(String nickname, String pwd);
}
