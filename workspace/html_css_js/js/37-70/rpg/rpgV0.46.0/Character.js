/* 
    플레이어 케릭터 클래스 
    
    name 이름
    hp 현재체력
    attack 공격력 (0~공격력<랜덤> 만큼 데미지를 줌)
*/
/* [상수] */
CHARACTER_MAX_LEVEL = 10;

function Character(name,hp,attack){ 
    /* 속성, 프로퍼티 */
    this.name = name;  // 이름
    this.currentHp = hp;    // 현재체력
    this.maxHp = hp;    // 최대체력
    this.attack = attack; // 공격력
    this.exp = 0;   // 경험치
    this.lv = 1;    // 레벨    
    this.money = 0; // 돈

    this.bp = this.maxHp * this.attack; // bp {밸런스}

    /*
        경험치 표

        todo 여기말고 다른데다 해서 참조하자
        
    */
    this.nextLevels = {
        "levels":
            [
                {
                    "lv": 2,
                    "reqExp": 1000,
                    "skillPoint": 1
                }
                ,
                {
                    "lv": 3,
                    "reqExp": 3000,
                    "skillPoint": 1
                }
                ,
                {
                    "lv": 4,
                    "reqExp": 6000,
                    "skillPoint": 1
                }
                ,
                {
                    "lv": 5,
                    "reqExp": 10000,
                    "skillPoint": 1
                }
                ,
                {
                    "lv": 6,
                    "reqExp": 16000,
                    "skillPoint": 1
                }
                ,
                {
                    "lv": 7,
                    "reqExp": 24000,
                    "skillPoint": 1
                }
                ,
                {
                    "lv": 8,
                    "reqExp": 32000,
                    "skillPoint": 1
                }
                ,
                {
                    "lv": 9,
                    "reqExp": 40000,
                    "skillPoint": 1
                }
                ,
                {
                    "lv": 10,
                    "reqExp": 50000,
                    "skillPoint": 1
                }
            ]
    };

    /* 멤버함수, 멤버메소드 */
    this.info = function(){ // 플레이어 정보 창에 플레이어 정보 출력하는 함수. ex. [엠피스(70/100)]<exp: 100>
        tvPlayerInfo("["+this.name+"] <lv:"+ this.lv + "> ❤:"+this.currentHp + "/" + this.maxHp+" 🗡:"+ this.attack + " 임시bp:" + this.bp);
        divInnerHtmlPlayerExp(this.lv, this.exp);
        span_gold.innerHTML = this.money+"원";  // gold 표시
    }
    /* 현재 레벨의 필요 경험치 리턴. {밸런스}  */ 
    this.getNextLevelRequiredExp = function(){
        return this.nextLevels.levels[this.lv-1].reqExp;
    }
}