package com.group9.musicweb.Dao;

import com.group9.musicweb.entity.Admin;
import com.group9.musicweb.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin,Integer> {

    default Admin findByNicknameAndPwd(String nickname, String pwd) {
        return null;
    }

}
