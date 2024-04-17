function goto(){
    location = "../js-13/index.html"
}

//每秒打印时间
window.setTimeout("goto()",3000)


let i = 2

function daojishi(){
    let div = document.getElementById("my_div")
    div.innerHTML = i
    i--
}

window.setInterval("daojishi()",1000)
