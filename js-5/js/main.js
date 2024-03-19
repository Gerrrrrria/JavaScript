function f1(){
    var month = Number(prompt("请输入分数："));
    var msg;
        switch(month){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                msg = "三十一天";
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                msg = "三十天";
                break;
            case 2:
                msg = "二十八天";
                break;
            default:
                msg = "输入有误！请重新输入！"
                
        }
       
    alert(msg);
}
