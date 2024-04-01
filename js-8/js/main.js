function f1(){
    let ban_ji = new Array(5) //初始长度
    
    ban_ji[0] = '肯德基'
    ban_ji[1] = '麦当劳'
    ban_ji[2] = '德克士'
    ban_ji[3] = '必胜客'
    ban_ji[4] = '星巴克'
    ban_ji[5] = '茶百道'  //数组自动扩容

    console.log(ban_ji.length) //查看数组的当前长度            
}
function f2(){
    let banji = ['斯大林','罗斯福','丘吉尔','李德胜']
    
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
    }
    avg = sum / score.length;
    console.log("总分为"+sum);
    console.log("平均分为"+avg);
}