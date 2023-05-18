/* 
    공통 함수만 여기에 
*/

/* 1~n 까지의 랜덤값 리턴 */
function dice(n){
    return Math.floor(Math.random()*n+1);
}

/* 로그 - 콘솔 */
function log(s){
    console.log(s);
}

/* 배열 중 하나를 랜덤하게 꺼내서 리턴 */
function getRandomArray(ar){
    log(ar);
    log(ar.length);
    let l = ar.length;
    return ar[dice(l)-1];
}
