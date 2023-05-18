/* 이동 처리 */
function move(direction) {  // direction : 방향 값 ex. '동','밑' 등
    var nowRoom = roomGetCurrentRoom()
    var connectionRoomId = nowRoom.getIdByDirection(direction);
    if(connectionRoomId == 0){  // 갈수 없는 방향이면 ( 값 0 ) 갈수 없음 출력 후 함수를 빠져나감 ( return; )
        tv("갈수 없음\n");
        return;
    } else {
        // *주의* 로직 상 주의. 갈수 있는 방향이면 이때 만약 전투중이 상황이면 도망 체크도 해야됨.

        // 전투 중 이동 시 처리
        if (currentMode == "전투") {
            //도망 시 확률 처리
            var r = dice(100);
            //1. 도망에 성공하면
            //- 성공메세지출력
            if (r > 50) {   // {밸런스} 도망확률
                tv("도망치는데 성공했습니다.\n");
            } else {
                //2. 도망에 실패하면
                //- 실패 메세지 출력
                tv("도망치는데 실패했습니다.\n");
                //- 한턴 진행
                turn();
                return;
            }

            currentMode = "대기";   // 대기 상태로 바꿈

            //유저가 도망 시 해당 몹의 상태를 다시 비전투로 바꿈.
            //전체 몹 체크
            for (var i = 0; i < monsterArray.length; i++) {
                //속성json을 가진 몹이고
                //이동 가능한 몹이면
                if (monsterArray[i].attr != null && monsterArray[i].attr.movable) {
                    monsterArray[i].attr.ingBattle = false;
                }
            }
        }        

        currentRoomId = connectionRoomId;   // 이동 처리(현재 방 위치를 연결된<이동하려던>방으로 바꿈)
        console.log("현재 방번호:"+currentRoomId);
    }

    switch (direction) {
        case "동":
            tv("동쪽으로 이동했습니다.\n");
            break;
        case "서":
            tv("서쪽으로 이동했습니다.\n");
            break;
        case "남":
            tv("남쪽으로 이동했습니다.\n");
            break;
        case "북":
            tv("북쪽으로 이동했습니다.\n");
            break;
        case "위":
            tv("위쪽으로 이동했습니다.\n");
            break;
        case "밑":
            tv("아래쪽으로 이동했습니다.\n");
            break;
    }
    /* 이동 후 할일들 */
    turn();             /* 턴 진행 */
}