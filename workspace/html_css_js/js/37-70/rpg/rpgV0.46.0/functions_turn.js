/* 턴 처리 */
function turnMultipleTimes(n){
    for(var i=0;i<n;i++){
        turn();
    }
}

function turn() {
    //*주의* 턴마다 해야할 일들을 잘 정리해서 실행해야함

    //턴 할일: *.스스로 회복 가능한 몹들의 체력 회복
    mobSelfHeal();

    //턴 할일: *.스스로 이동 가능한 몹들의 이동
    mobMove();

    if (currentMode == "전투") {
        battleProcBattleTurn();
    } else {
        procNormalTurn();
    }
    turnCount++;
    displayCurrentTurn();   // 현재 턴 표시
    

    //todo 쥐 리젠 상수 턴 마다 쥐 추가 생성. 임시로 고정 위치에 생성
    if(turnCount % REGEN_TURN_MOUSE == 0){
        mobCreate(new Monster("","쥐", 50, 5, 1005, "H", 200)); //id는 일단 비우고 생성. (생성 함수에서 id 부여함)
    }
    if(turnCount % REGEN_TURN_WAVE == 0){
        mobWave(turnCount / REGEN_TURN_WAVE);
    }
}
/* 턴 처리 - 일반(비전투 상황 시의 턴 처리) */
function procNormalTurn() {
    roomCheckHostileMob();    /* 현재 방의 몬스터들의 처리 */
    roomCheck(); // 현재 방 체크 및 처리
    displayRoomInfo();
    displayCharactersInfo();    // 케릭터 정보 갱신
}