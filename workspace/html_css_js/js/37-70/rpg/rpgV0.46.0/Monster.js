function Monster(id,name,hp,attack,location,aggressionType,exp,bp,attr){ 
    /* 속성, 프로퍼티 */
    this.id = id;   // 몬스터 id
    this.name = name;  // 이름
    this.currentHp = hp;    // 현재체력
    this.maxHp = hp;    // 최대체력
    this.attack = attack; // 공격력
    this.location = location;  // 위치 (0: 미배치)
    this.aggressionType = aggressionType;  // 공격성 (F: Favorable 호의적인, H: Hostile 적대적인, N: None 없음<default> )
    this.exp = exp;   // 경험치
    this.attr = attr;   // 속성 (json형태)

    /*
        bp. Battle Point. 전투력. 모든 수치를 고려하여 하나의 수치화 한 것. 종합처리를 위한 값.
        todo : 나중에 ai 관련해서 시뮬등을 통해 밸런스 값 찾기 등등도 해보자
        
        지금은 일단 내가 대충 잡은 수치로 직접 부여.
    */
    this.bp = bp;


    this.money = 10;   // 돈
    /* 멤버함수, 멤버메소드 */
    this.info = function(){
        tvGameObject("["+this.name+"("+this.currentHp + "/" + this.maxHp+")]");
    }
    this.getInfo = function(){
        return "["+this.name+"("+this.currentHp + "/" + this.maxHp+")]";
    }

}