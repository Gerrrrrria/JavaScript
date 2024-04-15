window.onload = function(){
  let tab = document.getElementById('tab')
      for(let i = 0;i < tab.rows.length;i++){
          tab.rows[i].onmouseover = function(){
              this.style.backgroundColor = "yellow"
              this.style.cursor = "pointer"
          }
          tab.rows[i].onmouseout = function(){
              this.style.backgroundColor = "white"
          }
      }

}