window.onload = function(){
    let txtUser = document.getElementById('txtUser')
    let txtPassword = document.getElementById('txtPassword')
    let txtPassword2 = document.getElementById('txtPassword2')
    let txtPhone = document.getElementById('txtPhone')
    let txtCode = document.getElementById('txtCode')
    let spUser = document.getElementById('spUser')
    let spPassword = document.getElementById('spPassword')
    let spPassword2 = document.getElementById('spPassword2')
    let spPhone = document.getElementById('spPhone')
    let spCode = document.getElementById('spCode')
    
    
    txtUser.onblur = function(){
        if(this.value == ''){
            spUser.innerHTML = '用户名不能为空'
            spUser.style.color = 'red'
        } 
        else{
            spUser.style.color = 'green'
            spUser.innerHTML = '恭喜，用户名合法' 
        } 
    }
    
    txtPassword.onblur = function(){
        if(this.value.length >=8 && this.value.length <= 16){
            spPassword.innerHTML = '密码长度合法'
            spPassword.style.color = 'green'
        }
        else{
            spPassword.innerHTML = '密码长度非法'
            spPassword.style.color = 'red'
        }
    }
    txtPassword2.onblur = function(){
        if(this.value == txtPassword.value){
            spPassword2.innerHTML = '两次密码输入合法'
            spPassword2.style.color = 'green'
        }
        else{
            spPassword2.innerHTML = '两次密码输入不一致'
            spPassword2.style.color = 'red'
        }
    }

    txtPhone.onblur = function(){
        let zzs = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
        if(!zzs.test(this.value)){
            spPhone.innerHTML = '手机格式错误'
            spPhone.style.color = 'red'
        }
        else{
            spPhone.innerHTML = '手机格式正确'
            spPhone.style.color = 'green'
        }
    }

    txtCode.onblur = function(){
        let zzs = /^[1-9]\d{5}(?!\d)$/
        if(!zzs.test(this.value)){
            spCode.innerHTML = '邮政编码格式错误'
            spCode.style.color = 'red'
        }
        else{
            spCode.innerHTML = '邮政编码格式正确'
            spCode.style.color = 'green'
        }
    }

}