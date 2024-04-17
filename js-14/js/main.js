window.onload = function(){
  let btn = document.getElementById("btn")
  btn.onclick = function(){
      let user = document.getElementById("user").value
      let pwd = document.getElementById("pwd").value

      if(user =="admin" && pwd =="123456"){
          location="../js-13/index.html"
      }
      else{
          alert("用户名或密码错误")
      }
      
  }
  
  document.getElementById('btn2').onclick = function(){
    history.go(-1)//-1后退，1前进 == history.back()
  }
}