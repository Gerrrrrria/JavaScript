function f1(){
    let today = new Date(2024,4,1);
    let now = new Date()
    let year = now.getFullYear();
    let month = now.getMonth();
    let date = now.getDate();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let div = document.getElementById("my_div")
    div.innerHTML = year + "年" + month + "月" + date + "日" + h + "时"  + m + "分" + s +"秒"
}
function f2(){
    
}