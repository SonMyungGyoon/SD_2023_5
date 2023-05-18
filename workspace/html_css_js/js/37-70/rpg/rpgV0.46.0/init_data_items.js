function loadDataGroundItems(){
    // 1번 아이템:
    // DB_ITEM.item[1]

/*
    owner
    아이템 배치 타입:
        N : 배치 안됨.
        PB : 플레이어 가방
        PE : 플레이어 착용
        G : 땅바닥. 주인없음.

    ownerId 
        : 땅바닥인 경우 방 번호
        : 몹인경우 몹id
*/    

    var items = [
        new GameItem(1,"G",1001),
        new GameItem(1,"G",1001),
        new GameItem(2,"G",1002),
        new GameItem(2,"G",1003),
    ];
    return items;
}

