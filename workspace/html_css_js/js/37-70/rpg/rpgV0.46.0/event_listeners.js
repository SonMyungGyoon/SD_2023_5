/* 이벤트 리스너들 여기에 */

// 스페이스바가 눌리면 턴 실행
document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        turn();
    }

    console.log("키 코드 이거 눌림:"+event.code);

    // 상하좌우, 페이지업, 페이지다운 키 감지
    switch (event.code) {
        case 'ArrowUp':
          // 상 방향키 눌림
          move("북");
          console.log('Arrow Up is pressed.');
          break;
        case 'ArrowDown':
          // 하 방향키 눌림
          move("남");
          console.log('Arrow Down is pressed.');
          break;
        case 'ArrowLeft':
          // 좌 방향키 눌림
          move("서");
          console.log('Arrow Left is pressed.');
          break;
        case 'ArrowRight':
          // 우 방향키 눌림
          move("동");
          console.log('Arrow Right is pressed.');
          break;
        case 'PageUp':
          // 페이지 업 키 눌림
          move("위");
          console.log('Page Up is pressed.');
          break;
        case 'PageDown':
          // 페이지 다운 키 눌림
          move("밑");
          console.log('Page Down is pressed.');
          break;
        case 'KeyI':  /* 주의: i가 아님 */
          console.log('i 키 눌림');
          displayBagToggle();
          break;
      }    
});