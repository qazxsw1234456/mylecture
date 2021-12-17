while(true){
    var c = Math.floor(Math.random() * 3)+1;
    var a = prompt("[EXIT:100]가위(1) 바위(2) 보(3)");
    if ( c==1&&a=="1") {
    alert("draw"+"상대는" +"보입니다");
    } else if ( c==1&&a=="2"){
    alert("win"+"상대는" +"보입니다");
    } else if ( c==1&&a=="3"){
        alert("Defeat"+"상대는" +"보입니다");
    }else if ( c==2&&a=="1"){
        alert("Defeat"+"상대는" +"바위입니다");
    }else if ( c==2&&a=="2"){
        alert("draw"+"상대는" +"바위입니다");
    }else if ( c==2&&a=="3"){
        alert("win"+"상대는" +"바위입니다"); 
    }else if ( c==3&&a=="1"){
        alert("win"+"상대는" +"가위입니다");
    }else if ( c==3&&a=="2"){
        alert("Defeat"+"상대는" +"가위입니다"); 
    }else if ( c==3&&a=="3"){
        alert("darw"+"상대는" +"가위입니다");  
    }else if(a == "100"){
        alert("게임 종료" );
        break;
    }
    else
        alert("end"); 
    }
    