var provinces =[
  {name:'江西省',city:['宜春市','南昌市','赣州市']},
  {name:'湖北省',city:['武汉市','咸宁市','黄冈市']},
  {name:'湖南省',city:['长沙市','株洲市','岳阳市']}
]

var city = [
  {name:'宜春市',town:['袁州区','丰城市','樟树市','高安市']},
  {name:'南昌市',town:['南昌县','红谷滩区','新建区','青山湖区']}
]
function fillProvinceCityTown(){
  let sp = document.getElementById("province")
  let sc = document.getElementById("city")
  let st = document.getElementById("town")

  for(let i = 0; i <provinces.length; i++){
    let p = provinces[i].name
    let op = new Option(p,p)
    sp.options.add(op)
  }

  for(let i = 0; i <= provinces[0].city.length; i++){
    let c = provinces[0].city[i]
    let op = new Option(c,c)
    sc.options.add(op)
  }

  for(let i = 0; i <= city.length; i++){
    if(provinces[0].city[0] == city[i].name){
      for(let x = 0; x <= city.length; x++){
        let t = city[i].town[x]
        let op = new Option(t,t)
        st.options.add(op)
      }
    }
  }

}

function changeCity(sp){
  let sc = document.getElementById("city")
  let pn = sp.value
  for(let i = 0; i <provinces.length; i++){
    if(pn == provinces[i].name){
      let city = provinces[i].city 
      sc.options.length = 0
      for(let i = 0; i <= city.length; i++){
        let c = city[i]
        let op = new Option(c,c)
        sc.options.add(op)
      }
      break;
    }
  }
}

function changeTown(sc){
  let st = document.getElementById("town")
  let cn = sc.value
  for(let i = 0; i <city.length; i++){
    if(cn == city[i].name){
      let town = city[i].town
      st.options.length = 0 
      for(let i = 0; i <= town.length; i++){
        let t = town[i]
        let op = new Option(t,t)
        st.options.add(op)
      }
      break;
    }
  }
}

function confirm1(){
  let sp = document.getElementById("province")
  let p = sp.selectedIndex
  let sc = document.getElementById("city")
  let c = sc.selectedIndex
  let st = document.getElementById("town")
  let t = st.selectedIndex
  confirm("您的选择是"+sp[p].innerHTML+sc[c].innerHTML+st[t].innerHTML)
}