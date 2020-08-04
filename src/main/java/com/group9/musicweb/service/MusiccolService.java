package com.group9.musicweb.service;

import com.group9.musicweb.util.TableData;

public interface MusiccolService {
    TableData getallMusiccol(String name, Integer pageSize, Integer pageNumber);
}
