while(true){
var c = Math.floor(Math.random() * 3)+1;
var a = prompt("[EXIT:-99]가위(1) 바위(2) 보(3)");
if ( c==a) {
alert("draw");
} else if ( c==1&&a==1){
alert("win");
} else if ( c==3&&a==1){
alert("Defeat");
} else if ( c==2&&a==2){
    alert("Defeat");
}else if ( c==1&&a==3){
    alert("Defeat"); 
}else if(player == -99){
    alert("게임 종료" );
    break;
}
else{
    alert("end");
}
}

    
    
