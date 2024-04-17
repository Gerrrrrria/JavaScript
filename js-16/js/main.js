function showtime(){
    let now = new Date()
    let div = document.getElementById("my_div")
    div.innerHTML = now.toDateString() + "&nbsp" + now.toLocaleTimeString()
}

//每秒打印时间
window.setInterval("showtime()",1000)