function f1(){
    var i = 1,sum = 0;
    while(i <= 100){
        if(i % 3 == 0 && i % 5 == 0){
        console.log("1~100能同时整除3和5的数为：" + i);
        }
        i++;
    }
 
}
