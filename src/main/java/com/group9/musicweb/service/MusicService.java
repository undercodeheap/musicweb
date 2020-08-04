package com.group9.musicweb.service;

import com.group9.musicweb.entity.Music;
import com.group9.musicweb.util.ResultRequest;
import com.group9.musicweb.util.TableData;

import java.util.List;
import java.util.Map;

public interface MusicService {
    void saveMusic(Music music);

    List<Music> searchMusic(String key);

    Music findMusicById(int id);

    List<Music> getallcheckedmusic();

    TableData getUnCheckedMusic(String name, Integer pageSize, Integer pageNumber);

    TableData getCheckedMusic(String name, Integer pageSize, Integer pageNumber);

    ResultRequest checkedPass(Integer tagId, Integer id, String info);

    List<Music> getALLcheckedmusicByTag_id(int tid);

    List<Music> getSortedMusic();

    /* 从列表中删除所有未被审核的音乐*/
    void deleteUncheckMusic(List<Music> list);

    /*从数据库中根据id删除指定的音乐 */
    ResultRequest deleteMusic(Integer id);
}
