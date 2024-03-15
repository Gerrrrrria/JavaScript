function f1(){
    let score = Number(prompt("请输入分数"))
    if(score < 60){
        alert("不及格")
    }
    else if(score <= 69){
        alert("及格")
    }
    else if(score <= 79){
        alert("一般")
    }
    else if(score <= 89){
        alert("良好")
    }
    else{
        alert("优秀")
    }
}