package com.group9.musicweb.service;

import com.group9.musicweb.Dao.MusicRepository;
import com.group9.musicweb.entity.Music;
import com.group9.musicweb.util.ResultRequest;
import com.group9.musicweb.util.TableData;
import org.apache.commons.lang3.ObjectUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.UUID;

@Service
public class MusicServiceImpl implements MusicService {
    @Autowired
    private MusicRepository musicRepository;

    @Override
    public void saveMusic(Music music) {
        musicRepository.save(music);
    }

    @Override
    public List<Music> searchMusic(String key) {
        List<Music> l1 = musicRepository.searchLikeMusic(key);
        List<Music> l2 = musicRepository.findAllByZuozhe(key);
        l1.remove(l2);
        l1.addAll(l2);
        return l1;
    }

    @Override
    public Music findMusicById(int id) {
        return musicRepository.findMusicById(id);
    }

    @Override
    public List<Music> getallcheckedmusic() {
        return musicRepository.getALLcheckedmusic();
    }


    public TableData getUnCheckedMusic(String name, Integer pageSize, Integer pageNumber) {
        List<Music> newsList;
        if (name != null && name != "") {
            newsList = musicRepository.findUnCheckedMusicList(name, pageNumber, pageSize);
        } else {
            newsList = musicRepository.findUnCheckedMusicList(pageNumber, pageSize);
        }
        long total = musicRepository.queryUnCheckedCount(name);
        TableData data = new TableData(pageNumber, total, newsList);
        return data;
    }

    @Override
    public TableData getCheckedMusic(String name, Integer pageSize, Integer pageNumber) {
        List<Music> newsList;
        if (name != null && name != "") {
            newsList = musicRepository.findCheckedMusicList(name, pageNumber, pageSize);
        } else {
            newsList = musicRepository.findCheckedMusicList(pageNumber, pageSize);
        }
        long total = musicRepository.queryCheckedCount(name);
        TableData data = new TableData(pageNumber, total, newsList);
        return data;
    }

    @Override
    public ResultRequest checkedPass(Integer tagId, Integer id, String info) {
        ResultRequest result = new ResultRequest();
        try {
            Music music = musicRepository.findMusicById(id);
            music.setTag_id(tagId);
            music.setIscheckd(true);
            music.setInfo(info);
            musicRepository.save(music);
            result.setState(true);
            result.setMessage("审核成功！");
        } catch (Exception e) {
            result.setMessage("审核失败");
            result.setState(false);
        }
        return result;
    }

    @Override
    public List<Music> getALLcheckedmusicByTag_id(int tid) {
        return musicRepository.getALLcheckedmusicByTag_id(tid);
    }

    @Override
    public List<Music> getSortedMusic() {
        return musicRepository.getsortedMusicList();
    }

    @Override
    public void deleteUncheckMusic(List<Music> list) {
        list.removeIf(music -> !music.getIscheckd());
    }

    @Override
    public ResultRequest deleteMusic(Integer id) {
        ResultRequest result = new ResultRequest();
        try {
            System.out.println("id:asdasdasdasd");
            System.out.println(id);
            musicRepository.deleteById(id);
            result.setState(true);
            result.setMessage("删除成功！");
        } catch (Exception e) {
            System.out.println(e.getMessage());
            result.setMessage("删除失败");
            result.setState(false);
        }
        return result;
    }
}
