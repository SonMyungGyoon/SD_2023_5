/* 클래스 - 모든 게임 오브젝트 아이템 */
let G_GAME_ITEM_ID = 1;

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
function GameItem(dbIndex,owner,ownerId) {
    G_GAME_ITEM_ID++; //1증가 후 부여
    this.id = G_GAME_ITEM_ID;
    this.dbIndex = dbIndex;
    this.owner = owner;     // 아이템 배치 타입. 위 표 참고.
    this.ownerId = ownerId;
}