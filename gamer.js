

function gamer(name, hp, attack,cExp,hExp) {
    this.name = name;
    this.kHp = hp;
    this.maxHp = hp;
    this.attack = attack;
    this.cExp = cExp;
    this.hExp = hExp;
    this.gExp = 0;
   

    this.info = function () {
        
        tvscreenPlayerInfo("["+this.name +" 체력("+ this.kHp + "/" + this.maxHp+")경험치("+ this.cExp+ "/" + this.hExp+")]");
        
    }
}


