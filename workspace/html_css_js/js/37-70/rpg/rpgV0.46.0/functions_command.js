/* 명령 버튼 - 기본 배치 */

/* 
    현재 방, 현재 상태에 따라 명령 버튼의 배치를 다르게 하여
    상황에 맞는 처리를 하게 함.

    명령어 html 배치만 리턴함

    ex. x를 눌러 조의를 표함
 */
function getHtmlCommandButtons(room){
    var html;
    //상황별로 분기

    //1. 기본 턴진행 버튼
    html = "<input type='button' value='턴 진행(Space)' onclick='turn();'>&nbsp;";
    //2. 기본 방향버튼
    html+= "<input type='button' value='동(▶)' onclick='move(\"동\");'>&nbsp;"
    + "<input type='button' value='서(◀)' onclick='move(\"서\");'>&nbsp;"
    + "<input type='button' value='남(🔽)' onclick='move(\"남\");'>&nbsp;"
    + "<input type='button' value='북(🔼)' onclick='move(\"북\");'>&nbsp;"
    + "<input type='button' value='위(pageup⏫)' onclick='move(\"위\");'>&nbsp;"
    + "<input type='button' value='밑(pagedown⏬)' onclick='move(\"밑\");'>&nbsp;";

    //3. 현재 방에 따른 명령 버튼 추가
    switch(room.roomName){
        case "여관":
            html += "<input type='button' value='숙박(10턴)' onclick='innSleep();'>&nbsp;";      
            break;
    }

    return html;
}