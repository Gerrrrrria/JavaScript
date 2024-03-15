function f1(){
    var sex = prompt("请输入性别：");
    var age = prompt("请输入年龄：");
    var height = prompt("请输入身高：（M）");
    var weight = prompt("请输入体重：（KG）");
    var BMI = weight / (height * height);
    var sexual = (sex == "男") ? 1 : 0;
    var BFR = (1.2 * BMI + 0.23 * age - 5.4 - 10.8 * sexual).toFixed(2);
    var msg;
    if (sexual == 1){
        if (BFR >= 15 && BFR <= 18)
            msg = "正常";
        else
            msg = "不正常";
    } else{
        if(BFR >= 25 && BFR <= 28)
            msg = "正常";
        else
            msg = "不正常";
    }
    alert("您的体脂率为" + BFR +"%," + "属于" + msg + "。")
}

function f2(){
    var rmb = prompt("请输入要兑换的人民币");
    var msg = rmb * 0.1391;
    alert(rmb +"元人民币可以兑换" + msg + "美元")
}