function f1(){  // 年月日 时分秒
    let today = new Date(2024,4,1)    //2024年4月1日 0点  2024/04/01      
    let now = new Date( )  //此时此刻
    let year = now.getFullYear()
    let month = now.getMonth()
    let date = now.getDate() //当月的第几天
    let h = now.getHours()
    let m = now.getMinutes()
    let s = now.getSeconds()
    let div = document.getElementById("my_div1")
    div.innerHTML =  year+"年"+month+"月"+date+"日"+h+"时"+m+"分"+s+"秒"           
}
function f2(){
    let div = document.getElementById("my_div2")
            let money = 100
            let n = 1
            let hb = 0
            div.innerHTML = ''
            while(n<=4){
                hb = Math.ceil(Math.random()*money)
                if(hb  < money/2  ){
                    money -= hb //红包余额变小
                    div.innerHTML += '第'+n+'个红包：'+hb+'元<p>'  
                    n++  
                }
            }
            div.innerHTML += '第'+n+'个红包：'+money+'元<p>'
}