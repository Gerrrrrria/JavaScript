let db = [
    {id:"1",name:'刘备',sex:'男',home:'涿郡涿县'},
    {id:"2",name:'曹操',sex:'男',home:'沛国谯县'},
    {id:"3",name:'孙权',sex:'男',home:'吴郡富春县'}
]

window.onload = function(){
    let ul = document.getElementById('my_ul')
    let li = document.getElementById('zy')
    let btn = document.getElementById('btn')
    let btn2 = document.getElementById('btn2')
    let tab = document.getElementById('tab')

    btn.onclick = function(){
        let name = document.getElementById("txtname").value

        let li = document.createElement('li')
        li.innerHTML = name
        li.style.color = 'red'
        ul.appendChild(li)
    }

    btn2.onclick = function(){
        for(let i=0; i<=db.length; i++){
            let tr = document.createElement('tr')
            let td1 = document.createElement('td')
            let td2 = document.createElement('td')
            let td3 = document.createElement('td')
            let td4 = document.createElement('td')

            td1.innerHTML = db[i].id
            td2.innerHTML = db[i].name
            td3.innerHTML = db[i].sex
            td4.innerHTML = db[i].home

            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)

            tab.appendChild(tr)
        }
    }
}