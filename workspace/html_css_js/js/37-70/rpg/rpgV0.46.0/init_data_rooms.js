function loadDataFirstRooms(){
    var rooms = [
        new Room("연습장 입구","연습장으로 들어가는 입구다.",1000,1001,1007,0,0,0,0) ,
        new Room("연습장 서쪽","연습장 서쪽이다.",1001,1002,1000,0,0,0,0) ,
        new Room("연습장 중앙","연습장 중앙이다.",1002,0,1001,1004,1003,1005,1006),
        new Room("연습장 북쪽","연습장 북쪽이다.",1003,0,0,1002,0,0,0),
        new Room("연습장 남쪽","연습장 남쪽이다.",1004,0,0,0,1002,0,0),
        new Room("연습장 누각","연습장 누각이다.",1005,0,0,0,0,0,1002),
        new Room("연습장 지하","연습장 지하이다.",1006,0,0,0,0,1002,0),
        new Room("연습장 가는길","연습장으로 통하는 길이다. 앞에 연습장 입구가 보인다.",1007,1000,1008,0,0,0,0),
        new Room("저잣거리 남쪽","저잣거리의 남쪽이다. 서쪽에 여관이 보인다.",1008,1007,1009,0,0,0,0),
        new Room("여관","저잣거리에 위치한 여관이다. 작고 오래되어 보이지만 잠시 쉬기에는 문제 없을 듯 하다."
            ,1009,1008,0,0,0,0,0)
    ];
    return rooms;
}

