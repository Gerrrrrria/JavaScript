window.onload = function(){
  let btn = document.getElementById("btn")
  btn.onclick = function(){
      let user = document.getElementById("user").value
      let pwd = document.getElementById("pwd").value

      if(user =="admin" && pwd =="123456"){
          alert("登陆成功！！！")
      }
      else{
          alert("用户名或密码错误")
      }
  }
}