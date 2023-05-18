function loadDataFirstMonsters(){
    let monsters = [
        // 테스트하기 쉽게 적대몹으로 바꿨음
        new Monster("001","허수아비", 100, 1, 1001, "H", 100, 100),    
        new Monster("002","허수아비", 100, 1, 1002, "H", 100, 100),    
        new Monster("003","허수아비", 100, 1, 1003, "H", 100, 100),    
        new Monster("004","허수아비", 100, 1, 1004, "H", 100, 100),    
        // new Monster("001","허수아비", 100, 1, 1001, "N", 100, 100),    
        // new Monster("002","허수아비", 100, 1, 1002, "N", 100, 100),    
        // new Monster("003","허수아비", 100, 1, 1003, "N", 100, 100),    
        // new Monster("004","허수아비", 100, 1, 1004, "N", 100, 100),    
        new Monster("005","쥐", 50, 5, 1006, "H", 200, 250),
        new Monster("006","쥐", 50, 5, 1005, "H", 200, 250),
        new Monster("007","왕쥐", 150, 15, 1006, "H", 150*10, 150*15,
            {
                movable:true,       // 스스로 이동하는 몹인지 여부. todo : 아직 적용은 안함

                //전투 중에는 이동을 제한해야 됨
                movableTurn:10,          // 스스로 이동 : 몇턴 후에 이동하는지.
                movableTurnRemain:10,    // 스스로 이동 : 몇턴 후에 이동하는지.

                selfHealing:true,   // 스스로 체력 회복을 하는지 여부.
                selfHealingPoint:1, // 이 수치만 큼 턴당 회복
                ingBattle:false,    // 몹이 전투중인지 아닌지 여부
            }
        )
    ]
    return monsters;
}

