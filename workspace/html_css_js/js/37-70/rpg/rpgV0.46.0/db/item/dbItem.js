/*
    arrangeType
    아이템 배치 타입:
        N : 배치 안됨.
        PB : 플레이어 가방
        PE : 플레이어 착용
        G : 땅바닥

    roomNo : 땅바닥인 경우 방 번호
*/
// function GameItem(itemName, type, effectPoint, arrangeType = "N", roomId=0) {
//     GAME_ITEM_ID++; //1증가 후 부여
//     this.id = GAME_ITEM_ID;
//     this.itemName = itemName;
//     /* 타입 */
//     /*
//     체력물약
    
//     .. todo 추가예정
//     */
//     this.type = type;       // 타입 :
//     this.effectPoint = effectPoint; // 영향 포인트. ex. 물약이면 회복량
//     this.arrangeType = arrangeType;
//     this.roomId = roomId;
// }

// new GameItem("체력 회복 물약(HP50)", "체력물약", 50, "G", 1001),

const DB_ITEM = {
    item:[
        {}, // index 맞출려고 일부러 빈거 넣음.
        {
            id:1,
            type:'물약',
            name:'체력물약(초소형)',
            effect:{
                hp:50,
            },
            value:100,
            weight:100,
        },
        {
            id:2,
            type:'물약',
            name:'체력물약(소형)',
            effect:{
                hp:100,
            },
            value:300,
            weight:150,
        }
        
    ]
};