var screenMessageBox; //screen_message_box
var screenGameObject; //screen_game_object
var screenPlayerInfo; //screen_player_info
var screenGameObjectNew; //screen_game_object_new
var screenGameObjectNpc; //screen_game_object_npcs
var screenGameObjectGroundItems; //screen_game_object_ground_items
var divCommands; //div_commands
var divExp; //div_exp
var divUserInfoBot; //div_user_info_bot

var elf = new Character("엠피스", 200, 15); // 플레이어 케릭터 생성(초기화) {밸런스}

var turnCount = 1;
var itTurn; // 현재 턴 수를 표시하는 input text 변수
var currentMode = "대기"; // 현재 플레이 상태를 표시하는 변수 (대기, 전투)
var currentRoomId = 1000;   // 현재 플레이어가 위치한 방 번호. *주의* 케릭터 클래스의 멤버 변수가 아닌 전역변수임. todo 나중에 정리...
var bagItemArray = new Array();  // 가방에 있는 아이템 리스트 배열
/* 방 객체를 배열에 넣음. 방 정보 로딩 */
var roomArray = loadDataFirstRooms();
var gRoomIds = getRoomIds();

/* 몬스터 배치 {밸런스} */
var monsterArray = loadDataFirstMonsters(); // 처음에 맵에 배치되는 몬스터를 생성하고 그 리스트를 배열 형태로 가져옴

var monsterIdPrefix = "M-";
var monsterLastIdNumber = 10;
/* Npc 배치 */
var npcArray = [
    new Npc("N-1","룰루", 100, 1, 1009, "F"),   // 여관주인 "룰루"
]
var npcIdPrefix = "N-";
var npcLastIdNumber = 2;

/*
    todo:
    바닥 item 배치 라기 보단 게임 내 모든 아이템을 관리하게 해야함 
    확장하려면
*/
//test
log(DB_ITEM.item[1].name);

/* 바닥 item 배치 */
var groundItems = loadDataGroundItems();
// var groundItems = [
//     new GameItem("체력 회복 물약(HP50)", "체력물약", 50, "G", 1001),
//     new GameItem("체력 회복 물약(HP50)", "체력물약", 50, "G", 1001),
// ]

/* 가방에 기본 아이템 추가 */
//처음에 그냥 빈털털이로..
// bagItemArray.push(
//     // new BagItem("B-1", "체력 회복 물약(HP50)", "체력물약", 50),
//     // new BagItem("B-2", "체력 회복 물약(HP100)", "체력물약", 100)
//     new GameItem("체력 회복 물약(HP50)", "체력물약", 50, "PB", 0),
//     new GameItem("체력 회복 물약(HP100)", "체력물약", 100, "PB", 0)
// );

window.onload = function () {
    screenMessageBox = document.getElementById("screen_message_box");
    screenGameObject = document.getElementById("screen_game_object");
    screenPlayerInfo = document.getElementById("screen_player_info");
    itTurn = document.getElementById("input_txt_turn");
    screenGameObjectNew = document.getElementById("screen_game_object_new");
    divExp = document.getElementById("div_exp");
    screenGameObjectNpc = document.getElementById("screen_game_object_npcs");
    screenGameObjectGroundItems = document.getElementById("screen_game_object_ground_items");
    divCommands = document.getElementById("div_commands");
    divUserInfoBot = document.getElementById("div_user_info_bot");
    
    displayCharactersInfo();
    displayRoomInfo();
    displayCommands(roomGetCurrentRoom());
}
