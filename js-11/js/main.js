function f1(chk_all){
  let ok = chk_all.checked

  let chks = document.getElementsByName("ck")

  for(let i = 0; i <= chks.length; i++){
    chks[i].checked = ok
  }
}

function f2(){
  let trs = document.getElementsByClassName('t')
  for(let i = 0; i<trs.length;i++){
    if(i % 2 != 0){
      trs[i].style.backgroundColor = 'rgb(255,255,85)'
    }
    else{
      trs[i].style.backgroundColor = '#44EEEE'
    }
  }
}