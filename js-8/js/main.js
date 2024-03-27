function f1(){
    let ban_ji = new Array(5) //初始长度
    
    ban_ji[0] = '张三'
    ban_ji[1] = '李四'
    ban_ji[2] = '王武'
    ban_ji[3] = '秦始皇'
    ban_ji[4] = '汉武帝'
    ban_ji[5] = '成吉思汗'  //数组自动扩容

    console.log(ban_ji.length) //查看数组的当前长度            
}
function f2(){
    let banji = ['秦始皇','汉高祖','汉武帝','唐太宗']
    
    for(let i=0;i<banji.length;i++){
        console.log(banji[i]);
    }

}
function f3(){
    //数组存放若干成绩，然后计算总分和平均分
    let score = [88,78,67,56,47,90];
    let sum = 0;
    let avg;
    for(let i=0;i<score.length;i++){
        sum += score[i];
        avg = sum / i;
    }
    console.log("总分为"+sum);
    console.log("平均分为"+avg);
}