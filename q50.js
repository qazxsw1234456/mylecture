function gamer(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.info = function() {
      dw(name+"<hr>"+hp+"<hr>"+attack)}
}
    var elf = new gamer("궁수",500,50);
   
   
  
  
    function monster(name, hp, attack) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.info = function() {
            dw(name+"<hr>"+hp+"<hr>"+attack)}
      }
       var orc = new monster("괴물",600,30)

      
      
    elf.info();
    orc.info();