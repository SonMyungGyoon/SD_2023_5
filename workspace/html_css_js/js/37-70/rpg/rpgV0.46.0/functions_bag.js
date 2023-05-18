/* 가방 아이템을 클릭 시 처리 */
function bagItemClick(id){
    console.log("가방 아이템 클릭됨 id:"+id);

    var item = bagGetBagItemById(id);
    
    //item의 타입에 따라 처리
    log(`가방에서 ${id} id 물건 사용`);
    let itemType = DB_ITEM.item[item.dbIndex].type;

    switch(itemType){
        case "물약":
            // 체력 회복 처리
            
            let hp = DB_ITEM.item[item.dbIndex].effect.hp;  //hp 회복량 가져오기
            
            elf.currentHp += hp;
            if(elf.maxHp < elf.currentHp){  // 회복량이 오버한 경우 최대 체력만큼만 회복처리
                elf.currentHp = elf.maxHp;
            }
            console.log("물약마심");
            tv("체력물약을 마셨습니다.\n");
            break;
    }    
    bagDeleteBagItemById(id);  // 가방 아이템 배열에서 id로 가방 아이템 객체를 하나 삭제하기
    displayBagItemList();   // 가방 갱신
    elf.info();    // 플레이어 정보 갱신
}

/* 가방 아이템 배열에서 id로 가방 아이템 객체를 하나 꺼내기 */
function bagGetBagItemById(id){
    for(var i=0;i<bagItemArray.length;i++){
        if(bagItemArray[i].id == id){
            return bagItemArray[i];
        }
    }
    return null;    // 못찾으면 null 리턴
}
/* 가방 아이템 배열에서 id로 가방 아이템 객체를 하나 삭제하기 */
function bagDeleteBagItemById(id){
    var findI = -1;
    for(var i=0;i<bagItemArray.length;i++){
        if(bagItemArray[i].id == id){
            findI = i;
        }
    }
    bagItemArray.splice(findI,1);   // 삭제
}

/* 바닥 아이템을 가방으로 옮기기 */
function fromGroundItemToBag(id){
    console.log("==== 가방에 챙기자"+id);
    //넘어온 id로 아이템 찾아서 넣어주기
    for(var i=0;i<groundItems.length;i++){ // 전역 변수 groundItems 순회
        if(groundItems[i].id == id){
            //바닥 상태 바꾸기
            groundItems[i].owner = "PB";  // 유저 가방으로 위치 상태 바꾸기
            groundItems[i].ownerId = 0;          // 방번호 없애기. todo 케릭터 id 부여 이후에는 바꿀 것.
            bagItemArray.push(groundItems[i]); //가방에 넣기
            //화면 갱신해야함
            //안그러면 중복 줍기가 가능해짐
            //템 복사 ㅇㅅㅇ;;
            displayCurrentRoomGroundItemsInfo();
        }
    }
}