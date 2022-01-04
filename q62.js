var screenMessageBox;
var screenPlayerInfo;
var screenGameObject;
var itTurn;
var turnCount=0;

var orc = new monster("괴물", 600, 140, 0, 300);
var elf = new gamer("궁수", 500, 280, 0, 300);

window.onload = function () {
    screenMessageBox = document.getElementById("screenMessageBox");
    screenPlayerInfo = document.getElementById("screenPlayerInfo");
    screenGameObject = document.getElementById("screenGameObject");
    itTurn = document.getElementById("input_txt_turn");

    displayCharactersInfo();
    tv("전투 시작.\n")
    
    // var loop = true;
    // while (loop) {
    //     loop = procBattleTurn();
    // }
}
function turn(){
    procBattleTurn();
    turnCount++;
    itTurn.value = turnCount;   
    console.log("현재 턴:"+turnCount);
}

function displayCharactersInfo() {

    elf.info();
    orc.info();
    tv("\n");

}
function getRandomAttackValue(attack) {
    attack = attack + 1;
    var random = Math.floor(Math.random() * attack);
    return random;

}


function procBattleTurn() {
    var monsterDamage = getRandomAttackValue(orc.attack);
    var playerDamage = getRandomAttackValue(elf.attack);

    orc.kHp = orc.kHp - playerDamage;
    tv(elf.name + "가 " + orc.name + "에게 데미지를 " + playerDamage + " 입혔습니다.\n");
    elf.kHp = elf.kHp - monsterDamage;
    tv(orc.name + "가 " + elf.name + "에게 데미지를 " + monsterDamage + " 입혔습니다.\n");

    elf.hp = elf.hp - orc.attack
    orc.hp = orc.hp - elf.attack


    if (elf.kHp <= 0) {
        Endbttle();

        displayCharactersInfo();
        return false;

    } else if (orc.kHp <= 0) {
        goodEndbttle()
        displayCharactersInfo();
        return false;
    }

    else {
        displayCharactersInfo();
        return true;

    }
    function Endbttle() {

        tv("전투종료 궁수가 사망햇습니다.\n")


    }
    function goodEndbttle() {
        elf.cExp = elf.gExp + orc.gExp
        tv("괴물이,궁수에게 경험치100을주고 죽었습니다" + "돈500원을 흭득하셧습니다.\n")


    }
}









