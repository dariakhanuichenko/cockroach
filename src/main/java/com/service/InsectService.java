package com.service;


import com.entity.Insect;
import com.repository.InsectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Service
public class InsectService {

    @Autowired
    private InsectRepository insectRepository;

    private static List<Insect> items=new ArrayList<>();

    static {
        items.add(Insect.builder()
        .type("cockroach")
                .x(1)
                .y(2)
                .gameId(1L)
                .build()
                );

        items.add(Insect.builder()
                .type("cockroach")
                .x(2)
                .y(2)
                .gameId(1L)
                .build()
        );

        items.add(Insect.builder()
                .type("cockroach")
                .x(0)
                .y(0)
                .gameId(1L)
                .build()
        );
    }

//    @PostConstruct
//    public void init(){
//        insectRepository.save(items);
//    }
}
