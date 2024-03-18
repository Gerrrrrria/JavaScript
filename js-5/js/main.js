function f1(){
    var score = prompt("请输入成绩：");
    var msg;
    var re = Math.floor( score / 10 );
    if(0 <= score && score <= 100){
        switch(re){
            case 0:
                msg = "不及格";
                break;
            case 1:
                msg = "不及格";
                break;
            case 2:
                msg = "不及格";
                break;
            case 3:
                msg = "不及格";
                break;
            case 4:
                msg = "不及格";
                break;
            case 5:
                msg = "不及格";
                break;    
            case 6:
                msg = "及格";
                break;
            case 7:
                msg = "一般";
                break;
            case 8:
                msg = "良好";
                break;
            case 9:
                msg = "优秀";
                break;
            case 10:
                msg = "满分！太棒了！";
                break;
        }
    }else{
        msg = "成绩输入有误！请重新输入！"
    }
    alert(msg);
}
