/* 전역 상수 */
const REGEN_TURN_MOUSE = 30;    // 쥐 리젠(재생성) 턴 수 {밸런스}
const REGEN_TURN_WAVE = 100;    // 웨이브 리젠(몹 무리의 대량 생성) 턴 수 {밸런스}

/* 게임 오브젝트 창의 오브젝트 클릭 시 실행 */
function mobClick(gameObjectId){ // 임시로 몬스터 id 만 처리함
    if(currentMode == "전투"){ // 이미 전투 상태이면 return 하여 이후 처리가 안되도록 함
        console.log("이미 전투 중인 상태입니다.");
        return;
    }
    // 해당 몬스터와 전투 처리
    console.log("클릭 한 게임 오브젝트 id:"+gameObjectId);
    currentMode = "전투"; //현재 모드를 전투로 바꿈    
    // 전역 몬스터 배열에서 해당 아이디 몬스터를 찾아서
    for(var i=0;i<monsterArray.length;i++){
        if(monsterArray[i].id == gameObjectId){
            monsterArray[i].aggressionType = "H";   //  대상 몬스터를 적대적으로 바꿈
        }
    }
    turn(); // 턴 처리
}

/* 전역 몹 배열에서 죽은 몹 제거 */
function mobDeleteFromMobArray(dieMonster){
    // 전역 몹 배열에서 죽은 몹의 id 값과 일치하는 배열 index 구하기
    var findI = -1;
    for(var i=0;i<monsterArray.length;i++){
        if(monsterArray[i].id == dieMonster.id){
            findI = i;
        }
    }    
    if(findI != -1){    // findI 값이 -1 이 아니면. 즉, 죽은 몹이 전역 몹 배열중 몇번째에 있는지 인덱스 값을 찾았으면.
        // 코드 참고 : 지정한 위치에 있는 요소(n개)를 제거하는 방법 : splice('위치값n', '제거할 요소의 갯수')
        monsterArray.splice(findI,1);   // 전역 몹 배열에서 죽은 몹을 제거
    }
}
/* 쥐 추가 등장 */
function mobCreate(newMonster){
    var newMonsterId = monsterIdPrefix + monsterLastIdNumber;   // 몹 아이디 생성

    newMonster.id = newMonsterId;   // 아이디 부여

    monsterLastIdNumber++;  // 몹 아이디 증가
    // var newMonster = new Monster(newMonsterId,"쥐", 50, 5, 1005, "H", 200);  // 몹 생성
    monsterArray.push(newMonster);  // 몹 배열에 추가
}

/* 몹 웨이브 {밸런스} */
/*
    임시로
    1차, 2차 웨이브만 만듬
    1차는 100턴에
    2차는 200턴에 발생
*/
function mobWave(level){
    console.log("[몹웨이브]"+"[차수]:"+level);
    switch(level){
        case 1:
            //id는 일단 비우고 생성. (생성 함수에서 id 부여함)
            mobCreate(new Monster("","고양이", 300, 10, 1003, "H", 2000, 3000));
            mobCreate(new Monster("","고양이", 300, 10, 1004, "H", 2000, 3000));
            break;
        case 2:
            mobCreate(new Monster("","삵", 300, 20, 1002, "H", 4000, 6000));
            break;
        case 3:
            mobCreate(new Monster("","고양이", 300, 10, 1003, "H", 2000, 3000));
            mobCreate(new Monster("","고양이", 300, 10, 1004, "H", 2000, 3000));
            mobCreate(new Monster("","삵", 300, 20, 1002, "H", 4000, 6000));
            break;
        case 4:
            mobCreate(new Monster("","고양이", 300, 10, 1003, "H", 2000, 3000));
            mobCreate(new Monster("","고양이", 300, 10, 1003, "H", 2000, 3000));
            mobCreate(new Monster("","고양이", 300, 10, 1004, "H", 2000, 3000));
            mobCreate(new Monster("","고양이", 300, 10, 1004, "H", 2000, 3000));
            mobCreate(new Monster("","삵", 300, 20, 1002, "H", 4000, 6000));
            mobCreate(new Monster("","삵", 300, 20, 1002, "H", 4000, 6000));
            break;
    }
}

//몹 스스로 체력 회복 처리
//관련 속성이 있는 몹만 대상으로 함.
function mobSelfHeal(){
    //전체 몹 체크
    for(var i=0;i<monsterArray.length;i++){
        //조건 찾기
        if(monsterArray[i].attr != null && monsterArray[i].attr.selfHealing){
            var mob = monsterArray[i];
            //만피 아니면 계속 피 회복
            if(mob.currentHp<mob.maxHp){
                mob.currentHp += mob.attr.selfHealingPoint;   //{밸런스}
                //체력 오버 회복 시
                if(mob.currentHp > mob.maxHp){
                    mob.currentHp = mob.maxHp;  // 최대 체력으로 정정
                }
                console.log(`==== ${mob.name} 체력회복중 ${mob.currentHp}/${mob.maxHp}`);
            }
        }
    }

}

//몹 스스로 체력 회복 처리
//관련 속성이 있는 몹만 대상으로 함.
function mobMove() {
    //전체 몹 체크
    for (var i = 0; i < monsterArray.length; i++) {
        //조건 찾기
        //전투중이 아닌 몹만 대상으로 함
        if (monsterArray[i].attr != null && monsterArray[i].attr.movable && monsterArray[i].attr.ingBattle == false) {
            var mob = monsterArray[i];

            //예외처리
            //몹들 중 이동 가능한 몹의 경우 이 이동 체크 되기전에
            //유저가 방에 와서 몹과 마주친경우, 하필이면 그 턴이 이 몹의 이동 대기가 다 차서 딱 이동 하는 턴인 경우
            //이때 문제가 됨.

            //유저랑 딱 마주친경우
            // log(`==== 유저 : ${currentRoomId} , 왕쥐 : ${mob.location} `);
            if (currentRoomId == mob.location) {
                log("==== 몹 이사가려다가 플레이에게 딱걸림");
                return; // 아래 실행 이동 카운팅 처리 및 이동 못하게 처리함.
            }

            mob.attr.movableTurnRemain--;
            if (mob.attr.movableTurnRemain == 0) {    //이동까지 남은 턴이 0이 되면 이동시킴
                //랜덤 이동 처리
                mobMoveSelectPath(mob);
                mob.attr.movableTurnRemain = mob.attr.movableTurn;  //이동 대기 턴 초기화
            }
        }
    }
}

function mobMoveSelectPath(mob){
    //임시로 텔레포트하게 함. 일반 이동 처리가 더 어려워서.
    newLocation = getRandomArray(gRoomIds);
    log(`==== ${mob.name} 이 ${mob.location} 에서 ${newLocation} 으로 이동했습니다.`)
    mob.location = newLocation;
}