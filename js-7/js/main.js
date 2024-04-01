function f1(){
    show()
}

//无参无返回值
function show(){
    console.log("hello world!");
}

function f2(){
    message("疯狂星期四V我50!!!")  //实参
}

//有参无返回值    形参
function message(info){
    console.log("您收到了一条新消息:" + info);
}

function f3(){
    let s = add(19,5)
    console.log(s);
}

//有参有返回值
function add(a, b){
    let sum  = a + b
    return sum
}

function f4(){
    let a = 65531, b = 4
    let fh = '+'
    let result;
    result = suan_shu(a, b, fh)
    console.log(result);
}

//算术运算：+、-、*、/、%

function suan_shu(a,b,fu_hao){
    let r = 0
    switch(fu_hao){
        case '+':
            r = a + b
            break
        case '-':
            r = a - b
            break
        case '*':
            r = a * b
            break
        case '/':
            r = a / b
            break
        default:
            r = a % b
            break
    }
    return r
}