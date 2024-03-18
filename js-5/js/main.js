function f1(){
    var month = Number(prompt("请输入月份："));
    var msg;
        switch(month){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                msg = "大月";
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                msg = "小月";
                break;
            case 2:
                msg = "28天";
                break;
            default:
                msg = "输入有误！请重新输入！"
                
        }
       
    alert(msg);
}
